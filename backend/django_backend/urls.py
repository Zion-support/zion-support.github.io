from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.permissions import AllowAny

schema_view = get_schema_view(
    openapi.Info(title="Public API", default_version='v1'),
    public=True,
    permission_classes=[AllowAny],
)

urlpatterns = [
    path('auth/', include('authentication.urls')),
    path('api/', include('public_api.urls')),
    path('api/market/', include('categories_app.urls')), # Prefixing with 'market' to group marketplace related APIs
    path('api/governance/', include('governance.urls')),
    path('admin/ipo-portal/', include('ipo_portal.urls')), # App's own features like 2FA setup

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='swagger-ui'),
]
