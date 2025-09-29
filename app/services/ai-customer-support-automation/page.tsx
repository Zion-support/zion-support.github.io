import React from 'react';

export const metadata = {
  title: 'AI Customer Support Automation | Zion Tech Group',
  description: 'Professional AI customer support automation services for your business needs.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Customer Support Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your customer support with intelligent AI automation that provides 
            instant, accurate responses and seamless human handoff when needed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Intelligent Support Solutions
            </h2>
            <p className="text-gray-300 mb-6">
              Our AI-powered customer support automation reduces response times by 80% 
              while maintaining high customer satisfaction through intelligent routing 
              and contextual understanding.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                24/7 automated support with instant responses
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Natural language processing for complex queries
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Seamless escalation to human agents
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Multi-channel support (chat, email, phone)
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Smart Routing</h4>
                <p className="text-gray-300">Automatically route tickets to the right department or agent</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Sentiment Analysis</h4>
                <p className="text-gray-300">Detect customer emotions and prioritize urgent cases</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Knowledge Base Integration</h4>
                <p className="text-gray-300">Access company knowledge for accurate responses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}