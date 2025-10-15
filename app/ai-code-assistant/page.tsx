'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CodeBracketIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  CpuChipIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const AICodeAssistantPage: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Code Generation',
      description: 'Generate high-quality code in 50+ programming languages with advanced AI models',
      stats: '95% accuracy rate'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Analysis',
      description: 'Automatically detect vulnerabilities and security issues in your code',
      stats: '99.8% vulnerability detection'
    },
    {
      icon: ClockIcon,
      title: 'Real-time Assistance',
      description: 'Get instant code suggestions and debugging help as you type',
      stats: '< 100ms response time'
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Share code snippets and collaborate with your development team',
      stats: 'Unlimited team members'
    },
    {
      icon: ChartBarIcon,
      title: 'Code Analytics',
      description: 'Analyze code quality, performance metrics, and optimization suggestions',
      stats: '50+ metrics tracked'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Auto-deployment',
      description: 'Automatically deploy code to staging and production environments',
      stats: 'Zero-downtime deployments'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        '5,000 code generations/month',
        '10 programming languages',
        'Basic security analysis',
        'Email support',
        'GitHub integration',
        'VS Code extension'
      ],
      popular: false,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        '25,000 code generations/month',
        '50+ programming languages',
        'Advanced security analysis',
        'Priority support',
        'All IDE integrations',
        'Team collaboration tools',
        'Code analytics dashboard',
        'API access'
      ],
      popular: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited code generations',
        'All programming languages',
        'Enterprise security scanning',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced team management',
        'Custom AI model training',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Developer',
      company: 'TechCorp',
      content: 'Zion AI Code Assistant has increased our development speed by 300%. The code quality is exceptional and security analysis catches issues we would have missed.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The team collaboration features are game-changing. We can now share code snippets instantly and maintain consistency across our entire codebase.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Engineer',
      company: 'FinanceApp',
      content: 'The security analysis has saved us from multiple potential breaches. The AI catches vulnerabilities that traditional tools miss.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Code Assistant - Zion Tech Group"
        description="Advanced AI-powered code generation, security analysis, and development assistance. Boost productivity with intelligent coding tools."
        keywords="AI code assistant, code generation, programming, security analysis, development tools, AI coding"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Particles */}
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  AI Code Assistant
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Revolutionize your development workflow with AI-powered code generation, security analysis, and intelligent assistance. 
                Write better code faster with our advanced artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-blue-400/25 neon-border-animated">
                  View Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 lg:mb-2">50+</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Languages</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 lg:mb-2">95%</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-400 mb-1 lg:mb-2">300%</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Faster Coding</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 lg:mb-2">10K+</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Developers</div>
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
                Everything you need to accelerate your development process and write better, more secure code.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-blue-400 font-medium neon-text">{feature.stats}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your development needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group relative ${plan.popular ? 'scale-105' : ''} holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold neon-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What Developers <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join thousands of developers who have transformed their coding experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
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
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
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
              Ready to Transform Your Coding?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free trial today and experience the future of AI-powered development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-blue-500/25">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25">
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