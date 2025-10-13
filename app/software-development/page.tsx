import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Globe, Database, Shield, Zap, Users } from 'lucide-react';

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Helmet>
        <title>Software Development - Zion Tech Group</title>
        <meta name="description" content="Professional software development services including web applications, mobile apps, and enterprise solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Software Development
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Custom software solutions tailored to your business needs. From web applications to mobile apps, 
                we deliver high-quality, scalable software that drives growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Globe className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Web Applications</h3>
                <p className="text-gray-300 mb-4">
                  Modern, responsive web applications built with the latest technologies and best practices.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• React, Vue.js, Angular</li>
                  <li>• Node.js, Python, PHP</li>
                  <li>• Progressive Web Apps (PWA)</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Smartphone className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Mobile Applications</h3>
                <p className="text-gray-300 mb-4">
                  Native and cross-platform mobile applications for iOS and Android platforms.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• React Native, Flutter</li>
                  <li>• Native iOS & Android</li>
                  <li>• App Store optimization</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Database className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Scalable enterprise software solutions designed for large organizations.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Microservices architecture</li>
                  <li>• API development</li>
                  <li>• Legacy system integration</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Security-First Development</h3>
                <p className="text-gray-300 mb-4">
                  Secure software development with built-in security measures and best practices.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• OWASP compliance</li>
                  <li>• Security testing</li>
                  <li>• Data encryption</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Zap className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
                <p className="text-gray-300 mb-4">
                  High-performance software solutions optimized for speed and efficiency.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Code optimization</li>
                  <li>• Database tuning</li>
                  <li>• Caching strategies</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Users className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Team Augmentation</h3>
                <p className="text-gray-300 mb-4">
                  Expert developers to augment your existing team or lead your project.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Dedicated developers</li>
                  <li>• Technical leadership</li>
                  <li>• Code reviews & mentoring</li>
                </ul>
              </div>
            </div>

            {/* Development Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Our Development Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-cyan-400">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
                  <p className="text-gray-300">Understanding your requirements and business goals</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-cyan-400">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
                  <p className="text-gray-300">Creating wireframes and technical architecture</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-cyan-400">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
                  <p className="text-gray-300">Agile development with regular iterations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-cyan-400">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Deployment</h3>
                  <p className="text-gray-300">Testing, deployment, and ongoing support</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Next Software Solution?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let our experienced development team bring your ideas to life with cutting-edge technology and proven methodologies.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}