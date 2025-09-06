import useSWR from 'swr';




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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate
  }
    loading: !data && !error;


    error



    error,


    mutate}

const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : null)),
export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
    user: data?.user || null, loading: !data && !error,
    error;


    mutate}
}
}
  }
    loading: !data && !error;
    mutate}
}
}
  };
    mutate}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
