import { useEffect  } from 'react';
import { useRouter } from 'next/router';
<<<<<<< HEAD
export default function ContractBuilderRedirect() {
<<<<<<< HEAD
  const router = null;
  return null
}
=======
  const router = useRouter();
  useEffect(() => {
router.replace('/automation/contract-builder');
  }, [router]);
  return null;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
}

export default function ContractBuilderRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/automation/contract-builder');
  }, [router]);
  return null;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
