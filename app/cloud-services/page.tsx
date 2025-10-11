import React from 'react';
import { ArrowRight, Cloud, Shield, Zap, Globe, CheckCircle, Server, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudServicesPage: React.FC = () => {
  const features = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud.',
      benefits: ['Zero downtime', 'Data integrity', 'Cost optimization', 'Performance improvement'],
      icon: <Cloud className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure.',
      benefits: ['Identity management', 'Data encryption', 'Threat detection', 'Compliance'],
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Auto Scaling',
      description: 'Automatic scaling based on demand to optimize costs and performance.',
      benefits: ['Cost efficiency', 'High availability', 'Performance optimization', 'Resource management'],
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Global Distribution',
      description: 'Deploy your applications globally with our worldwide cloud infrastructure.',
      benefits: ['Low latency', 'High availability', 'Global CDN', 'Edge computing'],
      icon: <Globe className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Server Management',
      description: 'Professional server management and maintenance services.',
      benefits: ['24/7 monitoring', 'Automated backups', 'Security updates', 'Performance optimization'],
      icon: <Server className="w-8 h-8 text-orange-400" />
    },
    {
      title: 'Database Services',
      description: 'Managed database services with high availability and security.',
      benefits: ['Automated backups', 'High availability', 'Security', 'Performance tuning'],
      icon: <Database className="w-8 h-8 text-red-400" />
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      description: 'Comprehensive cloud services with global reach and enterprise-grade security.',
      features: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudFront']
    },
    {
      name: 'Microsoft Azure',
      description: 'Hybrid cloud solutions with seamless integration and enterprise support.',
      features: ['Virtual Machines', 'Azure SQL', 'Functions', 'CDN', 'Active Directory']
    },
    {
      name: 'Google Cloud Platform',
      description: 'Advanced AI and machine learning capabilities with global infrastructure.',
      features: ['Compute Engine', 'Cloud Storage', 'BigQuery', 'Cloud Functions', 'AI Platform']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud services by Zion Tech Group. Migration, security, optimization, and management solutions for your business." />
        <meta name="keywords" content="cloud services, cloud migration, cloud security, AWS, Azure, Google Cloud, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional cloud services and solutions for modern businesses. 
              Migrate, secure, and optimize your cloud infrastructure with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to meet your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud Providers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to give you the best solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{provider.name}</h3>
                  <p className="text-gray-300 mb-6">{provider.description}</p>
                  <div className="space-y-2">
                    {provider.features.map((feature, idx) => (
                      <span key={idx} className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your cloud migration and optimization needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default CloudServicesPage;