<<<<<<< HEAD
'use client';
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, Eye, Ear, Hand, Brain, Shield, Target, BarChart, Zap, ArrowRight } from 'lucide-react';
=======
import { CheckCircle, Eye, Ear, Hand, Brain } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-8dbb
=======
import { CheckCircle, Eye, Ear, Hand, Brain, Shield, Zap } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-710b
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AccessibilityPage: React.FC = () => {
  const features = [
=======
'use client'
import { CheckCircle } from 'lucide-react'
export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional page services and solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6202
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Visual Accessibility',
      description: 'Screen reader compatibility, high contrast modes, and visual indicators for better user experience.',
      benefits: ['Screen reader support', 'High contrast themes', 'Focus indicators', 'Text scaling']
    },
    {
      icon: <Ear className="w-8 h-8" />,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and sound alternatives for hearing-impaired users.',
      benefits: ['Audio descriptions', 'Closed captions', 'Sound alternatives', 'Volume controls']
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: 'Motor Accessibility',
<<<<<<< HEAD
      description: 'Keyboard navigation, voice control, and alternative input methods for users with motor disabilities.',
      benefits: ['Keyboard navigation', 'Voice control', 'Alternative inputs', 'Gesture recognition']
=======
      description: 'Keyboard navigation, voice control, and adaptive input methods for users with motor impairments.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch control', 'Adaptive input']
>>>>>>> cursor/fix-errors-and-merge-to-main-710b
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Cognitive Accessibility',
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Clear language, consistent navigation, and simplified interfaces for cognitive accessibility.',
      benefits: ['Clear language', 'Consistent design', 'Error prevention', 'Progress indicators']
    }
  ]
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
  ]
    'WCAG 2.1 AA Compliance',
    'Section 508 Compliance',
    'ADA Compliance',
    'EN 301 549 Compliance'
  ]
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
=======
      description: 'Clear navigation, simplified interfaces, and cognitive load reduction for better usability.',
      benefits: ['Clear navigation', 'Simplified interfaces', 'Cognitive load reduction', 'Memory aids']
>>>>>>> cursor/fix-errors-and-merge-to-main-8dbb
=======
      description: 'Clear language, consistent navigation, and cognitive load reduction for better comprehension.',
      benefits: ['Clear language', 'Consistent navigation', 'Cognitive load reduction', 'Memory aids']
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Secure accessibility features that protect user data while providing inclusive experiences.',
      benefits: ['Data protection', 'Privacy controls', 'Secure authentication', 'Accessible security']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast loading times and efficient accessibility features that don\'t compromise performance.',
      benefits: ['Fast loading', 'Efficient features', 'Optimized performance', 'Smooth interactions']
>>>>>>> cursor/fix-errors-and-merge-to-main-710b
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Professional accessibility services and solutions." />
        <meta name="keywords" content="accessibility, services, solutions, technology" />
=======
        <meta name="description" content="Professional accessibility services and solutions for inclusive digital experiences." />
        <meta name="keywords" content="accessibility, inclusive design, digital accessibility, WCAG compliance" />
>>>>>>> cursor/fix-errors-and-merge-to-main-710b
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
<<<<<<< HEAD
              Accessibility
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional accessibility services to help your business succeed and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
=======
              Accessibility Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creating inclusive digital experiences that work for everyone, regardless of ability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
>>>>>>> cursor/fix-errors-and-merge-to-main-710b
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
<<<<<<< HEAD
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our accessibility services.
=======
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Make Your Digital Experience Accessible?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our accessibility services and how we can help make your digital products inclusive for everyone.
>>>>>>> cursor/fix-errors-and-merge-to-main-710b
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
              <p className="text-gray-300 mb-4">
                Track record of successful projects and satisfied clients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  High Success Rate
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Client Satisfaction
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Ongoing Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Continuous Improvement
                </li>
              </ul>
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
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive accessibility services to make your digital products inclusive
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="w-12 h-12 text-blue-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
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
        </section>

        {/* Standards Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We ensure your products meet all major accessibility standards and regulations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {standards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white">
                    {standard}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Accessibility Matters
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Beyond compliance, accessibility brings real business value
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 text-purple-400 mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your Products Accessible?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's work together to create inclusive digital experiences that work for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                Start Your Accessibility Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
=======
            </div>
          </div>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-8dbb
=======
            </div>
          </div>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-710b
      </main>

      <Footer />
    </div>
<<<<<<< HEAD
  )
}
export default AccessibilityPage
=======
  );
};

<<<<<<< HEAD
export default AccessibilityPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-8dbb
=======
export default AccessibilityPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-710b
