<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
import React from "react";
import { Helmet } from 'react-helmet-async';
export default function CookiesPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
=======
import React  from 'react';
const CookiesPage: React.FC = () => {
  return (
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
        <title>Cookies - Zion Tech Group</title>
        <meta name="description" content="Cookies solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Cookies</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive cookies solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cookie, Shield, Settings, Eye, Database, CheckCircle, AlertTriangle, Info } from 'lucide-react'

<<<<<<< HEAD
const CookiesPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024'

  const cookieTypes = [
    {
      title: 'Essential',
      description: 'Required for the website to function properly',
      icon: Shield,
      necessary: true
    },
    {
      title: 'Analytics',
      description: 'Help us understand how visitors interact with our website',
      icon: Database,
      necessary: false
    },
    {
      title: 'Functional',
      description: 'Enable enhanced functionality and personalization',
      icon: Settings,
      necessary: false
    },
    {
      title: 'Marketing',
      description: 'Deliver relevant content and advertisements',
      icon: Eye,
      necessary: false
    }
  ]

=======
const CookiePolicyPage: React.FC = () => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
  return (
    <React.Fragment>
      <Helmet>
=======
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
=======

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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            </p>
          </div>
<<<<<<< HEAD
        </section>

        {/* Cookie Types */})
        <section className="mb-16">)
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Types of Cookies We Use</h2>)
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">),
            {cookieTypes.map((cookieType, index) => (
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center mb-4"></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Types of Cookies We Use</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{cookieTypes.map((cookieType, index) => (</section>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center mb-4"></div>
                  <cookieType.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{cookieType.title}</h3>
                  {cookieType.necessary && (
                    <span className="ml-auto bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium"></span>
                      Necessary;
                    </span>
                  )}
                <p className="text-gray-300 mb-4">{cookieType.description}</p>
                <div></div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:<ul className="space-y-1">{cookieType.examples.map((example, exampleIndex) => (</ul>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples: </h4>,
                  <ul className="space-y-1">,
                    {cookieType.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start text-sm text-gray-300"></li>
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{example}</span>
                      </span>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
=======
      </div>
        </div>
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
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
<<<<<<< HEAD
        </section>

        {/* Cookie Management */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Managing Your Cookie Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Browser Settings</h3><p className="text-gray-300 mb-4">Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies.</p>
                </p>
                <ul className="space-y-2 text-gray-300"></u>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Chrome</span></span>: Settings → Privacy and Security → Cookies and other site data</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Firefox</span></span>: Options → Privacy & Security → Cookies and Site Data</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Safari</span></span>: Preferences → Privacy → Manage Website Data</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Edge</span></span>: Settings → Cookies and site permissions</span>
                  </li>
                </ul>,
              </div>,
              <div>,
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Cookie Consent</h3>,
                <p className="text-gray-300 mb-4">,
                  When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Cookie Consent</h3><p className="text-gray-300 mb-4">When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.</p>
                </p>
                <div className="space-y-3"></div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"></div>
                    <span className="text-white">Essential Cookies</span><span className="text-green-400 text-sm">Always Active</span>
                  </div>
                    <span className="text-white">Analytics Cookies</span>
                    <button className="text-cyan-400 hover: text-cyan-300 text-sm">Manage</button>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"></div>
                    <span className="text-white">Analytics Cookies</span><button className="text-cyan-400 hover:text-cyan-300 text-sm">Manage</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"></div>
                    <span className="text-white">Marketing Cookies</span><button className="text-cyan-400 hover:text-cyan-300 text-sm">Manage</button>
                  </div>
                </div>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Third-Party Cookies */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Third-Party Cookies</h2><p className="text-gray-300 mb-6">Some cookies on our site are set by third-party services that appear on our pages. We have no control over these cookies.</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Google Analytics</h3><p className="text-gray-300 text-sm mb-2">We use Google Analytics to understand how visitors interact with our website.</p><a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300 text-sm">Google Privacy Policy →</a>
                </a>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Social Media</h3><p className="text-gray-300 text-sm mb-2">Social media platforms may set cookies when you share content or visit our social media pages.</p><a href="https://www.facebook.com/privacy/explanation" className="text-cyan-400 hover:text-cyan-300 text-sm">Facebook Privacy Policy →</a>
                </a>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Contact Information */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Questions About Cookies?</h2><p className="text-gray-300 mb-6">If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-6"></p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us: </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">,
              <div>,
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>,
                <div className="space-y-2 text-gray-300">,
                  <p>364 E Main St STE 1008</p>,
                  <p>Middletown, DE 19709</p>
                  <p>United States</p>
                <div className="space-y-2 text-gray-300"></div>
                  <p>364 E Main St STE 1008</p><p>Middletown, DE 19709</p><p>United States</p>
                </div>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Email:</p> <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">privacy@ziontechgroup.com</a>
                  <p>Phone:</p> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>,
,
      <Footer />,
    </div>);
};

export default CookiesPage;
import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        <title>Cookie Policy - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Learn about how we use cookies on our website and your options for managing them." />
      </Helmet>
      
<<<<<<< HEAD
<<<<<<< HEAD
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">Cookie Policy</h1>
            <p className="text-gray-300 mb-8">Last updated: {lastUpdated}</p>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white mb-4">What are cookies?</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">How we use cookies</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                    <div className="flex items-center gap-3 mb-3">
                      <cookie.icon className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-lg font-semibold text-white">{cookie.title}</h3>
                      {cookie.necessary && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded">
                          Necessary
                        </span>
                      )}
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                    </div>
                    <p className="text-gray-300 text-sm">{cookie.description}</p>
                  </div>
                ))}
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
              </div>

<<<<<<< HEAD
              <h2 className="text-2xl font-semibold text-white mb-4">Managing cookies</h2>
              <p className="text-gray-300 mb-6">
                You can control and manage cookies in various ways. Please note that removing or blocking cookies 
                can impact your user experience and parts of our website may no longer be fully accessible.
              </p>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-cyan-400" />
                  Cookie Settings
                </h3>
                <p className="text-gray-300 mb-4">
                  You can manage your cookie preferences using our cookie settings panel below:
                </p>
                <div className="space-y-4">
                  {cookieTypes.map((cookie, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <cookie.icon className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="text-white font-medium">{cookie.title}</div>
                          <div className="text-gray-400 text-sm">{cookie.description}</div>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked={cookie.necessary}
                          disabled={cookie.necessary}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                      </label>
                    </div>
                  ))}
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
        <meta name="description" content="Information about our use of cookies and tracking technologies." />
        <meta name="keywords" content="cookies, privacy, tracking, policy" />
      </Helmet>
=======
    </React.Fragment>
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Information about our use of cookies and tracking technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
  );
}
=======
      </main>
      
      <Footer />
    </>
  )
}

<<<<<<< HEAD
export default CookiesPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
export default CookiePolicyPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
export default CookiesPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
        </div>
      </div>
        </div>
      </div>
      </div>

  );
};

export default CookiesPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
