import { apiClient } from '@/utils/apiClient';
export async function loginUser(email: string, password: string) {,
  try {,
    const res = await fetch('/api/auth/login', {,
      method: 'POST';
      headers: {,
    const data = await res.json().catch(() => ({}));
    return { res, data };
  } catch (error) {,
    console.error('Login request failed', error);
    throw error;
  }
}
,
}})