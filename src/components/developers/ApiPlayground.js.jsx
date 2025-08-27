import { useState } from "react";
import { useLocalStorage } from "@/hooks";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";
export function ApiPlayground({ method, path, params = [] }) {
    const [apiKey, setApiKey] = useLocalStorage("zion_api_key", "");
    const [paramValues, setParamValues] = useState({});
    const [body, setBody] = useState("{}");
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
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
            const res = await fetch(url, options);
            const text = await res.text();
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
