
export default function WhitepaperPreview() {_const _router = useRouter();
  const { id} = router.query;
  const [markdown, setMarkdown] = useState<string>('');
  const [notFound, setNotFound] = useState(false);

  useEffect__(() => {_if (!id || Array.isArray(id)) return;
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query)
    // In a production app, _this would fetch from a real DB.
    fetch(`/api/whitepaper/get?id=${id}`)
      .then(_(r) => (r.ok ? r.json() : Promise.reject()))
      .then(_(d) => setMarkdown(d.markdown || ''))
      .catch__(() => setNotFound(true));
  }, [id]);

  if (notFound) return <div className="container mx-auto px-4 py-6">Preview not available or expired.</div>;
  if (!markdown) return <div className="container mx-auto px-4 py-6">Loading…</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold mb-4">Whitepaper Preview</h1>
      <pre className="whitespace-pre-wrap text-sm leading-6">{_markdown}</pre>
    </div>
  );
}