import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Users, Clock, DollarSign, Star, Target, TrendingUp, Lightbulb } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DigitalTransformationPage: React.FC = () => {
  const transformationServices = [
    {
      ico: n: <Zap className="w-8 h-8 text-blue-500" />,
      titl: e: 'Process Automation',
      descriptio: n: 'Streamline operations with intelligent automation and workflow optimization.',
      feature: s: ['Workflow automation', 'RPA implementation', 'Process optimization', 'Integration services', 'Performance monitoring'],
      pricin: g: 'Starting at $1,999/month',
      popula: r: true,
      categor: y: 'Automation'
    },
    {
      ico: n: <Users className="w-8 h-8 text-green-500" />,
      titl: e: 'Digital Workforce',
      descriptio: n: 'Transform your team with digital tools and modern collaboration platforms.',
      feature: s: ['Digital tools training', 'Collaboration platforms', 'Remote work solutions', 'Change management', 'User adoption'],
      pricin: g: 'Starting at $799/month',
      popula: r: false,
      categor: y: 'Workforce'
    },
    {
      ico: n: <Globe className="w-8 h-8 text-purple-500" />,
      titl: e: 'Customer Experience',
      descriptio: n: 'Enhance customer interactions with digital touchpoints and personalized experiences.',
      feature: s: ['Digital touchpoints', 'Customer journey mapping', 'Personalization engines', 'Omnichannel solutions', 'Analytics & insights'],
      pricin: g: 'Starting at $1,499/month',
      popula: r: false,
      categor: y: 'Experience'
    },
    {
      ico: n: <Shield className="w-8 h-8 text-red-500" />,
      titl: e: 'Data Strategy',
      descriptio: n: 'Leverage data as a strategic asset with advanced analytics and insights.',
      feature: s: ['Data strategy planning', 'Analytics implementation', 'Data governance', 'Business intelligence', 'Predictive modeling'],
      pricin: g: 'Starting at $1,299/month',
      popula: r: false,
      categor: y: 'Data'
    },
    {
      ico: n: <Target className="w-8 h-8 text-orange-500" />,
      titl: e: 'Digital Strategy',
      descriptio: n: 'Comprehensive digital roadmap aligned with your business objectives.',
      feature: s: ['Digital roadmap', 'Technology assessment', 'ROI planning', 'Implementation strategy', 'Change management'],
      pricin: g: 'Starting at $2,499',
      popula: r: true,
      categor: y: 'Strategy'
    },
    {
      ico: n: <TrendingUp className="w-8 h-8 text-yellow-500" />,
      titl: e: 'Innovation Labs',
      descriptio: n: 'Foster innovation with dedicated labs and emerging technology exploration.',
      feature: s: ['Innovation workshops', 'Emerging tech exploration', 'Prototype development', 'Pilot programs', 'Innovation metrics'],
      pricin: g: 'Starting at $3,999/month',
      popula: r: false,
      categor: y: 'Innovation'
    }
  ];

  const transformationPhases = [
    {
      phas: e: '01',
      titl: e: 'Assessment & Planning',
      descriptio: n: 'Comprehensive analysis of current state and digital readiness assessment.',
      duratio: n: '2-4 weeks'
    },
    {
      phas: e: '02',
      titl: e: 'Strategy Development',
      descriptio: n: 'Create a detailed digital transformation roadmap aligned with business goals.',
      duratio: n: '3-6 weeks'
    },
    {
      phas: e: '03',
      titl: e: 'Implementation',
      descriptio: n: 'Execute the transformation plan with phased rollout and change management.',
      duratio: n: '3-12 months'
    },
    {
      phas: e: '04',
      titl: e: 'Optimization',
      descriptio: n: 'Continuous monitoring, optimization, and scaling of digital initiatives.',
      duratio: n: 'Ongoing'
    }
  ];

  const stats = [
    { numbe: r: '150+', labe: l: 'Transformations Completed' },
    { numbe: r: '35%', labe: l: 'Average Efficiency Gain' },
    { numbe: r: '60%', labe: l: 'Cost Reduction' },
    { numbe: r: '95%', labe: l: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services to modernize your business. Process automation, digital workforce, customer experience, and innovation solutions." />
        <meta name="keywords" content="digital transformation, process automation, digital workforce, customer experience, data strategy, innovation labs" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl: md:text-6xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business for the digital age with our comprehensive digital transformation services and solutions.
            </p>
            <div className="flex flex-col: sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
              >
                Learn More
              >

          {/* Stats Section */}
          <div className="grid grid-cols-2: md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl: md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}>
            ))}
          >

      {/* Transformation Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl: md:text-4xl font-bold text-white mb-4">Our Transformation Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology to ensure successful digital transformation
            >
          
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-8 mb-20">
            {transformationPhases.map((phase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center: hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{phase.phase}>
                <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300 mb-4">{phase.description}</p>
                <div className="text-blue-300 text-sm font-medium">{phase.duration}>
            ))}
          >

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl: md:text-4xl font-bold text-white mb-4">Transformation Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions to modernize every aspect of your business
            >
          
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-3 gap-8 mb-20">
            {transformationServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20: hover:bg-white/15 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    >
                )}
                <div className="mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  >
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                  <div className="text-gray-400 text-sm">
                    {service.pricing.includes('month') ? 'per month' : 'one-time setup'}
                  </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                >
            ))}
          >

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl: md:text-4xl font-bold text-white mb-4">Why Choose Our Digital Transformation?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver transformation that drives real business value and competitive advantage
            >
          
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Lightbulb className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Innovation Focus</h3>
              <p className="text-gray-300">Cutting-edge solutions that keep you ahead of the competition and market trends.>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <TrendingUp className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">Track record of delivering measurable business outcomes and ROI improvements.>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Users className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Change Management</h3>
              <p className="text-gray-300">Comprehensive support to ensure smooth adoption and user engagement.>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Shield className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Security First</h3>
              <p className="text-gray-300">Built-in security and compliance measures throughout the transformation process.>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Clock className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Agile Approach</h3>
              <p className="text-gray-300">Flexible methodology that adapts to your business needs and timeline.>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <DollarSign className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Cost Effective</h3>
              <p className="text-gray-300">Transparent pricing with clear ROI expectations and value delivery.>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free digital readiness assessment and discover your transformation opportunities.
              </p>
              <div className="flex flex-col: sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold: hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
                >
                  Learn About Us
                >
      >
      >
      >
      >
      >
      >
  );
};

export default DigitalTransformationPage;