import React from 'react';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Last updated:</strong> October 8, 2024
            </p>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit our website. They help us provide you with a better experience by remembering your 
                preferences and enabling certain functionality.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 mb-6">
                We use cookies to analyze website traffic, personalize content, remember your preferences, 
                and improve our services. We also use cookies for security purposes and to prevent fraud.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              <ul className="text-gray-300 mb-6 list-disc list-inside">
                <li><strong className="text-white">Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong className="text-white">Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
                <li><strong className="text-white">Marketing Cookies:</strong> Used to track visitors across websites for advertising</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-300 mb-6">
                You can control and manage cookies through your browser settings. Most browsers allow you 
                to refuse cookies or delete them. However, disabling cookies may affect the functionality 
                of our website.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies, please contact us at:
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

export default CookiesPage;