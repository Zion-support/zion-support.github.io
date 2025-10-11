import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Shield, Eye, Database, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      icon: Settings,
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly.',
      purpose: 'Enable basic website functionality and security features',
      duration: 'Session or up to 1 year',
      required: true
    },
    {
      icon: Eye,
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      purpose: 'Collect anonymous usage statistics and improve user experience',
      duration: 'Up to 2 years',
      required: false
    },
    {
      icon: Users,
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements.',
      purpose: 'Track user behavior for targeted advertising and marketing',
      duration: 'Up to 1 year',
      required: false
    },
    {
      icon: Database,
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      purpose: 'Remember user preferences and provide personalized content',
      duration: 'Up to 1 year',
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage & Management</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website and how you can manage your cookie preferences." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
              on our website and how you can manage your cookie preferences.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: January 15, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* What Are Cookies */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                enabling certain website functions.
              </p>
            </div>

            {/* Types of Cookies */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
              <div className="space-y-6">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="border border-gray-600 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <cookie.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">{cookie.name}</h3>
                          {cookie.required && (
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">Required</span>
                          )}
                        </div>
                        <p className="text-gray-300 mb-3">{cookie.description}</p>
                        <div className="space-y-2 text-sm">
                          <p><span className="text-cyan-400 font-medium">Purpose:</span> <span className="text-gray-300">{cookie.purpose}</span></p>
                          <p><span className="text-cyan-400 font-medium">Duration:</span> <span className="text-gray-300">{cookie.duration}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cookie Management */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                You can control and manage cookies in various ways. Please note that removing or 
                blocking cookies can impact your user experience and parts of our website may no 
                longer be fully accessible.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Most web browsers allow you to control cookies through their settings preferences. 
                    You can set your browser to refuse cookies or delete certain cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent Banner</h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you first visit our website, you'll see a cookie consent banner where you 
                    can choose which types of cookies to accept.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Third-Party Cookies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Some cookies on our site are set by third-party services. You can manage these 
                    through your browser settings or by visiting the third-party websites directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We use third-party services that may set cookies on your device. These include:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Google Analytics</h4>
                    <p className="text-gray-300 text-sm">For website analytics and performance monitoring</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Google Tag Manager</h4>
                    <p className="text-gray-300 text-sm">For managing tracking codes and tags</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Social Media Platforms</h4>
                    <p className="text-gray-300 text-sm">For social media integration and sharing features</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by posting the updated policy on this page.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiesPage;