import useSWR from 'swr';


<<<<<<< HEAD
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate}
    mutate}
}

=======
<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => (r.ok ? r.json() : null));
export function useCurrentUser() {

export function useCurrentUser() {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

    error


    error,


    mutate}

<<<<<<< HEAD
    error

    error,
    error

    error,
    mutate}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : null)),
export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
    user: data?.user || null, loading: !data && !error,
    error;

    mutate}
}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
