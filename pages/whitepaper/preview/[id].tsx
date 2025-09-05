<<<<<<< HEAD
import { useRouter } from 'next/router',
import { useEffect, useState } from 'react',

export default function WhitepaperPreview() {
  const router = useRouter(),
  const { id } = router.query,
  const [markdown, setMarkdown] = useState<string>(''),
  const [notFound, setNotFound] = useState(false),

  useEffect(() => {
    if (!id || Array.isArray(id)) return,
=======

export default function WhitepaperPreview() {_const _router = useRouter();
  const { id} = router.query;
  const [markdown, setMarkdown] = useState<string>('');
  const [notFound, setNotFound] = useState(false);

  useEffect__(() => {_if (!id || Array.isArray(id)) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query)
    // In a production app, _this would fetch from a real DB.
    fetch(`/api/whitepaper/get?id=${id}`)
<<<<<<< HEAD
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setMarkdown(d.markdown || ''))
      .catch(() => setNotFound(true))
  }, [id]),
=======
      .then(_(r) => (r.ok ? r.json() : Promise.reject()))
      .then(_(d) => setMarkdown(d.markdown || ''))
      .catch__(() => setNotFound(true));
  }, [id]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

<<<<<<< HEAD
  if (notFound) return <div className="container mx-auto px-4 py-6">Preview not available or expired.</div>,
  if (!markdown) return <div className="container mx-auto px-4 py-6">Loading…</div>,
=======
  if (notFound) return <div className=&quot;container mx-auto px-4 py-6&quot;>Preview not available or expired.</div>;
  if (!markdown) return <div className=&quot;container mx-auto px-4 py-6&quot;>Loading…</div>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
<<<<<<< HEAD
    <div className=&quot;container mx-auto px-4 py-6&quot;>
      <h1 className=&quot;text-xl font-semibold mb-4&quot;>Whitepaper Preview</h1>
      <pre className=&quot;whitespace-pre-wrap text-sm leading-6&quot;>{markdown}</pre>
=======
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold mb-4">Whitepaper Preview</h1>
      <pre className="whitespace-pre-wrap text-sm leading-6">{_markdown}</pre>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}