import React from 'react';
import React from 'react';
import React from 'react';
import { Helmet  } from "react-helmet-async";
const PrivacyPage: React.FC = () => {
  return (
    <>
      <EnhancedSEO title="Page - Zion Tech Group"
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs."
        keywords="page, business solutions, technology services, professional services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">;
          <div className="max-w-7 xl mx-auto text-center">;
            <h1 className="text-5 xl md:text-7 xl font-bold text-white mb-6">;
              Privacy;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                Policy;
              </span>;
            </h1>;
            <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">;
              Your privacy is important to us. Learn how we collect, use, and protect your information.;
            </p>;
          </>
        </section>;
        {/* Content Section */}
        <section className="py-20 px-4">;
          <div className="max-w-4 xl mx-auto">;
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2 xl p-8 border border-slate-700/50">;
              <div className="prose prose-invert max-w-none">;
                <h2 className="text-2 xl font-semibold text-white mb-4">Information We Collect</h2>;
                <p className="text-gray-300 mb-6">;
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include your name, email address, phone number, 
                  and other information you choose to provide.;
                </p>;
                <h2 className="text-2 xl font-semibold text-white mb-4">How We Use Your Information</h2>;
                <p className="text-gray-300 mb-6">;
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you, and ensure the security of our platform.;
                </p>;
                <h2 className="text-2 xl font-semibold text-white mb-4">Information Sharing</h2>;
                <p className="text-gray-300 mb-6">;
                  We do not sell, trade, or otherwise transfer your personal information to third parties;
                  without your consent, except as described in this privacy policy.;
                </p>;
                <h2 className="text-2 xl font-semibold text-white mb-4">Data </h2>;
                <p className="text-gray-300 mb-6">;
                  We implement appropriate security measures to protect your personal information against;
                  unauthorized access, alteration, disclosure, or destruction.;
                </p>;
                <h2 className="text-2 xl font-semibold text-white mb-4">Your Rights</h2>;
                <p className="text-gray-300 mb-6">;
                  You have the right to access, update, or delete your personal information. You may also;
                  opt out of certain communications from us.;
                </p>;
                <h2 className="text-2 xl font-semibold text-white mb-4">Contact Us</h2>;
                <p className="text-gray-300 mb-6">;
                  If you have any questions about this privacy policy, please contact us at;
                  <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">;
                    privacy@ziontechgroup.com;
                  </a>.;
                </p>;
                <p className="text-gray-400 text-sm mt-8">;
                  Last updated: {new Date().toLocaleDateString()}
                </p>;
              </>
            </>
          </>
        </section>;
ursor/fix-errors-and-merge-to-main-94 a7
      </>
    </>
  );
};

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7 xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
                Why Choose Our Page Services?
              </>
              <p >
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </>
            </>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div >
                    {feature.icon}
                  </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</>
                  <p>{feature.description}</>
                </>
              ))}
            </>
          </>
        </>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4 xl mx-auto text-center">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6">
              Ready to Get Started?
            </>
            <p >
              Let's discuss how our page services can help your business succeed.
            </>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
              <Link to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View All Services
              </>
            </>
          </>
        </>
      </>
    </>
  )};

const page = React.lazy(() => import('./page'));
export default page;
ursor/fix-errors-and-merge-to-main-94 a7
