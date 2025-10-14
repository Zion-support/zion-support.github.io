import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Schedule a demo with Zion Tech Group to see our AI and IT solutions in action." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Schedule a Demo
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            See our AI and IT solutions in action. Schedule a personalized demo today.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;