'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Shield, Settings, Eye, Database, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';
  
  const cookieTypes = [
    {
      type: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: [
        'Authentication cookies',
        'Security cookies',
        'Load balancing cookies',
        'User interface customization'
      ],
      required: true
    },
    {
      type: 'Analytics Cookies',
      icon: Database,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      required: false
    },
    {
      type: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: [
        'Language preferences',
        'Theme settings',
        'User preferences',
        'Form data storage'
      ],
      required: false
    },
    {
      type: 'Marketing Cookies',
      icon: Eye,
      description: 'These cookies are used to deliver relevant advertisements and marketing content.',
      examples: [
        'Advertising targeting',
        'Social media integration',
        'Email marketing tracking',
        'Campaign performance'
      ],
      required: false
    }
  ];

  const purposes = [
    {
      title: 'Website Functionality',
      description: 'Ensure the website works correctly and securely',
      icon: Shield
    },
    {
      title: 'User Experience',
      description: 'Remember your preferences and settings',
      icon: Settings
    },
    {
      title: 'Analytics',
      description: 'Understand how users interact with our site',
      icon: Database
    },
    {
      title: 'Marketing',
      description: 'Deliver relevant content and advertisements',
      icon: Eye
    }
  ];

  return (
    <>
      <Helmet></Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about the cookies we use and how to manage your cookie preferences." /></meta>
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, data collection" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/cookies" /></link>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
          {/* Header */}
          <div className="text-center mb-16"></div>
            <div className="flex items-center justify-center mb-6"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4"></div>
                <Cookie className="w-8 h-8 text-white" /></Cookie>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white neon-text-enhanced"></h1>
                Cookie Policy
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              This policy explains how we use cookies and similar technologies on our website. 
              Learn about the types of cookies we use and how to manage your preferences.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400"></div>
              <Info className="w-4 h-4" /></Info>
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* What Are Cookies */}
          <div className="cyber-card-enhanced p-8 mb-12"></div>
            <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <p className="text-gray-300 mb-6 leading-relaxed"></p>
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <div className="bg-slate-800 rounded-lg p-6"></div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Points</h3>
                  <ul className="space-y-2"></ul>
                    <li className="flex items-center text-gray-300 text-sm"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                      Cookies are safe and cannot harm your device
                    </li>
                    <li className="flex items-center text-gray-300 text-sm"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                      They help us improve our website and services
                    </li>
                    <li className="flex items-center text-gray-300 text-sm"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                      You can control which cookies you accept
                    </li>
                    <li className="flex items-center text-gray-300 text-sm"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                      Some cookies are essential for website functionality
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-white mb-4">Cookie Categories</h3>
                <div className="space-y-4"></div>
                  {purposes.map((purpose, index) => (
                    <div key={index} className="flex items-center space-x-3"></div>
                      <purpose.icon className="w-6 h-6 text-cyan-400" /></purpose>
                      <div></div>
                        <div className="text-white font-medium">{purpose.title}</div>
                        <div className="text-gray-300 text-sm">{purpose.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Types of Cookies */}
          <div className="cyber-card-enhanced p-8 mb-12"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
            <div className="space-y-6"></div>
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6"></div>
                  <div className="flex items-start justify-between mb-4"></div>
                    <div className="flex items-center space-x-3"></div>
                      <cookie.icon className="w-8 h-8 text-cyan-400" /></cookie>
                      <h3 className="text-xl font-semibold text-white">{cookie.type}</h3>
                    </div>
                    {cookie.required ? (
                      <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded"></span>
                        Required
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-yellow-600 text-white text-xs font-semibold rounded"></span>
                        Optional
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4">{cookie.description}</p>
                  <div></div>
                    <h4 className="text-white font-medium mb-2">Examples:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2"></ul>
                      {cookie.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-gray-300 text-sm"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cookie Management */}
          <div className="cyber-card-enhanced p-8 mb-12"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 mb-4"></p>
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2"></ul>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                    Block all cookies
                  </li>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                    Block third-party cookies
                  </li>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                    Delete existing cookies
                  </li>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                    Get notifications before cookies are set
                  </li>
                </ul>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-white mb-4">Cookie Consent</h3>
                <p className="text-gray-300 mb-4"></p>
                  When you first visit our website, you'll see a cookie consent banner where you can:
                </p>
                <ul className="space-y-2"></ul>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                    Accept all cookies
                  </li>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                    Reject non-essential cookies
                  </li>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                    Customize your preferences
                  </li>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                    Change your settings anytime
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="cyber-card-enhanced p-8 mb-12"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
            <div className="space-y-6"></div>
              <p className="text-gray-300"></p>
                We may use third-party services that set their own cookies. These services help us provide 
                better functionality and analytics. Here are the main third-party cookies we use:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div className="bg-slate-800 rounded-lg p-6"></div>
                  <h3 className="text-lg font-semibold text-white mb-3">Google Analytics</h3>
                  <p className="text-gray-300 text-sm mb-3"></p>
                    Helps us understand website traffic and user behavior
                  </p>
                  <div className="text-xs text-gray-400"></div>
                    <div>Cookies: _ga, _gid, _gat</div>
                    <div>Duration: Up to 2 years</div>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-lg p-6"></div>
                  <h3 className="text-lg font-semibold text-white mb-3">Social Media</h3>
                  <p className="text-gray-300 text-sm mb-3"></p>
                    Enables social media sharing and integration
                  </p>
                  <div className="text-xs text-gray-400"></div>
                    <div>Platforms: LinkedIn, Twitter, Facebook</div>
                    <div>Duration: Varies by platform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact of Disabling Cookies */}
          <div className="cyber-card-enhanced p-8 mb-12"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Impact of Disabling Cookies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center"></h3>
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mr-2" /></AlertTriangle>
                  What Happens If You Disable Cookies
                </h3>
                <ul className="space-y-2"></ul>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" /></CheckCircle>
                    Some website features may not work properly
                  </li>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" /></CheckCircle>
                    You may need to re-enter information repeatedly
                  </li>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" /></CheckCircle>
                    Personalized content may not be available
                  </li>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" /></CheckCircle>
                    We won't be able to remember your preferences
                  </li>
                </ul>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center"></h3>
                  <Shield className="w-6 h-6 text-green-400 mr-2" /></Shield>
                  Essential Cookies Always Active
                </h3>
                <p className="text-gray-300 mb-4"></p>
                  Essential cookies are necessary for the website to function and cannot be disabled. 
                  These include:
                </p>
                <ul className="space-y-2"></ul>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                    Security and authentication
                  </li>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                    Load balancing and performance
                  </li>
                  <li className="flex items-center text-gray-300 text-sm"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                    Basic website functionality
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="cyber-card-enhanced p-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-8"></p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
              <div className="flex items-center space-x-3"></div>
                <Mail className="w-6 h-6 text-cyan-400" /></Mail>
                <div></div>
                  <div className="text-white font-semibold">Email</div>
                  <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300"></a>
                    privacy@ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3"></div>
                <Phone className="w-6 h-6 text-cyan-400" /></Phone>
                <div></div>
                  <div className="text-white font-semibold">Phone</div>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300"></a>
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3"></div>
                <Database className="w-6 h-6 text-cyan-400" /></Database>
                <div></div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  };

export default CookiesPage;