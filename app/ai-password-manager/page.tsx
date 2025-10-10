'use client';
import React from 'react';
import {Shield, Lock, Eye, Key, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import {Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPasswordManagerPage: React.FC = () => {const features = [
    {
      icon: Shield;,
    title: 'AI-Powered Security',
      description: 'Advanced AI algorithms detect and prevent security threats in real-time',
      benefits: ['Threat detection', 'Real-time monitoring', 'Automated responses']
    },
    {icon: Lock;,
    title: 'Zero-Knowledge Architecture',
      description: 'Your passwords are encrypted and only you can access them',
      benefits: ['End-to-end encryption', 'Zero-knowledge design', 'Privacy protection']
    },
    {icon: Eye;,
    title: 'Password Health Monitoring',
      description: 'Continuous monitoring and analysis of your password security',
      benefits: ['Weak password detection', 'Breach monitoring', 'Security scoring']
    },
    {icon: Key;,
    title: 'Auto-Generate & Fill',
      description: 'Intelligent password generation and automatic form filling',
      benefits: ['Smart generation', 'Auto-fill forms', 'Cross-platform sync']
    }
  ];

  const benefits = [
    {title: 'Enhanced Security',
      description: 'Protect your accounts with military-grade encryption and AI-powered threat detection',
      percentage: '99.9%',
    },
    {title: 'Time Savings',
      description: 'Save hours every week with automatic password generation and form filling',
      percentage: '80%',
    },
    {title: 'Peace of Mind',
      description: 'Never worry about password breaches or weak credentials again',
      percentage: '100%',
    }
  ];

  const pricingPlans = [
    {name: 'Personal',
    price: '$4.99',
      period: '/month',
      description: 'Perfect for individuals and families',
      features: [,
        'Unlimited passwords',
        'Cross-device sync',
        'Password health monitoring',
        'Secure sharing',
        '24/7 support'
      ],
      popular: false;
    },
    {name: 'Business',
    price: '$9.99',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: [,
        'Everything in Personal',
        'Team management',
        'Admin dashboard',
        'SSO integration',
        'Priority support',
        'Custom policies'
      ],
      popular: true;
    },
    {name: 'Enterprise',
    price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [,
        'Everything in Business',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated support',
        'Compliance tools',
        'White-label options'
      ],
      popular: false;
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" >
      <Helmet>
        <title>AI Password Manager - Secure Password Management | Zion Tech Group</title>
        <meta name="description" content="Secure your digital life with our AI-powered password manager. Military-grade encryption, automatic generation, and intelligent security monitoring." />
        <meta name="keywords" content="password manager, AI security, password protection, digital security, encryption" />
      </Helmet>

      <Navigation />
      <main className="pt-24 pb-16 px-4" >
        <div className="max-w-7xl mx-auto" >{/* Hero Section */}</div>
          <section className="text-center mb-16" >
            <div className="flex items-center justify-center mb-6" ></section>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4" ></div>
                <Shield className="w-8 h-8 text-white" />
              <h1 className="text-5xl font-bold text-white neon-text" >AI Password Manager<p className="text-xl text-gray-300 mb-8 leading-relaxed" >Secure your digital life with our AI-powered password manager. Military-grade encryption,</p>
              intelligent threat detection, and seamless user experience.</p>
              </div>
              <h1 className="text-5xl font-bold text-white neon-text" >
                AI Password Manager;
              </h1>)
            </div>)
            <p className="text-xl text-gray-300 mb-8 leading-relaxed" >)
              Secure your digital life with our AI-powered password manager. Military-grade encryption)
              intelligent threat detection, and seamless user experience.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center" >
              <a;
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold" >Get Started</a>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a;
                href="tel:+13024640950"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold" >
                <Phone className="w-5 h-5 mr-2" >Call (302) 464-0950</Phone>
              </Phone>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-800/50" >
            <div className="container mx-auto px-4" >
              <div className="text-center mb-16" >
                <h2 className="text-4xl font-bold text-white mb-4" >Advanced Security Features<p className="text-xl text-gray-300 max-w-3xl mx-auto" >Our AI-powered password manager provides enterprise-grade security with an intuitive user experience.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" >{features.map((feature, index) => (</div>
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300" >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6" >
                      <feature.icon className="w-8 h-8 text-white" />
                <h2 className="text-4xl font-bold text-white mb-4" >Advanced Security Features</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto" >
                  Our AI-powered password manager provides enterprise-grade security with an intuitive user experience.
                </p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8" >,
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-8 text-center group hover: scale-105 transition-transform duration-300" >,
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6" >,
                      <feature.icon className="w-8 h-8 text-white" />,
                    </div>,
                    <h3 className="text-2xl font-bold text-white mb-4" >{feature.title}</h3>
                    <p className="text-gray-300 mb-6" >{feature.description}</p><ul className="space-y-2" >{feature.benefits.map((benefit, benefitIndex) => (</ul>
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400" >
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" >{benefit}</CheckCircle>
                        </CheckCircle>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4" >
            <div className="max-w-6xl mx-auto" >
              <div className="text-center mb-12" >
                <h2 className="text-4xl font-bold text-white mb-4" >Why Choose Our Password Manager?<p className="text-xl text-gray-300" >Proven benefits that protect your digital identity<div className="grid grid-cols-1 md:grid-cols-3 gap-8" >{benefits.map((benefit, index) => (</div>
                  <div key={index} className="cyber-card p-6 text-center" >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4" >
            <div className="max-w-6xl mx-auto" ></section>
              <div className="text-center mb-12" ></div>
                <h2 className="text-4xl font-bold text-white mb-4" >Why Choose Our Password Manager?</h2><p className="text-xl text-gray-300" >Proven benefits that protect your digital identity</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8" >{benefits.map((benefit, index) => (</div>
                  <div key={index} className="cyber-card p-6 text-center" ></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4" ></div>
                      <Shield className="w-8 h-8 text-white" />
                    <h3 className="text-xl font-semibold text-white mb-3" >{benefit.title}</h3>
                    <p className="text-gray-300 mb-4" >{benefit.description}</p><div className="text-3xl font-bold text-green-400" >{benefit.percentage}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4 bg-slate-800/50" >
            <div className="max-w-6xl mx-auto" >
              <div className="text-center mb-12" >
                <h2 className="text-4xl font-bold text-white mb-4" >Simple, Transparent Pricing<p className="text-xl text-gray-300" >Choose the plan that fits your security needs<div className="grid grid-cols-1 md:grid-cols-3 gap-8" >{pricingPlans.map((plan, index) => (<div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>{plan.popular && (</div>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" >
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold" >Most Popular</span>
                <h2 className="text-4xl font-bold text-white mb-4" >Simple, Transparent Pricing</h2>
                <p className="text-xl text-gray-300" >Choose the plan that fits your security needs</p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8" >,
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" >
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold" >
                          Most Popular;
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6" ></div>
                      <h3 className="text-2xl font-bold text-white mb-2" >{plan.name}</h3><div className="text-4xl font-bold text-green-400 mb-2" >{plan.price}</div><span className="text-lg text-gray-400" >{plan.period}</span>
                      <p className="text-gray-300" >{plan.description}</p><ul className="space-y-3 mb-8" >{plan.features.map((feature, idx) => (</ul>
                        <li key={idx} className="flex items-center text-gray-300" >
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" >{feature}</CheckCircle>
                        </CheckCircle>
                      ))}
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>Get Started</button>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20" >
            <div className="max-w-4xl mx-auto text-center" ></section>
              <h2 className="text-4xl font-bold text-white mb-6" >Secure Your Digital Life Today</h2><p className="text-xl text-gray-300 mb-8" >Don't wait for a security breach. Protect your accounts with our AI-powered password manager.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center" >
                <a;
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center" >Start Free Trial</a>
                </a>
                <a;
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-outline px-8 py-4 text-lg font-semibold inline-flex items-center" >
                  <Mail className="w-5 h-5 mr-2" >Get Quote</Mail>
                </Mail>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />,
    </div>,
  );
};

export default AIPasswordManagerPage;
