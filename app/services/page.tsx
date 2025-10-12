import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Shield, Zap, Code, Database, Smartphone, Globe, Settings, BarChart, Users, Target, CheckCircle } from 'lucide-react';
import Layout from '../layout';

const ServicesPage: React.FC = () => {
  const services = [
    {
      category: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      services: [
        'AI Analytics & Insights',
        'Machine Learning Solutions',
        'Natural Language Processing',
        'Computer Vision',
        'AI Automation',
        'Predictive Analytics'
      ]
    },
    {
      category: 'IT Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      services: [
        'Cloud Infrastructure',
        'Web Development',
        'Mobile Development',
        'API Development',
        'Database Management',
        'DevOps & CI/CD'
      ]
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      services: [
        'Security Assessment',
        'Threat Detection',
        'Compliance Management',
        'Incident Response',
        'Security Audits',
        'Penetration Testing'
      ]
    },
    {
      category: '5G Solutions',
      icon: Zap,
      color: 'from-yellow-500 to-green-600',
      services: [
        '5G Network Implementation',
        'IoT Solutions',
        'Edge Computing',
        'Smart City Solutions',
        'Private Networks',
        'Mobile Applications'
      ]
    },
    {
      category: 'Data Analytics',
      icon: BarChart,
      color: 'from-indigo-500 to-purple-600',
      services: [
        'Business Intelligence',
        'Data Visualization',
        'Real-time Analytics',
        'Custom Dashboards',
        'Data Engineering',
        'Machine Learning Ops'
      ]
    },
    {
      category: 'Consulting',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
      services: [
        'Technology Strategy',
        'Digital Transformation',
        'Process Optimization',
        'Change Management',
        'Training & Support',
        'Project Management'
      ]
    }
  ];

  return (
    <Layout
      title="Services - Zion Tech Group"
      description="Comprehensive AI and IT services to transform your business. From AI solutions to cloud infrastructure and cybersecurity."
      keywords="services, AI services, IT services, cloud computing, cybersecurity, 5G, data analytics"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive innovation. 
              From cutting-edge AI technologies to robust infrastructure solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((category, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;