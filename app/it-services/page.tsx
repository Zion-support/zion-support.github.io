import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Smartphone as Phone, Headphones, Printer, Camera, Wrench, Cog, Activity, Globe as Web, Mail as Email, MessageCircle, Mic, Phone as PhoneIcon } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'IT Infrastructure Management',
      description: 'Complete infrastructure setup, monitoring, and maintenance for your business.',
      icon: Server,
      features: ['Server Management', 'Network Setup', 'Cloud Migration', 'Backup Solutions'],
      price: 'Starting at $999/month',
      benefits: ['99.9% Uptime', '24/7 Monitoring', 'Expert Support', 'Scalable Solutions']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your business from cyber threats.',
      icon: Shield,
      features: ['Threat Detection', 'Firewall Management', 'Security Audits', 'Incident Response'],
      price: 'Starting at $799/month',
      benefits: ['Real-time Protection', 'Compliance Support', 'Security Training', 'Risk Assessment']
    },
    {
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and management for modern business operations.',
      icon: Cloud,
      features: ['Cloud Migration', 'Multi-cloud Strategy', 'Cost Optimization', 'Disaster Recovery'],
      price: 'Starting at $599/month',
      benefits: ['Flexible Scaling', 'Cost Savings', 'Enhanced Security', 'Global Access']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing and deployment.',
      icon: Settings,
      features: ['CI/CD Pipelines', 'Automated Testing', 'Deployment Automation', 'Monitoring'],
      price: 'Starting at $299/month',
      benefits: ['Faster Deployments', 'Reduced Errors', 'Team Collaboration', 'Continuous Integration']
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, migration, and management solutions.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Migration Services', 'Backup & Recovery'],
      price: 'Starting at $199/month',
      benefits: ['Optimized Performance', 'Data Security', 'Scalable Architecture', 'Expert Support']
    },
    {
      title: 'Network Services',
      description: 'Network infrastructure design, implementation, and management.',
      icon: Network,
      features: ['Network Design', 'Wireless Solutions', 'VPN Setup', 'Network Security'],
      price: 'Starting at $399/month',
      benefits: ['Reliable Connectivity', 'Enhanced Security', 'Scalable Design', 'Expert Management']
    }
  ];

  const categories = [
    { name: 'Infrastructure', icon: Server, count: 15 },
    { name: 'Security', icon: Shield, count: 12 },
    { name: 'Cloud', icon: Cloud, count: 18 },
    { name: 'DevOps', icon: Settings, count: 10 },
    { name: 'Database', icon: Database, count: 8 },
    { name: 'Network', icon: Network, count: 6 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Services & Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly. 
              From infrastructure management to cybersecurity, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                Get Started
              </Link>
              <Link
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Service Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="text-center p-6 bg-white/10 rounded-xl hover:bg-white/15 transition-all">
                  <category.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {category.count} services
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-8 hover:bg-white/15 transition-all">
                  <div className="flex items-center mb-6">
                    <service.icon className="w-12 h-12 text-cyan-400 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold">
                        {service.price}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all w-full justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you build a robust, secure, and scalable IT environment 
              that supports your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;