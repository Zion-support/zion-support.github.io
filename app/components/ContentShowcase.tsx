import React from 'react';
import Link from 'next/link';

const ContentShowcase: React.FC = () => {
  return (
    <div className="content-showcase bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Featured Content & Resources</h2>
      <p className="text-lg text-gray-600 mb-8">Discover our latest insights, innovations, and industry-leading resources.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="showcase-item bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">AI Solutions</h3>
          <p className="text-gray-600 mb-4">Explore our cutting-edge AI solutions that transform enterprise operations.</p>
          <Link 
            href="/services" 
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
          >
            Learn More →
          </Link>
        </div>
        
        <div className="showcase-item bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">Latest Blog Posts</h3>
          <p className="text-gray-600 mb-4">Read about our latest insights, trends, and innovations in AI technology.</p>
          <Link 
            href="/blog" 
            className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
          >
            Read More →
          </Link>
        </div>
        
        <div className="showcase-item bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">Success Stories</h3>
          <p className="text-gray-600 mb-4">See how we've helped businesses achieve 300% ROI with our solutions.</p>
          <Link 
            href="/contact" 
            className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;