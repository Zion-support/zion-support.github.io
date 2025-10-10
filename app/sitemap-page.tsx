import React from 'react';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import EnhancedSEO from '../../src/components/EnhancedSEO';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 cyber-grid neural-network-bg">
      <EnhancedSEO 
        title="Sitemap - Zion Tech Group | Site Navigation"
        description="Complete sitemap of Zion Tech Group website with all pages and services organized for easy navigation."
        keywords="sitemap, site navigation, website structure, page index"
      />
      
      <Navigation />
      
      <main className="relative">
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 cyber-text-3d">
                Site
                <span className="block neon-text">Map</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Complete sitemap of our website with all pages and services 
                organized for easy navigation.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SitemapPage;