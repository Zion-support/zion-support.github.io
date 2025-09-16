import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Technology Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights and trends in technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">AI Innovation</h3>
            <p className="text-gray-300 mb-4">
              Latest developments in artificial intelligence
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-400/20">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Cloud Computing</h3>
            <p className="text-gray-300 mb-4">
              Cloud technology trends and best practices
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-800/50 to-teal-800/50 rounded-xl p-6 backdrop-blur-sm border border-green-400/20">
            <h3 className="text-2xl font-bold mb-4 text-green-300">Data Science</h3>
            <p className="text-gray-300 mb-4">
              Data analytics and machine learning insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;