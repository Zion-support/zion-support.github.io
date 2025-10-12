import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Headphones, Zap, Globe, Shield, Users, Clock, Star, CheckCircle, DollarSign, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIVoiceAssistantPage() {
  const features = [
    {
      icon: <Mic className="w-6 h-6 text-purple-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities understand context, intent, and emotion in human speech with 98% accuracy.',
      benefits: ['98% accuracy rate', 'Multi-language support', 'Context awareness', 'Emotion detection']
    },
    {
      icon: <Headphones className="w-6 h-6 text-blue-400" />,
      title: 'Real-time Voice Processing',
      description: 'Ultra-low latency voice processing with noise cancellation and echo suppression for crystal clear conversations.',
      benefits: ['<100ms latency', 'Noise cancellation', 'Echo suppression', 'HD audio quality']
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Custom Voice Training',
      description: 'Train the AI with your brand voice, terminology, and specific use cases for personalized interactions.',
      benefits: ['Brand voice training', 'Custom terminology', 'Use case optimization', 'Continuous learning']
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: 'Multi-Platform Integration',
      description: 'Seamlessly integrate with websites, mobile apps, IoT devices, and existing business systems.',
      benefits: ['Web integration', 'Mobile SDK', 'IoT compatibility', 'API connectivity']
    }
  ];

  const useCases = [
    {
      icon: <Phone className="w-8 h-8 text-cyan-400" />,
      title: 'Customer Service',
      description: '24/7 intelligent customer support with instant responses and seamless handoff to human agents.',
      benefits: ['Instant responses', '24/7 availability', 'Human handoff', 'Customer satisfaction']
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: 'Sales Assistant',
      description: 'AI-powered sales assistant that qualifies leads, answers product questions, and schedules meetings.',
      benefits: ['Lead qualification', 'Product demos', 'Meeting scheduling', 'Sales conversion']
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Healthcare Support',
      description: 'Medical voice assistant for appointment scheduling, symptom checking, and patient education.',
      benefits: ['Appointment booking', 'Symptom analysis', 'Patient education', 'HIPAA compliance']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Security & Access',
      description: 'Voice-based authentication and access control for secure facilities and systems.',
      benefits: ['Voice biometrics', 'Access control', 'Security logging', 'Multi-factor auth']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 voice interactions',
        'Basic NLP capabilities',
        '2 voice channels',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses and enterprises',
      features: [
        'Up to 10,000 voice interactions',
        'Advanced NLP & ML',
        '10 voice channels',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Voice training tools',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited voice interactions',
        'Custom AI model training',
        'Unlimited voice channels',
        'Dedicated support manager',
        'White-label solution',
        'Custom development',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'TechFlow Solutions',
      content: 'Our customer satisfaction increased by 40% after implementing Zion Tech\'s voice assistant. It handles 80% of inquiries automatically.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'Dr. Robert Kim',
      company: 'MediCare Plus',
      content: 'The voice assistant has revolutionized our patient scheduling. It\'s like having a dedicated receptionist available 24/7.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Sarah Thompson',
      company: 'RetailMax Inc.',
      content: 'The sales assistant has increased our conversion rate by 35%. Customers love the natural, helpful interactions.',
      rating: 5,
      avatar: 'ST'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant - Intelligent Voice AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice assistant with 98% accuracy. Natural language processing, real-time voice processing, and multi-platform integration. Starting at $199/month." />
        <meta name="keywords" content="AI voice assistant, voice AI, natural language processing, voice recognition, conversational AI, voice automation, customer service AI" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-purple-400/30">
                <Mic className="w-4 h-4" />
                <span>Intelligent Voice AI</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                AI Voice
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Assistant
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Advanced AI voice assistant with 98% accuracy in natural language processing. 
                Transform customer interactions with intelligent, conversational AI technology.
                <br />
                <span className="text-purple-400 font-semibold">Trusted by 1,000+ businesses worldwide.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <Mic className="w-5 h-5" />
                </Link>
                <Link 
                  to="#pricing" 
                  className="group border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                >
                  <span>View Pricing</span>
                  <DollarSign className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">1,000+</div>
                <div className="text-gray-300">Businesses Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50M+</div>
                <div className="text-gray-300">Voice Interactions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Voice AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Cutting-edge voice AI technology for natural, intelligent conversations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Use Cases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transform your business with intelligent voice AI across multiple industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the perfect plan for your voice AI needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-purple-400/50 bg-purple-500/10 shadow-2xl shadow-purple-500/20' 
                    : 'border-white/20 hover:bg-white/20'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg shadow-purple-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Industry Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                See what our clients say about our AI voice assistant solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Customer Experience?</span>
                  </h2>
                  <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                    Join 1,000+ businesses using our AI voice assistant to enhance customer interactions, 
                    reduce costs, and improve satisfaction. Start your free trial today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link 
                      to="/contact" 
                      className="group bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>Start Free Trial</span>
                      <Mic className="w-5 h-5" />
                    </Link>
                    <Link 
                      to="/contact" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Schedule Demo</span>
                      <Clock className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}