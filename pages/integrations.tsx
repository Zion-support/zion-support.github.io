<<<<<<< HEAD
<<<<<<< HEAD

import {useEffect} from 'react';
import {useRouter} from 'next/router';
export default function IntegrationsRedirect() {
=======

export default function IntegrationsRedirect() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/admin/integrations');
  }, [router]);
  return null;

<<<<<<< HEAD
=======


}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/admin/integrations') }, [router]);
  return null
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
