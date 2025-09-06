import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => (r && r.ok ? r && r.json() : null));

export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate,
  };
    loading: !data && !error;
    error,
    mutate}
}
