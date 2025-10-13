import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Sitemap - Zion Tech Group"
        description="Navigate our website easily with our comprehensive sitemap of all pages and services."
        keywords="sitemap, navigation, website structure, pages"
        canonical="/sitemap"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Sitemap
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate our website easily with our comprehensive sitemap.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Main Pages</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a></li>
              <li><a href="/about" className="text-cyan-400 hover:text-cyan-300 transition-colors">About</a></li>
              <li><a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">Contact</a></li>
              <li><a href="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">AI Services</h3>
            <ul className="space-y-2">
              <li><a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors">AI Services</a></li>
              <li><a href="/ai-analytics" className="text-cyan-400 hover:text-cyan-300 transition-colors">AI Analytics</a></li>
              <li><a href="/ai-automation" className="text-cyan-400 hover:text-cyan-300 transition-colors">AI Automation</a></li>
              <li><a href="/ai-content-generation" className="text-cyan-400 hover:text-cyan-300 transition-colors">AI Content Generation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Micro SAAS</h3>
            <ul className="space-y-2">
              <li><a href="/micro-saas" className="text-cyan-400 hover:text-cyan-300 transition-colors">Micro SAAS</a></li>
              <li><a href="/zion-analytics-pro" className="text-cyan-400 hover:text-cyan-300 transition-colors">Zion Analytics Pro</a></li>
              <li><a href="/zion-security-shield" className="text-cyan-400 hover:text-cyan-300 transition-colors">Zion Security Shield</a></li>
              <li><a href="/zion-cloud-vault" className="text-cyan-400 hover:text-cyan-300 transition-colors">Zion Cloud Vault</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;