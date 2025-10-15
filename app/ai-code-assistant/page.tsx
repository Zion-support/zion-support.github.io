import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  CodeBracketIcon,
  CpuChipIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChartBarIcon,
  StarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const AICodeAssistantPage: React.FC = () => {
  const features = [
    'Code Generation',
    'Bug Detection',
    'Performance Optimization',
    'Code Review',
    'Documentation Generation',
    'Test Case Creation',
    'Refactoring Suggestions',
    'Multi-language Support',
    'IDE Integration',
    'Learning Recommendations'
  ];

  const benefits = [
    'Faster development cycles',
    'Improved code quality',
    'Reduced debugging time',
    'Enhanced performance',
    'Accelerated learning',
    'Significant time savings'
  ];

  const useCases = [
    'Software development',
    'Code optimization',
    'Bug fixing',
    'Code review',
    'Documentation',
    'Learning programming'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: 79,
      period: 'month',
      description: 'Perfect for individual developers',
      features: [
        'Code generation (1000 lines/month)',
        'Basic bug detection',
        'Simple refactoring suggestions',
        '5 IDE integrations',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: 199,
      period: 'month',
      description: 'Ideal for professional developers',
      features: [
        'Unlimited code generation',
        'Advanced bug detection',
        'Performance optimization',
        'Code review analysis',
        'Documentation generation',
        'Test case creation',
        'All IDE integrations',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 599,
      period: 'month',
      description: 'For development teams',
      features: [
        'Everything in Pro',
        'Team collaboration tools',
        'Custom AI models',
        'Advanced analytics',
        'API access',
        'White-label options',
        'Dedicated support',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Code Assistant Pro - Zion Tech Group"
        description="Advanced AI-powered coding assistant that helps developers write better code, debug issues, and optimize performance. Boost productivity with intelligent code generation and analysis."
        keywords="ai code assistant, code generation, bug detection, code optimization, programming assistant, developer tools, code review, refactoring"
        canonicalUrl="https://ziontechgroup.com/ai-code-assistant"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-8">
              <CodeBracketIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              AI Code Assistant Pro
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Enhance your coding with AI-powered assistance that helps you write better code, debug issues, and optimize performance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link to="/demo"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: '50,000+', label: 'Lines Generated Daily' },
                { number: '95%', label: 'Bug Detection Accuracy' },
                { number: '40%', label: 'Faster Development' },
                { number: '10,000+', label: 'Happy Developers' }
              ].map((stat, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI Code Assistant comes packed with advanced features to supercharge your development workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CodeBracketIcon,
                  title: 'Intelligent Code Generation',
                  description: 'Generate high-quality code snippets, functions, and entire modules based on natural language descriptions.'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Advanced Bug Detection',
                  description: 'Identify potential bugs, security vulnerabilities, and code smells before they become problems.'
                },
                {
                  icon: ChartBarIcon,
                  title: 'Performance Optimization',
                  description: 'Analyze your code and suggest optimizations to improve performance and efficiency.'
                },
                {
                  icon: LightBulbIcon,
                  title: 'Smart Refactoring',
                  description: 'Get intelligent suggestions for refactoring code to improve readability and maintainability.'
                },
                {
                  icon: ClockIcon,
                  title: 'Real-time Assistance',
                  description: 'Get instant help as you code with real-time suggestions and error corrections.'
                },
                {
                  icon: UserGroupIcon,
                  title: 'Team Collaboration',
                  description: 'Share code snippets, collaborate on projects, and maintain coding standards across your team.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Code Assistant</span>?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Join thousands of developers who have transformed their coding experience with our AI-powered assistant
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Use Cases</h3>
                <div className="space-y-3">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your development needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                        : 'border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Supercharge Your Coding?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who are already coding faster and better with AI assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICodeAssistantPage;