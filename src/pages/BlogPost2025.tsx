import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const BlogPost2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Technology Trends 2025
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Discover the most significant technology trends shaping our digital future in 2025.
            </p>
            <p className="text-gray-700 mb-6">
              The technology landscape continues to evolve at an unprecedented pace, with breakthrough innovations 
              emerging across artificial intelligence, quantum computing, biotechnology, and space technology.
            </p>
            <p className="text-gray-700 mb-6">
              Our comprehensive analysis reveals the key trends that will define the next decade of technological advancement.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost2025;