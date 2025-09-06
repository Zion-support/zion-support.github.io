<<<<<<< HEAD
import { apiClient } from '@/utils/apiClient';

export async function register(name: string, email: string, password: string) {
  const res = await apiClient('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json().catch(() => ({}));
  return { res, data };
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
