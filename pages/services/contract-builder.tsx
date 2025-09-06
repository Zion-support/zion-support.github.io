<<<<<<< HEAD
import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function ContractBuilderRedirect() {

=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function ContractBuilderRedirect() {
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function ContractBuilderRedirect() {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/automation/contract-builder');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }, [router]);
  return null;

<<<<<<< HEAD
}
=======
=======


}


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
