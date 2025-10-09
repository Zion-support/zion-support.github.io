import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group's AI and IT solutions." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-24">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-6 text-gray-300">
              <p className="text-sm text-gray-400">Last updated: January 1, 2024</p>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you create an account, contact us, or use our services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure security.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking</h2>
                <p>We use cookies and similar tracking technologies to enhance your experience and analyze usage patterns.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;