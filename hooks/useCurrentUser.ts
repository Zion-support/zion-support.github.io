import useSWR from 'swr';
<<<<<<< HEAD

<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => (r.ok ? r.json() : null));
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => (r && r.ok ? r && r.json() : null));
=======

const fetcher = (url: string) => fetch(url).then(r => (r.ok ? r.json() : null));
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function useCurrentUser() {

export function useCurrentUser() {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======

    error

=======

    error,


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    mutate}

=======
    error
<<<<<<< HEAD
=======

=======
    error,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    error

    error,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    mutate}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : null)),
export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
    user: data?.user || null, loading: !data && !error,
    error;

    mutate}
}
}