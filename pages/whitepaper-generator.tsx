import { useEffect } from 'react';
import { useRouter } from 'next/router';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function WhitepaperGeneratorRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/tokenomics')
  }, [router]);
<<<<<<< HEAD
  return null;
=======
export default function WhitepaperGeneratorRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/tokenomics')
  }, [router]);
  return null
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return null
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
