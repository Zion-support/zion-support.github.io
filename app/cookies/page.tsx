<<<<<<< HEAD
import React from "react";
import { Helmet } from 'react-helmet-async';
export default function CookiesPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Cookies - Zion Tech Group</title>
        <meta name="description" content="Cookies solutions by Zion Tech Group" />
      </Helmet>
      
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
        <title>Cookie Policy - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Learn about how we use cookies on our website and your options for managing them." />
      </Helmet>
      
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
