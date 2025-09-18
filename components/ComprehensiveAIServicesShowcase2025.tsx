"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain
  Zap
  Shield
  BarChart3
  Users
  Target,
  Rocket,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Database,
  Lightbulb,
  Settings,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const ComprehensiveAIServicesShowcase2025 = () => {
  const [activeServicesetActiveService] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const services = [
    {
      id: 'ai-automation',
      title: 'AI-Powered Business Automation',
      description: 'Transform your business operations with intelligent automation that learns and adapts to your needs.',
      icon: <Settings className="w-8 h-8" />,
      features: [
        'Workflow automation with 90% efficiency gain',
        'Intelligent document processing',
        'Predictive maintenance scheduling',
        'Automated customer service responses',
        'Real-time decision making support'
      ],
      benefits: [
        'Reduce operational costs by 60%',
        'Increase productivity by 300%',
        'Eliminate human error in routine tasks',
        '24/7 automated operations'
      ],
      pricing: 'Starting at $299/month',
      category: 'Automation',
      rating: 4.9,
      clients: 2500,
      link: '/services/ai-automation'
    },
    {
      id: 'predictive-analytics',
      title: 'Advanced Predictive Analytics',
      description: 'Harness the power of AI to predict future trendscustomer behaviorand business outcomes.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        '95% accurate market predictions',
        'Customer behavior analysis',
        'Sales forecasting with confidence intervals',
        'Risk assessment and mitigation',
        'Real-time data processing'
      ],
      benefits: [
        'Increase revenue by 40%',
        'Reduce risk exposure by 70%',
        'Optimize inventory management',
        'Improve customer retention'
      ],
      pricing: 'Starting at $499/month',
      category: 'Analytics',
      rating: 4.8,
      clients: 1800,
      link: '/services/predictive-analytics'
    },
    {
      id: 'ai-content-generation',
      title: 'Intelligent Content Generation',
      description: 'Create high-qualityengaging content at scale with our advanced AI content generation platform.',
      icon: <Lightbulb className="w-8 h-8" />,
      features: [
        'Multi-format content creation',
        'Brand voice consistency',
        'SEO optimization',
        'Multi-language support',
        'Content performance tracking'
      ],
      benefits: [
        'Reduce content creation time by 80%',
        'Increase engagement by 150%',
        'Maintain consistent brand voice',
        'Scale content production infinitely'
      ],
      pricing: 'Starting at $199/month',
      category: 'Content',
      rating: 4.7,
      clients: 3200,
      link: '/services/ai-content-generation'
    },
    {
      id: 'ai-security',
      title: 'AI-Powered Cybersecurity',
      description: 'Protect your business with advanced AI-driven security solutions that adapt to emerging threats.',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Behavioral analysis',
        'Zero-day attack prevention',
        'Compliance monitoring'
      ],
      benefits: [
        'Reduce security incidents by 95%',
        'Automated 24/7 monitoring',
        'Faster threat response times',
        'Compliance assurance'
      ],
      pricing: 'Starting at $799/month',
      category: 'Security',
      rating: 4.9,
      clients: 1200,
      link: '/services/ai-security'
    },
    {
      id: 'ai-customer-service',
      title: 'Intelligent Customer Service',
      description: 'Deliver exceptional customer experiences with AI-powered chatbots and support systems.',
      icon: <Users className="w-8 h-8" />,
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis',
        'Escalation management',
        'Performance analytics'
      ],
      benefits: [
        'Improve customer satisfaction by 85%',
        'Reduce support costs by 50%',
        '24/7 availability',
        'Faster resolution times'
      ],
      pricing: 'Starting at $149/month',
      category: 'Customer Service',
      rating: 4.6,
      clients: 4100,
      link: '/services/ai-customer-service'
    },
    {
      id: 'ai-data-analysis',
      title: 'Advanced Data Analysis',
      description: 'Unlock insights from your data with powerful AI-driven analysis and visualization tools.',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Automated data processing',
        'Pattern recognition',
        'Predictive modeling',
        'Interactive dashboards',
        'Custom reporting'
      ],
      benefits: [
        'Discover hidden insights',
        'Make data-driven decisions',
        'Reduce analysis time by 90%',
        'Improve accuracy of predictions'
      ],
      pricing: 'Starting at $399/month',
      category: 'Data Analysis',
      rating: 4.8,
      clients: 2200,
      link: '/services/ai-data-analysis'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>Comprehensive AI Services</span>
            <Award className="w-4 h-4 text-yellow-400" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
              AI-Powered Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive suite of AI services designed to accelerate growth
            improve efficiencyand drive innovation across every aspect of your business.
          </p>
        </motion.div>

        {/* Service Navigation */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((serviceindex) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeService === index
                  ? 'bg-white text-indigo-900 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {service.icon}
              <span className="ml-2">{service.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Service Details */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0x: 50 }}
          animate={{ opacity: 1x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Service Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
                  {services[activeService].icon}
                </div>
                <div>
                  <span className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
                    {services[activeService].category}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                {services[activeService].title}
              </h3>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {services[activeService].description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{services[activeService].rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold">{services[activeService].clients.toLocaleString()}+ clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">Proven ROI</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={services[activeService].link}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
                <button className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>

            {/* Features and Benefits */}
            <div className="space-y-8">
              {/* Features */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Key Features
                </h4>
                <div className="space-y-3">
                  {services[activeService].features.map((featureindex) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-400" />
                  Business Benefits
                </h4>
                <div className="space-y-3">
                  {services[activeService].benefits.map((benefitindex) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-300 text-sm">Starting from</span>
                    <div className="text-2xl font-bold text-white">{services[activeService].pricing}</div>
                  </div>
                  <Link
                    href="/pricing"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    <span>View Pricing</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Services Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((serviceindex) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02y: -5 }}
              className="group"
            >
              <Link href={service.link}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                          {service.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm font-semibold">{service.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="text-sm text-gray-300">
                      <span className="font-semibold text-white">{service.clients.toLocaleString()}+</span> clients
                    </div>
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of companies already using our AI services to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300 flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                <span>Explore All Services</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ComprehensiveAIServicesShowcase2025;
