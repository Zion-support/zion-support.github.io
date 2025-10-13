import React from 'react';
import { Accessibility, CheckCircle, Users, Eye, MousePointer, Volume2 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const AccessibilityPage = () => {
  const features = [
    {
      title: 'Screen Reader Support',
      description: 'Full compatibility with screen readers and assistive technologies',
      icon: <Volume2 className="w-8 h-8" />
    },
    {
      title: 'Keyboard Navigation',
      description: 'Complete keyboard accessibility for all interactive elements',
      icon: <MousePointer className="w-8 h-8" />
    },
    {
      title: 'High Contrast Mode',
      description: 'Enhanced visibility options for users with visual impairments',
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: 'Text Scaling',
      description: 'Support for text scaling up to 200% without loss of functionality',
      icon: <Users className="w-8 h-8" />
    }
  ];

  const standards = [
    'WCAG 2.1 AA Compliance',
    'Section 508 Compliance',
    'ADA Compliance',
    'EN 301 549 Compliance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Accessibility - Zion Tech Group | Inclusive Design"
        description="Learn about our commitment to accessibility and inclusive design. We ensure our products are usable by everyone, including people with disabilities."
        keywords="accessibility, inclusive design, WCAG compliance, ADA compliance, assistive technology, universal design"
        canonical="https://ziontechgroup.com/accessibility"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Accessibility
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are committed to making our products accessible to everyone. Our inclusive design ensures that people with disabilities can use our services effectively.
          </p>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Accessibility Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our products include comprehensive accessibility features to ensure usability for all users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We adhere to international accessibility standards and guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Report Accessibility Issues
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you encounter any accessibility barriers, please let us know so we can address them promptly.
          </p>
          <FuturisticButton
            variant="primary"
            size="lg"
            to="/contact"
          >
            Report an Issue
          </FuturisticButton>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityPage;