'use client';
import React from 'react';
import { Cookie, Settings, Shield, Eye, Database, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {,
  const lastUpdated = 'January 1, 2024';

  const cookieTypes = [
    {
      title: 'Essential Cookies'
      icon: Shield;
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: [,
        'Authentication cookies to keep you logged in',
        'Security cookies to protect against fraud',
        'Load balancing cookies for website performance',
        'Session cookies to remember your preferences'
      ],
      necessary: true;
    },
    {
      title: 'Analytics Cookies'
      icon: Database;
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      examples: [,
        'Google Analytics to understand website usage',
        'Heat mapping tools to see how users interact with pages',
        'Performance monitoring to identify slow pages',
        'A/B testing cookies to optimize user experience'
      ],
      necessary: false;
    },
    {
      title: 'Functional Cookies'
      icon: Settings;
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      examples: [,
        'Language preference cookies',
        'Theme and display settings',
        'Form data cookies to prevent data loss',
        'Chat widget cookies for customer support'
      ],
      necessary: false;
    },
    {
      title: 'Marketing Cookies'
      icon: Eye;
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      examples: [,
        'Social media tracking pixels',
        'Advertising network cookies',
        'Retargeting cookies for personalized ads',
        'Conversion tracking for marketing campaigns'
      ],
      necessary: false;
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Distinguishes unique users',
      duration: '2 years',
      type: 'Analytics',
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Distinguishes unique users',
      duration: '24 hours',
      type: 'Analytics',
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session and authentication',
      duration: 'Session',
      type: 'Essential',
    },
    {
      name: 'preferences',
      purpose: 'Stores user preferences and settings',
      duration: '1 year',
      type: 'Functional',
    },
    {
      name: 'marketing_consent',
      purpose: 'Remembers marketing cookie consent choice',
      duration: '1 year',
      type: 'Essential',
    }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
<<<<<<< HEAD

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</main>
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Cookie Policy<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">This policy explains how we use cookies and similar technologies on our website to enhance your experience.<div className="text-sm text-gray-400">Last updated: {lastUpdated}</div>
=======
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Cookie Policy;
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This policy explains how we use cookies and similar technologies on our website to enhance your experience.,
          </p>,
          <div className="text-sm text-gray-400">,
            Last updated: {lastUpdated}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">What Are Cookies?<p className="text-gray-300 mb-4 leading-relaxed">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.<p className="text-gray-300 leading-relaxed">We use cookies and similar technologies to improve your browsing experience, personalize content and ads, provide social media features, and analyze our traffic. We also share information about your use of our site with our social media, advertising, and analytics partners.</p>
            </p>
          </div>
        </section>

<<<<<<< HEAD
        {/* Cookie Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Types of Cookies We Use<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{cookieTypes.map((cookieType, index) => (</div>
=======
        {/* Cookie Types */})
        <section className="mb-16">)
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Types of Cookies We Use</h2>)
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">),
            {cookieTypes.map((cookieType, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  <cookieType.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{cookieType.title}</h3>
                  {cookieType.necessary && (
<<<<<<< HEAD
                    <span className="ml-auto bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">Necessary</span>
=======
                    <span className="ml-auto bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      Necessary;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    </span>
                  )}
                <p className="text-gray-300 mb-4">{cookieType.description}</p>
                <div>
<<<<<<< HEAD
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:<ul className="space-y-1">{cookieType.examples.map((example, exampleIndex) => (</ul>
=======
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples: </h4>,
                  <ul className="space-y-1">,
                    {cookieType.examples.map((example, exampleIndex) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      <li key={exampleIndex} className="flex items-start text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{example}</span>
                      </span>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Specific Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="pb-3 text-cyan-400 font-semibold">Cookie Name<th className="pb-3 text-cyan-400 font-semibold">Purpose</th>
                    <th className="pb-3 text-cyan-400 font-semibold">Duration<th className="pb-3 text-cyan-400 font-semibold">Type<tbody>{cookieDetails.map((cookie, index) => (</tbody>
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-3 text-white font-mono">{cookie.name}<td className="py-3 text-gray-300">{cookie.purpose}<td className="py-3 text-gray-300">{cookie.duration}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          cookie.type === 'Essential' ? 'bg-green-500/20 text-green-400' :
<<<<<<< HEAD
                          cookie.type === 'Analytics' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>{cookie.type}</span>
=======
                          cookie.type === 'Analytics' ? 'bg-blue-500/20 text-blue-400' :}
                          'bg-purple-500/20 text-purple-400'}
                        }`}>
                          {cookie.type}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Managing Your Cookie Preferences</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Browser Settings<p className="text-gray-300 mb-4">Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies.</p>
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Chrome: Settings → Privacy and Security → Cookies and other site data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Firefox: Options → Privacy & Security → Cookies and Site Data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Safari: Preferences → Privacy → Manage Website Data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Edge: Settings → Cookies and site permissions</span>
                  </li>
<<<<<<< HEAD
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Cookie Consent<p className="text-gray-300 mb-4">When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.</p>
=======
                </ul>,
              </div>,
              <div>,
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Cookie Consent</h3>,
                <p className="text-gray-300 mb-4">,
                  When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-white">Essential Cookies<span className="text-green-400 text-sm">Always Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
<<<<<<< HEAD
                    <span className="text-white">Analytics Cookies<button className="text-cyan-400 hover:text-cyan-300 text-sm">Manage</button>
=======
                    <span className="text-white">Analytics Cookies</span>
                    <button className="text-cyan-400 hover: text-cyan-300 text-sm">Manage</button>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-white">Marketing Cookies<button className="text-cyan-400 hover:text-cyan-300 text-sm">Manage</button>
                  </div>
                </div>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Third-Party Cookies */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Third-Party Cookies<p className="text-gray-300 mb-6">Some cookies on our site are set by third-party services that appear on our pages. We have no control over these cookies.</p>
            </p>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Google Analytics<p className="text-gray-300 text-sm mb-2">We use Google Analytics to understand how visitors interact with our website.<a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300 text-sm">Google Privacy Policy →</a>
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Social Media<p className="text-gray-300 text-sm mb-2">Social media platforms may set cookies when you share content or visit our social media pages.<a href="https://www.facebook.com/privacy/explanation" className="text-cyan-400 hover:text-cyan-300 text-sm">Facebook Privacy Policy →</a>
                </a>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Contact Information */}
        <section className="mb-16">
          <div className="cyber-card p-8">
<<<<<<< HEAD
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Questions About Cookies?<p className="text-gray-300 mb-6">If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>
                <div className="space-y-2 text-gray-300">
                  <p>364 E Main St STE 1008<p>Middletown, DE 19709<p>United States</p>
=======
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us: </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">,
              <div>,
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>,
                <div className="space-y-2 text-gray-300">,
                  <p>364 E Main St STE 1008</p>,
                  <p>Middletown, DE 19709</p>
                  <p>United States</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Email: <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">privacy@ziontechgroup.com</a>
                  <p>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>,
,
      <Footer />,
    </div>,
  );
};

export default CookiesPage;