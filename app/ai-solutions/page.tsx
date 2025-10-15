import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Star, 
  Users, 
  Shield, 
  Clock, 
  TrendingUp,
  BarChart3,
  Database,
  Smartphone,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  Zap,
  Award,
  Phone,
  Mail
} from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Chatbot Enterprise',
      description: 'Advanced conversational AI for customer service and support',
      price: '$299/mo',
      features: [
        'Natural Language Processing',
        'Multi-channel Support',
        'Custom Training',
        'Analytics Dashboard',
        'CRM Integration',
        '24/7 Availability'
      ],
      popular: true
    },
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence and predictive analytics',
      price: '$349/mo',
      features: [
        'Predictive Analytics',
        'Custom Dashboards',
        'Real-time Data',
        'Automated Reports',
        'Data Integration',
        'Machine Learning Models'
      ],
      popular: true
    },
    {
      icon: Database,
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis solutions',
      price: '$399/mo',
      features: [
        'Object Detection',
        'Facial Recognition',
        'Quality Control',
        'Real-time Processing',
        'Image Classification',
        'OCR Capabilities'
      ],
      popular: false
    },
    {
      icon: Zap,
      title: 'AI Automation Platform',
      description: 'End-to-end business process automation',
      price: '$499/mo',
      features: [
        'Workflow Automation',
        'RPA Integration',
        'Custom Bots',
        'Document Processing',
        'Email Automation',
        'API Integration'
      ],
      popular: false
    }
  ];

  const industries = [
    {
      title: 'Healthcare',
      description: 'AI-powered medical diagnosis and patient care',
      icon: '🏥',
      benefits: ['Medical Imaging', 'Drug Discovery', 'Patient Monitoring', 'Diagnostic Assistance']
    },
    {
      title: 'Finance',
      description: 'Fraud detection and algorithmic trading',
      icon: '💰',
      benefits: ['Risk Assessment', 'Fraud Detection', 'Algorithmic Trading', 'Credit Scoring']
    },
    {
      title: 'E-commerce',
      description: 'Personalized recommendations and customer insights',
      icon: '🛒',
      benefits: ['Product Recommendations', 'Price Optimization', 'Customer Analytics', 'Inventory Management']
    },
    {
      title: 'Manufacturing',
      description: 'Predictive maintenance and quality control',
      icon: '🏭',
      benefits: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Process Automation']
    }
  ];

  const benefits = [
    'Increased Efficiency',
    'Cost Reduction',
    'Better Decision Making',
    '24/7 Automation',
    'Scalable Solutions',
    'Competitive Advantage'
  ];

  const stats = [
    { number: '40%', label: 'Efficiency Increase' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '95%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Availability' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including chatbots, analytics, computer vision, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI solutions, artificial intelligence, machine learning, chatbots, analytics, computer vision, automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI solutions. From chatbots to analytics, 
              we provide comprehensive artificial intelligence services that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                Get AI Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered solutions designed to solve specific business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 hover:bg-slate-800/70 rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 group relative ${
                service.popular ? 'ring-2 ring-purple-500' : 'border-slate-700/50 hover:border-cyan-500/50'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-3xl font-bold text-purple-400">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link
                    to={`/ai-solutions/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are tailored for specific industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group bg-slate-700/50 hover:bg-slate-700/70 p-6 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                  {industry.description}
                </p>
                <ul className="space-y-1 text-sm text-gray-400">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions deliver measurable results and provide a competitive advantage for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you choose the right solutions and implement them successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Get AI Assessment
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AISolutionsPage;