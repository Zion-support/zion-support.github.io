'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Globe, Smartphone, Zap, Shield, BarChart, Target, CheckCircle, ArrowRight, Users, Clock, Settings, Database, Monitor } from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Build custom web applications tailored to your specific business needs.',
      benefits: ['Custom functionality', 'Scalable architecture', 'Modern frameworks', 'Performance optimization']
    },
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Create websites that work perfectly on all devices and screen sizes.',
      benefits: ['Mobile-first design', 'Cross-browser compatibility', 'Touch-friendly interface', 'Fast loading']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your website for speed, SEO, and user experience.',
      benefits: ['Fast loading times', 'SEO optimization', 'Core Web Vitals', 'User experience']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Implement robust security measures and ensure compliance with standards.',
      benefits: ['Data protection', 'SSL certificates', 'Security audits', 'GDPR compliance']
    }
  ];

  const developmentServices = [
    {
      icon: Globe,
      title: 'Frontend Development',
      description: 'Modern, interactive user interfaces built with latest technologies',
      benefits: ['React/Next.js', 'Vue.js/Angular', 'Responsive design', 'User experience']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust server-side applications and APIs for your business logic',
      benefits: ['Node.js/Python', 'RESTful APIs', 'Database design', 'Cloud integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      benefits: ['React Native', 'Flutter', 'Native development', 'App store optimization']
    },
    {
      icon: Settings,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and management',
      benefits: ['Online stores', 'Payment processing', 'Inventory management', 'Order tracking']
    }
  ];

  const benefits = [
    'Increase online presence and visibility',
    'Improve user engagement and conversion rates',
    'Reduce development time by 50%',
    'Ensure cross-platform compatibility',
    'Implement modern security standards',
    'Scale with your business growth'
  ];

  const stats = [
    { number: '100+', label: 'Websites Built', icon: Globe },
    { number: '50%', label: 'Faster Development', icon: Zap },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>Web Development - Zion Tech Group</title>
        <meta name="description" content="Professional web development services. Custom websites, web applications, and e-commerce solutions built with modern technologies." />
        <meta name="keywords" content="web development, custom websites, web applications, e-commerce, responsive design, frontend, backend" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Development</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional web development services. Custom websites, web applications, and e-commerce solutions built with modern technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive web development services to bring your ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developmentServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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

        {/* Core Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Web Development?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our web development services deliver modern, scalable, and high-performance solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your online presence with professional web development solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your web development project today and create an amazing online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Project
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Get Quote
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default WebDevelopmentPage;