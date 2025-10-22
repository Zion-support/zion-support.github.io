<<<<<<< HEAD
import React from 'react';
import SEOHead from '../components/SEOHead';

const AICodeAssistantPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Code Assistant - Zion Tech Group"
        description="Advanced AI-powered code assistant that helps developers write better code, debug issues, and improve productivity."
        keywords="AI code assistant, code generation, debugging, programming, development tools"
        canonicalUrl="https://ziontechgroup.com/ai-code-assistant"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Code Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Intelligent code generation, debugging, and optimization powered by advanced AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Features</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Code generation and completion
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Intelligent debugging assistance
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Code optimization suggestions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Multi-language support
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Real-time code analysis
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Benefits</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Faster development cycles
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Reduced debugging time
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Improved code quality
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Enhanced productivity
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Learning and skill development
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=ai-code-assistant"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICodeAssistantPage;
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export default function AiCodeAssistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Code Assistant | Zion Tech Group</title>
        <meta name="description" content="Professional ai code assistant solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Ai Code Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ai code assistant solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with ai code assistant?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
