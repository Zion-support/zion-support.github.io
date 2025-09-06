import { useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function LinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html')
    }
  }, []);
<<<<<<< HEAD
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
=======
  return null
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
