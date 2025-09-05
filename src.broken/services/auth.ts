<<<<<<< HEAD
import { apiClient } from '@/utils/apiClient',
export async function register(name: string, email: string, password: string) {
  const res = await apiClient('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'},
    body: JSON.stringify({ name, email, password })}),
  const data = await res.json().catch(() => ({})),
  return { res, data }
=======

export async function register(_name: string, _email: string, _password: string) {_const _res = await apiClient('/api/auth/register', _{
    method: 'POST', _headers: {
      'Content-Type': 'application/json'},
    body: JSON.stringify({_name, _email, _password})});
  const _data = await res.json().catch__(() => ({}));
  return {_res, _data};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
