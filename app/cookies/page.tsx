import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Eye, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      icon: <Cookie className="w-6 h-6" />,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: [
        'Authentication cookies',
        'Security cookies',
        'Load balancing cookies']
        'User interface customization']],
      required: true
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      examples: [
        'Language preferences',
        'Region settings',
        'User preferences']
        'Accessibility options']],
      required: false
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User behavior analysis']
        'Performance monitoring']],
      required: false
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      examples: [
        'Social media tracking',
        'Advertising cookies',
        'Remarketing pixels']
        'Conversion tracking']],
      required: false
    }
  ];

const cookieDetails = [
    {
      name: 'session_id',
      purpose: 'Maintains user session state',
      type: 'Essential',
      duration: 'Session',
      provider: 'Zion Tech Group'
    },
    {
      name: '_ga',
      purpose: 'Distinguishes unique users',
      type: 'Analytics',
      duration: '2 years',
      provider: 'Google Analytics'
    },
    {
      name: '_gid',
      purpose: 'Distinguishes unique users',
      type: 'Analytics',
      duration: '24 hours',
      provider: 'Google Analytics'
    },
    {
      name: 'language_preference',
      purpose: 'Stores user language preference',
      type: 'Functional',
      duration: '1 year',
      provider: 'Zion Tech Group'
    },
    {
      name: 'cookie_consent',
      purpose: 'Remembers cookie consent choice',
      type: 'Essential',
      duration: '1 year',
      provider: 'Zion Tech Group'
    }
  ];
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage & Management</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website. Understand cookie types, purposes, and how to manage your preferences." />
        <meta name="keywords" content="cookie policy, cookies, privacy, data collection, website tracking, user preferences" />
        <meta property="og:title" content="Cookie Policy - Zion Tech Group" />
        <meta property="og:description" content="Our cookie policy and how we use cookies on our website" />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Policy</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                This policy explains how we use cookies and similar technologies on our website to enhance your experience and provide our services.
              </p>
              
        <div className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </section>
        {/* What Are Cookies */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">What Are Cookies?</h2>
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                
          <p className="text-gray-300 leading-relaxed mb-6">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
                </p>
                
          <p className="text-gray-300 leading-relaxed">
                  We use both session cookies (which expire when you close your, browser) and persistent cookies (which remain on your device for a set period of, time) to enhance your experience on our website.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Cookie Types */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Types of Cookies We Use</h2>
              
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cookieTypes.map((type, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    
        <div className="flex items-center mb-6">
                      
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        
        <div className="text-white">{type.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{type.title}</h3>
                        {type.required && (
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                            Required
                          </span>
                        )}
                      </div>
                    </div>
                    
          <p className="text-gray-300 mb-6">{type.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Examples:</h4>
                      <ul className="space-y-2">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Cookie Details */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Cookie Details</h2>
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-cyan-500/20">
                      <th className="text-left text-cyan-400 font-semibold py-3 px-4">Cookie Name</th>
                      <th className="text-left text-cyan-400 font-semibold py-3 px-4">Purpose</th>
                      <th className="text-left text-cyan-400 font-semibold py-3 px-4">Type</th>
                      <th className="text-left text-cyan-400 font-semibold py-3 px-4">Duration</th>
                      <th className="text-left text-cyan-400 font-semibold py-3 px-4">Provider</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieDetails.map((cookie, index) => (
                      <tr key={index} className="border-b border-cyan-500/10">
                        <td className="py-3 px-4 text-white font-mono text-sm">{cookie.name}</td>
                        <td className="py-3 px-4 text-gray-300 text-sm">{cookie.purpose}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            cookie.type === 'Essential' ? 'bg-red-500/20 text-red-400' :
                            cookie.type === 'Analytics' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {cookie.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-300 text-sm">{cookie.duration}</td>
                        <td className="py-3 px-4 text-gray-300 text-sm">{cookie.provider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* Managing Cookies */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Managing Your Cookie Preferences</h2>
              
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
                  
          <p className="text-gray-300 mb-6">
                    You can control and delete cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Block all cookies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Block third-party cookies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Delete existing cookies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Set cookie preferences</span>
                    </li>
                  </ul>
                </div>
                
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Our Cookie Banner</h3>
                  
          <p className="text-gray-300 mb-6">
                    When you first visit our website, you'll see a cookie banner where you can:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Accept all cookies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Reject non-essential cookies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Customize your preferences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Change settings anytime</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Third-Party Cookies */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Third-Party Cookies</h2>
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                
          <p className="text-gray-300 leading-relaxed mb-6">
                  We may use third-party services that set their own cookies on your device. These include:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-semibold">Google Analytics:</span>
                      <span className="text-gray-300 ml-2">For website analytics and performance monitoring</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-semibold">Social Media Platforms:</span>
                      <span className="text-gray-300 ml-2">For social sharing and integration features</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-semibold">Marketing Tools:</span>
                      <span className="text-gray-300 ml-2">For advertising and marketing purposes</span>
                    </div>
                  </li>
                </ul>
                
          <p className="text-gray-300 leading-relaxed mt-6">
                  These third-party cookies are subject to their respective privacy policies. We recommend reviewing their policies to understand how they use your data.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Questions About Cookies?</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                If you have any questions about our use of cookies, please contact us.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
    href="mailto:privacy@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Privacy Team
                </a>
                <a
    href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  General Contact
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default CookiesPage;