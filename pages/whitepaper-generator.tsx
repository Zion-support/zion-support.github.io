import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function WhitepaperGeneratorRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/tokenomics')
  }, [router]),
  return null
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}