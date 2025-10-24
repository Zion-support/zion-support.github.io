    "use client",
import { X } from 'lucide-react';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Key, Copy } from 'lucide-react';
import { Code } from 'lucide-react';
import { Check } from 'lucide-react';
import { Send, X } from 'lucide-react'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Send, X } from 'lucide-react'
import { Send, X } from 'lucide-react'
import { Send, X } from 'lucide-react'
const Page: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => {};
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }
  constapiEndpoints= []
    {id: 'ai-chat',
      title: 'AI Chat API',
      method: 'POST',
      endpoint: '/$1/v1/$1/chat',;
      description: 'Send messages to our AI chatbot and get intelligent responses.',;
    {id: "ai-chat",
      title: 'AI Chat API'
      method: "POST",
      endpoint: '/$1/v1/$1/chat';
      description: 'Send messages to our AI chatbot and get intelligent responses.';
      example: `curl -X POST &quot;https://api.ziontechgroup.com/$1/ai/chat&quot; \\
  -H &quot;Authorization: BearerYOUR_API_KEY&quot; \\
  -H &quot;Content-Type:application/json&quot; \\
  -d '{}
    &quot;message&quot;:&quot;Hello, how can you help me?&quot;
   &quot;context&quot;:&quot;customer_support&quot;
}'`
{    },
    {id: 'ai-analysis',
      title: 'AI Data Analysis',
      method: 'POST',
      endpoint: '/$1/v1/$1/analyze',
      description: 'Analyze data using our AI models for insights and predictions.',
  }
    {id: "ai-analysis",
      title: 'AI Data Analysis'
      method: "POST",
      endpoint: '/$1/v1/$1/analyze'
      description: "Analyze data using our AI models for insights and predictions.",
      example: `curl -X POST&quot;https:// api.ziontechgroup.com/$1/ai/analyze&quot; \\
  -H&quot;Authorization: Bearer YOUR_API_KEY&quot; \\
  -H&quot;Content-Type: application/json&quot; \\
  -d '{}
   &quot;data&quot;: [1, 2, 3, 4, 5]
   &quot;analysis_type&quot;:&quot;trend_analysis&quot;
}'`
{    }
  ]
const Page = () => {
  return (
    <>;
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"></div>
        <Navigation />
        <div className="container mx-auto px-4 py-8"></div>
          {/* Hero Section */}
          <section className="text-center mb-16 relative overflow-hidden"></section>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl"></div>
            <div className="relative z-10 py-16 px-4"></div>
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 leading-tight"></h1>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  API Documentation
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Integrate with our powerful AI and IT services through our comprehensive REST API.
              </p>
            </div>
          </section>
          {/* API Endpoints */}
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2>
            <div className="space-y-6"></div>
              {apiEndpoints.map((endpoint) => ()
                <div key={endpoint.id} className="bg-gray-800 rounded-lg p-6"></div>
                  <div className="flex items-center justify-between mb-4"></div>
                    <div className="flex items-center space-x-4"></div>
                      <span className = {`px-3 py-1 rounded text-sm font-semibold ${}>
                        endpoint.method === 'POST' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                      }`}>
                        {endpoint.method}
                      </span>;
                      <code className="text-cyan-400 font-mono">{endpoint.endpoint}</code>
                    </div>
                    <button >
                      onClick = {() =></button> copyToClipboard(endpoint.example, endpoint.id)}
                      className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors"
                    >
                      {copiedCode === endpoint.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedCode = == endpoint.id ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">{endpoint.title}</h3>
                  <p className="text-gray-300 mb-4">{endpoint.description}</p>
                  <div className="bg-gray-900 rounded p-4 overflow-x-auto"></div>
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap"></p>{endpoint.example}</pre>
                  </div>
                </div>
{              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="text-center py-16"></section>
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8"></div>
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Contact us for API access and integration support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
                <a href="tel:+13024640950">
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Key className="w-5 h-5" />
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com">
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Code className="w-5 h-5" />
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
</>
  )
{}
export default Page;