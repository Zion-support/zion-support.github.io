import React from 'react';
const TermsPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using Zion Tech Group\'s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Description of Service',
      content: 'Zion Tech Group provides AI and IT solutions including but not limited to micro SAAS applications, cloud infrastructure services, mobile development, data analytics, and consulting services. We reserve the right to modify or discontinue the service at any time.'
    },
    {
      title: 'User Accounts',
      content: 'When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.'
    },
    {
      title: 'Acceptable Use',
      content: 'You may not use our service for any illegal or unauthorized purpose nor may you, in the use of the service, violate any laws in your jurisdiction (including but not limited to copyright laws).'
    },
    {
      title: 'Privacy Policy',
      content: 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.'
    },
    {
      title: 'Intellectual Property Rights',
      content: 'The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.'
    },
    {
      title: 'Termination',
      content: 'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.'
    },
    {
      title: 'Disclaimer',
      content: 'The information on this service is provided on an "as is" basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms relating to our service and the use of this service.'
    },
    {
      title: 'Governing Law',
      content: 'These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions.'
    },
    {
      title: 'Changes to Terms',
      content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - AI and IT Solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
            <p className="text-gray-400 text-center mb-12">Last updated: {lastUpdated}</p>
            
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                    {index + 1}. {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400">
                If you have any questions about these Terms of Service, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
