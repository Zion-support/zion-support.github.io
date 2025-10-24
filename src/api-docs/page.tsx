'use client'
import { X } from 'lucide-react';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Key, Copy } from 'lucide-react';
import { Code } from 'lucide-react';
import { Check } from 'lucide-react';

const $1: React.FC = () => {;
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
      example: `curl -X POST &quot;https://api.ziontechgroup.com/$1/ai/chat&quot; \\
  -H &quot;Authorization: BearerYOUR_API_KEY&quot; \\
  -H &quot;Content-Type:application/json&quot; \\
  -d '{}
    &quot;message&quot;:&quot;Hello, how can you help me?&quot;,
   &quot;context&quot;:&quot;customer_support&quot;
}'`
{    },
    {id: 'ai-analysis',
      title: 'AI Data Analysis',
      method: 'POST',
      endpoint: '/$1/v1/$1/analyze',
      description: 'Analyze data using our AI models for insights and predictions.',
      example: `curl -X POST&quot;https:// api.ziontechgroup.com/$1/ai/analyze&quot; \\
  -H&quot;Authorization: Bearer YOUR_API_KEY&quot; \\
  -H&quot;Content-Type: application/json&quot; \\
  -d '{}
   &quot;data&quot;: [1, 2, 3, 4, 5],
   &quot;analysis_type&quot;:&quot;trend_analysis&quot;
}'`
{    }
  ]

const Page = () => {};
  return ()
    <>;
      <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900&quot;></div>
        <Navigation />
        <div className=&quot;container mx-auto px-4 py-8&quot;></div>
          {/* Hero Section */}
          <section className=&quot;text-center mb-16 relative overflow-hidden&quot;></section>
            <div className=&quot;absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl&quot;></div>
            <div className=&quot;relative z-10 py-16 px-4&quot;></div>
              <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6 leading-tight&quot;></h1>
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;>
                  API Documentation
                </span>
              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
                Integrate with our powerful AI and IT services through our comprehensive REST API.
              </p>
            </div>
          </section>
          {/* API Endpoints */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl font-bold text-white mb-8 text-center&quot;>API Endpoints</h2>
            <div className=&quot;space-y-6&quot;></div>
              {apiEndpoints.map((endpoint) => ()
                <div key={endpoint.id} className=&quot;bg-gray-800 rounded-lg p-6&quot;></div>
                  <div className=&quot;flex items-center justify-between mb-4&quot;></div>
                    <div className=&quot;flex items-center space-x-4&quot;></div>
                      <span className={`px-3 py-1 rounded text-sm font-semibold ${}
                        endpoint.method === 'POST' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className=&quot;text-cyan-400 font-mono&quot;>{endpoint.endpoint}</code>
                    </div>
                    <button
                      onClick={() =></button> copyToClipboard(endpoint.example, endpoint.id)}
                      className=&quot;flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors&quot;
                    >
                      {copiedCode === endpoint.id ? <Check className=&quot;w-4 h-4&quot; /> : <Copy className=&quot;w-4 h-4&quot; />}
                      <span>{copiedCode === endpoint.id ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>{endpoint.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{endpoint.description}</p>
                  <div className=&quot;bg-gray-900 rounded p-4 overflow-x-auto&quot;></div>
                    <pre className=&quot;text-sm text-gray-300 whitespace-pre-wrap&quot;></p>{endpoint.example}</pre>
                  </div>
                </div>
{              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className=&quot;text-center py-16&quot;></section>
            <div className=&quot;bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8&quot;></div>
              <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Ready to Get Started?</h2>
              <p className=&quot;text-gray-300 mb-6 text-lg&quot;>
                Contact us for API access and integration support.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;></div>
                <a
                  href=&quot;tel:+13024640950&quot;
                  className=&quot;flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105&quot;
                >
                  <Key className=&quot;w-5 h-5&quot; />
                  +1 302 464 0950
                </a>
                <a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  className=&quot;flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105&quot;
                >
                  <Code className=&quot;w-5 h-5&quot; />
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