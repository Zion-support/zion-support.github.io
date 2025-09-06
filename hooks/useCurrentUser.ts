import useSWR from 'swr';
<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => (r && r.ok ? r && r.json() : null));
=======

const fetcher = (url: string) => fetch(url).then(r => (r.ok ? r.json() : null));
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export function useCurrentUser() {
=======

export function useCurrentUser() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
    error
<<<<<<< HEAD
=======

=======
    error,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    mutate}
const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : null)),
export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
    user: data?.user || null, loading: !data && !error,
    error;
    mutate}
}
}