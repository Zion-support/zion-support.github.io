import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of AI and IT professionals. Explore career opportunities at Zion Tech Group. Contact us at +1 302 464 0950." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Be part of a dynamic team that's shaping the future of AI and IT solutions. 
                We're looking for talented professionals to join our growing company.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold">
                  Apply Now
                </Link>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors text-lg font-semibold">
                  Send Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore current job opportunities at Zion Tech Group
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Senior AI Engineer</h3>
                <p className="text-gray-600 mb-4">Lead AI development projects and mentor junior engineers</p>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-600 font-medium">Full-time • Remote</span>
                  <Link to="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Apply
                  </Link>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Full-Stack Developer</h3>
                <p className="text-gray-600 mb-4">Build web applications using modern technologies</p>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-600 font-medium">Full-time • Hybrid</span>
                  <Link to="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;