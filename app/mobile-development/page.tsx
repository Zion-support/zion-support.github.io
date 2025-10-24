<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
=======
    <div>
      <Head>
        <title>Mobile Development - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Mobile Development
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            mobile-development services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
<<<<<<< HEAD
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
=======
      </section>

=======
'use client';
import React from 'react';
import { Smartphone, Code, Zap, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MobileDevelopmentPage: React.FC = () => {
  const features = [
    'iOS & Android Development',
    'Cross-platform Solutions',
    'UI/UX Design',
    'App Store Optimization',
    'Performance Optimization',
    'Push Notifications',
    'Offline Functionality',
    'Security Implementation'
  ];

  const benefits = [
    '50% faster development',
    '90% code reusability',
    '4.8+ app store rating',
    '60% user retention increase'
  ];

  const services = [
    {
      title: 'Native Apps',
      description: 'High-performance native iOS and Android applications',
      icon: Smartphone;
    },
    {
      title: 'Cross-platform',
      description: 'React Native and Flutter apps for maximum reach',
      icon: Code;
    },
    {
      title: 'App Optimization',
      description: 'Performance tuning and app store optimization',
      icon: Zap;
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        {/* Header */}
        <section className="text-center mb-16"></section>
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Mobile App Development"></h1>
            Mobile App Development;
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">,
            Native and cross-platform mobile application development with cutting-edge technologies and exceptional user experience.,
          </p>,
          <div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $1,500/month</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Mobile App Development">Mobile App Development</h1><p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">Native and cross-platform mobile application development with cutting-edge technologies and exceptional user experience.</p><div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $1,500/month</section>
        </section>

        {/* Features */}
        <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">)
              Development Features;)
            </h2>)
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">),
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3"></div>
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Development Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
                <div key={index} className="flex items-center space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>

<<<<<<< HEAD
=======
        {/* Benefits */}
        <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"></h2>
              Proven Benefits;
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center"></div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}<p className="text-gray-300 text-sm">{benefit}</p>
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Proven Benefits</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}</div><p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"></h2>
            Our Mobile Services;
          </h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-6 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our Mobile Services</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{services.map((service, index) => (</section>
              <div key={index} className="cyber-card p-6 text-center"></div>
                <service.icon className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3><p className="text-gray-300">{service.description}</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
            </div></div>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    </div>
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const MobileDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>Mobile Development - Zion Tech Group</title>
        <meta name="description" content="Professional mobile app development services." />
        <meta name="keywords" content="mobile development, iOS, Android, mobile apps" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Mobile Development
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional mobile app development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
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
                </div>
              ))}
            </div>
          </div>
        </section>

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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
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
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Smartphone, Tablet, Laptop, Code, Server, Cloud, Monitor, Wifi, MessageCircle, Heart, DollarSign, Box, Package, Mic, Workflow, Eye, MessageSquare, CheckSquare, ShoppingCart, Calendar, Lock } from 'lucide-react'

<<<<<<< HEAD
const MobileDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Native iOS Development',
      description: 'High-performance iOS apps built with Swift and native frameworks',
      features: ['Swift/SwiftUI', 'Core Data', 'Push notifications', 'App Store optimization']
    },
    {
      icon: Smartphone,
      title: 'Native Android Development',
      description: 'Robust Android apps built with Kotlin and modern Android architecture',
      features: ['Kotlin/Java', 'Jetpack Compose', 'Material Design', 'Google Play optimization']
    },
    {
      icon: Globe,
      title: 'Cross-Platform Development',
      description: 'Single codebase apps that work on both iOS and Android',
      features: ['React Native', 'Flutter', 'Xamarin', 'Code sharing']
    },
    {
      icon: Tablet,
      title: 'Tablet Applications',
      description: 'Optimized tablet experiences for enhanced productivity',
      features: ['Responsive design', 'Touch gestures', 'Split-screen support', 'Stylus support']
    },
    {
      icon: Wifi,
      title: 'Progressive Web Apps',
      description: 'Web apps that provide native app-like experiences',
      features: ['Offline functionality', 'Push notifications', 'App-like UI', 'Installable']
    },
    {
      icon: Shield,
      title: 'App Security & Testing',
      description: 'Comprehensive security and testing services for mobile apps',
      features: ['Security audits', 'Penetration testing', 'Automated testing', 'Performance testing']
    }
  ]

  const benefits = [
    'Enhanced user engagement and retention',
    'Improved brand visibility and recognition',
    'Better customer experience and satisfaction',
    'Increased revenue and business growth',
    'Competitive advantage in the market',
    'Access to device features and capabilities'
  ]

  const stats = [
    { label: 'Apps Developed', value: '100+', icon: Smartphone },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'App Store Rating', value: '4.8/5', icon: Star },
    { label: 'Download Speed', value: '<3s', icon: Zap }
  ]

  return (
    <>
      <Helmet>
        <title>Mobile Development | Zion Tech Group</title>
        <meta name="description" content="Professional mobile app development services for iOS, Android, and cross-platform solutions." />
        <meta name="keywords" content="mobile app development, iOS development, Android development, cross-platform apps, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Mobile Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create engaging mobile applications that connect with your users and drive business growth. 
              From native iOS and Android apps to cross-platform solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Mobile Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive mobile development solutions for all platforms, 
                ensuring your app reaches the widest possible audience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Choose Our Mobile Development Services?
                </h2>
                <p className="text-gray-300 mb-8">
                  Our experienced mobile developers combine technical expertise with 
                  user experience design to create apps that users love.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Discovery & Planning</h4>
                      <p className="text-gray-300 text-sm">Analyze requirements and create detailed project plan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Design & Prototyping</h4>
                      <p className="text-gray-300 text-sm">Create wireframes and interactive prototypes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Development</h4>
                      <p className="text-gray-300 text-sm">Build your app using latest technologies and best practices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Testing & Launch</h4>
                      <p className="text-gray-300 text-sm">Thoroughly test and launch your app on app stores</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your mobile app idea and create a solution that engages 
              your users and drives business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your App Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Our Work
              </Link>
=======
        {/* Contact CTA */}
        <section className="text-center"></section>
          <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Mobile App?</h2><p className="text-lg text-gray-300 mb-8">Contact us today to discuss your mobile app requirements and get a custom solution.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              ></a>
                Get Free Consultation;
              </a>
              <a;
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ></a>
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950;
              </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

<<<<<<< HEAD
export default MobileDevelopmentPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
export default MobileDevelopmentPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
      <Footer />,
    </div>);
};

export default MobileDevelopmentPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function MobileDevelopment() {return (
    <>
      <title>MobileDevelopment - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">MobileDevelopment</h1>
            <p className="text-lg text-gray-300 mb-8">Professional mobiledevelopment services coming soon.</p>

              Contact Us

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
