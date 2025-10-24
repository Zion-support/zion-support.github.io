import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
const features = [
"use client";
import React from "react";
import { Brain, Clock, Target, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import React  from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const AiCustomerSupportChatbotPage: React.FC = () => {
import { ArrowRight, CheckCircle, Star, Brain, Clock, Target, BarChart3 } from 'lucide-react';


  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AICustomerSupportChatbot() {const features = [{
      icon: <Brain className="w-6 h-6text-cyan-400"   />,
      title: 'Natural Language Processing',
      description: 'Advanced AI understands context, intent, and provides human-like responses'},
    {icon: <Clock className="w-6 h-6text-purple-400"   />,
      title: '24/7 Availability',
      description: 'Provide instant support around the clock without additional staffing costs'},
    {icon: <Target className="w-6 h-6text-yellow-400"   />,
      title: 'Intelligent Routing',
      description: 'Automatically route complex queries to the right human agents when needed'},
    {icon: <BarChart3 className="w-6 h-6text-green-400"   />,
      title: 'Analytics & Insights',
      description: 'Track customer satisfaction, response times, and identify improvement opportunities'}]

  const chatbotFeatures = [{category: 'Conversation Management',
      items: ['Multi-language Support', 'Context Awareness', 'Sentiment Analysis', 'Conversation History', 'Quick Responses', 'Escalation Rules']},
    {category: 'Integration',
      items: ['Website Widget', 'Mobile Apps', 'Social Media', 'Email Integration', 'CRM Systems', 'Help Desk Tools']},
    {category: 'Customization',
      items: ['Brand Styling', 'Custom Responses', 'Knowledge Base', 'FAQ Management', 'Personality Settings', 'Response Templates']},
    {category: 'Analytics',
      items: ['Response Metrics', 'Customer Satisfaction', 'Resolution Rates', 'Popular Queries', 'Performance Reports', 'ROI Tracking']}
  ]

  const pricingPlans = [{name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI features',
        'Website integration',
        'Email support',
        'Basic analytics',
        'Website integration'],
      popular: false;},
    {name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 10,000 conversations/month',
        'Advanced AI features',
        'Multi-channel support',
        'Priority support',
        'Advanced analytics',
        'Multi-channel support',
        'API access'],
      popular: true;},
    {name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited conversations',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-support-chatbot" />
      </Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta name="keywords" content="AI chatbot, customer support, AI solutions, IT services, Zion Tech Group" / / />
        <meta property="og:title" content="AI Customer Support Chatbot - Zion Tech Group" / / />
        <meta property="og:description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta property="og:type" content="website" / / />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-support-chatbot" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16">
        </div>
        {/* Hero Section */}

            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-centermb-12">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" >
          Get Started
                
          <ArrowRight className="ml-2group-hover:translate-x-1transition-transform"  />
        </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More
              </Link>
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
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Helmet></Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered customer support chatbot with 24/7 availability, multi-channel support, and advanced analytics. Reduce support costs by 60%. Starting at $99/month." />
        <meta name="keywords" content="ai chatbot, customer support, virtual assistant, customer service automation, chatbot development" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4"></section>
        <div className="max-w-7xl mx-auto text-center"></section>
          <div className="inline-flex items-center bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Sparkles className="w-4 h-4 mr-2" >AI-Powered Customer Support<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">AI Customer Support Chatbot</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your customer support with AI-powered chatbots that provide instant, accurate responses 24/7.</p>
            Reduce support costs by 60% while improving customer satisfaction.</p>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">{stats.map((stat, index) => (</div>
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Customer Support;
          </div>
          <h1 className="text-4xl sm: text-5xl md:text-6xl font-bold text-white mb-6 neon-text"></h1>
            AI Customer Support Chatbot;
          </h1>,
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
            Transform your customer support with AI-powered chatbots that provide instant, accurate responses 24/7.
            Reduce support costs by 60% while improving customer satisfaction.
          </p>)
)
          {/* Stats */})
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-12">),
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
                <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-400 mb-1">{stat.value}</div><div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

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
              href="mailto:kleber@ziontechgroup.com?subject=AI Customer Support Chatbot Demo"
              className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
            ></a>
              Get Free Demo;
            </a>
          </div>
        </div>,
      </section>,
,
      {/* Use Cases Section */}
      <section className="py-16 px-4"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text"></h2>
            Powerful Use Cases;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover: bg-white/20 transition-all duration-300 cyber-card">,
                <useCase.icon className="w-12 h-12 text-green-400 mb-4" />,
                <h3 className="text-xl font-bold text-white mb-3">{useCase.name}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2"></ul>
                  {useCase.benefits.map((benefit, benefitIndex) => (
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Powerful Use Cases</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{useCases.map((useCase, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card"></div>
                <useCase.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.name}</h3><p className="text-gray-300 mb-4">{useCase.description}</p><ul className="space-y-2">{useCase.benefits.map((benefit, benefitIndex) => (</ul>
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
      <section className="py-16 px-4 bg-gradient-to-r from-green-600/20 to-blue-600/20"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text"></h2>
            Advanced AI Features;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover: bg-white/20 transition-all duration-300 cyber-card">,
                <feature.icon className="w-12 h-12 text-green-400 mb-4" />,
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2"></ul>
                  {feature.benefits.map((benefit, benefitIndex) => (
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Advanced AI Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card"></div>
                <feature.icon className="w-12 h-12 text-green-400 mb-4" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Simple, Transparent Pricing</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''} cyber-card`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-green-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">,
            Simple, Transparent Pricing;
          </h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''} cyber-card`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-green-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium"></span>
                      Most Popular;
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span><span className="text-gray-300 ml-1">{plan.period}</span><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
                <a;
                  href={`mailto:kleber@ziontechgroup.com?subject=AI Customer Support Chatbot - ${plan.name} Plan`}
                  className={`w-full block text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover: from-green-600 hover:to-blue-700'}
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
      <section className="py-16 px-4 bg-gradient-to-r from-green-600/20 to-blue-600/20"></section>
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
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></h2>
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-green-100 mb-8"></p>
            Join thousands of businesses already using AI Customer Support Chatbot to improve their customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a;
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Support?</h2><p className="text-xl text-green-100 mb-8">Join thousands of businesses already using AI Customer Support Chatbot to improve their customer experience.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            ></a>
              Call (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
            ></a>
              Email Us;
            </a>
          </div>
        </div>
      </section>,
    </div>);
};

export default function AiCustomerSupportChatbotPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Ai Customer Support Chatbot solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Customer Support Chatbot</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai customer support chatbot solutions designed to meet your business needs.
          </p>
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
    </div>
  );
}
        'Advanced analytics',
        'SLA guarantee'],
      popular: false;}
  ]

  const testimonials = [{name: 'Lisa Chen',
      company: 'E-commerce Store',
      content: 'AI Customer Support Chatbot reduced our support tickets by 60% and improved customer satisfaction by 40%.',
      rating: 5;},
    {name: 'John Martinez',
      company: 'SaaS Company',
      content: 'The chatbot handles 80% of our support queries automatically. Our team can focus on complex issues.',
      rating: 5;},
    {name: 'Sarah Johnson',
      company: 'Service Provider',
      content: '24/7 support without additional costs. Our customers love the instant responses and availability.',
      rating: 5;}]

  return (
    <><  />
      <Helmet></Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs."   /></meta>
        <meta name="keywords" content="AI chatbot, customer support, AI solutions, IT services, Zion Tech Group"   /></meta>
        <meta property="og:title" content="AI Customer Support Chatbot - Zion Tech Group" /    /></meta>
        <meta property="og:description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." /    /></meta>
        <meta property="og:type" content="website" /    /></meta>
        <meta property="og:url" content="https:// ziontechgroup.com/ai-customer-support-chatbot" /    /></meta>
      </Helmet>
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        {/* Hero Section */}
        <section className="w-5h-5ml-2"   /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />AI Customer Support Chatbot;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <Link;</Link></Link>
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup"
        ></Link>
          Get Started;
          <ArrowRight className="w-5h-5ml-2"   /></ArrowRight>
        </Link>
              <Link to="/contact" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More;
              </Link>
            </div>
        </section>
        {/* CTA Section */}

              <h2 className="w-5 h-5ml-2"   />Ready to Get Started?
              <p className="w-5 h-5ml-2">Contact us to learn more about our solutions and how we can help your business.
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25">Contact Us
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All Services

export default function AiCustomerSupportChatbot() {return (
    <>
      <title>AiCustomerSupportChatbot - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">AiCustomerSupportChatbot</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aicustomersupportchatbot services coming soon.</p>

              Contact Us

      <  />
  );}

export default function AicustomersupportchatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Professional ai customer support chatbot services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Customer Support Chatbot</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai customer support chatbot services coming soon.</p>
          
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
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xllp-12text-center">
              <h2 className="text-4xl font-bold text-white mb-6"  />Ready to Get Started?
              </h2>

                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25">Contact Us
                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All Services
                </Link>
              </div>
          </div>
        </section>
      </div>

  );
}
