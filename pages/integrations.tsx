import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function IntegrationsRedirect() {
  const router = useRouter()
  useEffect(() => { router.replace('/admin/integrations') }, [router]),
  return null
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}