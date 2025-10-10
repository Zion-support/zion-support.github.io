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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigatio>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden"></sectio>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3 Csvg%20 width%3 D%2260%22%20 height%3 D%2260%22%20 viewBox%3 D%220%200%2060%2060%22%20 xmlns%3 D%22 http%3 A//www.w3.org/2000/svg%22%3 E%3 Cg%20 fill%3 D%22 none%22%20 fill-rule%3 D%22 evenodd%22%3 E%3 Cg%20 fill%3 D%22%239 C92 AC%22%20 fill-opacity%3 D%220.1%22%3 E%3 Ccircle%20 cx%3 D%2230%22%20 cy%3 D%2230%22%20 r%3 D%222%22/%3 E%3 C/g%3 E%3 C/g%3 E%3 C/svg%3 E')] opacity-20"></div>

        <div className="relative z-10 max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5 xl md:text-7 xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1></<<<h>Accessibility</h>
          </h1>
          <p className="text-xl md:text-2 xl text-gray-300 mb-8 max-w-4 xl mx-auto">
            We are committed to making our AI solutions accessible to everyone, regardless of ability
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Accessibility</h></<<h>Features</h>
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Our comprehensive accessibility features ensure everyone can use our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300"></div>
                <div className="flex items-start space-x-4 mb-6"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <feature.icon className="w-6 h-6 text-white" /></featur>
                  </div>
                  <div></div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>

                <ul className="space-y-2"></u>
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-300"></l>
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /></CheckCircl>
                      <span>{detail}</spa>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Compliance</h></<<h>Standards</h>
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              We meet and exceed international accessibility standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {standards.map((standard, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
                <div className="flex items-center justify-center mb-4"></div>
                  <CheckCircle className="w-8 h-8 text-green-400 mr-2" /></CheckCircl>
                  <span className="text-green-400 font-bold">{standard.status}</spa>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{standard.name}</h>
                <p className="text-gray-300 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-white/5"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Supported</h></<<h>Technologies</h>
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Our solutions work with a wide range of assistive technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {tools.map((tool, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <tool.icon className="w-8 h-8 text-white" /></too>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h>
                <p className="text-gray-300">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Our</h></<<h>Accessibility</h> Commitments
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              We are committed to creating an inclusive digital experience for all users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {commitments.map((commitment, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <commitment.icon className="w-8 h-8 text-white" /></commitmen>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{commitment.title}</h>
                <p className="text-gray-300">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6"></h2></<<<h>Accessibility</h></<<h>Support</h>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
            Need help with accessibility features or have suggestions for improvement? We're here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"></button></<<<butto>Contact</butto></<<butto>Accessibility</butto></<butto>Team</butto>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button></<<<butto>Report</butto></<<butto>Accessibility</butto></<butto>Issue</butto>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
};

export default AccessibilityPage;