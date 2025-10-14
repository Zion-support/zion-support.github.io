import {Helmet}}from 'react-helmet-async';
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe}}from 'lucide-react';
]
const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Shield, CheckCircle, ArrowRight, Phone, Mail, Lock, Eye, AlertTriangle, Zap } from 'lucide-react'

const CybersecurityPage: React.FC  = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security solutions to protect against sophisticated cyber threats and attacks.'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all your sensitive data and communications.'
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring and real-time threat detection across all your systems.'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response and recovery services to minimize damage from security breaches.'
    }
  ]

  const benefits = [
    'Protect sensitive business data',
    'Comply with industry regulations',
    'Prevent costly security breaches',
    'Maintain business continuity',
    'Build customer trust and confidence',
    'Reduce security-related downtime',
    'Access to security experts',
    'Customized security solutions'
  ]
;
    'Proven track record of success';
  ];
<Helmet></Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
                {/* Hero Section */}
                <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Cybersecurity <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
                </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Protect your business with comprehensive cybersecurity solutions designed to defend against evolving threats and ensure data security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"></button>
                <Shield className="mr-2 h-5 w-5" />
                Get Protected Now
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"></button>
                <Phone className="mr-2 h-5 w-5" />
                Call (302) 464-0950
              </button>
                </div>
          </div>
                </div>
      </section>
                {/* Features Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Our Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Comprehensive cybersecurity services to protect your business from all angles.
            </p>
                </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg mb-4"></div>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                {feature.title}
                </h3>
                <p className="text-gray-300"></p>
                {feature.description</p>}
                </p>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Benefits Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience peace of mind with our comprehensive security solutions.
            </p>
                </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3"></div>
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg"></p>
                {benefit}
                </p>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        </section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 md:p-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-red-100 mb-8"></p>
              Contact our cybersecurity experts to discuss your security needs and get a customized protection plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
                <Phone className="mr-2 h-5 w-5" />
                Call (302) 464-0950
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center"></button>
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
                </div>
          </div>
                </div>
      </section>

      <Footer />
    </div>
  )
}

export default CybersecurityPage
