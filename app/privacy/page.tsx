'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Shield, Database, User, Settings } from 'lucide-react';

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2024';

  const dataTypes = [
    {
      category: 'Personal Information',
      icon: <User className="w-6 h-6" />,
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Newsletter signups', 'Account creation']
    },
    {
      category: 'Usage Data',
      icon: <Database className="w-6 h-6" />,
      description: 'Information about how you use our website and services',
      examples: ['Page views', 'Time spent', 'Features used', 'Device information']
    },
    {
      category: 'Technical Data',
      icon: <Settings className="w-6 h-6" />,
      description: 'IP address, browser type, operating system, cookies',
      examples: ['Analytics data', 'Performance metrics', 'Error logs']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy, Zion Tech Group" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <Calendar className="h-4 w-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
            <p className="text-gray-300 mb-6">
              We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                      {type.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{type.category}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{type.description}</p>
                  <ul className="space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="text-gray-400 text-sm">• {example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-6">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure security.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• Provide and maintain our services</li>
              <li>• Process transactions and send related information</li>
              <li>• Send technical notices and support messages</li>
              <li>• Respond to your comments and questions</li>
              <li>• Improve our services and develop new features</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">3. Information Sharing</h2>
            <p className="text-gray-300 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">4. Data Security</h2>
            <p className="text-gray-300 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">5. Your Rights</h2>
            <p className="text-gray-300 mb-6">
              You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">6. Cookies and Tracking</h2>
            <p className="text-gray-300 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website and analyze usage patterns.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">7. Changes to This Policy</h2>
            <p className="text-gray-300 mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">8. Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this privacy policy, please contact us at privacy@ziontechgroup.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react;'
import { Helmet } from 'react-helmet-async;'
const PrivacyPage: React.FC = () => {
  return (
    <></>
      <EnhancedSEO
        title="Page - Zion Tech Group""
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""
        keywords="page, business solutions, technology services, professional services""
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        {/* Hero Section */}
        <section className="relative py-20 px-4">;""
          <div className="max-w-7xl mx-auto text-center">;""
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;""
              Privacy;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;""
                Policy;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;""
              Your privacy is important to us. Learn how we collect, use, and protect your information.;
            </p>
          </div>
        </section>
        {/* Content Section */}
        <section className="py-20 px-4">;""
          <div className="max-w-4xl mx-auto">;""
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">;""
              <div className="prose prose-invert max-w-none">;""
                <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>;""
                <p className="text-gray-300 mb-6">;""
                  We collect information you provide directly to us, such as when you create an account,
                  contact us, or use our services. This may include your name, email address, phone number,
                  and other information you choose to provide.;
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>;""
                <p className="text-gray-300 mb-6">;""
                  We use the information we collect to provide, maintain, and improve our services,
                  communicate with you, and ensure the security of our platform.;
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>;""
                <p className="text-gray-300 mb-6">;""
                  We do not sell, trade, or otherwise transfer your personal information to third parties;
                  without your consent, except as described in this privacy policy.;
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4">Data </h2>;""
                <p className="text-gray-300 mb-6">;""
                  We implement appropriate security measures to protect your personal information against;
                  unauthorized access, alteration, disclosure, or destruction.;
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>;""
                <p className="text-gray-300 mb-6">;""
                  You have the right to access, update, or delete your personal information. You may also;
                  opt out of certain communications from us.;
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>;""
                <p className="text-gray-300 mb-6">;""
                  If you have any questions about this privacy policy, please contact us at;
                  <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">;""
                    privacy@ziontechgroup.com;
                  </a>.;
                </p>
                <p className="text-gray-400 text-sm mt-8">;""
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>
import SEOHead from '../components/SEOHead';

const PagePage: React.FC = () => {}
  return ()
    <>{}</>
      <SEOHead>
        title="page - Zion Tech Group"
        description="Zion Tech Group page service page"

const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEOHead title ="privacy - Zion Tech Group - Zion Tech Group"";
        description="Zion Tech Group privacy service page"";

      />
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">privacy - Zion Tech Group</h1>";
          <p className ="text-gray-300">Coming soon...</p>";
        </div>
      </div>
    </>

  )
    },
    {}
export default PagePage;

  ),
};
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">""
                Why Choose Our Page Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">""
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">""
              {features.map((feature, index) => (
                <div key={index} className="text-center">""
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                  <p className="text-gray-300">{feature.description}</p>""
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">""
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">""
              Let's discuss how our page services can help your business succeed.''
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""
              </Link>
              <Link
                to="/services""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
        <div className="container mx-auto px-4 py-20"></div>
          <h1>Privacy</h1>
          <p className="text-xl text-gray-600"></p>
            This page is under development. Please check back soon for more information about our privacy services.
          </p>;
        </div>;
      </div>;
    </div>;
  )};
const page = React.lazy(() => import('./page'));''
export default page;

