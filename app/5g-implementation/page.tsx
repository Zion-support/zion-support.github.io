'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, Wifi, Shield, CheckCircle, ArrowRight, Star, Users, TrendingUp, Database, Target, Globe, Clock, DollarSign, Phone, Mail, MapPin, Cpu, Server, Smartphone, Building, Car, Factory } from 'lucide-react';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: '5G Network Design',
      description: 'Complete 5G network architecture design with millimeter wave and sub-6GHz spectrum optimization',
      price: '$15,000/project'
    },
    {
      icon: Wifi,
      title: 'Small Cell Deployment',
      description: 'Strategic placement and installation of 5G small cells for optimal coverage and capacity',
      price: '$8,500/site'
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Comprehensive 5G security implementation with zero-trust architecture and threat protection',
      price: '$12,000/project'
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: '5G edge computing infrastructure setup for ultra-low latency applications and IoT',
      price: '$25,000/project'
    },
    {
      icon: Server,
      title: 'Core Network Integration',
      description: '5G core network deployment with cloud-native architecture and network slicing',
      price: '$50,000/project'
    },
    {
      icon: Smartphone,
      title: 'Device Testing',
      description: 'Comprehensive 5G device testing and certification for optimal performance',
      price: '$5,000/device'
    }
  ];

  const benefits = [
    'Achieve 10x faster data speeds compared to 4G networks',
    'Reduce latency to under 1ms for real-time applications',
    'Support up to 1 million devices per square kilometer',
    'Enable advanced IoT and smart city applications',
    'Improve network efficiency by 90% with network slicing',
    'Future-proof your infrastructure for next-generation applications'
  ];

  const useCases = [
    {
      icon: Building,
      title: 'Smart Cities',
      description: 'Traffic management, environmental monitoring, and public safety systems',
      price: '$100,000+'
    },
    {
      icon: Factory,
      title: 'Industrial IoT',
      description: 'Manufacturing automation, predictive maintenance, and quality control',
      price: '$75,000+'
    },
    {
      icon: Car,
      title: 'Autonomous Vehicles',
      description: 'V2X communication, real-time navigation, and safety systems',
      price: '$150,000+'
    },
    {
      icon: Smartphone,
      title: 'Enhanced Mobile',
      description: 'Ultra-high-definition video, AR/VR applications, and cloud gaming',
      price: '$50,000+'
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$25,000',
      period: '/project',
      description: 'Perfect for small to medium businesses',
      features: [
        'Basic 5G network setup',
        'Up to 5 small cells',
        'Standard security',
        '6-month support',
        'Basic monitoring'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$75,000',
      period: '/project',
      description: 'Ideal for large organizations',
      features: [
        'Complete 5G infrastructure',
        'Up to 25 small cells',
        'Advanced security',
        '12-month support',
        'Real-time monitoring',
        'Edge computing setup'
      ],
      popular: true
    },
    {
      name: 'Smart City',
      price: '$200,000',
      period: '/project',
      description: 'For smart city implementations',
      features: [
        'City-wide 5G network',
        'Unlimited small cells',
        'Military-grade security',
        '24/7 support',
        'AI-powered monitoring',
        'IoT integration',
        'Custom applications'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      title: 'CTO, SmartCity Solutions',
      content: 'Zion Tech Group delivered a flawless 5G implementation. Our smart city is now 5G-ready with incredible performance.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      title: 'VP Technology, AutoCorp',
      content: 'The 5G network they built for our autonomous vehicle testing is exceptional. Ultra-low latency and rock-solid reliability.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      title: 'CEO, IndustrialTech',
      content: 'Our manufacturing efficiency increased by 40% thanks to their 5G industrial IoT implementation. Outstanding work!',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation - Next-Gen Network Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with 5G implementation services. Ultra-fast speeds, ultra-low latency, and massive IoT connectivity. Starting at $25,000/project." />
        <meta name="keywords" content="5G implementation, 5G network design, small cell deployment, edge computing, network slicing, IoT connectivity" />
        <meta property="og:title" content="5G Implementation - Next-Gen Network Solutions | Zion Tech Group" />
        <meta property="og:description" content="Transform your business with 5G implementation services. Ultra-fast speeds, ultra-low latency, and massive IoT connectivity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/5g-implementation" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "5G Implementation",
            "description": "Complete 5G network implementation and deployment services",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "25000",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "25000",
                "priceCurrency": "USD",
                "unitText": "PROJECT"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  5G Implementation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with next-generation 5G networks. Ultra-fast speeds, ultra-low latency, 
                and massive IoT connectivity for the future of digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  Get 5G Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">10x</div>
                  <div className="text-gray-400 text-sm">Faster than 4G</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">&lt;1ms</div>
                  <div className="text-gray-400 text-sm">Ultra-low Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">1M+</div>
                  <div className="text-gray-400 text-sm">Devices per km²</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Reliability</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">5G Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From network design to deployment, we provide end-to-end 5G implementation services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{feature.price}</span>
                    <Link 
                      to="/contact"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                5G <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Use Cases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G can transform your industry and unlock new possibilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{useCase.price}</span>
                    <Link 
                      to="/contact"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                    >
                      Get Quote →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">5G Implementation</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join industry leaders who trust us with their 5G transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients</span> Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from industry leaders who trust our 5G expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the 5G implementation plan that fits your business needs and budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/25' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform with 5G?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the 5G revolution and unlock the full potential of next-generation connectivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Your 5G Journey
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGImplementationPage;