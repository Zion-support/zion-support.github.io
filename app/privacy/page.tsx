// import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Zion Tech Group',
  description: 'Learn about how Zion Tech Group collects, uses, and protects your personal information in accordance with privacy laws.',
  keywords: 'privacy policy, data protection, GDPR, privacy rights, information security',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Company information (company name, industry, size)</li>
              <li>Service preferences and requirements</li>
              <li>Communication records and support tickets</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to provide, maintain, and improve our services.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide and deliver our AI, micro SaaS, and IT services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Improve our services and develop new features</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
            <p className="text-gray-600">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers who assist in our operations</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection practices</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete your personal information</li>
              <li>Right to restrict processing of your information</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar technologies to enhance your experience on our website 
              and to analyze usage patterns.
            </p>
            <p className="text-gray-600">
              You can control cookie settings through your browser preferences, though some 
              features may not function properly if cookies are disabled.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@ziontechgroup.com<br />
                <strong>Phone:</strong> +1 302 464 0950<br />
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}