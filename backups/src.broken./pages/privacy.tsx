import React from 'react';
import { SEO } from '../components/SEO';
import { Shield, Lock, Eye, Database, Users, Globe, Mail, Phone } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal information in compliance with applicable laws and regulations."
        keywords="privacy policy, data protection, GDPR, privacy rights, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <div className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="text-sm text-zion-slate-light">
              Last updated: January 26, 2025
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 pb-20">
          <div className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 text-zion-cyan mr-3" />
                Introduction
              </h2>
              <p className="text-zion-slate-light leading-relaxed">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website https://ziontechgroup.com or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Database className="w-6 h-6 text-zion-cyan mr-3" />
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                  <p className="text-zion-slate-light leading-relaxed mb-3">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                    <li>Name and contact information (email address, phone number, mailing address)</li>
                    <li>Company information and job title</li>
                    <li>Communication preferences</li>
                    <li>Payment and billing information</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
                  <p className="text-zion-slate-light leading-relaxed mb-3">
                    We may automatically collect certain information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website information</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 text-zion-cyan mr-3" />
                How We Use Your Information
              </h2>
              <p className="text-zion-slate-light leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li>Providing and improving our services</li>
                <li>Responding to your inquiries and requests</li>
                <li>Processing transactions and payments</li>
                <li>Sending you important updates and communications</li>
                <li>Personalizing your experience on our website</li>
                <li>Analyzing website usage and trends</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and security threats</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 text-zion-cyan mr-3" />
                Information Sharing and Disclosure
              </h2>
              <p className="text-zion-slate-light leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>With service providers who assist us in operating our business</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With trusted partners for legitimate business purposes</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-zion-cyan mr-3" />
                Data Security
              </h2>
              <p className="text-zion-slate-light leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, 
                secure servers, access controls, and regular security audits. However, no method of transmission over the 
                internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 text-zion-cyan mr-3" />
                Your Privacy Rights
              </h2>
              <p className="text-zion-slate-light leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to delete your personal information</li>
                <li>Right to restrict processing of your information</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-zion-slate-light leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences. Please note that disabling 
                cookies may affect the functionality of our website.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
              <p className="text-zion-slate-light leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices or content of these external sites. We encourage you to review the privacy policies 
                of any third-party sites you visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-zion-slate-light leading-relaxed">
                Our services are not directed to children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If we become aware that we have collected personal 
                information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="text-zion-slate-light leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued 
                use of our services after any modifications constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Mail className="w-6 h-6 text-zion-cyan mr-3" />
                Contact Us
              </h2>
              <p className="text-zion-slate-light leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-zion-slate-dark/30 border border-zion-cyan/20 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-zion-cyan mr-3" />
                    <span className="text-white">Email: </span>
                    <a href="mailto:privacy@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan/80 ml-2">
                      privacy@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-zion-cyan mr-3" />
                    <span className="text-white">Phone: </span>
                    <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan/80 ml-2">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-zion-cyan mr-3 mt-1" />
                    <div>
                      <span className="text-white">Address: </span>
                      <div className="text-zion-slate-light ml-2">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;