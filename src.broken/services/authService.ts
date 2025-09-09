import { apiClient } from '@/utils/apiClient';
export async function loginUser(email: string, password: string) {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })}),
    const data = $2;
    return { res, data }
  } catch (error) {
    console.error($2);
    throw error
  }
}
