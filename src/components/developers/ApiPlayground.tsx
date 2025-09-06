
interface Param {

  name: string
type: string
required?: boolean
}interface ApiPlaygroundProps {
  method: string
  path: string
  params?: Param[]
export function ApiPlayground({
  method
  path
  params = []
}: ApiPlaygroundProps) {
  const [apiKey, setApiKey] = useState('demo_key_123')
  const [paramValues, setParamValues] = useState<Record<string, string>>({})
  const [body, setBody] = useState('{}')
  const [response, setResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const handleParamChange = (name: string, value: string) => {
    setParamValues(prev => ({ ...prev, [name]: value }))
  }
  const sendRequest = async () => {
    // For API documentation, use current domain if NEXT_PUBLIC_API_URL is not set

      (typeof window !== 'undefined' ? window.location.origin : '')
    let url = `${baseUrl}${path}`
    const searchParams = new URLSearchParams()
    if (method === 'GET' |method === 'DELETE') {
      params.forEach(p => {
        const val = paramValues[p.name]
        if (val) searchParams.append(p.name, val)
      })
      const query = searchParams.toString()
      if (query) url += `?${query}` }

    const options: RequestInit = {
      method
      headers: {

      try {
        options.body = JSON.stringify(JSON.parse(body))
      } catch {
        options.body = body

  return (
    <div className="space-y-4">
      <Input
        value={apiKey}

      />
      {params.map(p => (
        <Input
          key={p.name}

          onChange={e => handleParamChange(p.name, e.target.value)}        />
      ))}
      {method !== 'GET' && method !== 'DELETE' && (
        <Textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          className='font-mono'        />
      )}
      <Button onClick={sendRequest} disabled={loading}>
        {loading ? 'Sending...' : 'Send Request'}
      </Button>
      {response && <CodeBlock code={response} language='json' />}
    </div>
  )
export default ApiPlayground
  const val = paramValues[p.name]
if (val) searchParams.append (p.name, val)
})
const query = searchParams.toString ()
if (query) url += `?$ {
  query
}`
}const options: RequestInit = {
  method, headers: {
  Authorization: `Bearer $ {
  apiKey
}`
"Content-Type" : "application/json"
}
//Add timeout to prevent hanging signal: AbortSignal.timeout (15000)
}
}setLoading (true)
setResponse (null)
let responseText: string
if (contentType?.includes ('application/json') ) {
  try {
  /> {
  params.map ( (p) => (<Input key= {
