import { _useState } from "react";
import { _useLocalStorage } from "@/hooks";
import { _Input } from "@/components/ui/input";
import { _Textarea } from "@/components/ui/textarea";
import { _Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";

import { Code } from 'lucide-react';
export function ApiPlayground({ method, path, params = [] }) {
    const [apiKey, setApiKey] = useLocalStorage("zion_api_key", "");
    const [paramValues, setParamValues] = useState({});
    const [body, setBody] = useState("{}");
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
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
            const _res = await fetch(url, options);
            const _text = await res.text();
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
      {params.map((p) => (<Input key={p.name} value={paramValues[p.name] || ""} onChange={(e) => handleParamChange(p.name, e.target.value)} placeholder={p.name}/>))}
      {method !== "GET" && method !== "DELETE" && (<Textarea value={body} onChange={(e) => setBody(e.target.value)} className="font-mono"/>)}
      <Button onClick={sendRequest} disabled={loading}>
        {loading ? "Sending..." : "Send Request"}
      </Button>
      {response && <CodeBlock code={response} language="json"/>}
    </div>);
}
export default ApiPlayground;
