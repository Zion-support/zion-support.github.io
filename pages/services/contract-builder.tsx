<<<<<<< HEAD
import { useEffect } from 'react',
import { useRouter } from 'next/router',
export default function ContractBuilderRedirect() {
  const router = useRouter(),
  useEffect(() => {
    router.replace('/automation/contract-builder')
  }, [router]),
  return null
=======

export default function ContractBuilderRedirect() {_const _router = useRouter();
  useEffect__(() => {
    router.replace('/automation/contract-builder');}, [router]);
  return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}