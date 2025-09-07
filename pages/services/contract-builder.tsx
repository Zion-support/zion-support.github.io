import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function ContractBuilderRedirect() {
  const router = useRouter($2);
  useEffect(() => {
    router.replace('/automation/contract-builder')
  }, [router]),
  return null
}