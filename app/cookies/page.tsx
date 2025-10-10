'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Shield, Eye, Database, Globe, AlertCircle, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString();

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly.',
      examples: ['Authentication', 'Security', 'Load balancing']
    },
    {
      name: 'Analytics Cookies',
      icon: Database,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Page views', 'User behavior', 'Performance metrics']
    },
    {
      name: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'User settings', 'Remembered choices']
    },
    {
      name: 'Marketing Cookies',
      icon: Globe,
      description: 'These cookies are used to deliver relevant advertisements.',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about how we use cookies on our website." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cookie Policy
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  Last updated: {lastUpdated}
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Learn about how we use cookies to enhance your experience on our website and provide you with the best possible service.
                </p>
              </div>

              <div className="space-y-12">
                {/* What Are Cookies */}
                <section className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <Cookie className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">What Are Cookies</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                    They are widely used to make websites work more efficiently and to provide information to website owners.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Cookies allow us to recognize your device and remember information about your visit, such as your preferred language 
                    and other settings. This can make your next visit easier and the site more useful to you.
                  </p>
                </section>

                {/* How We Use Cookies */}
                <section className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="h-8 w-8 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">How We Use Cookies</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We use cookies to improve your experience on our website, analyze site traffic, personalize content, 
                    and provide you with relevant information and services.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {cookieTypes.map((type, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <type.icon className="h-6 w-6 text-blue-600 mr-3" />
                          <h3 className="text-lg font-semibold text-gray-900">{type.name}</h3>
                        </div>
                        <p className="text-gray-700 mb-3">{type.description}</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {type.examples.map((example, idx) => (
                            <li key={idx}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Managing Cookies */}
                <section className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <Settings className="h-8 w-8 text-purple-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Managing Cookies</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    You can control and/or delete cookies as you wish through your browser settings. You can delete all cookies 
                    that are already on your computer and you can set most browsers to prevent them from being placed.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <AlertCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Note</h3>
                        <p className="text-gray-700">
                          If you choose to disable cookies, some parts of our website may not function properly. 
                          Essential cookies cannot be disabled as they are necessary for the website to work.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Browser Instructions */}
                <section className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Browser-Specific Instructions</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Chrome</h3>
                      <p className="text-gray-700 text-sm">
                        Go to Settings → Privacy and security → Cookies and other site data → See all cookies and site data
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Firefox</h3>
                      <p className="text-gray-700 text-sm">
                        Go to Options → Privacy & Security → Cookies and Site Data → Manage Data
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Safari</h3>
                      <p className="text-gray-700 text-sm">
                        Go to Preferences → Privacy → Manage Website Data
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Edge</h3>
                      <p className="text-gray-700 text-sm">
                        Go to Settings → Cookies and site permissions → See all cookies and site data
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contact */}
                <section className="bg-gray-50 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Questions About Cookies</h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about our use of cookies, please contact us at:
                  </p>
                  <div className="flex items-center text-blue-600">
                    <span>privacy@ziontechgroup.com</span>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CookiesPage;