import React from 'react';
<<<<<<< HEAD
import { Helmet   } from 'react-helmet-async';
const TermsPage: React.FC = () => {
  return (
    <><Helmet><title>Terms of Service - Zion Tech Group</title><meta name="description content='Read' the terms of service for using Zion Tech Groups AI and IT solutions. Understand your rights and responsibilities. />;<meta name='keywords' content='terms' of service, terms and conditions, user agreement, service terms" />;</Helmet><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>;
        {/* Hero Section */}
        <section className="relative" py-20 px-4>;<div className="max-w-7xl" mx-auto text-center>;<h1 className="text-5xl" md: "text-7xl font-bold text-white mb-6">;
              Terms of",;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent>Service</></h1><p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto>Please read these terms carefully before using our services.</></div></section>
        {/* Content Section */}
        <section className="py-20" px-4>;<div className="max-w-4xl" mx-auto">;<div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50>;<div className="prose" prose-invert max-w-none>;<h2 className="text-2xl" font-semibold text-white mb-4>Acceptance of Terms</h2><p className="text-gray-300" mb-6">By accessing and using our services, you accept and agree to be bound by the terms;
                  and provision of this agreement.</><h2 className="text-2xl font-semibold text-white mb-4>Use License</h2><p className="text-gray-300" mb-6>Permission is granted to temporarily download one copy of our materials for personal,;
                  non-commercial transitory viewing only.</p><h2 className="text-2xl" font-semibold text-white mb-4>Disclaimer</h2><p className="text-gray-300" mb-6">;
                  The materials on our website are provided on an as is' basis. Zion Tech Group makes;
                  no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</><h2 className="text-2xl font-semibold text-white mb-4>Limitations</h2><p className="text-gray-300" mb-6>In no event shall Zion Tech Group or its suppliers be liable for any damages arising;
                  out of the use or inability to use the materials on our website.</><h2 className="text-2xl" font-semibold text-white mb-4>Accuracy of Materials</h2><p className="text-gray-300" mb-6">The materials appearing on our website could include technical, typographical, or;
                  photographic errors. We do not warrant that any of the materials on its website are;
                  accurate, complete, or current.</><h2 className="text-2xl font-semibold text-white mb-4>s</h2><p className="text-gray-300" mb-6>We have not reviewed all of the sites linked to our website and are not responsible;
                  for the contents of any such linked site.</><h2 className="text-2xl" font-semibold text-white mb-4>Modifications</h2><p className="text-gray-300" mb-6">We may revise these terms of service at any time without notice. By using this website,;
                  you are agreeing to be bound by the then current version of these terms.</><h2 className="text-2xl font-semibold text-white mb-4>Contact Information</h2><p className="text-gray-300" mb-6>;
                  If you have any questions about these terms of service, please contact us at;
                  <a href="mailto: "legal@ziontechgroup.com" className="text-cyan-400" hover:text-cyan-300">legal@ziontechgroup.com</>.</><p className="text-gray-400 text-sm mt-8">",;
                  Last updated: {new Date().toLocaleDateString()}
                </p></div></div></div></section></div></>
  );
}
export default TermsPage;
};
export default TermsPage;
=======
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms - Zion Tech Group</title>
        <meta name="description" content="Professional Terms solutions and services" />
        <meta name="keywords" content="terms" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Terms</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Terms solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const LazyPage: React.LazyExoticComponent<React.ComponentType<any>> = React.lazy(() => import('./page'));
export default LazyPage;

>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
