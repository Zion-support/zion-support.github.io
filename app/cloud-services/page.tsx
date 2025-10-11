import React from 'react';
import { ArrowRight, Cloud, Shield, Zap, Globe, CheckCircle, Server, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudServicesPage: React.FC = () => {
  const features = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with zero downtime.',
      benefits: ['Zero Downtime Migration', 'Cost Optimization', 'Performance Enhancement', 'Security Compliance'],
      icon: <Cloud className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automate and manage your cloud infrastructure using modern IaC practices.',
      benefits: ['Automated Provisioning', 'Version Control', 'Consistent Deployments', 'Cost Management'],
      icon: <Server className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      benefits: ['Identity Management', 'Data Encryption', 'Threat Detection', 'Compliance Monitoring'],
      icon: <Shield className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize your cloud resources for maximum performance and cost efficiency.',
      benefits: ['Auto-scaling', 'Load Balancing', 'Caching Strategies', 'Resource Monitoring'],
      icon: <Zap className="w-8 h-8 text-orange-400" />
    },
    {
      title: 'Global Distribution',
      description: 'Deploy your applications globally with edge computing and CDN solutions.',
      benefits: ['Edge Computing', 'CDN Integration', 'Global Load Balancing', 'Low Latency'],
      icon: <Globe className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Database Services',
      description: 'Managed database solutions for all your data storage and processing needs.',
      benefits: ['Managed Databases', 'Backup & Recovery', 'Performance Tuning', 'Security Features'],
      icon: <Database className="w-8 h-8 text-pink-400" />
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      description: 'Comprehensive cloud services and solutions',
      features: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFront']
    },
    {
      name: 'Microsoft Azure',
      description: 'Enterprise-grade cloud platform',
      features: ['Virtual Machines', 'Blob Storage', 'Functions', 'SQL Database', 'CDN']
    },
    {
      name: 'Google Cloud Platform',
      description: 'Advanced AI and machine learning capabilities',
      features: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'Cloud SQL', 'Cloud CDN']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud services including migration, optimization, and management solutions." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud optimization" />
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
              Transform your business with our comprehensive cloud solutions. 
              From migration to optimization, we've got you covered.
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
                Comprehensive cloud solutions designed to accelerate your digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Cloud Providers */}
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{provider.name}</h3>
                  <p className="text-gray-300 mb-6">{provider.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {provider.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you migrate to the cloud and optimize your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Migration
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Get Consultation
              </button>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default CloudServicesPage;
