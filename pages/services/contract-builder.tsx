import { useEffect } from 'react';
import { useRouter } from 'next/router';
<<<<<<< HEAD

export default function ContractBuilderRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/automation/contract-builder');
  }, [router]);
  return null;
=======
export default function ContractBuilderRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/automation/contract-builder')
  }, [router]);
  return null
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
