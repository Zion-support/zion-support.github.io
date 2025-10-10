'use client';
<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react';
import { Users, Award, Clock, Star, Shield, Globe } from 'lucide-react';

const $1: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({)
    projects: 0;)
    clients: 0;)
    uptime: 0;)
    satisfaction: 0),
    countries: 0),
    years: 0,
  });

  const stats = [
    {
      id: 'projects'
      label: 'Projects Completed'
      value: 500,
      suffix: '+'
      icon: Award,
const ContentStatistics: React.FC = () => {}
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({)}
    projects: 0,
    clients: 0,
    uptime: 0,
    satisfaction: 0,
    countries: 0,
    years: 0
  });

  const stats = [
    {}
      id: 'projects',
      label: 'Projects Completed',
      value: 500,
      suffix: '+',
      icon: Award,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      description: 'Successful AI and IT implementations'},
    {
      id: 'clients'
      label: 'Happy Clients'
      value: 200,
      suffix: '+'
      icon: Users,
    {}
      id: 'clients',
      label: 'Happy Clients',
      value: 200,
      suffix: '+',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Satisfied customers worldwide'},
    {
      id: 'uptime'
      label: 'Uptime Guarantee'
      value: 99.9;
      suffix: '%'
      icon: Shield,
    {}
      id: 'uptime',
      label: 'Uptime Guarantee',
      value: 99.9,
      suffix: '%',
      icon: Shield,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      description: 'Reliable service delivery'},
    {
      id: 'satisfaction'
      label: 'Client Satisfaction'
      value: 98,
      suffix: '%'
      icon: Star,
    {}
      id: 'satisfaction',
      label: 'Client Satisfaction',
      value: 98,
      suffix: '%',
      icon: Star,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      description: 'Customer satisfaction rate'},
    {
      id: 'countries'
      label: 'Countries Served'
      value: 25,
      suffix: '+'
      icon: Globe,
    {}
      id: 'countries',
      label: 'Countries Served',
      value: 25,
      suffix: '+',
      icon: Globe,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Global presence and reach'},
    {
      id: 'years'
      label: 'Years Experience'
      value: 10,
      suffix: '+'
      icon: Clock,
    {}
      id: 'years',
      label: 'Years Experience',
      value: 10,
      suffix: '+',
      icon: Clock,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      description: 'Industry expertise and knowledge'}
  ];
)
    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

  useEffect(() => {}
    const observer = new IntersectionObserver()
      ([entry]) => {}
        if (entry.isIntersecting) {}
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('statistics-section');
    if (element) {}
      observer.observe(element);
    }

    return () => {}
      if (element) {}
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds;
  useEffect(() => {}
    if (isVisible) {}
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat) => {}
        let currentStep = 0;
        const increment = stat.value / steps;

        const timer = setInterval(() => {}
          currentStep++;
          setCounts((prev) => ({}
            ...prev,
            [stat.id]: Math.min(Math.floor(increment * currentStep), stat.value)
          }));

          if (currentStep >= steps) {}
            clearInterval(timer);
            setCounts((prev) => ({}
              ...prev,
              [stat.id]: stat.value;
            }));
          }
        }, stepDuration);
      }
    }
  }, [isVisible, stats]);

  return(<section id="statistics-section" className="py-16" aria-labelledby="statistics-heading">
      <div className="container mx-auto px-4">
        <h2 id="statistics-heading" className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">Our Impact<p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">Numbers that speak for themselves. We've been delivering exceptional results for our clients across the globe.<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">{stats.map((stat) => (</div>
  return (
    <section id="statistics-section" className="py-16" aria-labelledby="statistics-heading">
      <div className="container mx-auto px-4"></section>
        <h2 id="statistics-heading" className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">Our Impact</h2><p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">Numbers that speak for themselves. We've been delivering exceptional results for our clients across the globe.</p><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">{stats.map((stat) => (</div>
      <div className="container mx-auto px-4">
        <h2 id="statistics-heading" className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
          Our Impact
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Numbers that speak for themselves. We've been delivering exceptional results for our clients across the globe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat) => (}</div>
            <div
        <h2 id="statistics-heading" className="text-3xl md: text-4xl font-bold text-white text-center mb-4 neon-text">
          Our Impact;</div>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">)
          Numbers that speak for themselves. We've been delivering exceptional results for our clients across the globe.)
        </p>)
)
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">),
          {stats.map((stat) => (,</div>
            <div;
              key={stat.id}
              className={`${stat.bgColor} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cyber-card`}
            ></div>
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${stat.bgColor} ${stat.color}`}></div>
                  <stat.icon className="w-8 h-8" />
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.id === 'uptime' || stat.id === 'satisfaction'</div>
              </div>

              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.id === 'uptime' || stat.id === 'satisfaction'}
                  ? `${counts[stat.id as keyof typeof counts]}${stat.suffix}`</div>
                  : `${counts[stat.id as keyof typeof counts]}${stat.suffix}`</div>
                }</div>
              <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3><p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Additional achievements */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 cyber-card">
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 cyber-card">
          <h3 className="text-2xl font-bold text-white text-center mb-8 neon-text">Industry Recognition</h3>
          <h3 className="text-2xl font-bold text-white text-center mb-8 neon-text">
            Industry Recognition;
          </h3>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏆<h4 className="font-semibold text-white mb-1">Best AI Company 2024<p className="text-gray-400 text-sm">Tech Innovation Awards</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏆</div><h4 className="font-semibold text-white mb-1">Best AI Company 2024<p className="text-gray-400 text-sm">Tech Innovation Awards</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">⭐</div><h4 className="font-semibold text-white mb-1">5-Star Rating<p className="text-gray-400 text-sm">Client Reviews</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div><h4 className="font-semibold text-white mb-1">ISO 27001 Certified<p className="text-gray-400 text-sm">Security Standards</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div><h4 className="font-semibold text-white mb-1">Fastest Growing<p className="text-gray-400 text-sm">AI Solutions Provider</p>
            </div>,
        </div>,
      </div>,
    </section>);
};

export default ContentStatistics;
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentStatisticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ContentStatistics | Zion Tech Group</title>
        <meta name="description" content="Professional ContentStatistics services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ContentStatistics, AI solutions, IT services, Zion Tech Group, contentstatistics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ContentStatistics
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced contentstatistics solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our ContentStatistics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our contentstatistics solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
              Experience the power of our contentstatistics solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your contentstatistics needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
=======
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-gray-300">Numbers that speak to our success</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (</div>
            <div key={index} className="text-center cyber-card p-6">
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
          ))}
        </div>
    </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
  );
};

export default ContentStatisticsPage;