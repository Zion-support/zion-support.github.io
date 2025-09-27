import React from 'react';
import Link from 'next/link';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide directly (name, email, phone number)",
        "Usage data and analytics information",
        "Cookies and similar tracking technologies",
        "Device and browser information",
        "Location data (with your consent)"
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our services",
        "To communicate with you about our services",
        "To personalize your experience",
        "To analyze usage patterns and trends",
        "To ensure security and prevent fraud"
      ]
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures",
        "Data is encrypted in transit and at rest",
        "Regular security audits and updates",
        "Limited access to personal information",
        "Secure data storage and backup systems"
      ]
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Your Rights",
      content: [
        "Access to your personal data",
        "Correction of inaccurate information",
        "Deletion of your data (right to be forgotten)",
        "Data portability",
        "Opt-out of marketing communications"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Third-Party Services",
      content: [
        "We may use third-party analytics services",
        "Payment processors for transactions",
        "Cloud storage providers",
        "Marketing and communication tools",
        "All third parties are required to maintain similar privacy standards"
      ]
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Policy Updates",
      content: [
        "We may update this policy from time to time",
        "Significant changes will be communicated to you",
        "Continued use constitutes acceptance of changes",
        "Previous versions are available upon request",
        "Effective date of current policy: January 1, 2024"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech
            </Link>
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            ← Back to Home
          </Link>
          
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we handle your data.
            </p>
          </header>
        </header>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Privacy</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Zion Tech Solutions, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using our services, you agree to the collection and use of information in accordance with this policy. 
            If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-6">Questions About Your Privacy?</h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us. 
            We're here to help and ensure your privacy concerns are addressed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <p className="text-blue-100">Email: privacy@ziontech.com</p>
              <p className="text-blue-100">Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Data Protection Officer</h3>
              <p className="text-blue-100">Email: dpo@ziontech.com</p>
              <p className="text-blue-100">Available Monday-Friday, 9 AM - 5 PM EST</p>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Information</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              This Privacy Policy is effective as of January 1, 2024, and will remain in effect except with respect to any changes 
              in its provisions in the future, which will be in effect immediately after being posted on this page.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. 
              Your continued use of our services after we post any modifications to the Privacy Policy on this page will constitute 
              your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If we make any material changes to this Privacy Policy, we will notify you either through the email address you have 
              provided us, or by placing a prominent notice on our website.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Zion Tech</h3>
              <p className="text-gray-600">
                Transforming businesses through innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Web Development</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Mobile Apps</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Cloud Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
                <li><Link href="/portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-gray-500">&copy; 2024 Zion Tech Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}