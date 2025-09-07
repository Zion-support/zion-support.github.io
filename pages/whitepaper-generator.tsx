<<<<<<< HEAD
import { useEffect  } from 'react';
import { useRouter } from 'next/router';
export default function WhitepaperGeneratorRedirect() {


=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useEffect} from 'react';
import {useRouter} from 'next/router';
export default function WhitepaperGeneratorRedirect() {;
import {useEffect} from 'react';
import {useRouter} from 'next/router';
export default function WhitepaperGeneratorRedirect() {;
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/tokenomics');
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
export default function WhitepaperGeneratorRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/tokenomics')
  }, [router]);
  return null
}
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
<<<<<<< HEAD
;
}

}
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function WhitepaperGeneratorRedirect(req, res) {
  try {
  const router = useRouter();
  useEffect(() => {;
    router.replace('/tokenomics');
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
