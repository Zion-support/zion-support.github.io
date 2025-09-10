import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';

const BlogPost = () => {
  const { slug } = useParams();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title={`Blog Post - Zion Tech Group`}
        description="Read our latest blog post about AI and technology innovations."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl font-bold mb-8">Blog Post: {slug}</h1>
          <div className="text-center">
            <p className="text-lg text-gray-400">Blog post content coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;