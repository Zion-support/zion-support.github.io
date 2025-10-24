'use client';
export const useRouter = () => {
  const push = useCallback((url: string) => {
    window.location.href = url;
  }, []);
  const replace = useCallback((url: string) => {

'use client'
export   }, [])
    }, [])
import { useCallback } from 'react';

export const _useRouter = () => {// TODO: Add content;}

}
  const push = useCallback((ur)
  l: string) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
    window.location.href = url;
  const replace = useCallback((ur)
  l: string) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
    window.location.replace(url);
  }, []);
  const back = useCallback(() => {
    window.history.back();
  }, []);
  const forward = useCallback(() => {
    window.history.forward();
  }, []);
  const refresh = useCallback(() => {
    window.location.reload();
  return {push}
    replace,
    back,
    forward,
    refresh
  };
};
export const usePathname = () => {
  return window.location.pathname;
};
export const useSearchParams = () => {
  const params = new URLSearchParams(window.location.search);
  return params;
};
export default { useRouter, usePathname, useSearchParams };
