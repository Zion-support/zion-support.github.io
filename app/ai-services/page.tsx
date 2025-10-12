import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Code, Smartphone, Brain, Eye, MessageCircle } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics and predictive modeling.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Data Visualization', 'Custom Reports'],
      color: 'from-blue-500 to-cyan-500',
      category: 'Analytics'
    },
    {
      icon: Zap,
      title: 'AI Process Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI systems that learn and adapt.',
      features: ['Workflow Automation', 'Document Processing', 'Data Entry Automation', 'Smart Scheduling'],
      color: 'from-purple-500 to-pink-500',
      category: 'Automation'
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbots & NLP',
      description: 'Build intelligent conversational AI that understands context and provides human-like responses.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Voice Integration', 'Sentiment Analysis'],
      color: 'from-green-500 to-emerald-500',
      category: 'Conversational AI'
    },
    {
      icon: Code,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, design, and multimedia generation.',
      features: ['Text Generation', 'Image Creation', 'Video Production', 'SEO Optimization'],
      color: 'from-orange-500 to-red-500',
      category: 'Content'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered threat detection, fraud prevention, and security monitoring.',
      features: ['Threat Detection', 'Fraud Prevention', 'Security Monitoring', 'Incident Response'],
      color: 'from-indigo-500 to-blue-500',
      category: 'Security'
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Extract insights from images and videos with advanced computer vision and image recognition.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Quality Control'],
      color: 'from-yellow-500 to-orange-500',
      category: 'Vision'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'AI Assessment',
      description: 'We analyze your business processes and identify AI opportunities for maximum impact.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'We create a comprehensive AI strategy tailored to your specific business goals and requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements AI solutions with minimal disruption to your existing operations.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor and optimize AI performance to ensure maximum ROI and business value.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including analytics, automation, chatbots, content generation, cybersecurity, and computer vision. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, chatbots, computer vision, AI analytics" />
      </Helmet>

      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  & Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations, enhance customer experiences, and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From machine learning to natural language processing, we provide comprehensive AI solutions that drive business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful AI implementation and maximum business value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Embrace AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you identify opportunities and implement solutions that transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free AI Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/it-services"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View IT Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;