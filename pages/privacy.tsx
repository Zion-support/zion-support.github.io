import React from 'react';
import Layout from '../components/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-lg text-gray-300">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-600 mb-6">
                  <strong>Last updated: </strong> January 15, 2024
                </p>
                
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-600 mb-4">
                    We collect information you provide directly to us, such as when you create an account,
                    contact us, or use our services. This may include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Name and contact information (email address, phone number, mailing address)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Payment information (credit card details, billing address)</li>
                    <li>Communication preferences</li>
                    <li>Any other information you choose to provide</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, security alerts, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Personalize and improve your experience</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
                  <p className="text-gray-600 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>In connection with a business transfer or acquisition</li>
                    <li>With trusted service providers who assist us in operating our services</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                  <p className="text-gray-600 mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights and Choices</h2>
                  <p className="text-gray-600 mb-4">
                    You have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to delete your personal information</li>
                    <li>The right to restrict processing of your information</li>
                    <li>The right to data portability</li>
                    <li>The right to object to processing</li>
                    <li>The right to withdraw consent</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-600 mb-4">
                    We use cookies and similar tracking technologies to collect and use personal information about you. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
                  <p className="text-gray-600 mb-4">
                    Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any personal information.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                  <p className="text-gray-600 mb-4">
                    Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-600 mb-4">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                  <p className="text-gray-600 mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600 mb-2">
                      <strong>Email:</strong> privacy@ziontechgroup.com
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Phone:</strong> +1 302 464 0950
                    </p>
                    <p className="text-gray-600">
                      <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}