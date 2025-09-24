from django.db import models
from django.contrib.auth import get_user_model
import secrets
from hashlib import sha256

class ApiKey(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    name = models.CharField(max_length=120, blank=True, default='')
    prefix = models.CharField(max_length=8, unique=True)
    hashed_key = models.CharField(max_length=64)
    rate_limit = models.IntegerField(default=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    revoked = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.prefix} for {self.user}" 

    @classmethod
    def generate_key(cls):
        prefix = secrets.token_hex(4)
        secret = secrets.token_urlsafe(32)
        return prefix, secret

    @staticmethod
    def hash_secret(secret: str) -> str:
        return sha256(secret.encode()).hexdigest()

    # Default app label inferred from app structure

