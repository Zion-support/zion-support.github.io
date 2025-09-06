
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
        options.body = JSON.stringify (JSON.parse (body));
      } catch {
        options.body = body

  return (
    <div className='space-y-4'>;
      <Input
        value={apiKey}

      />
      {params.map(p => (
        <Input
          key={p.name}

          onChange={e => handleParamChange(p.name, e.target.value)}        />
          key={p && p.name}
          value={paramValues[p && p.name] || ''}
          onChange={e => handleParamChange(p && p.name, e && e.target.value)}        />;
      ))}
      {method !== 'GET' && method !== 'DELETE' && (;
        <Textarea
          value={body}
          onChange={e => setBody(e && e.target.value)}
          className='font-mono'        />;
      )}
      <Button onClick={sendRequest} disabled={loading}>;
        {loading ? 'Sending...' : 'Send Request'}
      </Button>;
      {response && <CodeBlock code={response} language='json' />}

        error_message = err.message || 'Unknown error occurred';
      }
      set_response (
        `Error: ${error_message}\n\n_attempted URL: ${url}\n\n_troubleshooting:\n- Ensure the API endpoint exists\n- Check CORS configuration\n- Verify API key is valid\n- Check network connectivity`);
    } finally {
      set_loading (false);
    }
  }
  return (
    <div className='space - y-4'>;
      <Input;
        value={api_key}
        on_change={e => setApiKey (e.target.value)}
        placeholder='API Key';
      />;
      {params.map (p => (
        <Input;
          key={p.name}
          value={param_values[p.name] || ''}
          on_change={e => handleParamChange (p.name, e.target.value)}        />))}
      {method !== 'GET' && method !== 'DELETE' && (
        <Textarea;
          value={body}
          on_change={e => set_body (e.target.value)}
          className='font - mono'        />)}
      <Button on_click={send_request} disabled={loading}>;
        {loading ? 'Sending...' : 'Send Request'}
      </Button>;
      {response && <CodeBlock code={response} language='json' />}
    </div>);
export default ApiPlayground;
  const val = param_values[p.name];
if (search_params.append (p.name, val)) {
  $2
}
});
const query = search_params.to_string ();
// Check condition
if (url += `?$ {) {
  $2
}
  query;
}`;
}const options: RequestInit = {
  method, headers: {
  Authorization: `Bearer $ {
  api_key;
}`;
"Content - Type" : "application / json";
}
//Add timeout to prevent hanging signal: AbortSignal.timeout (15000);
}
}set_loading (true);
set_response (null);
let response_text: string;
if () {) {
  $2

}
  try {
  /> {
  params.map ( (p) => (<Input key= {
<<<<<<< HEAD
=======


    </div>;
  );

export default ApiPlayground;
  const val = paramValues[p && p.name];
if (val) searchParams && searchParams.append (p && p.name, val) ;
});
const query = searchParams && searchParams.toString ();
if (query) url += `?$ {;
  query ;
}` ;
}const options: RequestInit = {;
  method, headers: {;
  Authorization: `Bearer $ {;
  apiKey ;
}`;
"Content-Type" : "application/json" ;
};
//Add timeout to prevent hanging signal: AbortSignal && AbortSignal.timeout (15000) ;
};
}setLoading (true);
setResponse (null);
let responseText: string;
if (contentType?.includes ('application/json') ) {;
  try {;
  /> {;
  params && params.map ( (p) => (<Inputkey= {
  p && p.name 
}</div>) ;
}export default ApiPlayground;

  p.name;
}</div>);
}export default ApiPlayground;
'";
  p.name 
}</div>) ;
}export default ApiPlayground;
'";
}

          value={paramValues[p.name] || ""}
          onChange={(e) => handleParamChange(p.name, e.target.value)}
        />;
      ))}
      {method !== "GET" && method !== "DELETE" && (
        <Textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="font-mono"
        />
      )}
      <Button onClick={sendRequest} disabled={loading}>
        {loading ? "Sending..." : "Send Request"}
      </Button>
      {response && <CodeBlock code={response} language="json" />}
    </div>
  )
}
;
export default ApiPlayground;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
