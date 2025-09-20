
`
}`,"
                "Content-Type": "application/json"}};"
        if(method !== "GET" && method !== "DELETE") {

            try {
                options.body = JSON.stringify(JSON.parse(body))}
            catch {

                options.body = body}
        }
        setLoading(true);
        setResponse(null);
        try {
            const res = await fetch(url, options);
            const text = await res.text();
            setResponse(text)}
        catch(err) {
            setResponse(err.message)}
        finally {

            setLoading(false)}
    };"
    return (<div className="space-y-4">"
      <Input value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="API Key"/>"
      {params.map((p) => (<Input key={p.name} value={paramValues[p.name] || ""} onChange = {

  (e) => handleParamChange(p.name,
  e.target.value)


} placeholder={p.name}/>))}"
      {method !== "GET" && method !== "DELETE" && (<Textarea value={body} onChange={(e) => setBody(e.target.value)} className="font-mono"/>)}
      <Button onClick={sendRequest} disabled={loading}>"
        {loading ? "Sending..." : "Send Request"}
      </Button>"
      {response && <CodeBlock code={response} language="json"/>}
    </div>)};
export { ApiPlayground };
export default ApiPlayground;
;
export default ApiPlayground;
export default ApiPlayground;
export default ApiPlayground;
export default ApiPlayground;
export default ApiPlayground;
export default ApiPlayground;
export default ApiPlayground;
"`