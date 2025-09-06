const options: RequestInit = {
      method
      headers: {
        Authorization: `Bearer ${apiKey}`
        'Content-Type': 'application/json'
      }
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(15000)
    }
    if (method !== 'GET' && method !== 'DELETE') {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"},
      // Add timeout to prevent hanging

      try {
        options.body = JSON.stringify (JSON.parse (body));
      } catch {
        options.body = body
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

      // Format the response with status information;
      const status_info = `HTTP ${res.status} ${res.status_text}\n\n`;
      set_response (status_info + response_text);

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

        options.body = body

;
export function ApiPlayground({ method, path, params = [] }: ApiPlaygroundProps) {;
  const [apiKey, setApiKey] = useState("demo_key_123"),;
  const [paramValues, setParamValues] = useState<Record<string string>>({}),;
  const [body, setBody] = useState("{}"),;
  const [response, setResponse] = useState<string | null>(null),;
  const [loading, setLoading] = useState(false),;
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
        'Content-Type': 'application/json',;
      },;
      // Add timeout to prevent hanging;
      signal: AbortSignal && AbortSignal.timeout(15000),;
    };

    if (method !== 'GET' && method !== 'DELETE') {;
      try {;
        options && options.body = JSON && JSON.stringify(JSON && JSON.parse(body));
      } catch {;
        options && options.body = body;
      }
    }

    setLoading(true);
    setResponse(null);

    try {;
      const res = await fetch(url, options);
      const contentType = res && res.headers.get('content-type');

      let responseText: string;
      if (contentType?.includes('application/json')) {;
        try {;
          const jsonData = await res && res.json();
          responseText = JSON && JSON.stringify(jsonData, null, 2);
        } catch {;
          responseText = await res && res.text();
        }
      } else {;
        responseText = await res && res.text();
      }

      // Format the response with status information;
      const statusInfo = `HTTP ${res && res.status} ${res && res.statusText}\n\n`;
      setResponse(statusInfo + responseText);
    } catch (err: any) {;
      let errorMessage = 'Request failed';

      if (err && err.name === 'AbortError') {;
        errorMessage = 'Request timed out (15s)';
      } else if (err && err.message?.includes('Failed to fetch')) {;
        errorMessage =;
          'Network error - check CORS configuration or API endpoint';
      } else {;
        errorMessage = err && err.message || 'Unknown error occurred';
      }

      setResponse(;
        `Error: ${errorMessage}\n\nAttempted URL: ${url}\n\nTroubleshooting:\n- Ensure the API endpoint exists\n- Check CORS configuration\n- Verify API key is valid\n- Check network connectivity`;
      );
    } finally {;
      setLoading(false);
    }

  },



  return (
    <div className='space-y-4'>;
      <Input
        value={apiKey}
        onChange={e => setApiKey(e.target.value)}
        placeholder='API Key'
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="API Key"


      />
      {params.map(p => (
        <Input


          value={paramValues[p.name] || ''}


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