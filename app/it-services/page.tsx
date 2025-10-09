import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Smartphone as Phone, Headphones, Printer, Camera, Wrench, Cog, Activity, Globe as Web, Mail as Email, MessageCircle, Mic, Phone as PhoneIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      icon: Cloud,
      features: ['AWS, Azure, GCP', 'Auto-scaling', 'Load balancing', 'Disaster recovery'],
      price: 'Starting at $999/month'
    },
    {
      title: 'Network Security',
      description: 'Comprehensive security solutions for your network',
      icon: Shield,
      features: ['Firewall management', 'VPN setup', 'Intrusion detection', 'Security audits'],
      price: 'Starting at $799/month'
    },
    {
      title: 'Database Management',
      description: 'Optimized database solutions and management',
      icon: Database,
      features: ['Performance tuning', 'Backup & recovery', 'Migration services', '24/7 monitoring'],
      price: 'Starting at $599/month'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes',
      icon: Code,
      features: ['Pipeline automation', 'Container orchestration', 'Infrastructure as code', 'Monitoring'],
      price: 'Starting at $1,299/month'
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenance',
      icon: Users,
      features: ['Help desk services', 'Remote support', 'Hardware maintenance', 'Software updates'],
      price: 'Starting at $399/month'
    },
    {
      title: 'Data Analytics',
      description: 'Transform data into actionable insights',
      icon: BarChart,
      features: ['Data visualization', 'Business intelligence', 'Predictive analytics', 'Custom dashboards'],
      price: 'Starting at $899/month'
    }
  ];

  const categories = [
    'Infrastructure',
    'Security',
    'Development',
    'Support',
    'Analytics',
    'Cloud'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services & Infrastructure
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT solutions to keep your business running smoothly and securely.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">
                  <service.icon className="mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <a
                    href="/contact"
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
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you build a robust, secure, and scalable IT environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Call Now: (302) 464-0950
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;