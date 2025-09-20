import React from "react";
import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
<<<<<<< HEAD
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  return isMobile;
}
=======
<<<<<<< HEAD
    return () => window.removeEventListener('resize', checkIsMobile);
=======
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
  }, []);
  
  return isMobile;
}
<<<<<<< HEAD

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}

export default useIsMobile;
=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
