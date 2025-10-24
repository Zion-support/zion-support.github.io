'use client'
import { X } from 'lucide-react';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Key, Copy } from 'lucide-react';
import { Code } from 'lucide-react';
import { Check } from 'lucide-react';
      example: '`curl -X POST "https://api.ziontechgroup.com/$1/ai/chat" \\
  -H "Authorizatio'',
      n: 'BearerYOUR_API_KEY" \\
  -H "Content-Typ'',
      e: 'application/json" \\
  -d '{'}
    "message":"Hello, how can you help me?"
   "context":"customer_support"
}'`
{    },
    {id: 'ai-analysis',
      title: 'AI Data Analysis',
      method: 'POST',
      endpoint: '/$1/v 1/$1/analyze',
      description: 'Analyze data using our AI models for insights and predictions.',
      example: '`curl -X POST"https:// api.ziontechgroup.com/$1/ai/analyze" \\
  -H"Authorizatio'',
      n: 'Bearer YOUR_API_KEY" \\
  -H"Content-Typ'',
      e: 'application/json" \\
  -d '{'}
   "data": [1, 2, 3, 4, 5]
   "analysis_type":"trend_analysis"
}'`
{    }
  ]

const Page = () => {};
  return (;
      <div className="min-h-screen bg-gradient-to-br from-gray-90 0 via-indigo-90 0 to-purple-90 0"></div>
        <Navigation />
        <div className="container mx-auto px-4 py-8"></div>
          {
    /* Hero Section  */
    return (</section>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-60 0/2 0 to-purple-60 0/2 0 rounded-3xl"></div>
            <div className="relative z-1 0 py-1 6 px-4"></div>
              <h 1 className="text-4xl md: 'text-6xl font-bold text-white mb-6 leading-tight"></h 1>
                <span className="bg-gradient-to-r from-cyan-40 0 via-blue-50 0 to-purple-60 0 bg-clip-text text-transparent">API Documentation
                </span>
              </h 1>
              <p className="text-xl text-gray-30 0 mb-8 max-w-3xl mx-auto">Integrate with our powerful AI and IT services through our comprehensive REST API.
              </p>
            </div>
          </section>
          {
    /* API Endpoints  */
    return (</section>
            <h 2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h 2>
            <div className="space-y-6"></div>
              {apiEndpoints.map((endpoint) => ()
                <div key={endpoint.id''} className="bg-gray-80 0 rounded-lg p-6"></div>
                  <div className="flex items-center justify-between mb-4"></div>
                    <div className="flex items-center space-x-4"></div>
                      <span className = {`px-3 py-1 rounded text-sm font-semibold ${}>
                        endpoint.method === 'POST' ? 'bg-green-60 0 text-white' : 'bg-blue-60 0 text-white'
                      }`}>;
                        {endpoint.method};

  return (;
                      <code className="text-cyan-40 0 font-mono">{endpoint.endpoint};

  return (
                    </div>
                    <button >onClick = {() =></button> copyToClipboard(endpoint.example, endpoint.id)};
                      className="flex items-center space-x-2 px-3 py-1 bg-gray-70 0 hover: 'bg-gray-60 0 rounded text-sm transition-colors"
                    >
                      {copiedCode === endpoint.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />''};

  return ({copiedCode = == endpoint.id ? 'Copied!' : 'Copy'};

  return (
                    </button>
                  </div>;
                  <h 3 className="text-xl font-semibold text-white mb-2">{endpoint.title};

  return (
                  <p className="text-gray-30 0 mb-4">{endpoint.description};

  return (
                  <div className="bg-gray-90 0 rounded p-4 overflow-x-auto"></div>
                    <p re className="text-sm text-gray-30 0 whitespace-pre-wrap"></p>{endpoint.example};

  return (
                  </div>
                </div>
{              ))};

  return (
          </section>
          {
    /* CTA Section  */
    return (</section>
            <div className="bg-gradient-to-r from-indigo-90 0/5 0 to-purple-90 0/5 0 rounded-2xl p-8"></div>
              <h 2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h 2>
              <p className="text-gray-30 0 mb-6 text-lg">Contact us for API access and integration support.
              </p>
              <div className="flex flex-col sm: 'flex-row gap-4 justify-center items-center"></div>
                <a href="tel:+1302464095 0">
                  className="flex items-center gap-2 bg-indigo-60 0 hover:bg-indigo-70 0 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-30 0 hover:scale-10 5"
                >
                  <Key className="w-5 h-5" />
                  +1 30 2 46 4 095 0
                </a>
                <a href="mailto:kleber@ziontechgroup.com">
                  className="flex items-center gap-2 bg-purple-60 0 hove'',
      r: 'bg-purple-70 0 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-30 0 hove',
      r: 'scale-10 5"
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
{''}

export default Page;
}