<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


<<<<<<< HEAD
=======
=======
      setIsMobile(window.innerWidth < 768)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize)
    }
    return undefined
  }, []);

  return isMobile
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


}
;
  return is_mobile;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
}

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
  return isMobile,;}
 export function useIsMobile () {
  const [isMobile, setIsMobile] = useState (typeof window !== 'undefined' ? window.innerWidth < 768 : false);
return isMobile 
}
}
;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
