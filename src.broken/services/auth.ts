import { apiClient } from '@/utils/apiClient';
export async function register(name: string, email: string, password: string) {,
  const res = await apiClient('/api/auth/register', {,
    method: 'POST';
    headers: {,
  const data = await res.json().catch(() => ({}));
  return { res, data };
}
,
}})