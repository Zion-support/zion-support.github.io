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
          duration: 'Session',
          type: 'First-party'
        },
        {
          name: 'csrf_token',
          purpose: 'Prevents cross-site request forgery attacks',
          duration: 'Session',
          type: 'First-party'
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
          duration: '2 years',
          type: 'Third-party'
        },
        {
          name: '_gid',
          purpose: 'Google Analytics - distinguishes users',
          duration: '24 hours',
          type: 'Third-party'
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
          purpose: 'Remembers your theme preference (light/dark)',
          duration: '1 year',
          type: 'First-party'
        },
        {
          name: 'language_preference',
          purpose: 'Remembers your language preference',
          duration: '1 year',
          type: 'First-party'
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
          duration: '3 months',
          type: 'Third-party'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              How We Use Cookies and Similar Technologies
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
              when you visit our website. It explains what these technologies are and why we use them.
            </p>
          </div>
        </section>

        {/* Cookie Categories */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Types of Cookies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieCategories.map((category, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    {category.necessary && (
                      <span className="ml-auto bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">Cookies Used:</h4>
                    {category.cookies.map((cookie, cookieIndex) => (
                      <div key={cookieIndex} className="bg-gray-800/50 p-3 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-mono text-cyan-400 text-sm">{cookie.name}</span>
                          <span className="text-xs text-gray-400">{cookie.type}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-1">{cookie.purpose}</p>
                        <p className="text-gray-400 text-xs">Duration: {cookie.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              You have control over which cookies you accept. You can manage your preferences below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. 
                  You can set your browser to refuse cookies or delete certain cookies.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>• Chrome: Settings > Privacy and security > Cookies</li>
                  <li>• Firefox: Options > Privacy & Security > Cookies</li>
                  <li>• Safari: Preferences > Privacy > Cookies</li>
                  <li>• Edge: Settings > Cookies and site permissions</li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Cookie Consent</h3>
                <p className="text-gray-300 mb-4">
                  When you first visit our website, you'll see a cookie consent banner. 
                  You can choose which types of cookies to accept or reject.
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Manage Cookie Preferences
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Questions About Our Cookie Policy?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              If you have any questions about our use of cookies, please contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">Get detailed information</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak with our team</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">Our headquarters</p>
                <p className="text-cyan-400 font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;