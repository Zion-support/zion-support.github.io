<<<<<<< HEAD
import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function ContractBuilderRedirect() {


=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useEffect} from 'react';
import {useRouter} from 'next/router';
export default function ContractBuilderRedirect() {;
import {useEffect} from 'react';
import {useRouter} from 'next/router';
export default function ContractBuilderRedirect() {;
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/automation/contract-builder');
  }, [router]);
  return null;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


}


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
