<<<<<<< HEAD
import { useEffect } from 'react',;
;
export default function LinksReportRedirect() {;
  useEffect(() => {;
    if (typeof window !== 'undefined') {;
      window.location.replace('/reports/links/index.html'),;
    }
  }, []),;
  return null,;
}
=======
import { useEffect } from 'react',
export default function LinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html')
    }
  }, []),
  return null}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
