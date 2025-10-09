import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const CRMSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="CRM Solutions - Zion Tech Group"
        description="Advanced CRM solutions to manage customer relationships and boost sales performance."
        keywords="CRM, customer relationship management, sales management, customer data, lead management"
        url="https://ziontechgroup.com/crm-solutions"
        type="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CRM Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced CRM solutions to manage customer relationships and boost sales performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-4">Customer Management</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive customer data management and relationship tracking.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-4">Sales Analytics</h3>
              <p className="text-gray-300 mb-4">
                Advanced analytics to track sales performance and identify opportunities.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Lead Management</h3>
              <p className="text-gray-300 mb-4">
                Streamline lead generation and conversion processes.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get CRM Solutions
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CRMSolutionsPage;
