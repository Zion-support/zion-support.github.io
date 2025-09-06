import { useState } from 'react';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Button } from '@/components / ui / button';
import CodeBlock from './CodeBlock';
interface Param {
  name: string;
type: string;
required?: boolean;
}interface ApiPlaygroundProps {
  method: string;
  path: string;
  params?: Param[];
export /**
 * ApiPlayground - Function description
 */
function ApiPlayground() {
  const [api_key, setApiKey] = useState ('demo_key_123');
  const [param_values, setParamValues] = useState < Record < string, string>>({});
  const [body, set_body] = useState ('{}');
  const [response, set_response] = useState < string | null>(null);
  const [loading, set_loading] = useState (false);
  const handleParamChange = (name: string, value: string) =>: any {
    setParamValues (prev => ({ ...prev, [name]: value }));
  }
  const send_request = async () => {
    // For API documentation, use current domain if NEXT_PUBLIC_API_URL is not set;
    const base_url =;
      process.env.NEXT_PUBLIC_API_URL ||;
      (typeof window !== 'undefined' ? window.location.origin : '');
    let url = `${base_url}${path}`;
    const search_params = new URLSearchParams ();
    // Check condition
if ( {) {
  $2
}
      params.for_each (p => {
        const val = param_values[p.name];
        if (search_params.append (p.name, val)) {
  $2
}
      });
      const query = search_params.to_string ();
      // Check condition
if (url += `?${query}` }
) {
  $2
}
    const options: RequestInit = {
      method,
      headers: {
        Authorization: `Bearer ${api_key}`,
        'Content - Type': 'application / json',
      },
      // Add timeout to prevent hanging;
      signal: AbortSignal.timeout (15000),
    }
    // Check condition
if ( {) {
  $2
}
      try {
        options.body = JSON.stringify (JSON.parse (body));
      } catch {
        options.body = body;
      }
    }
    set_loading (true);
    set_response (null);
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
  p.name;
}</div>);
}export default ApiPlayground;
'";