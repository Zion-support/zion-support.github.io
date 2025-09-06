<<<<<<< HEAD
import { useRouter  } from 'next/router';
import { useEffect, useState } from 'react';
export default function WhitepaperPreview() {

=======
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

export default function WhitepaperPreview() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const router = useRouter();
  const { id } = router && router.query;
  const [markdown, setMarkdown] = useState<string>('');
  const [notFound, setNotFound] = useState(false);
<<<<<<< HEAD
  useEffect(() => {
    if (!id |Array.isArray(id)) return;
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query)
    // In a production app, this would fetch from a real DB.
    fetch(`/api/whitepaper/get?id=${id}`)
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then(d => setMarkdown(d.markdown |''))
      .catch(() => setNotFound(true));
  }, [id]);
  if (notFound)
=======

  useEffect(() => {;
    if (!id || Array && Array.isArray(id)) return;
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query);
    // In a production app, this would fetch from a real DB.;
    fetch(`/api/whitepaper/get?id=${id}`);
      .then(r => (r && r.ok ? r && r.json() : Promise && Promise.reject()));
      .then(d => setMarkdown(d && d.markdown || ''));
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div className='container mx-auto px-4 py-6'>;
        Preview not available or expired.;
      </div>;
    );
  if (!markdown);
    return <div className='container mx-auto px-4 py-6'>Loading…</div>;

  return (
<<<<<<< HEAD
    <div className='container mx-auto px-4 py-6'>
      <h1 className='text-xl font-semibold mb-4'>Whitepaper Preview</h1>
      <pre className='whitespace-pre-wrap text-sm leading-6'>{markdown}</pre>
    </div>
);
=======
    <div className='container mx-auto px-4 py-6'>;
      <h1 className='text-xl font-semibold mb-4'>Whitepaper Preview</h1>;
      <pre className='whitespace-pre-wrap text-sm leading-6'>{markdown}</pre>;
    </div>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
