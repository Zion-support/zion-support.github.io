<<<<<<< HEAD
'use client'
export const useRouter = () => {const push = useCallback((url: string) => {,
    window.location.href="url}"
  }, []);
const replace = useCallback((url: string) => {,
export const useRouter = () => {}
  const push = useCallback((url: string) => {}
    window.location.href="url}"
=======
use client
export const useRouter = () => {const push = useCallback((url: string) => {,;;

    window.location.href = url}

  }, []);

const replace = useCallback((url: string) => {,;;

export const useRouter = () => {};;

  const push = useCallback((url: string) => {};;

    window.location.href = url}

>>>>>>> origin/main
  }, []);

const replace = useCallback((url: string) => {};;

    window.location.replace(url);

  }, []);

const back = useCallback(() => {};;

    window.history.back();

  }, []);

const forward = useCallback(() => {};;

    window.history.forward();

  }, []);

const refresh = useCallback(() => {};;

    window.location.reload();

  }, [])
  return {}

    push,
    replace,
    back,
    forward,
    refresh}

  }

}

export const usePathname = useCallback((...args) => {};;

  return window.location.pathname}

}
<<<<<<< HEAD
export const useSearchParams = useCallback((...args) => {}
  const params = "new URLSearchParams(window.location.search)"
=======

export const useSearchParams = useCallback((...args) => {};;

  const params = new URLSearchParams(window.location.search);;

>>>>>>> origin/main
  return params}

}

export default { useRouter, usePathname, useSearchParams }

export const useRouter = () => {/* TODO: Fix JSX expression */};;

  }, []);
<<<<<<< HEAD
const replace="useCallback((ur)"
=======

const replace = useCallback((ur);;

>>>>>>> origin/main
  l: string) => {/* TODO: Fix JSX expression */}

  }, []);

const back = useCallback(() => {/* TODO: Fix JSX expression */};;

  }, []);

const forward = useCallback(() => {/* TODO: Fix JSX expression */};;

  }, []);

const refresh = useCallback(() => {/* TODO: Fix JSX expression */};;

  }, []);

  return {/* TODO: Fix JSX expression */}

  }}

export const usePathname = () => {/* TODO: Fix JSX expression */};;

}

export const useSearchParams = () => {/* TODO: Fix JSX expression */};;

}
<<<<<<< HEAD
export default { useRouter, usePathname, useSearchParams };
=======

export default { useRouter, usePathname, useSearchParams };
>>>>>>> origin/main
