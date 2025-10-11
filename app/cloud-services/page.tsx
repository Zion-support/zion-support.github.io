import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Server, Shield, Zap, Database, Globe, Users, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CloudServicesPage() {
  const cloudServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with zero downtime.',
      features: [
        'AWS, Azure, and GCP expertise',
        'Zero-downtime migration',
        'Data security and compliance',
        'Cost optimization',
        'Performance monitoring',
        'Disaster recovery setup'
      ],
      pricing: 'Starting at $2,500',
      popular: true,
      link: '/cloud-migration'
    },
    {
      icon: <Server className="w-12 h-12 text-green-500" />,
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable, secure cloud infrastructure tailored to your needs.',
      features: [
        'Infrastructure as Code',
        'Auto-scaling solutions',
        'Load balancing',
        'High availability setup',
        'Security hardening',
        '24/7 monitoring'
      ],
      pricing: '$1,200/month',
      popular: false,
      link: '/cloud-infrastructure'
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud environment and data.',
      features: [
        'Security assessment',
        'Identity and access management',
        'Data encryption',
        'Compliance auditing',
        'Threat detection',
        'Incident response'
      ],
      pricing: '$800/month',
      popular: true,
      link: '/cloud-security'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Cloud Databases',
      description: 'Managed database services with high availability, backup, and optimization.',
      features: [
        'Database migration',
        'Performance tuning',
        'Automated backups',
        'Scaling and replication',
        'Monitoring and alerts',
        'Data recovery services'
      ],
      pricing: '$600/month',
      popular: false,
      link: '/cloud-databases'
    },
    {
      icon: <Zap className="w-12 h-12 text-red-500" />,
      title: 'Cloud Optimization',
      description: 'Optimize your cloud costs and performance with our expert analysis and recommendations.',
      features: [
        'Cost analysis and optimization',
        'Performance tuning',
        'Resource right-sizing',
        'Reserved instance planning',
        'Usage monitoring',
        'Cost reporting'
      ],
      pricing: '$500/month',
      popular: false,
      link: '/cloud-optimization'
    },
    {
      icon: <Globe className="w-12 h-12 text-yellow-500" />,
      title: 'Multi-Cloud Strategy',
      description: 'Implement a robust multi-cloud strategy to avoid vendor lock-in and maximize flexibility.',
      features: [
        'Multi-cloud architecture',
        'Vendor management',
        'Cross-cloud migration',
        'Disaster recovery',
        'Cost optimization',
        'Unified monitoring'
      ],
      pricing: '$1,500/month',
      popular: false,
      link: '/multi-cloud-strategy'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Savings',
      description: 'Reduce IT costs by up to 40% with optimized cloud infrastructure and resource management.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Scalability',
      description: 'Scale your infrastructure up or down based on demand with auto-scaling solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Security',
      description: 'Enterprise-grade security with encryption, compliance, and advanced threat protection.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Reliability',
      description: '99.9% uptime guarantee with redundant systems and disaster recovery solutions.'
    }
  ];

  const stats = [
    { number: '200+', label: 'Cloud Migrations' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud services including migration, infrastructure setup, security, and optimization. Transform your business with cloud technology." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, cloud security" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Cloud Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your business with professional cloud services. From migration to optimization, 
                we help you leverage the power of cloud computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/it-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View IT Services
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive cloud solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {cloudServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Zap className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-white">{service.pricing}</div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Zap className="w-4 h-4 text-yellow-400 mr-1" />
                      4.8
                    </div>
                  </div>
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Cloud Services?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Experience the benefits of professional cloud solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let our cloud experts help you migrate and optimize your infrastructure for maximum performance and cost savings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Cloud Assessment
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}