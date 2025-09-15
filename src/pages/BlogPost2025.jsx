import React from 'react';

const BlogPost2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Blog Post 2025</h1>
          <p className="text-xl text-gray-700">
            Latest insights and updates from our technology experts
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Technology Trends 2025</h2>
            <p className="text-gray-600 mb-6">
              Discover the most significant trends shaping our digital future in 2025.
            </p>
            <div className="prose max-w-none">
              <p>
                The technology landscape continues to evolve at an unprecedented pace. 
                From artificial intelligence to quantum computing, we're witnessing 
                revolutionary changes that will reshape industries and transform how 
                we work and live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BlogPost2025;
