import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, Globe } from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
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
      features: ['Identity & Access Management', 'Data Encryption', 'Security Monitoring', 'Compliance Auditing']
    },
    {
      icon: Zap,
      title: 'Auto-scaling & Optimization',
      description: 'Automatically scale resources based on demand and optimize costs.',
      features: ['Auto-scaling Groups', 'Load Balancing', 'Cost Optimization', 'Performance Monitoring']
    },
    {
      icon: Globe,
      title: 'Multi-cloud Strategy',
      description: 'Design and implement multi-cloud architectures for maximum flexibility.',
      features: ['Cloud Strategy Planning', 'Multi-cloud Architecture', 'Vendor Management', 'Disaster Recovery']
    }

  const benefits = [
    'Reduced Infrastructure Costs',
    'Improved Scalability',
    'Enhanced Security',
    'Better Performance',
    '24/7 Monitoring',
    'Automated Backups'

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Expert cloud infrastructure solutions including migration, automation, and optimization services." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, DevOps, infrastructure as code, cloud security" />
      </Helmet>

      <$3 className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Cloud Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your infrastructure with our comprehensive cloud solutions. 
              From migration to optimization, we help you build scalable, secure, and cost-effective cloud environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
              <a 
                href="#services" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Cloud Infrastructure Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Cloud Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our cloud infrastructure solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="/about" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                About Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;