import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Scale, Shield, AlertTriangle, Mail, Phone, MapPin } from "lucide-react";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta
          name="description"
          content="Read Zion Tech Group's terms of service, legal terms, and conditions for using our AI and technology solutions."
        />
        <meta
          name="keywords"
          content="terms of service, legal terms, conditions, Zion Tech Group, AI services, technology solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Please read these terms and conditions carefully before using our services.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: January 15, 2024
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                  Agreement to Terms
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your use of Zion Tech Group's website, services, and products 
                  (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  If you do not agree to these Terms, please do not use our Services.
                </p>
              </div>

              {/* Services Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-cyan-400" />
                  Description of Services
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Zion Tech Group provides AI-powered solutions, IT services, and technology consulting, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>AI analytics and business intelligence platforms</li>
                  <li>Cybersecurity solutions and monitoring</li>
                  <li>Cloud infrastructure and migration services</li>
                  <li>5G network implementation and management</li>
                  <li>Micro SAAS solutions and software development</li>
                  <li>Digital transformation consulting</li>
                  <li>Technical support and maintenance services</li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                  User Responsibilities
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As a user of our Services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide accurate and complete information when required</li>
                  <li>Use the Services only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not interfere with or disrupt the Services</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                </ul>
              </div>

              {/* Prohibited Uses */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-red-400" />
                  Prohibited Uses
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You may not use our Services for any of the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Any unlawful activity or violation of applicable laws</li>
                  <li>Transmitting malicious code, viruses, or harmful content</li>
                  <li>Attempting to reverse engineer or compromise our systems</li>
                  <li>Spamming, phishing, or other fraudulent activities</li>
                  <li>Violating intellectual property rights of others</li>
                  <li>Harassment, abuse, or threatening behavior</li>
                  <li>Collecting personal information without consent</li>
                </ul>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Fees and Billing</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Service fees are as specified in your service agreement</li>
                      <li>All fees are non-refundable unless otherwise specified</li>
                      <li>Payment is due according to the billing cycle specified</li>
                      <li>Late payments may result in service suspension</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Price Changes</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We reserve the right to modify our pricing with 30 days' notice. 
                      Continued use of Services after price changes constitutes acceptance of new pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Our Rights</h3>
                    <p className="text-gray-300 leading-relaxed">
                      All content, software, and materials provided through our Services are owned by Zion Tech Group 
                      or our licensors and are protected by intellectual property laws.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Your Rights</h3>
                    <p className="text-gray-300 leading-relaxed">
                      You retain ownership of your data and content. By using our Services, you grant us a 
                      limited license to use your data as necessary to provide the Services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Availability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  While we strive to provide reliable Services, we cannot guarantee:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Uninterrupted or error-free operation</li>
                  <li>Compatibility with all systems or devices</li>
                  <li>Availability during maintenance periods</li>
                  <li>Protection against all security threats</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We reserve the right to modify, suspend, or discontinue Services with reasonable notice.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Service interruptions or downtime</li>
                  <li>Third-party actions or content</li>
                  <li>Damages exceeding the amount paid for Services</li>
                </ul>
              </div>

              {/* Indemnification */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
                <p className="text-gray-300 leading-relaxed">
                  You agree to indemnify and hold harmless Zion Tech Group from any claims, damages, or expenses 
                  arising from your use of the Services or violation of these Terms.
                </p>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Termination by You</h3>
                    <p className="text-gray-300 leading-relaxed">
                      You may terminate your use of Services at any time by providing written notice.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Termination by Us</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We may terminate or suspend your access to Services immediately if you violate these Terms 
                      or for other reasons at our discretion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms are governed by the laws of Delaware, United States. Any disputes arising from these Terms 
                  or your use of Services shall be resolved in the courts of Delaware.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of material changes 
                  and post the updated Terms on our website. Continued use of Services after changes constitutes 
                  acceptance of the new Terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have any questions about these Terms, please contact us:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-start space-x-3 md:col-span-2">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                    <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                </div>
              </div>

              {/* Severability */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Severability</h2>
                <p className="text-gray-300 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions 
                  will remain in full force and effect.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help clarify any questions you may have about our terms of service.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105 mx-auto w-fit"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}