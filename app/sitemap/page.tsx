import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Sitemap - Zion Tech Group | Website Navigation and Structure"
        description="Navigate our website easily with our comprehensive sitemap showing all pages and sections."
        keywords="sitemap, website navigation, site structure, page index"
        canonical="https://ziontechgroup.com/sitemap"
      />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Sitemap
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate our website easily with our comprehensive sitemap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
