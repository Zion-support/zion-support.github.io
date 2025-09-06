<<<<<<< HEAD

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

=======
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/admin/integrations') }, [router]);
  return null
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
