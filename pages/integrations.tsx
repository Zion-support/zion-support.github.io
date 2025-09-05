<<<<<<< HEAD
import { useEffect } from 'react',;
import { useRouter } from 'next/router',;
;
export default function IntegrationsRedirect() {;
  const router = useRouter(),;
  useEffect(() => { router.replace('/admin/integrations'), }, [router]),;
  return null,;
}
=======
import { useEffect } from 'react',
import { useRouter } from 'next/router',
export default function IntegrationsRedirect() {
  const router = useRouter(),
  useEffect(() => { router.replace('/admin/integrations') }, [router]),
  return null}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
