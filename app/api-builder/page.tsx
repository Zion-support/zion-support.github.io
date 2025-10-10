'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Code, Settings, Zap } from 'lucide-react';
const ApiBuilderPage: React.FC = () => {}
  return (
    <>
      <Helmet></Helmet>
        <title>API Builder - Zion Tech Group | Create and Manage APIs</title>
        <meta name="description" content=""Create and manage APIs with AI assistance, documentation generation, and testing tools. Build powerful APIs without coding." /></meta>"
        <meta name="keywords" content=""API builder, API development, REST API, API management, API documentation" /></meta>"
        <meta property="og:title" content=""API Builder - Zion Tech Group" /></meta>"
        <meta property="og:description" content=""Create and manage APIs with AI assistance" /></meta>"
        <meta property="og:type" content=""website" /></meta>"
        <meta property="og:url" content=""https://ziontechgroup.com/api-builder" /></meta>"
      </Helmet>
      <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
        <section className=""pt-24 pb-16 px-4"></section>"
          <div className=""max-w-7xl mx-auto text-center"></div>"
            <h1 className=""text-4xl md:text-6xl font-bold text-white mb-6"></h1>"
              <span className=""bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>"
                API Builder;
              </span>
            </h1>
            <p className=""text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>"
              Create and manage APIs with AI assistance, documentation generation, and testing tools. Build powerful APIs without coding.
            </p>
            <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <button className=""px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors"></button>"
                Start Building;
              </button>
              <button className=""px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors"></button>"
                View Demo;
              </button>
            </div>
          </div>
        </section>
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-7xl mx-auto"></div>"
            <h2 className=""text-3xl font-bold text-white mb-12 text-center">Features</h2>"
            <div className=""grid grid-cols-1 md:grid-cols-3 gap-8"></div>"
              <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"></div>"
                <div className=""w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>"
                  <Code className=""w-8 h-8 text-cyan-400" /></Code>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-4">Visual API Builder</h3>"
                <p className=""text-gray-300">Drag-and-drop interface to build APIs without coding</p>"
              </div>
              <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"></div>"
                <div className=""w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>"
                  <Settings className=""w-8 h-8 text-purple-400" /></Settings>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-4">Auto Documentation</h3>"
                <p className=""text-gray-300">Automatically generate comprehensive API documentation</p>"
              </div>
              <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"></div>"
                <div className=""w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>"
                  <Zap className=""w-8 h-8 text-green-400" /></Zap>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-4">Testing Tools</h3>"
                <p className=""text-gray-300">Built-in testing and debugging tools for your APIs</p>"
              </div>
            </div>
          </div>
        </section>
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-4xl mx-auto text-center"></div>"
            <h2 className=""text-3xl font-bold text-white mb-8">Pricing</h2>"
            <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"></div>"
              <div className=""text-4xl font-bold text-cyan-400 mb-4">$59/month</div>"
              <p className=""text-gray-300 mb-8">Perfect for developers and teams</p>"
              <ul className=""space-y-4 text-left max-w-md mx-auto"></ul>"
                <li className=""flex items-center text-gray-300"></li>"
                  <CheckCircle className=""w-5 h-5 text-cyan-400 mr-3" /></CheckCircle>"
                  <span>Unlimited APIs</span>
                </li>
                <li className=""flex items-center text-gray-300"></li>"
                  <CheckCircle className=""w-5 h-5 text-cyan-400 mr-3" /></CheckCircle>"
                  <span>Auto documentation</span>
                </li>
                <li className=""flex items-center text-gray-300"></li>"
                  <CheckCircle className=""w-5 h-5 text-cyan-400 mr-3" /></CheckCircle>"
                  <span>Testing tools</span>
                </li>
                <li className=""flex items-center text-gray-300"></li>"
                  <CheckCircle className=""w-5 h-5 text-cyan-400 mr-3" /></CheckCircle>"
                  <span>24/7 support</span>
                </li>
              </ul>
              <button className=""mt-8 w-full bg-cyan-400 text-slate-900 font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors"></button>"
                Get Started;
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ApiBuilderPage;