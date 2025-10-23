'use client';
import React, {useState} from 'react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import {Key, Copy, Code} from 'lucide-react';;

constApiDocsPage: React.FC= () =>{const [copiedCodesetCopiedCode]=useState<string | null>(null);
  
  constcopyToClipboard= (code: string, id: string) => {
  
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null),2000);
 };

  constapiEndpoints= [
    {id: 'ai-chat',
      title: 'AI Chat API',
      method: 'POST',
      endpoint: '/$1/v1/$1/chat',
      description: 'Send messages to our AI chatbot and get intelligent responses.',
      example: `curl -X POST "https://api.ziontechgroup.com/$1/ai/chat" \\
  -H "Authorization: BearerYOUR_API_KEY" \\
  -H "Content-Type:application/json" \\
  -d '{
    "message":"Hello, how can you help me?",
   "context":"customer_support"
}'`
    },
    {id: 'ai-analysis',
      title: 'AI Data Analysis',
      method: 'POST',
      endpoint: '/$1/v1/$1/analyze',
      description: 'Analyze data using our AI models for insights and predictions.',
      example: `curl -X POST"https:// api.ziontechgroup.com/$1/ai/analyze" \\
  -H"Authorization: Bearer YOUR_API_KEY" \\
  -H"Content-Type: application/json" \\
  -d '{
   "data": [1, 2, 3, 4, 5],
   "analysis_type":"trend_analysis"
}'`
    }
  ];

  return (
  <><divclassName="min-h-screen bg-gradient-to-br from-gray-90 0via-indigo-900to-purple-900"><Navigation /><divclassName="container mx-autopx-4py-8">{/* HeroSection */}
        <sectionclassName="text-centermb-16relativeoverflow-hidden"><divclassName="absolute inset-0 bg-gradient-to-r from-indigo-60 0/20to-purple-600/20rounded-3xl"></di><divclassName="relative z-10py-16px-4"><spanclassName="text-4 xlmd:text-6 xl font-bold text-whitemb-6leading-tight"></className="text-4 xlmd:text-6 xl font-bold text-whitemb-6leading-tight"><spanclassName="bg-gradient-to-r from-cyan-400via-blue-50 0to-purple-600bg-clip-texttext-transparent"></className="bg-gradient-to-r from-cyan-400via-blue-50 0to-purple-600bg-clip-texttext-transparent">API Documentation
              </spa></h><spanclassName="text-xl text-gray-300mb-8 max-w-3xlmx-auto"></className="text-xl text-gray-300mb-8 max-w-3xlmx-auto">Integrate with our powerful AI and IT services through our comprehensive REST API.
            </p></di></sectio>{/* APIEndpoints */}
        <sectionclassName="mb-16"><h2className="text-3 xl font-bold text-whitemb-8text-center">APIEndpoints</h><divclassName="space-y-6">{apiEndpoints.map((endpoint) => (
             <divkey={endpoint.id}className="bg-gray-800rounded-lgp-6"><divclassName="flex items-centerjustify-betweenmb-4"><divclassName="flexitems-centerspace-x-4">< className={`px-3 py-1 rounded text-sm font-semibold ${
                        endpoint.method=== 'POST' ? 'bg-green-600text-white'  : 'bg-blue-600text-white'
                    }`}></ className={`px-3 py-1 rounded text-sm font-semibold ${
                        endpoint.method=== 'POST' ? 'bg-green-600text-white'  : 'bg-blue-600text-white'
                    }`}>{endpoint.method}
                    </spa><codeclassName="text-cyan-400font-mono">{endpoint.endpoint}</cod></di><
                      onClick={() =></
                      onClick={() =>copyToClipboard(endpoint.example,endpoint.id)}
                     className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600roundedtext-smtransition-colors"
                    >
                      {copiedCode=== endpoint.id?<CheckclassName="w-4h-4" />:<CopyclassName="w-4h-4"/>}
                    <spa n>{copiedCode=== endpoint.id ?'Copied!':'Copy'}</spa></butto></di><h3className="text-xl font-semiboldtext-whitemb-2">{endpoint.title}</h><pclassName="text-gray-300mb-4">{endpoint.description}</p><divclassName="bg-gray-900roundedp-4overflow-x-auto"><reclassName="text-sm text-gray-300whitespace-pre-wrap"></reclassName="text-smtext-gray-300whitespace-pre-wrap">{endpoint.example}</pr></di></di>))}
          </di></sectio>{/* CTASection */}
        <sectionclassName="text-centerpy-16"><divclassName="bg-gradient-to-r from-indigo-90 0/50to-purple-90 0/50rounded-2xlp-8"><h2className="text-3 xl font-boldtext-whitemb-4">Ready toGetStarted?</h><spanclassName="text-gray-300mb-6text-lg"></spa></className="text-gray-300mb-6text-lg">Contact us for API access and integration support.
            </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="tel:+13024640950"
                 className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300hover:scale-105"
                ><KeyclassName="w-5h-5" />+1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
                 className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300hover:scale-105"
                ><CodeclassName="w-5h-5" />kleber@ziontechgroup.com
              </a></di></di></sectio></di></di><Footer /></>
  );
};

export default ApiDocsPage;