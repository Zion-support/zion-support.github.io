import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => (r.ok ? r.json() : null));
<<<<<<< HEAD
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
  }
    loading: !data && !error;
<<<<<<< HEAD
    error

=======
    error,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    mutate}
}