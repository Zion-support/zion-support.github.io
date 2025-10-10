'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';

const APIDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      title: 'AI Services',
      description: 'Core AI functionality and machine learning services',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/ai/predict',
          description: 'Make predictions using trained AI models',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "sentiment-analysis-v1",
    "input_data": {
      "text": "I love this product!"
    }
  }'`
        },
        {
          method: 'POST',
          path: '/api/v1/ai/train',
          description: 'Train a new AI model with your data',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/train" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_name": "custom-classifier",
    "training_data": [...],
    "model_type": "classification"
  }'`
        }
      ]
    },
    {
      title: 'Micro SAAS',
      description: 'Micro SAAS tools and utilities',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/micro-saas/tools',
          description: 'Get list of available micro SAAS tools',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/micro-saas/tools" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        },
        {
          method: 'POST',
          path: '/api/v1/micro-saas/execute',
          description: 'Execute a micro SAAS tool',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/micro-saas/execute" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "tool_id": "content-generator",
    "parameters": {
      "topic": "AI Technology",
      "length": "500"
    }
  }'`
        }
      ]
    }
  ]</string | null>;</string | null>
</string>
  return<//string> <//string>(</string>
   <//string> <//string><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg particle-system">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg particle-system"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg particle-system"> </div><Navigation />

     </Navigation /> </Navigation /><main className="relative z-10 pt-20">{/* Hero Section *</main className="relative z-10 pt-20">/</main className="relative z-10 pt-20">}</main>
       <//main> <//main><section className="py-20 px-4 text-center">
         </section className="py-20 px-4 text-center"> </section className="py-20 px-4 text-center"><div className="max-w-6xl mx-auto">
          </div className="max-w-6xl mx-auto"> </div className="max-w-6xl mx-auto"> </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-enhanced floating">API Documentati</h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-enhanced floating">o</h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-enhanced floating">n</h1><p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">Complete API Referenc</p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">e</p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow"><p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">Comprehensive API documentation for all our services. Get started with our AP</p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">I</p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">s</p>
              and integrate our AI and micro SAAS solutions into your application<//p>s<//p>.</p>

            {/* Search Bar */}
           <//p> <//p><div className="max-w-2xl mx-auto mb-12">
             </div className="max-w-2xl mx-auto mb-12"> </div className="max-w-2xl mx-auto mb-12"><div className="relative">
              </div className="relative"> </div className="relative"> </div><Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
               </Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> </Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /><input
                  type="text"
                  placeholder="Search API endpoints..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
                />
            </input
                  type="text"
                  placeholder="Search API endpoints..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
                /> </input
                  type="text"
                  placeholder="Search API endpoints..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
                /> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* API Endpoints */}
       <//section> <//section><section className="py-16 px-4">
         </section className="py-16 px-4"> </section className="py-16 px-4"><div className="max-w-7xl mx-auto">
          </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">API Endpoint</h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">s</h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text"><div className="space-y-12">{apiEndpoints.map((category, categoryIndex) =</div className="space-y-12">></div className="space-y-12"> </div>(</div>
               <//div> <//div><div key={categoryIndex} className="cyber-card-enhanced p-8">
                 </div key={categoryIndex} className="cyber-card-enhanced p-8"> </div key={categoryIndex} className="cyber-card-enhanced p-8"><div className="mb-8">
                  </div className="mb-8"> </div className="mb-8"> </div><h3 className="text-2xl font-bold text-white mb-2">{category.title</h3 className="text-2xl font-bold text-white mb-2">}</h3 className="text-2xl font-bold text-white mb-2"><p className="text-gray-300">{category.description</p className="text-gray-300">}</p className="text-gray-300"><div className="space-y-6">{category.endpoints.map((endpoint, endpointIndex) =</div className="space-y-6">></div className="space-y-6"> </div>(</div>
                     <//div> <//div><div key={endpointIndex} className="cyber-card hologram-card p-6">
                       </div key={endpointIndex} className="cyber-card hologram-card p-6"> </div key={endpointIndex} className="cyber-card hologram-card p-6"><div className="flex items-center justify-between mb-4">
                         </div className="flex items-center justify-between mb-4"> </div className="flex items-center justify-between mb-4"><div className="flex items-center space-x-4">
                          </div className="flex items-center space-x-4"> </div className="flex items-center space-x-4"> </div><span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              endpoint.method === 'GET' ? 'bg-green-400 text-slate-900' :
                              endpoint.method === 'POST' ? 'bg-blue-400 text-slate-900' :
                              endpoint.method === 'PUT' ? 'bg-yellow-400 text-slate-900' :
                              'bg-red-400 text-slate-900'
                            }`}>{endpoint.metho</span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              endpoint.method === 'GET' ? 'bg-green-400 text-slate-900' :
                              endpoint.method === 'POST' ? 'bg-blue-400 text-slate-900' :
                              endpoint.method === 'PUT' ? 'bg-yellow-400 text-slate-900' :
                              'bg-red-400 text-slate-900'
                            }`}>d</span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              endpoint.method === 'GET' ? 'bg-green-400 text-slate-900' :
                              endpoint.method === 'POST' ? 'bg-blue-400 text-slate-900' :
                              endpoint.method === 'PUT' ? 'bg-yellow-400 text-slate-900' :
                              'bg-red-400 text-slate-900'
                            }`}>}</span><code className="text-cyan-400 font-mono text-lg">{endpoint.path</code className="text-cyan-400 font-mono text-lg">}</code className="text-cyan-400 font-mono text-lg"><p className="text-gray-300 mb-4">{endpoint.descriptio</p className="text-gray-300 mb-4">n</p className="text-gray-300 mb-4">}</p>

                       <//p> <//p><div className="bg-slate-900/50 rounded-lg p-4">
                         </div className="bg-slate-900/50 rounded-lg p-4"> </div className="bg-slate-900/50 rounded-lg p-4"><div className="flex items-center justify-between mb-2">
                          </div className="flex items-center justify-between mb-2"> </div className="flex items-center justify-between mb-2"> </div><span className="text-sm text-gray-400">Example Reque</span className="text-sm text-gray-400">s</span className="text-sm text-gray-400">t</span><button
                              onClick={() =>copyToClipboard(endpoint.example, `${categoryIndex}-${endpointIndex}`)}
                              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                           </button
                              onClick={() => </button
                              onClick={() =>></button>
                              {copiedCode === `${categoryIndex}-${endpointIndex}` ?<//button> <//button>(</button>
                               <//button> <//button><>
                                  <Check className="w-4 h-4" />
                                 </Check className="w-4 h-4" /> </Check className="w-4 h-4" /><span className="text-sm">Copi</span className="text-sm">e</span className="text-sm">d</span>!</span>
                               <//span> <//span></>
                              ) : (
                               <//> <//><>
                                  <Copy className="w-4 h-4" />
                                 </Copy className="w-4 h-4" /> </Copy className="w-4 h-4" /><span className="text-sm">C</span className="text-sm">o</span className="text-sm">p</span>y</span>
                               <//span> <//span></>
                              )}
                          <//> <//> </button>
                        <//button> <//button> </div>
                         <//div> <//div><pre className="text-sm text-gray-300 overflow-x-auto">
                           </pre className="text-sm text-gray-300 overflow-x-auto"> </pre className="text-sm text-gray-300 overflow-x-auto"><code>{endpoint.exampl</code>e</code>}</code>
                        <//code> <//code> </pre>
                      <//pre> <//pre> </div>
                    <//div> <//div> </div>
                    ))}
                <//div> <//div> </div>
              <//div> <//div> </div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Authentication */}
       <//section> <//section><section className="py-16 px-4 bg-slate-800/30">
         </section className="py-16 px-4 bg-slate-800/30"> </section className="py-16 px-4 bg-slate-800/30"><div className="max-w-6xl mx-auto">
          </div className="max-w-6xl mx-auto"> </div className="max-w-6xl mx-auto"> </div><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Authenticati</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">o</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">n</h2>
          <//h2> <//h2> </h2>
           <//h2> <//h2><div className="cyber-card-enhanced p-8">
             </div className="cyber-card-enhanced p-8"> </div className="cyber-card-enhanced p-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               </div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div>
                </div> </div> </div><h3 className="text-xl font-bold text-white mb-4 flex items-center">
                   </h3 className="text-xl font-bold text-white mb-4 flex items-center"> </h3 className="text-xl font-bold text-white mb-4 flex items-center"><Key className="w-6 h-6 text-cyan-400 mr-2" >API Key Authenticatio</Key className="w-6 h-6 text-cyan-400 mr-2" >n</Key className="w-6 h-6 text-cyan-400 mr-2" ><p className="text-gray-300 mb-4">All API requests require authentication using an API key. Include your API k</p className="text-gray-300 mb-4">e</p className="text-gray-300 mb-4">y</p>
                    in the Authorization header of each reques<//p>t<//p>.</p>
                 <//p> <//p><div className="bg-slate-900/50 rounded-lg p-4">
                  </div className="bg-slate-900/50 rounded-lg p-4"> </div className="bg-slate-900/50 rounded-lg p-4"> </div><pre className="text-sm text-gray-300">
                     </pre className="text-sm text-gray-300"> </pre className="text-sm text-gray-300"><code>Authorization: Bearer YOUR_API_K</code>E</code>Y</code>
                  <//code> <//code> </pre>
                <//pre> <//pre> </div>
              <//div> <//div> </div>
               <//div> <//div><div>
                </div> </div> </div><h3 className="text-xl font-bold text-white mb-4 flex items-center">
                   </h3 className="text-xl font-bold text-white mb-4 flex items-center"> </h3 className="text-xl font-bold text-white mb-4 flex items-center"><Zap className="w-6 h-6 text-cyan-400 mr-2" >Rate Limitin</Zap className="w-6 h-6 text-cyan-400 mr-2" >g</Zap className="w-6 h-6 text-cyan-400 mr-2" ><p className="text-gray-300 mb-4">API requests are rate limited to ensure fair usage. Standard rate limits ar</p className="text-gray-300 mb-4">e</p className="text-gray-300 mb-4">:</p>
                 <//p> <//p><ul className="text-gray-300 space-y-2">
                   </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>• 1000 requests per hour for free tie</li>r</li><li>• 10,000 requests per hour for paid plan</li>s</li><li>• 100,000 requests per hour for enterpri</li>s</li>e</li>
                <//li> <//li> </ul>
              <//ul> <//ul> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* SDKs */}
       <//section> <//section><section className="py-16 px-4">
         </section className="py-16 px-4"> </section className="py-16 px-4"><div className="max-w-6xl mx-auto">
          </div className="max-w-6xl mx-auto"> </div className="max-w-6xl mx-auto"> </div><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Software Development Ki</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">t</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">s</h2>
          <//h2> <//h2> </h2>
           <//h2> <//h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             </div className="grid grid-cols-1 md:grid-cols-3 gap-8"> </div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="cyber-card hologram-card p-6 text-center">
              </div className="cyber-card hologram-card p-6 text-center"> </div className="cyber-card hologram-card p-6 text-center"> </div><Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
               </Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" /> </Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" /><h3 className="text-xl font-bold text-white mb-2">JavaScript SD</h3 className="text-xl font-bold text-white mb-2">K</h3 className="text-xl font-bold text-white mb-2"><p className="text-gray-300 mb-4">Official JavaScript/Node.js SD</p className="text-gray-300 mb-4">K</p className="text-gray-300 mb-4"><a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">View Documentation</a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium"> </a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">→</a>
              <//a> <//a> </a>
            <//a> <//a> </div>
             <//div> <//div><div className="cyber-card hologram-card p-6 text-center">
              </div className="cyber-card hologram-card p-6 text-center"> </div className="cyber-card hologram-card p-6 text-center"> </div><Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
               </Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" /> </Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" /><h3 className="text-xl font-bold text-white mb-2">Python SD</h3 className="text-xl font-bold text-white mb-2">K</h3 className="text-xl font-bold text-white mb-2"><p className="text-gray-300 mb-4">Official Python SD</p className="text-gray-300 mb-4">K</p className="text-gray-300 mb-4"><a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">View Documentation</a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium"> </a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">→</a>
              <//a> <//a> </a>
            <//a> <//a> </div>
             <//div> <//div><div className="cyber-card hologram-card p-6 text-center">
              </div className="cyber-card hologram-card p-6 text-center"> </div className="cyber-card hologram-card p-6 text-center"> </div><Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
               </Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" /> </Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" /><h3 className="text-xl font-bold text-white mb-2">REST AP</h3 className="text-xl font-bold text-white mb-2">I</h3 className="text-xl font-bold text-white mb-2"><p className="text-gray-300 mb-4">Direct REST API acces</p className="text-gray-300 mb-4">s</p className="text-gray-300 mb-4"><a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">View Documentation</a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium"> </a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">→</a>
              <//a> <//a> </a>
            <//a> <//a> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* CTA Section */}
       <//section> <//section><section className="py-20 px-4 bg-slate-800/30">
         </section className="py-20 px-4 bg-slate-800/30"> </section className="py-20 px-4 bg-slate-800/30"><div className="max-w-4xl mx-auto text-center">
          </div className="max-w-4xl mx-auto text-center"> </div className="max-w-4xl mx-auto text-center"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Get Starte</h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">d</h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">?</h2>
           <//h2> <//h2><p className="text-lg text-gray-300 mb-8">Get your API key and start building with our powerful AI and micro SAAS service</p className="text-lg text-gray-300 mb-8">s</p className="text-lg text-gray-300 mb-8">.</p>
           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><Link
                to="/contact"
                className="cyber-button px-8 py-4"
              >Get API K</Link
                to="/contact"
                className="cyber-button px-8 py-4"
              >e</Link
                to="/contact"
                className="cyber-button px-8 py-4"
              >y</Link>
               <//Link> <//Link><ArrowRight className="w-4 h-4 ml-2" />
             </ArrowRight className="w-4 h-4 ml-2" /> </ArrowRight className="w-4 h-4 ml-2" /><a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >Call: (302) 464-09</a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >5</a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >0</a>
            <//a> <//a> </a>
          <//a> <//a> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>
    <//section> <//section> </main>

     <//main> <//main><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default ApiDocsPage;<//div>
<//div>