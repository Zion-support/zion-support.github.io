import useSWR from 'swr';
<<<<<<< HEAD
export function useCurrentUser() {

export function useCurrentUser() {;

export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
    user: data?.user |null
    loading: !data && !error
    error
    mutate
;
const fetcher = (url: string) =>: any fetch (url).then (r => (r.ok ? r.json () : null));
;
export /**
 * useCurrentUser - Function description
 */
function useCurrentUser() {
  const { data, error, mutate } = useSWR ('/api / auth / me', fetcher);
  return {
origin/cursor/automate-test-improve-and-merge-code-2533
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate,
  }
    loading: !data && !error;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    mutate}
}
}
  };
    mutate}
}
origin/cursor/automate-test-improve-and-merge-code-2533

  };
    mutate}
}

