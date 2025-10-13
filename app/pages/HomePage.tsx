import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Code, Cloud, Shield, Database, Globe, 
  Zap, ArrowRight, CheckCircle, Star, Users, 
  TrendingUp, Clock, Award, Target, Rocket,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuturisticBackground from '../components/FuturisticBackground';

const HomePage: React.FC = () => {
  const microServices = [
    {
      name: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with real-time suggestions, code review, and automated testing.',
      price: '$29/mo',
      features: ['Real-time code suggestions', 'Automated testing', 'Code review', 'Multi-language support'],
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      href: '/ai-code-assistant-pro'
    },
    {
      name: 'Smart Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with AI-driven insights and predictive analytics.',
      price: '$49/mo',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      href: '/ai-analytics-dashboard-pro'
    },
    {
      name: 'AI Content Generator',
      description: 'Create high-quality content for blogs, social media, and marketing with advanced AI models.',
      price: '$19/mo',
      features: ['Blog posts', 'Social media content', 'Email campaigns', 'SEO optimization'],
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      href: '/ai-content-generator'
    },
    {
      name: 'Cybersecurity Monitor Pro',
      description: '24/7 AI-powered security monitoring with threat detection and automated response.',
      price: '$79/mo',
      features: ['Threat detection', 'Automated response', 'Security reports', 'Compliance monitoring'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/ai-cybersecurity-monitor-pro'
    },
    {
      name: 'Chatbot Builder Enterprise',
      description: 'Build and deploy intelligent chatbots for customer support and sales automation.',
      price: '$39/mo',
      features: ['No-code builder', 'Multi-channel support', 'Analytics dashboard', 'Custom integrations'],
      icon: Users,
      color: 'from-indigo-500 to-blue-500',
      href: '/ai-chatbot-enterprise'
    },
    {
      name: 'Data Visualization Studio',
      description: 'Transform complex data into stunning visualizations with AI-powered insights.',
      price: '$59/mo',
      features: ['Interactive charts', 'Real-time updates', 'Custom templates', 'Export options'],
      icon: Database,
      color: 'from-cyan-500 to-teal-500',
      href: '/ai-data-visualization'
    }
  ];

  const coreServices = [
    {
      name: 'AI Development',
      description: 'Custom AI solutions tailored to your business needs',
      icon: Brain,
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery']
    },
    {
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: Shield,
      features: ['Penetration Testing', 'Security Audits', 'Compliance', 'Incident Response']
    },
    {
      name: 'Web Development',
      description: 'Modern, responsive web applications with cutting-edge technology',
      icon: Globe,
      features: ['React/Next.js', 'Progressive Web Apps', 'API Development', 'Performance Optimization']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '50+', label: 'Micro SAAS Services', icon: Rocket },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Clock },
    { number: '24/7', label: 'Support Available', icon: Award }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Micro SAAS Services</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions with comprehensive micro SAAS services. Transform your business with our cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud computing, cybersecurity, data analytics, web development" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive AI and IT solutions and micro SAAS services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
      </Helmet>

      <FuturisticBackground />
      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Next-Generation AI & IT Solutions
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
                Transform Your
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Unlock the power of AI and cutting-edge technology with our comprehensive suite of 
                micro SAAS services and enterprise solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/services"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/demo"
                className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Watch Demo
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro SAAS Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, affordable micro services designed to solve specific business challenges 
                with AI-powered solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="text-3xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>

                    <Link
                      to={service.href}
                      className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Get Started
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-lg group"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Core Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive enterprise solutions designed to transform your business 
                with cutting-edge technology and expert implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI and IT solutions to drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="tel:+13024640950"
                className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">+1 302 464 0950</div>
                  <div className="text-sm text-gray-400">24/7 Support</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">kleber@ziontechgroup.com</div>
                  <div className="text-sm text-gray-400">Email Support</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">Middletown, DE</div>
                  <div className="text-sm text-gray-400">Headquarters</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;