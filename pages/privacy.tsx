import React from 'react';
import ModernLayout from '../components/layout/ModernLayout';
import { Shield, Eye, Lock, Users, Calendar, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <ModernLayout
      title="Privacy Policy | Zion Tech Group"
      description="Learn how Zion Tech Group collects, uses, and protects your personal information in accordance with privacy laws and regulations."
      canonical="https://ziontechgroup.com/privacy"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your privacy is important to us. Learn how we protect and handle your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {currentDate}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Commitment to Privacy</h3>
                  <p className="text-blue-800">
                    Zion Tech Group is committed to protecting your privacy and ensuring the security of your personal information. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                    or use our services.
                  </p>
                </div>
              </div>
            </div>

            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company information</li>
              <li><strong>Service Information:</strong> Details about the services you're interested in or currently using</li>
              <li><strong>Communication Data:</strong> Messages, feedback, and other communications you send to us</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Send you marketing materials (with your consent)</li>
              <li>Analyze website usage and improve user experience</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and security threats</li>
            </ul>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
              <li><strong>Consent:</strong> We may share information with your explicit consent</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information, including:</p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>

            <h2>5. Your Rights and Choices</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
            </ul>

            <h2>6. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to:</p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertisements</li>
              <li>Improve website functionality and performance</li>
            </ul>
            <p>You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.</p>

            <h2>7. Third-Party Services</h2>
            <p>Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.</p>

            <h2>8. International Data Transfers</h2>
            <p>Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.</p>

            <h2>9. Children's Privacy</h2>
            <p>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>

            <h2>10. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to:</p>
            <ul>
              <li>Provide our services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
            <p>When we no longer need your information, we will securely delete or anonymize it.</p>

            <h2>11. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
            <ul>
              <li>Posting the updated policy on our website</li>
              <li>Sending you an email notification</li>
              <li>Updating the "Last Updated" date</li>
            </ul>
            <p>Your continued use of our services after any changes constitutes acceptance of the updated policy.</p>

            <h2>12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:privacy@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
                      privacy@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Data Protection Officer</h4>
                    <p className="text-gray-600">
                      For GDPR-related inquiries<br />
                      <a href="mailto:dpo@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
                        dpo@ziontechgroup.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2>13. GDPR Compliance</h2>
            <p>If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR):</p>
            <ul>
              <li><strong>Right to be Informed:</strong> You have the right to be informed about how we process your data</li>
              <li><strong>Right of Access:</strong> You can request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> You can request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> You can request deletion of your data ("right to be forgotten")</li>
              <li><strong>Right to Restrict Processing:</strong> You can request limitation of data processing</li>
              <li><strong>Right to Data Portability:</strong> You can request your data in a portable format</li>
              <li><strong>Right to Object:</strong> You can object to certain types of processing</li>
              <li><strong>Rights Related to Automated Decision Making:</strong> You have rights regarding automated processing</li>
            </ul>

            <h2>14. California Privacy Rights</h2>
            <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
            <ul>
              <li>Right to know what personal information is collected and how it's used</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mt-8">
              <div className="flex items-start space-x-3">
                <Eye className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Transparency Commitment</h3>
                  <p className="text-yellow-800">
                    We believe in transparency and are committed to being clear about how we handle your data. 
                    If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ModernLayout>
  );
}