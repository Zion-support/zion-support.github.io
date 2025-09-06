
import { useState, useEffect } from 'react';
import {useState, useEffect} from 'react';
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
;
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
