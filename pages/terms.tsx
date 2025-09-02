import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';

const Terms: NextPage = () => {
  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read the terms and conditions for using Zion Tech Group's services and website."
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                These Terms of Service ("Terms") govern your use of Zion Tech Group's website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-600 mb-4">
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-gray-600 mb-6">
                We strive to maintain high service availability, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify or discontinue services at any time.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any illegal or unauthorized activities</li>
                <li>Respect the intellectual property rights of others</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                All content, trademarks, and other intellectual property on this website are the property of Zion Tech Group or its licensors. You may not use, reproduce, or distribute any content without our written permission.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="text-gray-600 mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> 123 Tech Street, Innovation City, IC 12345
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-8">
                Last updated: January 1, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;