<<<<<<< HEAD
import { useRouter  } from 'next/router';
import { useEffect, useState } from 'react';
export default function WhitepaperPreview() {

=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useRouter  } from 'next/router';
import { useEffect, useState } from 'react';
export default function WhitepaperPreview() {
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

export default function WhitepaperPreview() {;
<<<<<<< HEAD
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { useRouter } from 'next/router',
import { useEffect, useState } from 'react',
export default function WhitepaperPreview() {
  const router = useRouter(),
  const { id } = router.query,
  const [markdown, setMarkdown] = useState<string>(''),
  const [notFound, setNotFound] = useState(false),
<<<<<<< HEAD
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

=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const router = useRouter();
  const { id } = router.query;
  const [markdown, setMarkdown] = useState<string>('');
  const [notFound, setNotFound] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  useEffect(() => {
    if (!id |Array.isArray(id)) return;
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query)
    // In a production app, this would fetch from a real DB.
    fetch(`/api/whitepaper/get?id=${id}`)

<<<<<<< HEAD
  return (
    <div className='container mx-auto px-4 py-6'>
      <h1 className='text-xl font-semibold mb-4'>Whitepaper Preview</h1>
      <pre className='whitespace-pre-wrap text-sm leading-6'>{markdown}</pre>
    </div>
);

}
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
