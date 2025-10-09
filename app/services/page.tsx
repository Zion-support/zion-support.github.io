'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      description: 'Comprehensive AI solutions for business transformation',
      icon: '🤖',
      services: [
        'AI Content Generation',
        'AI Customer Support',
        'AI Data Analytics',
        'AI Marketing Automation',
        'AI Sales Automation',
        'AI Workflow Automation'
      ],
      link: '/ai-services'
    },
    {
      title: 'IT Services',
      description: 'Complete IT infrastructure and support solutions',
      icon: '💻',
      services: [
        'IT Infrastructure Management',
        'Cybersecurity Solutions',
        'Cloud Services',
        'Database Management',
        'Network Solutions',
        'System Administration'
      ],
      link: '/it-services'
    },
    {
      title: 'Micro SAAS',
      description: '50+ ready-to-use AI-powered business tools',
      icon: '⚡',
      services: [
        'AI Content Generator Pro',
        'Smart Analytics Dashboard',
        'Email Marketing Automation',
        'Social Media Manager',
        'Project Management AI',
        'Lead Generation Engine'
      ],
      link: '/micro-saas'
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Our Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Comprehensive solutions for modern businesses
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            From AI-powered automation to complete IT infrastructure, we provide 
            everything you need to transform your business and achieve unprecedented growth.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={category.link}
                  className="w-full cyber-button py-3 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Zion Tech Group?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-white font-medium mb-2">Projects Completed</div>
              <div className="text-gray-400">Across all industries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-white font-medium mb-2">Uptime Guarantee</div>
              <div className="text-gray-400">Reliable performance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-white font-medium mb-2">Support Available</div>
              <div className="text-gray-400">Always here to help</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Free Consultation
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ServicesPage;