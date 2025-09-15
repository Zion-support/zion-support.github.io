import { apiClient } from '@/utils/apiClient';

export async function register(name: string, email: string, password: string) {
  const res = await apiClient('/api/auth/register', {
    method: 'POST',
    headers: {
<<<<<<< HEAD
      'Content-Type': 'application/json'},
    body: JSON.stringify({ name, email, password })});
=======
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
>>>>>>> origin/auto/autonomy-17186719616
  const data = await res.json().catch(() => ({}));
  return { res, data };
}
