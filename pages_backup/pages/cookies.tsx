











import React, { useState } from 'react';
import MainLayout from '../src / components / layout / MainLayout';
import { motion } from 'framer-motion';
import {




  Shield,
  Settings,
  Info,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  XCircle,
  AlertTriangle;


} from 'lucide-react';
export default function CookiePolicyPage() {
  const [cookiePreferences, setCookiePreferences] = useState({

    necessary: true
    analytics: false
    marketing: false
    functional: false

    necessary: true,
    analytics: false,
    marketing: false,
    functional: false;









  });
  const cookieTypes = [
    {
      id: 'necessary'
      name: 'Necessary Cookies'
      description: 'Essential cookies required for the website to function properly'
      required: true
      examples: ['Session management', 'Security', 'Load balancing']
    }
    {
      id: 'analytics'
      name: 'Analytics Cookies'
      description: 'Help us understand how visitors interact with our website'
      required: false
      examples: ['Google Analytics', 'Page views', 'User behavior']
    }
    {
      id: 'marketing'
      name: 'Marketing Cookies'
      description: 'Used to track visitors across websites for advertising purposes'
      required: false
      examples: ['Ad targeting', 'Social media', 'Remarketing']
    }
    {
      id: 'functional'
      name: 'Functional Cookies'
      description: 'Enable enhanced functionality and personalization'
      required: false
      examples: ['Language preferences', 'User settings', 'Chat widgets']
    }
  ];
  const handleCookieToggle = (cookieId: string) => {
    if (cookieId === 'necessary') return; // Can't disable necessary cookies
    setCookiePreferences(prev => ({
      ...prev
      [cookieId]: !prev[cookieId]
    }));
  }
  const savePreferences = () => {
    // In a real implementation, this would save to localStorage and update cookie settings






class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import {;
  Shield,;
  Settings,;
  Info,;
  ExternalLink,;
  ArrowRight,;
  CheckCircle,;
  XCircle,;
  AlertTriangle;
} from 'lucide-react';

export default function CookiePolicyPage() {;
  const [cookiePreferences, setCookiePreferences] = useState({;
    necessary: true,;
    analytics: false,;
    marketing: false,;
    functional: false;
  });

  const cookieTypes = [;
    {;
      id: 'necessary',;
      name: 'Necessary Cookies',;
      description: 'Essential cookies required for the website to function properly',;
      required: true,;
      examples: ['Session management', 'Security', 'Load balancing'];
    },;
    {;
      id: 'analytics',;
      name: 'Analytics Cookies',;
      description: 'Help us understand how visitors interact with our website',;
      required: false,;
      examples: ['Google Analytics', 'Page views', 'User behavior'];
    },;
    {;
      id: 'marketing',;
      name: 'Marketing Cookies',;
      description: 'Used to track visitors across websites for advertising purposes',;
      required: false,;
      examples: ['Ad targeting', 'Social media', 'Remarketing'];
    },;
    {;
      id: 'functional',;
      name: 'Functional Cookies',;
      description: 'Enable enhanced functionality and personalization',;
      required: false,;
      examples: ['Language preferences', 'User settings', 'Chat widgets'];
    }
  ];

  const handleCookieToggle = (cookieId: string) => {;
    if (cookieId === 'necessary') return; // Can't disable necessary cookies;

    setCookiePreferences(prev => ({;
      ...prev,;
      [cookieId]: !prev[cookieId];
    }));
  };

  const savePreferences = () => {;
    // In a real implementation, this would save to localStorage and update cookie settings;
    alert('Cookie preferences saved!');
  }
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies on our website. Understand what cookies we use and how you can manage your preferences."
      keywords="cookie policy, cookies, privacy, data protection, website cookies">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */}

        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">;
          <div className="absolute inset-0">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>;
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>;
          </div>;

          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div

              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Cookie{' '}

                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">;
                  Policy;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
                Learn about how we use cookies to enhance your experience on our website ;
                and how you can manage your cookie preferences.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;


        {/* Cookie Management */}
        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                Manage Your Cookie Preferences;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                You can control which cookies we use on our website. ;
                Some cookies are necessary for the website to function properly.;
              </p>;
            </motion && motion.div>;

            <div className="max-w-4xl mx-auto">;
              <div className="bg-white rounded-lg shadow-lg p-8">;
                <div className="space-y-6">;
                  {cookieTypes && cookieTypes.map((cookie, index) => (;
                    <motion&& motion.div
                      key={cookie && cookie.id}

                      className="border border-gray-200 rounded-lg p-6"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                      viewport={{ once: true }}>;
                      <div className="flex items-center justify-between mb-4">;
                        <div className="flex items-center">;
                          <Shield className="w-6 h-6 text-indigo-600 mr-3" />;
                          <div>;
                            <h3 className="text-lg font-semibold text-gray-900">;
                              {cookie && cookie.name}
                            </h3>;
                            <p className="text-gray-600 text-sm">;
                              {cookie && cookie.description}
                            </p>;
                          </div>;
                        </div>;
                        <div className="flex items-center">;
                          {cookie && cookie.required ? (;
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">;
                              Required;
                            </span>;
                          ) : (;
                            <button
                              onClick={() => handleCookieToggle(cookie && cookie.id)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${;
                                cookiePreferences[cookie && cookie.id as keyof typeof cookiePreferences];
                                  ? 'bg-indigo-600';
                                  : 'bg-gray-200';
                              }`}
                            >;
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  cookiePreferences[cookie && cookie.id as keyof typeof cookiePreferences]
                                    ? 'translate-x-6'
                                    : 'translate-x-1'
                                }`}
                              />;
                            </button>;
                          )}

                        </div>;
                      </div>;

                      <div className="ml-9">;
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Examples:</h4>;
                        <ul className="text-sm text-gray-600 space-y-1">;
                          {cookie && cookie.examples.map((example, idx) => (;
                            <li key={idx} className="flex items-center">;
                              <ArrowRight className="w-3 h-3 text-gray-400 mr-2" />;
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>;

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">;
                  <button
                    onClick={() => setCookiePreferences({;
                      necessary: true,;
                      analytics: false,;
                      marketing: false,;
                      functional: false;

                    })}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors";
                  >;
                    Reject All;
                  </button>;
                  <button

                    onClick={() => setCookiePreferences({;
                      necessary: true,;
                      analytics: true,;
                      marketing: true,;
                      functional: true;

                    })}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors";
                  >;
                    Accept All;
                  </button>;
                  <button
                    onClick={savePreferences}

                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">;

  Shield,
  Settings,
  Info,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  XCircle,
  AlertTriangle;
} from 'lucide-react';
;
export default /**
 * CookiePolicyPage - Function description
 */
function CookiePolicyPage() {
  const [cookie_preferences, setCookiePreferences] = useState ({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false;
  });
;
  const cookie_types = [;
    {
      id: 'necessary',
      name: 'Necessary Cookies',
      description: 'Essential cookies required for the website to function properly',
      required: true,
      examples: ['Session management', 'Security', 'Load balancing'];
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website',
      required: false,
      examples: ['Google Analytics', 'Page views', 'User behavior'];
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Used to track visitors across websites for advertising purposes',
      required: false,
      examples: ['Ad targeting', 'Social media', 'Remarketing'];
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      required: false,
      examples: ['Language preferences', 'User settings', 'Chat widgets'];
    }
  ];
;
  const handleCookieToggle = (cookie_id: string) =>: any {
    // Check condition
if (return) {
  $2
} // Can't disable necessary cookies;
    setCookiePreferences (prev => ({
      ...prev,
      [cookie_id]: !prev[cookie_id];
    }));
  }
;
  const save_preferences = () =>: any {
    // In a real implementation, this would save to local_storage and update cookie settings;
    alert ('Cookie preferences saved!');
  }
;
  return (
    <MainLayout;
      title="Cookie Policy - Zion Tech Group";
      description="Learn about how Zion Tech Group uses cookies on our website. Understand what cookies we use and how you can manage your preferences.";
      keywords="cookie policy, cookies, privacy, data protection, website cookies";
    >;
      <div className="min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900">;
        {/* Hero Section */}
        <section className="relative bg - gradient - to - br from - indigo - 900 via - purple - 900 to - pink - 900 text - white py - 20 overflow - hidden">;
          <div className="absolute inset - 0">;
            <div className="absolute top - 20 left - 10 w - 72 h - 72 bg - indigo - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse"></div>;
            <div className="absolute top - 40 right - 10 w - 72 h - 72 bg - purple - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse animation - delay - 2000"></div>;
          </div>;
          <div className="container mx - auto px - 4 relative z - 10">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center";
            >;
              <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
                Cookie{' '}
                <span className="bg - gradient - to - r from - indigo - 400 to - purple - 400 bg - clip - text text - transparent">;
                  Policy;
                </span>;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto">;
                Learn about how we use cookies to enhance your experience on our website;
                and how you can manage your cookie preferences.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
        {/* Cookie Management */}
        <section className="py - 20 bg - gray - 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 6">;
                Manage Your Cookie Preferences;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;
                You can control which cookies we use on our website.;
                Some cookies are necessary for the website to function properly.;
              </p>;
            </motion.div>;
            <div className="max - w-4xl mx - auto">;
              <div className="bg - white rounded - lg shadow - lg p - 8">;
                <div className="space - y-6">;
                  {cookie_types.map ((cookie, index) => (
                    <motion.div;
                      key={cookie.id}
                      className="border border - gray - 200 rounded - lg p - 6";
                      initial={{ opacity: 0, coordinate_y: 30 }}
                      whileInView={{ opacity: 1, coordinate_y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >;
                      <div className="flex items - center justify - between mb - 4">;
                        <div className="flex items - center">;
                          <Shield className="w - 6 h - 6 text - indigo - 600 mr - 3" />;
                          <div>;
                            <h3 className="text - lg font - semibold text - gray - 900">;
                              {cookie.name}
                            </h3>;
                            <p className="text - gray - 600 text - sm">;
                              {cookie.description}
                            </p>;
                          </div>;
                        </div>;
                        <div className="flex items - center">;
                          {cookie.required ? (
                            <span className="px - 3 py - 1 bg - green - 100 text - green - 800 rounded - full text - sm font - medium">;
                              Required;
                            </span>) : (
                            <button;
                              on_click={() => handleCookieToggle (cookie.id)}
                              className={`relative inline - flex h - 6 w - 11 items - center rounded - full transition - colors ${
                                cookie_preferences[cookie.id as keyof typeof cookie_preferences];
                                  ? 'bg - indigo - 600';
                                  : 'bg - gray - 200';
                              }`}
                            >;
                              <span;
                                className={`inline - block h - 4 w - 4 transform rounded - full bg - white transition - transform ${
                                  cookie_preferences[cookie.id as keyof typeof cookie_preferences];
                                    ? 'translate - x-6';
                                    : 'translate - x-1';
                                }`}
                              />;
                            </button>)}
                        </div>;
                      </div>;
                      <div className="ml - 9">;
                        <h4 className="text - sm font - medium text - gray - 900 mb - 2">Examples:</h4>;
                        <ul className="text - sm text - gray - 600 space - y-1">;
                          {cookie.examples.map ((example, idx) => (
                            <li key={idx} className="flex items - center">;
                              <ArrowRight className="w - 3 h - 3 text - gray - 400 mr - 2" />;
                              {example}
                            </li>))}
                        </ul>;
                      </div>;
                    </motion.div>))}
                </div>;
                <div className="mt - 8 flex flex - col sm:flex - row gap - 4 justify - end">;
                  <button;
                    on_click={() => setCookiePreferences ({
                      necessary: true,
                      analytics: false,
                      marketing: false,
                      functional: false;
                    })}
                    className="px - 6 py - 3 border border - gray - 300 text - gray - 700 rounded - lg hover:bg - gray - 50 transition - colors";
                  >;
                    Reject All;
                  </button>;
                  <button;
                    on_click={() => setCookiePreferences ({
                      necessary: true,
                      analytics: true,
                      marketing: true,
                      functional: true;
                    })}
                    className="px - 6 py - 3 border border - gray - 300 text - gray - 700 rounded - lg hover:bg - gray - 50 transition - colors";
                  >;
                    Accept All;
                  </button>;
                  <button;
                    on_click={save_preferences}
                    className="px - 6 py - 3 bg - gradient - to - r from - indigo - 500 to - purple - 600 text - white rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold";
                  >;


                    Save Preferences;
                  </button>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                What Are Cookies?;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                Cookies are small text files that are stored on your device when you visit our website. ;
                They help us provide you with a better experience and understand how you use our site.;
              </p>;
            </motion && motion.div>;
            <div className="max-w-4xl mx-auto">;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
                <motion&& motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8 }}
                  viewport={{ once: true }}>;
                  <div className="flex items-center mb-4">;
                    <Info className="w-6 h-6 text-blue-600 mr-3" />;
                    <h3 className="text-lg font-semibold text-gray-900">How We Use Cookies</h3>;
                  </div>;
                  <ul className="space-y-2 text-gray-600">;
                    <li className="flex items-start">;
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />;
                      <span>Remember your preferences and settings</span>;
                    </li>;
                    <li className="flex items-start">;
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />;
                      <span>Analyze website traffic and usage patterns</span>;
                    </li>;
                    <li className="flex items-start">;
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />;
                      <span>Improve website performance and functionality</span>;
                    </li>;
                    <li className="flex items-start">;
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />;
                      <span>Provide personalized content and recommendations</span>;
                    </li>;
                  </ul>;
                </motion && motion.div>;
                <motion&& motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className="flex items-center mb-4">;
                    <Settings className="w-6 h-6 text-purple-600 mr-3" />;
                    <h3 className="text-lg font-semibold text-gray-900">Managing Cookies</h3>;
                  </div>;
                  <ul className="space-y-2 text-gray-600">;
                    <li className="flex items-start">;
                      <ArrowRight className="w-4 h-4 text-purple-500 mr-2 mt-1" />;
                      <span>Use our cookie preference center above</span>;
                    </li>;
                    <li className="flex items-start">;
                      <ArrowRight className="w-4 h-4 text-purple-500 mr-2 mt-1" />;
                      <span>Configure your browser settings</span>;
                    </li>;
                    <li className="flex items-start">;
                      <ArrowRight className="w-4 h-4 text-purple-500 mr-2 mt-1" />;
                      <span>Opt out of third-party tracking</span>;
                    </li>;
                    <li className="flex items-start">;
                      <ArrowRight className="w-4 h-4 text-purple-500 mr-2 mt-1" />;
                      <span>Clear cookies from your device</span>;
                    </li>;
                  </ul>;
                </motion && motion.div>;
        {/* Cookie Information */}
        <section className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Are Cookies?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website.
                They help us provide you with a better experience and understand how you use our site.
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <Info className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">How We Use Cookies</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span>Remember your preferences and settings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span>Analyze website traffic and usage patterns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span>Improve website performance and functionality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span>Provide personalized content and recommendations</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className="flex items - center mb - 4">;
                    <Settings className="w - 6 h - 6 text - purple - 600 mr - 3" />;
                    <h3 className="text - lg font - semibold text - gray - 900">Managing Cookies</h3>;
                  </div>;
                  <ul className="space - y-2 text - gray - 600">;
                    <li className="flex items - start">;
                      <ArrowRight className="w - 4 h - 4 text - purple - 500 mr - 2 mt - 1" />;
                      <span > Use our cookie preference center above</span>;
                    </li>;
                    <li className="flex items - start">;
                      <ArrowRight className="w - 4 h - 4 text - purple - 500 mr - 2 mt - 1" />;
                      <span > Configure your browser settings</span>;
                    </li>;
                    <li className="flex items - start">;
                      <ArrowRight className="w - 4 h - 4 text - purple - 500 mr - 2 mt - 1" />;
                      <span > Opt out of third - party tracking</span>;
                    </li>;
                    <li className="flex items - start">;
                      <ArrowRight className="w - 4 h - 4 text - purple - 500 mr - 2 mt - 1" />;
                      <span > Clear cookies from your device</span>;
                    </li>;
                  </ul>;
                </motion.div>;

              </div>;
            </div>;
          </div>;
        </section>;

              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                Questions About Our Cookie Policy?;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                If you have any questions about our use of cookies or this policy, ;
                please don't hesitate to contact us.;
              </p>;
            </motion && motion.div>;

            <div className="max-w-2xl mx-auto text-center">;
              <div className="bg-white rounded-lg shadow-lg p-8">;
                <div className="space-y-4">;
                  <div className="flex items-center justify-center">;
                    <Shield className="w-6 h-6 text-indigo-600 mr-3" />;
                    <span className="text-lg font-semibold text-gray-900">Privacy Team</span>;
                  </div>;
                  <p className="text-gray-600">;
                    Email: <a href="mailto:privacy@ziontechgroup && ziontechgroup.com" className="text-indigo-600 hover:text-indigo-700">privacy@ziontechgroup && ziontechgroup.com</a>;
                  </p>;
                  <p className="text-gray-600">;
                    Phone: <a href="tel:+13024640950" className="text-indigo-600 hover:text-indigo-700">+1 302 464 0950</a>;
                  </p>;
                  <p className="text-sm text-gray-500">;
                    Last updated: {new Date().toLocaleDateString()}

        {/* Contact Information */}
        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                If you have any questions about our use of cookies or this policy
                please don't hesitate to contact us.
              </p>
            </motion.div>
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Shield className="w-6 h-6 text-indigo-600 mr-3" />
                    <span className="text-lg font-semibold text-gray-900">Privacy Team</span>
                  </div>
                  <p className="text-gray-600">
                    Email: <a href="mailto:privacy@ziontechgroup.com" className="text-indigo-600 hover:text-indigo-700">privacy@ziontechgroup.com</a>
                  </p>
                  <p className="text-gray-600">
                    Phone: <a href="tel:+13024640950" className="text-indigo-600 hover:text-indigo-700">+1 302 464 0950</a>
                  </p>
                  <p className="text-sm text-gray-500">
                    Last updated: {new Date().toLocaleDateString()}

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>

  );
}
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function CookiesPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <SEO
        title='Cookie Policy | Zion Tech Group'
        description='Information about cookies used by Zion Tech Group.'
        canonical='https://ziontechgroup.com/cookies/'
      />
      <div className='container mx-auto px-4 py-24 text-white'>
        <div className='max-w-3xl mx-auto space-y-6'>
          <h1 className='text-4xl md:text-5xl font-bold'>Cookie Policy</h1>
          <p className='text-gray-300'>
            We use minimal, privacy‑respecting analytics. Some third‑party
            embeds may set cookies. You can block non‑essential cookies via your
            browser.
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-1'>

import React from 'react';
import { Helmet } from 'react-helmet-async';

const cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>cookies | Zion Tech Group</title>
        <meta name="description" content="cookies - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">cookies</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default cookies;
