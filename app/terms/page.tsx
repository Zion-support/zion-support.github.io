import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> October 2, 2025
          </p>
          
          <p className="text-gray-600 mb-8">
            These Terms of Service ("Terms") govern your use of Zion Tech Group's website and services. 
            By accessing or using our services, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing and using this website, you accept and agree to be bound by the terms and provision 
            of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use License</h2>
          <p className="text-gray-600 mb-4">
            Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website 
            for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer 
            of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Description</h2>
          <p className="text-gray-600 mb-6">
            Zion Tech Group provides AI, micro SaaS, and IT services including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Artificial Intelligence and Machine Learning solutions</li>
            <li>Micro SaaS application development</li>
            <li>IT infrastructure and cloud migration services</li>
            <li>DevOps and automation consulting</li>
            <li>Cybersecurity and compliance services</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Responsibilities</h2>
          <p className="text-gray-600 mb-4">
            As a user of our services, you agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Provide accurate and complete information</li>
            <li>Use our services in compliance with applicable laws</li>
            <li>Not engage in any illegal or unauthorized activities</li>
            <li>Respect intellectual property rights</li>
            <li>Maintain the confidentiality of any credentials provided</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            The content, trademarks, and other intellectual property on this website are owned by Zion Tech Group 
            or its licensors. You may not use, reproduce, or distribute any content without our express written permission.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Privacy Policy</h2>
          <p className="text-gray-600 mb-6">
            Your privacy is important to us. Please review our <Link href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link>, 
            which also governs your use of our services, to understand our practices.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, 
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
            to use the materials on Zion Tech Group's website, even if Zion Tech Group or an authorized representative 
            has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Availability</h2>
          <p className="text-gray-600 mb-6">
            We strive to maintain high service availability but cannot guarantee uninterrupted access. We reserve the 
            right to modify, suspend, or discontinue any part of our services at any time without notice.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Payment Terms</h2>
          <p className="text-gray-600 mb-6">
            For paid services, payment terms will be specified in individual service agreements. All fees are 
            non-refundable unless otherwise specified in writing.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Termination</h2>
          <p className="text-gray-600 mb-6">
            We may terminate or suspend your access to our services immediately, without prior notice or liability, 
            for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law</h2>
          <p className="text-gray-600 mb-6">
            These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
            without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these Terms at any time. We will notify users of any material changes 
            by posting the new Terms on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-2">
              <strong>Zion Tech Group</strong>
            </p>
            <p className="text-gray-600 mb-2">
              364 E Main St STE 1008<br />
              Middletown DE 19709
            </p>
            <p className="text-gray-600 mb-2">
              Phone: <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">+1 302 464 0950</a>
            </p>
            <p className="text-gray-600">
              Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">kleber@ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}