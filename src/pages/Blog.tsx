<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import LatestContentPromotion from '@/components/LatestContentPromotion';
import LatestContentPromotion2029 from '@/components/LatestContentPromotion2029';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Blog - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
<<<<<<< HEAD
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
=======
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary technology solutions and insights for the future
          </p>
        </div>
        {/* Promote freshest content */}
        <div className="mb-12">
          <LatestContentPromotion />
        </div>
        <div className="mb-12">
          <LatestContentPromotion2029 />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Advanced Technology</h3>
            <p className="text-gray-300 mb-4">
              Cutting-edge solutions that push the boundaries of what's possible
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• AI-powered automation</li>
              <li>• Quantum computing breakthroughs</li>
              <li>• Neural interface technology</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-400/20">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Innovation Hub</h3>
            <p className="text-gray-300 mb-4">
              Discover the latest developments in technology and innovation
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Research and development</li>
              <li>• Industry partnerships</li>
              <li>• Future technology trends</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-800/50 to-teal-800/50 rounded-xl p-6 backdrop-blur-sm border border-green-400/20">
            <h3 className="text-2xl font-bold mb-4 text-green-300">Solutions</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive technology solutions for modern challenges
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Enterprise solutions</li>
              <li>• Custom development</li>
              <li>• Technology consulting</li>
            </ul>
          </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
        </div>
      </div>
    </div>
  );
};

export default Blog;
=======
>>>>>>> 6995d05efbf958465be8e251001703bdbc87a50a
