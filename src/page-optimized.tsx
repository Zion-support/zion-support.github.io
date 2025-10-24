import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PageoptimizedPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Page optimized - Zion Tech Group"
        description="Professional page optimized services and solutions"
        keywords={['page optimized', 'technology', 'solutions', 'services']}
        canonicalUrl="https://ziontechgroup.com/page-optimized"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Page optimized
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional page optimized services and solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageoptimizedPage;