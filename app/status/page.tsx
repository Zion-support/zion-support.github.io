import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const StatusPage: React.FC = () => {
  const services = [
    { name: 'Website', status: 'operational', uptime: '99.9%' },
    { name: 'API Services', status: 'operational', uptime: '99.8%' },
    { name: 'Database', status: 'operational', uptime: '99.9%' },
    { name: 'CDN', status: 'operational', uptime: '99.95%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              System Status
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Real-time System Monitoring
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Monitor the status of all our services and systems in real-time.
            </p>
          </div>
        </section>

        {/* Status Overview */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Service Status
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <div className="flex items-center space-x-2">
                      {service.status === 'operational' ? (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      ) : service.status === 'degraded' ? (
                        <AlertCircle className="w-6 h-6 text-yellow-400" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-400" />
                      )}
                      <span className={`text-sm font-semibold ${
                        service.status === 'operational' ? 'text-green-400' :
                        service.status === 'degraded' ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="text-cyan-400 font-semibold">
                    Uptime: {service.uptime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              If you're experiencing issues, please contact our support team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 mb-4">Get detailed help via email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 mb-4">Speak with our experts</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">Our headquarters</p>
                <p className="text-cyan-400 font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StatusPage;