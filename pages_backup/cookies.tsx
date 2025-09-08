
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
    necessary: true
    analytics: false
    marketing: false
    functional: false

} from 'lucide-react;
export default function CookiePolicyPage() {
  const [cookiePreferences, setCookiePreferences] = useState({

    necessary: true,
    analytics: false,
    marketing: false,
    functional: false;
  });
  const cookieTypes = [
    {
      id: necessary'
      name: 'Necessary Cookies
      description: Essential cookies required for the website to function properly'
      required: true
      examples: ['Session management, Security', 'Load balancing]
    }
    {
      id: analytics'
      name: 'Analytics Cookies
      description: Help us understand how visitors interact with our website'
      required: false
      examples: ['Google Analytics, Page views', 'User behavior]
    }
    {
      id: marketing'
      name: 'Marketing Cookies
      description: Used to track visitors across websites for advertising purposes'
      required: false
      examples: ['Ad targeting, Social media', 'Remarketing]
    }
    {
      id: functional'
      name: 'Functional Cookies
      description: Enable enhanced functionality and personalization'
      required: false
      examples: ['Language preferences, User settings', 'Chat widgets]
    }
  ];
  const handleCookieToggle = (cookieId: string) => {
    if (cookieId === necessary') return; // Can't disable necessary cookies
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
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  
  componentDidCatch(error, errorInfo) {
    console.error(Error caught by boundary:, error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';
import MainLayout from ../src/components/layout/MainLayout;
import { motion } from 'framer-motion';
  Shield,
  Settings,
  Info,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  XCircle,
  AlertTriangle;
} from lucide-react;

export default function CookiePolicyPage() {
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false;

  const cookieTypes = [;
    {
      id: 'necessary',
      name: Necessary Cookies,
      description: 'Essential cookies required for the website to function properly',
      required: true,
      examples: [Session management, 'Security', Load balancing];
    },
    {
      id: 'analytics',
      name: Analytics Cookies,
      description: 'Help us understand how visitors interact with our website',
      required: false,
      examples: [Google Analytics, 'Page views', User behavior];
    },
    {
      id: 'marketing',
      name: Marketing Cookies,
      description: 'Used to track visitors across websites for advertising purposes',
      required: false,
      examples: [Ad targeting, 'Social media', Remarketing];
    },
    {
      id: 'functional',
      name: Functional Cookies,
      description: 'Enable enhanced functionality and personalization',
      required: false,
      examples: [Language preferences, 'User settings', Chat widgets];
    }
  ];

    if (cookieId === 'necessary') return; // Cant disable necessary cookies;

    setCookiePreferences(prev => ({
      ...prev,
      [cookieId]: !prev[cookieId];
    }));
  }

    // In a real implementation, this would save to localStorage and update cookie settings;
    alert(Cookie preferences saved!');
  }
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group
      description=Learn about how Zion Tech Group uses cookies on our website. Understand what cookies we use and how you can manage your preferences."
      keywords="cookie policy, cookies, privacy, data protection, website cookies>;
      <div className=min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center>;
              <h1 className=text-4xl md:text-6xl font-bold mb-6">;
                Cookie{' }
        {/* Cookie Management */}
        <section className="py-20 bg-gray-50>;
          <div className=container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                      className=border border-gray-200 rounded-lg p-6"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                      viewport={{ once: true }}>;
                      <div className="flex items-center justify-between mb-4>;
                        <div className=flex items-center">;
                          <Shield className="w-6 h-6 text-indigo-600 mr-3 />;
                          <div>;
                            <h3 className=text-lg font-semibold text-gray-900">;
                              {cookie && cookie.name}
                            </h3>;
                            <p className="text-gray-600 text-sm>;
                              {cookie && cookie.description}
                            </p>;
                          </div>;
                        </div>;
                        <div className=flex items-center">;
                          {cookie && cookie.required ? (;
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium>;
                              Required;
                            </span>;
                          ) : (;
                            <button
                              onClick={() => handleCookieToggle(cookie && cookie.id)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                cookiePreferences[cookie && cookie.id as keyof typeof cookiePreferences];
                                  ? bg-indigo-600';
                                  : 'bg-gray-200;
                              }`}
                            >;
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  cookiePreferences[cookie && cookie.id as keyof typeof cookiePreferences]
                                    ? translate-x-6'
                                    : 'translate-x-1
                                }`}
                              />;
                            </button>;
                          )}
                              {example}
                            </li>;
                          ))}
                        </ul>;
                      </div>;
                    </motion && motion.div>;
                  ))}
                    })}
                    className=px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors";
                  >;
                    Reject All;
                  </button>;
                  <button
                    })}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors;
                  >;
                    Accept All;
                  </button>;
                  <button
                    onClick={savePreferences}
                    Save Preferences;
                  </button>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Cookie Information */}
        <section className=py - 20 bg - white">;
          <div className="container mx - auto px - 4>;
            <motion.div;
              className=text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              </div>;
            </div>;
          </div>;
        </section>;
import Head from 'next/head;
import Layout from ../components/Layout';
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 6>;
                Questions About Our Cookie Policy?;
              </h2>;
              <p className=text - lg text - gray - 600 max - w-3xl mx - auto">;
                If you have any questions about our use of cookies or this policy,
                please don't hesitate to contact us.;
              </p>;
            </motion.div>;
            <div className="max - w-2xl mx - auto text - center>;
              <div className=bg - white rounded - lg shadow - lg p - 8">;
                <div className="space - y-4>;
                  <div className=flex items - center justify - center">;
                    <Shield className="w - 6 h - 6 text - indigo - 600 mr - 3 />;
                    <span className=text - lg font - semibold text - gray - 900">Privacy Team</span>;
                  </div>;
                  <p className="text - gray - 600>;
                    Email: <a href=mailto:privacy@ziontechgroup.com" className="text - indigo - 600 hover:text - indigo - 700>privacy@ziontechgroup.com</a>;
                  </p>;
                  <p className=text - gray - 600">;
                    Phone: <a href="tel:+13024640950 className=text - indigo - 600 hover:text - indigo - 700">+1 302 464 0950</a>;
                  </p>;
                  <p className="text - sm text - gray - 500>;
                    Last updated: {new Date ().toLocaleDateString ()}

                  </p>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;

import React from react,
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from ../components/ui/UltraAdvancedFuturisticBackground;
import Head from next/head;
import Layout from '../components/Layout';

export default function CookiesPage() {
  return (
    <UltraAdvancedFuturisticBackground>;
      <SEO
        title=Cookie Policy | Zion Tech Group
        description='Information about cookies used by Zion Tech Group.'
        canonical=https://ziontechgroup.com/cookies/
      />
      <div className='container mx-auto px-4 py-24 text-white'>
        <div className=max-w-3xl mx-auto space-y-6>
          <h1 className='text-4xl md:text-5xl font-bold'>Cookie Policy</h1>
          <p className=text-gray-300>
            We use minimal, privacy‑respecting analytics. Some third‑party
            embeds may set cookies. You can block non‑essential cookies via your
            browser.
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-1'>
            <li>Purpose: performance and security</li>
            <li>Retention: session or short‑term</li>
            <li>Opt‑out: browser settings and extensions</li>
          </ul>
<p className=text-gray-400 text-sm>
            Questions?{' '}
            <a className=text-cyan-400 href='mailto:kleber@ziontechgroup.com'>
              kleber@ziontechgroup.com
            </a>
          </p>
        </div>
origin/cursor/automate-test-improve-and-merge-code-2533
      </Layout>
    </>
ursor/integrate-build-improve-and-re-verify-8f7d

  );
      </Layout>
    </>;
  );

  );


 <li>Purpose: performance and security</li> <li>Retention: session or short‑term</li> <li>Opt‑out: browser settings and extensions</li> </ul> <p className="text-gray-400 text-sm" >Questions? <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com" >kleber@ziontechgroup.com</Link></p> </div> </div> </UltraAdvancedFuturisticBackground>

