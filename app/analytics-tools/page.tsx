import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const AnalyticsToolsPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Analytics Tools - Zion Tech Group"
        description="Advanced analytics tools to help you make data-driven decisions and optimize your business performance."
        keywords="analytics tools, business intelligence, data analysis, reporting, dashboards"
        url="https://ziontechgroup.com/analytics-tools"
        type="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Analytics Tools
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced analytics tools to help you make data-driven decisions and optimize your business performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Data Visualization</h3>
              <p className="text-gray-300 mb-4">
                Interactive dashboards and charts to visualize your data effectively.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-300 mb-4">
                Machine learning-powered analytics for deeper insights.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-4">Performance Tracking</h3>
              <p className="text-gray-300 mb-4">
                Track KPIs and performance metrics in real-time.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get Analytics Tools
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AnalyticsToolsPage;
