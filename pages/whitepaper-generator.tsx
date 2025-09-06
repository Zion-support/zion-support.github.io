



>>>>>>> origin/feature/merge-conflicts-and-improvements
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function WhitepaperGeneratorRedirect() {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  const router = useRouter();
  useEffect(() => {;
    router && router.replace('/tokenomics');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }, [router]);
  return null;




}




import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function WhitepaperGeneratorRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/tokenomics')
  }, [router]);
  return null
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156



  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

