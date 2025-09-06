import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => (r.ok ? r.json() : null));

export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate,
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    user: data?.user || null;
    loading: !data && !error;
    error,
    mutate}
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
