'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cookie, Settings, Shield, Eye } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    icon: Cookie,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: ['Session management', 'Security', 'Load balancing']
    },
    icon: Settings,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'User settings', 'Remember me']
    },
    icon: Eye,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Page views', 'User behavior', 'Performance metrics']
    },
    icon: Shield,
      title: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
      examples: ['Ad targeting', 'Campaign tracking', 'Conversion tracking']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to improve your experience on our website.
            </p>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4">
                    <type.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex}>• {example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h3>
                <p className="text-gray-300 mb-4">
                  You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Browser Settings</h4>
                    <p className="text-gray-300">
                      Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Cookie Consent</h4>
                    <p className="text-gray-300">
                      When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h3>
                <p className="text-gray-300 mb-4">
                  Some cookies on our website are set by third-party services that appear on our pages. We don't control these cookies and you should check the third-party websites for more information about their cookies and how to manage them.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Google Analytics - for website analytics</li>
                  <li>• Social media platforms - for social sharing features</li>
                  <li>• Advertising networks - for targeted advertising</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h3>
                <p className="text-gray-300">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Questions About Cookies?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about our use of cookies, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                privacy@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;
