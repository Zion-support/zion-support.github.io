import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => (r.ok ? r.json() : null));
<<<<<<< HEAD
export function useCurrentUser() {
=======
<<<<<<< HEAD
export function useCurrentUser() {
=======

export function useCurrentUser() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
    user: data?.user |null
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
  }
    loading: !data && !error;
    error,
}
    mutate}
}
}
