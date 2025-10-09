'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Smartphone, Tablet, Monitor, Code, Palette, Rocket } from 'lucide-react';

const MobileAppDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mobile App Development - Zion Tech Group</title>
        <meta name="description" content="Professional mobile app development services for iOS and Android. Custom native and cross-platform apps with modern UI/UX design." />
        <meta name="keywords" content="mobile app development, iOS app development, Android app development, React Native, Flutter, mobile UI/UX" />
        <meta property="og:title" content="Mobile App Development - Zion Tech Group" />
        <meta property="og:description" content="Professional mobile app development services for iOS and Android. Custom native and cross-platform apps with modern UI/UX design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/mobile-app-development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile App Development - Zion Tech Group" />
        <meta name="twitter:description" content="Professional mobile app development services for iOS and Android. Custom native and cross-platform apps with modern UI/UX design." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional mobile app development services for iOS and Android. We create custom native and cross-platform apps with modern UI/UX design and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Project
              </button>
              <button className="border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Portfolio
              </button>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Our Mobile Development Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Native iOS Development</h3>
                  <p className="text-gray-300 mb-4">High-performance iOS apps built with Swift and SwiftUI for optimal user experience.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Swift & SwiftUI</li>
                    <li>• Core Data integration</li>
                    <li>• App Store optimization</li>
                    <li>• iOS 17+ compatibility</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Native Android Development</h3>
                  <p className="text-gray-300 mb-4">Robust Android apps using Kotlin and Jetpack Compose for modern Android development.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Kotlin & Jetpack Compose</li>
                    <li>• Room database</li>
                    <li>• Google Play optimization</li>
                    <li>• Material Design 3</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Code className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Cross-Platform Development</h3>
                  <p className="text-gray-300 mb-4">Single codebase solutions using React Native and Flutter for faster development.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• React Native</li>
                    <li>• Flutter</li>
                    <li>• Xamarin</li>
                    <li>• Ionic</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Palette className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
                  <p className="text-gray-300 mb-4">Beautiful, intuitive mobile interfaces designed for optimal user engagement.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• User research</li>
                    <li>• Wireframing</li>
                    <li>• Prototyping</li>
                    <li>• Design systems</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">App Store Deployment</h3>
                  <p className="text-gray-300 mb-4">Complete app store submission and optimization for maximum visibility.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• App Store submission</li>
                    <li>• Google Play submission</li>
                    <li>• ASO optimization</li>
                    <li>• Release management</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">App Maintenance</h3>
                  <p className="text-gray-300 mb-4">Ongoing support, updates, and maintenance to keep your app running smoothly.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Bug fixes</li>
                    <li>• Performance optimization</li>
                    <li>• Security updates</li>
                    <li>• Feature enhancements</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Technology Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🍎</div>
                    <h3 className="text-lg font-bold text-white">iOS</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🤖</div>
                    <h3 className="text-lg font-bold text-white">Android</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">⚛️</div>
                    <h3 className="text-lg font-bold text-white">React Native</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🦋</div>
                    <h3 className="text-lg font-bold text-white">Flutter</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🔷</div>
                    <h3 className="text-lg font-bold text-white">Swift</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🟠</div>
                    <h3 className="text-lg font-bold text-white">Kotlin</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🔵</div>
                    <h3 className="text-lg font-bold text-white">TypeScript</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🟢</div>
                    <h3 className="text-lg font-bold text-white">Dart</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Development Process Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Our Development Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
                  <p className="text-gray-300">Understanding your requirements, target audience, and business goals.</p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Design</h3>
                  <p className="text-gray-300">Creating wireframes, prototypes, and visual designs for your app.</p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Development</h3>
                  <p className="text-gray-300">Building your app with clean, scalable, and maintainable code.</p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Launch</h3>
                  <p className="text-gray-300">Testing, deployment, and app store submission with ongoing support.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Development Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">Basic App</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$15,000<span className="text-lg text-gray-400">+</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Simple UI/UX
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Basic features
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Single platform
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      2-3 months development
                    </li>
                  </ul>
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </button>
                </div>
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-8 rounded-lg relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Professional App</h3>
                  <div className="text-4xl font-bold text-white mb-6">$35,000<span className="text-lg text-cyan-200">+</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Custom UI/UX
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Advanced features
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Cross-platform
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Backend integration
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      4-6 months development
                    </li>
                  </ul>
                  <button className="w-full bg-white text-cyan-600 hover:bg-gray-100 py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </button>
                </div>
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise App</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$75,000<span className="text-lg text-gray-400">+</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Premium UI/UX
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Complex features
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Multiple platforms
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Custom backend
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      6+ months development
                    </li>
                  </ul>
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">200+</div>
                  <div className="text-gray-300">Apps Developed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">4.8★</div>
                  <div className="text-gray-300">Average Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Countries Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your project and create a mobile app that exceeds your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Project
                </button>
                <button className="border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MobileAppDevelopmentPage;