import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function AccessibilityPage() {
  return (
    <MainLayout 
      title="Accessibility - Zion Tech Group"
      description="Learn about Zion Tech Group's commitment to web accessibility and our compliance with WCAG 2.1, Section 508, and ADA standards."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Accessibility Excellence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Building inclusive digital experiences for everyone
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Accessibility Commitment
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We are committed to making our digital experiences accessible to everyone, regardless of ability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">WCAG 2.1 Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Our websites and applications meet WCAG 2.1 AA standards, ensuring accessibility for users with disabilities.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Keyboard navigation support</li>
                  <li>• Screen reader compatibility</li>
                  <li>• High contrast mode support</li>
                  <li>• Alternative text for images</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Section 508 Compliance</h3>
                <p className="text-gray-600 mb-4">
                  We ensure our digital products meet Section 508 requirements for federal accessibility standards.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Accessible form controls</li>
                  <li>• Proper heading structure</li>
                  <li>• Color contrast compliance</li>
                  <li>• Focus management</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ADA Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Our digital solutions comply with the Americans with Disabilities Act requirements.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Assistive technology support</li>
                  <li>• Clear navigation structure</li>
                  <li>• Readable font sizes</li>
                  <li>• Consistent user interface</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Testing</h3>
                <p className="text-gray-600 mb-4">
                  We regularly test our applications with various assistive technologies and user feedback.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Automated accessibility testing</li>
                  <li>• Manual testing with users</li>
                  <li>• Regular audits and updates</li>
                  <li>• Training for our development team</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Us for Accessibility Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                If you encounter any accessibility barriers on our website or need assistance, please contact us.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Accessibility Support</h3>
                <p className="text-gray-600 mb-4">
                  We are committed to providing accessible digital experiences. If you need assistance or have feedback about accessibility, please reach out to us.
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> accessibility@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}