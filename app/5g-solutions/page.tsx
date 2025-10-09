import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const FiveGSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="5G Solutions - Zion Tech Group"
        description="Next-generation 5G solutions to enable ultra-fast connectivity and support emerging technologies."
        keywords="5G, next-generation connectivity, ultra-fast internet, IoT, edge computing, mobile networks"
        url="https://ziontechgroup.com/5g-solutions"
        type="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Next-generation 5G solutions to enable ultra-fast connectivity and support emerging technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Ultra-Fast Connectivity</h3>
              <p className="text-gray-300 mb-4">
                Lightning-fast 5G networks for enhanced mobile and fixed connectivity.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-4">IoT Enablement</h3>
              <p className="text-gray-300 mb-4">
                Support for massive IoT deployments with low latency and high reliability.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-white mb-4">Edge Computing</h3>
              <p className="text-gray-300 mb-4">
                Edge computing solutions powered by 5G for real-time processing.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get 5G Solutions
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FiveGSolutionsPage;
