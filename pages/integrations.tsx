<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import {useEffect} from 'react';


export default function IntegrationsRedirect() {;

<<<<<<< HEAD
=======
=======
export default function IntegrationsRedirect() {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function IntegrationsRedirect() {;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/admin/integrations');
  }, [router]);
  return null;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


}


<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/admin/integrations') }, [router]);
  return null
}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

}

}
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function IntegrationsRedirect(req, res) {
  try {
  const router = useRouter();
  useEffect(() => { router.replace('/admin/integrations') }, [router]);
  return null;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
