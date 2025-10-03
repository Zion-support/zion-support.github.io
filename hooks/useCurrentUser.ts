import useSWR from 'swr';


export function useCurrentUser() {/* content */}
export function useCurrentUser() {;

export function useCurrentUser() {/* content */}
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {/* content */}
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
function useCurrentUser() {/* content */}
  const { data, error, mutate } = useSWR ('/api / auth / me', fetcher);
  return {/* content */}
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate,
  }
    loading: !data && !error;

    error


    error,


    mutate}

const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : null)),
export function useCurrentUser() {/* content */}
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {/* content */}
    user: data?.user || null, loading: !data && !error,
    error;

    mutate}
}
}
    mutate}
}
}
