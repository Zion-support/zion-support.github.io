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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"></div>
            {features.map((feature, index) => ()
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2"></ul>
                  {feature.benefits.map((benefit, benefitIndex) => ()
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center"></div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"></p>
                Contact us today to learn more about our page services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"></button>
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"></button>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer /></Footer>
    </div>
  );
};

export default PagePage;