import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FiveGSmartCitySolutionsPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Service - Zion Tech Group</title>
        <h1 className="text-4xl font-boldtext-white mb-6">5G Smart City Solutions</h1>
        <p className="text-lgtext-gray-300mb-8">Professional 5G smart city solutions by Zion Tech Group. Transform your business with our expert solutions.</p>
          Contact Us
  );

export default function Page() {
  return (
    
        <title>Page - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">Page</h1>
            <p className="text-lg text-gray-300 mb-8">Professional page services coming soon.</p>
            
              Contact Us

  );

=======
    <>
      <Helmet>
        <title>Five G Smart City Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional five g smart city solutions by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">5G Smart City Solutions</h1>
          <p className="text-lg text-gray-300 mb-8">Professional 5G smart city solutions by Zion Tech Group. Transform your business with our expert solutions.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
    <>
      <Helmet>
        <title>5G Smart City Solutions - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">5G Smart City Solutions</h1>
          <p className="text-lg text-gray-300 mb-8">Professional 5G smart city solutions services coming soon.</p>
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
=======
export default function FiveGSmartCitySolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title>5G Smart City Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional 5G smart city solutions by Zion Tech Group. Transform your city with our expert solutions." /></meta>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
        <h1 className="text-4xl font-bold text-white mb-6">5G Smart City Solutions</h1>
        <p className="text-lg text-gray-300 mb-8">Professional 5G smart city solutions coming soon.</p>
        <Link;</Link></Link>
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        ></Link>
          Contact Us;
          <ArrowRight className="w-5 h-5 ml-2" /></ArrowRight>
        </Link>
      </div>
    </div>  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
