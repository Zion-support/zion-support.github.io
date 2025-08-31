import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Ear, MousePointer, Smartphone, Monitor, CheckCircle, AlertTriangle, Users, Globe, Shield } from 'lucide-react';

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-purple-100 rounded-full">
              <Eye className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">
            Accessibility Statement
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
            We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
        >
          {/* Our Commitment */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Commitment to Accessibility</h2>
            </div>
            <p className="text-zion-slate-light mb-4 leading-relaxed">
              At Zion Tech Group, we believe that technology should be accessible to everyone, 
              regardless of their abilities or disabilities. We are committed to creating digital 
              experiences that are inclusive, usable, and accessible to all users.
            </p>
            <p className="text-zion-slate-light leading-relaxed">
              Our accessibility efforts are guided by the Web Content Accessibility Guidelines (WCAG) 2.1 
              Level AA standards, and we continuously work to improve the accessibility of our website 
              and digital services.
            </p>
          </section>

          {/* Accessibility Features */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-green-100 rounded-lg mr-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Accessibility Features</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Eye className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Visual Accessibility</h3>
                </div>
                <ul className="space-y-2 text-zion-slate-light text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>High contrast color schemes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Resizable text and scalable layouts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Alternative text for images</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Clear typography and spacing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                    <MousePointer className="h-5 w-5 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Navigation & Interaction</h3>
                </div>
                <ul className="space-y-2 text-zion-slate-light text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Keyboard navigation support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Skip navigation links</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Logical tab order</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Focus indicators</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Ear className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Audio & Multimedia</h3>
                </div>
                <ul className="space-y-2 text-zion-slate-light text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Video captions and transcripts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Audio descriptions where needed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Volume controls and pause options</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Alternative text for audio content</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Smartphone className="h-5 w-5 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Mobile & Responsive</h3>
                </div>
                <ul className="space-y-2 text-zion-slate-light text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Responsive design for all devices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Touch-friendly interface elements</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Gesture alternatives for mobile</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Optimized for screen readers</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* WCAG Compliance */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">WCAG 2.1 Level AA Compliance</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Our website strives to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
                These guidelines explain how to make web content more accessible for people with disabilities.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-400">A</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Level A</h4>
                  <p className="text-zion-slate-light text-sm">
                    Basic accessibility features that are essential for some users
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-400">AA</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Level AA</h4>
                  <p className="text-zion-slate-light text-sm">
                    Enhanced accessibility features that address the most common barriers
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-400">AAA</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Level AAA</h4>
                  <p className="text-zion-slate-light text-sm">
                    Highest level of accessibility for the most comprehensive user experience
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-blue-300 text-sm text-center">
                  <strong>Current Status:</strong> We are actively working towards achieving 
                  WCAG 2.1 Level AA compliance across our entire website.
                </p>
              </div>
            </div>
          </section>

          {/* Known Issues */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg mr-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Known Accessibility Issues</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                We are aware of some accessibility issues and are working to resolve them. 
                We believe that it is important to be transparent about our current limitations:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">PDF Documents</h4>
                    <p className="text-zion-slate-light text-sm">
                      Some PDF documents may not be fully accessible to screen readers. 
                      We are working to convert these to accessible HTML formats.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Third-Party Content</h4>
                    <p className="text-zion-slate-light text-sm">
                      Some third-party content, such as embedded videos or forms, may not 
                      meet our accessibility standards. We are working with providers to improve this.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Dynamic Content</h4>
                    <p className="text-zion-slate-light text-sm">
                      Some dynamically loaded content may not immediately announce changes 
                      to screen readers. We are implementing ARIA live regions to address this.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testing & Evaluation */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-purple-100 rounded-lg mr-4">
                <Monitor className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Testing & Evaluation</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                We regularly test our website for accessibility using a combination of automated tools, 
                manual testing, and feedback from users with disabilities:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">Automated Testing</h4>
                  <ul className="space-y-2 text-zion-slate-light text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>WAVE Web Accessibility Evaluator</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>axe DevTools</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Lighthouse Accessibility Audit</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Color Contrast Analyzers</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Manual Testing</h4>
                  <ul className="space-y-2 text-zion-slate-light text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Keyboard navigation testing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Screen reader compatibility</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Color blindness simulation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Mobile device testing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Feedback & Support */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-green-100 rounded-lg mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Feedback & Support</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                We welcome your feedback on the accessibility of our website. If you experience 
                accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📧</span>
                  </div>
                  <span className="text-zion-slate-light">
                    Email: <a href="mailto:accessibility@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">accessibility@ziontechgroup.com</a>
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <span className="text-zion-slate-light">
                    Phone: <a href="tel:+15551234567" className="text-blue-400 hover:text-blue-300">+1 (555) 123-4567</a>
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <span className="text-zion-slate-light">
                    Address: 123 Tech Street, Innovation City, IC 12345
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-300 text-sm">
                  <strong>Response Time:</strong> We aim to respond to all accessibility 
                  feedback within 48 hours and will work with you to address any issues.
                </p>
              </div>
            </div>
          </section>

          {/* Continuous Improvement */}
          <section>
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Continuous Improvement</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                Accessibility is an ongoing commitment for Zion Tech Group. We are continuously 
                working to improve the accessibility of our website and digital services:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    Regular accessibility audits and testing
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    Staff training on accessibility best practices
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    Integration of accessibility into our development process
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    Collaboration with accessibility experts and advocacy groups
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <p className="text-purple-300 text-sm">
                  <strong>Goal:</strong> Our goal is to achieve and maintain WCAG 2.1 Level AA 
                  compliance across our entire digital presence by the end of 2024.
                </p>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-zion-slate-light text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>
      </div>
    </div>
  );
}