<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function ContractBuilderRedirect() {

=======
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function ContractBuilderRedirect() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/automation/contract-builder');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }, [router]);
  return null;

<<<<<<< HEAD
=======


}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function ContractBuilderRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/automation/contract-builder')
  }, [router]);
  return null
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import {useEffect} from 'react';
import {use_router} from 'next / router';
export default /**
 * ContractBuilderRedirect - Function description
 */
function ContractBuilderRedirect() {
  const router = use_router ();
  useEffect (() => {
router.replace ('/automation / contract - builder');
  }, [router]);
  return null;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
