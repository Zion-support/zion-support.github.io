<<<<<<< HEAD
import { useEffect } from 'react',
import { useRouter } from 'next/router',
export default function WhitepaperGeneratorRedirect() {
  const router = useRouter(),
  useEffect(() => {
    router.replace('/tokenomics')
  }, [router]),
  return null
=======

export default function WhitepaperGeneratorRedirect() {_const _router = useRouter();
  useEffect__(() => {
    router.replace('/tokenomics');}, [router]);
  return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}