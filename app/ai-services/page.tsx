'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Zap, BarChart3, Eye, Shield, FileText, Users, DollarSign, Heart, Target, Settings, Globe, Mic, Database, Lock, Calendar } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis for 24/7 customer support.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions']
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency.',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation']
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries.',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction']
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time.',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection', 'Automated Alerts'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready']
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing materials.',
      features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Brand Voice Customization'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing']
    },
    {
      icon: Users,
      title: 'AI Customer Service',
      description: 'Intelligent customer service solutions with automated ticket routing and sentiment analysis.',
      features: ['Automated Ticket Routing', 'Sentiment Analysis', 'Multi-channel Support', 'Live Agent Handoff', 'Performance Analytics'],
      price: 'Starting at $249/month',
      marketPrice: '$400-1800/month',
      benefits: ['Improved response times', 'Better customer satisfaction', 'Reduced agent workload', '24/7 availability']
    },
    {
      icon: DollarSign,
      title: 'AI Financial Analysis',
      description: 'Advanced financial modeling and risk assessment using machine learning algorithms.',
      features: ['Risk Assessment', 'Financial Modeling', 'Market Analysis', 'Credit Scoring', 'Fraud Prevention'],
      price: 'Starting at $699/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Improved risk management', 'Better investment decisions', 'Reduced financial losses', 'Compliance automation']
    },
    {
      icon: Heart,
      title: 'AI Healthcare Diagnostics',
      description: 'Medical image analysis and diagnostic assistance using advanced computer vision and machine learning.',
      features: ['Medical Image Analysis', 'Diagnostic Assistance', 'Patient Monitoring', 'Drug Discovery', 'Treatment Optimization'],
      price: 'Starting at $999/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved diagnostic accuracy', 'Faster diagnosis', 'Reduced medical errors', 'Cost-effective healthcare']
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with personalized content and automated customer journey optimization.',
      features: ['Personalized Campaigns', 'Customer Segmentation', 'A/B Testing', 'Lead Scoring', 'ROI Optimization'],
      price: 'Starting at $399/month',
      marketPrice: '$600-2500/month',
      benefits: ['Higher conversion rates', 'Personalized experiences', 'Automated optimization', 'Better ROI']
    },
    {
      icon: Settings,
      title: 'AI Predictive Maintenance',
      description: 'Predictive maintenance solutions for industrial equipment using IoT sensors and machine learning.',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-4000/month',
      benefits: ['Reduced downtime', 'Lower maintenance costs', 'Extended equipment life', 'Improved efficiency']
    },
    {
      icon: Globe,
      title: 'AI Language Translation',
      description: 'Real-time language translation and localization services powered by advanced neural networks.',
      features: ['Real-time Translation', 'Multi-language Support', 'Context Understanding', 'Voice Translation', 'Document Translation'],
      price: 'Starting at $149/month',
      marketPrice: '$250-1000/month',
      benefits: ['Global communication', 'Reduced language barriers', 'Faster localization', 'Cost-effective translation']
    },
    {
      icon: Mic,
      title: 'AI Voice Recognition',
      description: 'Advanced speech-to-text and voice command solutions for various business applications.',
      features: ['Speech-to-Text', 'Voice Commands', 'Speaker Identification', 'Noise Cancellation', 'Multi-language Support'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Hands-free operation', 'Improved accessibility', 'Faster data entry', 'Enhanced user experience']
    },
    {
      icon: Database,
      title: 'AI Data Processing',
      description: 'Intelligent data cleaning, validation, and processing using machine learning algorithms.',
      features: ['Data Cleaning', 'Validation Rules', 'Duplicate Detection', 'Data Enrichment', 'Quality Scoring'],
      price: 'Starting at $199/month',
      marketPrice: '$350-1500/month',
      benefits: ['Improved data quality', 'Reduced manual work', 'Better insights', 'Cost savings']
    },
    {
      icon: Lock,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security monitoring using artificial intelligence and machine learning.',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Vulnerability Scanning', 'Security Analytics'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Enhanced security', 'Faster threat detection', 'Reduced false positives', '24/7 monitoring']
    },
    {
      icon: Calendar,
      title: 'AI Scheduling Assistant',
      description: 'Intelligent scheduling and calendar management with automated meeting optimization.',
      features: ['Smart Scheduling', 'Meeting Optimization', 'Conflict Resolution', 'Time Zone Management', 'Resource Allocation'],
      price: 'Starting at $99/month',
      marketPrice: '$150-600/month',
      benefits: ['Improved productivity', 'Reduced scheduling conflicts', 'Time optimization', 'Better resource utilization']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, data analytics, computer vision, and machine learning solutions. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, data analytics, computer vision, AI automation, predictive analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From chatbots to predictive analytics, we deliver AI that drives real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        {service.marketPrice && (
                          <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact our AI experts for a free consultation and discover how our AI services can drive your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free AI Consultation
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;