<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GDataAnalyticsZionTechGroupPage() {
=======
'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Mic, Volume2, Download, Play, Pause, Settings, Users, Zap, Shield, Globe } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIVoiceCloningPage: React.FC = () => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Ai Voice Cloning - Zion Tech Group</title>
        <meta name="description" content="Ai Voice Cloning solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Voice Cloning</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai voice cloning solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
=======
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></mai>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center"></div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6"></div>
                <Mic className="w-4 h-4 mr-2" />
                AI Voice Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                AI Voice Cloning</h1>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"></span>
                  Professional Voice Synthesis
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"></p>
                Create realistic voice clones with our advanced AI technology. Perfect for content creators, 
                businesses, and developers who need high-quality voice synthesis.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
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
              </p>
=======

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Voice Cloning
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai voice cloning solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white"></section>
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Powerful Voice Cloning Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3 xl mx-auto"></p>
                Our AI voice cloning technology delivers professional-quality results with advanced features
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
<<<<<<< HEAD
              ))}
=======
                <h3 className="text-xl font-semibold text-gray-900 mb-4">High-Quality Voice Synthesis</h>
                <p className="text-gray-600 mb-4"></p>
                  Generate natural-sounding voices with 99% accuracy and professional quality audio output.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircl>
                    48 kHz audio quality
                  </li>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Multiple</CheckCircle></<<CheckCircle>voice</CheckCircle></<CheckCircle>styles</CheckCircle>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100"></div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Voice Training</h>
                <p className="text-gray-600 mb-4"></p>
                  Train custom voice models with just 10 minutes of audio samples using our advanced AI.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Quick</CheckCircle></<<CheckCircle>training</CheckCircle></<CheckCircle>process</CheckCircle>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Voice</CheckCircle></<<CheckCircle>emotion</CheckCircle></<CheckCircle>control</CheckCircle>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100"></div>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Language Support</h>
                <p className="text-gray-600 mb-4"></p>
                  Support for 50+ languages and dialects with native pronunciation and accent accuracy.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircl>
                    50+ languages
                  </li>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Regional</CheckCircle></<<CheckCircle>accents</CheckCircle>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100"></div>
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy & Security</h>
                <p className="text-gray-600 mb-4"></p>
                  Enterprise-grade security with voice data encryption and secure processing.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>End</CheckCircle></CheckCircle>-to-end encryption
                  </li>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>GDPR</CheckCircle></<<CheckCircle>compliant</CheckCircle>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-xl border border-pink-100"></div>
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Processing</h>
                <p className="text-gray-600 mb-4"></p>
                  Generate voice audio in real-time with our optimized AI models and cloud infrastructure.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircl>
                    <1 second generation
                  </li></1>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Batch</CheckCircle></<<CheckCircle>processing</CheckCircle>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100"></div>
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Collaboration</h>
                <p className="text-gray-600 mb-4"></p>
                  Share voice models and collaborate with team members on voice projects.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Shared</CheckCircle></<<CheckCircle>voice</CheckCircle></<CheckCircle>library</CheckCircle>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Version</CheckCircle></<<CheckCircle>control</CheckCircle>
                  </li>
                </ul>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
=======
        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"></section>
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3 xl mx-auto"></p>
                Choose the perfect plan for your voice cloning needs
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
<<<<<<< HEAD
              ))}
=======
                <ul className="space-y-4 mb-8"></u>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">10 voice models</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">10,000 characters/month</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">5 languages</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Email support</spa>
                  </li>
                </ul>
                <a 
                  href="mailto:kleber@ziontechgroup.com?subject=AI Voice Cloning Starter Plan"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
                ></a>
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-purple-500 relative"></div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold"></span>
                    Most Popular
                  </span>
                </div>
                <div className="text-center"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                  <div className="mb-6"></div>
                    <span className="text-4xl font-bold text-gray-900">$399</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mb-8">Ideal for businesses and content creators</p>
                </div>
                <ul className="space-y-4 mb-8"></u>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">50 voice models</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">100,000 characters/month</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">25 languages</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Priority support</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">API access</spa>
                  </li>
                </ul>
                <a 
                  href="mailto:kleber@ziontechgroup.com?subject=AI Voice Cloning Professional Plan"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-purple-700 transition-colors"
                ></a>
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200"></div>
                <div className="text-center"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                  <div className="mb-6"></div>
                    <span className="text-4xl font-bold text-gray-900">$999</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mb-8">For large organizations with custom needs</p>
                </div>
                <ul className="space-y-4 mb-8"></u>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Unlimited voice models</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Unlimited characters</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">All languages</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">24/7 phone support</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Custom integrations</spa>
                  </li>
                </ul>
                <a 
                  href="mailto:kleber@ziontechgroup.com?subject=AI Voice Cloning Enterprise Plan"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
                ></a>
                  Contact Sales
                </a>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>
      </div>
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600"></section>
          <div className="max-w-4xl mx-auto text-center"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Create Amazing Voice Content?
            </h2>
            <p className="text-xl text-purple-100 mb-8"></p>
              Join thousands of creators and businesses using our AI voice cloning technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=AI Voice Cloning Inquiry"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              ></a></<<<a>Start</a></<<a>Free</a> Trial
                <ArrowRight className="ml-2 w-5 h-5" /></ArrowRigh>
              </a>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              ></a>
                <Phone className="mr-2 w-5 h-5" /></Phone></<<<Phone>Call</Phone></Phone> +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900"></section>
          <div className="max-w-4xl mx-auto text-center"></section>
            <div className="grid md:grid-cols-3 gap-8 text-white"></div>
              <div className="flex items-center justify-center"></div>
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center"></div>
                <Mail className="w-5 h-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center"></div>
                <MapPin className="w-5 h-5 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Foote>
    </ErrorBoundary>
  );
};

export default AIVoiceCloningPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AivoicecloningPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Voice Cloning - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Ai Voice Cloning</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai voice cloning services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
