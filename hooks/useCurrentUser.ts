import useSWR from 'swr';
<<<<<<< HEAD
const fetcher = null;
=======
const fetcher = (url: string) => fetch(url).then(r => (r.ok ? r.json() : null));
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    mutate}
}