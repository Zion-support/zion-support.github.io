import React from 'react';
import { Accessibility, Eye, Ear, Hand, Brain, Shield, CheckCircle, AlertTriangle, Info } from 'lucide-react';

export default function Accessibility() {
  const accessibilityFeatures = [
    {
      name: 'Keyboard Navigation',
      description: 'Full keyboard accessibility for all interactive elements',
      icon: Hand,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Screen Reader Support',
      description: 'Compatible with major screen readers and assistive technologies',
      icon: Ear,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'High Contrast Mode',
      description: 'Enhanced color contrast for better visibility',
      icon: Eye,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Text Resizing',
      description: 'Scalable text that maintains readability',
      icon: Brain,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Alt Text for Images',
      description: 'Descriptive alternative text for all images',
      icon: Accessibility,
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Semantic HTML',
      description: 'Proper heading structure and landmark navigation',
      icon: Shield,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const complianceStandards = [
    {
      standard: 'WCAG 2.1 AA',
      level: 'Level AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Compliant',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      standard: 'Section 508',
      level: 'Federal',
      description: 'Federal accessibility requirements for electronic and information technology',
      status: 'Compliant',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      standard: 'ADA Title III',
      level: 'Civil Rights',
      description: 'Americans with Disabilities Act requirements for public accommodations',
      status: 'Compliant',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      standard: 'EN 301 549',
      level: 'European',
      description: 'European accessibility requirements for ICT products and services',
      status: 'In Progress',
      icon: AlertTriangle,
      color: 'text-yellow-600'
    }
  ];

  const accessibilityTools = [
    {
      name: 'WAVE Web Accessibility Evaluator',
      purpose: 'Automated accessibility testing and reporting',
      url: 'https://wave.webaim.org/',
      description: 'Free tool to evaluate web accessibility'
    },
    {
      name: 'axe DevTools',
      purpose: 'Browser extension for accessibility testing',
      url: 'https://www.deque.com/axe/browser-extensions/',
      description: 'Comprehensive accessibility testing in your browser'
    },
    {
      name: 'Color Contrast Analyzer',
      purpose: 'Check color contrast ratios',
      url: 'https://www.tpgi.com/color-contrast-checker/',
      description: 'Ensure text meets accessibility standards'
    },
    {
      name: 'Screen Reader Testing',
      purpose: 'Test with actual screen readers',
      url: 'https://www.nvaccess.org/about-nvda/',
      description: 'NVDA (Windows) and VoiceOver (Mac) testing'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
              <Accessibility className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Web Accessibility
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Zion Tech Group is committed to making our website accessible to all users, including those with disabilities. We strive to meet and exceed web accessibility standards.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Our Accessibility Commitment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that digital accessibility is a fundamental right, not a privilege. Our team is dedicated to creating an inclusive online experience for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">What We Do</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Regular accessibility audits and testing</li>
                <li>• User testing with people with disabilities</li>
                <li>• Continuous improvement based on feedback</li>
                <li>• Training for our development team</li>
                <li>• Compliance with international standards</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Info className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Our Approach</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Accessibility-first design principles</li>
                <li>• Inclusive user experience design</li>
                <li>• Regular accessibility reviews</li>
                <li>• Feedback integration and iteration</li>
                <li>• Industry best practices adoption</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Accessibility Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our website includes comprehensive accessibility features to ensure all users can navigate, understand, and interact with our content effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{feature.name}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Compliance Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain compliance with major accessibility standards and regulations to ensure our website meets the highest accessibility requirements.
            </p>
          </div>

          <div className="space-y-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <standard.icon className={`h-5 w-5 ${standard.color}`} />
                      <h3 className="text-lg font-semibold text-gray-900">{standard.standard}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {standard.level}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{standard.description}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-700">Status:</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        standard.status === 'Compliant' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {standard.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing and Tools Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Testing and Validation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use a combination of automated tools, manual testing, and user feedback to ensure our website meets accessibility standards.
            </p>
          </div>

          <div className="space-y-6">
            {accessibilityTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                    <p className="text-gray-600 mb-3">{tool.description}</p>
                    <div className="flex items-center space-x-4">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Purpose:</span>
                        <p className="text-sm text-gray-600">{tool.purpose}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">URL:</span>
                        <a 
                          href={tool.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 underline ml-2"
                        >
                          Visit Tool
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback and Support Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            We Value Your Feedback
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your feedback helps us improve our accessibility. If you encounter any accessibility issues or have suggestions for improvement, please let us know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Report Issues</h3>
              <p className="text-gray-600 mb-4">
                Found an accessibility problem? Let us know so we can fix it.
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Accessibility%20Issue%20Report"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Report Issue
              </a>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Suggest Improvements</h3>
              <p className="text-gray-600 mb-4">
                Have ideas for making our site more accessible? We'd love to hear them.
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Accessibility%20Improvement%20Suggestion"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Share Suggestion
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">Accessibility Support</h3>
            <p className="mb-6 text-blue-100">
              Need help accessing our website or have questions about our accessibility features? Our team is here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Send Email
              </a>
              <a
                href="tel:+13024640950"
                className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Updates and Progress Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Continuous Improvement
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We are committed to continuously improving our website's accessibility. Here's what we're working on and our progress.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">95%</div>
              <h3 className="font-semibold text-gray-900 mb-2">WCAG 2.1 AA Compliance</h3>
              <p className="text-sm text-gray-600">Current compliance level</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">Monthly</div>
              <h3 className="font-semibold text-gray-900 mb-2">Accessibility Reviews</h3>
              <p className="text-sm text-gray-600">Regular testing schedule</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-2">24h</div>
              <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-sm text-gray-600">For accessibility issues</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Improvements</h3>
            <ul className="text-left space-y-2 text-sm text-gray-600">
              <li>• Enhanced keyboard navigation for all interactive elements</li>
              <li>• Improved color contrast ratios for better visibility</li>
              <li>• Added ARIA labels and semantic HTML structure</li>
              <li>• Optimized screen reader compatibility</li>
              <li>• Enhanced form accessibility and error messaging</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}