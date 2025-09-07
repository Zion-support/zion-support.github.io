import { useState, useEffect } from 'react';
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState($2);
  useEffect(() => {
    const handleResize = $2;
    if (typeof window !== 'undefined') {
      window.addEventListener($2);
      return () => window.removeEventListener('resize', handleResize)
    }
    return undefined
  }, []),

  return isMobile
}
}
;