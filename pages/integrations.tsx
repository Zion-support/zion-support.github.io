<<<<<<< HEAD
<<<<<<< HEAD

import {useEffect} from 'react';
import {useRouter} from 'next/router';
export default function IntegrationsRedirect() {
=======
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function IntegrationsRedirect() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const router = useRouter();
  useEffect(() => {
    router.replace('/admin/integrations');
  }, [router]);
  return null;

<<<<<<< HEAD
=======
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
