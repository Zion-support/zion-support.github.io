import useSWR from 'swr';
<<<<<<< HEAD





=======
const fetcher = $2;
export function useCurrentUser() {
  const { data, error, mutate } = useSWR($2);
  return {
    user: data ?.user || null,
    loading: !data && !error,
    error,
    mutate}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
