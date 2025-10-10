'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MessageSquare, Users, Clock, Star, CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, Target, BarChart, Activity, TrendingUp, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Bot, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown } from 'lucide-react';

const AICustomerServicePage: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: '24/7 AI Chat Support',
      description: 'Round-the-clock AI-powered customer support with instant responses and intelligent problem solving.',
      benefits: ['Instant responses', '24/7 availability', 'Intelligent routing', 'Multi-channel support']
    },
    {
      icon: Brain,
      title: 'Intelligent Problem Solving',
      description: 'AI agents that understand context and provide accurate solutions to complex customer issues.',
      benefits: ['Context understanding', 'Problem resolution', 'Learning capabilities', 'Escalation management']
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Support customers in 50+ languages with natural language processing and translation.',
      benefits: ['50+ languages', 'Natural language processing', 'Cultural adaptation', 'Real-time translation']
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Immediate responses to customer queries with sub-second response times.',
      benefits: ['Sub-second response', 'High availability', 'Scalable infrastructure', 'Performance optimization']
    },
    {
      icon: Target,
      title: 'Personalized Service',
      description: 'Tailored customer service based on individual preferences and history.',
      benefits: ['Personalization', 'Customer history', 'Preference learning', 'Customized solutions']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and insights to improve customer service performance.',
      benefits: ['Performance metrics', 'Customer satisfaction', 'Trend analysis', 'ROI tracking']
    }
  ];

  const benefits = [
    'Increase customer satisfaction by 95%',
    'Reduce response time by 90%',
    'Lower support costs by 70%',
    'Handle 10x more inquiries',
    'Enable 24/7 support',
    'Improve resolution rates',
    'Scale support operations',
    'Enhance customer experience'
  ];

  const useCases = [
    {
      title: 'E-commerce Support',
      description: 'Handle product inquiries, order issues, and returns with AI assistance',
      icon: '🛒'
    },
    {
      title: 'Technical Support',
      description: 'Provide technical assistance and troubleshooting for software and hardware',
      icon: '🔧'
    },
    {
      title: 'Billing & Payments',
      description: 'Assist with billing questions, payment issues, and account management',
      icon: '💳'
    },
    {
      title: 'Product Information',
      description: 'Answer questions about products, features, and specifications',
      icon: '📋'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Help customers schedule appointments and manage bookings',
      icon: '📅'
    },
    {
      title: 'General Inquiries',
      description: 'Handle general questions and provide information about services',
      icon: '❓'
    }
  ];

  return (
<<<<<<< HEAD
    <>
=======
    <div></div><Helmet>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
      <Helmet>
        <title>AI Customer Service - Zion Tech Group</title>
        <meta name="description" content="Transform your customer service with our AI Customer Service solutions. 24/7 support, multilingual capabilities, and intelligent problem solving for better customer experience." />
        <meta name="keywords" content="AI customer service, chatbot, virtual assistant, customer support automation, multilingual support, AI support" />
      </Helmet>

<<<<<<< HEAD
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-8">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Service
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
        <Navigation />

        <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}</main>
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">AI Customer Service Solutions<p className="text-xl text-cyan-400 mb-8 font-medium">Revolutionary 24/7 AI-powered customer support<p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">Transform your customer service with intelligent AI agents that provide instant, accurate, and personalized support in 50+ languages.</p>
        <link rel="canonical" href="https: //ziontechgroup.com/ai-customer-service" />
      </Helmet>,
,
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">,</div>
        <Navigation />,
        <main className="container mx-auto px-4 py-16 pt-24">,
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text cyber-text">
              AI Customer Service Solutions;</h1>
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Revolutionary 24/7 AI-powered customer support;
            </p>,
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">,
              Transform your customer service with intelligent AI agents that provide instant, accurate, and personalized support in 50+ languages.
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">AI Customer Service Solutions</h1><p className="text-xl text-cyan-400 mb-8 font-medium">Revolutionary 24/7 AI-powered customer support</p><p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">Transform your customer service with intelligent AI agents that provide instant, accurate, and personalized support in 50+ languages.</p>
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="cyber-card p-6 energy-pulse"></div>
                <div className="text-4xl mb-4 text-center">🤖<h3 className="text-xl font-bold text-white mb-4 text-center">Intelligent Chatbots<p className="text-gray-300 text-center">Advanced conversational AI that understands context, emotions, and complex queries with 95% accuracy.</p>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
              <div className="cyber-card p-6 energy-pulse">,</div>
                <div className="text-4xl mb-4 text-center">🤖</div>,
                <h3 className="text-xl font-bold text-white mb-4 text-center">Intelligent Chatbots</h3>,
                <p className="text-gray-300 text-center">,
                  Advanced conversational AI that understands context, emotions, and complex queries with 95% accuracy.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></section>
              <div className="cyber-card p-6 energy-pulse"></div>
                <div className="text-4xl mb-4 text-center">🤖</div><h3 className="text-xl font-bold text-white mb-4 text-center">Intelligent Chatbots</h3><p className="text-gray-300 text-center">Advanced conversational AI that understands context, emotions, and complex queries with 95% accuracy.</p>
                </p>
              </div>

              <div className="cyber-card p-6 energy-pulse"></div>
                <div className="text-4xl mb-4 text-center">🌍</div><h3 className="text-xl font-bold text-white mb-4 text-center">Multilingual Support</h3><p className="text-gray-300 text-center">Support customers in 50+ languages with real-time translation and cultural context awareness.</p>
                </p>
              </div>

              <div className="cyber-card p-6 energy-pulse"></div>
                <div className="text-4xl mb-4 text-center">📊</div><h3 className="text-xl font-bold text-white mb-4 text-center">Analytics Dashboard</h3><p className="text-gray-300 text-center">Real-time insights into customer satisfaction, response times, and conversation quality.</p>
                </p>
              </div>

              <div className="cyber-card p-6 energy-pulse"></div>
                <div className="text-4xl mb-4 text-center">⚡</div><h3 className="text-xl font-bold text-white mb-4 text-center">Instant Response</h3><p className="text-gray-300 text-center">Sub-second response times with 99.9% uptime guarantee for uninterrupted customer support.</p>
                </p>
              </div>

              <div className="cyber-card p-6 energy-pulse"></div>
                <div className="text-4xl mb-4 text-center">🔗</div><h3 className="text-xl font-bold text-white mb-4 text-center">Easy Integration</h3><p className="text-gray-300 text-center">Seamless integration with existing CRM, helpdesk, and communication platforms.</p>
                </p>
              </div>

              <div className="cyber-card p-6 energy-pulse"></div>
                <div className="text-4xl mb-4 text-center">🎯</div><h3 className="text-xl font-bold text-white mb-4 text-center">Personalization</h3><p className="text-gray-300 text-center">AI learns from each interaction to provide increasingly personalized and relevant responses.</p>
                </p>
              </div>
      
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}</div>
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Customer Service Solutions</h1>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer service with our AI Customer Service solutions. 24/7 support, 
              multilingual capabilities, and intelligent problem solving for better customer experience.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Quote
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Customer Service Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Customer Service solutions combine cutting-edge technology with customer expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
=======
          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div className="cyber-card p-8 text-center"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></section>
              <div className="cyber-card p-8 text-center"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299</div><span className="text-lg">/month</span>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Up to 1,000 conversations/month<li>5 languages supported</li>
                  <li>Basic analytics<li>Email support<li>Standard integrations<a href="/contact" className="cyber-button w-full">Get Started</a>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
              <div className="cyber-card p-8 text-center">,</div>
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>,
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg">/month</span></div>,
                <ul className="text-gray-300 space-y-3 mb-8">,
                  <li>Up to 1,000 conversations/month</li>
                  <li>5 languages supported</li>
                  <li>Basic analytics</li>
                  <li>Email support</li>
                  <li>Standard integrations</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From e-commerce to technical support, our AI Customer Service serves diverse needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Customer Service?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of customer service with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Customer Service?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Join thousands of businesses who are already using our AI Customer Service solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
<<<<<<< HEAD
          </div>
        </section>
=======
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our AI Customer Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div className="cyber-card p-6"></div>
                <h3 className="text-xl font-bold text-white mb-4">95% Customer Satisfaction<p className="text-gray-300">Our AI solutions consistently achieve 95% customer satisfaction rates, matching or exceeding human agents.</p>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8">)</div>
              <div className="cyber-card p-6">)</div>
                <h3 className="text-xl font-bold text-white mb-4">95% Customer Satisfaction</h3>)
                <p className="text-gray-300">),
                  Our AI solutions consistently achieve 95% customer satisfaction rates, matching or exceeding human agents.
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></section>
              <div className="cyber-card p-6"></div>
                <h3 className="text-xl font-bold text-white mb-4">95% Customer Satisfaction</h3><p className="text-gray-300">Our AI solutions consistently achieve 95% customer satisfaction rates, matching or exceeding human agents.</p>
                </p>
              </div>

              <div className="cyber-card p-6"></div>
                <h3 className="text-xl font-bold text-white mb-4">70% Cost Reduction</h3><p className="text-gray-300">Reduce customer service costs by up to 70% while maintaining high-quality support standards.</p>
                </p>
              </div>

              <div className="cyber-card p-6"></div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Availability</h3><p className="text-gray-300">Never miss a customer inquiry with round-the-clock AI support that never sleeps or takes breaks.</p>
                </p>
              </div>

              <div className="cyber-card p-6"></div>
                <h3 className="text-xl font-bold text-white mb-4">Instant Scalability</h3><p className="text-gray-300">Handle traffic spikes effortlessly with AI that scales automatically to meet demand.</p>
                </p>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center"></div>
                <MessageSquare className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Smart Chatbots</h3>
                <p className="text-gray-300">AI-powered chatbots that understand context and provide accurate responses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center"></div>
                <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock customer assistance without human intervention</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center"></div>
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Multilingual</h3>
                <p className="text-gray-300">Support customers in multiple languages with natural conversation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center"></div>
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">95% Satisfaction</h3>
                <p className="text-gray-300">Proven track record of customer satisfaction and issue resolution</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Customer Service?</h2><p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Join 500+ companies already using our AI customer service solutions to deliver exceptional support experiences.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
              <a href="tel:+13024640950" className="cyber-button">📞 Call: (302) 464-0950<a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">Get Free Demo</a>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950;
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Get Free Demo;
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>,
    </div>,
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Customer Service?</h2>
            <p className="text-xl text-blue-100 mb-8">Let our AI solutions handle your customer support needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </section>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
      </main>

      <Footer />
    </>
  );
};

export default AICustomerServicePage;
