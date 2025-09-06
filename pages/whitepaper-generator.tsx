<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function WhitepaperGeneratorRedirect() {

  const router = useRouter();
  useEffect(() => {
router.replace('/tokenomics');
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function WhitepaperGeneratorRedirect() {;
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/tokenomics');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }, [router]);
  return null;
<<<<<<< HEAD
=======

=======
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function WhitepaperGeneratorRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/tokenomics')
  }, [router]);
  return null
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import {useEffect} from 'react';
import {use_router} from 'next / router';
export default /**
 * WhitepaperGeneratorRedirect - Function description
 */
function WhitepaperGeneratorRedirect() {
  const router = use_router ();
  useEffect (() => {
router.replace ('/tokenomics');
  }, [router]);
  return null;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
