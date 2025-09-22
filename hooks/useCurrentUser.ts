import useSWR from 'swr';

<<<<<<< HEAD

const fetcher = (url: string) => fetch(url).then(r => (r.ok ? r.json() : null));
export function useCurrentUser() {

export function useCurrentUser() {;

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
=======
const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : null));

export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
>>>>>>> origin/auto/autonomy-17186719616
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate,
<<<<<<< HEAD
  }
    loading: !data && !error;

    error

    error,

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
=======
  };
}
>>>>>>> origin/auto/autonomy-17186719616
