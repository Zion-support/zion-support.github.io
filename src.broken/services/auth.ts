import { apiClient } from '@/utils/apiClient';

export async function register(name: string, email: string, password: string) {
  const res = await apiClient('/api/auth/register', {
    method: 'POST',
    headers: {
<<<<<<< HEAD
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
=======
      'Content-Type': 'application/json'},
    body: JSON.stringify({ name, email, password })});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  const data = await res.json().catch(() => ({}));
  return { res, data };
}
