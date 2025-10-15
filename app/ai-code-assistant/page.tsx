'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CodeBracketIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const AICodeAssistantPage: React.FC = () => {
  const [codeInput, setCodeInput] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const features = [
    'AI-powered code generation',
    'Multi-language support (Python, JavaScript, TypeScript, Java, C++, Go)',
    'Real-time code analysis and optimization',
    'Intelligent bug detection and fixing',
    'Code documentation generation',
    'Performance optimization suggestions',
    'Security vulnerability scanning',
    'Code refactoring recommendations',
    'Test case generation',
    'API integration assistance'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        '100 code generations/month',
        '5 languages supported',
        'Basic bug detection',
        'Email support',
        'Community access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'For professional development teams',
      features: [
        '1000 code generations/month',
        'All languages supported',
        'Advanced AI analysis',
        'Priority support',
        'Team collaboration',
        'Custom integrations',
        'Advanced security scanning'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited code generations',
        'All features included',
        '24/7 dedicated support',
        'Custom AI training',
        'On-premise deployment',
        'SLA guarantee',
        'White-label options'
      ],
      popular: false
    }
  ];

  const handleCodeGeneration = async () => {
    setIsGenerating(true);
    // Simulate AI code generation
    setTimeout(() => {
      setGeneratedCode(`// AI Generated Code
function optimizePerformance(data) {
  // Advanced optimization algorithm
  const optimized = data
    .filter(item => item.isActive)
    .map(item => ({
      ...item,
      score: calculateScore(item),
      timestamp: Date.now()
    }))
    .sort((a, b) => b.score - a.score);
  
  return optimized;
}

function calculateScore(item) {
  // Intelligent scoring algorithm
  return item.priority * 0.7 + item.urgency * 0.3;
}`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <>
      <SEOHead 
        title="AI Code Assistant - Zion Tech Group"
        description="Revolutionary AI-powered code assistant that generates, optimizes, and analyzes code across multiple programming languages. Boost your development productivity with intelligent automation."
        keywords="AI code assistant, code generation, programming, software development, AI coding, code optimization, bug detection"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-8 neon-glow">
                <CodeBracketIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic">
                AI Code Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your development workflow with our advanced AI-powered code assistant. 
                Generate, optimize, and analyze code across multiple programming languages with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleCodeGeneration}
                  disabled={isGenerating}
                  className="cyber-button px-8 py-4 text-lg disabled:opacity-50"
                >
                  {isGenerating ? 'Generating...' : 'Try AI Code Generation'}
                </button>
                <a href="#pricing" className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">
                  Try Our AI Code Assistant
                </h2>
                <p className="text-gray-300 mb-8">
                  Enter a description of what you want to build, and our AI will generate optimized code for you.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Describe your code requirements:
                    </label>
                    <textarea
                      value={codeInput}
                      onChange={(e) => setCodeInput(e.target.value)}
                      placeholder="e.g., Create a function that sorts an array of objects by priority and urgency..."
                      className="w-full h-32 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  
                  <button
                    onClick={handleCodeGeneration}
                    disabled={!codeInput.trim() || isGenerating}
                    className="w-full cyber-button py-3 disabled:opacity-50"
                  >
                    {isGenerating ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Generating Code...
                      </div>
                    ) : (
                      'Generate Code with AI'
                    )}
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gradient">Generated Code:</h3>
                <div className="bg-slate-800 rounded-lg p-4 h-64 overflow-auto">
                  <pre className="text-green-400 text-sm font-mono">
                    {generatedCode || '// Your AI-generated code will appear here...'}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful <span className="text-gradient">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Code Assistant comes packed with advanced features to supercharge your development process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Choose Your <span className="text-gradient">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your development needs. All plans include our core AI features.
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
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
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
                      ? 'cyber-button' 
                      : 'border-2 border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-300'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Ready to Transform Your Coding Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who are already using our AI Code Assistant to build better software faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
              </a>
              <a href="/demo" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICodeAssistantPage;