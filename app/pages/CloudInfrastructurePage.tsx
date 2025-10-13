import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, Globe } from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Post-Migration Support'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure cloud infrastructure solutions.',
      features: ['Infrastructure Design', 'Auto-scaling', 'Load Balancing', 'High Availability'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Managed database services with high performance and reliability.',
      features: ['Database Setup', 'Performance Tuning', 'Backup & Recovery', 'Monitoring'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for your cloud infrastructure.',
      features: ['Security Assessment', 'Access Control', 'Data Encryption', 'Compliance'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.',
      features: ['Performance Monitoring', 'Cost Optimization', 'Resource Scaling', 'Best Practices'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Implement multi-cloud solutions for enhanced reliability and flexibility.',
      features: ['Multi-Cloud Design', 'Cloud Integration', 'Disaster Recovery', 'Vendor Management'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, architecture design, database solutions, and security." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud architecture, database solutions, cloud security, multi-cloud" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Cloud <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Build, migrate, and optimize your cloud infrastructure with our expert solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">Our Cloud Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-slate-900 p-8 rounded-lg hover:bg-slate-800 transition-colors group">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-white mb-8">
                Let's discuss how our cloud infrastructure services can help your business scale and succeed.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;
