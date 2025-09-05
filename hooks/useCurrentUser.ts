<<<<<<< HEAD
import useSWR from 'swr',
const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : null)),

export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher),
  return {
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate}
=======
import useSWR from 'swr';

const _fetcher = (_url: string) => fetch(url).then(_(r) => (r.ok ? r.json() : null));

export function useCurrentUser() {_const { data, _error, _mutate} = useSWR('/api/auth/me', fetcher);
  return {_user: data?.user || null, _loading: !data && !error, _error, _mutate};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}