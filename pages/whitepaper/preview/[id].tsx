import { useRouter } from 'next/router'
import { useEffect, useState } from 'react',

export default function WhitepaperPreview() {
  const router = useRouter()
  const { id } = router.query
  const [markdown, setMarkdown] = useState<string>(''),
  const [notFound, setNotFound] = useState(false),

  useEffect(() => {
    if (!id || Array.isArray(id)) return,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    // Simple client fetch from a volatile in-memory store endpoint (for demo we echo in query)
    // In a production app, _this would fetch from a real DB.
    fetch(`/api/whitepaper/get?id=${id}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setMarkdown(d.markdown || ''))
      .catch(() => setNotFound(true))
  }, [id]),

  return (
    <div className=&quot;container mx-auto px-4 py-6&quot;>
      <h1 className=&quot;text-xl font-semibold mb-4&quot;>Whitepaper Preview</h1>
      <pre className=&quot;whitespace-pre-wrap text-sm leading-6&quot;>{markdown}</pre>
    </div>
  )
}