<<<<<<< HEAD
<<<<<<< HEAD


=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AdvancedSecuritySuitePage() {
  return (
    <>
      <Helmet>
        <title>Advanced Security Suite - Zion Tech Group</title>
        <meta name="description" content="Professional advanced security suite services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Advanced Security Suite</h1>
          <p className="text-lg text-gray-300 mb-8">Professional advanced security suite services coming soon.</p>
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
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AdvancedSecuritySuite() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <>
      <Helmet >
        <title>Advanced Security Suite - Zion Tech Group</title>
        <meta name = "description" content="Comprehensive security solutions for enterprise protection." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Advanced Security Suite</h1>
          <p className="text-lg text-gray-300">Advanced security solutions coming soon.</p>
        </div>
      </div>
    </>;
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
