import useSWR from 'swr';
<<<<<<< HEAD
export function useCurrentUser() {export function useCurrentUser() {export function useCurrentUser() {const { data, error, mutate } = useSWR('/api/auth/me', fetcher)return {user: data?.user |null;
    loading: !data && !error;
    error;
    mutate;const fetcher  = (url: string) =>: any fetch (url).then (r => (r.ok ? r.json () : null))export /**;
 * useCurrentUser - Function description;
 */;
function useCurrentUser() {const { data, error, mutate } = useSWR ('/api / auth / me', fetcher)return {user: data?.user || null,loading: !data && !error,error,mutate;
  }
    loading: !data && !error;error;
    error,mutate}const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : null)),export function useCurrentUser() {const { data, error, mutate } = useSWR('/api/auth/me', fetcher)return {user: data?.user || null, loading: !data && !error,error;mutate}
}
}
=======
export function useCurrentUser() {
export function useCurrentUser() {;
export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
    user: data?.user |null;
    loading: !data && !error
    error
    mutate
;
const fetcher = (url: string) =>: any fetch (url).then (r => (r.ok ? r.json () : null));
;
export /**
 * useCurrentUser - Function description
 */
function useCurrentUser() {
  const { data, error, mutate } = useSWR ('/api / auth / me', fetcher);
  return {
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate,
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
  }
    loading: !data && !error;
    mutate}
}
<<<<<<< HEAD
}
  }mutate}
=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
}