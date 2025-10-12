import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function TermsPage() {
  return (
    
        <title>Terms - Zion Tech Group</title>
export default TermsPage;
'use client';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function TermsPage() {
  return (

            <h1 className="text-4xl font-bold text-white mb-6">Terms</h1>
            <p className="text-lg text-gray-300 mb-8">Professional terms services coming soon.</p>
            
              Contact Us

      </>
  );
}

    <></>
      <Helmet></Helmet>
    <><Helmet>
        <title>Terms - Zion Tech Group</title>
        <meta name="description" content="Professional terms solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Terms</h1>
          <p className="text-lg text-gray-300 mb-8">Professional terms solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div></>
  );
}
