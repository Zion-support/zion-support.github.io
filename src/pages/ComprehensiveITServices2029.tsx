import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Cloud, 
  Shield, 
  Network, 
  Database, 
  Code, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
  Lock,
  Wifi,
  Monitor,
  HardDrive,
  Router,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ComprehensiveITServices2029() {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'cloud-infrastructure',
      category: 'infrastructure',
      name: 'Cloud Infrastructure & Migration',
      description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform',
      features: [
        'Cloud strategy and planning',
        'Migration and deployment',
        'Cost optimization',
        'Security and compliance',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      pricing: {
        consultation: '$150/hour',
        migration: '$5,000+',
        monthly: '$2,500+',
        enterprise: 'Custom'
      },
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Faster deployment times'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cybersecurity',
      category: 'security',
      name: 'Cybersecurity & Compliance',
      description: 'Enterprise-grade security solutions protecting your digital assets',
      features: [
        'Security audits and assessments',
        'Penetration testing',
        'Compliance management',
        'Incident response',
        'Security training',
        'Threat monitoring'
      ],
      pricing: {
        assessment: '$3,000+',
        monthly: '$1,500+',
        enterprise: '$5,000+',
        custom: 'Quote'
      },
      benefits: [
        'Protect against 99.9% of threats',
        'Meet compliance requirements',
        'Reduce security incidents',
        '24/7 security monitoring'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'network-infrastructure',
      category: 'infrastructure',
      name: 'Network Infrastructure',
      description: 'Design, implementation, and management of enterprise networks',
      features: [
        'Network design and planning',
        'Hardware installation',
        'Configuration and optimization',
        'Performance monitoring',
        'Troubleshooting',
        'Maintenance and support'
      ],
      pricing: {
        design: '$2,500+',
        implementation: '$5,000+',
        monthly: '$1,200+',
        support: '$150/hour'
      },
      benefits: [
        'Improve network performance by 60%',
        'Reduce downtime by 80%',
        'Enhanced security and reliability',
        'Scalable infrastructure'
      ],
      icon: Network,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'data-management',
      category: 'data',
      name: 'Data Management & Analytics',
      description: 'Comprehensive data solutions for business intelligence and analytics',
      features: [
        'Database design and optimization',
        'Data warehousing',
        'Business intelligence',
        'Data migration',
        'Backup and recovery',
        'Performance tuning'
      ],
      pricing: {
        setup: '$3,500+',
        monthly: '$1,800+',
        enterprise: '$4,500+',
        consulting: '$200/hour'
      },
      benefits: [
        'Improve data accessibility by 70%',
        'Reduce storage costs by 30%',
        'Enhanced data security',
        'Better business insights'
      ],
      icon: Database,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'software-development',
      category: 'development',
      name: 'Custom Software Development',
      description: 'Tailored software solutions for your business needs',
      features: [
        'Requirements analysis',
        'Custom development',
        'Testing and QA',
        'Deployment',
        'Training and support',
        'Maintenance'
      ],
      pricing: {
        small: '$15,000+',
        medium: '$35,000+',
        large: '$75,000+',
        enterprise: 'Custom'
      },
      benefits: [
        'Streamline business processes',
        'Improve efficiency by 50%',
        'Competitive advantage',
        'Scalable solutions'
      ],
      icon: Code,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'managed-it-services',
      category: 'managed',
      name: 'Managed IT Services',
      description: 'Complete IT management and support for your business',
      features: [
        '24/7 monitoring',
        'Help desk support',
        'Proactive maintenance',
        'Security management',
        'Backup and recovery',
        'Strategic planning'
      ],
      pricing: {
        basic: '$1,200/month',
        professional: '$2,500/month',
        enterprise: '$5,000/month',
        custom: 'Quote'
      },
      benefits: [
        'Reduce IT costs by 25%',
        'Improve system uptime',
        'Expert IT support',
        'Predictable costs'
      ],
      icon: Monitor,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'infrastructure').length },
    { id: 'security', name: 'Security', count: services.filter(s => s.category === 'security').length },
    { id: 'data', name: 'Data & Analytics', count: services.filter(s => s.category === 'data').length },
    { id: 'development', name: 'Development', count: services.filter(s => s.category === 'development').length },
    { id: 'managed', name: 'Managed Services', count: services.filter(s => s.category === 'managed').length }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Comprehensive
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}IT Services
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Enterprise-grade IT solutions that drive digital transformation and business growth
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get IT Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span>{category.name}</span>
                <span className="bg-white/20 dark:bg-black/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-12 h-12" />
                    <div className="text-right">
                      <div className="text-sm opacity-90">Starting at</div>
                      <div className="text-2xl font-bold">
                        {typeof service.pricing.basic === 'string' ? service.pricing.basic : service.pricing.consultation}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                      Business Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                      Pricing Options
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(service.pricing).map(([tier, price]) => (
                        <div key={tier} className="flex justify-between text-sm">
                          <span className="capitalize text-gray-600 dark:text-gray-400">{tier}</span>
                          <span className="font-semibold text-gray-900 dark:text-white">{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block"
                    >
                      Get Quote
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our expert team help you build a robust, scalable, and secure IT foundation for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h4>
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}