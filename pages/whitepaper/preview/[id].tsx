
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

export default function WhitepaperPreview() {;


=======
import { useRouter } from 'next/router',
import { useEffect, useState } from 'react',
export default function WhitepaperPreview() {
  const router = useRouter(),
  const { id } = router.query,
  const [markdown, setMarkdown] = useState<string>(''),
  const [notFound, setNotFound] = useState(false),
  useEffect(() => {
    if (!id || Array.isArray(id)) return,
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query)
    // In a production app, this would fetch from a real DB.
    fetch(`/api/whitepaper/get?id=${id}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setMarkdown(d.markdown || ''))
      .catch(() => setNotFound(true))
  }, [id]),
  if (notFound) return <div className="container mx-auto px-4 py-6">Preview not available or expired.</div>,
  if (!markdown) return <div className="container mx-auto px-4 py-6">Loading…</div>,
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold mb-4">Whitepaper Preview</h1>
      <pre className="whitespace-pre-wrap text-sm leading-6">{markdown}</pre>
    </div>
  )
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export default function WhitepaperPreview(req, res) {
  try {
  const router = useRouter();
  const { id } = router.query;
  const [markdown, setMarkdown] = useState<string>('');
  const [notFound, setNotFound] = useState(false);

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

  useEffect(() => {
    if (!id |Array.isArray(id)) return;
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query)
    // In a production app, this would fetch from a real DB.
    fetch(`/api/whitepaper/get?id=${id}`)


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

    return (
      <div className='container mx-auto px-4 py-6'>;
        Preview not available or expired.;
      </div>;
    );
  if (!markdown);
    return <div className='container mx-auto px-4 py-6'>Loading…</div>;

  return (

    <div className='container mx-auto px-4 py-6'>;
      <h1 className='text-xl font-semibold mb-4'>Whitepaper Preview</h1>;
      <pre className='whitespace-pre-wrap text-sm leading-6'>{markdown}</pre>;
    </div>;
  );

    // In a production app, this would fetch from a real DB.;
    fetch (`/api / whitepaper / get?id=${id}`);
      .then (r => (r.ok ? r.json () : Promise.reject ()));
      .then (d => set_markdown (d.markdown || ''));
      .catch (() => setNotFound (true));
  }, [id]);
;
  // Check condition
if (
    return () {
  $2
}




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
