'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Shield, TrendingUp, Users, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Target, BarChart, MessageSquare, Eye, Cloud, Database, Settings, Code, Smartphone, Lock, Globe, Cpu, Sparkles } from 'lucide-react';

const AIEnterpriseSolutionsPage: React.FC = () => {
  const enterpriseServices = [
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI analytics and predictive modeling',
      icon: BarChart,
      price: '$2,999/month',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboard creation',
        'Automated reporting',
        'Machine learning insights',
        'Data visualization tools'
      ],
      benefits: [
        '60% faster decision making',
        '45% increase in revenue',
        '80% reduction in manual reporting',
        '95% data accuracy'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'AI Customer Experience Platform',
      description: 'Revolutionize customer interactions with intelligent automation and personalization',
      icon: Users,
      price: '$3,499/month',
      features: [
        'AI-powered chatbots',
        'Personalized recommendations',
        'Sentiment analysis',
        'Customer journey mapping',
        'Multi-channel support',
        'Real-time insights'
      ],
      benefits: [
        '90% customer satisfaction increase',
        '70% reduction in response time',
        '50% increase in conversions',
        '85% automation rate'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Optimize your supply chain with AI-driven demand forecasting and inventory management',
      icon: Target,
      price: '$4,199/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Supplier risk assessment',
        'Route optimization',
        'Quality prediction',
        'Cost reduction analysis'
      ],
      benefits: [
        '40% inventory cost reduction',
        '65% improvement in forecast accuracy',
        '30% faster delivery times',
        '50% reduction in stockouts'
      ],
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'AI Financial Analytics',
      description: 'Advanced financial modeling and risk assessment with AI-powered insights',
      icon: TrendingUp,
      price: '$3,799/month',
      features: [
        'Risk assessment models',
        'Fraud detection',
        'Investment analysis',
        'Credit scoring',
        'Market prediction',
        'Compliance monitoring'
      ],
      benefits: [
        '95% fraud detection accuracy',
        '60% faster risk assessment',
        '40% reduction in financial losses',
        '85% compliance automation'
      ],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    },
    {
      title: 'AI HR & Talent Management',
      description: 'Streamline HR processes with intelligent recruitment and employee management',
      icon: Users,
      price: '$2,599/month',
      features: [
        'AI-powered recruitment',
        'Employee performance analysis',
        'Skills gap identification',
        'Retention prediction',
        'Training recommendations',
        'Diversity analytics'
      ],
      benefits: [
        '70% faster hiring process',
        '50% reduction in turnover',
        '80% improvement in candidate matching',
        '60% cost savings in recruitment'
      ],
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with AI-driven personalization and optimization',
      icon: MessageSquare,
      price: '$2,299/month',
      features: [
        'Campaign optimization',
        'Customer segmentation',
        'Content personalization',
        'A/B testing automation',
        'ROI prediction',
        'Cross-channel coordination'
      ],
      benefits: [
        '200% increase in engagement',
        '150% improvement in conversion rates',
        '80% reduction in manual work',
        '120% increase in ROI'
      ],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: '🏥',
      solutions: [
        'AI-powered diagnosis assistance',
        'Patient data analysis',
        'Drug discovery optimization',
        'Treatment recommendation systems'
      ],
      price: 'Starting at $5,999/month'
    },
    {
      industry: 'Finance',
      icon: '💰',
      solutions: [
        'Fraud detection systems',
        'Algorithmic trading',
        'Credit risk assessment',
        'Regulatory compliance automation'
      ],
      price: 'Starting at $4,999/month'
    },
    {
      industry: 'Manufacturing',
      icon: '🏭',
      solutions: [
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Production efficiency analysis'
      ],
      price: 'Starting at $3,999/month'
    },
    {
      industry: 'Retail',
      icon: '🛍️',
      solutions: [
        'Demand forecasting',
        'Personalized recommendations',
        'Inventory optimization',
        'Customer behavior analysis'
      ],
      price: 'Starting at $2,999/month'
    },
    {
      industry: 'Education',
      icon: '🎓',
      solutions: [
        'Personalized learning paths',
        'Student performance analysis',
        'Content recommendation',
        'Automated grading systems'
      ],
      price: 'Starting at $1,999/month'
    },
    {
      industry: 'Real Estate',
      icon: '🏠',
      solutions: [
        'Property valuation models',
        'Market trend analysis',
        'Lead scoring systems',
        'Investment opportunity identification'
      ],
      price: 'Starting at $2,499/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your enterprise with AI-powered solutions. Advanced business intelligence, customer experience, supply chain optimization, and more." />
        <meta name="keywords" content="AI enterprise solutions, business intelligence, customer experience, supply chain optimization, AI consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-enterprise-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Enterprise Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Transform your enterprise with cutting-edge AI solutions designed for large-scale business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Enterprise Quote
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Enterprise Services */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Enterprise AI Solutions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {enterpriseServices.map((service, index) => (
                <div key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${service.bgColor}`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mr-6`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Proven Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className={`text-2xl font-bold ${service.color} neon-text`}>
                      {service.price}
                    </div>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className="cyber-button px-6 py-3 font-medium transition-all duration-300 hover:scale-105"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Industry-Specific Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((solution, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">{solution.industry}</div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{solution.industry}</h3>
                  <ul className="space-y-2 mb-6">
                    {solution.solutions.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2">{solution.price}</div>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${solution.industry} AI Solutions`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Contact our enterprise AI specialists to discuss your specific needs and get a customized solution proposal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEnterpriseSolutionsPage;
