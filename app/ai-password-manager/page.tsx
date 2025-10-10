'use client';
import React from 'react';
import { Shield, Lock, Eye, Key, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPasswordManagerPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Security',
      description: 'Advanced AI algorithms detect and prevent security threats in real-time',
      benefits: ['Threat detection', 'Real-time monitoring', 'Automated responses']
    },
    {
      icon: Lock,
      title: 'Zero-Knowledge Architecture',
      description: 'Your passwords are encrypted and only you can access them',
      benefits: ['End-to-end encryption', 'Zero-knowledge design', 'Privacy protection']
    },
    {
      icon: Eye,
      title: 'Password Health Monitoring',
      description: 'Continuous monitoring and analysis of your password security',
      benefits: ['Weak password detection', 'Breach monitoring', 'Security scoring']
    },
    {
      icon: Key,
      title: 'Auto-Generate & Fill',
      description: 'Intelligent password generation and automatic form filling',
      benefits: ['Smart generation', 'Auto-fill forms', 'Cross-platform sync']
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Security',
      description: 'Protect your accounts with military-grade encryption and AI-powered threat detection',
      percentage: '99.9%'
    },
    {
      title: 'Time Savings',
      description: 'Save hours every week with automatic password generation and form filling',
      percentage: '80%'
    },
    {
      title: 'Peace of Mind',
      description: 'Never worry about password breaches or weak credentials again',
      percentage: '100%'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$4.99',
      period: '/month',
      description: 'Perfect for individuals and families',
      features: [
        'Unlimited passwords',
        'Cross-device sync',
        'Password health monitoring',
        'Secure sharing',
        '24/7 support'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$9.99',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Everything in Personal',
        'Team management',
        'Admin dashboard',
        'SSO integration',
        'Priority support',
        'Custom policies'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated support',
        'Compliance tools',
        'White-label options'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helme>
        <<<<title>AI</title></<<title>Password</title> Manager - Secure Password Management | Zion Tech Group</title>
        <meta name="description" content="Secure your digital life with our AI-powered password manager. Military-grade encryption, automatic generation, and intelligent security monitoring." /></met>
        <meta name="keywords" content="password manager, AI security, password protection, digital security, encryption" /></met>
      </Helmet>

      <Navigation /></Navigatio>

      <main className="pt-24 pb-16 px-4"></mai>
        <div className="max-w-7 xl mx-auto">{/* Hero Section */}</div>
          <section className="text-center mb-16"></sectio>
            <div className="flex items-center justify-center mb-6"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2 xl flex items-center justify-center mr-4"></div>
                <Shield className="w-8 h-8 text-white" /></Shiel>
              <h1 className="text-5 xl font-bold text-white neon-text"></h1></<<<h1>AI</h1></<<h1>Password</h1> Manager<p className="text-xl text-gray-300 mb-8 leading-relaxed">Secure your digital life with our AI-powered password manager. Military-grade encryption,</p></<<<p>intelligent</p></<<p>threat</p> detection, and seamless user experience.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >Get Started</a>
                <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              ></a>
                <Phone className="w-5 h-5 mr-2" >Call (302) 464-0950</Phon>
              </Phone>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-800/50"></sectio>
            <div className="container mx-auto px-4"></div>
              <div className="text-center mb-16"></div>
                <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Advanced</h2></<<h2>Security</h2> Features<p className="text-xl text-gray-300 max-w-3 xl mx-auto"></p></<<<p>Our</p></<<p>AI</p>-powered password manager provides enterprise-grade security with an intuitive user experience.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (</div>
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2 xl flex items-center justify-center mx-auto mb-6"></div>
                      <feature.icon className="w-8 h-8 text-white" /></featur>
                    <h3 className="text-2 xl font-bold text-white mb-4">{feature.title}</h>
                    <p className="text-gray-300 mb-6"></p>{feature.description}<ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</u>
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400"></l>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" >{benefit}</CheckCircl>
                        </CheckCircle>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4"></sectio>
            <div className="max-w-6 xl mx-auto"></div>
              <div className="text-center mb-12"></div>
                <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Why</h2></<<h2>Choose</h2> Our Password Manager?<p className="text-xl text-gray-300"></p></<<<p>Proven</p></<<p>benefits</p> that protect your digital identity<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
                  <div key={index} className="cyber-card p-6 text-center"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                      <Shield className="w-8 h-8 text-white" /></Shiel>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h>
                    <p className="text-gray-300 mb-4"></p>{benefit.description}<div className="text-3 xl font-bold text-green-400">{benefit.percentage}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4 bg-slate-800/50"></sectio>
            <div className="max-w-6 xl mx-auto"></div>
              <div className="text-center mb-12"></div>
                <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Simple</h2></h2>, Transparent Pricing<p className="text-xl text-gray-300"></p></<<<p>Choose</p></<<p>the</p> plan that fits your security needs<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>{pricingPlans.map((plan, index) => (<div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>{plan.popular && (</div>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</spa>
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6"></div>
                      <h3 className="text-2 xl font-bold text-white mb-2"></h>{plan.name}<div className="text-4 xl font-bold text-green-400 mb-2"></div>{plan.price}<span className="text-lg text-gray-400">{plan.period}</spa>
                      <p className="text-gray-300"></p>{plan.description}<ul className="space-y-3 mb-8">{plan.features.map((feature, idx) => (</u>
                        <li key={idx} className="flex items-center text-gray-300"></l>
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" >{feature}</CheckCircl>
                        </CheckCircle>
                      ))}
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>Get Started</butto>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></sectio>
            <div className="max-w-4 xl mx-auto text-center"></div>
              <h2 className="text-4 xl font-bold text-white mb-6"></h2></<<<h2>Secure</h2></<<h2>Your</h2> Digital Life Today<p className="text-xl text-gray-300 mb-8">Don't wait for a security breach. Protect your accounts with our AI-powered password manager.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center"
                >Start Free Trial</a>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-outline px-8 py-4 text-lg font-semibold inline-flex items-center"
                ></a>
                  <Mail className="w-5 h-5 mr-2" >Get Quote</Mai>
                </Mail>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default AIPasswordManagerPage;