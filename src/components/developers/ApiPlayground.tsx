import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";
interface Param {
  name: string,
  type: string,
  required?: boolean
}

interface ApiPlaygroundProps {
  method: string,
  path: string,
  params?: Param[]
}

export function ApiPlayground({ method, path, params = [] }: ApiPlaygroundProps) {
  const [apiKey, setApiKey] = useState($2);
  const [paramValues, setParamValues] = useState<Record<string, string>>({}),
  const [body, setBody] = useState($2);
  const [response, setResponse] = useState<string | null>(null),
  const [loading, setLoading] = useState($2);
  const handleParamChange = (name: string, value: string) => {
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

    const options: RequestInit = $2;
      headers: {
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
    } catch (err: any) {
      let errorMessage = $2;
      if (err.name = $2;
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
          value = $2;