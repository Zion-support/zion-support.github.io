<<<<<<< HEAD
import { useEffect } from 'react';

export default function LinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html');
    }
  }, []);
  return null;
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
