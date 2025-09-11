
=======

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
==============


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function WhitepaperGeneratorRedirect() {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/tokenomics');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }, [router]);
  return null;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
