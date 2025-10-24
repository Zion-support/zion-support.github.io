import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    <div>
      <Head>
        <title>Ai Content Management - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Content Management
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            ai-content-management services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
import React from 'react';

import {Helmet} from 'react-helmet-async';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AIContentManagement() {

  return (
    <>
      <title>AI Content Management - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">AI Content Management</h1>
            <p className="text-lg text-gray-300 mb-8">Professional AI content management services coming soon.</p>

              Contact Us

  );

export default function AicontentmanagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Content Management - Zion Tech Group</title>
        <meta name="description" content="Professional ai content management services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Content Management</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai content management services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
