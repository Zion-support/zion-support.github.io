
import { useState, useEffect } from 'react';
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  useEffect(() => {
<<<<<<< HEAD
    const handleResize = null;
=======
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize)
    }
    return undefined
  }, []);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return isMobile
}