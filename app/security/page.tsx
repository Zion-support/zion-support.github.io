import React from 'react';

export const metadata = {
  title: 'Security | Zion Tech Group',
  description: 'Security information and practices for Zion Tech Group services and data protection.',
  keywords: 'security, data protection, information security, cybersecurity',
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Security</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Security Commitment</h2>
            <p className="text-gray-600 mb-4">
              At Zion Tech Group, we take security seriously. We implement industry-standard security measures to protect your data and ensure the integrity of our services.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Protection</h2>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Encryption in transit and at rest</li>
              <li>• Regular security audits and assessments</li>
              <li>• Access controls and authentication</li>
              <li>• Secure data centers and infrastructure</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Compliance</h2>
            <p className="text-gray-600 mb-4">
              We maintain compliance with industry standards and regulations to ensure the highest level of security for our clients.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Incident Response</h2>
            <p className="text-gray-600 mb-4">
              We have established incident response procedures to quickly address and resolve any security concerns.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Security Team</h2>
            <p className="text-gray-600 mb-4">
              If you have security concerns or need to report a security incident, please contact us:
            </p>
            <ul className="text-gray-600 mb-4">
              <li>Email: kleber@ziontechgroup.com</li>
              <li>Phone: +1 302 464 0950</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}