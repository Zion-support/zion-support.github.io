export function ApiDocumentation() {
  return (

import {useState} from "react";
import {BookOpen, Code, Copy, Terminal} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Alert, AlertDescription} from "@/components/ui/alert";
import {Badge} from "@/components/ui/badge";
import CodeBlock from "./CodeBlock";
import { useState } from "react",
import { BookOpen, Code, Copy, Terminal } from "lucide-react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Alert, AlertDescription } from "@/components/ui/alert",



import { Badge } from "@/components/ui/badge";
import CodeBlock from "./CodeBlock";
import { Badge } from "@/components/ui/badge",;
import CodeBlock from "./CodeBlock",;
export function ApiDocumentation() {
  return (


            className={
              method === 'GET'
                ? "border-green-500 text-green-400 font-mono"
                : method === 'POST'
                ? "border-blue-500 text-blue-400 font-mono"
                : method === 'PUT'
                ? "border-yellow-500 text-yellow-400 font-mono"
                : "border-red-500 text-red-400 font-mono"
            }>;
;
// Helper component for API endpoint documentation;
function EndpointSection({ ;
  method, ;
  endpoint, ;
  description,;
  note,;
  params = [],;
  codeExamples,;
  responseExamples;
}) {;
  const [activeTab, setActiveTab] = useState("curl"),;
  ;
  return (;
    <div className="border border-zinc-800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;
                language="json";
              />;
              <h4 className="text - md font - semibold mt - 6 mb-2">Rate Limiting</h4>;
              <p className="text - zinc - 400 mb-4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per - API key basis. If you exceed the rate limits, you will receive;
                a <code className="bg - zinc - 800 px - 1 py-0.5 rounded">429 Too Many Requests</code> response.;
              </p>;
              <p className="text - zinc - 400 mb-2">;
                Rate limit information is included in the response headers: </p>;
              <ul className="list - disc pl - 6 space - y-1 text - zinc-400">;
                <li><code className="bg - zinc - 800 px - 1 py-0.5 rounded">X - RateLimit - Limit</code>: Number of requests allowed in the time window</li>;
                <li><code className="bg - zinc - 800 px - 1 py-0.5 rounded">X - RateLimit - Remaining</code>: Number of requests remaining in the current window</li>;
                <li><code className="bg - zinc - 800 px - 1 py-0.5 rounded">X - RateLimit - Reset</code>: Unix timestamp when the rate limit resets</li>;
  responseExamples;)
}) {"
  const [activeTab, setActiveTab] = useState("curl"),"
  return ("
    <div className="border border-zinc-800 rounded-md">"
</CodeBlock>"
      <div className="p-4">"
</div>"
        <div className="flex items-center">"
</div>
          <Badge;"
            variant="outline""
            className={"
              method === 'GET'''
                ? "border-green-500 text-green-400 font-mono"""
                : method === 'POST'''
                ? "border-blue-500 text-blue-400 font-mono"""
                : method === 'PUT'''
                ? "border-yellow-500 text-yellow-400 font-mono"""
                : "border-red-500 text-red-400 font-mono"""
                language="json";"
              />;
</Badge>
"
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;""
              <p className="text-zinc-400 mb-4">;"
</p>"
                a <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">429 Too Many Requests</code> response.;"
              </p>;"
              <p className="text-zinc-400 mb-2">;"
</p>
                Rate limit information is included in the response headers: </p>;"
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">;"
</ul>"
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>;""
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>;""
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;"
              </ul>;

            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
    </Card>);
}
// Helper component for API endpoint documentation;
/**
 * EndpointSection - Function description
 */
function EndpointSection() {
  const [active_tab, setActiveTab] = useState ("curl");
;
  return (
    <div className="border border - zinc - 800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;
          <Badge;
            variant="outline";
            className={
              method === 'GET';
                ? "border - green - 500 text - green - 400 font - mono";
                : method === 'POST';
                ? "border - blue - 500 text - blue - 400 font - mono";
                : method === 'PUT';
                ? "border - yellow - 500 text - yellow - 400 font - mono";
                : "border - red - 500 text - red - 400 font - mono";
            }
          >;
            {method}
          </Badge>;
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;
          {note && (;
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;
              {note}
            </Badge>)}
        </div>;
        <p className="mt - 2 text - zinc - 400">{description}</p>;
      </div>;

      {params.length > 0 && (
        <div className="border - t border - zinc - 800 p - 4">;
          <h4 className="font - medium mb - 2">Parameters</h4>;
          <table className="w - full">;
          >;      {params.length > 0 && (
        <div className="border - t border - zinc - 800 p-4">;
          <h4 className="font - medium mb-2">Parameters</h4>;
          <table className="w-full">;
            <thead>;
              <tr className="text - left border - b border - zinc - 800 text-sm">;
                <th className="pb-2">Name</th>;
                <th className="pb-2">Type</th>;
                <th className="pb-2">Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              {params.map ((param, index) => (
                <tr key={index} className={index < params.length - 1 ? "border - b border - zinc - 800" : ""}>;
                  <td className="py - 2 font - mono text-sm">;
                    {param.name}

        </div>;

        <p className="mt-2 text-zinc-400">{description}</p>;
      </div>;

      {params && params.length > 0 && (;
        <div className="border-t border-zinc-800 p-4">;
          <h4 className="font-medium mb-2">Parameters</h4>;
          <table className="w-full">;
            <thead>;
              <tr className="text-left border-b border-zinc-800 text-sm">;
                <th className="pb-2">Name</th>;
                <th className="pb-2">Type</th>;
                <th className="pb-2">Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              {params && params.map((param, index) => (;
                <tr key={index} className={index < params && params.length - 1 ? "border-b border-zinc-800" : ""}>;
                  <td className="py-2 font-mono text-sm">;
                    {param && param.name}
                    {param && param.required && <span className="text-red-500">*</span>}
                  </td>;
                  <td className="py-2 text-sm text-zinc-400">{param && param.type}</td>;
                  <td className="py-2 text-sm text-zinc-400">{param && param.description}</td>;
                </tr>;

              ))}
              ))}
<Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;              {note}
            </Badge>;
          )}
        </div>;
        ;
        <p className="mt-2 text-zinc-400">{description}</p>;
      </div>;
      ;
      {params.length > 0 && (;
        <div className="border-t border-zinc-800 p-4">;
          <h4 className="font-medium mb-2">Parameters</h4>;
          <table className="w-full">;
            <thead>;
              <tr className="text-left border-b border-zinc-800 text-sm">;
                <th className="pb-2">Name</th>;
                <th className="pb-2">Type</th>;
                <th className="pb-2">Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              {params.map((param, index) => (;
                <tr key={index} className={index < params.length - 1 ? "border-b border-zinc-800" :""}>;
                  <td className="py-2 font-mono text-sm">;
                    {param.name}
                    {param.required && <span className="text-red-500">*</span>}
                  </td>;
                  <td className="py-2 text-sm text-zinc-400">{param.type}</td>;
                  <td className="py-2 text-sm text-zinc-400">{param.description}</td>;
                </tr>;              ))}
              ))}
            </tbody>;
          </table>;
        </div>;
      )}

<Badge;
            variant="outline";
            className={;
              method === 'GET';
                ? "border-green-500 text-green-400 font-mono";
                : method === 'POST';
                ? "border-blue-500 text-blue-400 font-mono";
                : method === 'PUT';
                ? "border-yellow-500 text-yellow-400 font-mono";
                : "border-red-500 text-red-400 font-mono";
            }
          >
            {method}
          </Badge>
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>
          {note && (
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">
              {note}
            </Badge>
          )}
        </div>
        <p className="mt-2 text-zinc-400">{description}</p>
      </div>
      {params.length > 0 && (
        <div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Parameters</h4>
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-zinc-800 text-sm">
                <th className="pb-2">Name</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {params.map((param, index) => (
                <tr key={index} className={index < params.length - 1 ? "border-b border-zinc-800" : ""}>
                  <td className="py-2 font-mono text-sm">
                    {param.name}
                    {param.required && <span className="text-red-500">*</span>}
                  </td>
                  <td className="py-2 text-sm text-zinc-400">{param.type}</td>
                  <td className="py-2 text-sm text-zinc-400">{param.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {codeExamples && (
              ))}            </tbody>;
          </table>;
        </div>;
      )}      {codeExamples && (
        <div className="border-t border-zinc-800 p-4">
          <div className="flex items-center mb-2">
            <h4 className="font-medium">Request Example</h4>
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">
              {Object.keys(codeExamples).map((lang) => (
;
      {codeExamples && (;
        <div className="border-t border-zinc-800 p-4">;
          <div className="flex items-center mb-2">;
            <h4 className="font-medium">Request Example</h4>;
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">;
              {Object && Object.keys(codeExamples).map((lang) => (;
{Object.keys(codeExamples).map((lang) => (;
                <button;
                  key={lang}
                  className={`px-3 py-1 text-xs font-medium ${;
                    activeTab === lang ;
                      ? "bg-zinc-700 text-white" ;
                      :"text-zinc-400 hover:bg-zinc-800";
                  }`}
                  onClick={() => setActiveTab(lang)}
                >;
            </div>;
          </div>;
          <CodeBlock
            code={codeExamples[activeTab]}
            language={activeTab === "curl" ? "bash" : activeTab}
          />;
        </div>;
      )}
                <button
              {Object.keys(codeExamples).map((lang) => (                <button
                  key={lang}
                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang
                      ? "bg-zinc-700 text-white"
                      : "text-zinc-400 hover:bg-zinc-800"
                  }`}
                  onClick={() => setActiveTab(lang)}
                >;
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>;
              ))}

            </div>;
          </div>;

          <CodeBlock
            code={codeExamples[activeTab]}
            language={activeTab === "curl" ? "bash" : activeTab}
          />;
        </div>;
>
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>
              ))}
            </div>
          </div>
          <CodeBlock
            code={codeExamples[activeTab]}
            language={activeTab === "curl" ? "bash" : activeTab}
          />
        </div>
      )}
      {responseExamples && (
        <div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Response</h4>
          <CodeBlock
            code={responseExamples.success}
            language="json"
          />
        </div>
      )}

      {responseExamples && (;
        <div className="border-t border-zinc-800 p-4">;
          <h4 className="font-medium mb-2">Response</h4>;
          <CodeBlock
            code={responseExamples && responseExamples.success}
            language="json"
{lang === "curl" ? "cURL" :lang === "javascript" ? "JavaScript" :"Python"}
                  {lang === "curl" ? "cURL" :lang === "javascript" ? "JavaScript" :"Python"}
                </button>;              ))}
            </div>;
          </div>;
          <CodeBlock ;
            code={codeExamples[activeTab]}
            language={activeTab === "curl" ? "bash" :activeTab}
          />;
        </div>;
      )}
      ;
      {responseExamples && (;
        <div className="border-t border-zinc-800 p-4">;
          <h4 className="font-medium mb-2">Response</h4>;
          <CodeBlock;
            code={responseExamples.success}
            language="json";
          />;
        </div>;
      )}
    </div>;
  );
}    </div>;
  );
}
;

                    {param.required && <span className="text - red - 500">*</span>}
                  </td>;
                  <td className="py - 2 text - sm text - zinc - 400">{param.type}</td>;
                  <td className="py - 2 text - sm text - zinc - 400">{param.description}</td>;
                </tr>))}
            </tbody>;
          </table>;
        </div>)}
      {code_examples && (
        <div className="border - t border - zinc - 800 p - 4">;
          <div className="flex items - center mb - 2">;
            <h4 className="font - medium">Request Example</h4>;
            <div className="ml - auto flex border border - zinc - 700 rounded - md overflow - hidden">;
              {Object.keys (code_examples).map ((lang) => (
                <button;
                  key={lang}
                  className={`px - 3 py - 1 text - xs font - medium ${
                    active_tab === lang;
                      ? "bg - zinc - 700 text - white";
                      : "text - zinc - 400 hover:bg - zinc - 800";
                  }`}
                  on_click={() => setActiveTab (lang)}
                >;
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>))}
  responseExamples;)
  const [activeTab, setActiveTab] = useState("curl"),"
  return ("
    <div className="border border-zinc-800 rounded-md">"
      <div className="p-4">"
        <div className="flex items-center">"

    </Card>;"
    <div className="border border-zinc-800 rounded-md">;"
</div>"
      <div className="p-4">;"
</div>"
        <div className="flex items-center">;"
</div>
          </Badge>;"
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;""
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;"
</Badge>
            </Badge>;"
    <div className="border border-zinc-800 rounded-md">;"
</div>"
      <div className="p-4">;"
</div>"
        <div className="flex items-center">;"
</div>
          <Badge;"
            variant="outline""
            className={"
              method === 'GET
                ? "border-green-500 text-green-400 font-mono"""
                : method === 'POST
                ? "border-blue-500 text-blue-400 font-mono"""
                : method === 'PUT
                ? "border-yellow-500 text-yellow-400 font-mono"""
                : "border-red-500 text-red-400 font-mono"""

              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;""
                a <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">429 Too Many Requests</code> response.;"
                Rate limit information is included in the response headers: </p>;"
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">;"
</ul>"
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>;""
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>;""
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;"
              </ul>;
    <div className="border border-zinc-800 rounded-md">;"
      <div className="p-4">;"
        <div className="flex items-center">;"
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;""
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;"

                : "border-red-500 text-red-400 font-mono""
            }>;
              <h4 className="text - md font - semibold mt - 6 mb - 2">Rate Limiting</h4>;""
                a <code className="bg - zinc - 800 px - 1 py - 0.5 rounded">429 Too Many Requests</code> response.;"
              <ul className="list - disc pl - 6 space - y-1 text - zinc - 400">;"
                <li><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">X - RateLimit - Limit</code>: Number of requests allowed in the time window</li>;""
                <li><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">X - RateLimit - Remaining</code>: Number of requests remaining in the current window</li>;""
                <li><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">X - RateLimit - Reset</code>: Unix timestamp when the rate limit resets</li>;"
    );"

              </ul>;
            </div>;
          </TabsContent>;
        </Tabs>;

      </CardContent>;)
    </Card>);"
    <div className="border border - zinc - 800 rounded - md">;"
      <div className="p - 4">;"
        <div className="flex items - center">;"
            variant="outline";"
              method === 'GET';
                ? "border - green - 500 text - green - 400 font - mono";""
                : method === 'POST';
                ? "border - blue - 500 text - blue - 400 font - mono";""
                : method === 'PUT';
                ? "border - yellow - 500 text - yellow - 400 font - mono";""
                : "border - red - 500 text - red - 400 font - mono";"
          >;


            )}
        </div>;"
        <p className="mt - 2 text - zinc - 400">{description}</p>;"
        <div className="border - t border - zinc - 800 p - 4">;"
          <h4 className="font - medium mb - 2">Parameters</h4>;""
          <table className="w - full">;"
              <tr className="text - left border - b border - zinc - 800 text - sm">;"
                <th className="pb - 2">Name</th>;""
                <th className="pb - 2">Type</th>;""
                <th className="pb - 2">Description</th>;"
                <tr key={index} className={index < params.length - 1 ? "border - b border - zinc - 800" : ""}>;"
                  <td className="py - 2 font - mono text - sm">;"
</td>
        <p className="mt-2 text-zinc-400">{description}</p>;"
        <div className="border-t border-zinc-800 p-4">;"
          <h4 className="font-medium mb-2">Parameters</h4>;""
          <table className="w-full">;"
              <tr className="text-left border-b border-zinc-800 text-sm">;"
                <th className="pb-2">Name</th>;""
                <th className="pb-2">Type</th>;""
                <th className="pb-2">Description</th>;"
                <tr key={index} className={index < params && params.length - 1 ? "border-b border-zinc-800" : ""}>;"
                  <td className="py-2 font-mono text-sm">;"
</td>"
                    {param && param.required && <span className="text-red-500">*</span>}"
                  </td>;"
                  <td className="py-2 text-sm text-zinc-400">{param && param.type}</td>;""
                  <td className="py-2 text-sm text-zinc-400">{param && param.description}</td>;"
          </table>;
        <div className="border-t border-zinc-800 p-4">"
          <div className="flex items-center mb-2">"
            <h4 className="font-medium">Request Example</h4>""
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">"
          <div className="flex items-center mb-2">;"
            <h4 className="font-medium">Request Example</h4>;""
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">;"
                <button;
                  key={lang}`;
                  className={`px-3 py-1 text-xs font-medium ${;
                    activeTab === lang ;"
                      ? "bg-zinc-700 text-white" ;""
                      :"text-zinc-400 hover:bg-zinc-800";"`;
                  onClick={() => setActiveTab(lang)}
</button>
          <CodeBlock;
            code={codeExamples[activeTab]}"
            language={activeTab === "curl" ? "bash" : activeTab}"

                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang;"
                      ? "bg-zinc-700 text-white"""
                      : "text-zinc-400 hover:bg-zinc-800""`;
                </button>;

          <h4 className="font-medium mb-2">Response</h4>;"
            code={responseExamples && responseExamples.success}"

            language="json""

          />;
</CodeBlock>
        </div>;

    </div>;"
                    {param.required && <span className="text - red - 500">*</span>}"
                  <td className="py - 2 text - sm text - zinc - 400">{param.type}</td>;""
                  <td className="py - 2 text - sm text - zinc - 400">{param.description}</td>;"
                </tr>))}
        </div>)}"
          <div className="flex items - center mb - 2">;"
            <h4 className="font - medium">Request Example</h4>;""
            <div className="ml - auto flex border border - zinc - 700 rounded - md overflow - hidden">;"
                  className={`px - 3 py - 1 text - xs font - medium ${
                    active_tab === lang;"
                      ? "bg - zinc - 700 text - white";""
                      : "text - zinc - 400 hover:bg - zinc - 800";"`;
                  on_click={() => setActiveTab (lang)}
                </button>))}
            code={code_examples[active_tab]}"
            language={active_tab === "curl" ? "bash" : active_tab}"

          <h4 className="font - medium mb - 2">Response</h4>;"
            code={response_examples.success}"

        </div>)}
    </div>);
}
;
;

;
    </div>;
  );
}
;

  ),;}
;
 import CodeBlock from "./CodeBlock";
<CardHeader> <CardTitle className="text-xl flex items-center" > <BookOpen className="mr-2" size= {
  20 
}/> API Documentation </CardTitle> <CardDescription className="text-zinc-400" > Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className="bg-blue-900/30 border-blue-800 mb-6" > <Terminal className="h-4 w-4" /> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs defaultValue="jobs" className="space-y-4" > <TabsList className="bg-zinc-800 border-zinc-700" > <TabsTrigger value="jobs" >Jobs</TabsTrigger> <TabsTrigger value="talent" >Talent</TabsTrigger> <TabsTrigger value="quotes" >Quotes</TabsTrigger> <TabsTrigger value="webhooks" >Webhooks</TabsTrigger> <TabsTrigger value="errors" >Errors</TabsTrigger> </TabsList> <TabsContent value="jobs" className="space-y-6" > <EndpointSection python: `import requests headers = {
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
<CardHeader> <CardTitle className="text-xl flex items-center" > <BookOpen className="mr-2" size= {"
"`;
}/> API Documentation  <CardDescription className="text-zinc-400" > Reference documentation for integrating with the Zion Marketplace API.   <CardContent> <Alert className="bg-blue-900/30 border-blue-800 mb-6" > <Terminal className="h-4 w-4" /> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header.   <Tabs defaultValue="jobs" className="space-y-4" > <TabsList className="bg-zinc-800 border-zinc-700" > <TabsTrigger value="jobs" >Jobs <TabsTrigger value="talent" >Talent <TabsTrigger value="quotes" >Quotes <TabsTrigger value="webhooks" >Webhooks <TabsTrigger value="errors" >Errors  <TabsContent value="jobs" className="space-y-6" > <EndpointSection python: `import requests headers = {""
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json
}response = requests.get ('https: //api.ziontechgroup.com/v1/jobs';
params= {
  'limit': 10, 'category': 'development
};
}responseExamples= {
  {`;
  success: ` {
  "data" : [ {"`;
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/jobs/\$ {
  jobId;`;
}\`, {"
  method: 'GET';',
python: `import requests headers = {
}job id;
}';`;
headers=headers) data = response.json () print (data) ` 
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z
}/>  <TabsContent value="talent" className="space-y-6" > <EndpointSection python: `import requests headers = {"
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/talent/\$ {
  talentId;`;
}talent id;
  success: ` {]
}/>  <TabsContent value="quotes" className="space-y-6" > <EndpointSection python: `import requests import json headers = {"
}/> <EndpointSection python: `import requests headers = {"
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json`;
}headers=headers) data = response.json () print (data) ` 
}/>  <TabsContent value="webhooks" className="space-y-6"> <div className="prose prose-invert max-w-none"> <h3 className="text-lg font-semibold mb-2">Webhook Events</h3> <p className="text-zinc-400 mb-4"> The Zion API can send webhook notifications when certain events occur in your account. You can configure webhooks in the Webhooks tab of the Developer Dashboard. </p> <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4> <p className="text-zinc-400 mb-4"> When you create a webhook, you can optionally provide a secret key. If a secret is provided, each webhook request will include a signature in the <code className="bg-zinc-800 px-1 py-0.5 rounded" >X-Zion-Signature</code> header. This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key. </p> <CodeBlock //Respond to acknowledge receipt res.status (200) .send ('Webhook received');
}/> <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4> <table className="w-full border-collapse mt-2"> <thead> <tr className="border-b border-zinc-800"> <th className="py-2 px-4 text-left">Event Type</th> <th className="py-2 px-4 text-left">Description</th> </tr> </thead> <tbody> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">new application</td> <td className="py-2 px-4">When a talent applies to one of your jobs</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">quote received</td> <td className="py-2 px-4">When you receive a quote from talent</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">milestone approved</td> <td className="py-2 px-4">When a project milestone is approved</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">talent hired</td> <td className="py-2 px-4">When you hire talent for a project</td> </tr> </tbody> </table> <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4> <p className="text-zinc-400 mb-2"> Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded" >new application</code> webhook payload: </p> <CodeBlock /> </div>  <TabsContent value="errors" className="space-y-6"> <div className="prose prose-invert max-w-none"> <h3 className="text-lg font-semibold mb-2">Error Responses</h3> <p className="text-zinc-400 mb-4"> The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the provided information, and codes in the 5xx range indicate an error with our servers. </p> <table className="w-full border-collapse mt-4"> <thead> <tr className="border-b border-zinc-800"> <th className="py-2 px-4 text-left">Status Code</th> <th className="py-2 px-4 text-left">Description</th> </tr> </thead> <tbody> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td> <td className="py-2 px-4">The request was successful.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td> <td className="py-2 px-4">The resource was successfully created.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td> <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td> <td className="py-2 px-4">Authentication credentials were missing or invalid.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td> <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td> <td className="py-2 px-4">The requested resource does not exist.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td> <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td> <td className="py-2 px-4">The request was rejected due to rate limiting.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td> <td className="py-2 px-4">Something went wrong on our end.</td> </tr> </tbody> </table> <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4> <p className="text-zinc-400 mb-2" > Error responses include a consistent JSON object with the following format: </p> <CodeBlock ]"
}` "
}language="json" /> <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4> <p className="text-zinc-400 mb-4"> The Zion API implements rate limiting to protect our infrastructure and ensure fair usage. Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response. </p> <p className="text-zinc-400 mb-2"> Rate limit information is included in the response headers: </p> <ul className="list-disc pl-6 space-y-1 text-zinc-400"> <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li> <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li> <li><code className="bg-zinc-800 px-1 py-0.5 rounded" >X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li> </ul> </div>    )""
}//Helper component for API endpoint documentation > <Badge variant="outline" className= {""
  method === 'GET'? "border-green-500 text-green-400 font-mono" : method === 'POST'? "border-blue-500 text-blue-400 font-mono" : method === 'PUT' > {

} <span className="ml-2 font-mono text-sm text-white"> {"
</span>
}</span> {"
  note && (<Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800"> {"
}) "
}</div> <p className="mt-2 text-zinc-400"> {"
}</p> </div> {"
  params.length > 0 && (<div className="border-t border-zinc-800 p-4"> <h4 className="font-medium mb-2">Parameters</h4> <table className="w-full"> <thead> <tr className="text-left border-b border-zinc-800 text-sm"> <th className="pb-2">Name</th> <th className="pb-2">Type</th> <th className="pb-2">Description</th> </tr> </thead> <tbody> </tr>) )"
}</tbody> </table> </div>) 
  activeTab === lang </button>) ) 
}</div> </div> <CodeBlock /> </div>) 

}<CodeBlock code= {
  responseExamples.success;"
}language="json" /> </div>)"

}</div>) 
    </div>;"`;
pr-12325
    </div>
    </div>;"

;
    </div>;
  );
}
;
