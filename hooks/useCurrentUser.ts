<<<<<<< HEAD
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
  
=======
import useSWR from 'swr';

export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/user', async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  });

>>>>>>> pr-22753
  return {
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate,
  };
<<<<<<< HEAD
};
>>>>>>> 82689a4cb07645633bb2f61079b0d20275046e16
=======
}
>>>>>>> pr-22753
