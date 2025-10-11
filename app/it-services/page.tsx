import React from 'react';
import { CheckCircle, Server, Cloud, Shield, Database, Settings, ArrowRight, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud migration with 99.9% uptime guarantee and 24/7 monitoring.',
      features: ['AWS/Azure/GCP migration', 'Cost optimization', 'Security compliance', 'Disaster recovery'],
      pricing: 'Custom pricing based on infrastructure',
      link: '/it-services/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including penetration testing and compliance auditing.',
      features: ['Penetration testing', 'Security audits', 'Compliance management', 'Incident response'],
      pricing: 'Starting at $2,500/month',
      link: '/it-services/cybersecurity-audit'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'IT Infrastructure Design',
      description: 'Scalable infrastructure solutions with high availability and performance optimization.',
      features: ['Network design', 'Server optimization', 'Load balancing', 'Monitoring setup'],
      pricing: 'Starting at $5,000/project',
      link: '/it-services/infrastructure-design'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Expert database administration with backup, recovery, and performance tuning.',
      features: ['Database optimization', 'Backup strategies', 'Performance tuning', 'Security hardening'],
      pricing: 'Starting at $1,500/month',
      link: '/it-services/database-management'
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: 'IT Support & Maintenance',
      description: '24/7 technical support and proactive maintenance to keep your systems running smoothly.',
      features: ['24/7 support', 'Proactive monitoring', 'Software updates', 'Hardware maintenance'],
      pricing: 'Starting at $1,200/month',
      link: '/it-services/support'
    },
    {
      icon: <Server className="w-8 h-8 text-cyan-500" />,
      title: 'Network Solutions',
      description: 'Complete network infrastructure design, implementation, and management services.',
      features: ['Network design', 'Security implementation', 'Performance optimization', 'Monitoring'],
      pricing: 'Starting at $3,000/project',
      link: '/it-services/network-solutions'
    }
  ];

  const industries = [
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant IT solutions for hospitals, clinics, and healthcare providers.',
      examples: ['EMR integration', 'HIPAA compliance', 'Medical device security', 'Telemedicine support']
    },
    {
      title: 'Finance',
      description: 'Secure IT infrastructure for banks, credit unions, and financial services.',
      examples: ['PCI compliance', 'Fraud prevention', 'Secure transactions', 'Regulatory compliance']
    },
    {
      title: 'Manufacturing',
      description: 'Industrial IT solutions for production facilities and supply chain management.',
      examples: ['IoT integration', 'Production monitoring', 'Supply chain optimization', 'Quality control']
    },
    {
      title: 'Education',
      description: 'Technology solutions for schools, universities, and educational institutions.',
      examples: ['Learning management systems', 'Student data security', 'Remote learning support', 'Campus networks']
    }
  ];

  const serviceProcess = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'We conduct a comprehensive assessment of your current IT infrastructure and identify areas for improvement.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a custom IT solution tailored to your specific business requirements and budget.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your business operations.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'We thoroughly test the solution and optimize it for peak performance and security.'
    },
    {
      step: '05',
      title: 'Ongoing Support',
      description: 'We provide continuous monitoring, maintenance, and support to ensure optimal performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure design, and database management. Enterprise-grade solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, infrastructure design, database management, IT support" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Server className="w-4 h-4 mr-2" />
              Enterprise IT Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT services to keep your business running smoothly. From cloud migration to cybersecurity, we provide enterprise-grade solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* IT Services Grid */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Complete IT solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-400 font-semibold text-sm mb-4">{service.pricing}</div>
                  <Link 
                    to={service.link}
                    className="text-white text-sm hover:text-blue-400 transition-colors flex items-center"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Specialized IT solutions across diverse industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">{industry.title}</h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Service Process</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A systematic approach to IT excellence
              </p>
            </div>
            
            <div className="space-y-8">
              {serviceProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can improve your business efficiency and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;