import { apiClient } from '@/utils/apiClient';

export async function loginUser(email: string, password: string) {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
<<<<<<< HEAD
        'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })});
=======
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
>>>>>>> origin/auto/autonomy-17186719616
    const data = await res.json().catch(() => ({}));
    return { res, data };
  } catch (error) {
    console.error('Login request failed', error);
    throw error;
  }
}
