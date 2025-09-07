<<<<<<< HEAD
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = { 
  title: 'Cybersecurity Services | Zion Tech Group',
  description: 'Comprehensive cybersecurity solutions including threat detection, compliance management, security audits, and incident response. Protect your business from cyber threats.'
=======
import React from 'react';


export const metadata = { 
  title: 'Cybersecurity Services | Zion Tech Group',
  description: 'Comprehensive cybersecurity solutions including threat detection, compliance management, security audits, and incident response. Protect your business from cyber threats.',
  keywords: 'cybersecurity, threat detection, compliance management, security audits, incident response, penetration testing'
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
};

export default function CybersecurityPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-red-50 to-orange-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Cybersecurity Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Protect your business with comprehensive cybersecurity solutions. 
          From threat detection to compliance management, we keep your data secure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Cybersecurity Services Inquiry"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Get Security Assessment
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>
    </div>
  );
}
