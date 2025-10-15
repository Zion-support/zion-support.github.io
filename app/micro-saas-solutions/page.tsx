import React from 'react';
import SEOHead from './components/SEOHead';
import { 
  SparklesIcon, 
  ChartBarIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  BoltIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CogIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const MicroSaasSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI with GPT-4 integration.',
      icon: SparklesIcon,
      price: '$199/mo',
      originalPrice: '$299/mo',
      features: [
        'Unlimited content generation',
        'SEO optimization',
        'Multi-language support (50+ languages)',
        'Brand voice customization',
        'Content scheduling',
        'Analytics dashboard',
        'API access',
        'Team collaboration'
      ],
      gradient: 'from-cyan-500 to-blue-500',
      category: 'AI Content',
      link: '/ai-content-generator',
      marketPrice: '$299-499/mo',
      benefits: 'Save 20+ hours/week on content creation'
    },
    {
      id: 'business-analytics',
      title: 'Business Analytics Pro',
      description: 'Comprehensive business intelligence platform with real-time insights, predictive analytics, and custom reporting.',
      icon: ChartBarIcon,
      price: '$349/mo',
      originalPrice: '$499/mo',
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reports',
        'Data visualization',
        'API integrations (100+ tools)',
        'Team collaboration',
        'Mobile app',
        'White-label options'
      ],
      gradient: 'from-purple-500 to-pink-500',
      category: 'Analytics',
      link: '/business-analytics',
      marketPrice: '$499-999/mo',
      benefits: 'Increase revenue by 25% with data-driven decisions'
    },
    {
      id: 'task-manager',
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI-powered prioritization, team collaboration, and time tracking features.',
      icon: CheckCircleIcon,
      price: '$29/mo',
      originalPrice: '$49/mo',
      features: [
        'AI task prioritization',
        'Team collaboration',
        'Time tracking',
        'Project templates',
        'Mobile app',
        'Integrations (50+ tools)',
        'Gantt charts',
        'Resource management'
      ],
      gradient: 'from-green-500 to-emerald-500',
      category: 'Productivity',
      link: '/task-manager',
      marketPrice: '$49-99/mo',
      benefits: 'Boost team productivity by 40%'
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and engagement without coding using advanced NLP.',
      icon: CpuChipIcon,
      price: '$99/mo',
      originalPrice: '$149/mo',
      features: [
        'No-code builder',
        'Multi-channel support',
        'Natural language processing',
        'Analytics & insights',
        'Custom integrations',
        '24/7 availability',
        'Multi-language support',
        'Voice integration'
      ],
      gradient: 'from-indigo-500 to-purple-500',
      category: 'AI Automation',
      link: '/ai-chatbot-builder',
      marketPrice: '$149-299/mo',
      benefits: 'Reduce support costs by 60%'
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing Suite',
      description: 'Advanced email marketing platform with AI-powered personalization, automation, and advanced analytics.',
      icon: GlobeAltIcon,
      price: '$79/mo',
      originalPrice: '$129/mo',
      features: [
        'AI personalization',
        'Automation workflows',
        'A/B testing',
        'Advanced segmentation',
        'Analytics & reporting',
        'Template library (500+ templates)',
        'Landing page builder',
        'SMS integration'
      ],
      gradient: 'from-orange-500 to-red-500',
      category: 'Marketing',
      link: '/email-marketing-suite',
      marketPrice: '$129-299/mo',
      benefits: 'Increase email open rates by 35%'
    },
    {
      id: 'inventory-manager',
      title: 'Smart Inventory Manager',
      description: 'AI-powered inventory management with predictive analytics, automated reordering, and multi-location support.',
      icon: CogIcon,
      price: '$149/mo',
      originalPrice: '$199/mo',
      features: [
        'Predictive analytics',
        'Automated reordering',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Real-time alerts',
        'Mobile app',
        'API integrations'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      category: 'Inventory',
      link: '/inventory-manager',
      marketPrice: '$199-399/mo',
      benefits: 'Reduce inventory costs by 30%'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Discover our innovative micro SaaS applications designed to solve specific business challenges with real functionality, competitive pricing, and enterprise-grade features."
        keywords="micro SaaS, business software, AI tools, productivity apps, business automation, software solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Discover our innovative micro SaaS applications designed to solve specific business challenges with real functionality, competitive pricing, and enterprise-grade features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
                >
                  <span className="relative z-10 flex items-center">
                    Call Now: +1 302 464 0950
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-purple-400 text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-purple-400/25"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS Portfolio</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Each solution is designed to address specific business needs with real functionality, not just mockups.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div 
                  key={service.id}
                  className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Market Price</div>
                      <div className="text-sm text-gray-300">{service.marketPrice}</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                    <div className="text-sm text-green-400 font-medium">{service.benefits}</div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <a 
                    href={service.link}
                    className={`block w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to discuss your specific needs and get a customized solution for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BoltIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CogIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Call Now
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasSolutionsPage;
