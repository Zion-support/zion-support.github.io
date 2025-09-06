import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function ContractBuilderRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/automation/contract-builder')
  }, [router]),
  return null
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}