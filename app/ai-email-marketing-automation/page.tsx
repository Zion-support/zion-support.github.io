<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
=======
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const Page: React.FC = () => {
import { ArrowRight, Brain } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0458
export default function AiEmailMarketingAutomationZionTechGroup() {
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';export default function AiEmailMarketingAutomationZionTechGroup() {

<<<<<<< HEAD
<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Ai Email Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="Ai Email Marketing Automation solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Email Marketing Automation</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai email marketing automation solutions designed to meet your business needs.
=======
const AIEmailMarketingAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain;
      title: 'AI Content Generation',
      description: 'Generate compelling email content, subject lines, and CTAs using advanced AI algorithms',
      benefits: ['10 x faster content creation', 'Higher open rates', 'Personalized messaging', 'A/B testing automation']
    },
    {
      icon: Target;
      title: 'Smart Segmentation',
      description: 'AI-powered audience segmentation based on behavior, preferences, and engagement patterns',
      benefits: ['Dynamic segmentation', 'Behavioral triggers', 'Personalization at scale', 'Improved deliverability']
    },
    {
      icon: BarChart3;
      title: 'Advanced Analytics',
      description: 'Comprehensive email analytics with AI insights, predictive modeling, and ROI tracking',
      benefits: ['Real-time performance metrics', 'Predictive analytics', 'Revenue attribution', 'Campaign optimization']
    },
    {
      icon: Send;
      title: 'Automated Workflows',
      description: 'Create complex email sequences with AI-powered triggers and intelligent automation',
      benefits: ['Drip campaigns', 'Welcome sequences', 'Abandoned cart recovery', 'Re-engagement campaigns']
    },
    {
      icon: MailCheck;
      title: 'Deliverability Optimization',
      description: 'AI-powered deliverability optimization to ensure your emails reach the inbox',
      benefits: ['Inbox placement optimization', 'Spam score reduction', 'IP reputation management', 'Authentication setup']
    },
    {
      icon: UserPlus;
      title: 'Lead Nurturing',
      description: 'Intelligent lead nurturing with AI-driven personalization and conversion optimization',
      benefits: ['Lead scoring', 'Behavioral triggers', 'Conversion optimization', 'Lifecycle management']
    }
  ];

  const automationTypes = [
    {
      name: 'Welcome Series',
      description: 'Automated welcome emails for new subscribers',
      icon: UserPlus;
      benefits: ['Increase engagement by 50%', 'Build brand loyalty', 'Set expectations']
    },
    {
      name: 'Abandoned Cart',
      description: 'Recover lost sales with targeted follow-up emails',
      icon: ShoppingCart;
      benefits: ['Recover 15-30% of lost sales', 'Personalized recommendations', 'Urgency creation']
    },
    {
      name: 'Re-engagement',
      description: 'Win back inactive subscribers with smart campaigns',
      icon: RefreshCw;
      benefits: ['Reactivate dormant users', 'Prevent unsubscribes', 'Improve list health']
    },
    {
      name: 'Birthday & Anniversaries',
      description: 'Personalized emails for special occasions',
      icon: Gift;
      benefits: ['Increase customer loyalty', 'Drive repeat purchases', 'Personal touch']
    },
    {
      name: 'Product Recommendations',
      description: 'AI-powered product suggestions based on behavior',
      icon: Target;
      benefits: ['Increase average order value', 'Cross-sell opportunities', 'Personalized shopping']
    },
    {
      name: 'Post-Purchase',
      description: 'Follow-up emails after purchase completion',
      icon: CheckCircle;
      benefits: ['Improve customer satisfaction', 'Gather feedback', 'Upsell opportunities']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 contacts',
        'Unlimited emails',
        'Basic AI features',
        'Email templates',
        'Basic analytics',
        'Email support'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and marketers',
      features: [
        'Up to 10,000 contacts',
        'Unlimited emails',
        'Advanced AI features',
        'Custom templates',
        'Advanced analytics',
        'Priority support',
        'A/B testing',
        'Automation workflows'
      ],
      popular: true;
    },
    {
      name: 'Enterprise'
      price: '$149',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited contacts',
        'Unlimited emails',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Advanced security',
        'API access',
        'Custom integrations'
      ],
      popular: false;
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Thompson',
      role: 'Marketing Manager',
      company: 'E-commerce Plus',
      content: 'AI Email Marketing Automation increased our open rates by 40% and revenue by 60%. The AI content suggestions are game-changing.',
      rating: 5;
    },
    {
      name: 'Michael Rodriguez',
      role: 'Digital Marketing Director',
      company: 'Tech Solutions Inc.',
      content: 'The automation workflows saved us 15 hours per week and improved our conversion rates by 35%. Highly recommended!',
      rating: 5;
    },
    {
      name: 'Emily Chen',
      role: 'Email Marketing Specialist',
      company: 'Growth Agency',
      content: 'Best email marketing platform we\'ve used. The AI segmentation and personalization features are incredible.',
      rating: 5;
    }
  ];

<<<<<<< HEAD
  const stats = [
    { icon: Users, value: '15,000+', label: 'Active Users' },
    { icon: Send, value: '50 M+', label: 'Emails Sent' },
    { icon: TrendingUp, value: '40%', label: 'Avg. Open Rate Increase' },
    { icon: DollarSign, value: '60%', label: 'Revenue Increase' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Helmet></Helmet>
        <title>AI Email Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email marketing platform with automation, personalization, and analytics. Increase open rates by 40% and revenue by 60%. Starting at $39/month." />
        <meta name="keywords" content="ai email marketing, email automation, email personalization, email analytics, drip campaigns, lead nurturing" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4"></section>
        <div className="max-w-7xl mx-auto text-center"></section>
          <div className="inline-flex items-center bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Sparkles className="w-4 h-4 mr-2" >AI-Powered Email Marketing<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">AI Email Marketing Automation</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your email marketing with AI-powered automation, personalization, and analytics.</p>
            Increase open rates by 40% and revenue by 60% with our intelligent platform.</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
=======
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';

export default function Page() {
  return (
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>- Zion Tech Group</title>
        <meta const name = "description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta name="keywords" content="AI solutions, IT services, Zion Tech Group" / / />
        <meta property="og:title" content=" - Zion Tech Group" / / />
        <meta property="og:description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta property="og:type" content="website" / / />
        <meta property="og:url" content="https://ziontechgroup.com/ai-email-marketing-automation" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16">
        </div>
        {/* Hero Section */}

              Professional  services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-centermb-12">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" >
          Get Started
                
          <ArrowRight className="ml-2group-hover:translate-x-1transition-transform"  />
        </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More
              </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
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

<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Email Marketing Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai email marketing automation solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
=======
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">{stats.map((stat, index) => (</div>
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Email Marketing;
          </div>
          <h1 className="text-4xl sm: text-5xl md:text-6xl font-bold text-white mb-6 neon-text"></h1>
            AI Email Marketing Automation;
          </h1>,
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
            Transform your email marketing with AI-powered automation, personalization, and analytics.
            Increase open rates by 40% and revenue by 60% with our intelligent platform.
          </p>)
)
          {/* Stats */})
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-12">),
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div><div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </section>

<<<<<<< HEAD
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
                      ))}
                    </ul>
                  )}
=======
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            ></a>
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com?subject=AI Email Marketing Automation Demo"
              className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
            ></a>
              Get Free Demo;
            </a>
          </div>
        </div>,
      </section>,
,
      {/* Automation Types Section */}
      <section className="py-16 px-4"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text"></h2>
            Powerful Automation Types;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover: bg-white/20 transition-all duration-300 cyber-card">,
                <type.icon className="w-12 h-12 text-blue-400 mb-4" />,
                <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="space-y-2"></ul>
                  {type.benefits.map((benefit, benefitIndex) => (
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Powerful Automation Types</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{automationTypes.map((type, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card"></div>
                <type.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3><p className="text-gray-300 mb-4">{type.description}</p><ul className="space-y-2">{type.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text"></h2>
            Advanced AI Features;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover: bg-white/20 transition-all duration-300 cyber-card">,
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />,
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2"></ul>
                  {feature.benefits.map((benefit, benefitIndex) => (
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Advanced AI Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card"></div>
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3><p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Simple, Transparent Pricing</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''} cyber-card`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-blue-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">,
            Simple, Transparent Pricing;
          </h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''} cyber-card`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-blue-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium"></span>
                      Most Popular;
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span><span className="text-gray-300 ml-1">{plan.period}</span><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
                <a;
                  href={`mailto:kleber@ziontechgroup.com?subject=AI Email Marketing Automation - ${plan.name} Plan`}
                  className={`w-full block text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover: from-blue-600 hover:to-purple-700'}
                      : 'bg-white/20 text-white hover:bg-white/30'}
                  }`}
                ></a>
                  Get Started;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text"></h2>
            What Our Customers Say;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <div className="font-semibold text-white">{testimonial.name}<div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">What Our Customers Say</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <div className="font-semibold text-white">{testimonial.name}</div><div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
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
=======
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xllp-12text-center">
              <h2 className="text-4xl font-bold text-white mb-6"  />Ready to Get Started?
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
<<<<<<< HEAD
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
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></h2>
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-blue-100 mb-8"></p>
            Join thousands of businesses already using AI Email Marketing Automation to grow their revenue and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a;
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Email Marketing?</h2><p className="text-xl text-blue-100 mb-8">Join thousands of businesses already using AI Email Marketing Automation to grow their revenue and engagement.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            ></a>
              Call (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            ></a>
              Email Us;
            </a>
          </div>
        </div>
      </section>,
    </div>);
};

export default AIEmailMarketingAutomationPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AiEmailMarketingAutomation() {return (
    <>
      <title>AiEmailMarketingAutomation - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">AiEmailMarketingAutomation</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aiemailmarketingautomation services coming soon.</p>

              Contact Us

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
export default function AiemailmarketingautomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Email Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="Professional ai email marketing automation services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Email Marketing Automation</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai email marketing automation services coming soon.</p>
          
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
=======
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25">Contact Us
                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All Services
                </Link>
              </div>
          </div>
        </section>
      </div>

}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
