import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CodeBracketIcon, 
  CheckCircleIcon, 
  LightBulbIcon, 
  ClockIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const AICodeAssistantProPage: React.FC = () => {
  const features = [
    {
      icon: CodeBracketIcon,
      title: 'AI Code Generation',
      description: 'Generate high-quality code in multiple programming languages with AI assistance',
      benefits: ['Multi-language support', 'Code quality optimization', 'Best practices integration']
    },
    {
      icon: LightBulbIcon,
      title: 'Smart Code Suggestions',
      description: 'Get intelligent code suggestions and refactoring recommendations',
      benefits: ['Real-time suggestions', 'Code optimization', 'Performance improvements']
    },
    {
      icon: ClockIcon,
      title: 'Rapid Development',
      description: 'Accelerate development with AI-powered code completion and generation',
      benefits: ['50% faster coding', 'Reduced development time', 'Increased productivity']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Code Quality Assurance',
      description: 'Automated code review and quality checks with security scanning',
      benefits: ['Security scanning', 'Bug detection', 'Code standards compliance']
    },
    {
      icon: ChartBarIcon,
      title: 'Performance Analytics',
      description: 'Analyze code performance and get optimization recommendations',
      benefits: ['Performance metrics', 'Optimization suggestions', 'Bottleneck identification']
    },
    {
      icon: CogIcon,
      title: 'Custom Integrations',
      description: 'Integrate with your favorite IDEs and development tools',
      benefits: ['IDE integration', 'Version control sync', 'Team collaboration']
    }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: 29,
      originalPrice: 59,
      period: 'month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 1,000 code generations/month',
        'Basic AI suggestions',
        'Email support',
        'Standard languages',
        'Basic integrations',
        '1 user'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: 79,
      originalPrice: 159,
      period: 'month',
      description: 'Ideal for development teams',
      features: [
        'Up to 10,000 code generations/month',
        'Advanced AI suggestions',
        'Priority support',
        'All programming languages',
        'Advanced integrations',
        'Up to 10 users',
        'Team collaboration',
        'Code review features'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      originalPrice: 399,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited code generations',
        'Full AI suite',
        '24/7 dedicated support',
        'Custom language support',
        'Custom integrations',
        'Unlimited users',
        'Advanced analytics',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Developer',
      company: 'TechCorp Solutions',
      content: 'AI Code Assistant Pro has revolutionized how we write code. The AI suggestions are incredibly accurate and have improved our code quality significantly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'Our development speed has increased by 60% since using AI Code Assistant Pro. The code generation is spot-on and saves us hours every day.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Developer',
      company: 'Global Dynamics',
      content: 'The security scanning feature has helped us catch vulnerabilities before they become problems. It\'s like having a security expert reviewing every line of code.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'Web Development',
      description: 'Build modern web applications with AI-powered code generation',
      icon: '🌐',
      benefits: ['React/Vue components', 'API development', 'Database integration']
    },
    {
      title: 'Mobile Development',
      description: 'Create mobile apps with AI assistance for iOS and Android',
      icon: '📱',
      benefits: ['Native app development', 'Cross-platform solutions', 'UI/UX optimization']
    },
    {
      title: 'Data Science',
      description: 'Develop machine learning models and data analysis scripts',
      icon: '📊',
      benefits: ['ML model development', 'Data processing', 'Statistical analysis']
    },
    {
      title: 'DevOps Automation',
      description: 'Automate infrastructure and deployment with AI-generated scripts',
      icon: '⚙️',
      benefits: ['Infrastructure as code', 'CI/CD pipelines', 'Monitoring scripts']
    }
  ];

  const integrations = [
    { name: 'VS Code', logo: '💻', description: 'IDE integration' },
    { name: 'IntelliJ', logo: '☕', description: 'Java IDE support' },
    { name: 'PyCharm', logo: '🐍', description: 'Python development' },
    { name: 'GitHub', logo: '🐙', description: 'Version control' },
    { name: 'GitLab', logo: '🦊', description: 'Git repository' },
    { name: 'Docker', logo: '🐳', description: 'Containerization' },
    { name: 'AWS', logo: '☁️', description: 'Cloud services' },
    { name: 'Slack', logo: '💬', description: 'Team communication' }
  ];

  return (
    <>
      <SEOHead
        title="AI Code Assistant Pro - Intelligent Code Generation | Zion Tech Group"
        description="Revolutionary AI-powered code assistant with intelligent generation, suggestions, and quality assurance. Boost development speed by 60%!"
        keywords="AI code assistant, code generation, programming AI, code suggestions, development tools, IDE integration, code quality"
        canonicalUrl="https://ziontechgroup.com/ai-code-assistant-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
                <CodeBracketIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">AI-Powered Development</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Code Assistant Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your development workflow with AI-powered code generation, 
                intelligent suggestions, and automated quality assurance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
                  <div className="text-gray-300 text-sm">Faster Development</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Languages Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Code Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">AI Assistance</div>
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
                Powerful <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to revolutionize your coding experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
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
                Simple <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your development needs. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-blue-500 shadow-blue-500/20' 
                    : 'border-slate-700 hover:border-blue-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <span className="text-lg text-gray-400 line-through mr-2">${plan.originalPrice}</span>
                      <span className="text-sm text-green-400 font-semibold">
                        {Math.round((1 - plan.price / plan.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Seamless <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite development tools and platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{integration.logo}</div>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Perfect for <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Every Developer</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI code assistant adapts to your development needs and programming languages
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Developers Worldwide</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about AI Code Assistant Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Development?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers already using AI Code Assistant Pro to write better code faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950 | ✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICodeAssistantProPage;