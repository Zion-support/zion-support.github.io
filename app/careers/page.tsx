import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
export default function CareersPage() {
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
        <title>Careers - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="description" content="Join our innovative team." />
=======
        <meta name="description" content="Professional careers services by Zion Tech Group. Transform your business with our expert solutions." />
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
        <meta name = "description" content="Join our team of AI and IT experts." />
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Careers</h1>
<<<<<<< HEAD
          <p className="text-lg text-gray-300 mb-8">Join our innovative team.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
=======
          <p className="text-lg text-gray-300 mb-8">Professional careers services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>;
  );
}