import React from 'react';
import ModernLayout from '../components/layout/ModernLayout';
import { FileText, Shield, Users, Calendar, Mail, Phone, MapPin, AlertTriangle } from 'lucide-react';

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <ModernLayout
      title="Terms of Service | Zion Tech Group"
      description="Read our terms of service to understand the rules and conditions for using Zion Tech Group's services and website."
      canonical="https://ziontechgroup.com/terms"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services or website.
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
                <FileText className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Agreement to Terms</h3>
                  <p className="text-blue-800">
                    By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>
              </div>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>
              These Terms of Service ("Terms") govern your use of the Zion Tech Group website located at 
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:text-blue-700"> https://ziontechgroup.com</a> 
              and any related services provided by Zion Tech Group ("we," "us," or "our").
            </p>
            <p>
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, 
              then you may not access our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>Zion Tech Group provides the following services:</p>
            <ul>
              <li>Technology consulting and advisory services</li>
              <li>AI and machine learning solutions</li>
              <li>Cloud architecture and migration services</li>
              <li>Cybersecurity and compliance solutions</li>
              <li>Software development and implementation</li>
              <li>Digital transformation consulting</li>
            </ul>

            <h2>3. User Accounts and Registration</h2>
            <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your account and password</li>
              <li>Restricting access to your computer and devices</li>
              <li>Accepting responsibility for all activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>

            <h2>4. Acceptable Use Policy</h2>
            <p>You agree not to use our services to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services</li>
              <li>Use our services for any illegal or unauthorized purpose</li>
            </ul>

            <h2>5. Intellectual Property Rights</h2>
            <p>The content, features, and functionality of our services are owned by Zion Tech Group and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
            <p>You may not:</p>
            <ul>
              <li>Copy, modify, or distribute our content without permission</li>
              <li>Use our trademarks or service marks without authorization</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Remove or alter any copyright or proprietary notices</li>
            </ul>

            <h2>6. Privacy Policy</h2>
            <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.</p>

            <h2>7. Service Availability and Modifications</h2>
            <p>We strive to maintain high availability of our services, but we do not guarantee that our services will be available at all times. We may:</p>
            <ul>
              <li>Modify, suspend, or discontinue any part of our services</li>
              <li>Perform maintenance that may temporarily affect service availability</li>
              <li>Update our services to improve functionality and security</li>
            </ul>

            <h2>8. Payment Terms</h2>
            <p>For paid services, the following terms apply:</p>
            <ul>
              <li>All fees are due upon receipt of invoice unless otherwise agreed</li>
              <li>Late payments may result in service suspension</li>
              <li>Prices are subject to change with 30 days' notice</li>
              <li>Refunds are handled on a case-by-case basis</li>
            </ul>

            <h2>9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
            <ul>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Service interruptions or downtime</li>
              <li>Data loss or corruption</li>
              <li>Third-party actions or content</li>
            </ul>
            <p>Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>

            <h2>10. Disclaimer of Warranties</h2>
            <p>Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to:</p>
            <ul>
              <li>Warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy or completeness of information</li>
            </ul>

            <h2>11. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless Zion Tech Group and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from:</p>
            <ul>
              <li>Your use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you submit or transmit</li>
            </ul>

            <h2>12. Termination</h2>
            <p>We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including:</p>
            <ul>
              <li>Breach of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of fees</li>
              <li>Violation of our Acceptable Use Policy</li>
            </ul>
            <p>Upon termination, your right to use our services will cease immediately.</p>

            <h2>13. Governing Law and Dispute Resolution</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.</p>
            <p>Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</p>

            <h2>14. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will notify users of any material changes by:</p>
            <ul>
              <li>Posting the updated Terms on our website</li>
              <li>Sending email notifications to registered users</li>
              <li>Updating the "Last Updated" date</li>
            </ul>
            <p>Your continued use of our services after any changes constitutes acceptance of the updated Terms.</p>

            <h2>15. Severability</h2>
            <p>If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.</p>

            <h2>16. Entire Agreement</h2>
            <p>These Terms constitute the entire agreement between you and Zion Tech Group regarding the use of our services and supersede all prior agreements and understandings.</p>

            <h2>17. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:legal@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
                      legal@ziontechgroup.com
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
                    <h4 className="font-semibold text-gray-900">Legal Department</h4>
                    <p className="text-gray-600">
                      For legal inquiries and notices<br />
                      <a href="mailto:legal@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
                        legal@ziontechgroup.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2>18. Additional Terms for Specific Services</h2>
            <p>Certain services may have additional terms and conditions that apply. These additional terms will be provided when you sign up for or use those specific services and are incorporated into these Terms by reference.</p>

            <h2>19. Force Majeure</h2>
            <p>We shall not be liable for any failure to perform our obligations under these Terms where such failure is a result of circumstances beyond our reasonable control, including but not limited to:</p>
            <ul>
              <li>Natural disasters</li>
              <li>Government actions</li>
              <li>War or civil unrest</li>
              <li>Technical failures beyond our control</li>
            </ul>

            <h2>20. Third-Party Services</h2>
            <p>Our services may integrate with or link to third-party services. We are not responsible for the content, privacy policies, or practices of any third-party services. Your use of third-party services is at your own risk.</p>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mt-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Notice</h3>
                  <p className="text-yellow-800">
                    These Terms of Service are legally binding. By using our services, you acknowledge that you have read, 
                    understood, and agree to be bound by these terms. If you have any questions or concerns, please contact 
                    our legal department before using our services.
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