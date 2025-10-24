<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
export const useRouter = () => {
  const push = useCallback((url: string,) => {,
    window.location.href = url;}
  }, [])
  const replace = useCallback((url: string,) => {,
export const useRouter = () => {}
  const push = useCallback((url: string,) => {,}
    window.location.href = url;}
  }, [])
  const replace = useCallback((url: string,) => {,}
=======
'use client';
export const useRouter = () => {}
  const push = useCallback((url: string) => {}
    window.location.href = url;}
  }, [])
  const replace = useCallback((url: string) => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    window.location.replace(url);}
  }, [])
  const back = useCallback(() => {}
    window.history.back();}
  }, [])
  const forward = useCallback(() => {}
    window.history.forward();}
  }, [])
  const refresh = useCallback(() => {}
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
export const usePathname = useCallback((...args) => {}
  return window.location.pathname;}
}
export const useSearchParams = useCallback((...args) => {}
  const params = new URLSearchParams(window.location.search)
  return params;}
}
export default { useRouter, usePathname, useSearchParams }
<<<<<<< HEAD
export const useRouter = () => {/* TODO: Fix JSX expression */,}
  }, []);
  const replace = useCallback((ur)
  l: string,) => {/* TODO: Fix JSX expression */,}
=======
export const useRouter = () => {/* TODO: Fix JSX expression */}
  }, []);
  const replace = useCallback((ur)
  l: string) => {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }, []);
  const back = useCallback(() => {/* TODO: Fix JSX expression */,}
  }, []);
  const forward = useCallback(() => {/* TODO: Fix JSX expression */,}
  }, []);
  const refresh = useCallback(() => {/* TODO: Fix JSX expression */,}
  }, []);
  return {/* TODO: Fix JSX expression */,}
  };
};
export const usePathname = () => {/* TODO: Fix JSX expression */,}
};
export const useSearchParams = () => {/* TODO: Fix JSX expression */,}
};
export default { useRouter, usePathname, useSearchParams };
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
