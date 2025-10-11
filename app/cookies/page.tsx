import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Shield, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      icon: Cookie,
      title: 'Essential Cookies',
      description: 'Required for the website to function properly and cannot be disabled.'
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization features.'
    },
    {
      icon: Shield,
      title: 'Security Cookies',
      description: 'Help protect against fraud and maintain security of our services.'
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Information</title>
        <meta name="description" content="Learn about how we use cookies and similar technologies on our website." />
        <meta name="keywords" content="cookie policy, cookies, tracking, website analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your experience.
            </p>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Types of Cookies
              </h2>
              <p className="text-xl text-gray-300">
                We use different types of cookies for various purposes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                enabling certain functionality.
              </p>
              
              <h3 className="text-xl font-bold text-white mb-4">How We Use Cookies</h3>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• To ensure our website functions properly</li>
                <li>• To remember your preferences and settings</li>
                <li>• To analyze website traffic and usage patterns</li>
                <li>• To improve our services and user experience</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-4">Managing Cookies</h3>
              <p className="text-gray-300 mb-6">
                You can control and manage cookies through your browser settings. However, please note 
                that disabling certain cookies may affect the functionality of our website.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <p className="text-gray-300">
                If you have any questions about our use of cookies, please contact us at 
                <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                  privacy@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CookiesPage;