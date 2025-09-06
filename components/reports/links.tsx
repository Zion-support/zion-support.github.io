import { useEffect } from 'react';

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function LinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html');
    }
  }, []);
  return null;
=======
  return null
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
