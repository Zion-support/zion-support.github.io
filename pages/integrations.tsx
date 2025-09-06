import { useEffect } from 'react';
import { useRouter } from 'next/router';
<<<<<<< HEAD
<<<<<<< HEAD

export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/admin/integrations');
  }, [router]);
  return null;
=======
export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/admin/integrations') }, [router]);
  return null
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/admin/integrations') }, [router]);
  return null
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
