import React from "react";
import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group collects, uses, and protects your personal information. Our commitment to your privacy and data security."
        keywords="privacy policy, data protection, personal information, GDPR, privacy rights, data security"
        canonical="https://ziontechgroup.com/privacy"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Last updated: December 15, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">1. Introduction</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-white mb-4">2.1 Personal Information</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Company information and job title</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Communications with us (emails, messages, support tickets)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">2.2 Automatically Collected Information</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We automatically collect certain information when you visit our website:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and managing your account</li>
                <li>Communicating with you about our services</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and security threats</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist us in operating our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>To prevent fraud or security threats</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">5. Data Security</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">6. Your Rights</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to delete your personal information</li>
                <li>Right to restrict processing of your information</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences. For more information, 
                please see our Cookie Policy.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">8. Third-Party Links</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices or content of these external sites. We encourage you to review the 
                privacy policies of any third-party sites you visit.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">9. Children's Privacy</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If you are a parent or guardian 
                and believe your child has provided us with personal information, please contact us.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                Your continued use of our services after any modifications constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">11. Contact Us</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-white/5 rounded-lg p-6 space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-3 mt-1" />
                  <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709, USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We're here to help. Contact us if you have any questions about our privacy practices 
            or your personal information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;