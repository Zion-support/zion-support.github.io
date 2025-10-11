import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's privacy policy. Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: January 1, 2024</p>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support. This may include your name, email address, 
                phone number, company information, and any other information you choose to provide.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send you technical notices and support messages, and communicate 
                with you about products, services, and promotional offers.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this privacy policy. We may share your 
                information with trusted third parties who assist us in operating our website and 
                conducting our business.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet or electronic storage is 100% secure.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-6">
                You have the right to access, update, or delete your personal information. You may also 
                opt out of certain communications from us. To exercise these rights, please contact us 
                using the information provided below.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this privacy policy, please contact us at:
                <br />
                Email: privacy@ziontechgroup.com
                <br />
                Phone: +1 (555) 123-4567
                <br />
                Address: New York, NY
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;