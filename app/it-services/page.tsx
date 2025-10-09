'use client';
import React from 'react';

export const dynamic = 'force-dynamic';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Headphones, Printer, Camera, Wrench, Cog, Activity, MessageCircle, Mic, Phone } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      icon: <Cloud className="w-8 h-8" />,
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load balancing', 'Disaster recovery'],
      price: 'Starting at $500/month',
      category: 'Infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection', 'Vulnerability assessment', 'Security monitoring', 'Incident response'],
      price: 'Starting at $800/month',
      category: 'Security'
    },
    {
      title: 'Database Management',
      description: 'Optimized database solutions for performance and reliability',
      icon: <Database className="w-8 h-8" />,
      features: ['Performance tuning', 'Backup & recovery', 'Data migration', 'Monitoring'],
      price: 'Starting at $300/month',
      category: 'Data'
    },
    {
      title: 'Network Solutions',
      description: 'Robust networking infrastructure for seamless connectivity',
      icon: <Network className="w-8 h-8" />,
      features: ['Network design', 'VPN setup', 'Firewall configuration', 'Monitoring'],
      price: 'Starting at $400/month',
      category: 'Infrastructure'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes',
      icon: <Code className="w-8 h-8" />,
      features: ['Automated testing', 'Continuous deployment', 'Infrastructure as code', 'Monitoring'],
      price: 'Starting at $600/month',
      category: 'Development'
    },
    {
      title: 'IT Support',
      description: '24/7 technical support for your business needs',
      icon: <Users className="w-8 h-8" />,
      features: ['Help desk', 'Remote support', 'System maintenance', 'User training'],
      price: 'Starting at $200/month',
      category: 'Support'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-400 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-1">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-bold mb-4">{service.price}</div>
                <Link
                  href="/contact"
                  className="cyber-button w-full text-center block"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your IT?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="cyber-button"
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;