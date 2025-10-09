import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Headphones, Printer, Camera, Wrench, Cog, Activity, MessageCircle, Mic, Phone } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'IT Infrastructure Management',
      description: 'Complete management of your IT infrastructure including servers, networks, and cloud systems.',
      icon: Server,
      features: ['Server Management', 'Network Monitoring', 'Cloud Migration', 'Backup Solutions']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      icon: Shield,
      features: ['Threat Detection', 'Firewall Management', 'Security Audits', 'Compliance']
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for modern businesses.',
      icon: Cloud,
      features: ['Cloud Migration', 'Hybrid Cloud', 'Cloud Security', 'Cost Optimization']
    },
    {
      title: 'Database Management',
      description: 'Expert database administration and optimization services.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration']
    },
    {
      title: 'Network Solutions',
      description: 'Robust network infrastructure design and implementation.',
      icon: Network,
      features: ['Network Design', 'Wireless Solutions', 'VPN Setup', 'Monitoring']
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support for all your IT needs.',
      icon: Headphones,
      features: ['24/7 Support', 'Remote Assistance', 'Issue Resolution', 'User Training']
    }
  ];

  const categories = [
    { name: 'Infrastructure', icon: Server, count: 12 },
    { name: 'Security', icon: Shield, count: 8 },
    { name: 'Cloud', icon: Cloud, count: 15 },
    { name: 'Support', icon: Headphones, count: 6 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Comprehensive IT Solutions for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            From infrastructure management to cybersecurity, we provide end-to-end IT services 
            that keep your business running smoothly and securely.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Service Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <category.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} Services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts assess your current IT setup and recommend the best solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto text-center"
            >
              Get Free Assessment
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ Free IT assessment • ✓ Custom recommendations • ✓ No obligation</p>
            <p>✓ 24/7 support • ✓ 99.9% uptime guarantee • ✓ Enterprise security</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;