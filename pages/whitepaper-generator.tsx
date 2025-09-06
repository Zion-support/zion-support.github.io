<<<<<<< HEAD
import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function WhitepaperGeneratorRedirect() {

  const router = useRouter();
  useEffect(() => {
router.replace('/tokenomics');
=======
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function WhitepaperGeneratorRedirect() {;
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/tokenomics');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }, [router]);
  return null;

