import React from 'react';
import { Helmet } from 'react-helmet-async';

const AccessibilityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's commitment to digital accessibility and inclusive design for all users." />
        <meta name="keywords" content="digital accessibility, inclusive design, WCAG compliance, assistive technology, web accessibility" />
        <meta property="og:title" content="Accessibility - Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's commitment to digital accessibility and inclusive design for all users." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/accessibility" />
        <link rel="canonical" href="https://ziontechgroup.com/accessibility" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Accessibility</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to making our digital solutions accessible to everyone. Learn about our accessibility features and our dedication to inclusive design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">WCAG 2.1 Compliance</h3>
              <p className="text-gray-600 mb-4">
                Our website and applications follow Web Content Accessibility Guidelines (WCAG) 2.1 AA standards to ensure accessibility for all users.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Perceivable content</li>
                <li>• Operable interfaces</li>
                <li>• Understandable information</li>
                <li>• Robust technology</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Assistive Technology</h3>
              <p className="text-gray-600 mb-4">
                Our solutions are compatible with screen readers, voice recognition software, and other assistive technologies.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Screen reader support</li>
                <li>• Keyboard navigation</li>
                <li>• Voice control compatibility</li>
                <li>• High contrast modes</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Inclusive Design</h3>
              <p className="text-gray-600 mb-4">
                We design our products with accessibility in mind from the ground up, ensuring they work for users with diverse abilities.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Universal design principles</li>
                <li>• User testing with diverse groups</li>
                <li>• Continuous improvement</li>
                <li>• Feedback integration</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Accessibility Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Visual Accessibility</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• High contrast color schemes</li>
                  <li>• Scalable text and images</li>
                  <li>• Alternative text for images</li>
                  <li>• Clear visual hierarchy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Motor Accessibility</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Full keyboard navigation</li>
                  <li>• Large click targets</li>
                  <li>• Customizable interaction timing</li>
                  <li>• Voice control support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Cognitive Accessibility</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Clear, simple language</li>
                  <li>• Consistent navigation</li>
                  <li>• Error prevention and recovery</li>
                  <li>• Progress indicators</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Auditory Accessibility</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Captions for videos</li>
                  <li>• Visual alerts and notifications</li>
                  <li>• Text alternatives for audio</li>
                  <li>• Volume controls</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Our Commitment</h2>
            <p className="text-gray-700 text-center max-w-4xl mx-auto">
              We believe that technology should be accessible to everyone. Our commitment to accessibility is not just about compliance—it's about creating inclusive experiences that empower all users to achieve their goals. We continuously work to improve our accessibility features and welcome feedback from our users.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </a>
              <a href="/help" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Get Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityPage;
