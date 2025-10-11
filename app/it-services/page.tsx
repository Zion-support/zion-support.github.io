import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Server, 
  Cloud, 
  Shield, 
  Database, 
  Code, 
  Settings, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure solutions for modern businesses',
      features: ['Server Management', 'Network Design', 'Hardware Support', 'System Monitoring']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', '24/7 Monitoring']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize and manage your data infrastructure',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions for your business needs',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      icon: Settings,
      title: 'IT Support',
      description: '24/7 technical support and maintenance services',
      features: ['Help Desk', 'Remote Support', 'System Updates', 'Troubleshooting']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'We analyze your current IT infrastructure and identify areas for improvement.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We develop a comprehensive strategy tailored to your specific requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and maintenance to ensure optimal performance.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including infrastructure management, cloud solutions, cybersecurity, and custom development. Transform your business with our expert IT support." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, database management, custom development, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">IT Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to optimize your business operations and drive growth through technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive technology solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-300">
                How we deliver exceptional IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT services can help streamline your operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ItServicesPage;