<<<<<<< HEAD
import { useEffect } from 'react',
export default function LinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html')
    }
  }, []),
  return null
=======

export default function LinksReportRedirect() {_useEffect__(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html');}
  }, []);
  return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}