<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function GDataAnalyticsZionTechGroupPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Ai Website Builder - Zion Tech Group</title>
        <meta name="description" content="Ai Website Builder solutions by Zion Tech Group" />
=======
const AIWebsiteBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Code;
      title: 'AI Code Generation',
      description: 'Generate clean, optimized code automatically from your descriptions',
      benefits: ['Clean code', 'Best practices', 'Auto-optimization']
    },
    {
      icon: Palette;
      title: 'Smart Design System',
      description: 'AI-powered design suggestions that match your brand and industry',
      benefits: ['Brand consistency', 'Industry standards', 'Visual harmony']
    },
    {
      icon: Zap;
      title: 'Instant Deployment',
      description: 'Deploy your website in minutes with our automated hosting and CDN',
      benefits: ['Fast deployment', 'Global CDN', 'Auto-scaling']
    },
    {
      icon: Smartphone;
      title: 'Mobile-First Design',
      description: 'Every website is automatically optimized for all devices and screen sizes',
      benefits: ['Responsive design', 'Touch optimization', 'Performance']
    },
    {
      icon: Globe;
      title: 'SEO Optimization',
      description: 'Built-in SEO tools and optimization for better search engine rankings',
      benefits: ['Meta optimization', 'Schema markup', 'Performance scores']
    },
    {
      icon: Monitor;
      title: 'Analytics Integration',
      description: 'Comprehensive analytics and performance monitoring built-in',
      benefits: ['Real-time analytics', 'Performance tracking', 'User insights']
    }
  ];

  const benefits = [
    {
      title: '90% Faster Development',
      description: 'Build professional websites in hours instead of weeks',
      percentage: '90%'},
    {
      title: 'Zero Coding Required',
      description: 'Create complex websites using natural language descriptions',
      percentage: '100%'},
    {
      title: 'Professional Quality',
      description: 'Enterprise-grade websites that rival custom development',
      percentage: '99%'}
  ];

  const pricingPlans = [
    {
      name: 'Starter'
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
      popular: false;
    },
    {
      name: 'Professional'
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
      popular: true;
    },
    {
      name: 'Enterprise'
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
      popular: false;
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>AI Website Builder - Create Websites with AI | Zion Tech Group</title>
        <meta name="description" content="Build professional websites in minutes with our AI-powered website builder. No coding required, mobile-first design, and instant deployment." />
        <meta name="keywords" content="AI website builder, website creation, no-code, web design, AI development" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Website Builder</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai website builder solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
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
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Website Builder
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai website builder solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
=======
      <main className="pt-24 pb-16 px-4"></main>
        <div className="max-w-7xl mx-auto">{/* Hero Section */}</div>
          <section className="text-center mb-16"></section>
            <div className="flex items-center justify-center mb-6"></section>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4"></div>
                <Code className="w-8 h-8 text-white" />
              <h1 className="text-5xl font-bold text-white neon-text">AI Website Builder</h1><p className="text-xl text-gray-300 mb-8 leading-relaxed">Create stunning, professional websites in minutes with our AI-powered builder.</p>
              No coding required, mobile-first design, and instant deployment.</p>
              </div>
              <h1 className="text-5xl font-bold text-white neon-text"></h1>
                AI Website Builder;
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed"></p>
              Create stunning, professional websites in minutes with our AI-powered builder.
              No coding required, mobile-first design, and instant deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              ></a>
                Start Building;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a;
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              ></a>
                View Demo;
              </a>
            </div>,
          </section>,
,
          {/* Features Section */}
          <section className="py-20 bg-slate-800/50"></section>
            <div className="container mx-auto px-4"></section>
              <div className="text-center mb-16"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Our AI website builder combines cutting-edge technology with intuitive design to create professional websites effortlessly.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                      <feature.icon className="w-8 h-8 text-white" />
                <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                  Our AI website builder combines cutting-edge technology with intuitive design to create professional websites effortlessly.)
                </p>)
              </div>)
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">),
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-8 text-center group hover: scale-105 transition-transform duration-300">,
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">,
                      <feature.icon className="w-8 h-8 text-white" />,
                    </div>,
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" >{benefit}</CheckCircle>
                        </CheckCircle>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                      ))}
                    </ul>
                  )}
                </div>
              ))}
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
              ))}
=======
          {/* Benefits Section */}
          <section className="py-16 px-4"></section>
                <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Builder?</h2>
                <p className="text-xl text-gray-300">Revolutionary benefits that transform web development</p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
            <div className="max-w-6xl mx-auto"></section>
              <div className="text-center mb-12"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Builder?</h2><p className="text-xl text-gray-300">Revolutionary benefits that transform web development</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
                  <div key={index} className="cyber-card p-6 text-center"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                      <Zap className="w-8 h-8 text-white" />
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 mb-4">{benefit.description}</p><div className="text-3xl font-bold text-purple-400">{benefit.percentage}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4 bg-slate-800/50"></section>
            <div className="max-w-6xl mx-auto"></section>
              <div className="text-center mb-12"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Simple, Affordable Pricing</h2><p className="text-xl text-gray-300">Choose the plan that fits your website needs</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>{plan.popular && (</div>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                <h2 className="text-4xl font-bold text-white mb-4">Simple, Affordable Pricing</h2>
                <p className="text-xl text-gray-300">Choose the plan that fits your website needs</p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}></div>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold"></span>
                          Most Popular;
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6"></div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div><span className="text-lg text-gray-400">{plan.period}</span>
                      <p className="text-gray-300">{plan.description}</p><ul className="space-y-3 mb-8">{plan.features.map((feature, idx) => (</ul>
                        <li key={idx} className="flex items-center text-gray-300"></li>
                          <CheckCircle className="w-5 h-5 text-purple-400 mr-3" >{feature}</CheckCircle>
                        </CheckCircle>
                      ))}
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover: from-purple-600 hover:to-pink-700'}
                        : 'bg-slate-700 text-white hover:bg-slate-600'}
                    }`}></button>
                      Get Started;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></section>
            <div className="max-w-4xl mx-auto text-center"></section>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Website?</h2><p className="text-xl text-gray-300 mb-8">Join thousands of businesses that have already created stunning websites with our AI builder.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center"
                ></a>
                  Start Building Now;
                </a>
                <a;
                  href="tel:+13024640950"
                  className="cyber-button-outline px-8 py-4 text-lg font-semibold inline-flex items-center"
                ></a>
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950;
                </a>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                <button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>
<<<<<<< HEAD
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
      </main>

      <Footer />,
    </div>);
};

export default AIWebsiteBuilderPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AiwebsitebuilderPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Website Builder - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Ai Website Builder</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai website builder services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiwebsitebuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Website Builder - Zion Tech Group</title>
        <meta name="description" content="Professional ai website builder services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Website Builder</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai website builder services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
