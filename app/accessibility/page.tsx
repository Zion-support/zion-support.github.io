import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Ear, Hand, Brain, Shield, CheckCircle, Users, Globe, Zap } from "lucide-react";

const AccessibilityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Accessibility Statement | Zion Tech Group</title>
        <meta
          name="description"
          content="Zion Tech Group's commitment to digital accessibility. Learn about our accessibility features, compliance standards, and inclusive design practices."
        />
        <meta name="keywords" content="accessibility, digital accessibility, inclusive design, WCAG compliance, assistive technology" />
        <link rel="canonical" href="https://ziontechgroup.com/accessibility" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Accessibility Statement
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            At Zion Tech Group, we are committed to ensuring digital accessibility for all users. 
            We strive to provide an inclusive experience that works for everyone, regardless of ability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Report Accessibility Issue
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/support"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Support
            </Link>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Accessibility Commitment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe that technology should be accessible to everyone. Our commitment extends beyond compliance to creating truly inclusive digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Visual Accessibility</h3>
              <p className="text-gray-300 mb-4">
                High contrast ratios, scalable text, and screen reader compatibility for users with visual impairments.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• WCAG AA color contrast compliance</li>
                <li>• Scalable text up to 200%</li>
                <li>• Screen reader optimization</li>
                <li>• Alternative text for images</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <Ear className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Audio Accessibility</h3>
              <p className="text-gray-300 mb-4">
                Captions, transcripts, and audio descriptions to ensure content is accessible to users with hearing impairments.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Video captions and transcripts</li>
                <li>• Audio descriptions for visual content</li>
                <li>• Visual indicators for audio cues</li>
                <li>• Volume control options</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Hand className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Motor Accessibility</h3>
              <p className="text-gray-300 mb-4">
                Keyboard navigation, voice control, and alternative input methods for users with motor disabilities.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Full keyboard navigation</li>
                <li>• Voice control compatibility</li>
                <li>• Large click targets</li>
                <li>• Customizable interaction timeouts</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cognitive Accessibility</h3>
              <p className="text-gray-300 mb-4">
                Clear language, consistent navigation, and customizable interfaces for users with cognitive disabilities.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Plain language and clear instructions</li>
                <li>• Consistent navigation patterns</li>
                <li>• Customizable interface options</li>
                <li>• Error prevention and recovery</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Privacy & Security</h3>
              <p className="text-gray-300 mb-4">
                Secure and private access to our services, with clear privacy controls and data protection.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Secure data transmission</li>
                <li>• Privacy controls and settings</li>
                <li>• Clear data usage policies</li>
                <li>• User consent management</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Standards</h3>
              <p className="text-gray-300 mb-4">
                Compliance with international accessibility standards and best practices.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• WCAG 2.1 AA compliance</li>
                <li>• Section 508 compliance</li>
                <li>• EN 301 549 compliance</li>
                <li>• Regular accessibility audits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Accessibility Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our website includes numerous accessibility features to ensure an inclusive experience for all users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Keyboard Navigation</h3>
              <p className="text-gray-300 text-sm">Full website navigation using only keyboard</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Screen Reader Support</h3>
              <p className="text-gray-300 text-sm">Optimized for screen readers and assistive technology</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">High Contrast</h3>
              <p className="text-gray-300 text-sm">High contrast mode for better visibility</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Inclusive Design</h3>
              <p className="text-gray-300 text-sm">Designed with accessibility in mind from the start</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We adhere to international accessibility standards and continuously work to improve our compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">WCAG 2.1 AA</h3>
              <p className="text-gray-300 mb-4">
                We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
              </p>
              <div className="text-sm text-gray-400">
                <p>• Perceivable content</p>
                <p>• Operable interface</p>
                <p>• Understandable information</p>
                <p>• Robust technology</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Section 508</h3>
              <p className="text-gray-300 mb-4">
                Compliance with Section 508 of the Rehabilitation Act for federal accessibility requirements.
              </p>
              <div className="text-sm text-gray-400">
                <p>• Electronic and information technology</p>
                <p>• Federal accessibility standards</p>
                <p>• Government compliance</p>
                <p>• Public sector requirements</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">EN 301 549</h3>
              <p className="text-gray-300 mb-4">
                European accessibility standard for information and communication technology products and services.
              </p>
              <div className="text-sm text-gray-400">
                <p>• European accessibility standard</p>
                <p>• ICT accessibility requirements</p>
                <p>• Public procurement compliance</p>
                <p>• International standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Feedback */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            We Value Your Feedback
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you encounter any accessibility barriers or have suggestions for improvement, 
            please contact us. We are committed to addressing accessibility issues promptly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Accessibility Team</h3>
              <p className="text-cyan-400">accessibility@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">General Support</h3>
              <p className="text-cyan-400">support@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone Support</h3>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Contact Accessibility Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/support"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityPage;