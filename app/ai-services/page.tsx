'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, TrendingUp, Target, FileText, Search, Phone, CheckCircle, ArrowRight, Star, Clock, Globe, Database, Users, Settings } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Trend analysis']
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Intelligent security solutions powered by machine learning algorithms.',
      benefits: ['Threat detection', 'Anomaly detection', 'Automated response', 'Security monitoring']
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for text analysis and language understanding.',
      benefits: ['Text analysis', 'Sentiment analysis', 'Language translation', 'Content generation']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image and video analysis using cutting-edge computer vision technology.',
      benefits: ['Image recognition', 'Object detection', 'Video analysis', 'Visual search']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Intelligent automation solutions to streamline business processes.',
      benefits: ['Workflow automation', 'Task optimization', 'Process intelligence', 'Efficiency gains']
    }
  ];

  const services = [
    {
      title: 'AI Strategy Consulting',
      description: 'Develop a comprehensive AI strategy tailored to your business needs.',
      icon: <Target className="w-8 h-8 text-blue-500" />,
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation planning']
    },
    {
      title: 'Machine Learning Development',
      description: 'Custom ML models and algorithms designed for your specific use cases.',
      icon: <Brain className="w-8 h-8 text-green-500" />,
      features: ['Custom model development', 'Data preprocessing', 'Model training', 'Performance optimization']
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems.',
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      features: ['System integration', 'API development', 'Data pipeline setup', 'Testing & validation']
    },
    {
      title: 'AI Training & Support',
      description: 'Comprehensive training and ongoing support for your AI initiatives.',
      icon: <Users className="w-8 h-8 text-orange-500" />,
      features: ['Team training', 'Documentation', 'Best practices', 'Ongoing support']
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      title: 'Medical Diagnosis AI',
      description: 'AI-powered diagnostic tools that help healthcare professionals make accurate diagnoses.',
      icon: <Shield className="w-6 h-6 text-red-500" />,
      benefits: ['Improved accuracy', 'Faster diagnosis', 'Reduced errors', 'Better patient outcomes']
    },
    {
      industry: 'Finance',
      title: 'Fraud Detection',
      description: 'Advanced AI systems that detect fraudulent transactions in real-time.',
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      benefits: ['Real-time detection', 'Reduced false positives', 'Cost savings', 'Enhanced security']
    },
    {
      industry: 'Retail',
      title: 'Personalized Recommendations',
      description: 'AI-driven recommendation engines that enhance customer experience.',
      icon: <Star className="w-6 h-6 text-blue-500" />,
      benefits: ['Increased sales', 'Better customer experience', 'Higher engagement', 'Improved retention']
    },
    {
      industry: 'Manufacturing',
      title: 'Predictive Maintenance',
      description: 'AI-powered systems that predict equipment failures before they occur.',
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      benefits: ['Reduced downtime', 'Lower maintenance costs', 'Improved efficiency', 'Extended equipment life']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      company: 'MedTech Solutions',
      role: 'Chief Medical Officer',
      content: 'The AI diagnostic tools have revolutionized our patient care. We can now make more accurate diagnoses faster than ever before.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'FinanceFlow Inc.',
      role: 'CTO',
      content: 'Our fraud detection system has saved us millions in potential losses. The AI accuracy is remarkable.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      company: 'RetailMax',
      role: 'VP of Technology',
      content: 'The personalized recommendation engine has increased our sales by 40%. Our customers love the personalized experience.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. Machine learning, natural language processing, computer vision, and AI strategy consulting." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, NLP, computer vision, AI consulting, AI development" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI solutions for modern businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. From machine learning to natural language processing, we deliver AI that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Explore AI Solutions
            </button>
            <button className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our AI Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest AI technologies to deliver intelligent solutions that drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end AI services to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  {service.icon}
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">AI in Action</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI is transforming industries and creating new opportunities for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {useCase.icon}
                  <span className="text-sm text-blue-400 font-semibold">{useCase.industry}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI solutions are helping businesses achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI can transform your business. Schedule a consultation with our AI experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              <Brain className="w-5 h-5" />
              Start AI Journey
            </button>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;