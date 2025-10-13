<<<<<<< HEAD
=======
'use client';
import React, {useState}from 'react';
import {Search, Code, Key, Zap, ArrowRight, Copy, Check, Globe, Brain, Cloud, Shield, Settings, Users, Database, Eye, Sparkles, BookOpen, FileText, Download}}from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
export default function APIDocsPage() {const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const copyToClipboard = (code: string, id: string) => {,
    "features": ["sentiment", "entities", "key_phrases"]}'`
  const filteredEndpoints = apiEndpoints.map(category => ({)
  ];];
  const filteredEndpoints = apiEndpoints.map(category => ({
    ...category,
    endpoints: category.endpoints.filter(endpoint => ,)
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
    )})).filter(category => category.endpoints.length > 0);
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <SEOOptimizer;
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            API
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Integrate with our powerful AI and IT solutions through our comprehensive REST API. 
            Build amazing applications with our developer-friendly endpoints.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search API endpoints..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
      
            </div>
          ))
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 px-4">
        </section>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Complete API documentation for Zion Tech Group's AI and IT solutions.</p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">,</button>
              <Code className="mr-2 h-5 w-5" />
              Get Started;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Download className="mr-2 h-5 w-5" />
      {/* Quick Start */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Start</h2>
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">,</div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Key className="w-6 h-6 text-white" />
              </button>
            </div>
          ))
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-4">
        </section>
                          </span>
                          <code className="text-purple-400 font-mono">{endpoint.path}</code>
                        </div>
                        <button
                          onClick={() => copyToClipboard(endpoint.code, `${categoryIndex}-${endpointIndex}`</div>
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >

                            <>
  </>
                              <Copy className="w-4 h-4" />
                              Copy;
                            </React.Fragment>

                          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700">
        </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
