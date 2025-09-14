import { SEO } from '@/components/SEO';
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Cookies() {
  return (
    <>
      <SEO 
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience."
        keywords="cookie policy, cookies, privacy, Zion Tech Group, data collection"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <motion.div 
            className="max-w-7xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cookie
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Policy
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Learn about how we use cookies and similar technologies to enhance your browsing experience 
              and provide personalized services on our website.
            </motion.p>
            
            <motion.div 
              className="text-sm text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Last updated: January 2025
            </motion.div>
          </motion.div>
        </section>

        {/* What Are Cookies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                What Are Cookies?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Understanding Cookies</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Cookies are small text files that websites place on your device to remember your preferences, 
                    analyze how you use the site, and provide personalized content. They help make your browsing 
                    experience more convenient and relevant.
                  </p>
                  <p>
                    When you visit our website, we may use cookies to understand how you interact with our content, 
                    remember your preferences, and provide you with a better user experience.
                  </p>
                  <p>
                    Cookies can be either "session cookies" (which are deleted when you close your browser) or 
                    "persistent cookies" (which remain on your device for a set period of time).
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-8xl mb-4">🍪</div>
                <p className="text-gray-400 text-sm">Cookies help us provide a better experience</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use different types of cookies for various purposes to enhance your experience
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{type.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{type.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-sm text-gray-400">
                    <span className="font-medium">Duration:</span> {type.duration}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Managing Your Cookies</h2>
            <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Browser Settings</h3>
                  <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                    You can control and manage cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• View and delete existing cookies</li>
                    <li>• Block cookies from specific sites</li>
                    <li>• Block all third-party cookies</li>
                    <li>• Clear all cookies when you close your browser</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-zion-cyan/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-12 h-12 text-zion-cyan" />
                  </div>
                  <p className="text-zion-slate-light">
                    Check your browser's help section for specific instructions on managing cookies.
=======
      <SEO
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience"
        keywords="cookie policy, cookies, tracking, privacy, Zion Tech Group cookies"
        canonical="https://ziontechgroup.com/cookies"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-zion-slate-light">
                Last updated: December 15, 2024
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-zion-slate-light mb-6">
                  This Cookie Policy explains how Zion Tech Group ("we", "us", or "our") uses cookies and similar 
                  technologies when you visit our website. This policy should be read together with our Privacy Policy, 
                  which explains how we use your personal information.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  What Are Cookies?
                </h2>
                <p className="text-zion-slate-light mb-6">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) 
                  when you visit a website. They help websites remember information about your visit, such as your 
                  preferred language and other settings, which can make your next visit easier and the site more useful to you.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  How We Use Cookies
                </h2>
                <p className="text-zion-slate-light mb-4">
                  We use cookies for several purposes, including:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                  <li>Essential cookies that are necessary for the website to function properly</li>
                  <li>Analytics cookies that help us understand how visitors interact with our website</li>
                  <li>Functionality cookies that remember your preferences and settings</li>
                  <li>Marketing cookies that help us deliver relevant content and advertisements</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Types of Cookies We Use
                </h2>
                
                <h3 className="text-xl font-bold text-white mb-3 mt-6">Essential Cookies</h3>
                <p className="text-zion-slate-light mb-4">
                  These cookies are essential for the website to function and cannot be switched off in our systems. 
                  They are usually only set in response to actions made by you which amount to a request for services, 
                  such as setting your privacy preferences, logging in, or filling in forms.
                </p>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">Analytics Cookies</h3>
                <p className="text-zion-slate-light mb-4">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the 
                  performance of our site. They help us to know which pages are the most and least popular and 
                  see how visitors move around the site.
                </p>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">Functionality Cookies</h3>
                <p className="text-zion-slate-light mb-4">
                  These cookies enable the website to provide enhanced functionality and personalization. 
                  They may be set by us or by third-party providers whose services we have added to our pages.
                </p>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">Marketing Cookies</h3>
                <p className="text-zion-slate-light mb-6">
                  These cookies may be set through our site by our advertising partners. They may be used by 
                  those companies to build a profile of your interests and show you relevant advertisements on other sites.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Third-Party Cookies
                </h2>
                <p className="text-zion-slate-light mb-6">
                  In addition to our own cookies, we may also use various third-party cookies to report usage 
                  statistics of the website, deliver advertisements on and through the website, and so on. 
                  These third-party cookies are not under our control and are subject to the third party's privacy policy.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-zion-slate-light mb-4">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already 
                  on your computer and you can set most browsers to prevent them from being placed. However, 
                  if you do this, you may have to manually adjust some preferences every time you visit a site.
                </p>
                <p className="text-zion-slate-light mb-6">
                  Most web browsers allow you to manage cookies through their settings preferences. To learn more 
                  about how to manage cookies, visit the help section of your browser.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Specific Cookie Information
                </h2>
                <p className="text-zion-slate-light mb-4">
                  Below is a list of the main cookies we use and their purposes:
                </p>
                
                <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Essential Cookies</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li><strong>session_id:</strong> Maintains your session while using our website</li>
                    <li><strong>csrf_token:</strong> Protects against cross-site request forgery attacks</li>
                    <li><strong>preferences:</strong> Stores your basic website preferences</li>
                  </ul>
                </div>

                <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Analytics Cookies</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li><strong>_ga:</strong> Google Analytics cookie for tracking website usage</li>
                    <li><strong>_gid:</strong> Google Analytics cookie for tracking user sessions</li>
                    <li><strong>_gat:</strong> Google Analytics cookie for controlling request rate</li>
                  </ul>
                </div>

                <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Functionality Cookies</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li><strong>theme:</strong> Remembers your preferred color theme</li>
                    <li><strong>language:</strong> Stores your preferred language setting</li>
                    <li><strong>notifications:</strong> Remembers your notification preferences</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Updates to This Policy
                </h2>
                <p className="text-zion-slate-light mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or 
                  for other operational, legal, or regulatory reasons. We will notify you of any material 
                  changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Contact Us
                </h2>
                <p className="text-zion-slate-light mb-6">
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-4">
                  <p className="text-zion-slate-light mb-2">
                    <strong>Email:</strong> kleber@ziontechgroup.com
                  </p>
                  <p className="text-zion-slate-light mb-2">
                    <strong>Phone:</strong> +1 (302) 464-0950
                  </p>
                  <p className="text-zion-slate-light">
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Eye, Database, Globe } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-300">
            Learn how we use cookies and similar technologies to enhance your experience.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8"
        >
          <div className="flex items-center text-cyan-400 mb-2">
            <Lock className="w-5 h-5 mr-2" />
            <span className="font-semibold">Last Updated:</span>
          </div>
          <p className="text-white">December 2024</p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* What Are Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              What Are Cookies?
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Cookies are small text files that are stored on your device when you visit a website. 
                They help websites remember information about your visit, such as your preferred language 
                and other settings.
              </p>
              <p>
                Cookies can make your next visit easier and the site more useful to you. They help us 
                provide you with a better experience by understanding how you use our website.
              </p>
            </div>
          </motion.section>

          {/* How We Use Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-cyan-400" />
              How We Use Cookies
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>We use cookies for several purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Security Cookies:</strong> Help protect against fraud and maintain security</li>
              </ul>
            </div>
          </motion.section>

          {/* Types of Cookies We Use */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-cyan-400" />
              Types of Cookies We Use
            </h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Session Cookies</h3>
                <p>
                  These cookies are temporary and are deleted when you close your browser. They help 
                  maintain your session and remember your preferences during your visit.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Persistent Cookies</h3>
                <p>
                  These cookies remain on your device for a set period or until you delete them. 
                  They help us remember your preferences for future visits.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Third-Party Cookies</h3>
                <p>
                  These cookies are set by third-party services we use, such as analytics providers 
                  and social media platforms.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Specific Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-cyan-400" />
              Specific Cookies We Use
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4 border border-cyan-500/30">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Essential Cookies</h3>
                  <p className="text-sm">These cookies are necessary for the website to function and cannot be switched off.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-cyan-500/30">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Analytics Cookies</h3>
                  <p className="text-sm">Help us understand how visitors interact with our website.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-cyan-500/30">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Preference Cookies</h3>
                  <p className="text-sm">Allow the website to remember choices you make.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-cyan-500/30">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Marketing Cookies</h3>
                  <p className="text-sm">Used to track visitors across websites for marketing purposes.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Managing Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              Managing Your Cookie Preferences
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View all cookies stored on your device</li>
                <li>Delete specific cookies or all cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Set preferences for different types of cookies</li>
              </ul>
              <p className="mt-4">
                <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.
              </p>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our cookie policy or how we use cookies, 
              please don't hesitate to contact us.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                You have control over how cookies are used on our website
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {cookieManagement.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-blue-400 text-sm font-medium">{item.action}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
              <p className="text-zion-slate-light mb-6">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our platform.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">How We Use Cookies</h3>
              <p className="text-zion-slate-light mb-6">
                We use cookies for several purposes, including:
              </p>
              <ul className="text-zion-slate-light mb-6 space-y-2">
                <li>• Essential cookies for basic website functionality</li>
                <li>• Performance cookies to analyze site usage</li>
                <li>• Functionality cookies to remember your preferences</li>
                <li>• Marketing cookies to provide relevant content</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-4">Managing Your Cookie Preferences</h3>
              <p className="text-zion-slate-light mb-6">
                You can control and manage cookies through your browser settings. However, 
                disabling certain cookies may affect the functionality of our website.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Updates to This Policy</h3>
              <p className="text-zion-slate-light">
                We may update this Cookie Policy from time to time. Please check back 
                periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cookie Policy - Zion Tech Group" 
        description="Learn about how Zion Tech Group uses cookies and similar technologies on our website"
        keywords="cookie policy, cookies, privacy, data collection, Zion Tech Group"
        canonical="https://ziontechgroup.com/cookies"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            This policy explains how Zion Tech Group uses cookies and similar technologies 
            to enhance your browsing experience and provide personalized services.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: January 15, 2025
          </p>
        </div>

        {/* What Are Cookies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">What Are Cookies?</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
              when you visit our website. They help us remember your preferences, analyze how you use 
              our site, and provide you with a better, more personalized experience.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cookies do not contain any personal information that can identify you individually, 
              but they may contain information about your device and how you interact with our website.
            </p>
          </div>
        </div>

        {/* Types of Cookies We Use */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable basic 
                functions like page navigation, access to secure areas, and form submissions.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Session management</li>
                <li>• Security features</li>
                <li>• Basic functionality</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Analytics Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Website usage statistics</li>
                <li>• Performance monitoring</li>
                <li>• User behavior analysis</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Preference Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                These cookies remember your choices and preferences to provide you with a more 
                personalized experience on our website.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Language preferences</li>
                <li>• Theme settings</li>
                <li>• Customized content</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Marketing Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                These cookies are used to track visitors across websites to display relevant 
                advertisements and measure the effectiveness of marketing campaigns.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Targeted advertising</li>
                <li>• Campaign effectiveness</li>
                <li>• Cross-site tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Cookies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">How We Use Cookies</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Website Functionality</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Remember your login status and preferences</li>
                  <li>• Enable secure transactions and form submissions</li>
                  <li>• Provide personalized content and recommendations</li>
                  <li>• Optimize website performance and user experience</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Analytics & Improvement</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Analyze website traffic and user behavior</li>
                  <li>• Identify and fix technical issues</li>
                  <li>• Improve website design and functionality</li>
                  <li>• Measure the effectiveness of our content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Third-Party Cookies</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              Some cookies on our website are set by third-party services that we use to enhance 
              functionality and provide additional features. These services may include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Analytics Services</h4>
                <p className="text-gray-300 text-sm">Google Analytics, Mixpanel</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Marketing Tools</h4>
                <p className="text-gray-300 text-sm">Facebook Pixel, Google Ads</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Customer Support</h4>
                <p className="text-gray-300 text-sm">Intercom, Zendesk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Managing Cookies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Managing Your Cookie Preferences</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You can control and manage cookies through your browser settings. Most browsers 
                  allow you to view, delete, and block cookies from specific websites.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Please note that blocking certain cookies may affect the functionality of our 
                  website and your user experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Cookie Consent</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When you first visit our website, you'll see a cookie consent banner that 
                  allows you to accept or decline non-essential cookies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  You can change your preferences at any time by clicking the cookie settings 
                  link in the footer of our website.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Updates to Policy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Updates to This Policy</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our 
              practices or for other operational, legal, or regulatory reasons.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We will notify you of any material changes by posting the new policy on our 
              website and updating the "Last updated" date at the top of this page.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Questions About Cookies?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              If you have any questions about our use of cookies or would like to manage your preferences, 
              please don't hesitate to contact us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Contact Privacy Team
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CircleDot, Settings, Eye, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cookies() {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly.',
      examples: ['Authentication cookies', 'Security cookies', 'Session management'],
      necessary: true
    },
    {
      title: 'Performance Cookies',
      icon: Settings,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Analytics cookies', 'Performance monitoring', 'Error tracking'],
      necessary: false
    },
    {
      title: 'Functional Cookies',
      icon: Eye,
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'User settings', 'Feature preferences'],
      necessary: false
    },
    {
      title: 'Marketing Cookies',
      icon: CircleDot,
      description: 'These cookies are used to deliver relevant advertisements.',
      examples: ['Advertising cookies', 'Social media cookies', 'Tracking cookies'],
      necessary: false
    }
  ];

  const cookieTable = [
    {
      name: 'session_id',
      purpose: 'Maintains your session while using the website',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: 'auth_token',
      purpose: 'Keeps you logged in securely',
      duration: '30 days',
      type: 'Essential'
    },
    {
      name: '_ga',
      purpose: 'Google Analytics - tracks website usage',
      duration: '2 years',
      type: 'Performance'
    },
    {
      name: '_fbp',
      purpose: 'Facebook Pixel - tracks conversions',
      duration: '3 months',
      type: 'Marketing'
    },
    {
      name: 'language',
      purpose: 'Remembers your language preference',
      duration: '1 year',
      type: 'Functional'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cookie Policy | Zion Tech Group" 
        description="Learn about how Zion Tech Group uses cookies and similar technologies to improve your experience on our website."
        keywords="cookie policy, privacy, data protection, Zion Tech Group"
        canonical="https://ziontechgroup.com/cookies"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <CircleDot className="h-16 w-16 text-zion-cyan" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
            to recognize you when you visit our website and how we use them to improve your experience.
          </p>
          <p className="text-zion-slate-light mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* What are Cookies Section */}
        <Card className="mb-8 border-zion-blue-light">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <CircleDot className="h-6 w-6 mr-2 text-zion-cyan" />
              What Are Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-zion-slate-light">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide useful information to website owners.
            </p>
            <p className="text-zion-slate-light">
              Cookies do not contain any information that personally identifies you, but personal information that we 
              store about you may be linked to the information stored in and obtained from cookies.
            </p>
          </CardContent>
        </Card>

        {/* Cookie Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card key={type.title} className="border-zion-blue-light">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <IconComponent className="h-6 w-6 text-zion-cyan" />
                      <CardTitle className="text-white text-lg">{type.title}</CardTitle>
                      {type.necessary && (
                        <span className="px-2 py-1 bg-zion-purple text-white text-xs rounded-full">
                          Necessary
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light mb-3">
                      {type.description}
                    </CardDescription>
                    <ul className="space-y-1">
                      {type.examples.map((example, index) => (
                        <li key={index} className="text-zion-slate-light text-sm flex items-center">
                          <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Cookie Table */}
        <Card className="mb-8 border-zion-blue-light">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Specific Cookies We Use</CardTitle>
            <CardDescription className="text-zion-slate-light">
              Below is a list of the specific cookies we use and their purposes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zion-blue-light">
                    <th className="text-left py-3 px-4 text-white font-semibold">Cookie Name</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Purpose</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Duration</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((cookie, index) => (
                    <tr key={index} className="border-b border-zion-blue-light/30">
                      <td className="py-3 px-4 text-zion-cyan font-mono">{cookie.name}</td>
                      <td className="py-3 px-4 text-zion-slate-light">{cookie.purpose}</td>
                      <td className="py-3 px-4 text-zion-slate-light">{cookie.duration}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          cookie.type === 'Essential' 
                            ? 'bg-zion-purple text-white' 
                            : 'bg-zion-blue-light text-zion-slate-light'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Managing Cookies */}
        <Card className="mb-8 border-zion-blue-light">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Settings className="h-6 w-6 mr-2 text-zion-cyan" />
              Managing Your Cookie Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-zion-slate-light">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies 
              can impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Browser Settings</h4>
                <p className="text-zion-slate-light text-sm">
                  Most browsers allow you to refuse to accept cookies and to delete cookies. 
                  The methods for doing so vary from browser to browser.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Cookie Consent</h4>
                <p className="text-zion-slate-light text-sm">
                  When you first visit our website, you'll see a cookie consent banner where 
                  you can choose which types of cookies to accept.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Cookies */}
        <Card className="mb-8 border-zion-blue-light">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Lock className="h-6 w-6 mr-2 text-zion-cyan" />
              Third-Party Cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-zion-slate-light">
              In addition to our own cookies, we may also use various third-party cookies to report usage 
              statistics of the website, deliver advertisements on and through the website, and so on.
            </p>
            <p className="text-zion-slate-light">
              These third-party cookies are not under our control and are subject to the third party's 
              privacy policy. We recommend that you review the privacy policies of these third parties.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-zion-blue-light bg-zion-blue-dark/50">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Questions About Cookies?</CardTitle>
            <CardDescription className="text-zion-slate-light">
              If you have any questions about our use of cookies, please contact us.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple/90 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-zion-blue-light text-white font-medium rounded-lg hover:bg-zion-blue-light/20 transition-colors"
              >
                Email Privacy Team
              </a>
            </div>
            <p className="text-center text-zion-slate-light mt-4">
              You can also read our full <Link to="/privacy" className="text-zion-cyan hover:underline">Privacy Policy</Link> for more information.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cookies;