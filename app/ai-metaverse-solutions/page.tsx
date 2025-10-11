'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Globe, Users, Brain, Eye, Zap, Shield, BarChart, CheckCircle, ArrowRight, Star, Clock, Target, Phone, Mail, MapPin, Cpu, Settings, Database, Lock, TrendingUp, Award, ShoppingCart, DollarSign } from 'lucide-react';

const AiMetaverseSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Virtual World Creation',
      description: 'Build immersive 3D virtual environments with AI-powered content generation',
      benefits: ['Procedural world generation', 'AI-driven NPCs', 'Dynamic environments', 'Real-time physics simulation']
    },
    {
      icon: Users,
      title: 'Avatar Intelligence',
      description: 'AI-powered avatars that learn and interact naturally with users',
      benefits: ['Emotional AI avatars', 'Natural language interaction', 'Behavioral learning', 'Personalized experiences']
    },
    {
      icon: Brain,
      title: 'Metaverse AI Engine',
      description: 'Advanced AI systems that power the entire metaverse experience',
      benefits: ['Real-time decision making', 'Predictive analytics', 'Content optimization', 'User behavior analysis']
    },
    {
      icon: Eye,
      title: 'AR/VR Integration',
      description: 'Seamless integration with augmented and virtual reality technologies',
      benefits: ['Cross-platform compatibility', 'Haptic feedback', 'Spatial computing', 'Mixed reality support']
    }
  ];

  const solutions = [
    {
      title: 'Virtual Office Spaces',
      description: 'AI-powered virtual workplaces for remote collaboration',
      icon: Users,
      marketPrice: '$15,000-50,000/month',
      features: ['Virtual meeting rooms', 'AI meeting assistant', 'Collaborative whiteboards', 'Real-time translation']
    },
    {
      title: 'Virtual Events & Conferences',
      description: 'Host large-scale virtual events with AI moderation and engagement',
      icon: Globe,
      marketPrice: '$25,000-100,000/month',
      features: ['AI event management', 'Virtual networking', 'Interactive presentations', 'Analytics dashboard']
    },
    {
      title: 'Virtual Retail Spaces',
      description: 'AI-powered virtual stores and shopping experiences',
      icon: ShoppingCart,
      marketPrice: '$20,000-75,000/month',
      features: ['AI shopping assistant', 'Virtual try-ons', 'Personalized recommendations', 'Virtual payments']
    },
    {
      title: 'Virtual Training & Education',
      description: 'Immersive learning environments with AI tutors',
      icon: Brain,
      marketPrice: '$30,000-120,000/month',
      features: ['AI learning paths', 'Virtual simulations', 'Progress tracking', 'Adaptive content']
    }
  ];

  const pricing = [
    {
      name: 'Metaverse Starter',
      price: '$5,000',
      period: '/month',
      description: 'Basic metaverse platform for small teams',
      features: [
        'Up to 50 concurrent users',
        'Basic AI avatars',
        'Standard virtual spaces',
        'Email support',
        'Cloud hosting included'
      ],
      marketPrice: '$10,000/month',
      savings: '50%'
    },
    {
      name: 'Metaverse Professional',
      price: '$15,000',
      period: '/month',
      description: 'Advanced metaverse platform for businesses',
      features: [
        'Up to 500 concurrent users',
        'Advanced AI avatars',
        'Custom virtual worlds',
        'Priority support',
        'API access',
        'Analytics dashboard'
      ],
      marketPrice: '$30,000/month',
      savings: '50%',
      popular: true
    },
    {
      name: 'Metaverse Enterprise',
      price: '$50,000',
      period: '/month',
      description: 'Full-scale metaverse infrastructure',
      features: [
        'Unlimited concurrent users',
        'Custom AI development',
        'White-label solutions',
        '24/7 dedicated support',
        'On-premise deployment',
        'Custom integrations'
      ],
      marketPrice: '$100,000/month',
      savings: '50%'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Metaverse Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered metaverse solutions for virtual worlds, avatars, and immersive experiences. 50% cost savings vs market rates." />
        <meta name="keywords" content="metaverse, virtual reality, AI avatars, virtual worlds, immersive experiences, AR/VR" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2" />
                Next-Generation Virtual Worlds
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered <span className="text-purple-400">Metaverse Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Create immersive virtual worlds with AI-powered avatars, intelligent environments, 
                and seamless AR/VR integration. Transform your business with the future of digital interaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Explore Metaverse
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Avatars</h3>
                <p className="text-gray-300">Intelligent virtual beings</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Virtual Worlds</h3>
                <p className="text-gray-300">Immersive 3D environments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AR/VR Ready</h3>
                <p className="text-gray-300">Cross-platform compatibility</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">50% Savings</h3>
                <p className="text-gray-300">vs market rates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Metaverse AI <span className="text-purple-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered metaverse platform provides everything you need to create 
                immersive virtual experiences that engage and delight users.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Metaverse <span className="text-purple-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-deploy metaverse solutions for various industries and use cases.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <div className="mb-6">
                    <div className="text-sm text-purple-400 font-semibold mb-3">
                      Market Rate: {solution.marketPrice}
                    </div>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Metaverse <span className="text-purple-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options with 50% savings compared to market rates. 
                All plans include AI-powered features and cloud hosting.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-gray-400 line-through mr-2">Market: {plan.marketPrice}</span>
                      <span className="text-sm text-green-400 font-semibold">Save {plan.savings}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' 
                        : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Enter the <span className="text-purple-400">Metaverse</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our metaverse experts for a free consultation and discover 
              how AI-powered virtual worlds can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Metaverse Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiMetaverseSolutionsPage;