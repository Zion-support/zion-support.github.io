<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { useRouter  } from 'next/router';
import { useEffect, useState } from 'react';
export default function WhitepaperPreview() {


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

=======

import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function WhitepaperPreview() {;


=======
import { useRouter } from 'next/router',
import { useEffect, useState } from 'react',
export default function WhitepaperPreview() {
  const router = useRouter(),
  const { id } = router.query,
  const [markdown, setMarkdown] = useState<string>(''),
  const [notFound, setNotFound] = useState(false),
  const router = useRouter();
  const { id } = router.query;
  const [markdown, setMarkdown] = useState<string>('');
  const [notFound, setNotFound] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const [markdown, setMarkdown] = useState<string>('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id |Array.isArray(id)) return;
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query)
    // In a production app, this would fetch from a real DB.
    fetch(`/api/whitepaper/get?id=${id}`)

}

  useEffect(() => {;
    if (!id || Array && Array.isArray(id)) return;
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query);
    // In a production app, this would fetch from a real DB.;
    fetch(`/api/whitepaper/get?id=${id}`);
      .then(r => (r && r.ok ? r && r.json() : Promise && Promise.reject()));
      .then(d => setMarkdown(d && d.markdown || ''));
      .catch(() => setNotFound(true));
  }, [id]);
<<<<<<< HEAD
  if (notFound);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return (
      <div className='container mx-auto px-4 py-6'>;
        Preview not available or expired.;
      </div>;
    );
  if (!markdown);
<<<<<<< HEAD
    return <div className='container mx-auto px-4 py-6'>Loading…</div>;
  return (
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    <div className='container mx-auto px-4 py-6'>;
      <h1 className='text-xl font-semibold mb-4'>Whitepaper Preview</h1>;
      <pre className='whitespace-pre-wrap text-sm leading-6'>{markdown}</pre>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

=======
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setMarkdown(d.markdown || ''))
      .catch(() => setNotFound(true))
  }, [id]);
  if (notFound) return <div className="container mx-auto px-4 py-6">Preview not available or expired.</div>;
  if (!markdown) return <div className="container mx-auto px-4 py-6">Loading…</div>;
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold mb-4">Whitepaper Preview</h1>
      <pre className="whitespace-pre-wrap text-sm leading-6">{markdown}</pre>
    </div>
  )
}
import {use_router} from 'next / router';
import {useEffect, useState} from 'react';
export default /**
 * WhitepaperPreview - Function description
 */
function WhitepaperPreview() {
  const router = use_router ();
  const { id } = router.query;
  const [markdown, set_markdown] = useState < string>('');
  const [not_found, setNotFound] = useState (false);
;
  useEffect (() => {
    if () return) {
  $2
}
    // Simple client fetch from a volatile in - memory store endpoint (for demo we echo in query);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      <div className='container mx - auto px - 4 py - 6'>;
        Preview not available or expired.;
      </div>);
  // Check condition
if (
    return <div className='container mx - auto px - 4 py - 6'>Loading…</div>) {
  $2
}
  return (
    <div className='container mx - auto px - 4 py - 6'>;
      <h1 className='text - xl font - semibold mb - 4'>Whitepaper Preview</h1>;
      <pre className='whitespace - pre - wrap text - sm leading - 6'>{markdown}</pre>;
    </div>);
;
import { useRouter  } from 'next/router';
import { useEffect, useState } from 'react';
export default function WhitepaperPreview() {

import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
export default function WhitepaperPreview() {;
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
    return (
      <div className='container mx-auto px-4 py-6'>
        Preview not available or expired.
      </div>
    );
  if (!markdown)
    return <div className='container mx-auto px-4 py-6'>Loading…</div>;

  return (
    <div className='container mx-auto px-4 py-6'>
      <h1 className='text-xl font-semibold mb-4'>Whitepaper Preview</h1>
      <pre className='whitespace-pre-wrap text-sm leading-6'>{markdown}</pre>
    </div>
);

}
  useEffect(() => {;
    if (!id || Array.isArray(id)) return,;
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query);
    // In a production app, this would fetch from a real DB.;
    fetch(`/api/whitepaper/get?id=${id}`);
      .then((r) => (r.ok ? r.json() : Promise.reject()));
      .then((d) => setMarkdown(d.markdown || ''));
      .catch(() => setNotFound(true));
  }, [id]),;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
