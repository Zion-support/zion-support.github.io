import React from "react";
import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
<<<<<<< HEAD

=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
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
