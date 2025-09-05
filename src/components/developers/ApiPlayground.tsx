<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Button } from "@/components/ui/button",
import CodeBlock from "./CodeBlock",
=======
import { useState } from &quot;react&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import CodeBlock from &quot;./CodeBlock&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface Param {
  name: string,
  type: string,
  required?: boolean
}

interface ApiPlaygroundProps {
  method: string,
  path: string,
  params?: Param[]
}

export function ApiPlayground({ method, path, params = [] }: ApiPlaygroundProps) {
<<<<<<< HEAD
  const [apiKey, setApiKey] = useState("demo_key_123"),
  const [paramValues, setParamValues] = useState<Record<string string>>({}),
  const [body, setBody] = useState("{}"),
  const [response, setResponse] = useState<string | null>(null),
  const [loading, setLoading] = useState(false),
=======
  const [apiKey, setApiKey] = useState(&quot;demo_key_123&quot;);
  const [paramValues, setParamValues] = useState<Record<string, string>>({});
  const [body, setBody] = useState(&quot;{}&quot;);
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  const handleParamChange = (name: string, value: string) => {
    setParamValues((prev) => ({ ...prev, [name]: value }))
  },

  const sendRequest = async () => {
    // For API documentation, use current domain if NEXT_PUBLIC_API_URL is not set
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' ? window.location.origin : ''),
    let url = `${baseUrl}${path}`,

<<<<<<< HEAD
    const searchParams = new URLSearchParams(),
    if (method === "GET" || method === "DELETE") {
=======
    const searchParams = new URLSearchParams();
    if (method === &quot;GET&quot; || method === &quot;DELETE&quot;) {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      params.forEach((p) => {
        const val = paramValues[p.name],
        if (val) searchParams.append(p.name, val)
      }),
      const query = searchParams.toString(),
      if (query) url += `?${query}`
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    const options: RequestInit = {_method, _headers: {
        Authorization: `Bearer ${apiKey}`,
        &quot;Content-Type&quot;: &quot;application/json&quot;},
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(15000)},

<<<<<<< HEAD
    if (method !== &quot;GET&quot; && method !== &quot;DELETE&quot;) {
      try {
        options.body = JSON.stringify(JSON.parse(body))
      } catch {
        options.body = body
      }
=======
    if (method !== "GET" && method !== "DELETE") {_try {
        options.body = JSON.stringify(JSON.parse(body));} catch {_options.body = body;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    setLoading(true),
    setResponse(null),

<<<<<<< HEAD
    try {
      const res = await fetch(url, options),
      const contentType = res.headers.get('content-type'),
=======
    try {_const _res = await fetch(url, _options);
      const _contentType = res.headers.get('content-type');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      let responseText: string,
      if (contentType?.includes('application/json')) {
        try {
<<<<<<< HEAD
          const jsonData = await res.json(),
          responseText = JSON.stringify(jsonData, null, 2)
        } catch {
          responseText = await res.text()
        }
      } else {
        responseText = await res.text()
      }

      // Format the response with status information
      const statusInfo = `HTTP ${res.status} ${res.statusText}\n\n`,
      setResponse(statusInfo + responseText)
    } catch (err: any) {
      let errorMessage = 'Request failed',
      
      if (err.name === 'AbortError') {
        errorMessage = 'Request timed out (15s)'
      } else if (err.message?.includes('Failed to fetch')) {
        errorMessage = 'Network error - check CORS configuration or API endpoint'
      } else {
        errorMessage = err.message || 'Unknown error occurred'
      }
      
      setResponse(`Error: ${errorMessage}\n\nAttempted URL: ${url}\n\nTroubleshooting: \n- Ensure the API endpoint exists\n- Check CORS configuration\n- Verify API key is valid\n- Check network connectivity`)
    } finally {
      setLoading(false)
    }
  },

  return (
    <div className=&quot;space-y-4&quot;>
      <Input
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder=&quot;API Key&quot;
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
      {_params.map(_(p) => (_<Input
          key={p.name}
<<<<<<< HEAD
          value={paramValues[p.name] || "&quot;}
          onChange={(e) => handleParamChange(p.name, e.target.value)}
        />
      ))}
      {method !== &quot;GET&quot; && method !== &quot;DELETE" && (
        <Textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="font-mono&quot;
        />
      )}
      <Button onClick={sendRequest} disabled={loading}>
        {loading ? &quot;Sending...&quot; : &quot;Send Request&quot;}
      </Button>
      {response && <CodeBlock code={response} language=&quot;json" />}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}

export default ApiPlayground,
