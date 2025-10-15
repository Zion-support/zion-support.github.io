import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  GlobeAltIcon, 
  ChartBarIcon, 
  CheckCircleIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
  CircleStackIcon,
  ShareIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaasProducts = [
    {
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      icon: SparklesIcon,
      features: ['Unlimited content generation', 'SEO optimization', 'Multi-language support', 'Brand voice consistency'],
      price: '$199/mo',
      originalPrice: '$299/mo',
      href: '/ai-content-generator',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Business Analytics Pro',
      description: 'Comprehensive business intelligence and analytics platform with real-time insights and reporting.',
      icon: ChartBarIcon,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      price: '$349/mo',
      originalPrice: '$499/mo',
      href: '/analytics-dashboard',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI-powered prioritization and team collaboration features.',
      icon: CheckCircleIcon,
      features: ['AI task prioritization', 'Team collaboration', 'Time tracking', 'Project management'],
      price: '$29/mo',
      originalPrice: '$49/mo',
      href: '/task-manager',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Customer Support Hub',
      description: 'Centralized customer support platform with AI-powered ticket management and analytics.',
      icon: ChatBubbleLeftRightIcon,
      features: ['Ticket management', 'AI responses', 'Customer analytics', 'Multi-channel support'],
      price: '$99/mo',
      originalPrice: '$149/mo',
      href: '/customer-support-hub',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Inventory Manager Pro',
      description: 'Smart inventory management with predictive analytics and automated reordering.',
      icon: CircleStackIcon,
      features: ['Real-time tracking', 'Predictive analytics', 'Automated reordering', 'Multi-location support'],
      price: '$79/mo',
      originalPrice: '$119/mo',
      href: '/inventory-manager',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Social Media Scheduler',
      description: 'AI-powered social media management with content scheduling and performance analytics.',
      icon: ShareIcon,
      features: ['Content scheduling', 'Performance analytics', 'AI content suggestions', 'Multi-platform posting'],
      price: '$49/mo',
      originalPrice: '$79/mo',
      href: '/social-media-scheduler',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Expense Tracker Pro',
      description: 'Advanced expense tracking with receipt scanning and financial reporting.',
      icon: CurrencyDollarIcon,
      features: ['Receipt scanning', 'Expense categorization', 'Financial reports', 'Tax preparation'],
      price: '$39/mo',
      originalPrice: '$59/mo',
      href: '/expense-tracker-pro',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Email Marketing Automation',
      description: 'AI-powered email marketing platform with advanced segmentation and automation.',
      icon: CogIcon,
      features: ['Email automation', 'Advanced segmentation', 'A/B testing', 'Performance analytics'],
      price: '$89/mo',
      originalPrice: '$129/mo',
      href: '/email-marketing-automation',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Innovative micro SaaS applications designed to solve specific business challenges. From AI content generation to analytics dashboards, discover powerful tools for modern businesses."
        keywords="micro SaaS, SaaS solutions, business tools, AI content generation, analytics dashboard, task management, customer support, inventory management"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                  Micro SaaS Solutions
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
                Discover our innovative micro SaaS applications designed to solve specific business challenges with powerful, focused tools that deliver real value.
              </p>
            </div>
          </div>
        </section>

        {/* Micro SaaS Products Grid */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS Products</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, focused tools designed to solve specific business challenges with real functionality and immediate value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-cyan-400 font-medium">Micro SaaS</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm group-hover:text-gray-300 transition-colors">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <a 
                      href={product.href}
                      className={`block w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
                    >
                      Try Free Trial
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS Solutions</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS products are designed with a focus on specific business needs, delivering powerful functionality without complexity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Focused Functionality</h3>
                <p className="text-gray-300">Each tool is designed to solve a specific business challenge with laser focus and maximum effectiveness.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CogIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Easy Integration</h3>
                <p className="text-gray-300">Seamlessly integrate with your existing workflow and tools without disrupting your current processes.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Immediate Value</h3>
                <p className="text-gray-300">Start seeing results from day one with our intuitive interfaces and powerful features.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-cyan-900/40 via-slate-900 to-blue-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Discover how our micro SaaS solutions can solve your specific business challenges and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="relative group bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a 
                href="/demo"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;
