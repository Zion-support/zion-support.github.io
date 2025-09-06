<<<<<<< HEAD
import { apiClient } from '@/utils/apiClient';

export async function loginUser(email: string, password: string) {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json().catch(() => ({}));
    return { res, data };
  } catch (error) {
    console.error('Login request failed', error);
    throw error;
  }
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
