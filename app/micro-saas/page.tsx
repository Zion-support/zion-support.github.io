'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cpu, BarChart3, MessageSquare, Shield, Cloud, FileText, Users, Target, CheckCircle, ArrowRight, Search, Filter } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasServices = [
    {
      id: 1,
      title: 'Zion Analytics Pro',
      description: 'Comprehensive business intelligence platform with real-time dashboards and automated reporting.',
      icon: BarChart3,
      category: 'analytics',
      features: ['Real-time Dashboards', 'Automated Reports', 'Data Visualization', 'Custom Metrics'],
      price: '$99/month',
      popular: true
    },
    {
      id: 2,
      title: 'Zion Chat AI',
      description: 'AI-powered customer support chatbot with natural language processing and multi-channel support.',
      icon: MessageSquare,
      category: 'customer-service',
      features: ['24/7 Support', 'Multi-language', 'CRM Integration', 'Sentiment Analysis'],
      price: '$149/month'
    },
    {
      id: 3,
      title: 'Zion Security Shield',
      description: 'Advanced cybersecurity monitoring and threat detection for small to medium businesses.',
      icon: Shield,
      category: 'security',
      features: ['Threat Detection', 'Real-time Monitoring', 'Automated Alerts', 'Compliance Reports'],
      price: '$199/month'
    },
    {
      id: 4,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated scheduling.',
      icon: Cloud,
      category: 'backup',
      features: ['Automated Backups', 'Disaster Recovery', 'Version Control', 'Cross-platform Sync'],
      price: '$79/month'
    },
    {
      id: 5,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      icon: FileText,
      category: 'content',
      features: ['AI Writing Assistant', 'SEO Optimization', 'Multi-format Export', 'Brand Voice Training'],
      price: '$129/month'
    },
    {
      id: 6,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      icon: Users,
      category: 'crm',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Forecasting', 'Customer Insights'],
      price: '$179/month'
    },
    {
      id: 7,
      title: 'Zion Data Sync',
      description: 'Seamless data integration platform connecting all your business applications.',
      icon: Cpu,
      category: 'integration',
      features: ['API Integration', 'Real-time Sync', 'Data Transformation', 'Error Handling'],
      price: '$89/month'
    },
    {
      id: 8,
      title: 'Zion Lead Magnet',
      description: 'Lead generation platform with automated email campaigns and conversion tracking.',
      icon: Target,
      category: 'marketing',
      features: ['Email Automation', 'Landing Pages', 'A/B Testing', 'Conversion Tracking'],
      price: '$119/month'
    }
  ];

  const categories = ['all', 'analytics', 'customer-service', 'security', 'backup', 'content', 'crm', 'integration', 'marketing'];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SAAS - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Ready-to-use micro SAAS solutions for business automation, analytics, customer service, and more. Deploy instantly and start growing your business." />
        <meta name="keywords" content="micro SAAS, business tools, automation, analytics, customer service, CRM, lead generation, content creation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use business tools with AI and automation. Deploy instantly and start growing your business.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SAAS..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 w-full md:w-80"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="all">All Categories</option>
                <option value="analytics">Analytics</option>
                <option value="customer-service">Customer Service</option>
                <option value="security">Security</option>
                <option value="backup">Backup & Recovery</option>
                <option value="content">Content Creation</option>
                <option value="crm">CRM</option>
                <option value="integration">Integration</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <span className="text-sm text-green-400 capitalize">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-bold text-green-400">{service.price}</div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No micro SAAS solutions found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Accelerate Your Business Growth?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with a free trial and see how our micro SAAS solutions can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASPage;