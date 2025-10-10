'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Cloud, Code, BarChart, Users, Shield } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Services',
      description: 'Comprehensive AI solutions including machine learning, natural language processing, and computer vision.',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Automation']
    },
    {
      title: 'IT Services',
      description: 'Full-stack development, cloud infrastructure, and technical consulting services.',
      icon: Cloud,
      features: ['Web Development', 'Cloud Infrastructure', 'Database Management', 'API Development']
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights that drive business growth.',
      icon: BarChart,
      features: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics', 'Data Mining']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security measures to protect your data and systems from threats.',
      icon: Shield,
      features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Compliance']
    },
    {
      title: 'Team Augmentation',
      description: 'Expert developers and consultants to enhance your existing team capabilities.',
      icon: Users,
      features: ['Dedicated Developers', 'Technical Consulting', 'Code Reviews', 'Mentoring']
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions built specifically for your unique requirements.',
      icon: Code,
      features: ['Custom Applications', 'System Integration', 'API Development', 'Mobile Apps']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <service.icon className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;