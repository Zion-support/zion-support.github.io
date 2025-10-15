import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  SparklesIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  ShareIcon, 
  CurrencyDollarIcon, 
  CheckCircleIcon, 
  CircleStackIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator-pro',
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI with 95% accuracy and real-time optimization.',
      icon: SparklesIcon,
      price: '$199/mo',
      originalPrice: '$399/mo',
      features: [
        'Unlimited content generation',
        'SEO optimization & analytics',
        '50+ languages supported',
        'Brand voice customization',
        'Real-time optimization',
        'Multi-platform publishing'
      ],
      benefits: [
        'Save 80% time on content creation',
        'Increase engagement by 40%',
        'Improve SEO rankings',
        'Maintain consistent brand voice'
      ],
      href: '/ai-content-generator',
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/25'
    },
    {
      id: 'ai-crm-optimizer-pro',
      title: 'AI CRM Optimizer Pro',
      description: 'Transform your sales process with AI-powered lead scoring, predictive analytics, automated workflows, and real-time customer insights.',
      icon: UserGroupIcon,
      price: '$299/mo',
      originalPrice: '$599/mo',
      features: [
        'AI lead scoring & nurturing',
        'Predictive analytics & forecasting',
        'Automated follow-up sequences',
        'Real-time customer insights',
        '40% higher conversion rates',
        'Multi-channel integration'
      ],
      benefits: [
        'Increase sales by 40%',
        'Reduce manual work by 60%',
        'Improve customer retention',
        'Better sales forecasting'
      ],
      href: '/ai-crm-optimizer',
      gradient: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/25'
    },
    {
      id: 'ai-data-visualizer-pro',
      title: 'AI Data Visualizer Pro',
      description: 'Transform complex data into stunning visualizations with AI-powered insights, 50+ chart types, and real-time dashboards.',
      icon: ChartBarIcon,
      price: '$149/mo',
      originalPrice: '$299/mo',
      features: [
        '50+ chart types',
        'AI-powered insights',
        'Real-time dashboards',
        'Custom data connectors',
        'Automated reporting',
        'Interactive visualizations'
      ],
      benefits: [
        'Make data-driven decisions',
        'Save 70% time on reporting',
        'Identify trends instantly',
        'Share insights easily'
      ],
      href: '/ai-data-visualizer',
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/25'
    },
    {
      id: 'social-media-scheduler-pro',
      title: 'Social Media Scheduler Pro',
      description: 'Streamline your social media with AI-powered scheduling, content optimization, multi-platform management, and advanced analytics.',
      icon: ShareIcon,
      price: '$49/mo',
      originalPrice: '$149/mo',
      features: [
        '12+ platforms supported',
        'AI content optimization',
        '40% higher engagement',
        'Advanced analytics & ROI tracking',
        'Bulk scheduling',
        'Hashtag optimization'
      ],
      benefits: [
        'Increase engagement by 40%',
        'Save 5 hours per week',
        'Better content performance',
        'Improved brand consistency'
      ],
      href: '/social-media-scheduler',
      gradient: 'from-pink-500 to-orange-500',
      glow: 'shadow-pink-500/25'
    },
    {
      id: 'ai-expense-tracker-pro',
      title: 'AI Expense Tracker Pro',
      description: 'Intelligent expense management with AI-powered categorization, receipt scanning, and automated financial insights.',
      icon: CurrencyDollarIcon,
      price: '$29/mo',
      originalPrice: '$59/mo',
      features: [
        'AI receipt scanning & OCR',
        'Automated categorization',
        'Real-time budget alerts',
        'Tax preparation assistance',
        'Multi-currency support',
        'Expense reporting'
      ],
      benefits: [
        'Save 3 hours per week',
        'Reduce errors by 90%',
        'Better budget control',
        'Simplified tax filing'
      ],
      href: '/expense-tracker-pro',
      gradient: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/25'
    },
    {
      id: 'ai-task-manager-pro',
      title: 'AI Task Manager Pro',
      description: 'Smart task management with AI-powered prioritization, time tracking, and automated workflow optimization.',
      icon: CheckCircleIcon,
      price: '$39/mo',
      originalPrice: '$79/mo',
      features: [
        'AI task prioritization',
        'Smart time tracking',
        'Automated workflow optimization',
        'Team collaboration tools',
        'Progress analytics',
        'Deadline management'
      ],
      benefits: [
        'Increase productivity by 35%',
        'Reduce missed deadlines by 80%',
        'Better team coordination',
        'Improved work-life balance'
      ],
      href: '/ai-task-manager-pro',
      gradient: 'from-blue-500 to-indigo-500',
      glow: 'shadow-blue-500/25'
    },
    {
      id: 'ai-inventory-manager-pro',
      title: 'AI Inventory Manager Pro',
      description: 'Intelligent inventory management with AI-powered demand forecasting, automated reordering, and real-time analytics.',
      icon: CircleStackIcon,
      price: '$79/mo',
      originalPrice: '$149/mo',
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Real-time analytics',
        'Multi-location support',
        'Supplier management',
        'Cost optimization'
      ],
      benefits: [
        'Reduce stockouts by 60%',
        'Lower inventory costs by 25%',
        'Improve cash flow',
        'Better supplier relationships'
      ],
      href: '/ai-inventory-manager-pro',
      gradient: 'from-orange-500 to-red-500',
      glow: 'shadow-orange-500/25'
    },
    {
      id: 'ai-code-assistant-pro',
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with real-time suggestions, bug detection, and automated code generation.',
      icon: CodeBracketIcon,
      price: '$99/mo',
      originalPrice: '$199/mo',
      features: [
        'Real-time code suggestions',
        'Bug detection & fixing',
        'Automated code generation',
        'Multi-language support',
        'Code review assistance',
        'Documentation generation'
      ],
      benefits: [
        'Code 3x faster',
        'Reduce bugs by 70%',
        'Learn new technologies',
        'Improve code quality'
      ],
      href: '/ai-code-assistant',
      gradient: 'from-indigo-500 to-purple-500',
      glow: 'shadow-indigo-500/25'
    },
    {
      id: 'ai-translator-pro',
      title: 'AI Translator Pro',
      description: 'Professional translation service with 100+ languages, context-aware translations, and real-time communication support.',
      icon: GlobeAltIcon,
      price: '$49/mo',
      originalPrice: '$99/mo',
      features: [
        '100+ languages supported',
        'Context-aware translations',
        'Real-time communication',
        'Document translation',
        'Voice translation',
        'Cultural adaptation'
      ],
      benefits: [
        'Break language barriers',
        'Expand global reach',
        'Improve communication',
        'Save translation costs'
      ],
      href: '/ai-translator',
      gradient: 'from-teal-500 to-cyan-500',
      glow: 'shadow-teal-500/25'
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Solutions' },
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '30%', label: 'Average Cost Savings' }
  ];

  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Comprehensive suite of AI-powered micro SaaS solutions designed to solve specific business challenges. From content generation to inventory management, boost your productivity with our intelligent applications."
        keywords="micro saas, business software, task management, crm, analytics, inventory management, hr software, finance management, ai tools, productivity software"
        canonicalUrl="https://ziontechgroup.com/micro-saas-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 futuristic-bg"></div>
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute inset-0 cyber-circuit"></div>
        
        {/* Quantum Particles */}
        <div className="quantum-particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="quantum-particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic-text cyber-glitch" data-text="MICRO SAAS SOLUTIONS">
                MICRO SAAS SOLUTIONS
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 matrix-text">
                Comprehensive suite of AI-powered micro SaaS solutions designed to solve specific business challenges and boost productivity.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 mb-16">
              {stats.map((stat, index) => (
                <div key={index} 
                  className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 lg:mb-2 group-hover:text-purple-300 transition-colors neon-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="holographic-text neon-text">Micro SaaS Solutions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose from our comprehensive suite of AI-powered micro SaaS applications designed to solve specific business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={service.id} 
                  className="group holographic-card-enhanced p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-purple-400 neon-text">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                    </div>
                    <div className="flex items-center text-sm text-green-400">
                      <BoltIcon className="w-4 h-4 mr-1" />
                      <span>50% OFF</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-white text-sm">Key Features:</h4>
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-white text-sm">Benefits:</h4>
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowRightIcon className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={service.href}
                    className="block w-full cyber-button-enhanced text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Try Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 holographic-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 matrix-text">
              Start your free trial today and experience the power of AI-driven micro SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-300">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;