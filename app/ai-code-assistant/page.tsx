import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CodeBracketIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const AICodeAssistantPage: React.FC = () => {
  const features = [
    'AI-powered code generation and completion',
    'Multi-language support (Python, JavaScript, TypeScript, Java, C++, Go, Rust)',
    'Intelligent code review and suggestions',
    'Automated bug detection and fixing',
    'Code documentation generation',
    'Refactoring recommendations',
    'Performance optimization suggestions',
    'Security vulnerability scanning',
    'Code testing and validation',
    'Integration with popular IDEs'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 1,000 code generations per month',
        'Basic AI code completion',
        '5 supported programming languages',
        'Email support',
        'Basic documentation generation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Up to 10,000 code generations per month',
        'Advanced AI code completion',
        'All programming languages supported',
        'Priority support',
        'Advanced code review',
        'Team collaboration features',
        'Custom AI model training',
        'API access'
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
        'Premium AI models',
        'Custom AI model development',
        '24/7 dedicated support',
        'On-premise deployment',
        'Advanced security features',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Web Development',
      description: 'Generate React components, API endpoints, and database schemas',
      icon: GlobeAltIcon
    },
    {
      title: 'Mobile Apps',
      description: 'Create iOS and Android app components with platform-specific code',
      icon: CpuChipIcon
    },
    {
      title: 'Data Science',
      description: 'Generate machine learning models, data processing scripts, and visualizations',
      icon: DocumentTextIcon
    },
    {
      title: 'DevOps & Automation',
      description: 'Create deployment scripts, CI/CD pipelines, and infrastructure code',
      icon: ShieldCheckIcon
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Code Assistant Pro - Zion Tech Group"
        description="Revolutionary AI-powered code assistant that generates, reviews, and optimizes code across multiple programming languages. Boost developer productivity with intelligent automation."
        keywords="AI code assistant, code generation, programming AI, developer tools, code review, automated coding, machine learning coding, software development AI"
        canonicalUrl="https://ziontechgroup.com/ai-code-assistant"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  AI Code Assistant Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Revolutionary AI-powered code assistant that generates, reviews, and optimizes code across multiple programming languages. Boost developer productivity with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <a href="#pricing"
                  className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a href="#demo"
                  className="border-2 border-blue-400 text-blue-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-blue-400/25"
                >
                  Watch Demo
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">10+</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Languages</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">95%</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">5x</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Faster</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">24/7</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need to accelerate your development workflow with AI-powered intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="flex items-start space-x-4 p-4 sm:p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="relative">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-gray-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect for Every <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Development Need</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From web development to data science, our AI assistant adapts to your specific requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <useCase.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-blue-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your development needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-blue-500 shadow-blue-500/20' 
                      : 'border-slate-700 hover:border-blue-500 hover:shadow-blue-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-purple-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Revolutionize Your Coding?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of developers who are already coding faster and smarter with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICodeAssistantPage;