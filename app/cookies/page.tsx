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
      examples: ['Session management', 'Security tokens', 'Load balancing']
    },
    {
      title: 'Analytics Cookies',
      icon: BarChart,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Google Analytics', 'Page views', 'User behavior tracking']
    },
    {
      title: 'Preference Cookies',
      icon: Settings,
      description: 'These cookies remember your preferences and settings.',
      examples: ['Language selection', 'Theme preferences', 'Display settings']
    },
    {
      title: 'Marketing Cookies',
      icon: User,
      description: 'These cookies are used to deliver relevant advertisements.',
      examples: ['Ad targeting', 'Campaign tracking', 'Conversion measurement']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <a href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </a>
            <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-gray-300 text-lg">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies on our website.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-800/50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
            </section>

            <section className="bg-slate-800/50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cookieCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={index} className="border border-slate-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <IconComponent className="w-6 h-6 text-cyan-400 mr-3" />
                        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{category.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                          {category.examples.map((example, idx) => (
                            <li key={idx}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="bg-slate-800/50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 mb-4">
                You can control and manage cookies in various ways. Please note that removing or blocking 
                cookies can impact your user experience and parts of our website may no longer be fully accessible.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                  <p className="text-gray-300 text-sm">
                    Most browsers allow you to refuse cookies or delete them. You can usually find these 
                    settings in the "Options" or "Preferences" menu of your browser.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cookie Consent</h3>
                  <p className="text-gray-300 text-sm">
                    When you first visit our website, you'll see a cookie consent banner where you can 
                    choose which types of cookies you want to accept.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-slate-800/50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
                <p>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a></p>
                <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
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