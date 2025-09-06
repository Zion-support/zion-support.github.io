

=======
import {useState, useEffect} from 'react';


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window && window.innerWidth < 768 : false
  );
  useEffect(() => {

    const handleResize = () => {

      setIsMobile(window && window.innerWidth < 768)
    };


    if (typeof window !== 'undefined') {
      window && window.addEventListener('resize', handleResize);
      return () => window && window.removeEventListener('resize', handleResize)
    }
    return undefined
  }, []);

  return isMobile

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
