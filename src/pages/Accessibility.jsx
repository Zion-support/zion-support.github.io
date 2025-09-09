import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Eye, Ear, Hand, Brain, CheckCircle, AlertTriangle, FileText, Users, Globe, Shield } from 'lucide-react';

export default function Accessibility() {
  const accessibilityFeatures = [
    {
      id: 1,
      title: "Screen Reader Support",
      description: "Full compatibility with popular screen readers including JAWS, NVDA, and VoiceOver.",
      icon: Ear,
      status: "Fully Supported"
    },
    {
      id: 2,
      title: "Keyboard Navigation",
      description: "Complete keyboard accessibility with logical tab order and keyboard shortcuts.",
      icon: Hand,
      status: "Fully Supported"
    },
    {
      id: 3,
      title: "High Contrast Mode",
      description: "High contrast color schemes and customizable text sizing for better visibility.",
      icon: Eye,
      status: "Fully Supported"
    },
    {
      id: 4,
      title: "Alternative Text",
      description: "Comprehensive alt text for all images and descriptive text for interactive elements.",
      icon: FileText,
      status: "Fully Supported"
    },
    {
      id: 5,
      title: "Focus Indicators",
      description: "Clear visual focus indicators for keyboard and assistive technology users.",
      icon: Eye,
      status: "Fully Supported"
    },
    {
      id: 6,
      title: "Semantic HTML",
      description: "Proper semantic markup and ARIA labels for screen reader compatibility.",
      icon: Code,
      status: "Fully Supported"
    }
  ];

  const complianceStandards = [
    {
      name: "WCAG 2.1 AA",
      description: "Web Content Accessibility Guidelines 2.1 Level AA compliance.",
      status: "Compliant",
      lastAudit: "2024-12-01",
      nextAudit: "2025-06-01"
    },
    {
      name: "Section 508",
      description: "U.S. federal accessibility requirements for electronic and information technology.",
      status: "Compliant",
      lastAudit: "2024-11-15",
      nextAudit: "2025-11-15"
    },
    {
      name: "ADA Title III",
      description: "Americans with Disabilities Act compliance for digital accessibility.",
      status: "Compliant",
      lastAudit: "2024-10-01",
      nextAudit: "Ongoing"
    },
    {
      name: "EN 301 549",
      description: "European accessibility requirements for ICT products and services.",
      status: "Compliant",
      lastAudit: "2024-09-01",
      nextAudit: "Ongoing"
    }
  ];

  const assistiveTechnologies = [
    "Screen readers (JAWS, NVDA, VoiceOver, TalkBack)",
    "Screen magnification software",
    "Voice recognition software",
    "Switch devices and alternative input methods",
    "Braille displays",
    "Speech-to-text software",
    "High contrast and color adjustment tools",
    "Text-to-speech software"
  ];

  const testingMethods = [
    "Automated accessibility testing tools",
    "Manual testing with screen readers",
    "Keyboard-only navigation testing",
    "Color contrast analysis",
    "User testing with people with disabilities",
    "Expert accessibility audits",
    "Continuous monitoring and improvement",
    "Regular compliance assessments"
  ];

  return (
    <>
      <SEO 
        title="Accessibility - Zion Tech Group Inclusive Design" 
        description="Learn about our commitment to digital accessibility, WCAG compliance, and inclusive design principles." 
        canonical="/accessibility" 
        url="https://ziontechgroup.com/accessibility"
      />

      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility
            </h1>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              We're committed to making our digital experiences accessible to everyone. 
              Learn about our accessibility features and compliance standards.
            </p>
          </div>

          {/* Commitment Statement */}
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Accessibility Commitment
              </h2>
              <p className="text-zion-slate-light text-lg max-w-4xl mx-auto leading-relaxed">
                Zion Tech Group is dedicated to ensuring that our website, applications, and digital services 
                are accessible to people of all abilities. We believe that technology should be inclusive and 
                usable by everyone, regardless of their physical or cognitive abilities. Our team continuously 
                works to improve accessibility and maintain compliance with international accessibility standards.
              </p>
            </div>
          </div>

          {/* Accessibility Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Accessibility Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessibilityFeatures.map((feature) => (
                <div key={feature.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all duration-300">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                      {feature.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Standards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Compliance & Standards
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {standard.name}
                    </h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                      {standard.status}
                    </span>
                  </div>
                  <p className="text-zion-slate-light text-sm mb-4">
                    {standard.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-zion-slate-light">Last Audit:</span>
                      <div className="text-white">{standard.lastAudit}</div>
                    </div>
                    <div>
                      <span className="text-zion-slate-light">Next Audit:</span>
                      <div className="text-white">{standard.nextAudit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Assistive Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Supported Assistive Technologies
            </h2>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Compatible Technologies
                  </h3>
                  <ul className="space-y-3">
                    {assistiveTechnologies.slice(0, 4).map((tech, index) => (
                      <li key={index} className="flex items-center gap-3 text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Additional Support
                  </h3>
                  <ul className="space-y-3">
                    {assistiveTechnologies.slice(4).map((tech, index) => (
                      <li key={index} className="flex items-center gap-3 text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Testing & Quality Assurance */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Testing & Quality Assurance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Testing Methods
                </h3>
                <ul className="space-y-3">
                  {testingMethods.slice(0, 4).map((method, index) => (
                    <li key={index} className="flex items-center gap-3 text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Quality Assurance
                </h3>
                <ul className="space-y-3">
                  {testingMethods.slice(4).map((method, index) => (
                    <li key={index} className="flex items-center gap-3 text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Accessibility Statement */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Accessibility Statement
            </h2>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-zion-slate-light mb-4">
                  Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
                  We are continually improving the user experience for everyone and applying the relevant 
                  accessibility standards.
                </p>
                <p className="text-zion-slate-light mb-4">
                  Our website and applications are designed to meet WCAG 2.1 AA standards and comply with 
                  applicable accessibility laws and regulations. We regularly test our digital properties 
                  for accessibility and work with accessibility experts to ensure compliance.
                </p>
                <p className="text-zion-slate-light mb-4">
                  We welcome feedback on the accessibility of our digital services. If you experience 
                  accessibility barriers or have suggestions for improvement, please contact our accessibility team.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Help Us Improve Accessibility
              </h2>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Your feedback helps us make our digital experiences more accessible. 
                Report accessibility issues or share suggestions for improvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                  Report Accessibility Issue
                </Link>
                <button className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
                  Download Accessibility Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
