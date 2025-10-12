import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiDocumentScannerPage() {
  return (
    <>
      <Helmet>
        <title>Ai Document Scanner - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Advanced Ai Document Scanner solutions powered by AI." />
=======
        <meta name="description" content="Professional ai document scanner services by Zion Tech Group. Transform your business with our expert solutions." />
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Document Scanner</h1>
          <p className="text-lg text-gray-300 mb-8">Advanced Ai Document Scanner solutions powered by AI.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}