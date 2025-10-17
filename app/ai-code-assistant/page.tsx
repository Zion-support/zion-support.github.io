<<<<<<< HEAD
'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CpuChipIcon, 
  CodeBracketIcon, 
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LightBulbIcon,
  BugAntIcon
} from '@heroicons/react/24/outline';

const AICodeAssistantPage: React.FC = () => {
  const features = [
    {
      icon: CodeBracketIcon,
      title: 'Code Generation',
      description: 'Generate code from natural language descriptions with support for 50+ programming languages.',
      benefits: ['50+ languages supported', 'Natural language input', 'Context-aware generation']
    },
    {
      icon: BugAntIcon,
      title: 'Bug Detection',
      description: 'Automatically detect and fix bugs in your code with intelligent analysis and suggestions.',
      benefits: ['Real-time bug detection', 'Automated fixes', 'Security vulnerability scanning']
    },
    {
      icon: LightBulbIcon,
      title: 'Code Optimization',
      description: 'Optimize your code for performance, readability, and best practices automatically.',
      benefits: ['Performance optimization', 'Code refactoring', 'Best practice suggestions']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Analysis',
      description: 'Comprehensive security analysis to identify vulnerabilities and security issues in your code.',
      benefits: ['Vulnerability scanning', 'Security recommendations', 'Compliance checking']
    }
  ];

  const languages = [
    { name: 'JavaScript', icon: '🟨', description: 'Frontend and backend development' },
    { name: 'Python', icon: '🐍', description: 'Data science and web development' },
    { name: 'Java', icon: '☕', description: 'Enterprise applications' },
    { name: 'C++', icon: '⚡', description: 'System programming and games' },
    { name: 'Go', icon: '🐹', description: 'Cloud-native applications' },
    { name: 'Rust', icon: '🦀', description: 'Systems programming' }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 1000 code generations per month',
        'Basic bug detection',
        'Standard optimization',
        'Email support',
        'Basic security analysis'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for professional developers and teams',
      features: [
        'Unlimited code generations',
        'Advanced bug detection',
        'Comprehensive optimization',
        'Priority support',
        'Advanced security analysis',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI model training',
        'Dedicated support team',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Developer',
      company: 'TechCorp Inc',
      content: 'AI Code Assistant has increased my productivity by 300%. I can now write complex algorithms in minutes instead of hours.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Full Stack Developer',
      company: 'StartupXYZ',
      content: 'The bug detection feature is incredible. It catches issues I would have missed and suggests fixes that actually work.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Engineer',
      company: 'InnovateTech',
      content: 'Our team\'s code quality has improved dramatically since we started using AI Code Assistant. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Code Assistant - Zion Tech Group"
        description="AI-powered code generation, bug detection, and optimization for 50+ programming languages. Boost developer productivity with intelligent coding assistance."
        keywords="AI code assistant, code generation, bug detection, code optimization, programming AI, developer tools, coding assistance"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <CpuChipIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">AI Code Assistant</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Code Assistant
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Boost your coding productivity with AI-powered code generation, bug detection, and optimization. 
                Support for 50+ programming languages with 95% accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 inline ml-2" />
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
                  <div className="text-gray-300">Productivity Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300">Languages Supported</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Support for <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">50+ Languages</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From popular languages to niche ones, we support your entire development stack.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {languages.map((language, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{language.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                      {language.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {language.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Coding Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered coding tools designed to maximize developer productivity and code quality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Developer-Friendly <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your coding needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                    : 'border-slate-700 hover:border-blue-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Developers Worldwide</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how developers are boosting their productivity with AI Code Assistant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Boost Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Coding Productivity</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers writing better code faster with AI Code Assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 inline ml-2" />
              </button>
              <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
=======
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
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
      </div>
    </>
  );
};

export default AICodeAssistantPage;