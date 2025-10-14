import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, Globe } from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {,

      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation']
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning and management using modern DevOps practices.',
      features: ['Terraform Templates', 'CI/CD Pipelines', 'Version Control', 'Automated Deployments']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Optimize your database performance and scalability in the cloud environment.',
      features: ['Database Migration', 'Performance Tuning', 'Backup & Recovery', 'Monitoring & Alerting']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Implement robust security measures and ensure compliance with industry standards.',
      features: ['Identity & Access Management', 'Data Encryption', 'Compliance Audits', 'Security Monitoring']
    },
    {
      icon: Zap,
      title: 'Auto-scaling',
      description: 'Automatically scale your resources based on demand to optimize costs and performance.',
      features: ['Load Balancing', 'Resource Optimization', 'Cost Management', 'Performance Monitoring']
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement a comprehensive multi-cloud architecture for maximum flexibility.',
      features: ['Cloud Strategy', 'Vendor Management', 'Disaster Recovery', 'Cost Optimization']
    }
  ];

  const benefits = [
    'Reduced Infrastructure Costs',
    'Improved Scalability',
    'Enhanced Security',
    'Better Performance',
    '24/7 Monitoring',
    'Disaster Recovery'
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Services | Zion Tech Group</title>
        <meta name="description" content="Expert cloud infrastructure services including migration, automation, and optimization. Transform your business with scalable cloud solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, AWS, Azure, Google Cloud, DevOps, infrastructure as code" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Cloud Infrastructure Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with scalable, secure, and cost-effective cloud infrastructure solutions. 
              We help you migrate, optimize, and manage your cloud environment for maximum performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
          </div>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Cloud Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
              ))}
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Why Choose Our Cloud Infrastructure Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300">{benefit}</span>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our cloud infrastructure services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
          </div>
      </div>
    </>);
};

export default CloudInfrastructurePage</section>
            </div>
          </div>
            </div>
          </div>
          </div>
        </section>
      </div>