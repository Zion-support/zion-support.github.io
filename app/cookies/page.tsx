import React from 'react';
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CookiesPolicyPage: React.FC = () => {
  const cookieTypes = [
    {
      icon: <Settings className="w-6 h-6 text-blue-500" />,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: [
        'Authentication cookies',
        'Security cookies',
        'Load balancing cookies',
        'User interface customization cookies'
      ]
    },
    {
      icon: <Eye className="w-6 h-6 text-green-500" />,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Google Analytics cookies',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: [
        'Language preferences',
        'Region settings',
        'User preferences',
        'Form data storage'
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
      examples: [
        'Advertising cookies',
        'Social media cookies',
        'Retargeting cookies',
        'Conversion tracking'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cookies Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group Cookies Policy - Learn about how we use cookies on our website and how to manage your preferences." />
        <meta name="keywords" content="cookies policy, website cookies, cookie preferences, data privacy, Zion Tech Group" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookies <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              This policy explains how we use cookies and similar technologies on our website.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-green-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  {type.icon}
                  <h2 className="text-2xl font-bold text-white ml-4">{type.title}</h2>
                </div>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Examples:</h3>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start text-gray-300">
                        <span className="text-purple-400 mr-3 mt-1">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Manage Your Cookie Preferences</h2>
            <p className="text-white/90 mb-6">
              You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Contact Us
              </Link>
              <Link 
                to="/privacy" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookiesPolicyPage;