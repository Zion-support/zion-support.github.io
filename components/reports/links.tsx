import { useEffect } from 'react';
<<<<<<< HEAD

export default function LinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html');
    }
  }, []);
  return null;
=======
export default function LinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html')
    }
  }, []);
  return null
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
