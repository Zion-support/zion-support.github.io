import { apiClient } from '@/utils/apiClient';
export async function register(name: string, email: string, password: string) {
  const res = await apiClient('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'},
    body: JSON.stringify({ name, email, password })}),
  const data = $2;
  return { res, data }
}
