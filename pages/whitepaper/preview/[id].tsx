import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function WhitepaperPreview() {
  const router = useRouter();
  const { id } = router.query;
  const [markdown, setMarkdown] = useState<string>('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id || Array.isArray(id)) return;
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query)
    // In a production app, this would fetch from a real DB.
    fetch(`/api/whitepaper/get?id=${id}`)
<<<<<<< HEAD
<<<<<<< HEAD
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then(d => setMarkdown(d.markdown || ''))
      .catch(() => setNotFound(true));
=======
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setMarkdown(d.markdown || ''))
      .catch(() => setNotFound(true))
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [id]);

  if (notFound) return <div className="container mx-auto px-4 py-6">Preview not available or expired.</div>;
  if (!markdown) return <div className="container mx-auto px-4 py-6">Loading…</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold mb-4">Whitepaper Preview</h1>
      <pre className="whitespace-pre-wrap text-sm leading-6">{markdown}</pre>
    </div>
<<<<<<< HEAD
  );
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
