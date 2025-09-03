import React from 'react';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import SEOHead from '../src/components/seo/SEOHead';

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy — Zion Tech Group"
        description="Learn how Zion Tech Group collects, uses, and protects your data."
        keywords="privacy policy, data protection, gdpr"
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-4">Last updated: Jan 1, 2025</p>
            <p className="text-gray-700 leading-relaxed">
              We value your privacy. This policy explains what information we collect, why we collect it, and how we handle it.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
            <p className="text-gray-700">Contact details, usage data, and cookies to improve our services.</p>
            <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
            <p className="text-gray-700">To provide and improve services, secure our platform, and communicate with you.</p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
            <p className="text-gray-700">You can request access, correction, or deletion of your data at any time.</p>
            <p className="text-gray-700 mt-6">Contact: privacy@ziontechgroup.com</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

