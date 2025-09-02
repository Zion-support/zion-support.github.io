import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Accessibility as AccessibilityIcon, Eye, Ear, Hand, Brain, CheckCircle, Users } from 'lucide-react';

const Accessibility: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const accessibilityFeatures = [
    {
      title: 'Visual Accessibility',
      icon: Eye,
      description: 'Support for users with visual impairments',
      features: [
        'High contrast color schemes',
        'Scalable text and interface elements',
        'Screen reader compatibility',
        'Alternative text for images',
        'Keyboard navigation support'
      ]
    },
    {
      title: 'Auditory Accessibility',
      icon: Ear,
      description: 'Support for users with hearing impairments',
      features: [
        'Video captions and transcripts',
        'Visual indicators for audio cues',
        'Text-based alternatives for audio content',
        'Clear visual feedback for interactions'
      ]
    },
    {
      title: 'Motor Accessibility',
      icon: Hand,
      description: 'Support for users with motor impairments',
      features: [
        'Keyboard-only navigation',
        'Large click targets',
        'Voice control compatibility',
        'Customizable interaction timeouts',
        'Switch navigation support'
      ]
    },
    {
      title: 'Cognitive Accessibility',
      icon: Brain,
      description: 'Support for users with cognitive differences',
      features: [
        'Clear and simple language',
        'Consistent navigation patterns',
        'Error prevention and recovery',
        'Progress indicators',
        'Help and guidance systems'
      ]
    }
  ];

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Compliant'
    },
    {
      name: 'Section 508',
      description: 'US federal accessibility standards compliance',
      status: 'Compliant'
    },
    {
      name: 'ADA',
      description: 'Americans with Disabilities Act compliance',
      status: 'Compliant'
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard compliance',
      status: 'Compliant'
    }
  ];

  return (
    <MainLayout
      title="Accessibility - Zion Tech Group"
      description="Learn about Zion Tech Group's commitment to web accessibility and inclusive design practices."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <AccessibilityIcon className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Accessibility</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            We are committed to making our website and services accessible to everyone, 
            regardless of ability or technology used.
          </p>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Accessibility Commitment</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Zion Tech Group, we believe that technology should be inclusive and accessible to everyone. 
              We are committed to ensuring that our website and services are usable by people with disabilities 
              and comply with international accessibility standards.
            </p>
            <p className="text-lg text-gray-600">
              Our accessibility efforts are ongoing, and we continuously work to improve the user experience 
              for all visitors to our website.
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Accessibility Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="text-blue-600 mr-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Accessibility Standards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {standards.map((standard, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{standard.name}</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {standard.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Accessibility Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use Accessibility Features</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Keyboard Navigation</h3>
                <p className="text-gray-600 mb-4">
                  You can navigate our website using only your keyboard. Use the Tab key to move forward 
                  through interactive elements and Shift+Tab to move backward.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Tab:</strong> Move to next interactive element</li>
                  <li>• <strong>Shift+Tab:</strong> Move to previous interactive element</li>
                  <li>• <strong>Enter/Space:</strong> Activate buttons and links</li>
                  <li>• <strong>Arrow Keys:</strong> Navigate within menus and lists</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Screen Reader Support</h3>
                <p className="text-gray-600 mb-4">
                  Our website is compatible with screen readers and other assistive technologies. 
                  We provide proper heading structure, alternative text for images, and descriptive link text.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Proper heading hierarchy (H1, H2, H3, etc.)</li>
                  <li>• Alternative text for all images</li>
                  <li>• Descriptive link text</li>
                  <li>• Form labels and instructions</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Text and Visual Adjustments</h3>
                <p className="text-gray-600 mb-4">
                  You can adjust the text size and visual appearance of our website using your browser's 
                  built-in accessibility features.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Zoom:</strong> Use Ctrl/Cmd + Plus to increase text size</li>
                  <li>• <strong>High Contrast:</strong> Enable high contrast mode in your browser</li>
                  <li>• <strong>Font Size:</strong> Adjust font size in browser settings</li>
                  <li>• <strong>Color Override:</strong> Override colors in browser accessibility settings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Accessibility Feedback</h2>
            <p className="text-lg text-gray-600 mb-8">
              We welcome feedback on the accessibility of our website. If you encounter any accessibility 
              barriers or have suggestions for improvement, please let us know.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-4 text-gray-700">
                <p><strong>Accessibility Contact:</strong> accessibility@ziontechgroup.com</p>
                <p><strong>General Contact:</strong> info@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-900">Ongoing Accessibility Commitment</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Accessibility is an ongoing process, and we are committed to continuously improving 
                the accessibility of our website and services. We regularly review and test our 
                website for accessibility compliance and make improvements based on user feedback 
                and evolving standards.
              </p>
              <p className="text-gray-600">
                Our development team receives regular accessibility training, and we incorporate 
                accessibility considerations into all new features and content from the beginning 
                of the development process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Accessibility;