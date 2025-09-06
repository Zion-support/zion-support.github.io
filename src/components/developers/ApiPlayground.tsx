import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL |
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
    if (method !== "GET" && method !== "DELETE") {
      signal: AbortSignal.timeout(15000),
    }
    if (method !== 'GET' && method !== 'DELETE') {


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
      {params.map(p => (

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
          value={paramValues[p.name] || ""}
export default ApiPlayground;
