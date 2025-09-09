<<<<<<< HEAD
import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const Terms: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const termsSections = [;
    {
      icon: CheckCircle,;
      title: 'Acceptance of Terms',;
      content: [;
        'By accessing and using Zion Tech Group services, you accept and agree to be bound by these terms',;
        'If you do not agree to these terms, you may not use our services',;
        'These terms apply to all users of our website and services',;
        'We reserve the right to modify these terms at any time';
      ]},;
    {
      icon: Scale,;
      title: 'Service Description',;
      content: [;
        'Zion Tech Group provides technology solutions including AI development, cloud services, and digital transformation',;
        'Services are provided on an "as is" basis with no warranties',;
        'We reserve the right to modify or discontinue services at any time',;
        'Service availability may vary based on technical requirements and maintenance';
      ]},;
    {
      icon: AlertTriangle,;
      title: 'User Responsibilities',;
      content: [;
        'Provide accurate and complete information when using our services',;
        'Maintain the confidentiality of your account credentials',;
        'Use our services in compliance with applicable laws and regulations',;
        'Not engage in any activities that could harm our systems or other users';
      ]},;
    {
      icon: XCircle,;
      title: 'Prohibited Uses',;
      content: [;
        'Violating any applicable laws or regulations',;
        'Transmitting malicious code or harmful content',;
        'Attempting to gain unauthorized access to our systems',;
        'Using our services for any illegal or unauthorized purpose';
      ]},;
    {
      icon: Scale,;
      title: 'Legal Compliance',;
      description: 'Our commitment to legal compliance and adherence to applicable laws and regulations.'},;
    {
      icon: Shield,;
      title: 'Intellectual Property',;
      description: 'Protection of intellectual property rights and proper usage of our proprietary technologies.'},;
    {
      icon: AlertTriangle,;
      title: 'Limitations',;
      description: 'Important limitations and disclaimers regarding our services and liability.'}
  ];

  return (;
    <MainLayout;
      title="Terms of Service - Zion Tech Group";
      description="Read Zion Tech Group's Terms of Service to understand the rules and regulations for using our technology services and website.";
      keywords="terms of service, user agreement, service terms, legal terms, conditions">;
      <div className="min-h-screen bg-gray-50">;
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <FileText className="w-16 h-16 mx-auto mb-6 text-blue-400" />;
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>;
              <p className="text-xl text-gray-200 mb-4">;
                Please read these terms carefully before using our services.;
              </p>;
              <p className="text-sm text-gray-300">Last updated: {lastUpdated}</p>;
            </div>;
          </div>;
        </section>;
=======
import React from 'react' 
import Head from 'next/head' 
import Link from 'next/link' 
import { motion } from 'framer-motion' 
import { FileText, Shield, AlertCircle, Scale, Mail, Phone, MapPin } from 'lucide-react' 
import MainLayout from '../src/components/layout/MainLayout' 
>>>>>>> cursor/check-fix-push-and-merge-to-main-649b

export default function TermsPage() {
  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Zion Tech Group's terms of service outlining the rules and regulations for using our services."
      keywords="terms of service, user agreement, service terms, legal terms"
      canonical="https://ziontechgroup.com/terms"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms carefully before using our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-6">
                  By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                <p className="text-gray-600 mb-6">
                  Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
                <p className="text-gray-600 mb-6">
                  The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied.
                </p>

                <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
                <p className="text-gray-600 mb-6">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.
                </p>

                <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
                <p className="text-gray-600 mb-6">
                  The materials appearing on our website could include technical, typographical, or photographic errors.
                </p>

                <h2 className="text-2xl font-bold mb-4">6. Links</h2>
                <p className="text-gray-600 mb-6">
                  We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site.
                </p>

                <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
                <p className="text-gray-600 mb-6">
                  We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version.
                </p>

                <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                <p className="text-gray-600 mb-6">
                  These terms and conditions are governed by and construed in accordance with the laws of Delaware.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">10. Termination</h2>;
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">;
                <p className="text-gray-600 mb-4">;
                  Either party may terminate these Terms at any time with written notice. Upon termination:;
                </p>;
                <ul className="list-disc list-inside text-gray-600 space-y-2">;
                  <li>Your right to use our services will cease immediately</li>;
                  <li>We may delete your account and data</li>;
                  <li>You remain liable for any outstanding payments</li>;
                  <li>Provisions that by their nature should survive termination will remain in effect</li>;
                </ul>;
              </div>;

              <h2 className="text-3xl font-bold mb-6 text-gray-800">11. Governing Law</h2>;
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">;
                <p className="text-gray-600">;
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Delaware.;
                </p>;
              </div>;

              <h2 className="text-3xl font-bold mb-6 text-gray-800">12. Changes to Terms</h2>;
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">;
                <p className="text-gray-600">;
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.;
                </p>;
              </div>;

              <h2 className="text-3xl font-bold mb-6 text-gray-800">13. Contact Information</h2>;
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">;
                <p className="text-gray-600 mb-4">;
                  If you have any questions about these Terms of Service, please contact us:;
                </p>;
                <div className="space-y-3">;
                  <div className="flex items-center space-x-3">;
                    <Mail className="w-5 h-5 text-blue-600" />;
                    <span className="text-gray-600">kleber@ziontechgroup.com</span>;
                  </div>;
                  <div className="flex items-center space-x-3">;
                    <Phone className="w-5 h-5 text-blue-600" />;
                    <span className="text-gray-600">+1 302 464 0950</span>;
                  </div>;
                  <div className="text-gray-600">;
                    <strong>Address:</strong><br />;
                    Zion Tech Group<br />;
                    364 E Main St STE 1008<br />;
                    Middletown, DE 19709;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
                  </p>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;

export default function TermsPage() {
  return (;
    <MainLayout;
      title="Terms of Service - Zion Tech Group";
      description="Read Zion Tech Group's Terms of Service. Our comprehensive terms outline the rules and regulations for using our website and services.";
      keywords="terms of service, terms and conditions, legal terms, Zion Tech Group">;
      <div className="min-h-screen bg-gray-50 py-12">;
        <div className="container mx-auto px-4 max-w-4xl">;
          {/* Header */}
          <div className="text-center mb-12">;
            <div className="flex justify-center mb-6">;
              <div className="p-4 bg-blue-100 rounded-full">;
                <Scale className="w-12 h-12 text-blue-600" />;
              </div>;
            </div>;
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>;
            <p className="text-xl text-gray-600 mb-2">;
              Please read these terms carefully before using our services;
            </p>;
            <p className="text-sm text-gray-500">;
              Last updated: {lastUpdated}
            </p>;
          </div>;

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">;

            {/* Introduction */}
            <section>;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">;
                <FileText className="w-6 h-6 text-blue-600 mr-3" />;
                Introduction;
              </h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website ;
                ziontechgroup.com and our services. By accessing or using our services, you agree to be bound ;
                by these Terms.;
              </p>;
              <p className="text-gray-700 leading-relaxed">;
                If you disagree with any part of these terms, then you may not access our services.;
              </p>;
            </section>;

            {/* Acceptance of Terms */}
            <section>;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">;
                <Users className="w-6 h-6 text-blue-600 mr-3" />;
                Acceptance of Terms;
              </h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                By accessing and using our website and services, you accept and agree to be bound by the terms ;
                and provision of this agreement. Additionally, when using our services, you shall be subject to ;
                any posted guidelines or rules applicable to such services.;
              </p>;
            </section>;

            {/* Services Description */}
            <section>;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services Description</h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                Zion Tech Group provides technology solutions and services including but not limited to:;
              </p>;
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">;
                <li>AI and machine learning development services</li>;
                <li>Cloud architecture and migration services</li>;
                <li>Web and mobile application development</li>;
                <li>Blockchain and cryptocurrency solutions</li>;
                <li>Cybersecurity and data protection services</li>;
                <li>IT consulting and digital transformation</li>;
                <li>Micro SaaS development and deployment</li>;
                <li>Quantum computing solutions</li>;
              </ul>;
            </section>;

            {/* User Responsibilities */}
            <section>;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">;
                <Shield className="w-6 h-6 text-blue-600 mr-3" />;
                User Responsibilities;
              </h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                As a user of our services, you agree to:;
              </p>;
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">;
                <li>Provide accurate and complete information</li>;
                <li>Maintain the confidentiality of your account credentials</li>;
                <li>Use our services in compliance with applicable laws</li>;
                <li>Not engage in any illegal or unauthorized activities</li>;
                <li>Respect intellectual property rights</li>;
                <li>Not attempt to gain unauthorized access to our systems</li>;
                <li>Not interfere with the proper functioning of our services</li>;
              </ul>;
            </section>;

            {/* Prohibited Uses */}
            <section>;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">;
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />;
                Prohibited Uses;
              </h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. ;
                Prohibited activities include:;
              </p>;
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">;
                <li>Violating any applicable laws or regulations</li>;
                <li>Transmitting malicious code or viruses</li>;
                <li>Attempting to hack or compromise our systems</li>;
                <li>Spamming or sending unsolicited communications</li>;
                <li>Infringing on intellectual property rights</li>;
                <li>Harassing or threatening other users</li>;
                <li>Collecting personal information without consent</li>;
                <li>Engaging in fraudulent activities</li>;
              </ul>;
            </section>;

            {/* Intellectual Property */}
            <section>;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property Rights</h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                The service and its original content, features, and functionality are and will remain the exclusive ;
                property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, ;
                and other laws.;
              </p>;
              <p className="text-gray-700 leading-relaxed">;
                Our trademarks and trade dress may not be used in connection with any product or service without ;
                our prior written consent.;
              </p>;
            </section>;

            {/* Payment Terms */}
            <section>;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                For paid services, the following terms apply:;
              </p>;
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">;
                <li>Payment is due according to the agreed schedule</li>;
                <li>Late payments may incur additional fees</li>;
                <li>All prices are subject to applicable taxes</li>;
                <li>Refunds are subject to our refund policy</li>;
                <li>We reserve the right to suspend services for non-payment</li>;
              </ul>;
            </section>;

            {/* Service Availability */}
            <section>;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                We strive to maintain high service availability, but we do not guarantee uninterrupted access. ;
                We may temporarily suspend services for maintenance, updates, or other operational reasons.;
              </p>;
            </section>;

            {/* Limitation of Liability */}
            <section>;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">;
                <Gavel className="w-6 h-6 text-blue-600 mr-3" />;
                Limitation of Liability;
              </h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, ;
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, ;
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses, ;
                resulting from your use of our services.;
              </p>;
            </section>;

            {/* Disclaimer */}
            <section>;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                The information on this website is provided on an "as is" basis. To the fullest extent permitted ;
                by law, Zion Tech Group excludes all representations, warranties, conditions and terms relating ;
                to our website and the use of this website.;
              </p>;
            </section>;

            {/* Termination */}
            <section>;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                We may terminate or suspend your access immediately, without prior notice or liability, for any ;
                reason whatsoever, including without limitation if you breach the Terms.;
              </p>;
            </section>;

            {/* Governing Law */}
            <section>;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, ;
                without regard to its conflict of law provisions.;
              </p>;
            </section>;

            {/* Changes to Terms */}
            <section>;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. ;
                If a revision is material, we will try to provide at least 30 days notice prior to any new ;
                terms taking effect.;
              </p>;
            </section>;

            {/* Contact Information */}
            <section className="bg-blue-50 p-6 rounded-lg">;
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>;
              <p className="text-gray-700 leading-relaxed mb-4">;
                If you have any questions about these Terms of Service, please contact us:;
              </p>;
              <div className="space-y-2 text-gray-700">;
                <p><strong>Email:</strong> legal@ziontechgroup.com</p>;
                <p><strong>Phone:</strong> +1 302 464 0950</p>;
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  )}
<<<<<<< HEAD
  )}

=======
  ) 
} 
>>>>>>> cursor/check-fix-push-and-merge-to-main-649b
