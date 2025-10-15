import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  BugAntIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const AICodeAssistantPage: React.FC = () => {
  const features = [
    {
      icon: CodeBracketIcon,
      title: 'Code Generation',
      description: 'Generate high-quality code in multiple programming languages with AI assistance.',
      benefits: ['Faster Development', 'Reduced Errors', 'Best Practices', 'Multiple Languages']
    },
    {
      icon: BugAntIcon,
      title: 'Bug Detection',
      description: 'Automatically identify and suggest fixes for bugs in your code.',
      benefits: ['Early Detection', 'Automated Fixes', 'Code Quality', 'Security Issues']
    },
    {
      icon: LightBulbIcon,
      title: 'Code Optimization',
      description: 'Optimize your code for better performance and efficiency.',
      benefits: ['Performance Boost', 'Memory Optimization', 'Algorithm Improvement', 'Resource Usage']
    },
    {
      icon: RocketLaunchIcon,
      title: 'Auto-completion',
      description: 'Intelligent code completion that understands your project context.',
      benefits: ['Faster Coding', 'Context Awareness', 'Smart Suggestions', 'Reduced Typing']
    }
  ];

  const languages = [
    'JavaScript/TypeScript',
    'Python',
    'Java',
    'C++',
    'C#',
    'Go',
    'Rust',
    'PHP',
    'Ruby',
    'Swift',
    'Kotlin',
    'Dart'
  ];

  return (
    <>
      <SEOHead
        title="AI Code Assistant - Zion Tech Group"
        description="AI-powered code assistant that helps developers write better code faster with intelligent suggestions, bug detection, and optimization."
        keywords="AI code assistant, code generation, bug detection, code optimization, programming assistant, developer tools"
        canonicalUrl="https://ziontechgroup.com/ai-code-assistant"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-emerald-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  AI Code Assistant
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Supercharge your development workflow with our AI-powered code assistant. Write better code faster with intelligent suggestions, bug detection, and optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Try Free Trial
                </button>
                <button className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful <span className="text-green-400">AI Features</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI code assistant understands your codebase and provides intelligent assistance for every aspect of development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Supported <span className="text-green-400">Languages</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI assistant supports a wide range of programming languages and frameworks.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {languages.map((language, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-all duration-300">
                  <div className="text-sm font-semibold text-white">{language}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple <span className="text-green-400">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your development needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">Free</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">$0<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    100 code suggestions/month
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Basic bug detection
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    3 programming languages
                  </li>
                </ul>
                <button className="w-full border-2 border-green-400 text-green-300 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  Get Started
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-green-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Pro</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">$29<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Unlimited code suggestions
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Advanced bug detection
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    All programming languages
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Code optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">Custom</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    On-premise deployment
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Dedicated support
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    SLA guarantee
                  </li>
                </ul>
                <button className="w-full border-2 border-green-400 text-green-300 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-900/40 via-slate-900 to-emerald-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Code Smarter?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of developers who are already using our AI code assistant to write better code faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICodeAssistantPage;