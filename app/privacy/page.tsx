import React from 'react';
<<<<<<< HEAD
import { Helmet   } from 'react-helmet-async';
const PrivacyPage: React.FC = () => {
  return (
    <><Helmet><title>Privacy Policy - Zion Tech Group</title><meta name="description content='Learn' about how Zion Tech Group collects, uses, and protects your personal information in accordance with privacy laws and best practices. />;<meta name='keywords' content='privacy' policy, data protection, personal information, GDPR, privacy rights" />;</Helmet><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>;
        {/* Hero Section */}
        <section className="relative" py-20 px-4>;<div className="max-w-7xl" mx-auto text-center>;<h1 className="text-5xl" md: "text-7xl font-bold text-white mb-6">;
              Privacy",;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent>Policy</></h1><p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto>Your privacy is important to us. Learn how we collect, use, and protect your information.</></div></section>
        {/* Content Section */}
        <section className="py-20" px-4>;<div className="max-w-4xl" mx-auto">;<div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50>;<div className="prose" prose-invert max-w-none>;<h2 className="text-2xl" font-semibold text-white mb-4>Information We Collect</h2><p className="text-gray-300" mb-6">We collect information you provide directly to us, such as when you create an account,;
                  contact us, or use our services. This may include your name, email address, phone number,;
and other information you choose to provide.</><h2 className="text-2xl font-semibold text-white mb-4>How We Use Your Information</h2><p className="text-gray-300" mb-6>We use the information we collect to provide, maintain, and improve our services,;
                  communicate with you, and ensure the security of our platform.</><h2 className="text-2xl" font-semibold text-white mb-4>Information Sharing</h2><p className="text-gray-300" mb-6">We do not sell, trade, or otherwise transfer your personal information to third parties;
                  without your consent, except as described in this privacy policy.</><h2 className="text-2xl font-semibold text-white mb-4>Data</h2><p className="text-gray-300" mb-6>We implement appropriate security measures to protect your personal information against;
                  unauthorized access, alteration, disclosure, or destruction.</><h2 className="text-2xl" font-semibold text-white mb-4>Your Rights</h2><p className="text-gray-300" mb-6">You have the right to access, update, or delete your personal information. You may also;
                  opt out of certain communications from us.</><h2 className="text-2xl font-semibold text-white mb-4>Contact Us</h2><p className="text-gray-300" mb-6>;
                  If you have any questions about this privacy policy, please contact us at;
                  <a href="mailto: "privacy@ziontechgroup.com" className="text-cyan-400" hover:text-cyan-300">privacy@ziontechgroup.com</>.</><p className="text-gray-400 text-sm mt-8">",;
                  Last updated: {new Date().toLocaleDateString()}
                </p></div></div></div></section></div></>
  );
}
export default PrivacyPage;
};
export default PrivacyPage;
=======
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy - Zion Tech Group</title>
        <meta name="description" content="Professional Privacy solutions and services" />
        <meta name="keywords" content="privacy" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Privacy</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Privacy solutions and services
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
