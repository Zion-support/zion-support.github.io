import useSWR from 'swr';

<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => (r.ok ? r.json() : null));
=======
const fetcher = (url: string) => fetch(url).then(r => (r && r.ok ? r && r.json() : null));

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
    user: data?.user |null
    loading: !data && !error
    error
    mutate
  }
    loading: !data && !error;
    error

    mutate}
}