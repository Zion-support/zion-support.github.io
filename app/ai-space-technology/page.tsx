    <React.Fragment>
      <Helmet>
        <title>Ai Space Technology - Zion Tech Group</title>
        <meta name="description" content="Ai Space Technology solutions by Zion Tech Group" />
      </Helmet>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900"></mai>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center"></div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-100 text-violet-800 text-sm font-medium mb-6"></div>
                <Rocket className="w-4 h-4 mr-2" />
                Space AI Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                AI Space Technology</h1>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400"></span>
                  Advanced Space Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"></p>
                Revolutionize space operations with AI-powered satellite management, orbital optimization, 
                and space exploration technologies.
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

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Space Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai space technology solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white"></section>
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Revolutionary Space AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3 xl mx-auto"></p>
                Advanced AI technology for the next generation of space operations
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Satellite Management</h>
                <p className="text-gray-600 mb-4"></p>
                  AI-powered satellite operations with autonomous orbit control and mission planning.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Autonomous</CheckCircle></<<CheckCircle>control</CheckCircle>
                  </li>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Mission</CheckCircle></<<CheckCircle>optimization</CheckCircle>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100"></div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Orbit className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Orbital Mechanics</h>
                <p className="text-gray-600 mb-4"></p>
                  Advanced orbital calculations and trajectory optimization using AI algorithms.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Trajectory</CheckCircle></<<CheckCircle>optimization</CheckCircle>
                  </li>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Collision</CheckCircle></<<CheckCircle>avoidance</CheckCircle>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100"></div>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Earth Observation</h>
                <p className="text-gray-600 mb-4"></p>
                  AI-powered analysis of satellite imagery for environmental monitoring and research.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Image</CheckCircle></<<CheckCircle>analysis</CheckCircle>
                  </li>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Environmental</CheckCircle></<<CheckCircle>monitoring</CheckCircle>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100"></div>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Space Communication</h>
                <p className="text-gray-600 mb-4"></p>
                  Intelligent space communication systems with adaptive signal processing.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Signal</CheckCircle></<<CheckCircle>optimization</CheckCircle>
                  </li>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Interference</CheckCircle></<<CheckCircle>mitigation</CheckCircle>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100"></div>
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Space Debris Tracking</h>
                <p className="text-gray-600 mb-4"></p>
                  AI-powered space debris monitoring and collision prediction systems.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Debris</CheckCircle></<<CheckCircle>tracking</CheckCircle>
                  </li>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Collision</CheckCircle></<<CheckCircle>prediction</CheckCircle>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl border border-indigo-100"></div>
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mission Planning</h>
                <p className="text-gray-600 mb-4"></p>
                  Intelligent mission planning and resource optimization for space operations.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Resource</CheckCircle></<<CheckCircle>optimization</CheckCircle>
                  </li>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Risk</CheckCircle></<<CheckCircle>assessment</CheckCircle>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"></section>
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Space Technology Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3 xl mx-auto"></p>
                Transform space operations across multiple industries
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

                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Earth Observation</h3>
                    <p className="text-gray-600">Advanced satellite imagery analysis for agriculture, climate monitoring, and disaster response.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Exploration</h3>
                    <p className="text-gray-600">AI-powered mission planning and autonomous navigation for deep space exploration.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Communication</h3>
                    <p className="text-gray-600">Intelligent communication networks for space-based internet and global connectivity.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Security</h3>
                    <p className="text-gray-600">Advanced space situational awareness and threat detection systems.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Analytics</h3>
                    <p className="text-gray-600">Comprehensive space data analysis and predictive modeling for space operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white"></section>
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Space Technology Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3 xl mx-auto"></p>
                Advanced space solutions for organizations of all sizes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8"></div>
              <div className="bg-white p-8 rounded-xl border border-gray-200"></div>
                <div className="text-center"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Research</h3>
                  <div className="mb-6"></div>
                    <span className="text-4xl font-bold text-gray-900">$4,999</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mb-8">For academic and research institutions</p>
                </div>
                <ul className="space-y-4 mb-8"></u>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Basic satellite management</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Orbital calculations</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Email support</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Research data access</spa>
                  </li>
                </ul>
                <a 
                  href="mailto:kleber@ziontechgroup.com?subject=AI Space Technology Research Plan"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
                ></a>
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-violet-500 relative"></div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                  <span className="bg-violet-500 text-white px-4 py-1 rounded-full text-sm font-semibold"></span>
                    Most Popular
                  </span>
                </div>
                <div className="text-center"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial</h3>
                  <div className="mb-6"></div>
                    <span className="text-4xl font-bold text-gray-900">$12,999</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mb-8">For commercial space companies</p>
                </div>
                <ul className="space-y-4 mb-8"></u>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Advanced satellite management</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Mission planning AI</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">24/7 support</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">API access</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Custom integrations</spa>
                  </li>
                </ul>
                <a 
                  href="mailto:kleber@ziontechgroup.com?subject=AI Space Technology Commercial Plan"
                  className="w-full bg-violet-600 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-violet-700 transition-colors"
                ></a>
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200"></div>
                <div className="text-center"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Government</h3>
                  <div className="mb-6"></div>
                    <span className="text-4xl font-bold text-gray-900">Custom</span>
                    <span className="text-gray-600">pricing</span>
                  </div>
                  <p className="text-gray-600 mb-8">For government agencies and defense</p>
                </div>
                <ul className="space-y-4 mb-8"></u>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Full space technology suite</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Custom AI models</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Dedicated support team</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">On-premise deployment</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Security clearance</spa>
                  </li>
                </ul>
                <a 
                  href="mailto:kleber@ziontechgroup.com?subject=AI Space Technology Government Plan"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
                ></a>
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
    </React.Fragment>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-purple-600"></section>
          <div className="max-w-4xl mx-auto text-center"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Launch Your Space Operations
            </h2>
            <p className="text-xl text-violet-100 mb-8"></p>
              Join the space revolution with AI-powered technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=AI Space Technology Inquiry"
                className="inline-flex items-center px-8 py-4 bg-white text-violet-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              ></a></<<<a>Request</a></<<a>Demo</a>
                <ArrowRight className="ml-2 w-5 h-5" /></ArrowRigh>
              </a>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-300"
              ></a>
                <Phone className="mr-2 w-5 h-5" /></Phone></<<<Phone>Call</Phone></Phone> +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900"></section>
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
}
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AispacetechnologyPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Space Technology - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Ai Space Technology</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai space technology services coming soon.</p>
          Contact Us

  );

import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AispacetechnologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Ai Space Technology - Zion Tech Group</title>
        <meta name="description" content="Professional ai space technology services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Space Technology</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai space technology services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
