import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileText, Mail, Phone, Calendar } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's terms of service outlining the rules and regulations for using our website and services." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, legal terms" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <FileText className="w-16 h-16 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                These terms and conditions outline the rules and regulations for the use of 
                Zion Tech Group's website and services.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: January 1, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 mb-4">
                  By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                <p className="text-gray-300 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Service Description</h2>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group provides AI and IT solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>AI content generation and automation services</li>
                  <li>Cloud migration and infrastructure solutions</li>
                  <li>5G implementation and network services</li>
                  <li>Digital transformation consulting</li>
                  <li>Cybersecurity and data protection services</li>
                  <li>Micro SAAS solutions and applications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. User Accounts</h2>
                <p className="text-gray-300 mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                  You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <p className="text-gray-300">
                  You may not use as a username the name of another person or entity or that is not lawfully available for use, 
                  a name or trademark that is subject to any rights of another person or entity other than you without appropriate authorization, 
                  or a name that is otherwise offensive, vulgar, or obscene.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Prohibited Uses</h2>
                <p className="text-gray-300 mb-4">
                  You may not use our service:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  <li>For any obscene or immoral purpose</li>
                  <li>To interfere with or circumvent the security features of the service</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
                <p className="text-gray-300 mb-4">
                  Payment for services is due according to the terms specified in your service agreement. 
                  We accept various payment methods including credit cards, bank transfers, and other approved methods.
                </p>
                <p className="text-gray-300 mb-4">
                  All fees are non-refundable unless otherwise specified in writing. 
                  We reserve the right to change our fees at any time with 30 days' notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property Rights</h2>
                <p className="text-gray-300 mb-4">
                  The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. 
                  The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service 
                  without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Privacy Policy</h2>
                <p className="text-gray-300">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
                  to understand our practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimer</h2>
                <p className="text-gray-300 mb-4">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                  this Company excludes all representations, warranties, conditions and terms relating to our website and the use of this website.
                </p>
                <p className="text-gray-300">
                  Nothing in this disclaimer will limit or exclude our or your liability for death or personal injury, 
                  fraud, or any other liability that cannot be excluded or limited by applicable law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-300">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                  be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                <p className="text-gray-300">
                  These terms shall be interpreted and governed by the laws of the State of California, United States, 
                  without regard to its conflict of law provisions. Our failure to enforce any right or provision of these terms 
                  will not be considered a waiver of those rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
                <p className="text-gray-300">
                  We reserve the right, at our sole discretion, to modify or replace these terms at any time. 
                  If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">legal@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Monday - Friday, 9AM - 6PM PST</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We're here to help. Contact us if you have any questions about our terms of service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link 
                to="/" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}