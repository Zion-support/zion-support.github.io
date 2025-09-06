<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiPlayground.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import CodeBlock from './CodeBlock'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL |
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL |
    const baseUrl = null;
      process.env.NEXT_PUBLIC_API_URL ||
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Button } from "@/components/ui/button",
import CodeBlock from "./CodeBlock",
========
import { useState } from 'react';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Button } from '@/components / ui / button';
import CodeBlock from './CodeBlock';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiPlayground.tsx
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Button } from "@/components/ui/button",
import CodeBlock from "./CodeBlock",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiPlayground.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
<<<<<<< HEAD

    const options: RequestInit = {
=======
const options: RequestInit = {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      method
      headers: {

      try {
        options.body = JSON.stringify(JSON.parse(body))
      } catch {
        options.body = body

=======
>>>>>>> 
>>>>>>>     const options: RequestInit = {
      method
      headers: {
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

    const options: RequestInit = {
      method
      headers: {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        Authorization: `Bearer ${apiKey}`
        'Content-Type': 'application/json'
      }
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(15000)
<<<<<<< HEAD
========
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
      method
      headers: {
        Authorization: `Bearer ${api_key}`,
        'Content - Type': 'application / json',
      },
      // Add timeout to prevent hanging;
      signal: AbortSignal.timeout (15000),
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiPlayground.tsx
    }
    if (method !== 'GET' && method !== 'DELETE') {
      signal: AbortSignal.timeout(15000)},

    if (method !== "GET" && method !== "DELETE") {
      signal: AbortSignal.timeout(15000),
    }
    if (method !== 'GET' && method !== 'DELETE') {
>>>>>>>       try {
        options.body = JSON.stringify(JSON.parse(body))
      } catch {
        options.body = body
=======
    }
    if (method !== 'GET' && method !== 'DELETE') {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"},
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(15000)},

<<<<<<< HEAD
    if (method !== "GET" && method !== "DELETE") {
      signal: AbortSignal.timeout(15000),
    }
    if (method !== 'GET' && method !== 'DELETE') {
      signal: AbortSignal.timeout(15000)},

    if (method !== "GET" && method !== "DELETE") {
      try {
        options.body = JSON.stringify(JSON.parse(body))
      } catch {
        options.body = body
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
    }
    setLoading(true)
    setResponse(null)
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      try {
        options.body = JSON.stringify (JSON.parse (body));
      } catch {
<<<<<<<< HEAD:src/components/developers/ApiPlayground.tsx

    set_loading (true);
    set_response (null);

>>>>>>>     try {
========
        options.body = body;
      }
    }
    set_loading (true);
    set_response (null);
    try {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiPlayground.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiPlayground.tsx

      // Format the response with status information;
      const status_info = `HTTP ${res.status} ${res.status_text}\n\n`;
      set_response (status_info + response_text);

========
      // Format the response with status information;
      const status_info = `HTTP ${res.status} ${res.status_text}\n\n`;
      set_response (status_info + response_text);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiPlayground.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiPlayground.tsx
=======
    try {
      const res = await fetch(url, options)
      const contentType = res.headers.get('content-type')
      let responseText: string
      if (contentType?.includes('application/json')) {
        try {
          const jsonData = await res.json()
          responseText = JSON.stringify(jsonData, null, 2)
        } catch {
          responseText = await res.text()
        }
      } else {
        responseText = await res.text()
      }
      // Format the response with status information
      const statusInfo = `HTTP ${res.status} ${res.statusText}\n\n`
      setResponse(statusInfo + responseText)
    } catch (err: any) {
      let errorMessage = 'Request failed'
      if (err.name === 'AbortError') {
        errorMessage = 'Request timed out (15s)'
      } else if (err.message?.includes('Failed to fetch')) {
        errorMessage =
          'Network error - check CORS configuration or API endpoint'
      } else {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        errorMessage = err.message |'Unknown error occurred'
      }
      setResponse(
        `Error: ${errorMessage}\n\nAttempted URL: ${url}\n\nTroubleshooting:\n- Ensure the API endpoint exists\n- Check CORS configuration\n- Verify API key is valid\n- Check network connectivity`
      )
    } finally {
      setLoading(false)
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   return (
    <div className="space-y-4">
      <Input
        value={apiKey}
        onChange={e => setApiKey(e.target.value)}
        placeholder='API Key'
>>>>>>>       />
ursor/fix-website-loading-errors-and-merge-6662
========
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
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiPlayground.tsx
=======

        options.body = body

;
export function ApiPlayground({ method, path, params = [] }: ApiPlaygroundProps) {;
  const [apiKey, setApiKey] = useState("demo_key_123"),;
  const [paramValues, setParamValues] = useState<Record<string string>>({}),;
  const [body, setBody] = useState("{}"),;
  const [response, setResponse] = useState<string | null>(null),;
  const [loading, setLoading] = useState(false),;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
export function ApiPlayground({ method, path, params = [] }: ApiPlaygroundProps) {;
  const [apiKey, setApiKey] = useState("demo_key_123"),;
  const [paramValues, setParamValues] = useState<Record<string string>>({}),;
  const [body, setBody] = useState("{}"),;
  const [response, setResponse] = useState<string | null>(null),;
  const [loading, setLoading] = useState(false),;
  const handleParamChange = (name: string, value: string) => {;
    setParamValues((prev) => ({ ...prev, [name]: value }));
  },;
  const sendRequest = async () => {;
    // For API documentation, use current domain if NEXT_PUBLIC_API_URL is not set;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' ? window.location.origin : ''),;
    let url = `${baseUrl}${path}`,;
    const searchParams = new URLSearchParams(),;
    if (method === "GET" || method === "DELETE") {;
      params.forEach((p) => {;
        const val = paramValues[p.name],;
        if (val) searchParams.append(p.name, val);
      }),;
      const query = searchParams.toString(),;
      if (query) url += `?${query}`;
    }
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const options: RequestInit = {;
      method,;
      headers: {;
        Authorization: `Bearer ${apiKey}`,;
<<<<<<< HEAD
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



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
    <div className='space-y-4'>;
      <Input
        value={apiKey}
<<<<<<<< HEAD:src/components/developers/ApiPlayground.tsx

<<<<<<< HEAD
=======

        onChange={(e) => setApiKey(e.target.value)}
        placeholder="API Key"


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      />
<<<<<<< HEAD
>>>>>>>       {params.map(p => (
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
      {params.map(p => (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <Input
          key={p.name}
<<<<<<< HEAD

<<<<<<< HEAD
=======
          value={paramValues[p.name] |''}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          onChange={e => handleParamChange(p.name, e.target.value)}        />
========
        onChange={e => setApiKey(e && e.target.value)}
        placeholder='API Key';
      />;
      {params && params.map(p => (;
        <Input
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiPlayground.tsx
=======

          value={paramValues[p.name] || ''}


          onChange={e => handleParamChange(p.name, e.target.value)}        />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<<< HEAD:src/components/developers/ApiPlayground.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiPlayground.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiPlayground.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiPlayground.tsx
}
  try {
  /> {
  params.map ( (p) => (<Input key= {
<<<<<<<< HEAD:src/components/developers/ApiPlayground.tsx
<<<<<<< HEAD

<<<<<<< HEAD
          value={paramValues[p.name] || ""}
=======
=======
        "Content-Type": "application/json"},;
      // Add timeout to prevent hanging;
      signal: AbortSignal.timeout(15000)},;
    if (method !== "GET" && method !== "DELETE") {;
      try {;
        options.body = JSON.stringify(JSON.parse(body));
      } catch {;
        options.body = body;
      }
    }
;
    setLoading(true),;
    setResponse(null),;
    try {;
      const res = await fetch(url, options),;
      const contentType = res.headers.get('content-type'),;
      let responseText: string,;
      if (contentType?.includes('application/json')) {;
        try {;
          const jsonData = await res.json(),;
          responseText = JSON.stringify(jsonData, null, 2);
        } catch {;
          responseText = await res.text();
        }
      } else {;
        responseText = await res.text();
      }
;
      // Format the response with status information;
      const statusInfo = `HTTP ${res.status} ${res.statusText}\n\n`,;
      setResponse(statusInfo + responseText);
    } catch (err: any) {;
      let errorMessage = 'Request failed',;
      if (err.name === 'AbortError') {;
        errorMessage = 'Request timed out (15s)';
      } else if (err.message?.includes('Failed to fetch')) {;
        errorMessage = 'Network error - check CORS configuration or API endpoint';
      } else {;
        errorMessage = err.message || 'Unknown error occurred';
      }
;
      setResponse(`Error: ${errorMessage}\n\nAttempted URL: ${url}\n\nTroubleshooting: \n- Ensure the API endpoint exists\n- Check CORS configuration\n- Verify API key is valid\n- Check network connectivity`);
    } finally {;
      setLoading(false);
    }
  },

  return (
    <div className="space-y-4">
      <Input
        value={apiKey}
        onChange={e => setApiKey(e.target.value)}
        placeholder='API Key'
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="API Key"
      />
      {params.map(p => (
        <Input
          key={p.name}
          value={paramValues[p.name] |''}
          value={paramValues[p.name] || ''}
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  p.name
}</div>)
}export default ApiPlayground
'"

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  p.name 
}</div>) ;
}export default ApiPlayground;
'";
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>>           value={paramValues[p.name] || ""}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          value={paramValues[p.name] || ""}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
export default ApiPlayground;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </div>;
  );
export default ApiPlayground;
  const val = paramValues[p && p.name];
if (val) searchParams && searchParams.append (p && p.name, val) ;
});
const query = searchParams && searchParams.toString ();
=======
import { useState } from "react",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Button } from "@/components/ui/button",;
import CodeBlock from "./CodeBlock",;
;
interface Param {;
  name:string,;
  type:string,;
  required?:boolean;}
;
interface ApiPlaygroundProps {;
  method:string,;
  path:string,;
  params?:Param[];
}
;
export function ApiPlayground({ method, path, params = [] } ApiPlaygroundProps) {;
  const [apiKey, setApiKey] = useState("demo_key_123"),;
  const [paramValues, setParamValues] = useState<Record<string string>>({}),;
  const [body, setBody] = useState("{}"),;
  const [response, setResponse] = useState<string | null>(null),;
  const [loading, setLoading] = useState(false),;
;
  const handleParamChange = (name:string, value:string) => {;
    setParamValues((prev) => ({ ...prev, [name]:value })),;
  },;
;
  const sendRequest = async () => {;
    // For API documentation, use current domain if NEXT_PUBLIC_API_URL is not set;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' ? window.location.origin :''),;
    let url = `${baseUrl}${path}`,;
;
    const searchParams = new URLSearchParams(),;
    if (method === "GET" || method === "DELETE") {;
      params.forEach((p) => {;
        const val = paramValues[p.name],;
        if (val) searchParams.append(p.name, val),;
      }),;
      const query = searchParams.toString(),;
      if (query) url += `?${query}`,;
    }
;
    const options:RequestInit = {;
      method,;
      headers:{;
        Authorization:`Bearer ${apiKey}`,;
        "Content-Type":"application/json"},;
      // Add timeout to prevent hanging;
      signal:AbortSignal.timeout(15000)},;
;
    if (method !== "GET" && method !== "DELETE") {;
      try {;
        options.body = JSON.stringify(JSON.parse(body)),;
      } catch {;
        options.body = body,;
      }
    }
;
    setLoading(true),;
    setResponse(null),;
;
    try {;
      const res = await fetch(url, options),;
      const contentType = res.headers.get('content-type'),;
      ;
      let responseText:string,;
      if (contentType?.includes('application/json')) {;
        try {;
          const jsonData = await res.json(),;
          responseText = JSON.stringify(jsonData, null, 2),;
        } catch {;
          responseText = await res.text(),;
        }
      } else {;
        responseText = await res.text(),;
      }
;
      // Format the response with status information;
      const statusInfo = `HTTP ${res.status} ${res.statusText}\n\n`,;
      setResponse(statusInfo + responseText),;
    } catch (err:any) {;
      let errorMessage = 'Request failed',;
      ;
      if (err.name === 'AbortError') {;
        errorMessage = 'Request timed out (15s)';
      } else if (err.message?.includes('Failed to fetch')) {;
        errorMessage = 'Network error - check CORS configuration or API endpoint',;
      } else {;
        errorMessage = err.message || 'Unknown error occurred',;
      }
      ;
      setResponse(`Error:${errorMessage}\n\nAttempted URL:${url}\n\nTroubleshooting:\n- Ensure the API endpoint exists\n- Check CORS configuration\n- Verify API key is valid\n- Check network connectivity`);
    } finally {;
      setLoading(false),;
    }
  },;
;
  return (;
    <div className="space-y-4">;
      <Input;
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="API Key";
      />;
      {params.map((p) => (;
        <Input;
          key={p.name}
          value={paramValues[p.name] || ""}          onChange={(e) => handleParamChange(p.name, e.target.value)}
        />;
      ))}
      {method !== "GET" && method !== "DELETE" && (;
        <Textarea;
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="font-mono";
        />;
      )}
      <Button onClick={sendRequest} disabled={loading}>;
        {loading ? "Sending..." :"Send Request"}
      </Button>;
      {response && <CodeBlock code={response} language="json" />}
    </div>;
  ),;}
;
export default ApiPlayground,;
 interface Param {;
  name: string;
type: string;
required?: boolean ;
}interface ApiPlaygroundProps {;
  method: string;
path: string;
params?: Param[] ;
}export function ApiPlayground ({;
  method,  path, params = [] ;
}: ApiPlaygroundProps) {;
  const [response, setResponse] = useState<string | null> (null);
const [loading,  setLoading] = useState (false);
  const val = paramValues[p.name];
if (val) searchParams.append (p.name, val) ;
});
const query = searchParams.toString ();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
//Add timeout to prevent hanging signal: AbortSignal && AbortSignal.timeout (15000) ;
=======
//Add timeout to prevent hanging signal: AbortSignal.timeout (15000) ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
}setLoading (true);
setResponse (null);
let responseText: string;
if (contentType?.includes ('application/json') ) {;
  try {;
  /> {;
<<<<<<< HEAD
  params && params.map ( (p) => (<Inputkey= {
  p && p.name 
}</div>) ;
}export default ApiPlayground;
'"
  p.name;
}</div>);
}export default ApiPlayground;
'";
=======
  params.map ( (p) => (<Input key= {;
  p.name ;
}</div>) ;
}export default ApiPlayground;
'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiPlayground.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
export default ApiPlayground;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
