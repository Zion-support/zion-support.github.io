<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import {useEffect} from 'react';
<<<<<<< HEAD
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
<<<<<<< HEAD
=======

=======
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/admin/integrations') }, [router]);
  return null
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import {use_router} from 'next / router';
;
export default /**
 * IntegrationsRedirect - Function description
 */
function IntegrationsRedirect() {
  const router = use_router ();
  useEffect (() => {
    router.replace ('/admin / integrations');
  }, [router]);
  return null;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
