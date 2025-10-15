'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  CogIcon,
  CloudIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  SignalIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  BoltIcon,
  EyeIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  NetworkIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Solutions',
      description: 'Comprehensive cloud migration, management, and optimization services for modern businesses.',
      icon: CloudIcon,
      price: 'Starting at $2,999/mo',
      features: [
        'AWS, Azure, GCP migration',
        'Cloud architecture design',
        'Cost optimization',
        'Security implementation',
        '24/7 monitoring',
        'Disaster recovery',
        'Auto-scaling setup',
        'Performance tuning'
      ],
      category: 'Cloud Services',
      gradient: 'from-blue-500 to-cyan-500',
      href: '/cloud-infrastructure',
      popular: true
    },
    {
      id: 'cybersecurity-solutions',
      name: 'Cybersecurity Solutions',
      description: 'Advanced security services to protect your digital assets and ensure compliance.',
      icon: ShieldCheckIcon,
      price: 'Starting at $1,499/mo',
      features: [
        'Security assessment',
        'Penetration testing',
        'Vulnerability scanning',
        'Incident response',
        'Compliance management',
        'Security training',
        'Threat monitoring',
        'Firewall management'
      ],
      category: 'Security',
      gradient: 'from-red-500 to-pink-500',
      href: '/cybersecurity',
      popular: true
    },
    {
      id: 'web-development',
      name: 'Web Development Services',
      description: 'Custom web applications and websites built with modern technologies and best practices.',
      icon: CodeBracketIcon,
      price: 'Starting at $4,999',
      features: [
        'Custom web applications',
        'E-commerce solutions',
        'CMS development',
        'API development',
        'Performance optimization',
        'SEO implementation',
        'Mobile responsiveness',
        'Maintenance & support'
      ],
      category: 'Development',
      gradient: 'from-green-500 to-emerald-500',
      href: '/web-development'
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      icon: DevicePhoneMobileIcon,
      price: 'Starting at $8,999',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'API integration',
        'App maintenance'
      ],
      category: 'Development',
      gradient: 'from-purple-500 to-pink-500',
      href: '/mobile-development'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Comprehensive database design, optimization, and management services.',
      icon: CircleStackIcon,
      price: 'Starting at $1,999/mo',
      features: [
        'Database design',
        'Performance optimization',
        'Data migration',
        'Backup & recovery',
        'Security hardening',
        'Monitoring & maintenance',
        'Query optimization',
        'Scalability planning'
      ],
      category: 'Database',
      gradient: 'from-orange-500 to-red-500',
      href: '/database-management'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management solutions.',
      icon: NetworkIcon,
      price: 'Starting at $3,499',
      features: [
        'Network design',
        'Router & switch setup',
        'WiFi optimization',
        'VPN configuration',
        'Network security',
        'Performance monitoring',
        'Troubleshooting',
        'Documentation'
      ],
      category: 'Networking',
      gradient: 'from-indigo-500 to-purple-500',
      href: '/network-infrastructure'
    },
    {
      id: 'server-management',
      name: 'Server Management',
      description: 'Complete server administration, monitoring, and maintenance services.',
      icon: ServerIcon,
      price: 'Starting at $2,499/mo',
      features: [
        'Server setup & configuration',
        'Performance monitoring',
        'Security hardening',
        'Backup management',
        'Patch management',
        'Load balancing',
        'Disaster recovery',
        '24/7 support'
      ],
      category: 'Infrastructure',
      gradient: 'from-teal-500 to-green-500',
      href: '/server-management'
    },
    {
      id: 'ai-integration',
      name: 'AI Integration Services',
      description: 'Integrate artificial intelligence and machine learning into your existing systems.',
      icon: CpuChipIcon,
      price: 'Starting at $5,999',
      features: [
        'AI strategy consulting',
        'ML model development',
        'API integration',
        'Data pipeline setup',
        'Model training',
        'Performance optimization',
        'Monitoring & maintenance',
        'Staff training'
      ],
      category: 'AI Services',
      gradient: 'from-cyan-500 to-blue-500',
      href: '/ai-integration'
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics Solutions',
      description: 'Transform your data into actionable insights with advanced analytics platforms.',
      icon: ChartBarIcon,
      price: 'Starting at $3,999',
      features: [
        'Data warehouse design',
        'ETL pipeline development',
        'Dashboard creation',
        'Predictive analytics',
        'Real-time reporting',
        'Data visualization',
        'Machine learning models',
        'Business intelligence'
      ],
      category: 'Analytics',
      gradient: 'from-yellow-500 to-orange-500',
      href: '/data-analytics'
    },
    {
      id: 'devops-services',
      name: 'DevOps Services',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      icon: WrenchScrewdriverIcon,
      price: 'Starting at $2,999/mo',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring & logging',
        'Security scanning',
        'Automated testing',
        'Deployment automation',
        'Performance optimization'
      ],
      category: 'DevOps',
      gradient: 'from-violet-500 to-purple-500',
      href: '/devops-services'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions.',
      icon: ComputerDesktopIcon,
      price: 'Starting at $299/hr',
      features: [
        'Technology assessment',
        'Strategic planning',
        'Vendor evaluation',
        'Cost optimization',
        'Risk analysis',
        'Compliance review',
        'Digital transformation',
        'Change management'
      ],
      category: 'Consulting',
      gradient: 'from-sky-500 to-blue-500',
      href: '/it-consulting'
    },
    {
      id: 'managed-it-services',
      name: 'Managed IT Services',
      description: 'Complete IT management and support for your entire technology infrastructure.',
      icon: CogIcon,
      price: 'Starting at $1,999/mo',
      features: [
        '24/7 monitoring',
        'Proactive maintenance',
        'Help desk support',
        'Security management',
        'Backup & recovery',
        'Software management',
        'Hardware support',
        'Strategic planning'
      ],
      category: 'Managed Services',
      gradient: 'from-rose-500 to-pink-500',
      href: '/managed-it-services'
    }
  ];

  const categories = [
    'All',
    'Cloud Services',
    'Security',
    'Development',
    'Database',
    'Networking',
    'Infrastructure',
    'AI Services',
    'Analytics',
    'DevOps',
    'Consulting',
    'Managed Services'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <SEOHead 
        title="IT Solutions & Services - Zion Tech Group"
        description="Comprehensive IT solutions including cloud infrastructure, cybersecurity, web development, mobile apps, and managed services. Transform your business with cutting-edge technology."
        keywords="IT services, cloud infrastructure, cybersecurity, web development, mobile development, managed IT services, technology consulting"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                IT Solutions & Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive technology solutions to accelerate your digital transformation. From cloud infrastructure to cybersecurity, we provide end-to-end IT services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>12+ Service Categories</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Enterprise Grade</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Certified Experts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div 
                  key={service.id}
                  className="group relative bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <StarIcon className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">{service.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className="text-lg font-bold text-white">{service.price}</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-gray-400">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Link 
                        to={service.href}
                        className={`flex-1 bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
                      >
                        Learn More
                      </Link>
                      <button className="px-4 py-3 border border-slate-600 text-gray-300 hover:bg-slate-700 rounded-lg transition-all duration-300">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BoltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fast Implementation</h3>
                <p className="text-gray-400">Rapid deployment with minimal downtime and maximum efficiency.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-400">Bank-level security with comprehensive compliance and monitoring.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CogIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-400">Round-the-clock technical support and monitoring services.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-400">Track record of successful implementations and satisfied clients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Let's discuss how our IT solutions can accelerate your digital transformation and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <Link 
                to="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITSolutionsPage;
