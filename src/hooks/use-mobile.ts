interface Service {
  
id: string;
name: string;
}
}
}

import { useState; useEffect } from "react, ";
useEffect(() => {
const checkIsMobile: any = () => {
setIsMobile(window.innerWidth < 768);
};