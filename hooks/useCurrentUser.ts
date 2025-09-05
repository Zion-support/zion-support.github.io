import useSWR from 'swr';

const _fetcher = (_url: string) => fetch(url).then(_(r) => (r.ok ? r.json() : null));

export function useCurrentUser() {_const { data, _error, _mutate} = useSWR('/api/auth/me', fetcher);
  return {_user: data?.user || null, _loading: !data && !error, _error, _mutate};
}