import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-white mb-8">News & Updates</h1>
        <p className="text-gray-300 mb-8">Stay updated with the latest news from Zion Tech Group.</p>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Latest AI Breakthrough</h2>
            <p className="text-gray-300 mb-4">Revolutionary machine learning algorithm that processes data 10x faster than traditional methods.</p>
            <a href="/blog/ai-breakthrough-2024" className="text-cyan-400 hover:text-cyan-300">
              Read More →
            </a>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Quantum Computing Milestone</h2>
            <p className="text-gray-300 mb-4">Achieved quantum supremacy in optimization problems, opening new possibilities for enterprise solutions.</p>
            <a href="/blog/quantum-milestone-2024" className="text-cyan-400 hover:text-cyan-300">
              Read More →
            </a>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Autonomous Systems Update</h2>
            <p className="text-gray-300 mb-4">New self-managing infrastructure reduces operational costs by 60% while improving reliability.</p>
            <a href="/blog/autonomous-systems-update" className="text-cyan-400 hover:text-cyan-300">
              Read More →
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;
