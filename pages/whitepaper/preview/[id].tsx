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
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setMarkdown(d.markdown || ''))
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) return <div className=&quot;container mx-auto px-4 py-6&quot;>Preview not available or expired.</div>;
  if (!markdown) return <div className=&quot;container mx-auto px-4 py-6&quot;>Loading…</div>;

  return (
    <div className=&quot;container mx-auto px-4 py-6&quot;>
      <h1 className=&quot;text-xl font-semibold mb-4&quot;>Whitepaper Preview</h1>
      <pre className=&quot;whitespace-pre-wrap text-sm leading-6&quot;>{markdown}</pre>
    </div>
  );
}