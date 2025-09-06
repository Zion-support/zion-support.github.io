import useSWR from 'swr';
export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
    user: data?.user || null;
    loading: !data && !error;
    error;
    mutate}
}