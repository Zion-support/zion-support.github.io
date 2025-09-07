<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useRouter  } from 'next/router';
import { useEffect, useState } from 'react';
export default function WhitepaperPreview() {

<<<<<<< HEAD


=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {useRouter} from 'next/router';
=======


import { useRouter  } from 'next/router';'
import { useEffect, useState } from 'react';
export default function WhitepaperPreview() {}
';
import {useRouter} from 'next/router';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {useEffect, useState} from 'react';


'
import {useRouter} from 'next/router';'
import {useEffect, useState} from 'react';

<<<<<<< HEAD

=======
=======
import { useRouter  } from 'next/router';
import { useEffect, useState } from 'react';
export default function WhitepaperPreview() {
<<<<<<< HEAD


import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

export default function WhitepaperPreview() {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useRouter } from 'next/router',
=======
export default function WhitepaperPreview() { return null; }
import { useRouter } from 'next/router','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useEffect, useState } from 'react',
export default function WhitepaperPreview() {}
  const router = useRouter(),
<<<<<<< HEAD
  const { id } = router.query,
  const [markdown, setMarkdown] = useState<string>(''),
  const [notFound, setNotFound] = useState(false),
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const { id } = router.query,'
  const [markdown, setMarkdown] = useState<string>(''),;
  const [notFound, setNotFound] = useState(false),;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const router = useRouter();
  const { id } = router.query;'
  const [markdown, setMarkdown] = useState<string>('');
  const [notFound, setNotFound] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  const router = useRouter();
  const { id } = router.query;'
  const [markdown, setMarkdown] = useState<string>('');
  const [notFound, setNotFound] = useState(false);

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  useEffect(() => {
=======
  useEffect(() => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    if (!id |Array.isArray(id)) return;
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query)
    // In a production app, this would fetch from a real DB.
    fetch(`/api/whitepaper/get?id=${id}`)
<<<<<<< HEAD
<<<<<<< HEAD
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then(d => setMarkdown(d.markdown |''))
      .catch(() => setNotFound(true));
  }, [id]);
  if (notFound)
=======

}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  useEffect(() => {;
    if (!id || Array && Array.isArray(id)) return;
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query);
    // In a production app, this would fetch from a real DB.;`
    fetch(`/api/whitepaper/get?id=${id}`);
      .then(r => (r && r.ok ? r && r.json() : Promise && Promise.reject()));'
      .then(d => setMarkdown(d && d.markdown || ''));
<<<<<<< HEAD
      .catch(() => setNotFound(true));
  }, [id]);

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return (
      <div className='container mx-auto px-4 py-6'>
        Preview not available or expired.
      </div>
=======





    return ('
      <div className='container mx-auto px-4 py-6'>;
        Preview not available or expired.;
      </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    );
<<<<<<< HEAD
  if (!markdown)
=======
  if (!markdown);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return <div className='container mx-auto px-4 py-6'>Loading…</div>;
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



'
    <div className='container mx-auto px-4 py-6'>;'
      <h1 className='text-xl font-semibold mb-4'>Whitepaper Preview</h1>;'
      <pre className='whitespace-pre-wrap text-sm leading-6'>{markdown}</pre>;
    </div>;
  );


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
.then(r => (r.ok ? r.json() : Promise.reject()))
      .then(d => setMarkdown(d.markdown || ''))
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      .catch(() => setNotFound(true));
  }, [id]);
    return (
      <div className='container mx-auto px-4 py-6'>;
        Preview not available or expired.;
      </div>;
    );
<<<<<<< HEAD
  if (!markdown);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    // In a production app, this would fetch from a real DB.;
=======




    // In a production app, this would fetch from a real DB.;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    fetch (`/api / whitepaper / get?id=${id}`);
      .then (r => (r.ok ? r.json () : Promise.reject ()));'
      .then (d => set_markdown (d.markdown || ''));
      .catch (() => setNotFound (true));
  }, [id]);
;
  // Check condition;
if (
    return () {}
  $2;
}



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

=======
  if (!markdown)
    return <div className='container mx-auto px-4 py-6'>Loading…</div>;
  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <div className='container mx-auto px-4 py-6'>
      <h1 className='text-xl font-semibold mb-4'>Whitepaper Preview</h1>
      <pre className='whitespace-pre-wrap text-sm leading-6'>{markdown}</pre>
    </div>
<<<<<<< HEAD
);
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
