import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      ico: n: <Cloud className="w-8 h-8 text-blue-500" />,
      titl: e: 'Cloud Migration',
      descriptio: n: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      feature: s: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance'],
      pricin: g: 'Starting at $2,500',
      lin: k: '/cloud-migration',
      popula: r: true,
      duratio: n: '2-4 weeks'
    },
    {
      ico: n: <Shield className="w-8 h-8 text-green-500" />,
      titl: e: 'Cybersecurity Solutions',
      descriptio: n: 'Comprehensive security services to protect your business from cyber threats and data breaches.',
      feature: s: ['Security audits', 'Penetration testing', 'Firewall configuration', 'Incident response'],
      pricin: g: 'Starting at $1,500/month',
      lin: k: '/cybersecurity',
      popula: r: false,
      duratio: n: 'Ongoing'
    },
    {
      ico: n: <Code className="w-8 h-8 text-purple-500" />,
      titl: e: 'Custom Development',
      descriptio: n: 'Bespoke software solutions tailored to your specific business requirements and workflows.',
      feature: s: ['Web applications', 'Mobile apps', 'API development', 'Database design'],
      pricin: g: 'Starting at $5,000',
      lin: k: '/custom-development',
      popula: r: false,
      duratio: n: '4-12 weeks'
    },
    {
      ico: n: <Database className="w-8 h-8 text-orange-500" />,
      titl: e: 'Data Analytics',
      descriptio: n: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      feature: s: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'Real-time reporting'],
      pricin: g: 'Starting at $2,000/month',
      lin: k: '/data-analytics',
      popula: r: false,
      duratio: n: '2-6 weeks'
    },
    {
      ico: n: <Smartphone className="w-8 h-8 text-pink-500" />,
      titl: e: 'Mobile Development',
      descriptio: n: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      feature: s: ['iOS development', 'Android development', 'Cross-platform apps', 'App store deployment'],
      pricin: g: 'Starting at $8,000',
      lin: k: '/mobile-development',
      popula: r: false,
      duratio: n: '6-16 weeks'
    },
    {
      ico: n: <Users className="w-8 h-8 text-indigo-500" />,
      titl: e: 'IT Consulting',
      descriptio: n: 'Strategic IT consulting to help you make informed technology decisions and optimize your infrastructure.',
      feature: s: ['Technology assessment', 'Strategic planning', 'Vendor selection', 'Implementation guidance'],
      pricin: g: 'Starting at $150/hour',
      lin: k: '/it-consulting',
      popula: r: false,
      duratio: n: 'As needed'
    }
  ];

  const benefits = [
    {
      ico: n: <CheckCircle className="w-6 h-6 text-green-500" />,
      titl: e: '24/7 Support',
      descriptio: n: 'Round-the-clock technical support and monitoring to ensure your systems run smoothly.'
    },
    {
      ico: n: <CheckCircle className="w-6 h-6 text-blue-500" />,
      titl: e: 'Scalable Solutions',
      descriptio: n: 'IT solutions that grow with your business and adapt to changing requirements.'
    },
    {
      ico: n: <CheckCircle className="w-6 h-6 text-purple-500" />,
      titl: e: 'Cost Effective',
      descriptio: n: 'Optimize your IT spending with efficient solutions and transparent pricing.'
    },
    {
      ico: n: <CheckCircle className="w-6 h-6 text-orange-500" />,
      titl: e: 'Expert Team',
      descriptio: n: 'Certified professionals with years of experience in enterprise IT solutions.'
    }
  ];

  const stats = [
    { numbe: r: '500+', labe: l: 'Projects Completed' },
    { numbe: r: '99.9%', labe: l: 'Uptime Guarantee' },
    { numbe: r: '50+', labe: l: 'Expert Team Members' },
    { numbe: r: '24/7', labe: l: 'Support Available' }
  ];

  const technologies = [
    { name: 'AWS', ico: n: '☁️' },
    { name: 'Azure', ico: n: '🔵' },
    { name: 'Google Cloud', ico: n: '🌐' },
    { name: 'Docker', ico: n: '🐳' },
    { name: 'Kubernetes', ico: n: '⚙️' },
    { name: 'React', ico: n: '⚛️' },
    { name: 'Node.js', ico: n: '🟢' },
    { name: 'Python', ico: n: '🐍' },
    { name: 'Java', ico: n: '☕' },
    { name: 'Blockchain', ico: n: '⛓️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, and mobile development. Expert solutions for your business needs." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, mobile development, blockchain solutions" />
      </Helmet>
      
      <section className="pt-20 px-4 py-12: sm:py-16: lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl: sm:text-4xl: md:text-5xl: lg:text-6xl font-bold text-white mb-6">
              Professional IT Services
            </h1>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Comprehensive IT solutions to accelerate your digital transformation and drive business growth.
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, and data analytics. Transform your business with our expert IT solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, custom development, data analytics, mobile development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12: sm:py-16: lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12: sm:mb-16">
            <h1 className="text-3xl: sm:text-4xl: md:text-5xl: lg:text-6xl font-bold text-white mb-4: sm:mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6: sm:mb-8 px-4">
              Comprehensive IT services designed to modernize your infrastructure, enhance security, and drive digital transformation.
            </p>
            <div className="flex flex-col: sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
              >
                Explore AI Services
              >

          <div className="grid grid-cols-2: sm:grid-cols-4 gap-4: sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-2">{stat.number}</div>
          {/* Stats Section */}
          <div className="grid grid-cols-2: md:grid-cols-4 gap-4: sm:gap-6: lg:gap-8 mb-12: sm:mb-16: lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-1: sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs: sm:text-sm">{stat.label}>
            ))}
          </div>

      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive technology solutions designed to meet your business needs
            >
          
          <div className="grid grid-cols-1: sm:grid-cols-2: lg:grid-cols-3 gap-6: sm:gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20: hover:bg-white/15 transition-all duration-300 group">
      {/* IT Services Section */}
      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12: sm:mb-16">
            <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              End-to-end IT solutions to power your digital transformation
            >
          
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-3 gap-6: sm:gap-8 mb-12: sm:mb-16: lg:mb-20">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20: hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                )}
                <div className="mb-4 group-hove: r:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hove: r:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
                  <div className="text-sm text-gray-400">{service.duration}>
                <div className="text-sm text-gray-400 mb-6">Duratio: n: {service.duration}</div>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                >
            ))}
          </div>

      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4 px-4">Why Choose Us?</h2>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We deliver exceptional results with our proven expertise and commitment to excellence
            >
          
          <div className="grid grid-cols-1: md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}>
            ))}
          >

      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6: sm:p-8: lg:p-12">
              <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg: sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT services can help your business grow and succeed.
      {/* Benefits Section */}
      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12: sm:mb-16">
            <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the difference with our comprehensive IT solutions
            >
          
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-6: sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}>
            ))}
          >

      {/* CTA Section */}
      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl: sm:rounded-3xl p-6: sm:p-8: lg:p-12">
              <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4">Ready to Modernize Your IT Infrastructure?</h2>
              <p className="text-lg: sm:text-xl text-white/90 mb-6: sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT services can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col: sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold: hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
                >
                  View All Services
                  Get Free Consultation
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
                >
                  Explore AI Services
                >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;

}}