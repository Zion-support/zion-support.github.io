'use client';
import React, { lazy } from 'react';
import { useCallback } from 'react'
export const useRouter = useCallback((...args) => {
  const push = useCallback((url: string) => {
    window.location.href = url;}
  }, [])
  const replace = useCallback((url: string) => {
    window.location.replace(url);}
  }, [])
  const back = useCallback(() => {
    window.history.back();}
  }, [])
  const forward = useCallback(() => {
    window.history.forward();}
  }, [])
  const refresh = useCallback(() => {
    window.location.reload();}
  }, [])
  return {
    push,
    replace,
    back,
    forward,
    refresh}
  }
}
export const usePathname = useCallback((...args) => {
  return window.location.pathname;}
}
export const useSearchParams = useCallback((...args) => {
  const params = new URLSearchParams(window.location.search)
  return params;}
}
export default { useRouter, usePathname, useSearchParams }