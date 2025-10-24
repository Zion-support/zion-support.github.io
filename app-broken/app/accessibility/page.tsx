'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Eye,
  Ear,
  MousePointer,
  Keyboard,
  CheckCircle,
  AlertCircle,
  Users,
  Monitor,
  Smartphone,
  Headphones,
  Settings,
  Shield,
  Globe,
  Heart
} from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast modes, text scaling, and screen reader compatibility',
      details: [
        'High contrast color schemes',
        'Adjustable text sizes',
        'Screen reader optimization',
        'Alternative text for images',
        'Focus indicators for keyboard navigation'
      ]
    },
    {
      icon: Ear,
      title: 'Audio Accessibility',
      description: 'Audio alternatives and assistive technologies support',
      details: [
        'Audio descriptions for videos',
        'Transcripts for audio content',
        'Volume controls and audio cues',
        'Hearing aid compatibility',
        'Sign language interpretation available'
      ]
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Alternative input methods and navigation options',
      details: [
        'Voice navigation support',
        'Switch control compatibility',
        'Large click targets',
        'Customizable interface elements',
        'Gesture alternatives'
      ]
    },
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Full keyboard accessibility and shortcuts',
      details: [
        'Tab navigation support',
        'Keyboard shortcuts',
        'Skip links for main content',
        'Focus management',
        'No keyboard traps'
      ]
    }
  ];

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines Level AA compliance',
      status: 'Compliant'
    },
    {
      name: 'Section 508',
      description: 'US federal accessibility standards compliance',
      status: 'Compliant'
    },
    {
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance',
      status: 'Compliant'
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard compliance',
      status: 'Compliant'
    }
  ];

  const tools = [
    {
      icon: Monitor,
      title: 'Screen Readers',
      description: 'Compatible with NVDA, JAWS, and VoiceOver'
    },
    {
      icon: Smartphone,
      title: 'Mobile Accessibility',
      description: 'iOS and Android accessibility features supported'
    },
    {
      icon: Headphones,
      title: 'Voice Control',
      description: 'Voice commands and dictation support'
    },
    {
      icon: Settings,
      title: 'Customization',
      description: 'Extensive customization options available'
    }
  ];

  const commitments = [
    {
      icon: Shield,
      title: 'Continuous Improvement',
      description: 'We regularly audit and improve our accessibility features'
    },
    {
      icon: Users,
      title: 'User Testing',
      description: 'We test with users who have disabilities to ensure usability'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'We follow international accessibility standards and best practices'
    },
    {
      icon: Heart,
      title: 'Inclusive Design',
      description: 'We design with accessibility in mind from the ground up'
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Navigation />

      {/* Hero Section */}
      <section className=&quot;relative py-20 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20&quot;></div>

        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
          <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
            Accessibility
          </h1>
          <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
            We are committed to making our AI solutions accessible to everyone, regardless of ability
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-16 bg-white/5&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
              Accessibility Features
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Our comprehensive accessibility features ensure everyone can use our AI solutions
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;></div>
            {features.map((feature, index) => (
              <div key={index} className=&quot;cyber-card p-8 hover:scale-105 transition-all duration-300&quot;></div>
                <div className=&quot;flex items-start space-x-4 mb-6&quot;></div>
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0&quot;></div>
                    <feature.icon className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div></div>
                    <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{feature.title}</h3>
                    <p className=&quot;text-gray-300&quot;>{feature.description}</p>
                  </div>
                </div>

                <ul className=&quot;space-y-2&quot;>
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className=&quot;py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
              Compliance Standards
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              We meet and exceed international accessibility standards
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {standards.map((standard, index) => (
              <div key={index} className=&quot;cyber-card p-6 text-center hover:scale-105 transition-all duration-300&quot;></div>
                <div className=&quot;flex items-center justify-center mb-4&quot;></div>
                  <CheckCircle className=&quot;w-8 h-8 text-green-400 mr-2&quot; />
                  <span className=&quot;text-green-400 font-bold&quot;>{standard.status}</span>
                </div>
                <h3 className=&quot;text-lg font-bold text-white mb-2&quot;>{standard.name}</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className=&quot;py-16 bg-white/5&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
              Supported Technologies
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Our solutions work with a wide range of assistive technologies
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {tools.map((tool, index) => (
              <div key={index} className=&quot;text-center&quot;></div>
                <div className=&quot;w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6&quot;></div>
                  <tool.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{tool.title}</h3>
                <p className=&quot;text-gray-300&quot;>{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className=&quot;py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
              Our Accessibility Commitments
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              We are committed to creating an inclusive digital experience for all users
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {commitments.map((commitment, index) => (
              <div key={index} className=&quot;text-center&quot;></div>
                <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6&quot;></div>
                  <commitment.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>{commitment.title}</h3>
                <p className=&quot;text-gray-300&quot;>{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className=&quot;py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
            Accessibility Support
          </h2>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
            Need help with accessibility features or have suggestions for improvement? We're here to help.
          </p>

          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <button className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;>
              Contact Accessibility Team
            </button>
            <button className=&quot;border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;>
              Report Accessibility Issue
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccessibilityPage;