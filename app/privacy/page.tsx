import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Last updated:</strong> October 8, 2024
            </p>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support. This may include your name, email address, 
                phone number, and any other information you choose to provide.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send you technical notices and support messages, and communicate 
                with you about products, services, and promotional offers.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <p className="text-gray-300 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this privacy policy. We may share your 
                information with trusted third parties who assist us in operating our website and 
                conducting our business.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet or electronic storage is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-6">
                We use cookies and similar tracking technologies to enhance your experience on our 
                website, analyze usage patterns, and personalize content and advertisements.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-300 mb-6">
                You have the right to access, update, or delete your personal information. You may also 
                opt out of certain communications from us. To exercise these rights, please contact us 
                using the information provided below.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong className="text-white">Email:</strong> privacy@ziontechgroup.com<br />
                  <strong className="text-white">Phone:</strong> +1 (302) 464-0950<br />
                  <strong className="text-white">Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;