import React from 'react';

const BlogPost2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog Post 2025
          </h1>
          <p className="text-xl text-gray-600">
            Latest insights and updates from our technology experts
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Technology Trends 2025</h2>
            <p className="text-gray-600 mb-6">
              Discover the most significant trends shaping our digital future in 2025.
              From artificial intelligence to quantum computing, we explore the technologies
              that are revolutionizing industries and creating new opportunities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">AI Revolution</h3>
                <p className="text-sm text-gray-600">
                  How artificial intelligence is transforming every aspect of business and life.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Quantum Computing</h3>
                <p className="text-sm text-gray-600">
                  The next frontier in computing power and problem-solving capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost2025;