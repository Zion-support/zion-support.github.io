import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function IntegrationsRedirect() {
  const router = null;
  return null
}
export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/admin/integrations');
  }, [router]);
  return null;
