import React from 'react';
import { Shield, Cookie, Settings, Eye, Database, Lock, CheckCircle, AlertTriangle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Cookie className="w-12 h-12 text-cyan-400 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Cookie Policy
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Learn how we use cookies and similar technologies to enhance your experience on our website.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center">
                <Settings className="w-4 h-4 mr-2" />
                Last updated: {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* What are Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Database className="w-8 h-8 text-cyan-400 mr-3" />
                What Are Cookies?
              </h2>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We use both session cookies (which expire when you close your browser) and persistent 
                  cookies (which remain on your device for a set period of time).
                </p>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Settings className="w-8 h-8 text-cyan-400 mr-3" />
                Types of Cookies We Use
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/20">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Essential Cookies
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic 
                    functions like page navigation, access to secure areas, and remembering your login status.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/20">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Analytics Cookies
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously. This helps us improve our website's performance.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/20">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Preference Cookies
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    These cookies remember your choices and preferences, such as language settings, 
                    theme preferences, and other customization options.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/20">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Security Cookies
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    These cookies help us maintain the security of our website and protect against 
                    fraud and unauthorized access.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookie Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Settings className="w-8 h-8 text-cyan-400 mr-3" />
                Managing Your Cookie Preferences
              </h2>
              
              <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/20">
                <p className="text-gray-300 leading-relaxed mb-6">
                  You have control over cookies. You can choose to accept or decline cookies when you 
                  first visit our website, and you can change your preferences at any time.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Browser Settings</h4>
                      <p className="text-gray-300 text-sm">
                        Most web browsers allow you to control cookies through their settings. You can 
                        set your browser to refuse cookies or delete certain cookies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Cookie Banner</h4>
                      <p className="text-gray-300 text-sm">
                        When you first visit our website, you'll see a cookie banner where you can 
                        choose which types of cookies to accept.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Opt-Out Options</h4>
                      <p className="text-gray-300 text-sm">
                        For analytics cookies, you can opt out by visiting the respective service 
                        providers' opt-out pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                Third-Party Cookies
              </h2>
              
              <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may use third-party services that set their own cookies. These include:
                </p>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span><strong>Google Analytics:</strong> For website analytics and performance monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span><strong>Social Media Platforms:</strong> For social sharing and integration features</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span><strong>Marketing Tools:</strong> For tracking marketing campaign effectiveness</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span><strong>Security Services:</strong> For protecting against fraud and abuse</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                Questions About Our Cookie Policy?
              </h2>
              
              <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please don't 
                  hesitate to contact us.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Contact Information</h4>
                    <div className="space-y-2 text-gray-300">
                      <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                      <p><strong>Phone:</strong> +1 302 464 0950</p>
                      <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
                    <div className="space-y-2">
                      <a href="/privacy" className="block text-cyan-400 hover:text-white transition-colors">
                        Privacy Policy
                      </a>
                      <a href="/terms" className="block text-cyan-400 hover:text-white transition-colors">
                        Terms of Service
                      </a>
                      <a href="/contact" className="block text-cyan-400 hover:text-white transition-colors">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                Policy Updates
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by posting the updated policy on our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiesPage;