import React from "react";

const BlogPost2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">Blog Post 2025</h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Latest insights and updates on technology trends and innovations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 mb-8">
            <h2 className="text-3xl font-bold mb-4">Technology Trends 2025</h2>
            <p className="text-blue-100 mb-4">
              Discover the most significant trends shaping our digital future in 2025.
            </p>
            <div className="text-sm text-blue-200">
              Published: January 20, 2025
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 mb-8">
            <h2 className="text-3xl font-bold mb-4">AI Revolution</h2>
            <p className="text-purple-100 mb-4">
              How artificial intelligence is transforming industries and creating new opportunities.
            </p>
            <div className="text-sm text-purple-200">
              Published: January 18, 2025
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30">
            <h2 className="text-3xl font-bold mb-4">Quantum Computing Breakthrough</h2>
            <p className="text-pink-100 mb-4">
              Revolutionary quantum computing technology that's solving impossible problems.
            </p>
            <div className="text-sm text-pink-200">
              Published: January 15, 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost2025;