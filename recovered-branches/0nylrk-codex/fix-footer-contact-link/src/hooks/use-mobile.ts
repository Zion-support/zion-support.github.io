
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
import {useState, useEffect} from 'react';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
}
      window.addEventListener ('resize', handle_resize);
      return () => window.removeEventListener ('resize', handle_resize);
    }
    return undefined;
  }, []);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
  return is_mobile;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}