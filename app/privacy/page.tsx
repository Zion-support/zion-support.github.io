import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> October 2, 2025
          </p>
          
          <p className="text-gray-600 mb-8">
            Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you visit our website <Link href="/" className="text-blue-600 hover:text-blue-800">ziontechgroup.com</Link>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">Personal Information</h3>
          <p className="text-gray-600 mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Fill out contact forms or request information</li>
            <li>Subscribe to our newsletter or communications</li>
            <li>Participate in surveys or feedback forms</li>
            <li>Engage with our services or support</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
          <p className="text-gray-600 mb-4">
            We may automatically collect certain information about your device and usage patterns, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website information</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the collected information for various purposes, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Providing and improving our services</li>
            <li>Responding to your inquiries and requests</li>
            <li>Sending you relevant communications and updates</li>
            <li>Analyzing website usage and performance</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information Sharing and Disclosure</h2>
          <p className="text-gray-600 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>When required by law or legal process</li>
            <li>To protect our rights, property, or safety</li>
            <li>With trusted service providers who assist in our operations</li>
            <li>In connection with a business transfer or acquisition</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate technical and organizational security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
            the internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-600 mb-6">
            We use cookies and similar tracking technologies to enhance your experience on our website. 
            You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to delete your personal information</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
          <p className="text-gray-600 mb-6">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices 
            or content of these external sites. We encourage you to review their privacy policies.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
          <p className="text-gray-600 mb-6">
            Our services are not directed to children under 13 years of age. We do not knowingly collect personal 
            information from children under 13. If you become aware that a child has provided us with personal 
            information, please contact us immediately.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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