import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIDataAnalyticsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Data Analytics</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered analytics solutions for data-driven insights.
          </p>
        </section>

        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              Our AI data analytics services are currently being developed. 
              Please contact us for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="cyber-button inline-flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIDataAnalyticsPage;