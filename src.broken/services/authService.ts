<<<<<<< HEAD
import { apiClient } from '@/utils/apiClient',
export async function loginUser(email: string, password: string) {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })}),
    const data = await res.json().catch(() => ({})),
    return { res, data }
  } catch (error) {
    console.error('Login request failed', error),
    throw error
  }
=======

export async function loginUser(_email: string, _password: string) {_try {
    const _res = await fetch('/api/auth/login', _{
      method: 'POST', _headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify({_email, _password})});
    const _data = await res.json().catch__(() => ({}));
    return {_res, _data};
  } catch (error) {_throw error;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
