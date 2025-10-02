import React from 'react';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore real-world examples of how we've helped businesses achieve their goals.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're preparing detailed case studies showcasing our successful projects and client transformations.
          </p>
          <a 
            href="/contact" 
            className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
          >
            Request a Case Study
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;