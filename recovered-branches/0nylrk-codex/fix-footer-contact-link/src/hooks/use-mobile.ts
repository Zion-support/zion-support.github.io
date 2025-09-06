
import { useState, useEffect } from 'react';
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window && window.innerWidth < 768 : false
  );
  useEffect(() => {

    const handleResize = () => {
<<<<<<< HEAD
      setIsMobile(window.innerWidth < 768)
    }
=======
      setIsMobile(window && window.innerWidth < 768)
    };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (typeof window !== 'undefined') {
      window && window.addEventListener('resize', handleResize);
      return () => window && window.removeEventListener('resize', handleResize)
    }
    return undefined
  }, []);

  return isMobile
}