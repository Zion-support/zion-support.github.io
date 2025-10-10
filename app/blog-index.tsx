import React from 'react';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import EnhancedSEO from '../../src/components/EnhancedSEO';

const BlogIndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 cyber-grid neural-network-bg">
      <EnhancedSEO 
        title="Blog - Zion Tech Group | AI & Technology Insights"
        description="Latest insights, trends, and news about AI, technology, and digital transformation from Zion Tech Group experts."
        keywords="AI blog, technology insights, AI trends, digital transformation, tech news"
      />
      
      <Navigation />
      
      <main className="relative">
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 particle-field"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 cyber-text-3d">
                Our
                <span className="block neon-text">Blog</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Latest insights, trends, and news about AI, technology, 
                and digital transformation from our experts.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogIndexPage;