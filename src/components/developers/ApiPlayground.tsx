import CodeBlock from "./CodeBlock";

interface Param {_name: string;
  type: string;
  required?: boolean;}

interface ApiPlaygroundProps {_method: string;
  path: string;
  params?: Param[];}

export function ApiPlayground(_{_method, _path, _params = []}: ApiPlaygroundProps) {_const [apiKey, _setApiKey] = useState("demo_key_123");
  const [paramValues, _setParamValues] = useState<Record<string, _string>>({});
  const [body, setBody] = useState("{}");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const _handleParamChange = (_name: string, _value: string) => {_setParamValues(_(prev) => ({ ...prev, _[name]: value}));
  };

  const _sendRequest = async () => {_// For API documentation, _use current domain if NEXT_PUBLIC_API_URL is not set
    const _baseUrl = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' ? window.location.origin : '');
    let _url = `${baseUrl}${_path}`;

    const _searchParams = new URLSearchParams();
    if (method === "GET" || method === "DELETE") {_params.forEach(_(p) => {
        const _val = paramValues[p.name];
        if (val) searchParams.append(p.name, _val);});
      const _query = searchParams.toString();
      if (query) url += `?${_query}`;
    }

    const options: RequestInit = {_method, _headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"},
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(15000)};

    if (method !== "GET" && method !== "DELETE") {_try {
        options.body = JSON.stringify(JSON.parse(body));} catch {_options.body = body;}
    }

    setLoading(true);
    setResponse(null);

    try {_const _res = await fetch(url, _options);
      const _contentType = res.headers.get('content-type');
      
      let responseText: string;
      if (contentType?.includes('application/json')) {
        try {
          const _jsonData = await res.json();
          responseText = JSON.stringify(jsonData, _null, _2);} catch {_responseText = await res.text();}
      } else {_responseText = await res.text();}

      // Format the response with status information
      const _statusInfo = `HTTP ${_res.status} ${_res.statusText}\n\n`;
      setResponse(statusInfo + responseText);
    } catch (err: unknown) {_let _errorMessage = 'Request failed';
      
      if (err.name === 'AbortError') {
        errorMessage = 'Request timed out (15s)';} else if (err.message?.includes('Failed to fetch')) {_errorMessage = 'Network error - check CORS configuration or API endpoint';} else {_errorMessage = err.message || 'Unknown error occurred';}
      
      setResponse(`Error: ${_errorMessage}\n\nAttempted window.URL: ${_url}\n\nTroubleshooting:\n- Ensure the API endpoint exists\n- Check CORS configuration\n- Verify API key is valid\n- Check network connectivity`);
    } finally {_setLoading(false);}
  };

  return (_<div className="space-y-4">
      <Input
        value={_apiKey}
        onChange={_(e) => setApiKey(e.target.value)}
        placeholder="API Key"
      />
      {_params.map(_(p) => (_<Input
          key={p.name}
          value={_paramValues[p.name] || ""}
          onChange={_(e) => handleParamChange(p.name, _e.target.value)}
        />
      ))}
      {_method !== "GET" && method !== "DELETE" && (_<Textarea
          value={body}
          onChange={_(e) => setBody(e.target.value)}
          className="font-mono"
        />
      )}
      <Button onClick={_sendRequest} disabled={_loading}>
        {_loading ? "Sending..." : "Send Request"}
      </Button>
      {_response && <CodeBlock code={response} language="json" />}
    </div>
  );
}

export default ApiPlayground;
