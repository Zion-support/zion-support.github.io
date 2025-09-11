

<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react';
import MainLayout from '../src / components / layout / MainLayout';
import { motion } from 'framer-motion';
import {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function CookiePolicyPage() {;
  const [cookiePreferences, setCookiePreferences] = useState({;
    necessary: true,;
    analytics: false,;
    marketing: false,;
    functional: false;
<<<<<<< HEAD

origin/automation-improvements-final

import React, { useState } from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  Shield
  Settings
  Info
  ExternalLink
  ArrowRight
  CheckCircle
  XCircle
  AlertTriangle
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
=======
  });

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  const handleCookieToggle = (cookieId: string) => {;
    if (cookieId === 'necessary') return; // Can't disable necessary cookies;
=======

  const handleCookieToggle = (cookieId: string) => {;
    if (cookieId === 'necessary') return; // Can't disable necessary cookies;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setCookiePreferences(prev => ({;
      ...prev,;
      [cookieId]: !prev[cookieId];
    }));
  };
<<<<<<< HEAD
  const savePreferences = () => {;
    // In a real implementation, this would save to localStorage and update cookie settings;
=======

  const savePreferences = () => {;
    // In a real implementation, this would save to localStorage and update cookie settings;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    alert('Cookie preferences saved!');
  }
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies on our website. Understand what cookies we use and how you can manage your preferences."
      keywords="cookie policy, cookies, privacy, data protection, website cookies">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">;
          <div className="absolute inset-0">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>;
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>;
          </div>;
<<<<<<< HEAD
          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Cookie{' '}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Cookie Management */}
        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="max-w-4xl mx-auto">;
              <div className="bg-white rounded-lg shadow-lg p-8">;
                <div className="space-y-6">;
                  {cookieTypes && cookieTypes.map((cookie, index) => (;
                    <motion&& motion.div
                      key={cookie && cookie.id}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        </div>;
                      </div>;
=======

                        </div>;
                      </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div className="ml-9">;
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Examples:</h4>;
                        <ul className="text-sm text-gray-600 space-y-1">;
                          {cookie && cookie.examples.map((example, idx) => (;
                            <li key={idx} className="flex items-center">;
                              <ArrowRight className="w-3 h-3 text-gray-400 mr-2" />;
                              {example}
                            </li>;
                          ))}
                        </ul>;
                      </div>;
                    </motion && motion.div>;
                  ))}
                </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">;
                  <button
                    onClick={() => setCookiePreferences({;
                      necessary: true,;
                      analytics: false,;
                      marketing: false,;
                      functional: false;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    })}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors";
                  >;
                    Reject All;
                  </button>;
                  <button
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    onClick={() => setCookiePreferences({;
                      necessary: true,;
                      analytics: true,;
                      marketing: true,;
                      functional: true;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    })}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors";
                  >;
                    Accept All;
                  </button>;
                  <button
                    onClick={savePreferences}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">;
=======

                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    Save Preferences;
                  </button>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Cookie Information */}
        <section className="py - 20 bg - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 6">;
                What Are Cookies?;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;
                Cookies are small text files that are stored on your device when you visit our website.;
                They help us provide you with a better experience and understand how you use our site.;
              </p>;
            </motion.div>;
            <div className="max - w-4xl mx - auto">;
              <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
                <motion.div;
                  className="bg - gray - 50 p - 6 rounded - lg";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >;
                  <div className="flex items - center mb - 4">;
                    <Info className="w - 6 h - 6 text - blue - 600 mr - 3" />;
                    <h3 className="text - lg font - semibold text - gray - 900">How We Use Cookies</h3>;
                  </div>;
                  <ul className="space - y-2 text - gray - 600">;
                    <li className="flex items - start">;
                      <CheckCircle className="w - 4 h - 4 text - green - 500 mr - 2 mt - 1" />;
                      <span > Remember your preferences and settings</span>;
                    </li>;
                    <li className="flex items - start">;
                      <CheckCircle className="w - 4 h - 4 text - green - 500 mr - 2 mt - 1" />;
                      <span > Analyze website traffic and usage patterns</span>;
                    </li>;
                    <li className="flex items - start">;
                      <CheckCircle className="w - 4 h - 4 text - green - 500 mr - 2 mt - 1" />;
                      <span > Improve website performance and functionality</span>;
                    </li>;
                    <li className="flex items - start">;
                      <CheckCircle className="w - 4 h - 4 text - green - 500 mr - 2 mt - 1" />;
                      <span > Provide personalized content and recommendations</span>;
                    </li>;
                  </ul>;
                </motion.div>;
                <motion.div;
                  className="bg - gray - 50 p - 6 rounded - lg";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </div>;
          </div>;
        </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Contact Information */}
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
                Questions About Our Cookie Policy?;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;
                If you have any questions about our use of cookies or this policy,
                please don't hesitate to contact us.;
              </p>;
            </motion.div>;
            <div className="max - w-2xl mx - auto text - center">;
              <div className="bg - white rounded - lg shadow - lg p - 8">;
                <div className="space - y-4">;
                  <div className="flex items - center justify - center">;
                    <Shield className="w - 6 h - 6 text - indigo - 600 mr - 3" />;
                    <span className="text - lg font - semibold text - gray - 900">Privacy Team</span>;
                  </div>;
                  <p className="text - gray - 600">;
                    Email: <a href="mailto:privacy@ziontechgroup.com" className="text - indigo - 600 hover:text - indigo - 700">privacy@ziontechgroup.com</a>;
                  </p>;
                  <p className="text - gray - 600">;
                    Phone: <a href="tel:+13024640950" className="text - indigo - 600 hover:text - indigo - 700">+1 302 464 0950</a>;
                  </p>;
                  <p className="text - sm text - gray - 500">;
                    Last updated: {new Date ().toLocaleDateString ()}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </p>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
<<<<<<< HEAD
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
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 6">;
                Questions About Our Cookie Policy?;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;
                If you have any questions about our use of cookies or this policy,
                please don't hesitate to contact us.;
              </p>;
            </motion.div>;
            <div className="max - w-2xl mx - auto text - center">;
              <div className="bg - white rounded - lg shadow - lg p - 8">;
                <div className="space - y-4">;
                  <div className="flex items - center justify - center">;
                    <Shield className="w - 6 h - 6 text - indigo - 600 mr - 3" />;
                    <span className="text - lg font - semibold text - gray - 900">Privacy Team</span>;
                  </div>;
                  <p className="text - gray - 600">;
                    Email: <a href="mailto:privacy@ziontechgroup.com" className="text - indigo - 600 hover:text - indigo - 700">privacy@ziontechgroup.com</a>;
                  </p>;
                  <p className="text - gray - 600">;
                    Phone: <a href="tel:+13024640950" className="text - indigo - 600 hover:text - indigo - 700">+1 302 464 0950</a>;
                  </p>;
                  <p className="text - sm text - gray - 500">;
                    Last updated: {new Date ().toLocaleDateString ()}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  </p>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


<<<<<<< HEAD
origin/automation-improvements-final

export default function CookiesPage() {
export default function CookiesPage() {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======

export default function CookiesPage() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <UltraAdvancedFuturisticBackground>;
      <SEO
        title='Cookie Policy | Zion Tech Group'
        description='Information about cookies used by Zion Tech Group.'
<<<<<<< HEAD


import React from 'react';
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
}      <SEO title="Cookie Policy | Zion Tech Group" description="Information about cookies used by Zion Tech Group." canonical="https://ziontechgroup.com/cookies/" />
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <SEO title="Cookie Policy | Zion Tech Group" description="Information about cookies used by Zion Tech Group." canonical="https://ziontechgroup.com/cookies/" />
}      <SEO title="Cookie Policy | Zion Tech Group" description="Information about cookies used by Zion Tech Group." canonical="https://ziontechgroup.com/cookies/" />
ursor/fix-lint-push-and-merge-to-main-ae4e
import React from 'react';
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
<<<<<<< HEAD
import React from 'react',
import SEO from '../components/SEO',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function CookiesPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <SEO title="Cookie Policy | Zion Tech Group" description="Information about cookies used by Zion Tech Group." canonical="https://ziontechgroup.com/cookies/" />
origin/automation-improvements-final
      <div className="container mx-auto px-4 py-24 text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          <p className="text-gray-300">We use minimal, privacy‑respecting analytics. Some third‑party embeds may set cookies. You can block non‑essential cookies via your browser.</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
<<<<<<< HEAD



            <li>Purpose: performance and security</li>

<<<<<<< HEAD
<li>Purpose: performance and security</li>

            <li>Retention: session or short‑term</li>
            <li>Opt‑out: browser settings and extensions</li>
          </ul>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
origin/automation-improvements-final
            <li>Purpose: performance and security</li>
<li>Purpose: performance and security</li>
            <li>Retention: session or short‑term</li>
            <li>Opt‑out: browser settings and extensions</li>
          </ul>
<<<<<<< HEAD
origin/automation-improvements-final
          <p className='text-gray-400 text-sm'>
            Questions?{' '}
            <a className='text-cyan-400' href='mailto:kleber@ziontechgroup.com'>
              kleber@ziontechgroup.com
            </a>
          </p>
        </div>


  );
 <li>Purpose: performance and security</li> <li>Retention: session or short‑term</li> <li>Opt‑out: browser settings and extensions</li> </ul> <p className="text-gray-400 text-sm" >Questions? <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com" >kleber@ziontechgroup.com</Link></p> </div> </div> </UltraAdvancedFuturisticBackground>
          <p className="text-gray-400 text-sm">Questions? <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}

        canonical='https://ziontechgroup && ziontechgroup.com/cookies/'
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <li>Purpose: performance and security</li>
<li>Purpose: performance and security</li>
            <li>Retention: session or short‑term</li>
            <li>Opt‑out: browser settings and extensions</li>
          </ul>
<<<<<<< HEAD
          <p className="text-gray-400 text-sm">Questions? <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
            <li>Purpose: performance and security</li>
            <li>Retention: session or short‑term</li>
            <li>Opt‑out: browser settings and extensions</li>
          </ul>
          <p className=&quot;text-gray-400 text-sm&quot;>Questions? <a className=&quot;text-cyan-400&quot; href=&quot;mailto:kleber@ziontechgroup.com&quot;>kleber@ziontechgroup.com</Link></p>

        </div>
      </Layout>
    </>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
  );
      </Layout>
    </>;
  );

 <li>Purpose: performance and security</li> <li>Retention: session or short‑term</li> <li>Opt‑out: browser settings and extensions</li> </ul> <p className="text-gray-400 text-sm" >Questions? <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com" >kleber@ziontechgroup.com</Link></p> </div> </div> </UltraAdvancedFuturisticBackground>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  );
 <li>Purpose: performance and security</li> <li>Retention: session or short‑term</li> <li>Opt‑out: browser settings and extensions</li> </ul> <p className="text-gray-400 text-sm" >Questions? <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com" >kleber@ziontechgroup.com</Link></p> </div> </div> </UltraAdvancedFuturisticBackground>
=======
          <p className="text-gray-400 text-sm">Questions? <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
        </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}
<<<<<<< HEAD
=======

        canonical='https://ziontechgroup && ziontechgroup.com/cookies/'
      />;
      <div className='container mx-auto px-4 py-24 text-white'>;
        <div className='max-w-3xl mx-auto space-y-6'>;
          <h1 className='text-4xl md:text-5xl font-bold'>Cookie Policy</h1>;
          <p className='text-gray-300'>;
            We use minimal, privacy‑respecting analytics. Some third‑party;
            embeds may set cookies. You can block non‑essential cookies via your;
            browser.;
          </p>;
          <ul className='list-disc list-inside text-gray-300 space-y-1'>;
      <SEO title="Cookie Policy | Zion Tech Group" description="Information about cookies used by Zion Tech Group." canonical="https://ziontechgroup && ziontechgroup.com/cookies/" />;
      <div className="container mx-auto px-4 py-24 text-white">;
        <div className="max-w-3xl mx-auto space-y-6">;
          <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>;
          <p className="text-gray-300">We use minimal, privacy‑respecting analytics. Some third‑party embeds may set cookies. You can block non‑essential cookies via your browser.</p>;
          <ul className="list-disc list-inside text-gray-300 space-y-1">;
            <li>Purpose: performance and security</li>;
            <li>Retention: session or short‑term</li>;
            <li>Opt‑out: browser settings and extensions</li>;
          </ul>;
          <p className='text-gray-400 text-sm'>;
            Questions?{' '}
            <a className='text-cyan-400' href='mailto:kleber@ziontechgroup && ziontechgroup.com'>;
              kleber@ziontechgroup && ziontechgroup.com;
    </MainLayout>);
}
import { motion } from 'framer-motion';
import Head from 'next / head';
import Layout from '../components / Layout';
export default /**
 * CookiesPage - Function description
 */
function CookiesPage() {
  return (
    <UltraAdvancedFuturisticBackground>;
      <SEO;
        title='Cookie Policy | Zion Tech Group';
        description='Information about cookies used by Zion Tech Group.';
        canonical='https://ziontechgroup.com / cookies/';
      />;
      <div className='container mx - auto px - 4 py - 24 text - white'>;
        <div className='max - w-3xl mx - auto space - y-6'>;
          <h1 className='text - 4xl md:text - 5xl font - bold'>Cookie Policy</h1>;
          <p className='text - gray - 300'>;
            We use minimal, privacy‑respecting analytics. Some third‑party;
            embeds may set cookies. You can block non‑essential cookies via your;
            browser.;
          </p>;
          <ul className='list - disc list - inside text - gray - 300 space - y-1'>;
      <SEO title="Cookie Policy | Zion Tech Group" description="Information about cookies used by Zion Tech Group." canonical="https://ziontechgroup.com / cookies/" />;
      <div className="container mx - auto px - 4 py - 24 text - white">;
        <div className="max - w-3xl mx - auto space - y-6">;
          <h1 className="text - 4xl md:text - 5xl font - bold">Cookie Policy</h1>;
          <p className="text - gray - 300">We use minimal, privacy‑respecting analytics. Some third‑party embeds may set cookies. You can block non‑essential cookies via your browser.</p>;
          <ul className="list - disc list - inside text - gray - 300 space - y-1">;
<li > Purpose: performance and security</li>;
            <li > Retention: session or short‑term</li>;
            <li > Opt‑out: browser settings and extensions</li>;
          </ul>;
          <p className='text - gray - 400 text - sm'>;
            Questions?{' '}
            <a className='text - cyan - 400' href='mailto:kleber@ziontechgroup.com'>;
              kleber@ziontechgroup.com;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </a>;
          </p>;
        </div>;
      </Layout>;
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  );

}

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      </div>
    </UltraAdvancedFuturisticBackground>
  )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </>);
;
<li > Purpose: performance and security</li> <li > Retention: session or short‑term</li> <li > Opt‑out: browser settings and extensions</li> </ul> <p className="text - gray - 400 text - sm" >Questions? <a className="text - cyan - 400" href="mailto:kleber@ziontechgroup.com" >kleber@ziontechgroup.com</Link></p> </div> </div> </UltraAdvancedFuturisticBackground>;
      </div>;
    </UltraAdvancedFuturisticBackground>);
}
<<<<<<< HEAD
<<<<<<< HEAD

}
}
      </div>
    </UltraAdvancedFuturisticBackground>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
