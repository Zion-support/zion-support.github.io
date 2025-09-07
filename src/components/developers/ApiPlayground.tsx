import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";
interface Param {
  name: string;
  type: string;
  required?: boolean,
}

interface ApiPlaygroundProps {
  method: string;
  path: string;
  params?: Param[],
}

export function ApiPlayground({ method, path, params = [] }: ApiPlaygroundProps) {
  const [apiKey, setApiKey] = useState($2);
  const [paramValues, setParamValues] = useState<Record<string, string>>({}),
  const [body, setBody] = useState($2);
  const [response, setResponse] = useState<string | null>(null),
  const [loading, setLoading] = useState(false),

  const handleParamChange = (name: string, value: string) => {,
    setParamValues((prev) => ({ ...prev, [name]: value }))
  },

  const sendRequest = async () => {
    // For API documentation, use current domain if NEXT_PUBLIC_API_URL is not set
    const baseUrl = $2;
    let url = $2;
    const searchParams = new URLSearchParams($2);
    if (method = $2;
        if (val) searchParams.append(p.name, val)
      }),
      const query = searchParams.toString($2);
      if (query) url += `?${query}`
    }

    const options: RequestInit = {,
      method,
      headers: {,
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"},
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(15000)},

    if (method !== "GET" && method !== "DELETE") {
      try {
        options.body = JSON.stringify(JSON.parse(body))
      } catch {
        options.body = body
      }
    }

    setLoading($2);
    setResponse($2);
    try {
      const res = await fetch($2);
      const contentType = res.headers.get($2);
      let responseText: string,
      if (contentType?.includes('application/json')) {
        try {
          const jsonData = await res.json($2);
          responseText = JSON.stringify(jsonData, null, 2)
        } catch {
          responseText = $2;
      setResponse(statusInfo + responseText)
    } catch (err: any) {,
      let errorMessage = 'Request failed',
      
      if (err.name === 'AbortError') {
        errorMessage = 'Request timed out (15s)'
      } else if (err.message?.includes('Failed to fetch')) {
        errorMessage = 'Network error - check CORS configuration or API endpoint'
      } else {
        errorMessage = err.message || 'Unknown error occurred'
      }
      
      setResponse(`Error: ${errorMessage}\n\nAttempted URL: ${url}\n\nTroubleshooting: \n- Ensure the API endpoint exists\n- Check CORS configuration\n- Verify API key is valid\n- Check network connectivity`),
    } finally {
      setLoading(false)
    }
  },

  return (
    <div className="space-y-4">
      <Input
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="API Key"
      />
      {params.map((p) => (
        <Input
          key={p.name}
          value={paramValues[p.name] || ""}
          onChange={(e) => handleParamChange(p.name, e.target.value)}
        />
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