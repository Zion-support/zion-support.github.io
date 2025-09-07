import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function WhitepaperGeneratorRedirect() {
<<<<<<< HEAD
  const router = null;
  return null
}
=======
  const router = useRouter();
  useEffect(() => {
router.replace('/tokenomics');
  }, [router]);
  return null;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
