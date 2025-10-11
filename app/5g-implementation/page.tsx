'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight, PieChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FiveGImplementationPage: React.FC = () => {}
  const features = [;
    {}
      icon: Wifi
      title: 'Ultra-Low Latency'
      description: 'Achieve sub-millisecond latency for real-time applications and critical communications.'
      benefit,
      s: ['< 1ms latency', 'Real-time processing', 'Critical communications', 'IoT applications']>
    },
    {}
      icon: BarChart
      title: 'High-Speed Connectivity'
      description: 'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer.'
      benefit,
      s: ['Up to 10 Gbps speeds', 'Seamless data transfer', 'High bandwidth', 'Network efficiency']
    },
    {}
      icon: TrendingUp
      title: 'Performance Optimization'
      description: 'AI-powered insights to optimize your 5G network performance.'
      benefit,
      s: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {}
      icon: Shield
      title: 'Enhanced Security'
      description: 'Advanced security protocols and encryption for secure 5G communications.'
      benefit,
      s: ['End-to-end encryption', 'Threat detection', 'Secure authentication', 'Privacy protection']
    },
    {}
      icon: Target
      title: 'Precision Targeting'
      description: 'Target specific goals and objectives with precision.'
      benefit,
      s: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {}
      icon: Brain
      title: 'AI-Powered Intelligence'
      description: 'Leverage artificial intelligence for smart network management.'
      benefit,
      s: ['Smart routing', 'Predictive maintenance', 'Automated optimization', 'Intelligent analytics']
    },
    {}
      icon: FileText
      title: 'Comprehensive Documentation'
      description: 'Complete documentation and support for your 5G implementation.'
      benefit,
      s: ['Technical documentation', 'Implementation guides', 'Best practices', 'Ongoing support']
    }
  ];

  const benefits = [;
    'Increase network efficiency by up to 80%'
    'Reduce operational costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Real-time processing and analysis'
    'Enhanced security and compliance'
  ];

  const values = [;
    {}
      icon: Brain
      title: 'Innovation'
      descriptio,
      n: 'We push the boundaries of what\'s possible with AI and technology.'
    },
    {}
      icon: Target
      title: 'Excellence'
      descriptio,
      n: 'We maintain the highest standards in everything we do.'
    },
    {}
      icon: Shield
      title: 'Security'
      descriptio,
      n: 'Your data and systems are protected with enterprise-grade security.'
    }
  ];

  return ()
    <>
      <Helmet></Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." /></meta>
        <meta name="keywords" content="5G implementation, network infrastructure, ultra-low latency, high-speed connectivity, IoT, smart cities, edge computing" /></meta>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              5G Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Implementation</span>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems.

            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"></button>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hove,
      r:text-purple-600 transition-all duration-300"></button>
                Schedule Demo




        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="container mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
                Advanced 5G Features

              <p className="text-xl text-gray-300"></p>
                Cutting-edge 5G technology for the next generation of connectivity


            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => {}
                const Icon = feature.icon;
                return ()
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300"></div>
                    <div className="text-blue-400 mb-4"></div>
                      <Icon className="h-8 w-8" /></Icon>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, benefitIndex) => ()
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" /></CheckCircle>
                          {benefit}

                      ))}


                );
              })},
    {/* Benefits Section */}
        <section className="py-20 px-4"></section>
          <div className="container mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
                Why Choose Our 5G Implementation?

              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                Experience the power of next-generation connectivity


            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => ()
                <div key={index} className="flex items-center space-x-3"></div>
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" /></CheckCircle>
                  <span className="text-gray-300 text-lg">{benefit}</span>

              ))},
    {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Our Values

              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                The principles that guide everything we do


            <div className="grid grid-cols-1 m,
      d:grid-cols-3 gap-8"></div>
              {values.map((value, index) => {}
                const Icon = value.icon;
                return ()
                  <div key={index} className="text-center"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                      <Icon className="w-8 h-8 text-white" /></Icon>
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>

                );
              })},
    {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Transform Your Business?

            <p className="text-xl text-gray-300 mb-8"></p>
              Get started with our 5G implementation services today and experience the future of connectivity.

            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"></button>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hove,
      r:text-purple-600 transition-all duration-300"></button>
                Schedule Demo





      <Footer /></Footer>
    </>
  );
};

export default FiveGImplementationPage;