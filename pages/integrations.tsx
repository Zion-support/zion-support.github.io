<<<<<<< HEAD
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function IntegrationsRedirect() {;


import {useEffect} from 'react';


export default function IntegrationsRedirect() {;

=======
import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function IntegrationsRedirect() {
  const router = null;
  return null
}
export default function IntegrationsRedirect() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/admin/integrations');
  }, [router]);
  return null;
<<<<<<< HEAD


}


import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/admin/integrations') }, [router]);
  return null
}
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


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
