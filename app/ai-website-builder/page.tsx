'use client';
import React from 'react';
import { Code, Palette, Zap, Smartphone, Globe, CheckCircle, ArrowRight, Phone, Monitor } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIWebsiteBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'AI Code Generation',
      description: 'Generate clean, optimized code automatically from your descriptions',
      benefits: ['Clean code', 'Best practices', 'Auto-optimization']
    },
    {
      icon: Palette,
      title: 'Smart Design System',
      description: 'AI-powered design suggestions that match your brand and industry',
      benefits: ['Brand consistency', 'Industry standards', 'Visual harmony']
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Deploy your website in minutes with our automated hosting and CDN',
      benefits: ['Fast deployment', 'Global CDN', 'Auto-scaling']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Every website is automatically optimized for all devices and screen sizes',
      benefits: ['Responsive design', 'Touch optimization', 'Performance']
    },
    {
      icon: Globe,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools and optimization for better search engine rankings',
      benefits: ['Meta optimization', 'Schema markup', 'Performance scores']
    },
    {
      icon: Monitor,
      title: 'Analytics Integration',
      description: 'Comprehensive analytics and performance monitoring built-in',
      benefits: ['Real-time analytics', 'Performance tracking', 'User insights']
    }
  ];

  const benefits = [
    {
      title: '90% Faster Development',
      description: 'Build professional websites in hours instead of weeks',
      percentage: '90%'
    },
    {
      title: 'Zero Coding Required',
      description: 'Create complex websites using natural language descriptions',
      percentage: '100%'
    },
    {
      title: 'Professional Quality',
      description: 'Enterprise-grade websites that rival custom development',
      percentage: '99%'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and personal projects',
      features: [
        'Up to 5 websites',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'Mobile optimization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25 websites',
        'Advanced AI features',
        'Premium templates',
        'Priority support',
        'Advanced analytics',
        'Custom domains',
        'E-commerce integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and white-label solutions',
      features: [
        'Unlimited websites',
        'Full AI capabilities',
        'Custom templates',
        '24/7 support',
        'White-label options',
        'API access',
        'Custom integrations',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helme>
        <<<<title>AI</title></<<title>Website</title> Builder - Create Websites with AI | Zion Tech Group</title>
        <meta name="description" content="Build professional websites in minutes with our AI-powered website builder. No coding required, mobile-first design, and instant deployment." /></met>
        <meta name="keywords" content="AI website builder, website creation, no-code, web design, AI development" /></met>
      </Helmet>

      <Navigation /></Navigatio>

      <main className="pt-24 pb-16 px-4"></mai>
        <div className="max-w-7 xl mx-auto">{/* Hero Section */}</div>
          <section className="text-center mb-16"></sectio>
            <div className="flex items-center justify-center mb-6"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2 xl flex items-center justify-center mr-4"></div>
                <Code className="w-8 h-8 text-white" /></Cod>
              <h1 className="text-5 xl font-bold text-white neon-text"></h1></<<<h1>AI</h1></<<h1>Website</h1> Builder<p className="text-xl text-gray-300 mb-8 leading-relaxed">Create stunning, professional websites in minutes with our AI-powered builder.</p></<<<p>No</p></<<p>coding</p> required, mobile-first design, and instant deployment.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >Start Building</a>
                <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
              <a
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >View Demo</a>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-800/50"></sectio>
            <div className="container mx-auto px-4"></div>
              <div className="text-center mb-16"></div>
                <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Powerful</h2></<<h2>AI</h2> Features<p className="text-xl text-gray-300 max-w-3 xl mx-auto"></p></<<<p>Our</p></<<p>AI</p> website builder combines cutting-edge technology with intuitive design to create professional websites effortlessly.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2 xl flex items-center justify-center mx-auto mb-6"></div>
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
                <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Why</h2></<<h2>Choose</h2> Our AI Builder?<p className="text-xl text-gray-300"></p></<<<p>Revolutionary</p></<<p>benefits</p> that transform web development<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
                  <div key={index} className="cyber-card p-6 text-center"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                      <Zap className="w-8 h-8 text-white" /></Za>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h>
                    <p className="text-gray-300 mb-4"></p>{benefit.description}<div className="text-3 xl font-bold text-purple-400">{benefit.percentage}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4 bg-slate-800/50"></sectio>
            <div className="max-w-6 xl mx-auto"></div>
              <div className="text-center mb-12"></div>
                <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Simple</h2></h2>, Affordable Pricing<p className="text-xl text-gray-300"></p></<<<p>Choose</p></<<p>the</p> plan that fits your website needs<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>{pricingPlans.map((plan, index) => (<div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>{plan.popular && (</div>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</spa>
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6"></div>
                      <h3 className="text-2 xl font-bold text-white mb-2"></h>{plan.name}<div className="text-4 xl font-bold text-purple-400 mb-2"></div>{plan.price}<span className="text-lg text-gray-400">{plan.period}</spa>
                      <p className="text-gray-300"></p>{plan.description}<ul className="space-y-3 mb-8">{plan.features.map((feature, idx) => (</u>
                        <li key={idx} className="flex items-center text-gray-300"></l>
                          <CheckCircle className="w-5 h-5 text-purple-400 mr-3" >{feature}</CheckCircl>
                        </CheckCircle>
                      ))}
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>Get Started</butto>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></sectio>
            <div className="max-w-4 xl mx-auto text-center"></div>
              <h2 className="text-4 xl font-bold text-white mb-6"></h2></<<<h2>Ready</h2></<<h2>to</h2> Build Your Website?<p className="text-xl text-gray-300 mb-8">Join thousands of businesses that have already created stunning websites with our AI builder.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center"
                >Start Building Now</a>
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button-outline px-8 py-4 text-lg font-semibold inline-flex items-center"
                ></a>
                  <Phone className="w-5 h-5 mr-2" >Call (302) 464-0950</Phon>
                </Phone>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default AIWebsiteBuilderPage;