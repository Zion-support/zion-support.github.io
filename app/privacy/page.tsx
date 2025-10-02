import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Zion Tech Group',
  description: 'Privacy Policy for Zion Tech Group - How we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600 mb-8">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
            <p className="text-gray-600 mb-6">We collect information you provide directly to us, such as when you contact us or use our services. This may include:</p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Name and contact information</li>
              <li>Email address and phone number</li>
              <li>Company information</li>
              <li>Service preferences and requirements</li>
              <li>Communication history</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Process transactions and provide customer support</li>
              <li>Send you technical notices and updates</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
            <p className="text-gray-600 mb-6">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to provide our services.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
            <p className="text-gray-600 mb-6">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">We use cookies and similar tracking technologies to enhance your experience on our website and to analyze usage patterns.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a></p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-600 hover:underline">+1 302 464 0950</a></p>
              <p className="text-gray-600"><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About Your Privacy?</h2>
          <p className="text-xl text-gray-600 mb-8">We're here to help with any privacy-related questions or concerns.</p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}