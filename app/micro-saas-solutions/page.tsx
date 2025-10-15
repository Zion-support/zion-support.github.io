import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { servicesData } from '../data/servicesData';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasServices = servicesData.microSaas;

  const categories = [
    {
      name: 'Productivity & Management',
      icon: ClockIcon,
      color: 'from-blue-500 to-cyan-500',
      services: microSaasServices.filter(s => ['task-manager', 'time-tracker-pro', 'appointment-scheduler-pro', 'file-manager-pro'].includes(s.id))
    },
    {
      name: 'AI-Powered Solutions',
      icon: CpuChipIcon,
      color: 'from-purple-500 to-pink-500',
      services: microSaasServices.filter(s => ['ai-crm-optimizer', 'ai-data-visualizer', 'ai-email-optimizer', 'ai-website-analyzer'].includes(s.id))
    },
    {
      name: 'Business Intelligence',
      icon: ChartBarIcon,
      color: 'from-green-500 to-emerald-500',
      services: microSaasServices.filter(s => ['analytics-dashboard-pro', 'lead-generator-pro', 'crm-pro', 'monitoring-dashboard-pro'].includes(s.id))
    },
    {
      name: 'Financial Management',
      icon: CurrencyDollarIcon,
      color: 'from-yellow-500 to-orange-500',
      services: microSaasServices.filter(s => ['smart-expense-tracker', 'invoice-generator-pro', 'expense-tracker'].includes(s.id))
    },
    {
      name: 'Security & Compliance',
      icon: ShieldCheckIcon,
      color: 'from-red-500 to-rose-500',
      services: microSaasServices.filter(s => ['password-manager-pro', 'backup-manager-pro', 'security-scanner-pro'].includes(s.id))
    },
    {
      name: 'Marketing & Communication',
      icon: GlobeAltIcon,
      color: 'from-indigo-500 to-purple-500',
      services: microSaasServices.filter(s => ['ai-social-media-manager', 'email-marketing', 'social-scheduler', 'form-builder-pro'].includes(s.id))
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Solutions' },
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Comprehensive suite of specialized micro SaaS solutions designed to solve specific business challenges. AI-powered tools for productivity, analytics, security, and more."
        keywords="micro saas, business software, task management, crm, analytics, inventory management, hr software, finance management, ai tools, productivity software"
        canonicalUrl="https://ziontechgroup.com/micro-saas-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Specialized software solutions designed to solve specific business challenges with AI-powered intelligence and automation
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link to="/pricing"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Solutions by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Category</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of micro SaaS solutions organized by business function
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                  <div className="space-y-3">
                    {category.services.slice(0, 3).map((service) => (
                      <div key={service.id} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3" />
                        <span className="text-sm">{service.title}</span>
                      </div>
                    ))}
                    {category.services.length > 3 && (
                      <div className="text-sm text-gray-400">
                        +{category.services.length - 3} more solutions
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our most popular micro SaaS solutions trusted by thousands of businesses worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.slice(0, 9).map((service) => (
                <div key={service.id} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="text-2xl font-bold text-purple-400">{service.marketPrice}</div>
                      <div className="text-xs text-gray-400">Starting from ${service.pricing.basic}/month</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link to={`/contact?service=${service.id}`}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Try Free
                    </Link>
                    <Link to={service.contactInfo.website}
                      className="flex-1 border border-purple-400 text-purple-300 text-center py-3 px-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS Solutions</span>?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with deep business expertise to deliver solutions that drive real value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CpuChipIcon,
                  title: 'AI-Powered Intelligence',
                  description: 'Our solutions leverage advanced AI to automate processes, provide insights, and optimize performance automatically.'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Enterprise Security',
                  description: 'Bank-level security with encryption, compliance, and monitoring to protect your data and ensure business continuity.'
                },
                {
                  icon: ChartBarIcon,
                  title: 'Real-time Analytics',
                  description: 'Comprehensive analytics and reporting to help you make data-driven decisions and track performance metrics.'
                },
                {
                  icon: GlobeAltIcon,
                  title: 'Cloud-Native Architecture',
                  description: 'Built for the cloud with scalability, reliability, and global availability to support your business growth.'
                },
                {
                  icon: UserGroupIcon,
                  title: '24/7 Expert Support',
                  description: 'Dedicated support team available around the clock to help you get the most out of your solutions.'
                },
                {
                  icon: CurrencyDollarIcon,
                  title: 'Cost-Effective Pricing',
                  description: 'Transparent, scalable pricing that grows with your business without hidden fees or surprise costs.'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey with our micro SaaS solutions and experience the power of AI-driven automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
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

export default MicroSAASSolutionsPage;