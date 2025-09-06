
import {useEffect} from 'react';
import {useRouter} from 'next/router';
export default function ContractBuilderRedirect() {;

  const router = useRouter();
  useEffect(() => {
router.replace('/automation/contract-builder');
  }, [router]);
  return null;


}

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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
