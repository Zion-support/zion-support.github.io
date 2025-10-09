
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const StatusPage: React.FC = () => {
  const services = [
    { name: 'AI Services', status: 'operational', uptime: '99.9%' },
    { name: 'IT Consulting', status: 'operational', uptime: '99.8%' },
    { name: 'Micro SAAS', status: 'operational', uptime: '99.9%' },
    { name: 'Support System', status: 'operational', uptime: '99.7%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20">
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            System Status
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-time status of our services and systems
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-green-400 font-semibold mb-1">Operational</p>
                <p className="text-gray-400 text-sm">Uptime: {service.uptime}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button flex items-center space-x-2"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5" />
              <span>Contact Support</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StatusPage;

