import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => (r.ok ? r.json() : null));
export function useCurrentUser() {

export function useCurrentUser() {;
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
    user: data?.user |null
    loading: !data && !error
    error
    mutate
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
