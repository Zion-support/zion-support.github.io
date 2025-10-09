'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Cloud, Shield, Code, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, FileText, Users, Globe, Cpu, Target, Zap, ArrowRight } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Infrastructure & Cloud Services
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      category: 'Infrastructure',
      price: '$299/month',
      features: ['AWS/Azure/GCP Setup', 'Auto-scaling', 'Load Balancing', 'CDN Configuration'],
      benefits: ['99.9% Uptime', 'Cost Optimization', 'Global Reach', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your business',
      category: 'Security',
      price: '$199/month',
      features: ['Firewall Management', 'Intrusion Detection', 'Vulnerability Scanning', 'Security Audits'],
      benefits: ['Threat Protection', 'Compliance', '24/7 Monitoring', 'Incident Response']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimized database solutions for performance and reliability',
      category: 'Data',
      price: '$149/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],
      benefits: ['High Performance', 'Data Integrity', 'Automated Backups', 'Expert Support']
    },
    {
      icon: Code,
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes',
      category: 'Development',
      price: '$249/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      benefits: ['Faster Deployments', 'Reduced Errors', 'Team Collaboration', 'Continuous Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      category: 'Development',
      price: '$399/month',
      features: ['iOS/Android Apps', 'Cross-platform', 'UI/UX Design', 'App Store Deployment'],
      benefits: ['Modern Design', 'High Performance', 'User Engagement', 'Market Ready']
    },
    {
      icon: Lock,
      title: 'Network Security',
      description: 'Advanced network protection and monitoring',
      category: 'Security',
      price: '$179/month',
      features: ['VPN Setup', 'Network Monitoring', 'Access Control', 'Security Policies'],
      benefits: ['Secure Access', 'Real-time Monitoring', 'Compliance', 'Threat Prevention']
    },
    {
      icon: TrendingUp,
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmaps',
      category: 'Consulting',
      price: '$199/hour',
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Guidance'],
      benefits: ['Expert Advice', 'Cost Savings', 'Future-proofing', 'Competitive Advantage']
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Complete system administration and maintenance',
      category: 'Infrastructure',
      price: '$899/month',
      features: ['Server Management', 'User Administration', 'System Updates', 'Performance Optimization'],
      benefits: ['Reliable Systems', 'Proactive Maintenance', 'Expert Support', 'Cost Efficiency']
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to power your business growth and digital transformation.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-sm text-cyan-400">{service.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>
                <p className="text-gray-300 text-sm">
                  {category === 'Infrastructure' && 'Cloud and server solutions'}
                  {category === 'Security' && 'Cybersecurity and protection'}
                  {category === 'Data' && 'Database and data management'}
                  {category === 'Development' && 'Software and app development'}
                  {category === 'Consulting' && 'Strategic IT consulting'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your IT?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Get Started
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            >
              View Case Studies
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ITServicesPage;