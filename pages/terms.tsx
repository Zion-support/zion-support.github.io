import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../src/components/seo/SEOHead';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const Terms = () => {
  const lastUpdated = 'January 15, 2024';

  return (
    <>
      <SEOHead
        title="Terms of Service - Zion Tech Group | Legal Terms & Conditions"
        description="Read Zion Tech Group's terms of service and legal conditions. Understand your rights and responsibilities when using our services."
        keywords="terms of service, legal terms, conditions, user agreement, Zion Tech Group terms"
        canonical="https://ziontechgroup.com/terms"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                  <FileText className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Service</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                Please read these terms carefully before using our services.
              </p>
              <p className="text-gray-400">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Terms Overview */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl w-fit mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Clear Terms</h3>
                  <p className="text-gray-300">We use plain language to explain our terms and conditions.</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl w-fit mx-auto mb-4">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Fair Agreement</h3>
                  <p className="text-gray-300">Our terms are designed to be fair and balanced for all parties.</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl w-fit mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Legal Protection</h3>
                  <p className="text-gray-300">We protect both your rights and our business interests.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert max-w-none">
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
                  
                  <p className="text-gray-300 mb-4">
                    By accessing or using Zion Tech Group services, you agree to be bound by these Terms of Service 
                    and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                    prohibited from using or accessing our services.
                  </p>
                  
                  <p className="text-gray-300 mb-4">
                    These terms apply to all visitors, users, and others who access or use our services.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">2. Description of Service</h2>
                  
                  <p className="text-gray-300 mb-4">
                    Zion Tech Group provides technology services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Artificial Intelligence and Machine Learning services</li>
                    <li>Cloud computing and infrastructure solutions</li>
                    <li>Cybersecurity and data protection services</li>
                    <li>Software development and consulting</li>
                    <li>DevOps and automation services</li>
                    <li>Data analytics and business intelligence</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">3. User Accounts</h2>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Account Creation</h3>
                  <p className="text-gray-300 mb-4">
                    To use certain features of our services, you must create an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your account information</li>
                    <li>Keep your password secure and confidential</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-4">Account Termination</h3>
                  <p className="text-gray-300 mb-4">
                    We reserve the right to suspend or terminate your account at any time for violation of these terms.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">4. Acceptable Use</h2>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Permitted Uses</h3>
                  <p className="text-gray-300 mb-4">
                    You may use our services only for lawful purposes and in accordance with these terms.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-4">Prohibited Uses</h3>
                  <p className="text-gray-300 mb-4">
                    You agree not to use our services:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                    <li>For any obscene or immoral purpose</li>
                    <li>To interfere with or circumvent the security features of our services</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">5. Payment Terms</h2>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Fees and Billing</h3>
                  <p className="text-gray-300 mb-4">
                    Fees for our services are as described on our pricing page. You agree to pay all fees 
                    associated with your use of our services.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-4">Payment Methods</h3>
                  <p className="text-gray-300 mb-4">
                    We accept various payment methods as specified during the checkout process. 
                    All payments are processed securely through our payment partners.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-4">Refunds</h3>
                  <p className="text-gray-300 mb-4">
                    Refund policies vary by service. Please refer to our specific refund policy 
                    or contact our support team for more information.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">6. Intellectual Property</h2>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Our Content</h3>
                  <p className="text-gray-300 mb-4">
                    The service and its original content, features, and functionality are and will remain 
                    the exclusive property of Zion Tech Group and its licensors.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-4">Your Content</h3>
                  <p className="text-gray-300 mb-4">
                    You retain ownership of any content you submit to our services. By submitting content, 
                    you grant us a license to use, modify, and distribute such content as necessary to provide our services.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">7. Privacy</h2>
                  
                  <p className="text-gray-300 mb-4">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs 
                    your use of our services, to understand our practices.
                  </p>
                  
                  <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                    View our Privacy Policy
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">8. Service Availability</h2>
                  
                  <p className="text-gray-300 mb-4">
                    We strive to maintain high service availability, but we do not guarantee uninterrupted access. 
                    We may temporarily suspend services for maintenance, updates, or other operational reasons.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">9. Disclaimers</h2>
                  
                  <div className="bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      <h3 className="text-lg font-semibold text-yellow-400">Important Notice</h3>
                    </div>
                    <p className="text-gray-300">
                      Our services are provided "as is" without warranties of any kind, either express or implied.
                    </p>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    We disclaim all warranties, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Warranties of merchantability and fitness for a particular purpose</li>
                    <li>Warranties of non-infringement</li>
                    <li>Warranties regarding the accuracy, reliability, or completeness of our services</li>
                    <li>Warranties that our services will be uninterrupted or error-free</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">10. Limitation of Liability</h2>
                  
                  <p className="text-gray-300 mb-4">
                    In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, 
                    or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                    damages, including without limitation, loss of profits, data, use, goodwill, or other 
                    intangible losses, resulting from your use of our services.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">11. Indemnification</h2>
                  
                  <p className="text-gray-300 mb-4">
                    You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and 
                    licensors, and their employees, contractors, agents, officers and directors, from and 
                    against any and all claims, damages, obligations, losses, liabilities, costs or debt, 
                    and expenses (including but not limited to attorney's fees).
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">12. Governing Law</h2>
                  
                  <p className="text-gray-300 mb-4">
                    These terms shall be interpreted and governed by the laws of the State of Delaware, 
                    United States, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">13. Changes to Terms</h2>
                  
                  <p className="text-gray-300 mb-4">
                    We reserve the right, at our sole discretion, to modify or replace these terms at any time. 
                    If a revision is material, we will try to provide at least 30 days notice prior to any new 
                    terms taking effect.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">14. Contact Information</h2>
                  
                  <p className="text-gray-300 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  
                  <div className="text-gray-300 space-y-2">
                    <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 302 464 0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about these terms or need clarification on any section, 
                please don't hesitate to contact us.
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Contact Legal Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Terms;