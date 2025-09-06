<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useEffect} from 'react';
import {useRouter} from 'next/router';
export default function ContractBuilderRedirect() {;
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function ContractBuilderRedirect() {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

import {useEffect} from 'react';
import {useRouter} from 'next/router';
export default function ContractBuilderRedirect() {;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/automation/contract-builder');
  }, [router]);
  return null;
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======


}


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function ContractBuilderRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/automation/contract-builder')
  }, [router]);
  return null
}
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
<<<<<<< HEAD

=======
;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function ContractBuilderRedirect(req, res) {
  try {
  const router = useRouter();
  useEffect(() => {;
    router.replace('/automation/contract-builder');
  }, [router]);
  return null;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
