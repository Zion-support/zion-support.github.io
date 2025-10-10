'use client;

import React from 'react;

import { Helmet } from 'react-helmet-async;

import { CheckCircle, Code, Settings, Zap } from 'lucide-react;

const ApiBuilderPage: React.FC = () => {
  return (

    <>
      <Helmet>
        <title>API Builder - Zion Tech Group | Create and Manage APIs</title>
        <meta name="description" content="Create and manage APIs with AI assistance, documentation generation, and testing tools. Build powerful APIs without coding. />
        <meta name="keywords" content="API builder, API development, REST API, API management, API documentation />
        <meta property="og:title" content="API Builder - Zion Tech Group />
        <meta property="og:description" content="Create and manage APIs with AI assistance />
        <meta property="og:type" content="website />
        <meta property="og:url" content="https://ziontechgroup.com/api-builder />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        <section className="pt-24 pb-16 px-4>
          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                API Builder
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8>
              Create and manage APIs with AI assistance, documentation generation, and testing tools. Build powerful APIs without coding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center>
              <button className="px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors>
                Start Building
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors>
                View Demo
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <h2 className="text-3xl font-bold text-white mb-12 text-center>Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Code className="w-8 h-8 text-cyan-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Visual API Builder</h3>
                <p className="text-gray-300>Drag-and-drop interface to build APIs without coding</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Settings className="w-8 h-8 text-purple-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Auto Documentation</h3>
                <p className="text-gray-300>Automatically generate comprehensive API documentation</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Zap className="w-8 h-8 text-green-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Testing Tools</h3>
                <p className="text-gray-300>Built-in testing and debugging tools for your APIs</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <h2 className="text-3xl font-bold text-white mb-8>Pricing</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>
              <div className="text-4xl font-bold text-cyan-400 mb-4>$59/month</div>
              <p className="text-gray-300 mb-8>Perfect for developers and teams</p>
              <ul className="space-y-4 text-left max-w-md mx-auto>
                <li className="flex items-center text-gray-300>
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 />
                  <span>Unlimited APIs</span>
                </li>
                <li className="flex items-center text-gray-300>
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 />
                  <span>Auto documentation</span>
                </li>
                <li className="flex items-center text-gray-300>
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 />
                  <span>Testing tools</span>
                </li>
                <li className="flex items-center text-gray-300>
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 />
                  <span>24/7 support</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-cyan-400 text-slate-900 font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors>
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );

};

export default ApiBuilderPage;
