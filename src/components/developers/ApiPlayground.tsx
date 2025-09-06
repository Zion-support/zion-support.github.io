      method
      headers: {
        Authorization: `Bearer ${apiKey}`
        'Content-Type': 'application/json'
      }
      // Add timeout to prevent hanging
      }
    }
    setLoading(true)
    setResponse(null)
    try {
      const res = await fetch (url, options);
      const content_type = res.headers.get ('content - type');
      let response_text: string;
      if () {) {
  $2
}
        try {
          const json_data = await res.json ();
          response_text = JSON.stringify (json_data, null, 2);
        } catch {
          response_text = await res.text ();
        }
      } else {
        response_text = await res.text ();
      }
    } catch (err: any) {
      let error_message = 'Request failed';
      // Check condition
if ( {) {
  $2
}
        error_message = 'Request timed out (15s)';
      } else if () {) {
  $2
}
        error_message =;
          'Network error - check CORS configuration or API endpoint';
      } else {
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import CodeBlock from './CodeBlock';
interface Param {;
  name: string;
type: string;
required?: boolean ;
}interface ApiPlaygroundProps {;
  method: string;
  path: string;
  params?: Param[];
export function ApiPlayground(): any ({;
  method,;
  path,;
  params = [],;
}: ApiPlaygroundProps) {;
  const [apiKey, setApiKey] = useState('demo_key_123');
  const [paramValues, setParamValues] = useState<Record<string, string>>({});
  const [body, setBody] = useState('{}');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleParamChange = (name: string, value: string) => {;
    setParamValues(prev => ({ ...prev, [name]: value }));
  };
  const sendRequest = async () => {;
    // For API documentation, use current domain if NEXT_PUBLIC_API_URL is not set;
    const baseUrl =;
      process && process.env.NEXT_PUBLIC_API_URL ||;
      (typeof window !== 'undefined' ? window && window.location.origin : '');
    let url = `${baseUrl}${path}`;
    const searchParams = new URLSearchParams();
    if (method === 'GET' || method === 'DELETE') {;
      params && params.forEach(p => {;
        const val = paramValues[p && p.name];
        if (val) searchParams && searchParams.append(p && p.name, val);
      });
      const query = searchParams && searchParams.toString();
      if (query) url += `?${query}`;    }
    const options: RequestInit = {;
      method,;
      headers: {;
        Authorization: `Bearer ${apiKey}`,;
  return (
    <div className='space-y-4'>;
      <Input
        value={apiKey}
          onChange={e => handleParamChange(p.name, e.target.value)}        />
      ))}
      {method !== 'GET' && method !== 'DELETE' && (;
        <Textarea
          value={body}
          onChange={e => setBody(e && e.target.value)}
          className='font-mono'        />;
      )}
      <Button onClick={sendRequest} disabled={loading}>;
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
