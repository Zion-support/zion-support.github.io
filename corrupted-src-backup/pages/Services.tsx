import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Autonomous Operations',
      description:
        'Self-healing infrastructure and autonomous operations that reduce costs by 70% and achieve 99.9% uptime.',
      icon: '🤖',
      href: '/services/autonomous-operations',
    },
    {
      title: 'Quantum Computing Solutions',
      description:
        'Revolutionary quantum computing that delivers 2000x processing speed improvements for complex calculations.',
      icon: '⚡',
      href: '/services/quantum-computing',
    },
    {
      title: 'Advanced Cybersecurity AI',
      description:
        'Next-generation AI-powered cybersecurity solutions with 99.9% threat detection accuracy.',
      icon: '🛡️',
      href: '/services/cybersecurity',
    },
    {
      title: 'Enterprise AI Consulting',
      description:
        'Strategic AI implementation guidance that transforms business operations and drives exponential growth.',
      icon: '🎯',
      href: '/services/consulting',
    },
    {
      title: 'Cloud Migration Services',
      description:
        'Seamless cloud migration with zero downtime, ensuring business continuity and improved scalability.',
      icon: '☁️',
      href: '/services/cloud-migration',
    },
    {
      title: 'Digital Transformation',
      description:
        'Complete digital transformation solutions that modernize operations and enhance customer experiences.',
      icon: '🔄',
      href: '/services/digital-transformation',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-white mb-6'>Our Services</h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Comprehensive AI and technology solutions designed to transform your
            business and drive unprecedented growth and efficiency.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20'
            >
              <div className='text-4xl mb-4'>{service.icon}</div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                {service.title}
              </h3>
              <p className='text-gray-300 mb-6'>{service.description}</p>
              <Link
                to={service.href}
                className='inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300'
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className='text-center mt-16'>
          <h2 className='text-3xl font-bold text-white mb-6'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Let our AI experts help you implement cutting-edge solutions that
            drive real results.
          </p>
          <Link
            to='/contact'
            className='inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300'
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
