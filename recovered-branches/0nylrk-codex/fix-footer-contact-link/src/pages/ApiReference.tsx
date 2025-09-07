



import React, { useState } from "react",""
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",""
import { CodeBlock } from "@/components/developers/CodeBlock";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"
export function ApiReference() {"
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs");""
import { CodeBlock } from "@/components/developers/CodeBlock",""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
export function ApiReference() {"
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),"
  // Sample endpoint data;
  const endpoints = [
    {"
      id: "get-jobs"","
  method: "GET"""
      path: "/api/jobs"","
  description: "Retrieve a list of job postings with optional filtering""
      parameters: [

"
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" },""
        { name: "category", type: "string", description: "Filter by job category" },""
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },"]"
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],"
      responses: {"
        "200": {""
          description: "A list of jobs"",
  example: `{"
  "jobs": ["
    {

class ErrorBoundary extends React.Component {
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {"
    console.error('Error caught by boundary:', error, errorInfo);'
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    <ApiDocsLayout>;
</ApiDocsLayout>'
      <div className="grid md:grid-cols-5 gap-8">;"
</div>"
        <div className="md:col-span-1">;"
</div>"
          <div className="sticky top-8">;"
</div>"
            <h3 className="text-lg font-semibold text-white mb-4">Endpoints</h3>;""
            <ul className="space-y-2">;"
</ul>
                <li key={endpoint && endpoint.id}>;
</li>
                  <button;
                    onClick={() => setActiveEndpoint(endpoint && endpoint.id)}
</button>
                    </span>;"
                    <span className="truncate">{endpoint && endpoint.path}</span>;"
                  </button>;
                </li>;
    <ApiDocsLayout>;
</ApiDocsLayout>"
      <div className="grid md:grid - cols - 5 gap - 8">;"
</div>"
        <div className="md:col - span - 1">;"
</div>"
          <div className="sticky top - 8">;"
</div>"
            <h3 className="text - lg font - semibold text - white mb - 4">Endpoints</h3>;""
            <ul className="space - y-2">;"
</ul>
                <li key={endpoint.id}>;
</li>
                  <button;
                    on_click={() => setActiveEndpoint (endpoint.id)}
</button>"
                    <span className={`inline - block w - 16 font - mono ${endpoint.method === "GET" ? "text - green - 500" : endpoint.method === "POST" ? "text - blue - 500" : "text - yellow - 500"}`}>;"
</span>
                    </span>;"
                    <span className="truncate">{endpoint.path}</span>;"
                  </button>;
                </li>))}
            </ul>;
          </div>;
        </div>;"
        <div className="md:col - span - 4">;"
</div>
            </ul>;
          </div>;
        </div>;"
        <div className="md:col-span-4">;"
</div>
            <div>;
</div>"
              <div className="flex items-center mb-6">;"
</div>
                <spanclassName={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${"
                  activeEndpointData && activeEndpointData.method === "GET" ? "bg-green-950 text-green-500" :""
                  activeEndpointData && activeEndpointData.method === "POST" ? "bg-blue-950 text-blue-500" :""
                  "bg-yellow-950 text-yellow-500""
                }`}>;
</spanclassName>
                </span>;"
                <span className="font-mono text-lg text-white">{activeEndpointData && activeEndpointData.path}</span>;"
              </div>;"
              <p className="text-zinc-400 mb-8">{activeEndpointData && activeEndpointData.description}</p>;""
              <Tabs defaultValue="docs">;"
</Tabs>"
                <TabsList className="mb-6">;"
</TabsList>"
                  <TabsTrigger value="docs">Documentation</TabsTrigger>;""
                  <TabsTrigger value="try">Try It</TabsTrigger>;"
                </TabsList>;"
                <TabsContent value="docs">;"
</TabsContent>"
                  <div className="mb-8">;"
</div>"
                    <h3 className="text-xl font-semibold text-white mb-4">Request</h3>;"
                      <>;"
                        <h4 className="text-lg font-medium text-white mb-3">Parameters</h4>;""
                        <div className="overflow-x-auto mb-6">;"
</div>"
                          <table className="w-full border-collapse">;"
</table>
                            <thead>;
</thead>"
                              <tr className="border-b border-zinc-800">;"
</tr>"
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Name</th>;""
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Type</th>;""
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Required</th>;""
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Description</th>;"
                              </tr>;
                            </thead>;
                            <tbody>;
</tbody>"
                                <tr key={param && param.name} className={index < activeEndpointData && activeEndpointData.parameters.length - 1 ? "border-b border-zinc-800" : ""}>;"
</tr>"
                                  <td className="py-2 px-4 text-white font-mono">{param && param.name}</td>;""
                                  <td className="py-2 px-4 text-blue-400 font-mono">{param && param.type}</td>;""
                                  <td className="py-2 px-4 text-zinc-300">{param && param.required ? "Yes" : "No"}</td>;""
                                  <td className="py-2 px-4 text-zinc-300">{param && param.description}</td>;"
                                </tr>;
                            </tbody>;
                          </table>;
                        </div>;
                      </>;
                    )}


"
                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>"
                    <CodeBlock;
                      code={activeEndpointData.requestExample} 

"
                      language="bash""
                      showLineNumbers={true}
                    />
</CodeBlock>
                  </div>
                  <div>
</div>"
                    <h3 className="text-xl font-semibold text-white mb-4">Responses</h3>""
                      <div key={status} className="mb-6">"
</div>"
                        <div className="flex items-center mb-3">"
</div>
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${"
                            status.startsWith('2') ? 'bg-green-950 text-green-500' :''
                            status === '401' |status === '403' ? 'bg-orange-950 text-orange-500' :''
                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>;"
</span>
                    <CodeBlock;
                      code={activeEndpointData && activeEndpointData.requestExample} "
                      language="bash""
                      showLineNumbers={true}
                    />;
</CodeBlock>
                  </div>;"
                      <div key={status} className="mb-6">;"
</div>"
                        <div className="flex items-center mb-3">;"
</div>
                          <spanclassName={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${"
                            status && status.startsWith('2') ? 'bg-green-950 text-green-500' :''
                            status === '401' || status === '403' ? 'bg-orange-950 text-orange-500' :''
                            'bg-red-950 text-red-500''
                          }`}>;
</spanclassName>
                          </span>;'
                          <span className="text-white">{response && response.description}</span>;"
                        </div>;
                        <CodeBlock;
                          code={response && response.example} 


                        

                        <CodeBlock;
                          code={response.example} "
                          language="json"""
                          language="json""
;"
                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>;"
</CodeBlock>
                    <CodeBlock ;
                      code={activeEndpointData.requestExample} ;"
                      language="bash";"
                      showLineNumbers={true}
                    />;
</CodeBlock>
                  </div>;
                  <div>;
</div>"
                    <h3 className="text-xl font-semibold text-white mb-4">Responses</h3>;""
                      <div key={status} className="mb-6">;"
</div>"
                        <div className="flex items-center mb-3">;"
</div>
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${;"
                            status.startsWith('2') ? 'bg-green-950 text-green-500' :;''
                            status === '401' || status === '403' ? 'bg-orange-950 text-orange-500' :;''
                            'bg-red-950 text-red-500';'
                          }`}>;
</span>
                          </span>;'
                          <span className="text-white">{response.description}</span>;"
                        </div>;
                        <CodeBlock ;
                          code={response.example} ;"
                          language="json";"
                        <CodeBlock;
                          code={response.example} "
                            'bg-red-950 text-red-500''
                          }`}>;
</CodeBlock>
                      </div>;
                  </div>;
                </TabsContent>;'
                <TabsContent value="try">;"
</TabsContent>"
                  <div className="p-8 border border-zinc-800 rounded-lg flex items-center justify-center">;"
</div>"
                    <div className="text-center">;"
</div>"
                      <p className="text-zinc-400 mb-3">Interactive API tester coming soon</p>;""
                      <p className="text-zinc-600 text-sm">Try the Postman collection in the meantime</p>;"
                    </div>;
                  </div>;
                </TabsContent>;
              </Tabs>;
            </div>) : ("
            <div className="p - 8 border border - zinc - 800 rounded - lg text - center">;"
</div>"
              <p className="text - zinc - 400">Select an endpoint from the list to view details</p>;")
            </div>)}
        </div>;
      </div>;
    </ApiDocsLayout>);
            </div>;"
            <div className="p-8 border border-zinc-800 rounded-lg text-center">;"
</div>"
              <p className="text-zinc-400">Select an endpoint from the list to view details</p>;"
            </div>;
        </div>;
      </div>;
    </ApiDocsLayout>;
//Find the active endpoint data <button onClick= {
  () => setActiveEndpoint (endpoint.id) 
</button>
  activeEndpoint === endpoint.id </button> </li>) ) "
}</ul> </div> </div> <Tabs defaultValue="docs" > <TabsList className="mb-6" > <TabsTrigger value="docs" >Documentation</TabsTrigger> <TabsTrigger value="try" >Try It</TabsTrigger> </TabsList> {"
</Tabs>"
  activeEndpointData.parameters && activeEndpointData.parameters.length > 0 && (<> <h4 className="text-lg font-medium text-white mb-3" >Parameters</h4> <div className="overflow-x-auto mb-6" > <table className="w-full border-collapse" > <thead> <tr className="border-b border-zinc-800" > <th className="text-left py-2 px-4 text-zinc-400 font-medium" >Name</th> <th className="text-left py-2 px-4 text-zinc-400 font-medium" >Type</th> <th className="text-left py-2 px-4 text-zinc-400 font-medium" >Required</th> <th className="text-left py-2 px-4 text-zinc-400 font-medium" >Description</th> </tr> </thead> <tbody> </tr>) )"
}</tbody> </table> </div> </>) "
}<h4 className="text-lg font-medium text-white mb-3" >Example Request</h4> <CodeBlock /> </div> {""
}<div> <h3 className="text-xl font-semibold text-white mb-4">Responses</h3> {"
</div>]
  Object.entries (activeEndpointData.responses) .map ( ([status, response]) => (<div key= {
  status;"
}className="mb-6"> <div className="flex items-center mb-3"> <span className= {"
</div>)
}</span> /> </div>) ) "
}</div> </TabsContent> <TabsContent value="try"> <div className="p-8 border border-zinc-800 rounded-lg flex items-center justify-center"> <div className="text-center"> <p className="text-zinc-400 mb-3">Interactive API tester coming soon</p> <p className="text-zinc-600 text-sm">Try the Postman collection in the meantime</p> </div> </div> </TabsContent> </Tabs> </div>) : (<div className="p-8 border border-zinc-800 rounded-lg text-center"> <p className="text-zinc-400">Select an endpoint from the list to view details</p> </div>)"
}</div> </div> </ApiDocsLayout>) 
                          </span>"
                          <span className="text-white">{response.description}</span>"
                        </div>
                        <CodeBlock;
                          code={response.example}
                        
                        <CodeBlock;
                          code={response.example} "
                          language="json""
                          showLineNumbers={true}
                        />
</CodeBlock>
                      </div>
                  </div>
                </TabsContent>"
                <TabsContent value="try">"
</TabsContent>"
                  <div className="p-8 border border-zinc-800 rounded-lg flex items-center justify-center">"
</div>"
                    <div className="text-center">"
</div>"
                      <p className="text-zinc-400 mb-3">Interactive API tester coming soon</p>""
                      <p className="text-zinc-600 text-sm">Try the Postman collection in the meantime</p>"
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>"
            <div className="p-8 border border-zinc-800 rounded-lg text-center">"
</div>"
              <p className="text-zinc-400">Select an endpoint from the list to view details</p>"
            </div>
        </div>
      </div>
    </ApiDocsLayout>"