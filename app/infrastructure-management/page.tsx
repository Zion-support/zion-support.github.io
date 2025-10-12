import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function InfrastructureManagementPage() {
  return (
    <><Helmet>
        <title>InfrastructureManagement - Zion Tech Group</title>
        <meta name="description" content="Professional infrastructure management solutions and services." />
      </Helmet>
    <><Helmet>
        <title>Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Professional infrastructure management by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Infrastructure Management</h1>
          <p className="text-lg text-gray-300 mb-8">Professional infrastructure management coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div></>
  );

      </>
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <h2 className="w-5h-5ml-2" />Coming Soon</h2>
          <p className="w-5h-5ml-2">We're developing comprehensive infrastructure management services. Contact us to discuss your infrastructure needs.
          </p>
          <Link to="/contact" className="bg-gradient-to-rfrom-purple-600to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700transition-all duration-300">Contact Us;
          </Link>
        </div>
      </section>
    </div>  );
}
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">InfrastructureManagement</h1>
          <p className="text-lg text-gray-300 mb-8">Professional infrastructure management solutions coming soon.</p>
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
