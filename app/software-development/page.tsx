import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Smartphone, Globe, Database, Zap, Shield, BarChart3, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareDevelopmentPage = () => {
  return (
    <>
      <Helmet>
        <title>Software Development Services - Zion Tech Group | Custom Applications & Solutions</title>
        <meta name="description" content="Professional software development services including web applications, mobile apps, enterprise solutions, and custom software development for businesses." />
        <meta name="keywords" content="software development, web applications, mobile apps, enterprise solutions, custom software, application development" />
        <link rel="canonical" href="https://ziontechgroup.com/software-development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Software Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your ideas into powerful software solutions. Our expert developers create 
              custom applications that drive business growth and enhance user experiences.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Web Applications</h3>
                <p className="text-gray-300 mb-4">
                  Modern, responsive web applications built with cutting-edge technologies and best practices.
                </p>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Mobile Applications</h3>
                <p className="text-gray-300 mb-4">
                  Native and cross-platform mobile apps that deliver exceptional user experiences.
                </p>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Scalable enterprise software solutions that integrate seamlessly with existing systems.
                </p>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Custom Development</h3>
                <p className="text-gray-300 mb-4">
                  Tailored software solutions designed specifically for your unique business requirements.
                </p>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">API Development</h3>
                <p className="text-gray-300 mb-4">
                  Robust APIs and microservices that enable seamless integration and data exchange.
                </p>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security-First Development</h3>
                <p className="text-gray-300 mb-4">
                  Applications built with security as a core principle from the ground up.
                </p>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Next Software Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert developers bring your vision to life with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
