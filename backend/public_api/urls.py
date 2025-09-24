from django.urls import path
from . import views

urlpatterns = [
    path('generate/', views.generate_key, name='api_generate_key'),
    path('revoke/', views.revoke_key, name='api_revoke_key'),
    path('ping/', views.protected_endpoint, name='api_protected_endpoint'),
    path('developer/', views.developer_portal, name='developer_portal'),
]
