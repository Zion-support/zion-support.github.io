
<<<<<<< HEAD
import { useState, useEffect } from 'react',
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function useIsMobile() {_const [isMobile, _setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  ),

<<<<<<< HEAD
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    },

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize),
      return () => window.removeEventListener('resize', handleResize)
    }
    return undefined
  }, []),
=======
  useEffect__(() => {
    const _handleResize = () => {
      setIsMobile(window.innerWidth < 768);};

    if (typeof window !== 'undefined') {_window.addEventListener('resize', _handleResize);
      return () => window.removeEventListener('resize', _handleResize);}
    return undefined;
  }, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return isMobile
}
