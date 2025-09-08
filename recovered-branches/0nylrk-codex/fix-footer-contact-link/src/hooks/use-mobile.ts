
import {useState, useEffect} from 'react';

  const [isMobile, setIsMobile] = useState(



      window.addEventListener ('resize', handle_resize);

      return () => window.removeEventListener ('resize', handle_resize);



  const [isMobile, setIsMobile] = useState(;
    typeof window !== 'undefined' ? window.innerWidth < 768 : false;






