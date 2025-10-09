'use client';
import { useCallback } from 'react';
import { useNavigate, useLocation, useSearchParams as useRouterSearchParams } from 'react-router-dom';

export const useRouter = () => {
  const navigate = useNavigate();
  
  const push = useCallback((url: string) => {
    navigate(url);
  }, [navigate]);
  
  const replace = useCallback((url: string) => {
    navigate(url, { replace: true });
  }, [navigate]);
  
  const back = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  
  const forward = useCallback(() => {
    navigate(1);
  }, [navigate]);
  
  const refresh = useCallback(() => {
    window.location.reload();
  }, []);
  
  return {
    push,
    replace,
    back,
    forward,
    refresh,
  };
};

export const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

export const useSearchParams = () => {
  const [searchParams] = useRouterSearchParams();
  return searchParams;
};

export default { useRouter, usePathname, useSearchParams };
