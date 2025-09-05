<<<<<<< HEAD
import useSWR from 'swr',;
;
const fetcher = (url:string) => fetch(url).then((r) => (r.ok ? r.json() :null)),;
;
export function useCurrentUser() {;
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher),;
  return {;
    user:data?.user || null,;
    loading:!data && !error,;
    error,;
    mutate},;
}
=======
import useSWR from 'swr',
const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : null)),

export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher),
  return {
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate}}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
