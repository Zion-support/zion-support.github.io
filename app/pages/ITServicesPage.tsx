import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Wrench, Monitor, Database } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.',
      features: [
        'Server Setup & Configuration',
        'Network Design & Implementation',
        'Hardware Maintenance',
        'Performance Monitoring',
        'Disaster Recovery Planning',
        '24/7 Technical Support'
      ],
      pricing: 'Starting at $3,500/month'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud with our expert cloud architecture and management services.',
      features: [
        'Cloud Migration Planning',
        'Multi-cloud Architecture',
        'Cost Optimization',
        'Security Implementation',
        'Automated Scaling',
        'Cloud Monitoring'
      ],
      pricing: 'Starting at $2,800/month'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Services',
      description: 'Protect your business with comprehensive cybersecurity solutions and threat protection.',
      features: [
        'Security Assessment',
        'Threat Detection & Prevention',
        'Firewall Configuration',
        'Data Encryption',
        'Security Training',
        'Incident Response'
      ],
      pricing: 'Starting at $4,200/month'
    },
    {
      icon: Wrench,
      title: 'IT Support & Maintenance',
      description: 'Reliable IT support and maintenance services to keep your systems running smoothly.',
      features: [
        'Help Desk Support',
        'System Maintenance',
        'Software Updates',
        'Hardware Repairs',
        'User Training',
        'Documentation'
      ],
      pricing: 'Starting at $1,500/month'
    },
    {
      icon: Monitor,
      title: 'Network Solutions',
      description: 'Design and implement robust network solutions for optimal connectivity and performance.',
      features: [
        'Network Design',
        'Wireless Solutions',
        'VPN Implementation',
        'Bandwidth Management',
        'Network Security',
        'Performance Optimization'
      ],
      pricing: 'Starting at $2,200/month'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management services for your data needs.',
      features: [
        'Database Design',
        'Performance Tuning',
        'Backup & Recovery',
        'Data Migration',
        'Security Hardening',
        'Monitoring & Alerting'
      ],
      pricing: 'Starting at $2,600/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support for businesses." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, technical support, network solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT solutions to keep your business running smoothly
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From infrastructure management to cybersecurity, our expert IT services 
              ensure your technology infrastructure is secure, efficient, and scalable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-green-400">
                      {service.pricing}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Services */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide reliable, scalable, and secure IT solutions that support your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Server className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our certified IT professionals have extensive experience 
                in managing complex enterprise infrastructure and systems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock technical support ensures your systems 
                are always running smoothly and issues are resolved quickly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300">
                Our IT solutions grow with your business, ensuring 
                you always have the right technology infrastructure.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proactive Monitoring</h3>
              <p className="text-gray-300">
                Advanced monitoring tools help us identify and resolve 
                potential issues before they impact your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our IT services can improve your business operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get IT Consultation
              </a>
              <a 
                href="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITServicesPage;