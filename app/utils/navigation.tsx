'use client'
export const useRouter = (;) => {
    return (
    $3
  )
  }
  const push = useCallback((url: string) => {
    ,
  }
    window.location.href = url;}
  }, [])
  const replace = useCallback((url: string) => {
    ,
  }
export const useRouter = () => {}
  const push = useCallback((url: string) => {}
    window.location.href = url;}
  }, [])
  const replace = useCallback((url: string) => {}
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
