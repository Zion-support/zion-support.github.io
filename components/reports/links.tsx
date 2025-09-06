import { useEffect } from 'react';
export default function LinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html')
    }
  }, []);

=======
  return null
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
