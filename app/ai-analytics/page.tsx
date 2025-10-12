import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiAnalytics() {
  return (
<<<<<<< HEAD
    
        <title>AiAnalytics - Zion Tech Group</title>
=======
export default AiAnalyticsPage;
const AiAnalyticsPage: React.FC = () => {
  return (
<<<<<<< HEAD

        <>
      <title>AiAnalytics - Zion Tech Group</title>
>>>>>>> origin/main
      
            <h1 className="text-4xl font-bold text-white mb-6">AiAnalytics</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aianalytics services coming soon.</p>
            
              Contact Us

      </>
  );
}

=======
<<<<<<< HEAD
    <>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="AI Analytics services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="ai-analytics, AI solutions, IT services" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AI Analytics</h1>
          <p className="text-lg text-gray-300 mb-8">Professional AI analytics services coming soon.</p>
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
};
export default AiAnalyticsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional AI analytics services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
        <h1 className="text-4xl font-bold text-white mb-6">AI Analytics</h1>
        <p className="text-lg text-gray-300 mb-8">Professional AI analytics services coming soon.</p>
        <Link;</Link></Link>
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        ></Link>
          Contact Us;
          <ArrowRight className="w-5 h-5 ml-2" /></ArrowRight>
        </Link>
      </div>
    </div>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
