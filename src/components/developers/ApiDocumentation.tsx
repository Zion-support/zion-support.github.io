import { useState } from 'react',
import { BookOpen, Terminal } from 'lucide-react',
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
interface ApiEndpoint {
  method: string,
  endpoint: string,
  description: string;
  note?: string;
  params: Array<{
    name: string,
    type: string,
    description: string,
    required: boolean, }>;
  codeExamples?: Record<string, string>;
  responseExamples?: {
    success: string,
    error?: string, }, }

interface ApiDocumentationProps {
  endpoints: ApiEndpoint[], }

export function ApiDocumentation({ endpoints }: ApiDocumentationProps) {
  const [activeTab, setActiveTab] = useState<string>('');

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'border-green-500 text-green-400',
      case 'POST':
        return 'border-blue-500 text-blue-400',
      case 'PUT':
        return 'border-yellow-500 text-yellow-400',
      case 'DELETE':
        return 'border-red-500 text-red-400',
      default:
        return 'border-gray-500 text-gray-400', }
  };

  const CodeBlock = ({ code, language }: { code: string; language: string }) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            API Documentation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="border border-zinc-800 rounded-md">
                <div className="p-4">
                  <div className="flex items-center">
                    <Badge
                      
                      className={`${getMethodColor(endpoint.method)} font-mono`}
                    >
                      {endpoint.method}
                    </Badge>
                    <span className="ml-2 font-mono text-sm text-white">{endpoint.endpoint}</span>
                    {endpoint.note && (
                      <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">
                        {endpoint.note}
                      </Badge>
                    )}
                  </div>
                  <p className="mt-2 text-zinc-400">{endpoint.description}</p>
                </div>
                
                {endpoint.params.length > 0 && (
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
                        {endpoint.params.map((param, paramIndex) => (
                          <tr
                            key={paramIndex}
                            className={
                              paramIndex < endpoint.params.length - 1 ? 'border-b border-zinc-800' : ''
                            }
                          >
                            <td className="py-2 font-mono text-sm">
                              {param.name}
                              {param.required && <span className="text-red-500">*</span>}
                            </td>
                            <td className="py-2 text-sm text-zinc-400">{param.type}</td>
                            <td className="py-2 text-sm text-zinc-400">
                              {param.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                
                {endpoint.codeExamples && (
                  <div className="border-t border-zinc-800 p-4">
                    <div className="flex items-center mb-2">
                      <h4 className="font-medium">Request Example</h4>
                      <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">
                        {Object.keys(endpoint.codeExamples).map(lang => (
                          <button
                            key={lang}
                            className={`px-3 py-1 text-xs font-medium ${
                              activeTab === lang
                                ? 'bg-zinc-700 text-white'
                                : 'text-zinc-400 hover:bg-zinc-800'
                            }`}
                            onClick={() => setActiveTab(lang)}
                          >
                            {lang === 'curl'
                              ? 'cURL'
                              : lang === 'javascript'
                                ? 'JavaScript'
                                : 'Python'}
                          </button>
                        ))}
                      </div>
                    </div>
                    <CodeBlock
                      code={endpoint.codeExamples[activeTab] || '// Code example not available'}
                      language={activeTab === 'curl' ? 'bash' : activeTab}
                    />
                  </div>
                )}
                
                {endpoint.responseExamples && (
                  <div className="border-t border-zinc-800 p-4">
                    <h4 className="font-medium mb-2">Response</h4>
                    <CodeBlock code={endpoint.responseExamples.success} language="json" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );