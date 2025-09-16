import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AIEnterpriseCopilot2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🤖 AI ENTERPRISE COPILOT 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            AI Enterprise Copilot 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Transform your business operations with AI-powered copilots that work alongside your teams to enhance productivity and drive innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🧭</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Automation</h3>
            <p className="text-gray-600 mb-6">
              Automate complex business processes with AI that understands context and adapts to your needs.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Workflow optimization</li>
              <li>• Task automation</li>
              <li>• Process intelligence</li>
              <li>• Adaptive learning</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-6xl mb-6 text-center">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
            <p className="text-gray-600 mb-6">
              Make data-driven decisions with AI that predicts trends and identifies opportunities.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Trend forecasting</li>
              <li>• Risk assessment</li>
              <li>• Performance optimization</li>
              <li>• Strategic insights</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-6xl mb-6 text-center">💬</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contextual Assistance</h3>
            <p className="text-gray-600 mb-6">
              Get intelligent assistance that understands your business context and provides relevant support.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Smart recommendations</li>
              <li>• Context-aware help</li>
              <li>• Proactive suggestions</li>
              <li>• Knowledge management</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Deploy Your AI Enterprise Copilot?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business operations with AI-powered copilots that enhance productivity and drive innovation.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Deploy AI Copilot →
            </a>
            <a href="/pages/UltimateAIRevolution2027" className="border border-blue-600 text-blue-600 px-12 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">
              Explore AI Revolution →
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIEnterpriseCopilot2025;