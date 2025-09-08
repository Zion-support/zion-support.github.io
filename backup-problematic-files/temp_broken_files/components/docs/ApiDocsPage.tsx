

export default function ApiDocsPage() {
  const spec: ApiDocsSpec = v1, // could switch by version later
  const [selectedVersion, setSelectedVersion] = useState<string>(spec.defaultVersion)
  const [visibility, setVisibility] = useState<Visibility | 'all'>('all')
  const allEndpoints: EndpointSpec[] = useMemo(() => spec.sections.flatMap((s) => s.endpoints), [spec])
  const firstEndpoint = useMemo(() => allEndpoints.find((e) => e.versions.includes(selectedVersion)), [allEndpoints, selectedVersion])
  const [activeEndpointId, setActiveEndpointId] = useState<string | undefined>(firstEndpoint?.id)
  const activeEndpoint = allEndpoints.find((e) => e.id === activeEndpointId) |firstEndpoint






:components/docs/ApiDocsPage.tsx
        {activeEndpoint ? (


        {_activeEndpoint ? (


          <EndpointDetail endpoint={activeEndpoint} />
"
          <div className="text-sm text-high-contrast-muted">Select an endpoint from the sidebar</div>""
        <section className="mt-8">"
</section>"
          <div className="text-lg font-semibold mb-2">Changelog</div>"
          <ChangelogWidget />

        </section>



  const [content, setContent] = useState('')
  const [message, setMessage] = useState('')
  async function load() {
    setMessage('')
    const res = await fetch('/api/docs/changelog')
    const data = await res.json()
    setContent(data.content |'')
  }
  async function save() {
    setMessage('')
    await fetch('/api/docs/changelog', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content }) })




