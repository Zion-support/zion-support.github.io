import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta
          name="description"
          content="Explore our success stories and case studies. See how Zion Tech Group has helped businesses achieve remarkable results with AI, technology, and digital transformation solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client results, AI implementation, digital transformation, technology solutions, business outcomes"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results 
              through innovative technology solutions and AI implementation.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
