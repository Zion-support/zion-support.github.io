'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Shield, Brain, Globe, Cloud, Server, Database } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.',
      features: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', 'Performance Optimization']
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Build scalable, secure, and cost-effective cloud infrastructure tailored to your needs.',
      features: ['Auto-scaling', 'Load Balancing', 'High Availability', 'Disaster Recovery']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Optimize your database performance with cloud-native database solutions.',
      features: ['Database Migration', 'Performance Tuning', 'Backup & Recovery', 'Monitoring']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Protect your cloud infrastructure with enterprise-grade security solutions.',
      features: ['Identity Management', 'Data Encryption', 'Compliance', 'Threat Detection']
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with DevOps best practices.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation']
    },
    {
      icon: Brain,
      title: 'AI & Analytics',
      description: 'Leverage cloud AI services to gain insights and automate processes.',
      features: ['Machine Learning', 'Data Analytics', 'AI Services', 'Predictive Analytics']
    }
  ];

  const benefits = [
    { title: 'Cost Optimization', description: 'Reduce infrastructure costs by up to 40%' },
    { title: 'Scalability', description: 'Scale resources based on demand' },
    { title: 'Security', description: 'Enterprise-grade security and compliance' },
    { title: 'Reliability', description: '99.9% uptime guarantee' }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive cloud services including migration, infrastructure, security, and AI solutions." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, DevOps, cloud security" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your business with our comprehensive cloud services. From migration to optimization, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Cloud Services</h2>
              <p className="text-xl text-gray-300">
                Comprehensive cloud solutions designed to accelerate your digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-blue-400 mb-6">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Services?</h2>
              <p className="text-xl text-gray-300">
                Experience the benefits of cloud transformation with our expert guidance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Cloud Journey Process</h2>
              <p className="text-xl text-gray-300">
                We follow a proven methodology to ensure successful cloud transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Assessment</h3>
                <p className="text-gray-300">We analyze your current infrastructure and identify migration opportunities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Planning</h3>
                <p className="text-gray-300">We create a detailed migration plan tailored to your specific needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Migration</h3>
                <p className="text-gray-300">We execute the migration with minimal downtime and maximum security.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Optimization</h3>
                <p className="text-gray-300">We continuously monitor and optimize your cloud infrastructure.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Infrastructure?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let our cloud experts help you migrate to the cloud and unlock new possibilities for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Start Your Migration
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CloudServicesPage;