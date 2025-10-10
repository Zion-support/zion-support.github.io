'use client';
export const _useRouter = () => {
  const push = useCallback((url: string) => {,
    window.location.href = url;}
  }, [])
  const _replace = useCallback((url: string) => {,
export const useRouter = () => {}
  const push = useCallback((url: string) => {}
    window.location.href = url;}
  }, [])
  const _replace = useCallback((url: string) => {}
    window.location.replace(url);}
  }, [])
  const _back = useCallback(() => {}
    window.history.back();}
  }, [])
  const _forward = useCallback(() => {}
    window.history.forward();}
  }, [])
  const _refresh = useCallback(() => {}
    window.location.reload();}
  }, [])
  return {}
    push,
    replace,
    back,
    forward,
    refresh}
  }
}
export const _usePathname = useCallback((...args) => {}
  return window.location.pathname;}
}
export const _useSearchParams = useCallback((...args) => {}
  const params = new URLSearchParams(window.location.search);
  return params;}
}
export default { useRouter, usePathname, useSearchParams }
export const _useRouter = () => {/* TODO: Fix JSX expression */}
  }, []);
  const _replace = useCallback((ur);
  l: string) => {/* TODO: Fix JSX expression */}
  }, []);
  const _back = useCallback(() => {/* TODO: Fix JSX expression */}
  }, []);
  const _forward = useCallback(() => {/* TODO: Fix JSX expression */}
  }, []);
  const _refresh = useCallback(() => {/* TODO: Fix JSX expression */}
  }, []);
  return {/* TODO: Fix JSX expression */}
  };
};
export const _usePathname = () => {/* TODO: Fix JSX expression */}
};
export const _useSearchParams = () => {/* TODO: Fix JSX expression */}
};
export default { useRouter, usePathname, useSearchParams };
