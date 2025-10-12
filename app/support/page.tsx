import React from 'react';
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/main
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SupportPage: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4 xl font-bold text-white mb-6"  >Support</h1>
        <p className="text-lg text-gray-300 mb-8">Professional support services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default SupportPage;
=======
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get support from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Support</h1>
          <p className="text-lg text-gray-300 mb-8">Get support for our services.</p>
          
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
>>>>>>> origin/main
