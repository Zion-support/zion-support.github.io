from hashlib import sha256
from django.utils.translation import gettext_lazy as _
from rest_framework.authentication import BaseAuthentication
from rest_framework import exceptions
from .models import ApiKey

class ApiKeyAuthentication(BaseAuthentication):
    keyword = 'Api-Key'

    def authenticate(self, request):
        x_api_key = request.headers.get('X-API-KEY')
        auth_header = request.headers.get('Authorization')
        # Prefer explicit header
        raw = x_api_key or auth_header
        if not raw:
            return None
        if auth_header and not auth_header.startswith(self.keyword + ' '):
            # Different auth scheme; do not attempt
            return None
        if raw.startswith(self.keyword + ' '):
            raw = raw[len(self.keyword) + 1:]
        # Expect format prefix.secret
        if '.' not in raw:
            # If scheme provided but no key, raise; otherwise None
            raise exceptions.AuthenticationFailed(_('Invalid API key format.'))
        prefix, secret = raw.split('.', 1)
        try:
            api_key = ApiKey.objects.get(prefix=prefix)
        except ApiKey.DoesNotExist:
            raise exceptions.AuthenticationFailed(_('Invalid API key.'))
        if api_key.revoked:
            raise exceptions.AuthenticationFailed(_('API key revoked.'))
        if sha256(secret.encode()).hexdigest() != api_key.hashed_key:
            raise exceptions.AuthenticationFailed(_('Invalid API key.'))
        return (api_key.user, None)
