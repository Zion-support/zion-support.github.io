'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Shield, Brain, Globe, Cloud, Server, Database, BarChart3, Settings } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.',
      features: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', 'Performance Optimization'],
      benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', 'Better Performance']
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Design and deploy robust, scalable cloud infrastructure tailored to your business needs.',
      features: ['Infrastructure as Code', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery'],
      benefits: ['High Availability', 'Cost Optimization', 'Global Reach', '24/7 Monitoring']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Optimize your data management with cloud-native database solutions and advanced analytics.',
      features: ['Database Migration', 'Performance Tuning', 'Backup & Recovery', 'Data Analytics'],
      benefits: ['Improved Performance', 'Data Security', 'Scalable Storage', 'Real-time Insights']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: ['Identity & Access Management', 'Data Encryption', 'Threat Detection', 'Compliance'],
      benefits: ['Enhanced Security', 'Regulatory Compliance', 'Risk Mitigation', 'Continuous Monitoring']
    },
    {
      icon: Brain,
      title: 'AI & ML Services',
      description: 'Leverage artificial intelligence and machine learning capabilities in the cloud.',
      features: ['ML Model Deployment', 'Data Processing', 'Predictive Analytics', 'AI Integration'],
      benefits: ['Intelligent Automation', 'Data-driven Insights', 'Cost Reduction', 'Competitive Advantage']
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize your cloud strategy across multiple providers for maximum flexibility and cost efficiency.',
      features: ['Multi-Cloud Architecture', 'Cost Optimization', 'Vendor Management', 'Hybrid Solutions'],
      benefits: ['Vendor Independence', 'Cost Optimization', 'Risk Mitigation', 'Flexible Scaling']
    }
  ];

  const platforms = [
    {
      name: 'Amazon Web Services',
      logo: '/images/cloud/aws-logo.png',
      description: 'Comprehensive cloud platform with extensive services and global reach.',
      features: ['EC2, S3, RDS', 'Lambda Functions', 'AI/ML Services', 'Global Infrastructure']
    },
    {
      name: 'Microsoft Azure',
      logo: '/images/cloud/azure-logo.png',
      description: 'Enterprise-focused cloud platform with strong integration capabilities.',
      features: ['Virtual Machines', 'Azure Functions', 'Cognitive Services', 'Hybrid Cloud']
    },
    {
      name: 'Google Cloud Platform',
      logo: '/images/cloud/gcp-logo.png',
      description: 'Data and AI-focused cloud platform with advanced analytics capabilities.',
      features: ['Compute Engine', 'BigQuery', 'AI Platform', 'Kubernetes Engine']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Analyze your current infrastructure and create a comprehensive migration strategy.',
      icon: BarChart3
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Design optimal cloud architecture based on your specific requirements and goals.',
      icon: Settings
    },
    {
      step: '03',
      title: 'Migration & Deployment',
      description: 'Execute the migration with minimal downtime and maximum data integrity.',
      icon: Cloud
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuously optimize performance and provide ongoing support and monitoring.',
      icon: Zap
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive cloud services. Migration, infrastructure, security, and AI solutions for modern enterprises."
        />
        <meta
          name="keywords"
          content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, cloud security, AI cloud services"
        />
        <meta property="og:title" content="Cloud Services - Zion Tech Group | Cloud Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive cloud services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive cloud services. From migration to optimization, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cloud Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Platforms</h2>
              <p className="text-xl text-gray-600">
                We work with all major cloud providers to give you the best solution
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="w-24 h-24 mx-auto mb-6"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                  <p className="text-gray-600 mb-6">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600">
                A proven methodology for successful cloud transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{step.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your cloud strategy and help you choose the best solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Download Cloud Guide
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