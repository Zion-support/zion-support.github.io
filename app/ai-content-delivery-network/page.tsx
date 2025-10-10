'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Globe, Zap, Shield, CheckCircle, Star, ArrowRight, Users, Target, Activity, TrendingUp, Cloud, Lock, Settings, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Globe, Zap, Shield, ArrowRight, Brain, Target, Users, Star, Phone, Mail, MapPin, Cloud, Server, Database, Settings, Activity, TrendingUp } from 'lucide-react';
>>>>>>> origin/main

const AIContentDeliveryNetworkPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Edge Network',
<<<<<<< HEAD
      description: 'Worldwide content delivery with 200+ edge locations for optimal performance',
      benefits: ['200+ locations', 'Global coverage', 'Low latency', 'High availability']
=======
      description: 'Worldwide network of edge servers for ultra-fast content delivery and reduced latency.',
      benefits: ['Global coverage', 'Low latency', 'High availability', 'Edge computing']
>>>>>>> origin/main
    },
    {
      icon: Zap,
      title: 'AI-Powered Optimization',
<<<<<<< HEAD
      description: 'Intelligent content caching and delivery optimization using machine learning',
      benefits: ['Smart caching', 'Predictive delivery', 'Performance optimization', 'Cost reduction']
=======
      description: 'Intelligent content optimization and caching strategies powered by machine learning.',
      benefits: ['Smart caching', 'Content optimization', 'Predictive loading', 'Performance tuning']
>>>>>>> origin/main
    },
    {
      icon: Shield,
      title: 'Advanced Security',
<<<<<<< HEAD
      description: 'Comprehensive security features including DDoS protection and SSL encryption',
      benefits: ['DDoS protection', 'SSL encryption', 'WAF security', 'Threat detection']
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Support',
      description: 'Seamless integration with AWS, Azure, Google Cloud, and other platforms',
      benefits: ['AWS integration', 'Azure support', 'Google Cloud', 'Hybrid solutions']
=======
      description: 'Comprehensive security features including DDoS protection and SSL encryption.',
      benefits: ['DDoS protection', 'SSL encryption', 'WAF integration', 'Security monitoring']
>>>>>>> origin/main
    },
    {
      icon: Brain,
      title: 'Intelligent Routing',
<<<<<<< HEAD
      description: 'AI-driven traffic routing for optimal performance and cost efficiency',
      benefits: ['Smart routing', 'Load balancing', 'Traffic optimization', 'Real-time decisions']
    },
    {
      icon: Activity,
      title: 'Real-Time Analytics',
      description: 'Comprehensive analytics and monitoring for performance insights',
=======
      description: 'AI-driven traffic routing and load balancing for optimal performance.',
      benefits: ['Smart routing', 'Load balancing', 'Traffic optimization', 'Failover protection']
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless integration with major cloud providers and content management systems.',
      benefits: ['Cloud integration', 'CMS support', 'API compatibility', 'Easy deployment']
    },
    {
      icon: Activity,
      title: 'Real-time Analytics',
      description: 'Comprehensive analytics and monitoring for performance insights and optimization.',
>>>>>>> origin/main
      benefits: ['Real-time metrics', 'Performance monitoring', 'Usage analytics', 'Custom dashboards']
    }
  ];

  const benefits = [
<<<<<<< HEAD
    'Reduce load times by 70%',
    'Improve global performance',
    'Enhance security posture',
    'Reduce bandwidth costs',
    'Scale automatically',
    'Ensure high availability'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small websites and applications',
      features: [
        '50GB bandwidth',
        'Basic caching',
        'Email support',
        'Standard security',
        '1 domain',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '500GB bandwidth',
        'Advanced caching',
        'Priority support',
        'Enhanced security',
        '5 domains',
        'Advanced analytics',
        'Custom rules',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited bandwidth',
        'AI optimization',
        'Dedicated support',
        'Maximum security',
        'Unlimited domains',
        'Custom analytics',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'MediaCorp',
      role: 'CTO',
      quote: 'AI CDN reduced our page load times by 75% and improved user engagement significantly.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Plus',
      role: 'VP of Technology',
      quote: 'Global performance improved dramatically. Our international sales increased by 40%.',
      rating: 5,
      image: '👩‍💻'
    },
    {
      name: 'Michael Chen',
      company: 'StreamTech',
      role: 'CEO',
      quote: 'The AI optimization features saved us 60% on bandwidth costs while improving quality.',
      rating: 5,
      image: '👨‍💼'
=======
    'Improve page load speed by 80%',
    'Reduce bandwidth costs by 60%',
    'Increase global reach by 95%',
    'Lower server load by 70%',
    'Enable global scalability',
    'Automate content optimization',
    'Enhance user experience',
    'Reduce infrastructure costs'
  ];

  const useCases = [
    {
      title: 'E-commerce Platforms',
      description: 'Accelerate product images and content for better shopping experience',
      icon: '🛒'
    },
    {
      title: 'Media & Streaming',
      description: 'Deliver video and audio content with minimal buffering and high quality',
      icon: '🎬'
    },
    {
      title: 'Web Applications',
      description: 'Optimize web app performance and reduce load times globally',
      icon: '🌐'
    },
    {
      title: 'Mobile Apps',
      description: 'Accelerate mobile app content delivery and improve user experience',
      icon: '📱'
    },
    {
      title: 'Gaming',
      description: 'Deliver game assets and updates with minimal latency for better gaming',
      icon: '🎮'
    },
    {
      title: 'Software Distribution',
      description: 'Distribute software updates and downloads efficiently worldwide',
      icon: '💻'
>>>>>>> origin/main
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Delivery Network - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Advanced AI-powered content delivery network. Global edge network with intelligent optimization, security, and performance for your content." />
        <meta name="keywords" content="AI CDN, content delivery network, edge computing, global performance, content optimization, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="text-6xl mb-6 animate-bounce">🌐</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Content Delivery Network
=======
        <meta name="description" content="Accelerate your content delivery with our AI-powered CDN. Global edge network, intelligent optimization, and advanced security for better performance." />
        <meta name="keywords" content="AI CDN, content delivery network, edge computing, global CDN, content optimization, CDN security" />
      </Helmet>

<<<<<<< HEAD
      <Navigation />
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Ai Content Delivery Network<p className="text-xl text-gray-300 mb-8">Professional ai content delivery network services powered by advanced AI and cutting-edge technology.</p>
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
              Ai Content Delivery Network;</h1>
>>>>>>> origin/main
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Intelligent Global Content Delivery
            </p>
<<<<<<< HEAD
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Deliver content faster and more efficiently with AI-powered CDN. Global edge network 
              with intelligent optimization, security, and performance monitoring.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">200+</div>
                <div className="text-gray-300">Edge Locations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
                <div className="text-gray-300">Faster Load Times</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Global</div>
                <div className="text-gray-300">Coverage</div>
              </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8">
              <Globe className="w-10 h-10 text-white" />
>>>>>>> origin/main
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Delivery Network
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your content delivery with our AI-powered CDN. Global edge network, 
              intelligent optimization, and advanced security for better performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                Start Delivering
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced CDN Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive content delivery solutions powered by AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">
                    <feature.icon className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
=======
<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced CDN Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Content Delivery Network combines cutting-edge technology with global reach
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
>>>>>>> origin/main
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
<<<<<<< HEAD
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI CDN?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of intelligent content delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                CDN Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the right CDN solution for your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations improved their content delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Accelerate Your Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start delivering content faster with AI-powered CDN
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
=======
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From e-commerce to media, our AI CDN serves diverse industries and use cases
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
                Why Choose Our AI CDN?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of content delivery with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4">
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
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Accelerate Your Content?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Join thousands of businesses who are already using our AI Content Delivery Network
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Schedule Demo
                </button>
=======
            <div className="space-y-4"></div>
              <a;
            <div className="space-y-4"></div>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >Get Started Today</a>
              >
                Get Started Today;
              </a>
              <div></div>
                <a;
              <div></div>
                <a
                  href="/"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >← Back to Home</a>
                >
                  ← Back to Home;
                </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            </div>
          </div>
        </section>
      </main>
>>>>>>> origin/main

      <Footer />
    </>
  );
};

<<<<<<< HEAD
export default AIContentDeliveryNetworkPage;
=======
export default AIContentDeliveryNetworkPage;
>>>>>>> origin/main
