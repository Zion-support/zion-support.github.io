import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Settings, Eye, Lock } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  const cookieTypes = [
    {
      icon: Settings,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      purpose: 'Enable basic functions like page navigation, access to secure areas, and remember your preferences.',
      examples: ['Session cookies', 'Authentication cookies', 'Security cookies'],
      retention: 'Session or up to 1 year'
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      purpose: 'Help us improve our website performance and user experience.',
      examples: ['Google Analytics', 'Heat mapping tools', 'Performance monitoring'],
      retention: 'Up to 2 years'
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
      purpose: 'Provide enhanced features and personalization options.',
      examples: ['Language preferences', 'User interface settings', 'Customization data'],
      retention: 'Up to 1 year'
    },
    {
      icon: Lock,
      title: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      purpose: 'Deliver personalized advertisements and measure advertising effectiveness.',
      examples: ['Social media pixels', 'Advertising networks', 'Retargeting cookies'],
      retention: 'Up to 1 year'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies on our website." />
        <meta name="keywords" content="cookie policy, privacy, data protection, cookies, tracking" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
                when you visit our website.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Shield className="w-8 h-8 text-cyan-500 mr-3" />
                What Are Cookies?
              </h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-300">
                Cookies allow a website to recognize a user's device and remember information about their visit, 
                such as their preferred language and other settings. This can make your next visit easier and the site more useful to you.
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Cookies We Use</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We use different types of cookies for various purposes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">{type.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Purpose:</h4>
                      <p className="text-sm text-gray-300">{type.purpose}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Retention:</h4>
                      <p className="text-sm text-gray-300">{type.retention}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-xl text-gray-300">
                You have control over the cookies we use
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. 
                  You can set your browser to refuse cookies or delete certain cookies.
                </p>
                <p className="text-gray-300 mb-4">
                  However, if you choose to delete or refuse cookies, some features of our website may not function properly.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Cookie Consent</h3>
                <p className="text-gray-300 mb-4">
                  When you first visit our website, you'll see a cookie consent banner. 
                  You can choose which types of cookies you want to allow.
                </p>
                <p className="text-gray-300">
                  You can change your preferences at any time by clicking the "Cookie Settings" link in our website footer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions About Our Cookie Policy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about our use of cookies, please contact us.
            </p>
            <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-block">
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookiePolicyPage;