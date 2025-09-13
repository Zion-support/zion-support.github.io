'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, Code, Brain, Zap, Shield, Globe, BarChart3, MessageSquare, Image, FileText } from 'lucide-react';

export default function AIToolsDemonstration() {
  const [activeDemo, setActiveDemo] = useState('chatbot');
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', message: 'Hello! I\'m your AI assistant. How can I help you today?' }
  ]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setChatHistory(prev => [...prev, { role: 'user', message: chatInput }]);
      setChatInput('');
      
      // Simulate AI response
      setTimeout(() => {
        setChatHistory(prev => [...prev, { 
          role: 'assistant', 
          message: 'Thank you for your message! This is a demonstration of our AI chatbot capabilities. In a real implementation, I would provide intelligent, context-aware responses.' 
        }]);
      }, 1000);
    }
  };

  const demoTools = [
    {
      id: 'chatbot',
      name: 'AI Chatbot',
      icon: MessageSquare,
      description: 'Intelligent conversational AI for customer support and engagement',
      features: ['Natural language processing', 'Context awareness', 'Multi-language support', '24/7 availability']
    },
    {
      id: 'codegen',
      name: 'Code Generator',
      icon: Code,
      description: 'AI-powered code generation and development assistance',
      features: ['Multiple programming languages', 'Bug detection', 'Code optimization', 'Documentation generation']
    },
    {
      id: 'analytics',
      name: 'Predictive Analytics',
      icon: BarChart3,
      description: 'Advanced analytics and forecasting for business intelligence',
      features: ['Real-time insights', 'Trend prediction', 'Custom dashboards', 'Automated reporting']
    },
    {
      id: 'imagegen',
      name: 'Image Generator',
      icon: Image,
      description: 'AI-powered image creation and manipulation tools',
      features: ['Text-to-image generation', 'Style transfer', 'Image enhancement', 'Custom artwork']
    },
    {
      id: 'content',
      name: 'Content Creator',
      icon: FileText,
      description: 'Automated content generation for marketing and documentation',
      features: ['SEO optimization', 'Multi-format output', 'Brand consistency', 'Plagiarism detection']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Interactive AI Tools
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Experience the power of our AI tools firsthand. Try our live demonstrations and see how AI can transform your workflow.
            </p>
          </div>
        </div>
      </div>

      {/* Tool Selection */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your AI Tool
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our suite of AI-powered tools and experience their capabilities in real-time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {demoTools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveDemo(tool.id)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                    activeDemo === tool.id
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl scale-105'
                      : 'bg-white text-gray-700 shadow-lg hover:shadow-xl hover:scale-102'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    activeDemo === tool.id ? 'bg-white bg-opacity-20' : 'bg-blue-100'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      activeDemo === tool.id ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                  <p className={`text-sm ${
                    activeDemo === tool.id ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {tool.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Demo Area */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            {activeDemo === 'chatbot' && (
              <div className="h-96 flex flex-col">
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI Chatbot Demo</h3>
                    <p className="text-gray-600">Experience intelligent conversation with our AI assistant</p>
                  </div>
                </div>

                <div className="flex-1 bg-gray-50 rounded-xl p-4 mb-4 overflow-y-auto">
                  {chatHistory.map((chat, index) => (
                    <div key={index} className={`mb-4 ${chat.role === 'user' ? 'text-right' : 'text-left'}`}>
                      <div className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        chat.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-900 border'
                      }`}>
                        {chat.message}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type your message here..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Play className="w-5 h-5" />
                  </button>
                </form>
              </div>
            )}

            {activeDemo === 'codegen' && (
              <div className="h-96 flex flex-col">
                <div className="flex items-center mb-6">
                  <Code className="w-8 h-8 text-green-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI Code Generator</h3>
                    <p className="text-gray-600">Generate code snippets and get intelligent programming assistance</p>
                  </div>
                </div>

                <div className="flex-1 bg-gray-900 rounded-xl p-4 text-green-400 font-mono text-sm overflow-y-auto">
                  <div className="mb-4">
                    <div className="text-gray-400">// AI Generated React Component</div>
                    <div className="mt-2">
                      <div>import React, {'{'} useState {'}'} from 'react';</div>
                      <div className="mt-2">
                        <div>const MyComponent = () =&gt; {'{'}</div>
                        <div className="ml-4">const [count, setCount] = useState(0);</div>
                        <div className="ml-4 mt-2">return (</div>
                        <div className="ml-8">&lt;div className="counter"&gt;</div>
                        <div className="ml-12">&lt;h2&gt;Count: {'{'}{count}{'}'}&lt;/h2&gt;</div>
                        <div className="ml-12">&lt;button onClick={() =&gt; setCount(count + 1)}&gt;</div>
                        <div className="ml-16">Increment</div>
                        <div className="ml-12">&lt;/button&gt;</div>
                        <div className="ml-8">&lt;/div&gt;</div>
                        <div className="ml-4">);</div>
                        <div>{'}'};</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-yellow-400">// AI suggests: Add error handling and accessibility features</div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Generate Code
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Copy Code
                  </button>
                </div>
              </div>
            )}

            {activeDemo === 'analytics' && (
              <div className="h-96 flex flex-col">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-8 h-8 text-purple-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Predictive Analytics</h3>
                    <p className="text-gray-600">Real-time insights and trend predictions for your business</p>
                  </div>
                </div>

                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-semibold text-gray-900 mb-2">Revenue Forecast</h4>
                      <div className="text-2xl font-bold text-green-600">$2.4M</div>
                      <div className="text-sm text-gray-600">Next Quarter (+15%)</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-semibold text-gray-900 mb-2">Customer Growth</h4>
                      <div className="text-2xl font-bold text-blue-600">1,247</div>
                      <div className="text-sm text-gray-600">New Customers (+23%)</div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-900 mb-4">Trend Analysis</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Website Traffic</span>
                        <span className="text-sm font-semibold text-green-600">↗ +34%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Conversion Rate</span>
                        <span className="text-sm font-semibold text-blue-600">↗ +12%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Customer Satisfaction</span>
                        <span className="text-sm font-semibold text-purple-600">↗ +8%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Generate Report
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Export Data
                  </button>
                </div>
              </div>
            )}

            {activeDemo === 'imagegen' && (
              <div className="h-96 flex flex-col">
                <div className="flex items-center mb-6">
                  <Image className="w-8 h-8 text-pink-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI Image Generator</h3>
                    <p className="text-gray-600">Create stunning images with AI-powered generation</p>
                  </div>
                </div>

                <div className="flex-1 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Image className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-600 mb-4">AI Generated Image Preview</p>
                    <div className="text-sm text-gray-500">
                      Prompt: "Modern office space with AI technology"
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                    Generate Image
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            )}

            {activeDemo === 'content' && (
              <div className="h-96 flex flex-col">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-indigo-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI Content Creator</h3>
                    <p className="text-gray-600">Generate high-quality content for marketing and documentation</p>
                  </div>
                </div>

                <div className="flex-1 bg-gray-50 rounded-xl p-4 overflow-y-auto">
                  <div className="bg-white p-4 rounded-lg shadow mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Blog Post: "The Future of AI in Business"</h4>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>
                        Artificial Intelligence is revolutionizing the way businesses operate, offering unprecedented opportunities for growth and efficiency. From automated customer service to predictive analytics, AI technologies are transforming every industry.
                      </p>
                      <p>
                        Companies that embrace AI early are seeing remarkable results: increased productivity, reduced costs, and enhanced customer experiences. The key to success lies in understanding how to integrate AI seamlessly into existing workflows.
                      </p>
                      <div className="text-xs text-gray-500 mt-2">
                        SEO Score: 95/100 | Readability: Excellent | Word Count: 247
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Generate Content
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Save Draft
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our AI Tools?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI tools are designed with enterprise-grade security, scalability, and performance in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level encryption and compliance with industry standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Optimized performance with sub-second response times</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Scale</h3>
              <p className="text-gray-600">Deploy anywhere with our worldwide infrastructure</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-gray-600">AI models that improve with every interaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Integrate AI?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Transform your business with our comprehensive AI tool suite. Get started today with a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Start Free Trial
            </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              View All Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}