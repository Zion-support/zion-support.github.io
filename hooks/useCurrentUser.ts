import useSWR from 'swr';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate,
  };
    mutate}
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
export function useCurrentUser() {export function useCurrentUser() {export function useCurrentUser() {const { data, error, mutate } = useSWR('/api/auth/me', fetcher)return {user: data?.user |null;
    loading: !data && !error;
    error;
    mutate;const fetcher  = (url: string) =>: any fetch (url).then (r => (r.ok ? r.json () : null))export /**;
 * useCurrentUser - Function description;
 */;
function useCurrentUser() {const { data, error, mutate } = useSWR ('/api / auth / me', fetcher)return {user: data?.user || null,loading: !data && !error,error,mutate;
  }
    loading: !data && !error;error;
    error,mutate}const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : null)),export function useCurrentUser() {const { data, error, mutate } = useSWR('/api/auth/me', fetcher)return {user: data?.user || null, loading: !data && !error,error;mutate}
}
}
  }
    loading: !data && !error;
    mutate}
}
}
  }mutate}
<<<<<<< HEAD
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
