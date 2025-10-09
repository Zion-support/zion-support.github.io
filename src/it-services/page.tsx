import React from 'react';
import { Cloud, Shield, Settings, Database, Globe, Smartphone, Users, Server, HardDrive, Monitor, Printer, Router, Laptop, Tablet, Watch, Headset, Keyboard, Mouse, Webcam, Microphone, Speaker, Battery, Power, Wrench, Hammer, Screwdriver, Tool, Cog, Gear, Settings2, ArrowRight, CheckCircle, Star, Phone, Zap, Award, Clock, ShieldCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure solutions including servers, networks, and cloud services.',
      icon: Server,
      features: ['Server management', 'Network setup', 'Cloud migration', 'Monitoring', 'Maintenance', '24/7 support'],
      price: 'Starting at $500/month',
      category: 'Infrastructure'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business from cyber threats.',
      icon: Shield,
      features: ['Security audits', 'Firewall setup', 'Antivirus management', 'Security monitoring', 'Incident response', 'Compliance'],
      price: 'Starting at $300/month',
      category: 'Security'
    },
    {
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and management services for all major cloud providers.',
      icon: Cloud,
      features: ['Cloud migration', 'Setup & configuration', 'Cost optimization', 'Security management', 'Monitoring', 'Support'],
      price: 'Starting at $400/month',
      category: 'Cloud'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance services for all database types.',
      icon: Database,
      features: ['Database design', 'Performance optimization', 'Backup & recovery', 'Security', 'Monitoring', 'Maintenance'],
      price: 'Starting at $350/month',
      category: 'Database'
    },
    {
      title: 'Network Solutions',
      description: 'Complete network infrastructure design, implementation, and management.',
      icon: Router,
      features: ['Network design', 'Implementation', 'Security', 'Monitoring', 'Troubleshooting', 'Maintenance'],
      price: 'Starting at $450/month',
      category: 'Networking'
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 IT support services for all your technology needs.',
      icon: Headset,
      features: ['24/7 support', 'Remote assistance', 'Hardware support', 'Software support', 'User training', 'Documentation'],
      price: 'Starting at $200/month',
      category: 'Support'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Years Experience' }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-400 mb-8">
                Comprehensive IT services to keep your business running smoothly
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                From infrastructure management to cybersecurity, we provide complete IT solutions 
                that ensure your business stays secure, efficient, and competitive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)'}}
                >
                  <span>Get Quote</span>
                </a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer a comprehensive range of IT services to meet all your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {service.category}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-2">{service.price}</div>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className="cyber-button w-full text-center block"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a free consultation and let us help you build a robust IT foundation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)'}}
                >
                  <span>Get Free Consultation</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;