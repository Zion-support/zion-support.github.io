import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const MonitoringPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Monitoring & Alerting Services - Zion Tech Group"
        description="Comprehensive system monitoring and alerting solutions to ensure optimal performance and uptime."
        keywords="system monitoring, alerting, performance monitoring, uptime monitoring, infrastructure monitoring"
        url="https://ziontechgroup.com/monitoring"
        type="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Monitoring & Alerting Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive system monitoring and alerting solutions to ensure optimal performance and uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Real-time Monitoring</h3>
              <p className="text-gray-300 mb-4">
                Continuous monitoring of your systems with real-time dashboards and metrics.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Alerting</h3>
              <p className="text-gray-300 mb-4">
                Intelligent alerting system that notifies you of issues before they become problems.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-4">Performance Analytics</h3>
              <p className="text-gray-300 mb-4">
                Detailed analytics and reporting to help you optimize your infrastructure.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get Monitoring Solutions
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MonitoringPage;
