import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function IntegrationsRedirect() {
  const router = useRouter($2);
  useEffect(() => { router.replace('/admin/integrations') }, [router]),
  return null
}