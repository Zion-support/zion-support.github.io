import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Wrench, Monitor, Database } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.',
      features: ['Server Configuration', 'Network Setup', 'Hardware Maintenance', 'Performance Monitoring']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate and manage your infrastructure in the cloud with our expert cloud services.',
      features: ['Cloud Migration', 'Multi-cloud Strategy', 'Cost Optimization', 'Security Management']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business from cyber threats with our comprehensive security solutions.',
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance Management']
    },
    {
      icon: Wrench,
      title: 'System Integration',
      description: 'Connect and integrate your existing systems for seamless operations.',
      features: ['API Development', 'Database Integration', 'Workflow Automation', 'Custom Solutions']
    },
    {
      icon: Monitor,
      title: 'IT Support',
      description: '24/7 technical support to keep your systems running smoothly.',
      features: ['Help Desk', 'Remote Support', 'On-site Service', 'Proactive Monitoring']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Secure and efficient data storage, backup, and recovery solutions.',
      features: ['Data Backup', 'Disaster Recovery', 'Data Migration', 'Storage Optimization']
    }
  ];

  const benefits = [
    'Expert IT professionals with industry certifications',
    '24/7 monitoring and support services',
    'Scalable solutions that grow with your business',
    'Proactive maintenance and updates',
    'Cost-effective solutions tailored to your budget',
    'Compliance with industry standards and regulations'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and system integration." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, system integration" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services to keep your business running smoothly and securely. 
            From infrastructure management to cybersecurity, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Our IT Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Upgrade Your IT Infrastructure?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how our IT services can help improve your business operations and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;