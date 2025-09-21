<<<<<<< HEAD
// Simple user hook without external dependencies
export function useCurrentUser() {
  return {
    user: null,
    loading: false,
    error: null,
    mutate: () => {}
  }}
=======
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
>>>>>>> 82689a4cb07645633bb2f61079b0d20275046e16
