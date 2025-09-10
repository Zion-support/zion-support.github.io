from django.urls import path, include

urlpatterns = [
    # Custom login for IPO portal users, potentially overriding admin login if LOGIN_URL is set
    path('admin/ipo-login/', ipo_views.IPOLoginView.as_view(), name='ipo_admin_login'),

    # Standard Django admin URLs (if you want to keep them separate or for other purposes)
    # path('admin/', admin.site.urls), # This would typically include the original admin:login

    # App-specific URLs
    path('auth/', include('authentication.urls')), # Assuming this is for other auth parts like password reset
    path('api/', include('public_api.urls')),
    path('api/market/', include('categories_app.urls')), # Prefixing with 'market' to group marketplace related APIs
    path('api/governance/', include('governance.urls')),
    path('admin/ipo-portal/', include('ipo_portal.urls')), # App's own features like 2FA setup

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='swagger-ui'),
]
