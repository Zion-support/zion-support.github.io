import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ErrorResetOnRouteChange() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Reset any error states when route changes
      console.log('Route changed, resetting errors...');
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return null;
}