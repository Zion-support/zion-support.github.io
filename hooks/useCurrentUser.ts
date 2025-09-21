import useSWR from 'swr';

export const useCurrentUser = () => {
  const { data, error, mutate } = useSWR('/api/user');
  
  return {
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate,
  };
};