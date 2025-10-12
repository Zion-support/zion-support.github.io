import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group<div></title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company dedicated to transforming businesses through innovative AI and IT solutions." /></div>
      </Helmet></div>
      <div><div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center"></div></div>
        <div className="text-center"></div></div></div>
          <h1 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-lg text-gray-300 mb-8">We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.<div></p>
          <div className="space-x-4"></div></div></div>
            <Link to="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Work With Us
              <div><ArrowRight className="inline-block ml-2 h-4 w-4" />
            </Link></div>
            <Link to="/services" className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"></div>
              Our Services
            <div></Link>
          </div></div>
        </div></div>
      </div></div>
    </>
  );
}