import React from 'react';
import { Helmet } from "react-helmet-async";

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Visual Accessibility',
      description: 'Screen reader compatibility, high contrast modes, and visual indicators for better user experience.',
      benefits: ['Screen reader support', 'High contrast themes', 'Focus indicators', 'Text scaling']
    },
    {
      icon: <Ear className="w-8 h-8" />,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and alternative audio formats for hearing-impaired users.',
      benefits: ['Closed captions', 'Audio descriptions', 'Sign language support', 'Visual alerts']
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and alternative input methods for users with motor disabilities.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch navigation', 'Gesture alternatives']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Cognitive Accessibility',
      description: 'Clear language, consistent navigation, and simplified interfaces for cognitive accessibility.',
      benefits: ['Clear language', 'Consistent design', 'Error prevention', 'Progress indicators']
    }
  ];

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Accessibility Audits',
      description: 'Comprehensive evaluation of your digital products against WCAG 2.1 AA standards.',
      benefits: ['WCAG compliance check', 'Detailed reports', 'Remediation guidance', 'Follow-up testing']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Implementation Support',
      description: 'Hands-on assistance implementing accessibility features and best practices.',
      benefits: ['Code implementation', 'Design consultation', 'Testing support', 'Training sessions']
    }
  ];

  const standards = [
    'WCAG 2.1 AA Compliance',
    'Section 508 Compliance',
    'ADA Compliance',
    'EN 301 549 Compliance'
  ];

  const benefits = [
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Increased Reach',
      description: 'Access your products to 15% of the global population with disabilities.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Better Performance',
      description: 'Accessible design often leads to better overall user experience and performance.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Legal Compliance',
      description: 'Meet legal requirements and avoid potential lawsuits and penalties.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Brand Reputation',
      description: 'Demonstrate your commitment to inclusion and social responsibility.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Learn about our commitment to web accessibility and inclusive design practices." />
        <meta name="keywords" content="accessibility, inclusive design, WCAG compliance, ADA compliance, web accessibility" />
      </Helmet>
      
      <Navigation /></Navigation>
      <main className="pt-20 px-4 py-20"></main>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Professional page services to help your business succeed and grow.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Accessibility Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our accessibility solutions cover all aspects of digital inclusion, ensuring your products work for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="w-12 h-12 text-purple-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer /></Footer>
    </div>
  );
};

export default AccessibilityPage;