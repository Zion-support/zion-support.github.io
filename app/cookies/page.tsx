import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, Shield, Settings, BarChart, User } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieCategories = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      necessary: true,
      cookies: [
        {
          name: 'session_id',
          purpose: 'Maintains user session state',
          duration: 'Session'
        },
        {
          name: 'csrf_token',
          purpose: 'Security protection against CSRF attacks',
          duration: 'Session'
        }
      ]
    },
    {
      title: 'Analytics Cookies',
      icon: BarChart,
      description: 'These cookies help us understand how visitors interact with our website.',
      necessary: false,
      cookies: [
        {
          name: '_ga',
          purpose: 'Google Analytics - distinguishes users',
          duration: '2 years'
        },
        {
          name: '_gid',
          purpose: 'Google Analytics - distinguishes users',
          duration: '24 hours'
        }
      ]
    },
    {
      title: 'Preference Cookies',
      icon: Settings,
      description: 'These cookies remember your preferences and settings.',
      necessary: false,
      cookies: [
        {
          name: 'theme_preference',
          purpose: 'Remembers your theme choice',
          duration: '1 year'
        },
        {
          name: 'language_preference',
          purpose: 'Remembers your language choice',
          duration: '1 year'
        }
      ]
    },
    {
      title: 'Marketing Cookies',
      icon: User,
      description: 'These cookies are used to deliver relevant advertisements.',
      necessary: false,
      cookies: [
        {
          name: '_fbp',
          purpose: 'Facebook Pixel - tracks conversions',
          duration: '3 months'
        },
        {
          name: 'ads_preferences',
          purpose: 'Stores ad personalization preferences',
          duration: '1 year'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <a
              href="/"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </a>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
              when you visit our website. By continuing to use our site, you agree to our use of cookies.
            </p>
          </div>

          {/* Last Updated */}
          <div className="bg-gray-800/50 rounded-lg p-6 mb-12">
            <p className="text-sm text-gray-400">
              <strong>Last Updated:</strong> January 15, 2024
            </p>
          </div>

          {/* What Are Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              What Are Cookies?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information 
                to website owners.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize 
                content and advertisements. You can control cookie settings through your browser preferences.
              </p>
            </div>
          </section>

          {/* Cookie Categories */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Types of Cookies We Use
            </h2>
            
            <div className="space-y-8">
              {cookieCategories.map((category, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <category.icon className="w-6 h-6 text-cyan-400 mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {category.description}
                      </p>
                      {category.necessary && (
                        <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                          Always Active
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="ml-9">
                    <h4 className="text-lg font-medium text-white mb-3">
                      Cookies Used:
                    </h4>
                    <div className="space-y-2">
                      {category.cookies.map((cookie, cookieIndex) => (
                        <div key={cookieIndex} className="bg-gray-900/50 rounded p-3">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-mono text-cyan-400 text-sm">
                              {cookie.name}
                            </span>
                            <span className="text-gray-400 text-sm">
                              {cookie.duration}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm">
                            {cookie.purpose}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Managing Your Cookie Preferences
            </h2>
            
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Browser Settings
              </h3>
              <p className="text-gray-300 mb-4">
                You can control and delete cookies through your browser settings. Most browsers 
                allow you to refuse cookies or delete them. However, doing so may affect the 
                functionality of our website.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-white mb-2">Chrome</h4>
                  <p className="text-sm text-gray-400">
                    Settings → Privacy and Security → Cookies and other site data
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Firefox</h4>
                  <p className="text-sm text-gray-400">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Safari</h4>
                  <p className="text-sm text-gray-400">
                    Preferences → Privacy → Manage Website Data
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Edge</h4>
                  <p className="text-sm text-gray-400">
                    Settings → Cookies and site permissions → Cookies and site data
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Contact Us
            </h2>
            
            <div className="bg-gray-800/50 rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;
