import { useEffect } from 'react'
export default function LinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html')
    }
  }, []),
  return null
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}