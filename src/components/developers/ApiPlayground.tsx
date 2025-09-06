<<<<<<< HEAD
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
<<<<<<< HEAD
      signal: AbortSignal.timeout(15000)},
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
=======
interface Param {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

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
=======
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  const sendRequest = async () => {
    // For API documentation, use current domain if NEXT_PUBLIC_API_URL is not set
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' ? window.location.origin : ''),
    let url = `${baseUrl}${path}`,
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

    const searchParams = new URLSearchParams(),
    if (method === "GET" || method === "DELETE") {
      params.forEach((p) => {
        const val = paramValues[p.name],
        if (val) searchParams.append(p.name, val)
      }),
      const query = searchParams.toString(),
      if (query) url += `?${query}`
    }
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    const options: RequestInit = {
      method
      headers: {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      try {
        options.body = JSON.stringify(JSON.parse(body))
      } catch {
        options.body = body
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="space-y-4">
      <Input
        value={apiKey}
<<<<<<< HEAD
        onChange={e => setApiKey(e.target.value)}
        placeholder='API Key'
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="API Key"
<<<<<<< HEAD
      />
      {params.map(p => (
        <Input
          key={p.name}
          value={paramValues[p.name] |''}
          value={paramValues[p.name] || ''}
=======


      />
      {params.map(p => (
        <Input


          value={paramValues[p.name] || ''}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      />
      {params.map(p => (
        <Input
          key={p.name}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
  p.name
}</div>)
}export default ApiPlayground
'"
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
