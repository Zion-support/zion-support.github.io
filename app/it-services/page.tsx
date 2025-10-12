'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Server, Monitor, Database, Smartphone, Globe, Settings, Lock, BarChart, Package, Calendar, Link as LinkIcon, Wifi, ShoppingCart, TrendingUp, CheckSquare, DollarSign, Workflow } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Server className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Monitor className="w-6 h-6 text-blue-400" /> },
    { number: '150+', label: 'Expert Engineers', icon: <Users className="w-6 h-6 text-purple-400" /> }
  ];

  const services = [
    {
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud services.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      link: '/cloud-infrastructure',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', '24/7 monitoring']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/cybersecurity-solutions',
      features: ['Threat detection', 'Security audits', 'Compliance management', 'Incident response']
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      icon: <Globe className="w-8 h-8 text-green-400" />,
      link: '/web-development',
      features: ['React, Next.js, Vue.js', 'Mobile-first design', 'SEO optimization', 'Performance tuning']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      link: '/mobile-development',
      features: ['iOS & Android apps', 'React Native', 'Flutter development', 'App Store optimization']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code solutions.',
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      link: '/devops-cicd',
      features: ['Docker & Kubernetes', 'Jenkins, GitLab CI', 'Infrastructure automation', 'Monitoring & logging']
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics.',
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      link: '/data-analytics-bi',
      features: ['Data visualization', 'Predictive analytics', 'Real-time dashboards', 'Custom reports']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses',
      features: [
        'Basic web development',
        'Email support',
        'Monthly maintenance',
        'SSL certificate',
        'Basic analytics'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing companies',
      features: [
        'Full-stack development',
        'Priority support',
        'Weekly maintenance',
        'Advanced security',
        'Performance optimization',
        'Mobile app development',
        'Cloud migration'
      ],
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations',
      features: [
        'Custom solutions',
        '24/7 dedicated support',
        'Daily maintenance',
        'Enterprise security',
        'Scalable infrastructure',
        'AI integration',
        'Advanced analytics',
        'Dedicated team'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, web development, mobile apps, and data analytics. Expert solutions for your business needs." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, web development, mobile development, data analytics, business intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">IT Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our expert IT solutions. From cloud migration to cybersecurity, 
            we provide end-to-end technology services that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="group border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              View Pricing
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="group inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Pricing Plans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular ? 'border-purple-500 scale-105' : 'border-slate-700 hover:border-purple-400'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                  <p className="text-gray-300 mt-4">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">IT Infrastructure?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert team help you build, secure, and scale your technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="group border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
