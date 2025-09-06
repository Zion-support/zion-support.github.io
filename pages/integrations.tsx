
import {useEffect} from 'react';
import {useRouter} from 'next/router';
<<<<<<< HEAD
export default function IntegrationsRedirect() {
=======

export default function IntegrationsRedirect() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/admin/integrations');
  }, [router]);
  return null;

