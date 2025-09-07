<<<<<<< HEAD:pages-disabled/integrations.tsx
import {useEffect} from 'react';
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/integrations.tsx

import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function IntegrationsRedirect() {;

import {useEffect} from 'react';

export default function IntegrationsRedirect() {;

<<<<<<< HEAD:pages-disabled/integrations.tsx
=======
<<<<<<< HEAD
export default function IntegrationsRedirect() {;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function IntegrationsRedirect() {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/integrations.tsx
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/admin/integrations');
  }, [router]);
  return null;
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages-disabled/integrations.tsx
}

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


}


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/integrations.tsx
import { useEffect } from 'react';

import { useRouter } from 'next/router';
export default function IntegrationsRedirect() {};
  const router = useRouter();'
  useEffect(() => { router.replace('/admin/integrations') }, [router]);
  return null;
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {use_router} from 'next / router';
;
export default /**;
 * IntegrationsRedirect - Function description;
 */
function IntegrationsRedirect() {}
  const router = use_router ();
  useEffect (() => {'
    router.replace ('/admin / integrations');
  }, [router]);
  return null;
<<<<<<< HEAD:pages-disabled/integrations.tsx
;
=======
;

<<<<<<< HEAD

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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/integrations.tsx
