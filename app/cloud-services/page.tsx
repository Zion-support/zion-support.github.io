import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Zap, Globe, ArrowRight, CheckCircle, Server, Database } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with zero downtime",
      features: ["AWS Migration", "Azure Migration", "GCP Migration", "Hybrid Cloud Solutions"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure designed for your business needs",
      features: ["Auto-scaling", "Load Balancing", "High Availability", "Disaster Recovery"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cloud Database Solutions",
      description: "Managed database services with optimal performance and security",
      features: ["Database Migration", "Performance Optimization", "Backup & Recovery", "Monitoring"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud environment",
      features: ["Identity Management", "Data Encryption", "Compliance", "Threat Detection"],
      color: "from-red-500 to-red-600"
    }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services",
      description: "Comprehensive cloud platform with extensive services and global reach",
      features: ["EC2", "S3", "Lambda", "RDS", "CloudFront"],
      logo: "AWS"
    },
    {
      name: "Microsoft Azure",
      description: "Enterprise-grade cloud platform with strong integration capabilities",
      features: ["Virtual Machines", "Azure SQL", "Functions", "Storage", "CDN"],
      logo: "Azure"
    },
    {
      name: "Google Cloud Platform",
      description: "Advanced cloud platform with AI and machine learning capabilities",
      features: ["Compute Engine", "Cloud Storage", "BigQuery", "AI Platform", "Kubernetes"],
      logo: "GCP"
    }
  ];

  const benefits = [
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs by up to 40% with our cloud optimization strategies",
      stat: "40%"
    },
    {
      title: "Scalability",
      description: "Scale your resources instantly based on demand and business growth",
      stat: "99.9%"
    },
    {
      title: "Security",
      description: "Enterprise-grade security with compliance and data protection",
      stat: "100%"
    },
    {
      title: "Performance",
      description: "Optimized performance with global CDN and edge computing",
      stat: "50%"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive cloud services including migration, infrastructure, and security solutions." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, cloud security" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cloud Services Excellence
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Accelerate your digital transformation with our comprehensive cloud solutions. 
                From migration to optimization, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Cloud Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Free Cloud Assessment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Cloud Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end cloud solutions designed to modernize your infrastructure and drive business growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Cloud Platform Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're certified experts in all major cloud platforms, ensuring the best solution for your needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {provider.logo}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{provider.name}</h3>
                    <p className="text-gray-600">{provider.description}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {provider.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
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

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Cloud Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of cloud transformation with our proven expertise and support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-4">{benefit.stat}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Cloud Migration Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to ensure successful cloud adoption and maximum value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
                <p className="text-gray-300">Analyze your current infrastructure and identify migration opportunities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold text-white mb-4">Strategy</h3>
                <p className="text-gray-300">Develop a comprehensive cloud strategy and migration plan.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold text-white mb-4">Migration</h3>
                <p className="text-gray-300">Execute the migration with minimal downtime and disruption.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">4</div>
                <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
                <p className="text-gray-300">Optimize performance, costs, and security post-migration.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">5</div>
                <h3 className="text-xl font-bold text-white mb-4">Support</h3>
                <p className="text-gray-300">Ongoing support and monitoring for continuous improvement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let our cloud experts help you transform your infrastructure and unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get Free Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudServicesPage;