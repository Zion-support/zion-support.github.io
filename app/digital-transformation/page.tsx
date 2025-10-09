import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, Zap, Brain, Target, Shield, Clock, Users, ArrowRight } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const DigitalTransformationPage: React.FC = () => {
  const transformationServices = [
    {
      title: 'Digital Strategy Development',
      description: 'Comprehensive digital transformation strategy to modernize your business processes and technology infrastructure.',
      icon: '🎯',
      price: '$3,500/month',
      features: [
        'Digital Readiness Assessment',
        'Transformation Roadmap',
        'Technology Architecture',
        'Change Management Plan',
        'ROI Projections',
        'Implementation Timeline'
      ],
      benefits: [
        'Increase operational efficiency by 50%',
        'Reduce costs by 30-40%',
        'Improve customer experience',
        'Future-proof your business'
      ],
      marketPrice: '$7,000-15,000/month',
      category: 'Strategic Planning',
      technologies: ['Cloud Computing', 'AI/ML', 'Automation', 'Data Analytics', 'Mobile Solutions', 'IoT'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Process Automation & Optimization',
      description: 'Automate and optimize business processes using AI and advanced technologies to improve efficiency and accuracy.',
      icon: '⚡',
      price: '$2,500/month',
      features: [
        'Process Analysis & Mapping',
        'Automation Implementation',
        'Workflow Optimization',
        'Integration Management',
        'Performance Monitoring',
        'Continuous Improvement'
      ],
      benefits: [
        'Reduce manual work by 80%',
        'Improve accuracy by 95%',
        'Accelerate process completion by 70%',
        'Enable 24/7 operations'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Process Automation',
      technologies: ['RPA', 'AI/ML', 'Workflow Engines', 'API Integration', 'Cloud Platforms', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Implement advanced analytics and business intelligence solutions to enable data-driven decision making.',
      icon: '📊',
      price: '$2,000/month',
      features: [
        'Data Strategy Development',
        'Analytics Platform Setup',
        'Dashboard Creation',
        'Predictive Analytics',
        'Data Governance',
        'Training & Support'
      ],
      benefits: [
        'Improve decision accuracy by 60%',
        'Reduce decision time by 50%',
        'Identify new opportunities',
        'Optimize business performance'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Data Analytics',
      technologies: ['Business Intelligence', 'Data Warehousing', 'Machine Learning', 'Visualization Tools', 'Cloud Analytics', 'Data Lakes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const industries = [
    {
      title: 'Manufacturing',
      description: 'Industry 4.0 transformation with smart manufacturing and IoT',
      icon: '🏭',
      results: ['40% efficiency gain', '30% cost reduction', '50% quality improvement']
    },
    {
      title: 'Healthcare',
      description: 'Digital health solutions and patient care optimization',
      icon: '🏥',
      results: ['60% process improvement', '45% cost savings', '80% patient satisfaction']
    },
    {
      title: 'Financial Services',
      description: 'Digital banking and fintech transformation',
      icon: '🏦',
      results: ['70% digital adoption', '50% operational efficiency', '90% customer satisfaction']
    },
    {
      title: 'Retail & E-commerce',
      description: 'Omnichannel retail and customer experience transformation',
      icon: '🛒',
      results: ['80% online growth', '60% customer retention', '100% digital presence']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services to modernize your business. Increase efficiency by 50%, reduce costs by 30-40%, and future-proof your organization." />
        <meta name="keywords" content="digital transformation, business modernization, process automation, data analytics, digital strategy, technology consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/digital-transformation" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Transformation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with comprehensive digital solutions that modernize processes, enhance efficiency, and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Digital Transformation Services</h2>
              <p className="text-xl text-gray-300">Comprehensive solutions to modernize your business</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {transformationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-cyan-400">${service.price.replace('$', '').replace('/month', '')}</span>
                      <span className="text-sm text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400 line-through">Market: {service.marketPrice}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="tel:+13024640950"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Transformations</h2>
              <p className="text-xl text-gray-300">See how digital transformation impacts different industries</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-3xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-cyan-400 flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders who have successfully transformed their businesses with our digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default DigitalTransformationPage;