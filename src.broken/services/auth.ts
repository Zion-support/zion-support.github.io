import { apiClient } from '@/utils/apiClient';

export async function register(name: string, email: string, password: string) {
  const res = await apiClient('/api/auth/register', {
    method: 'POST',
    headers: {
<<<<<<< HEAD
=======
      'Content-Type': 'application/json'},
    body: JSON.stringify({ name, email, password })});
  const data = await res.json().catch(() => ({}));
  return { res, data };
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
