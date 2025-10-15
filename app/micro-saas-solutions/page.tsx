<<<<<<< HEAD
import React from 'react';;';";"
import SEOHead from './components/SEOHead';";"

const MicroSaasSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Micro Saas Solutions - Zion Tech Group"";"
        description="Professional micro saas solutions solutions for modern businesses";"
      />";";"
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div  className ="text-center">";"
          <h1  className ="text-4xl font-bold mb-4">Micro Saas Solutions</h1>";"
          <p  className ="text-gray-300">Professional solutions coming soon...</p>;";"
        </div>
      </div>
    </>
  )
}

export default MicroSaasSolutionsPage;'";'";"
=======
'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
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
  CurrencyDollarIcon,
  UserGroupIcon,
  ClockIcon,
  StarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSAASServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      price: '$199/mo',
      originalPrice: '$299/mo',
      features: [
        'Unlimited content generation',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Content scheduling',
        'Analytics dashboard'
      ],
      icon: SparklesIcon,
      gradient: 'from-cyan-500 to-blue-500',
      category: 'AI Content',
      popular: true
    },
    {
      id: 'business-analytics',
      name: 'Business Analytics Pro',
      description: 'Comprehensive business intelligence and analytics platform with real-time insights and reporting.',
      price: '$349/mo',
      originalPrice: '$499/mo',
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reports',
        'Data visualization',
        'API integrations',
        'White-label options'
      ],
      icon: ChartBarIcon,
      gradient: 'from-purple-500 to-pink-500',
      category: 'Analytics',
      popular: true
    },
    {
      id: 'task-manager-pro',
      name: 'Task Manager Pro',
      description: 'Advanced task management with AI-powered prioritization and team collaboration features.',
      price: '$29/mo',
      originalPrice: '$49/mo',
      features: [
        'AI task prioritization',
        'Team collaboration',
        'Time tracking',
        'Project templates',
        'Mobile app',
        'Integrations'
      ],
      icon: CheckCircleIcon,
      gradient: 'from-green-500 to-emerald-500',
      category: 'Productivity',
      popular: false
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and automation.',
      price: '$149/mo',
      originalPrice: '$199/mo',
      features: [
        'AI-powered personalization',
        'Automated campaigns',
        'A/B testing',
        'Advanced segmentation',
        'Analytics & reporting',
        'Template library'
      ],
      icon: BoltIcon,
      gradient: 'from-orange-500 to-red-500',
      category: 'Marketing',
      popular: false
    },
    {
      id: 'cybersecurity-monitor',
      name: 'Cybersecurity Monitor Pro',
      description: 'Real-time security monitoring and threat detection for small to medium businesses.',
      price: '$399/mo',
      originalPrice: '$599/mo',
      features: [
        '24/7 threat monitoring',
        'Automated incident response',
        'Compliance reporting',
        'Security assessments',
        'Staff training modules',
        'Priority support'
      ],
      icon: ShieldCheckIcon,
      gradient: 'from-red-500 to-pink-500',
      category: 'Security',
      popular: true
    },
    {
      id: 'cloud-backup-pro',
      name: 'Cloud Backup Pro',
      description: 'Automated cloud backup solution with encryption and disaster recovery capabilities.',
      price: '$79/mo',
      originalPrice: '$99/mo',
      features: [
        'Automated backups',
        'End-to-end encryption',
        'Disaster recovery',
        'Version control',
        'Cross-platform sync',
        'Priority support'
      ],
      icon: CloudIcon,
      gradient: 'from-blue-500 to-cyan-500',
      category: 'Storage',
      popular: false
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Bot',
      description: 'Intelligent customer support chatbot with natural language processing and human handoff.',
      price: '$199/mo',
      originalPrice: '$299/mo',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Human handoff',
        'Knowledge base integration',
        'Analytics dashboard',
        'Custom branding'
      ],
      icon: CpuChipIcon,
      gradient: 'from-indigo-500 to-purple-500',
      category: 'Support',
      popular: true
    },
    {
      id: 'social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI-powered content creation and scheduling.',
      price: '$129/mo',
      originalPrice: '$179/mo',
      features: [
        'AI content creation',
        'Multi-platform posting',
        'Engagement analytics',
        'Hashtag optimization',
        'Competitor analysis',
        'Scheduling automation'
      ],
      icon: GlobeAltIcon,
      gradient: 'from-pink-500 to-rose-500',
      category: 'Social Media',
      popular: false
    },
    {
      id: 'expense-tracker-pro',
      name: 'Expense Tracker Pro',
      description: 'Smart expense tracking with receipt scanning and automated categorization.',
      price: '$19/mo',
      originalPrice: '$29/mo',
      features: [
        'Receipt scanning',
        'Automated categorization',
        'Tax preparation',
        'Multi-currency support',
        'Team collaboration',
        'Mobile app'
      ],
      icon: CurrencyDollarIcon,
      gradient: 'from-yellow-500 to-orange-500',
      category: 'Finance',
      popular: false
    },
    {
      id: 'team-collaboration',
      name: 'Team Collaboration Hub',
      description: 'All-in-one team collaboration platform with video calls, file sharing, and project management.',
      price: '$89/mo',
      originalPrice: '$129/mo',
      features: [
        'Video conferencing',
        'File sharing',
        'Project management',
        'Team chat',
        'Screen sharing',
        'Calendar integration'
      ],
      icon: UserGroupIcon,
      gradient: 'from-teal-500 to-cyan-500',
      category: 'Collaboration',
      popular: false
    }
  ];

  const categories = [
    'All',
    'AI Content',
    'Analytics',
    'Productivity',
    'Marketing',
    'Security',
    'Storage',
    'Support',
    'Social Media',
    'Finance',
    'Collaboration'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Discover our innovative micro SaaS applications designed to solve specific business challenges with real functionality and competitive pricing."
        keywords="micro saas, saas solutions, business software, productivity tools, AI tools, business automation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                  Micro SaaS Solutions
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Discover our innovative micro SaaS applications designed to solve specific business challenges with real functionality, competitive pricing, and exceptional value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <Link
                  to="/contact"
                  className="relative group bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-cyan-400/25"
                >
                  Schedule Demo
                </Link>
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
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center">
                      <StarIcon className="w-3 h-3 mr-1" />
                      Popular
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
                      <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        to={`/${service.id}`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                      >
                        Try Free Trial
                      </Link>
                      <Link
                        to="/contact"
                        className="px-4 py-3 border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white rounded-lg font-semibold transition-all duration-300"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-cyan-900/40 via-slate-900 to-purple-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Choose from our comprehensive suite of micro SaaS solutions and start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="relative group bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;
>>>>>>> main
