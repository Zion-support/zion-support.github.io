import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Accessibility, CheckCircle, Users, Settings, Eye, Volume2 } from 'lucide-react';

const AccessibilityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Accessibility - Zion Tech Group | Inclusive Design & Web Accessibility</title>
        <meta name="description" content="Learn about our commitment to web accessibility and inclusive design. We strive to make our website accessible to everyone." />
        <meta name="keywords" content="accessibility, inclusive design, web accessibility, WCAG, ADA compliance" />
      </Helmet>

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Accessibility
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            We are committed to making our website accessible to everyone, regardless of ability or technology used.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Accessibility className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Commitment</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
              We continually improve the user experience for everyone and apply the relevant accessibility standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Eye className="w-5 h-5 text-cyan-400 mr-2" />
                  Visual Accessibility
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">High contrast color schemes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Scalable text and images</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Alt text for all images</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Volume2 className="w-5 h-5 text-cyan-400 mr-2" />
                  Audio Accessibility
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Video captions and transcripts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Audio descriptions for videos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Screen reader compatibility</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-900/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
              <p className="text-gray-300 mb-4">
                If you encounter any accessibility barriers or have suggestions for improvement, 
                please contact us:
              </p>
              <p className="text-cyan-400">
                Email: <a href="mailto:accessibility@ziontechgroup.com" className="hover:text-cyan-300">accessibility@ziontechgroup.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityPage;