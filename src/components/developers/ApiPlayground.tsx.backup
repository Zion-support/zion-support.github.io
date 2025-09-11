<<<<<<< HEAD
import { _useState } from "react";
import { _useLocalStorage } from "@/hooks";
import { _Input } from "@/components/ui/input";
import { _Textarea } from "@/components/ui/textarea";
import { _Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";

import { Code } from 'lucide-react';
export function ApiPlayground({ method, path, params = [] }) {
=======
import { useState } from "react";
import { useLocalStorage } from "@/hooks";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";
export function ApiPlayground(_{ method, _path, _params = [] }) {
>>>>>>> origin/clean-error-fixing-automation
    const [apiKey, setApiKey] = useLocalStorage("zion_api_key", "");
    const [paramValues, setParamValues] = useState({});
    const [body, setBody] = useState("{}");
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
<<<<<<< HEAD
    const _handleParamChange = (name, value) => {
        setParamValues((prev) => ({ ...prev, [name]: value }));
    };
    const _sendRequest = async () => {
        const _baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
        const _url = `${baseUrl}${path}`;
        const _searchParams = new URLSearchParams();
        if (method === "GET" || method === "DELETE") {
            params.forEach((p) => {
                const _val = paramValues[p.name];
                if (val)
                    searchParams.append(p.name, val);
            });
            const _query = searchParams.toString();
            if (query)
                url += `?${query}`;
        }
        const _options = {
=======
    const handleParamChange = (name, value) => {
        setParamValues((prev) => ({ ...prev, [name]: value }));
    };
    const sendRequest = async () => {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
        let url = `${baseUrl}${path}`;
        const searchParams = new URLSearchParams();
        if (method === "GET" || method === "DELETE") {
            params.forEach((p) => {
                const val = paramValues[p.name];
                if (val)
                    searchParams.append(p.name, val);
            });
            const query = searchParams.toString();
            if (query)
                url += `?${query}`;
        }
        const options = {
>>>>>>> origin/clean-error-fixing-automation
            method,
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
        };
        if (method !== "GET" && method !== "DELETE") {
            try {
                options.body = JSON.stringify(JSON.parse(body));
            }
            catch {
                options.body = body;
            }
        }
        setLoading(true);
        setResponse(null);
        try {
<<<<<<< HEAD
            const _res = await fetch(url, options);
            const _text = await res.text();
=======
            const res = await fetch(url, options);
            const text = await res.text();
>>>>>>> origin/clean-error-fixing-automation
            setResponse(text);
        }
        catch (err) {
            setResponse(err.message);
        }
        finally {
            setLoading(false);
        }
    };
    return (<div className="space-y-4">
      <Input value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="API Key"/>
<<<<<<< HEAD
      {params.map((p) => (<Input key={p.name} value={paramValues[p.name] || ""} onChange={(e) => handleParamChange(p.name, e.target.value)} placeholder={p.name}/>))}
=======
      {params.map((((((((p, index, index, index, index, index, index) => ({ ...((((((p, index, index, index, index, index, key: index })) => ({ ...(((((p, index, index, index, index, key: index })) => ({ ...((((p, index, index, index, key: index })) => ({ ...(((p, index, index, key: index })) => ({ ...((p, index, key: index })) => ({ ...(p, key: index })) => (<Input key={p.name} value={paramValues[p.name] || ""} onChange = {
  (e) => handleParamChange(p.name,
  e.target.value)

} placeholder={p.name}/>))}
>>>>>>> origin/clean-error-fixing-automation
      {method !== "GET" && method !== "DELETE" && (<Textarea value={body} onChange={(e) => setBody(e.target.value)} className="font-mono"/>)}
      <Button onClick={sendRequest} disabled={loading}>
        {loading ? "Sending..." : "Send Request"}
      </Button>
<<<<<<< HEAD
      {response && <CodeBlock code={response} language="json"/>}
    </div>);
}
=======
      {response && <CodeBlock code={response} language="json"      />}
    </div>)}
>>>>>>> origin/clean-error-fixing-automation
export default ApiPlayground;
