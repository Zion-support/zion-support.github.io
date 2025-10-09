import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Eye, 
  MessageSquare, 
  BarChart, 
  Shield, 
  Code, 
  Database,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models tailored to your specific business needs and data patterns.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Anomaly Detection', 'Recommendation Systems'],
      price: 'Starting at $2,500/month'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      price: 'Starting at $1,800/month'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for automation and quality control.',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Quality Control'],
      price: 'Starting at $2,200/month'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting to optimize business decisions.',
      features: ['Sales Forecasting', 'Risk Assessment', 'Demand Planning', 'Performance Optimization'],
      price: 'Starting at $1,500/month'
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Intelligent data processing and transformation for better insights.',
      features: ['Data Cleaning', 'ETL Pipelines', 'Real-time Processing', 'Data Integration'],
      price: 'Starting at $1,200/month'
    },
    {
      icon: Code,
      title: 'AI Development',
      description: 'Custom AI solutions and integration with existing systems.',
      features: ['Custom AI Models', 'API Development', 'System Integration', 'Performance Optimization'],
      price: 'Starting at $3,000/month'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to save time and resources.'
    },
    {
      icon: BarChart,
      title: 'Better Insights',
      description: 'Gain deeper understanding of your data and business patterns.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'AI-powered security solutions to protect your data and systems.'
    },
    {
      icon: Users,
      title: 'Improved Customer Experience',
      description: 'Personalized experiences and faster response times for your customers.'
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Optimization',
      description: 'Increased conversion rates by 35% using AI-powered recommendation engine.',
      industry: 'Retail',
      results: ['35% increase in conversion', '25% boost in average order value', '40% reduction in cart abandonment']
    },
    {
      title: 'Manufacturing Quality Control',
      description: 'Reduced defect rates by 60% with computer vision quality inspection.',
      industry: 'Manufacturing',
      results: ['60% reduction in defects', '50% faster inspection process', '30% cost savings']
    },
    {
      title: 'Financial Risk Assessment',
      description: 'Improved loan approval accuracy by 45% using predictive analytics.',
      industry: 'Finance',
      results: ['45% improvement in accuracy', '30% reduction in bad loans', '25% faster processing']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Machine Learning & AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics. Starting at $1,200/month." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, predictive analytics, AI development" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we deliver AI that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Services</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Comprehensive AI solutions designed to solve your most complex business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Real results from our AI implementations across various industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="text-cyan-400 font-semibold">{study.industry}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Development Process</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                A systematic approach to delivering AI solutions that deliver real business value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Data Analysis</h3>
                <p className="text-gray-300">Analyze your data to identify AI opportunities and requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Model Development</h3>
                <p className="text-gray-300">Develop and train AI models tailored to your specific needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Integration</h3>
                <p className="text-gray-300">Seamlessly integrate AI solutions into your existing systems.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Optimization</h3>
                <p className="text-gray-300">Continuously monitor and optimize AI performance for maximum value.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your AI needs and create a custom solution that drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your AI Journey
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;