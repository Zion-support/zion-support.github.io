import React, { useState } from 'react';
import { useState } from 'react';
import { useLocalStorage } from '@/hooks';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
 from 'react';"
import { useLocalStorage } from '@/hooks';"
import { Input } from '@/components/ui/input';"
import { Textarea } from '@/components/ui/textarea';"
import { Button } from '@/components/ui/button';"
import CodeBlock from "./CodeBlock";
export function ApiPlayground({ method, path, params = [] }) {
"
    const [apiKey, setApiKey] = useLocalStorage("zion_api_key", "");
    const [paramValues, setParamValues] = useState({ /* empty */ });"
    const [body, setBody] = useState("{ /* empty */ }");
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleParamChange = (name, value) => {

        setParamValues((prev) => ({ ...prev, [name]: value }))};
    const sendRequest = async () => {
"
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
        const url = `${baseUrl}${path}`;
        const searchParams = new URLSearchParams();"
        if(method === "GET" || method === "DELETE") {

            params.forEach((p) => {

                const val = paramValues[p.name];
                if(val)
                    searchParams.append(p.name, val)});
            const query = searchParams.toString();
            if(query)`
                url += `?${query}`}
        const options = {

  method,
  headers: {
`
                Authorization: `Bearer ${apiKey

}`,
                "Content-Type": "application/json",
            },
        };
} placeholder={p.name}/>))}
