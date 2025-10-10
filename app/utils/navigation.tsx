'use client';
import { useCallback } from 'react';

export const useRouter = () => {
  const push = useCallback((url: string) => {
    window.location.href = url;
  }, []);

  const replace = useCallback((url: string) => {
    window.location.replace(url);
  }, []);

  const back = useCallback(() => {
    window.history.back();
  }, []);

  const forward = useCallback(() => {
    window.history.forward();
  }, []);

  return {
    push,
    replace,
    back,
    forward
  };
};