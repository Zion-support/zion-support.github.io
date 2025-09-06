
import { useState, useEffect } from 'react';
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handleResize = null;
  return isMobile
}
