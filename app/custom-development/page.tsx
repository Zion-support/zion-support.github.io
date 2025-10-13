import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Database, Smartphone, Globe, Zap, ArrowRight, CheckCircle, Star, Cpu } from 'lucide-react';

const CustomDevelopmentPage = () => {
  return (
    <>
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Custom software development solutions tailored to your business needs. Web apps, mobile apps, enterprise software, and more." />
        <meta name="keywords" content="custom development, software development, web development, mobile development, enterprise software, custom solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/custom-development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Custom Development
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your ideas into powerful digital solutions with our custom development services. 
                From concept to deployment, we build software that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center group">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Development Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive custom development solutions for every business need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Web Development */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
                <p className="text-gray-300 mb-6">
                  Custom web applications built with modern technologies and best practices for optimal performance.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    React, Vue, Angular
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Node.js, Python, PHP
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Responsive design
                  </li>
                </ul>
              </div>

              {/* Mobile Development */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Mobile Development</h3>
                <p className="text-gray-300 mb-6">
                  Native and cross-platform mobile applications for iOS and Android with seamless user experiences.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    React Native, Flutter
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Swift, Kotlin
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Cross-platform solutions
                  </li>
                </ul>
              </div>

              {/* Enterprise Software */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Software</h3>
                <p className="text-gray-300 mb-6">
                  Scalable enterprise solutions that integrate seamlessly with your existing business processes.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    ERP systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    CRM solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Business intelligence
                  </li>
                </ul>
              </div>

              {/* API Development */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">API Development</h3>
                <p className="text-gray-300 mb-6">
                  Robust and secure APIs that enable seamless integration between different systems and platforms.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    RESTful APIs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    GraphQL
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Microservices
                  </li>
                </ul>
              </div>

              {/* E-commerce Solutions */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">E-commerce Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Custom e-commerce platforms and online stores that drive sales and enhance customer experience.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Custom platforms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Payment integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Inventory management
                  </li>
                </ul>
              </div>

              {/* AI-Powered Solutions */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent applications powered by artificial intelligence and machine learning technologies.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Machine learning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Natural language processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Computer vision
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Development Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Discovery</h3>
                <p className="text-gray-300">
                  We analyze your requirements and create a detailed project roadmap.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Design</h3>
                <p className="text-gray-300">
                  We create wireframes, prototypes, and user interface designs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Development</h3>
                <p className="text-gray-300">
                  We build your solution using agile methodology and best practices.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Deployment</h3>
                <p className="text-gray-300">
                  We deploy your solution and provide ongoing support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project requirements and create a solution that perfectly fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomDevelopmentPage;