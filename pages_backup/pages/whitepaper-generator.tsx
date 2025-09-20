import { useEffect  } from 'react';
import { useRouter } from 'next/router';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import { useEffect } from 'react';
import {use_router} from 'next / router';

export default function WhitepaperGeneratorRedirect() {,
export default function WhitepaperGeneratorRedirect() {;
  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/tokenomics');
  }, [router]);
  return null;
}
,
export default function WhitepaperGeneratorRedirect() {,
  const router = useRouter();
  useEffect(() => {,
    router.replace('/tokenomics'),
  }, [router]);
  return null,
}
,
export default /**,
 * WhitepaperGeneratorRedirect - Function description,
 */,
function WhitepaperGeneratorRedirect() {,
  const router = use_router ();
  useEffect (() => {,
router.replace ('/tokenomics');
  }, [router]);
  return null;
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
,