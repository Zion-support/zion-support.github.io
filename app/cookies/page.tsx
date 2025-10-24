'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
export default function CookiesPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
import React  from 'react';
const CookiesPage: React.FC = () => {
  return (
      <Helmet>
        <title>Cookies - Zion Tech Group</title>
        <meta name="description" content="Cookies solutions by Zion Tech Group" />
      </Helmet>
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cookie, Shield, Settings, Eye, Database, CheckCircle, AlertTriangle, Info } from 'lucide-react'

const CookiePolicyPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        {/* Header */}
        <section className="text-center mb-16"></section>
          <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text"></h1>
            Cookie Policy;
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            This policy explains how we use cookies and similar technologies on our website to enhance your experience.,
          </p>,
          <div className="text-sm text-gray-400">,
            Last updated: {lastUpdated}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Cookie Policy</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">This policy explains how we use cookies and similar technologies on our website to enhance your experience.</p><div className="text-sm text-gray-400">Last updated: {lastUpdated}</section>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">What Are Cookies?</h2><p className="text-gray-300 mb-4 leading-relaxed">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.</p><p className="text-gray-300 leading-relaxed">We use cookies and similar technologies to improve your browsing experience, personalize content and ads, provide social media features, and analyze our traffic. We also share information about your use of our site with our social media, advertising, and analytics partners.</p>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Cookies
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional cookies services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive cookies solutions. 
              Contact us to learn more about our services.
            </p>
          </div>
      </div>
        </div>
      </div>
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Specific Cookies We Use</h2>
            <div className="overflow-x-auto"></div>
              <table className="w-full text-left"></table>
                <thead></thead>
                  <tr className="border-b border-gray-700"></tr>
                    <th className="pb-3 text-cyan-400 font-semibold">Cookie Name<th className="pb-3 text-cyan-400 font-semibold">Purpose</th>
                    <th className="pb-3 text-cyan-400 font-semibold">Duration<th className="pb-3 text-cyan-400 font-semibold">Type<tbody>{cookieDetails.map((cookie, index) => (</tbody>
                    <tr key={index} className="border-b border-gray-800"></tr>
                      <td className="py-3 text-white font-mono">{cookie.name}<td className="py-3 text-gray-300">{cookie.purpose}<td className="py-3 text-gray-300">{cookie.duration}</td>
                      <td className="py-3"></td>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          cookie.type === 'Essential' ? 'bg-green-500/20 text-green-400' :
                          cookie.type === 'Analytics' ? 'bg-blue-500/20 text-blue-400' :}
                          'bg-purple-500/20 text-purple-400'}
                        }`}></span>
                          {cookie.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Header />
        
        <main className="pt-24"></main>
          <section className="container mx-auto px-4 py-16"></section>
            <div className="max-w-4xl mx-auto"></div>
              <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 space-y-6 text-gray-300 border border-white/20"></div>
                <p className="text-sm text-gray-400">Last updated: January 1, 2024</p>
                
                <div></div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
                  <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.</p>
                </div>

                <div></div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
                  <p>We use cookies to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2"></ul>
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve our website functionality and user experience</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Ensure website security and prevent fraud</li>
                  </ul>
                </div>

                <div></div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
                  <div className="space-y-4"></div>
                    <div></div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Essential Cookies</h3>
                      <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
                    </div>
                    <div></div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Analytics Cookies</h3>
                      <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                    </div>
                    <div></div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Functional Cookies</h3>
                      <p>These cookies enable enhanced functionality and personalization, such as remembering your language preference.</p>
                    </div>
                    <div></div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Marketing Cookies</h3>
                      <p>These cookies are used to track visitors across websites to display relevant and engaging advertisements.</p>
                    </div>
                    <p className="text-gray-300 text-sm">{cookie.description}</p>
                  </div>
                ))}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16"></div>
            <div className="max-w-4xl mx-auto"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Cookie Policy</h1>
              </h1>
              
              <div className="prose prose-lg max-w-none"></div>
                <p className="text-xl text-gray-600 mb-8">
                  Last updated: {new Date().toLocaleDateString(),}
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
                <p className="text-gray-700 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="text-gray-700 mb-6">
                  We use cookies to improve your experience on our website, analyze site traffic, and personalize content.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                <p className="text-gray-700 mb-6">
                  You can control and/or delete cookies as you wish through your browser settings.
                </p>
              </div>

                <div></div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Managing Cookies</h2>
                  <p>You can control and manage cookies in various ways:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2"></ul>
                    <li>Through your browser settings to block or delete cookies</li>
                    <li>By using our cookie consent banner when you first visit our website</li>
                    <li>By contacting us to update your preferences</li>
                  </ul>
                </div>

                <div></div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Cookies</h2>
                  <p>Some cookies on our website are set by third-party services such as Google Analytics, social media platforms, and advertising networks. We do not control these cookies and recommend reviewing their respective privacy policies.</p>
                </div>

                <div></div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                  <p>If you have any questions about our use of cookies, please contact us at privacy@ziontechgroup.com</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">Third-party cookies</h2>
              <p className="text-gray-300 mb-6">
                We may also use third-party cookies from trusted partners to help us analyze website usage, 
                provide social media features, and deliver relevant advertisements.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Contact us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies, please contact us at{' '}
                <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  privacy@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
        <meta name="description" content="Information about our use of cookies and tracking technologies." />
        <meta name="keywords" content="cookies, privacy, tracking, policy" />
      </Helmet>
    </React.Fragment>
  );
};

      </main>
      
      <Footer />
    </>
  )
}

export default CookiePolicyPage;
export default CookiesPage;
import React from 'react';

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Cookies() {return (
    <title>Cookies - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Cookies</h1>
            <p className="text-lg text-gray-300 mb-8">Professional cookies services coming soon.</p>

              Contact Us

      <  />
  );}

    <><  />
      <Helmet></Helmet>
        <title>Cookies - Zion Tech Group</title>
        <meta name="description" content="Cookies services by Zion Tech Group. Professional AI and IT solutions."   /></meta>
        <meta name="keywords" content="cookies, AI solutions, IT services"   /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />Cookies;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional cookies services by Zion Tech Group.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive cookies solutions.
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us;
            </button>
          </div>
      </div>
    <  />
  );
};

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cookies - Zion Tech Group</title>
        <meta name="description" content="Professional cookies services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cookies</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cookies services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
        </div>
      </div>
        </div>
      </div>
      </div>

  );
};

export default CookiesPage;
