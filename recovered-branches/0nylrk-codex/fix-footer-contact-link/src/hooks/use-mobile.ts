
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
import {useState, useEffect} from 'react';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false;
=======

import {useState, useEffect} from 'react';


export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window && window.innerWidth < 768 : false
>>>>>>> main
  );
  useEffect(() => {

    const handleResize = () => {
<<<<<<< HEAD
      setIsMobile(window.innerWidth < 768)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize)
=======

      setIsMobile(window && window.innerWidth < 768)
    };


    if (typeof window !== 'undefined') {
      window && window.addEventListener('resize', handleResize);
      return () => window && window.removeEventListener('resize', handleResize)
>>>>>>> main
    }
    return undefined
  }, []);

  return isMobile
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

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
  $2
}
      window.addEventListener ('resize', handle_resize);
      return () => window.removeEventListener ('resize', handle_resize);
    }
    return undefined;
  }, []);
=======


>>>>>>> main
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======



}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
  return is_mobile;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> main
