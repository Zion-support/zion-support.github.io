
<<<<<<< HEAD
import { useState, useEffect } from 'react',;
;
export function useIsMobile() {;
  const [isMobile, setIsMobile] = useState(;
    typeof window !== 'undefined' ? window.innerWidth < 768 :false;
  ),;
;
  useEffect(() => {;
    const handleResize = () => {;
      setIsMobile(window.innerWidth < 768),;
    },;
;
    if (typeof window !== 'undefined') {;
      window.addEventListener('resize', handleResize),;
      return () => window.removeEventListener('resize', handleResize),;
    }
    return undefined,;
  }, []),;
;
  return isMobile,;
=======
import { useState, useEffect } from 'react',
  return isMobile
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
