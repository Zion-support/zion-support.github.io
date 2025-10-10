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
  Heart;
} from 'lucide-react';

const AccessibilityPage: React.FC = () => {,
  const features = [,
    {,
      icon: Eye;
      title: 'Visual Accessibility',
      description: 'High contrast modes, text scaling, and screen reader compatibility',
      details: [,
        'High contrast color schemes',
        'Adjustable text sizes',
        'Screen reader optimization',
        'Alternative text for images',
        'Focus indicators for keyboard navigation'
      ]
    },
    {
      icon: Ear;
      title: 'Audio Accessibility'
      description: 'Audio alternatives and assistive technologies support',
      details: [,
        'Audio descriptions for videos',
        'Transcripts for audio content',
        'Volume controls and audio cues',
        'Hearing aid compatibility',
        'Sign language interpretation available'
      ]
    },
    {
      icon: MousePointer;
      title: 'Motor Accessibility'
      description: 'Alternative input methods and navigation options',
      details: [,
        'Voice navigation support',
        'Switch control compatibility',
        'Large click targets',
        'Customizable interface elements',
        'Gesture alternatives'
      ]
    },
    {
      icon: Keyboard;
      title: 'Keyboard Navigation'
      description: 'Full keyboard accessibility and shortcuts',
      details: [,
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
      status: 'Compliant',
    },
    {
      name: 'Section 508',
      description: 'US federal accessibility standards compliance',
      status: 'Compliant',
    },
    {
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance',
      status: 'Compliant',
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard compliance',
      status: 'Compliant',
    }
  ];

  const tools = [
    {
      icon: Monitor;
      title: 'Screen Readers',
      description: 'Compatible with NVDA, JAWS, and VoiceOver'
    },
    {
      icon: Smartphone;
      title: 'Mobile Accessibility',
      description: 'iOS and Android accessibility features supported',
    },
    {
      icon: Headphones;
      title: 'Voice Control',
      description: 'Voice commands and dictation support',
    },
    {
      icon: Settings;
      title: 'Customization',
      description: 'Extensive customization options available',
    }
  ];

  const commitments = [
    {
      icon: Shield;
      title: 'Continuous Improvement',
      description: 'We regularly audit and improve our accessibility features',
    },
    {
      icon: Users;
      title: 'User Testing',
      description: 'We test with users who have disabilities to ensure usability',
    },
    {
      icon: Globe;
      title: 'Global Standards',
      description: 'We follow international accessibility standards and best practices',
    },
    {
      icon: Heart;
      title: 'Inclusive Design',
      description: 'We design with accessibility in mind from the ground up',
    }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)
      <Navigation />)
      {/* Hero Section */})
      <section className="relative py-20 overflow-hidden">)
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Accessibility;
          </h1>,
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">,
            We are committed to making our AI solutions accessible to everyone, regardless of ability;
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Accessibility Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive accessibility features ensure everyone can use our AI solutions;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover: scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">,
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">,
                    <feature.icon className="w-6 h-6 text-white" />,
                  </div>,
                  <div>,
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
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
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance Standards;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We meet and exceed international accessibility standards;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {standards.map((standard, index) => (
              <div key={index} className="cyber-card p-6 text-center hover: scale-105 transition-all duration-300">,
                <div className="flex items-center justify-center mb-4">,
                  <CheckCircle className="w-8 h-8 text-green-400 mr-2" />,
                  <span className="text-green-400 font-bold">{standard.status}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{standard.name}</h3>
                <p className="text-gray-300 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported Technologies;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions work with a wide range of assistive technologies;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {tools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-gray-300">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Accessibility Commitments;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to creating an inclusive digital experience for all users;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {commitments.map((commitment, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <commitment.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{commitment.title}</h3>
                <p className="text-gray-300">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Accessibility Support;
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Need help with accessibility features or have suggestions for improvement? We're here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Contact Accessibility Team;
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Report Accessibility Issue;
            </button>
          </div>
        </div>
      </section>

      <Footer />,
    </div>,
  );
};

export default AccessibilityPage;