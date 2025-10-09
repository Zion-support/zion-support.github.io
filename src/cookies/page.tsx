import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cookie, Settings, Shield, Mail, Phone, MapPin } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.',
      required: true
    },
    {
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      required: false
    },
    {
      title: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences.',
      required: false
    },
    {
      title: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Last updated: January 2025
          </p>
          
          <div className="cyber-card p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Cookie className="w-6 h-6 mr-3 text-cyan-400" />
                What Are Cookies?
              </h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website.
                They help us provide you with a better experience by remembering your preferences and enabling certain features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Settings className="w-6 h-6 mr-3 text-cyan-400" />
                Types of Cookies We Use
              </h2>
              <div className="space-y-6">
                {cookieTypes.map((cookie, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-white mb-2">{cookie.title}</h3>
                    <p className="text-gray-300 mb-2">{cookie.description}</p>
                    <span className={`text-sm px-2 py-1 rounded ${
                      cookie.required 
                        ? 'bg-red-900 text-red-200' 
                        : 'bg-blue-900 text-blue-200'
                    }`}>
                      {cookie.required ? 'Required' : 'Optional'}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-300 mb-4">
                You can control and manage cookies in various ways. Please note that removing or blocking cookies
                can impact your user experience and parts of our website may no longer be fully accessible.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                  <p className="text-gray-300">
                    Most browsers allow you to refuse cookies or delete them. You can usually find these settings
                    in the options or preferences menu of your browser.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cookie Consent</h3>
                  <p className="text-gray-300">
                    When you first visit our website, you'll see a cookie consent banner where you can choose
                    which types of cookies you want to allow.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Third-Party Cookies
              </h2>
              <p className="text-gray-300 mb-4">
                Some cookies on our website are set by third-party services. We use these services to enhance
                your experience and analyze how our website is used.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Google Analytics</h3>
                  <p className="text-gray-300">
                    We use Google Analytics to understand how visitors use our website. This helps us improve
                    our content and user experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Social Media</h3>
                  <p className="text-gray-300">
                    Our website may include social media features that set cookies from platforms like Facebook,
                    Twitter, and LinkedIn.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Updates to This Policy
              </h2>
              <p className="text-gray-300">
                We may update this Cookie Policy from time to time. We will notify you of any changes by
                posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Cookie Policy, please contact us:
              </p>
              <div className="mt-4 text-cyan-400 space-y-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiesPage;