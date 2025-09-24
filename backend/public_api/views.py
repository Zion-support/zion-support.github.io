import secrets
from hashlib import sha256
from rest_framework.decorators import api_view, permission_classes, authentication_classes, throttle_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from .models import ApiKey
from .authentication import ApiKeyAuthentication
from .throttling import RedisDailyThrottle

@api_view(['POST'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def generate_key(request):
    if not request.user or not request.user.is_authenticated:
        return Response({'detail': 'Authentication credentials were not provided.'}, status=status.HTTP_401_UNAUTHORIZED)
    name = request.data.get('name', '')
    prefix, secret = ApiKey.generate_key()
    hashed = ApiKey.hash_secret(secret)
    ApiKey.objects.create(user=request.user, name=name, prefix=prefix, hashed_key=hashed)
    return Response({'key': f"{prefix}.{secret}", 'prefix': prefix, 'name': name}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def revoke_key(request):
    if not request.user or not request.user.is_authenticated:
        return Response({'detail': 'Authentication credentials were not provided.'}, status=status.HTTP_401_UNAUTHORIZED)
    prefix = request.data.get('prefix')
    if not prefix:
        return Response({'error': 'Prefix is required.'}, status=status.HTTP_400_BAD_REQUEST)
    updated = ApiKey.objects.filter(user=request.user, prefix=prefix).update(revoked=True)
    if updated == 0:
        return Response({'message': 'API key not found or not owned by user.'})
    return Response({'message': 'API key revoked successfully.'})

@api_view(['GET'])
def protected_endpoint(request):
    # Perform manual API key auth to return 401 on failure instead of 403
    authenticator = ApiKeyAuthentication()
    try:
        user_auth = authenticator.authenticate(request)
    except Exception as e:
        return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
    if not user_auth:
        return Response({'detail': 'Authentication credentials were not provided.'}, status=status.HTTP_401_UNAUTHORIZED)
    user, _ = user_auth
    request.user = user
    return Response({'detail': 'success'})


@login_required
def developer_portal(request):
    context = {}
    if request.method == 'POST' and 'generate' in request.POST:
        prefix = secrets.token_hex(4)
        full_key = prefix + secrets.token_hex(16)
        hashed = sha256(full_key.encode()).hexdigest()
        ApiKey.objects.create(user=request.user, prefix=prefix, hashed_key=hashed)
        context['new_key'] = full_key
    if request.method == 'POST' and 'revoke' in request.POST:
        pref = request.POST.get('prefix')
        ApiKey.objects.filter(user=request.user, prefix=pref).update(revoked=True)
    context['keys'] = ApiKey.objects.filter(user=request.user, revoked=False)
    return render(request, 'developer_portal.html', context)
