import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Team - Zion Tech Group</title>
        <meta name="description" content="Professional team solutions and services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Team</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional team solutions and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/ai-services"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}