'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SystemAdminPage: React.FC = () => {
  const services = [
    {
      title: 'Server Management',
      description: 'Complete server administration including monitoring, maintenance, and optimization.',
      icon: '🖥️'
    },
    {
      title: 'User Management',
      description: 'User account provisioning, access control, and identity management.',
      icon: '👥'
    },
    {
      title: 'Backup & Recovery',
      description: 'Automated backup solutions and disaster recovery planning.',
      icon: '💾'
    },
    {
      title: 'Security Administration',
      description: 'Security policy implementation and compliance management.',
      icon: '🔒'
    }
  ];

  const benefits = [
    '24/7 system monitoring',
    'Proactive maintenance',
    'Rapid issue resolution',
    'Cost-effective management',
    'Scalable solutions',
    'Expert support team'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            System Administration
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional system administration services to keep your IT infrastructure running smoothly and securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready for Professional System Management?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts handle your system administration so you can focus on your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Get Free Assessment
            </a>
            <a
              href="tel:+13024640950"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SystemAdminPage;