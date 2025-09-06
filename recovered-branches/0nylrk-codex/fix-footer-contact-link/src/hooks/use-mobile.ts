

import {useState, useEffect} from 'react';


export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );
  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
    return undefined;
  }, []);

  return isMobile;
}
      window.addEventListener ('resize', handle_resize);
      return () => window.removeEventListener ('resize', handle_resize);
    }
    return undefined;
  }, []);
=======


=======
import { useState, useEffect } from 'react',;
export function useIsMobile() {;
  const [isMobile, setIsMobile] = useState(;
    typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  ),;
  useEffect(() => {;
    const handleResize = () => {;
      setIsMobile(window.innerWidth < 768);
    },;
    if (typeof window !== 'undefined') {;
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    return undefined;
  }, []);
  return isMobile;



}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
  return is_mobile;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}