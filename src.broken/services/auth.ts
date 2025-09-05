<<<<<<< HEAD
import { apiClient } from '@/utils/apiClient',;
;
export async function register(name:string, email:string, password:string) {;
  const res = await apiClient('/api/auth/register', {;
    method:'POST',;
    headers:{;
      'Content-Type':'application/json'},;
    body:JSON.stringify({ name, email, password })}),;
  const data = await res.json().catch(() => ({})),;
  return { res, data },;
}
=======
import { apiClient } from '@/utils/apiClient',
export async function register(name: string, email: string, password: string) {
  const res = await apiClient('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'},
    body: JSON.stringify({ name, email, password })}),
  const data = await res.json().catch(() => ({})),
  return { res, data }}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
