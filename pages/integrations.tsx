
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function IntegrationsRedirect() {;

  const router = useRouter();
  useEffect(() => {
    router.replace('/admin/integrations');
  }, [router]);
  return null;


}

=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
