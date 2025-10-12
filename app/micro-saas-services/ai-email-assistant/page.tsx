<<<<<<< HEAD

export default function AiEmailAssistantPage() {
  return (

        <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Email Assistant - Zion Tech Group</title>
        <h1 className="text-4xl font-boldtext-whitemb-6">Ai Email Assistant</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai email assistant services coming soon.</p>
          Contact Us
    
  );

      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiEmailAssistant</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai email assistant solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>  );
}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-6">Page</h1>
          <p className="text-lg text-gray-300 mb-8">Professional page services tailored to your business needs.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9874
