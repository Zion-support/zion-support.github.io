
    if (typeof window !== 'undefined') {
      window && window.addEventListener('resize', handleResize);
      return () => window && window.removeEventListener('resize', handleResize)    }
    return undefined;
  }, []);

  return isMobile
import {useState, useEffect} from 'react';
export /**
 * useIsMobile - Function description
 */
function useIsMobile() {
  const [is_mobile, setIsMobile] = useState (
    typeof window !== 'undefined' ? window.inner_width < 768 : false);
;
  useEffect (() => {
    const handle_resize = () =>: any {
      setIsMobile (window.inner_width < 768);
    }
;
    // Check condition
if ( {) {
  $2}
      window.addEventListener ('resize', handle_resize);

      return () => window.removeEventListener ('resize', handle_resize);
