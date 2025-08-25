<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Brain, 
  Heart,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowRight,
  Accessibility,
  Users,
  Shield,
  Globe,
  Settings
} from 'lucide-react';
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast modes, scalable fonts, and screen reader compatibility for users with visual impairments.",
      features: [
        "High contrast color schemes",
        "Adjustable font sizes",
        "Screen reader optimization",
        "Alternative text for images",
        "Focus indicators"
      ]
    },
    {
      icon: Ear,
      title: "Auditory Accessibility",
      description: "Captions, transcripts, and audio alternatives for users with hearing difficulties.",
      features: [
        "Video captions and transcripts",
        "Audio descriptions",
        "Visual alerts and notifications",
        "Volume controls",
        "Audio alternatives for content"
      ]
    },
    {
      icon: MousePointer,
      title: "Motor Accessibility",
      description: "Keyboard navigation, voice control, and assistive technologies for users with motor impairments.",
      features: [
        "Full keyboard navigation",
        "Voice control compatibility",
        "Large click targets",
        "Customizable mouse settings",
        "Assistive device support"
      ]
    },
    {
      icon: Brain,
      title: "Cognitive Accessibility",
      description: "Clear navigation, consistent design, and simplified interfaces for users with cognitive challenges.",
      features: [
        "Clear and simple language",
        "Consistent navigation patterns",
        "Logical content structure",
        "Reduced distractions",
        "Step-by-step instructions"
      ]
    }
  ];

  const complianceStandards = [
    {
      standard: "WCAG 2.1",
      level: "AA",
      status: "Compliant",
      description: "Web Content Accessibility Guidelines 2.1 Level AA compliance ensures our website meets international accessibility standards."
    },
    {
      standard: "Section 508",
      level: "Federal",
      status: "Compliant",
      description: "Section 508 compliance ensures our digital services are accessible to federal employees and the public."
    },
    {
      standard: "ADA Title III",
      level: "Legal",
      status: "Compliant",
      description: "Americans with Disabilities Act compliance ensures equal access to our digital services."
    },
    {
      standard: "EN 301 549",
      level: "European",
      status: "Compliant",
      description: "European standard for digital accessibility ensuring compliance with EU regulations."
    }
  ];

  const accessibilityTools = [
    {
      icon: Settings,
      title: "Accessibility Controls",
      description: "Customize your browsing experience with our built-in accessibility tools.",
      link: "/accessibility-controls"
    },
    {
      icon: Globe,
      title: "Language Options",
      description: "Multiple language support with accessibility considerations for each locale.",
      link: "/language-support"
    },
    {
      icon: Users,
      title: "User Preferences",
      description: "Save your accessibility preferences for a personalized experience.",
      link: "/user-preferences"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Learn about how we protect your accessibility preferences and data.",
      link: "/privacy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Accessibility className="w-12 h-12 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
                Accessibility
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Committed to making our digital services accessible to everyone. 
              We believe technology should empower all users, regardless of their abilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue px-8 py-4 rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Report Accessibility Issue
              </Link>
              <Link
                to="/accessibility-controls"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                Accessibility Tools
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Our Commitment to Accessibility
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              At Zion Tech Group, we believe that digital accessibility is not just a legal requirement, 
              but a fundamental human right. We are committed to creating inclusive digital experiences 
              that work for everyone, regardless of their abilities or disabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-zion-blue/10 to-zion-cyan/10 rounded-2xl border border-zion-blue/20">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-zion-blue mr-3" />
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Inclusive Design
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                We design our digital services with accessibility in mind from the very beginning, 
                ensuring that all users can access and benefit from our technology solutions.
              </p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-zion-purple/10 to-zion-cyan/10 rounded-2xl border border-zion-purple/20">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-zion-purple mr-3" />
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  User-Centered Approach
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                We actively engage with users who have disabilities to understand their needs 
                and continuously improve our accessibility features and services.
=======
import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Accessibility() {
  return (
    <>
      <SEO
        title="Accessibility | Zion Tech Group"
        description="Zion Tech Group is committed to making our platform accessible to all users. Learn about our accessibility features and commitment."
        keywords="accessibility, Zion Tech Group, inclusive design, web accessibility, WCAG"
        canonical="https://ziontechgroup.com/accessibility"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Accessibility</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Committed to making our platform accessible to all users
            </p>
          </div>

          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Our Commitment</h2>
              <p className="text-zion-slate-light mb-6">
                Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant 
                accessibility standards.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Accessibility Features</h3>
              <p className="text-zion-slate-light mb-6">
                Our platform includes several accessibility features:
              </p>
              <ul className="text-zion-slate-light mb-6 space-y-2">
                <li>• Keyboard navigation support</li>
                <li>• Screen reader compatibility</li>
                <li>• High contrast mode</li>
                <li>• Resizable text</li>
                <li>• Alternative text for images</li>
                <li>• Semantic HTML structure</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-4">Standards Compliance</h3>
              <p className="text-zion-slate-light mb-6">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA 
                standards. These guidelines explain how to make web content more accessible for people 
                with disabilities.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Feedback and Support</h3>
              <p className="text-zion-slate-light mb-6">
                We welcome your feedback on the accessibility of our platform. If you experience 
                accessibility barriers or have suggestions for improvement, please contact us.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-zion-slate-light">
                For accessibility-related questions or concerns, please email us at{' '}
                <a href="mailto:accessibility@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">
                  accessibility@ziontechgroup.com
                </a>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Accessibility Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Accessibility Features
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our comprehensive accessibility features ensure that everyone can access and use our digital services effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-600"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Accessibility Compliance
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We maintain compliance with international accessibility standards to ensure our services 
              meet the highest levels of accessibility requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-600"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {standard.standard}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Level {standard.level}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {standard.status}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Tools Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Accessibility Tools & Resources
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Access our built-in accessibility tools and resources to customize your experience 
              and get the support you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={index}
                  to={tool.link}
                  className="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    {tool.description}
                  </p>
                  <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Report Issues Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Help Us Improve
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              We're committed to continuously improving our accessibility. If you encounter any accessibility issues 
              or have suggestions for improvement, please let us know.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl border border-red-200 dark:border-red-700">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                  Report Issues
                </h3>
                <p className="text-red-600 dark:text-red-300 text-sm">
                  Let us know about any accessibility problems you encounter
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <Info className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Request Features
                </h3>
                <p className="text-blue-600 dark:text-blue-300 text-sm">
                  Suggest new accessibility features you'd like to see
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-700">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                  Provide Feedback
                </h3>
                <p className="text-green-600 dark:text-green-300 text-sm">
                  Share your experience and help us improve our services
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-blue to-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:from-zion-blue-dark hover:to-zion-cyan-dark transition-all duration-300 transform hover:scale-105"
              >
                Report Accessibility Issue
              </Link>
              <Link
                to="/contact"
                className="border-2 border-zion-blue text-zion-blue px-8 py-4 rounded-lg font-semibold hover:bg-zion-blue hover:text-white transition-all duration-300"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
=======
      </main>
      <Footer />
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Accessibility - Zion Tech Group" 
        description="Zion Tech Group's commitment to web accessibility and information about accessibility features"
        keywords="accessibility, web accessibility, WCAG, inclusive design, Zion Tech Group"
        canonical="https://ziontechgroup.com/accessibility"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Accessibility
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
            We believe that technology should be inclusive and accessible to everyone.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: January 15, 2025
          </p>
        </div>

        {/* Commitment Statement */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 border border-cyan-500/20 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are dedicated to making our website accessible to all users, including those with 
              disabilities. We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 
              2.1 Level AA standards and continuously work to improve the accessibility of our digital 
              platforms.
            </p>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Accessibility Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Visual Accessibility</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• High contrast color schemes</li>
                <li>• Resizable text options</li>
                <li>• Clear typography and spacing</li>
                <li>• Alternative text for images</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8M7 4h10M7 4v16h10V4M7 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Keyboard Navigation</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Full keyboard accessibility</li>
                <li>• Logical tab order</li>
                <li>• Skip navigation links</li>
                <li>• Focus indicators</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Screen Reader Support</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Semantic HTML structure</li>
                <li>• ARIA labels and roles</li>
                <li>• Descriptive link text</li>
                <li>• Form field labels</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Content Structure</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Clear heading hierarchy</li>
                <li>• Descriptive page titles</li>
                <li>• Consistent navigation</li>
                <li>• Logical content flow</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Customization Options</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Font size adjustment</li>
                <li>• Color scheme options</li>
                <li>• Animation controls</li>
                <li>• Layout preferences</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Testing & Compliance</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Regular accessibility audits</li>
                <li>• WCAG 2.1 AA compliance</li>
                <li>• User testing with assistive technology</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Assistive Technology */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Assistive Technology Compatibility</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              Our website is designed to work with a variety of assistive technologies and tools:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Screen Readers</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• JAWS (Windows)</li>
                  <li>• NVDA (Windows)</li>
                  <li>• VoiceOver (macOS/iOS)</li>
                  <li>• TalkBack (Android)</li>
                  <li>• Orca (Linux)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Other Tools</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Magnification software</li>
                  <li>• Speech recognition software</li>
                  <li>• Alternative input devices</li>
                  <li>• High contrast mode</li>
                  <li>• Text-to-speech tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Known Issues */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Known Accessibility Issues</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              We are aware of some accessibility issues and are working to resolve them:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="text-white font-semibold mb-1">PDF Documents</h4>
                  <p className="text-gray-300 text-sm">
                    Some older PDF documents may not be fully accessible to screen readers. 
                    We are working to convert these to accessible formats.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="text-white font-semibold mb-1">Third-Party Content</h4>
                  <p className="text-gray-300 text-sm">
                    Some third-party integrations may have limited accessibility features. 
                    We are working with vendors to improve accessibility.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="text-white font-semibold mb-1">Video Content</h4>
                  <p className="text-gray-300 text-sm">
                    Some video content may not have complete closed captions or audio descriptions. 
                    We are adding these features to all video content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback & Support */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Feedback & Support</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              We welcome feedback on the accessibility of our website. If you experience any 
              accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Contact Methods</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Email: accessibility@ziontechgroup.com</li>
                  <li>• Phone: +1 302 464 0950</li>
                  <li>• Contact form on our website</li>
                  <li>• Feedback widget (bottom right of page)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We aim to respond to accessibility feedback within 2 business days and 
                  will work with you to address any issues you encounter.
                </p>
                <p className="text-gray-300 text-sm">
                  For urgent accessibility issues, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Improvement */}
        <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-3xl p-8 border border-green-500/20 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Continuous Improvement</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              We are committed to continuously improving the accessibility of our website. 
              Our accessibility team regularly reviews our digital platforms and works to 
              implement best practices and address any accessibility barriers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Monthly</div>
                <p className="text-gray-300">Accessibility audits</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Quarterly</div>
                <p className="text-gray-300">User testing sessions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Annually</div>
                <p className="text-gray-300">Policy updates</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Help Us Improve</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your feedback helps us create a more accessible experience for everyone. 
            Together, we can make technology more inclusive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium text-lg"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:accessibility@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium text-lg"
            >
              Send Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
  );
}