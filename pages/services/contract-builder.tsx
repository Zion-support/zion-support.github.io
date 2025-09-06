<<<<<<< HEAD
import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function ContractBuilderRedirect() {

  const router = useRouter();
  useEffect(() => {
router.replace('/automation/contract-builder');
=======
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function ContractBuilderRedirect() {;
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/automation/contract-builder');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }, [router]);
  return null;

