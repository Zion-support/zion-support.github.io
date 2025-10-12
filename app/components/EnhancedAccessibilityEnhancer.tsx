import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const EnhancedAccessibilityEnhancerPage: React.FC = () => {
  const features = [
    {
      title: 'Advanced Screen Reader Support',
      description: 'Comprehensive screen reader compatibility with ARIA labels and semantic HTML.'
    },
    {
      title: 'Keyboard Navigation',
      description: 'Full keyboard accessibility with focus management and skip links.'
    },
    {
      title: 'High Contrast Mode',
      description: 'Automatic detection and support for high contrast preferences.'
    },
    {
      title: 'Voice Control',
      description: 'Voice command support for hands-free navigation and interaction.'
    }
  ];

  const benefits = [
    'Improved user experience for all users',
    'Compliance with WCAG 2.1 AA standards',
    'Better SEO and search engine visibility',
    'Reduced legal risk and accessibility lawsuits',
    'Increased market reach and user base',
    'Enhanced brand reputation and trust'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enhanced <span className="text-purple-400">Accessibility</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced accessibility enhancement solutions.
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Accessibility Solutions?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our accessibility enhancement solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience the benefits of working with our cutting-edge accessibility enhancement solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800/30 rounded-lg">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our accessibility enhancement solutions and how they can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
              Contact Us
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EnhancedAccessibilityEnhancerPage;