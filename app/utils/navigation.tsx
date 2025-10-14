'use client';

import { useRouter } from 'next/navigation';

export const useNavigation = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  const goBack = () => {
    router.back();
  };

  const goForward = () => {
    router.forward();
  };

  const refresh = () => {
    router.refresh();
  };

  return {
    navigate,
    goBack,
    goForward,
    refresh
  };
};

export default useNavigation;