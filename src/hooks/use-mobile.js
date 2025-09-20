import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
<<<<<<< HEAD

=======
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
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
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
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
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
