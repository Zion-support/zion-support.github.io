import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import { Helmet , DocumentTextIcon, 
  ScaleIcon, 
  ShieldCheckIcon, 
  ExclamationTriangleIcon, 
  CheckCircleIcon, 
  UserIcon;'}
 } from 'lucide-react';

export default function TermsPage() {
  const lastUpdated = "January 15, 2024";
>>>>>>> cursor/fix-errors-and-merge-to-main-bef6

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>TermsPage - Zion Tech Group</title>
        <meta name="description" content="TermsPage page for Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">TermsPage</h1>
          <p className="text-lg text-gray-300">
            This is the TermsPage page for Zion Tech Group.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
=======

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          TermsPage
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          This page is coming soon. Please check back later.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/analyze-improve-and-deploy-application-705a
=======
        <title>Terms of Service - Zion Tech Group</title>'
        <meta name="description" content="Read Zion Tech Group's Terms of Service to understand the terms and conditions for using our AI and IT solutions." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, legal terms" />
      </Helmet>
      }
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Please read these terms carefully before using our services
            </p>
            <p className="text-lg text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Agreement Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">'
                These terms govern your use of Zion Tech Group's AI and IT services and solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DocumentTextIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Clear Terms</h3>
                <p className="text-gray-300">
                  We provide clear, understandable terms that explain your rights and responsibilities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ScaleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Fair Agreement</h3>
                <p className="text-gray-300">
                  Our terms are designed to be fair and balanced for both parties.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Legal Protection</h3>
                <p className="text-gray-300">
                  We ensure compliance with applicable laws and regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-8">1. Acceptance of Terms</h2>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 mb-8">
                <p className="text-gray-300 mb-6">'
                  By accessing or using Zion Tech Group's services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                  prohibited from using or accessing our services.
                </p>
                <p className="text-gray-300">
                  These terms apply to all visitors, users, and others who access or use our services.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">2. Description of Services</h2>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 mb-8">
                <p className="text-gray-300 mb-6">
                  Zion Tech Group provides AI and IT solutions including but not limited to:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>• Artificial Intelligence and Machine Learning services</li>
                  <li>• Cybersecurity solutions and consulting</li>
                  <li>• Cloud infrastructure and management services</li>
                  <li>• Digital transformation consulting</li>
                  <li>• Micro SaaS application development</li>
                  <li>• 5G technology solutions</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">3. User Responsibilities</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <UserIcon className="w-6 h-6 text-purple-400" />
                    Account Security
                  </h3>
                  <p className="text-gray-300">
                    You are responsible for maintaining the confidentiality of your account credentials 
                    and for all activities that occur under your account.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-400" />
                    Compliance
                  </h3>
                  <p className="text-gray-300">
                    You agree to use our services in compliance with all applicable laws, regulations, 
                    and these terms. You will not use our services for any unlawful or prohibited purpose.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <ExclamationTriangleIcon className="w-6 h-6 text-yellow-400" />
                    Prohibited Uses
                  </h3>
                  <p className="text-gray-300">
                    You may not use our services to transmit, distribute, or store any material that is 
                    illegal, harmful, threatening, abusive, or violates any third-party rights.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">4. Intellectual Property Rights</h2>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 mb-8">
                <p className="text-gray-300 mb-6">
                  All content, trademarks, and intellectual property rights in our services are owned by 
                  Zion Tech Group or our licensors. You may not use, copy, or distribute any content 
                  without our express written permission.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Our Rights</h4>
                    <p className="text-gray-300">We retain all rights to our proprietary technology, software, and content.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Your Rights</h4>
                    <p className="text-gray-300">You retain ownership of your data and content that you provide to us.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">License</h4>
                    <p className="text-gray-300">We grant you a limited, non-exclusive license to use our services as permitted by these terms.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">5. Payment Terms</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Fees and Billing</h3>
                  <p className="text-gray-300">
                    Service fees are as specified in your service agreement. All fees are non-refundable 
                    unless otherwise specified in writing.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Payment Methods</h3>
                  <p className="text-gray-300">
                    We accept various payment methods including credit cards, bank transfers, and other 
                    approved payment methods as specified in your agreement.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Late Payments</h3>
                  <p className="text-gray-300">
                    Late payments may result in service suspension or termination. We reserve the right 
                    to charge late fees as specified in your agreement.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">6. Service Availability</h2>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 mb-8">
                <p className="text-gray-300 mb-6">
                  While we strive to provide continuous service availability, we do not guarantee 
                  uninterrupted access to our services. We may experience downtime for maintenance, 
                  updates, or due to circumstances beyond our control.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Scheduled Maintenance</h4>
                    <p className="text-gray-300">We will provide advance notice of scheduled maintenance when possible.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Emergency Maintenance</h4>
                    <p className="text-gray-300">Emergency maintenance may be performed without advance notice to ensure service security.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Force Majeure</h4>
                    <p className="text-gray-300">We are not liable for service interruptions due to circumstances beyond our reasonable control.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">7. Limitation of Liability</h2>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 mb-8">
                <p className="text-gray-300 mb-6">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages, including but not 
                  limited to loss of profits, data, or business opportunities.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Maximum Liability</h4>
                    <p className="text-gray-300">Our total liability shall not exceed the amount paid by you for the services in the 12 months preceding the claim.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Exclusions</h4>
                    <p className="text-gray-300">This limitation does not apply to damages caused by our gross negligence or willful misconduct.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">8. Termination</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Termination by You</h3>
                  <p className="text-gray-300">
                    You may terminate your use of our services at any time by providing written notice 
                    as specified in your service agreement.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Termination by Us</h3>
                  <p className="text-gray-300">
                    We may terminate or suspend your access to our services immediately, without prior 
                    notice, for any reason, including breach of these terms.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Effect of Termination</h3>
                  <p className="text-gray-300">
                    Upon termination, your right to use our services will cease immediately. We may 
                    delete your data after a reasonable period as specified in our data retention policy.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">9. Governing Law</h2>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 mb-8">
                <p className="text-gray-300 mb-6">
                  These terms shall be governed by and construed in accordance with the laws of the 
                  State of Delaware, without regard to its conflict of law provisions.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Jurisdiction</h4>
                    <p className="text-gray-300">Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Delaware.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Severability</h4>
                    <p className="text-gray-300">If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">10. Contact Information</h2>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8">
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1-302-464-0950</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Our legal team is available to help clarify any questions you may have
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:legal@ziontechgroup.com"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Legal Team
              </a>
              <a 
                href="/contact"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                General Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}'
>>>>>>> cursor/fix-errors-and-merge-to-main-bef6
