<<<<<<< HEAD
<<<<<<< HEAD


import {useEffect} from 'react';
import {useRouter} from 'next/router';
export default function ContractBuilderRedirect() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function ContractBuilderRedirect() {
=======

import {useEffect} from 'react';
import {useRouter} from 'next/router';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export default function ContractBuilderRedirect() {;
<<<<<<< HEAD
import {useEffect} from 'react';
import {useRouter} from 'next/router';
export default function ContractBuilderRedirect() {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/automation/contract-builder');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }, [router]);
  return null;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


}


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
;
}

}
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function ContractBuilderRedirect(req, res) {
  try {
  const router = useRouter();
  useEffect(() => {;
    router.replace('/automation/contract-builder');
  }, [router]);
  return null;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
