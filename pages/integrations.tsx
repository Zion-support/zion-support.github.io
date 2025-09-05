<<<<<<< HEAD
import { useEffect } from 'react',
import { useRouter } from 'next/router',
export default function IntegrationsRedirect() {
  const router = useRouter(),
  useEffect(() => { router.replace('/admin/integrations') }, [router]),
  return null
=======

export default function IntegrationsRedirect() {_const _router = useRouter();
  useEffect__(() => { router.replace('/admin/integrations');}, [router]);
  return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}