import { useEffect } from 'react';
import { useRouter } from 'next/router';
<<<<<<< HEAD

export default function WhitepaperGeneratorRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/tokenomics');
  }, [router]);
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
