import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/admin/integrations');
  }, [router]);
<<<<<<< HEAD
  return null;
=======
  return null;
export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/admin/integrations') }, [router]);
  return null
}
export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/admin/integrations') }, [router]);
  return null
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
