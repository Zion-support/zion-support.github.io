import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Accessibility as AccessibilityIcon, Eye, Volume2, MousePointer, Keyboard, Users } from 'lucide-react';

const AccessibilityPage: NextPage = () => {
  const accessibilityFeatures = [
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: 'Visual Accessibility',
      description: 'High contrast modes, scalable text, and screen reader compatibility'
    },
    {
      icon: <Volume2 className="w-8 h-8 text-blue-600" />,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and alternative audio formats'
    },
    {
      icon: <MousePointer className="w-8 h-8 text-blue-600" />,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and assistive technologies'
    },
    {
      icon: <Keyboard className="w-8 h-8 text-blue-600" />,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent design, and simplified interfaces'
    }
  ];

  const standards = [
    { name: 'WCAG 2.1 AA', description: 'Web Content Accessibility Guidelines Level AA compliance' },
    { name: 'Section 508', description: 'US federal accessibility standards compliance' },
    { name: 'ADA', description: 'Americans with Disabilities Act compliance' },
    { name: 'EN 301 549', description: 'European accessibility standard compliance' }
  ];

  return (
    <MainLayout
      title="Accessibility Statement - Zion Tech Group"
      description="Learn about Zion Tech Group's commitment to digital accessibility and inclusive design."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <AccessibilityIcon className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Accessibility</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            We are committed to ensuring our website and services are accessible to everyone, regardless of ability or technology.
          </p>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Accessibility Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implement comprehensive accessibility features to ensure an inclusive experience for all users.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Accessibility Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain compliance with major international accessibility standards and guidelines.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{standard.name}</h3>
                <p className="text-gray-600">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-gray-600 mb-6">
              Zion Tech Group is committed to providing a website that is accessible to the widest possible audience, 
              regardless of technology or ability. We actively work to increase the accessibility and usability of 
              our website and in doing so adhere to many of the available standards and guidelines.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Accessibility Features</h2>
            <p className="text-gray-600 mb-6">
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Alternative text for all images and graphics</li>
              <li>Keyboard navigation support throughout the site</li>
              <li>High contrast color schemes and scalable fonts</li>
              <li>Screen reader compatibility and semantic HTML</li>
              <li>Focus indicators for keyboard navigation</li>
              <li>Descriptive link text and headings</li>
              <li>Form labels and error messages</li>
              <li>Video captions and audio descriptions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Assistive Technologies</h2>
            <p className="text-gray-600 mb-6">
              Our website is designed to work with various assistive technologies:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
              <li>Voice recognition software</li>
              <li>Switch navigation devices</li>
              <li>Magnification software</li>
              <li>Alternative input devices</li>
              <li>Browser accessibility features</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ongoing Improvements</h2>
            <p className="text-gray-600 mb-6">
              We continuously work to improve the accessibility of our website through:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Regular accessibility audits and testing</li>
              <li>User feedback and testing with disabled users</li>
              <li>Staff training on accessibility best practices</li>
              <li>Implementation of new accessibility features</li>
              <li>Monitoring of accessibility standards updates</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Known Issues</h2>
            <p className="text-gray-600 mb-6">
              While we strive to maintain accessibility standards, we acknowledge that some areas may need improvement. 
              We are actively working to address any identified issues and welcome feedback from users.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Feedback and Support</h2>
            <p className="text-gray-600 mb-6">
              If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-gray-600 mb-2"><strong>Accessibility Contact:</strong></p>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> accessibility@ziontechgroup.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1-302-464-0950</p>
              <p className="text-gray-600"><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Alternative Formats</h2>
            <p className="text-gray-600 mb-6">
              If you need information from our website in an alternative format, please contact us and we will 
              work with you to provide the information in a format that meets your needs.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Content</h2>
            <p className="text-gray-600 mb-6">
              Some content on our website may be provided by third parties. While we strive to ensure all content 
              meets accessibility standards, we cannot guarantee the accessibility of third-party content.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Statement</h2>
            <p className="text-gray-600 mb-6">
              This accessibility statement will be updated as we make improvements to our website and services. 
              The last update was made on {new Date().toLocaleDateString()}.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AccessibilityPage;