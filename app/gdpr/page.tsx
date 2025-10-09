import React from 'react';

const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">GDPR Compliance</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Last updated:</strong> October 8, 2024
            </p>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights Under GDPR</h2>
              <p className="text-gray-300 mb-6">
                The General Data Protection Regulation (GDPR) gives you specific rights regarding your 
                personal data. We are committed to protecting your privacy and ensuring compliance with 
                GDPR requirements.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Data Subject Rights</h2>
              <ul className="text-gray-300 mb-6 list-disc list-inside">
                <li><strong className="text-white">Right of Access:</strong> You can request copies of your personal data</li>
                <li><strong className="text-white">Right to Rectification:</strong> You can request correction of inaccurate data</li>
                <li><strong className="text-white">Right to Erasure:</strong> You can request deletion of your personal data</li>
                <li><strong className="text-white">Right to Restrict Processing:</strong> You can request limitation of data processing</li>
                <li><strong className="text-white">Right to Data Portability:</strong> You can request transfer of your data</li>
                <li><strong className="text-white">Right to Object:</strong> You can object to processing of your data</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Data Processing Lawful Basis</h2>
              <p className="text-gray-300 mb-6">
                We process your personal data based on the following lawful grounds:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside">
                <li>Consent: When you have given clear consent for processing</li>
                <li>Contract: When processing is necessary for contract performance</li>
                <li>Legal Obligation: When processing is required by law</li>
                <li>Legitimate Interest: When processing is necessary for our legitimate business interests</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="text-gray-300 mb-6">
                We retain your personal data only for as long as necessary to fulfill the purposes 
                outlined in our privacy policy, unless a longer retention period is required by law.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Exercising Your Rights</h2>
              <p className="text-gray-300 mb-6">
                To exercise any of your GDPR rights, please contact us using the information below. 
                We will respond to your request within 30 days.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-6">
                For GDPR-related inquiries, please contact our Data Protection Officer:
              </p>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong className="text-white">Email:</strong> dpo@ziontechgroup.com<br />
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

export default GDPRPage;