<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function IntegrationsRedirect() {
  const router = null;
  return null
}
=======
import {useEffect} from 'react';
import {useRouter} from 'next/router';
=======
import { useEffect } from 'react';
import { useRouter } from 'next/router';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/admin/integrations');
  }, [router]);
  return null;
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
