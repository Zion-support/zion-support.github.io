'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CodeBracketIcon, 
  SparklesIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  CpuChipIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  BoltIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const AICodeAssistantPage: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [codeInput, setCodeInput] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Code Generation',
      description: 'Generate code in 50+ programming languages using advanced AI models',
      price: 'Included'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Analysis',
      description: 'Automatically detect vulnerabilities and security issues in your code',
      price: 'Included'
    },
    {
      icon: ClockIcon,
      title: 'Real-time Suggestions',
      description: 'Get instant code suggestions and improvements as you type',
      price: 'Included'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-language Support',
      description: 'Support for Python, JavaScript, Java, C++, Go, Rust, and more',
      price: 'Included'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        '1000 code generations/month',
        '5 programming languages',
        'Basic security analysis',
        'Email support',
        'Code snippets library'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        '5000 code generations/month',
        '20+ programming languages',
        'Advanced security analysis',
        'Priority support',
        'Team collaboration',
        'API access',
        'Custom templates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited code generations',
        'All programming languages',
        'Enterprise security analysis',
        '24/7 dedicated support',
        'Advanced team management',
        'Custom AI model training',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const handleCodeGeneration = async () => {
    setIsGenerating(true);
    // Simulate AI code generation
    setTimeout(() => {
      setGeneratedCode(`// Generated AI Code
function ${codeInput || 'exampleFunction'}() {
  // AI-generated implementation
  console.log('Hello from AI Code Assistant!');
  return 'Generated successfully';
}

// Usage example
const result = ${codeInput || 'exampleFunction'}();
console.log(result);`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <>
      <SEOHead 
        title="AI Code Assistant - Zion Tech Group"
        description="Advanced AI-powered code generation and assistance tool. Generate, analyze, and optimize code in 50+ programming languages with enterprise-grade security."
        keywords="AI code assistant, code generation, programming, software development, AI coding, code analysis"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <SparklesIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">AI-Powered Development</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="animated-gradient-text">AI Code Assistant</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionize your coding workflow with our advanced AI-powered code generation, 
                analysis, and optimization platform. Support for 50+ programming languages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={handleCodeGeneration}
                  disabled={isGenerating}
                  className="cyber-button text-lg px-8 py-4 disabled:opacity-50"
                >
                  {isGenerating ? 'Generating...' : 'Try Free Demo'}
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </div>
              
              {/* Live Demo Section */}
              <div className="max-w-4xl mx-auto">
                <div className="holographic-card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Live Code Generation Demo</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Enter function name or description:</label>
                      <textarea
                        value={codeInput}
                        onChange={(e) => setCodeInput(e.target.value)}
                        placeholder="e.g., 'create a function to validate email addresses'"
                        className="w-full h-32 p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                      <button
                        onClick={handleCodeGeneration}
                        disabled={isGenerating}
                        className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50"
                      >
                        {isGenerating ? 'Generating Code...' : 'Generate Code'}
                      </button>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Generated Code:</label>
                      <pre className="w-full h-32 p-4 bg-slate-800 border border-slate-600 rounded-lg text-green-400 text-sm overflow-auto">
                        {generatedCode || '// Generated code will appear here...'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="animated-gradient-text">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to accelerate your development workflow with AI assistance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <span className="text-blue-400 font-semibold">{feature.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="animated-gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your development needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`holographic-card p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white' 
                      : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="animated-gradient-text">Transform</span> Your Coding?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who are already using AI to write better code faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICodeAssistantPage;