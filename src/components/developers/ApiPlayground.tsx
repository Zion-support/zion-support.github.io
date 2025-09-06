<<<<<<< HEAD
import { useState } from "react",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";
=======
<<<<<<< HEAD
import { useState } from "react",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";
=======
<<<<<<< HEAD
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import CodeBlock from './CodeBlock'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL |
=======
<<<<<<< HEAD
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL |
=======
    const baseUrl = null;
      process.env.NEXT_PUBLIC_API_URL ||
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
import { useState } from "react",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Button } from "@/components/ui/button",
import CodeBlock from "./CodeBlock",
interface Param {
  name: string,
  type: string,
  required?: boolean
import { useState } from "react",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Button } from "@/components/ui/button",;
import CodeBlock from "./CodeBlock",;
interface Param {;
  name: string,;
  type: string,;
  required?: boolean;
}
;
interface ApiPlaygroundProps {;
  method: string,;
  path: string,;
  params?: Param[];
}

export function ApiPlayground({ method, path, params = [] }: ApiPlaygroundProps) {
  const [apiKey, setApiKey] = useState("demo_key_123"),
  const [paramValues, setParamValues] = useState<Record<string string>>({}),
  const [body, setBody] = useState("{}"),
  const [response, setResponse] = useState<string | null>(null),
  const [loading, setLoading] = useState(false),

  const handleParamChange = (name: string, value: string) => {
    setParamValues((prev) => ({ ...prev, [name]: value }))
  },

  const sendRequest = async () => {
    // For API documentation, use current domain if NEXT_PUBLIC_API_URL is not set
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' ? window.location.origin : ''),
    let url = `${baseUrl}${path}`,

    const searchParams = new URLSearchParams(),
    if (method === "GET" || method === "DELETE") {
      params.forEach((p) => {
        const val = paramValues[p.name],
        if (val) searchParams.append(p.name, val)
      }),
      const query = searchParams.toString(),
      if (query) url += `?${query}`
    }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    const options: RequestInit = {
      method
      headers: {
        Authorization: `Bearer ${apiKey}`
        'Content-Type': 'application/json'
      }
      // Add timeout to prevent hanging
<<<<<<< HEAD
      signal: AbortSignal.timeout(15000)
    }
    // Check condition
if ( {) {
  $2
}
=======
<<<<<<< HEAD
      signal: AbortSignal.timeout(15000)},

    if (method !== "GET" && method !== "DELETE") {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
      signal: AbortSignal.timeout(15000),
    }
    if (method !== 'GET' && method !== 'DELETE') {
=======
      signal: AbortSignal.timeout(15000)},

    if (method !== "GET" && method !== "DELETE") {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      try {
        options.body = JSON.stringify (JSON.parse (body));
      } catch {
        options.body = body;
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
      // Format the response with status information
      const statusInfo = `HTTP ${res.status} ${res.statusText}\n\n`
      setResponse(statusInfo + responseText)
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
        errorMessage = err.message |'Unknown error occurred'
      }
      setResponse(
        `Error: ${errorMessage}\n\nAttempted URL: ${url}\n\nTroubleshooting:\n- Ensure the API endpoint exists\n- Check CORS configuration\n- Verify API key is valid\n- Check network connectivity`
      )
    } finally {
      setLoading(false)
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
<<<<<<< HEAD
  }
=======

  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div className='space-y-4'>;
      <Input
        value={apiKey}
<<<<<<< HEAD
        onChange={e => setApiKey(e && e.target.value)}
        placeholder='API Key';
      />;
      {params && params.map(p => (;
        <Input
          key={p.name}
          value={paramValues[p.name] |''}
=======


        onChange={(e) => setApiKey(e.target.value)}
        placeholder="API Key"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      />
      {params.map(p => (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <Input
          key={p.name}
<<<<<<< HEAD
<<<<<<< HEAD
          value={paramValues[p.name] |''}
=======
          value={paramValues[p.name] || ''}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          onChange={e => handleParamChange(p.name, e.target.value)}        />
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
  try {
  /> {
  params.map ( (p) => (<Input key= {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  p.name
}</div>)
}export default ApiPlayground
'"

<<<<<<< HEAD
'"

  p.name;
}</div>);
}export default ApiPlayground;
'";
=======
=======
  p.name 
}</div>) ;
}export default ApiPlayground;
'";
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
