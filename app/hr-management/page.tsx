import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const HRManagementPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="HR Management Solutions - Zion Tech Group"
        description="Comprehensive HR management solutions to streamline human resources processes and improve employee experience."
        keywords="HR management, human resources, employee management, payroll, benefits administration"
        url="https://ziontechgroup.com/hr-management"
        type="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              HR Management Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive HR management solutions to streamline human resources processes and improve employee experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-bold text-white mb-4">Employee Management</h3>
              <p className="text-gray-300 mb-4">
                Complete employee lifecycle management from onboarding to offboarding.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-4">Payroll Processing</h3>
              <p className="text-gray-300 mb-4">
                Automated payroll processing with tax compliance and reporting.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Performance Tracking</h3>
              <p className="text-gray-300 mb-4">
                Track employee performance and manage reviews and feedback.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get HR Management Solutions
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HRManagementPage;
