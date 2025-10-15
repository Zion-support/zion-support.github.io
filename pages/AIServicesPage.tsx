import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  BarChart3, 
  Code, 
  MessageCircle, 
  Image, 
  FileText, 
  Shield, 
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Target,
  Rocket,
  Users,
  Clock,
  DollarSign
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-analytics-dashboard-pro',
      name: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time analytics',
      price: '$299/month',
      features: [
        'Real-time Data Visualization',
        'AI-Powered Predictions',
        'Custom Dashboard Builder',
        'API Integration',
        'Mobile App Access',
        '24/7 Support'
      ],
      benefits: [
        'Increase decision speed by 40%',
        'Reduce manual reporting by 80%',
        'Improve forecast accuracy by 60%'
      ],
      popular: true,
      rating: 4.9,
      clients: 150,
      icon: BarChart3,
      category: 'Analytics'
    },
    {
      id: 'ai-content-generator-studio',
      name: 'AI Content Generator Studio',
      description: 'Automated content creation platform with multi-language support and brand voice customization',
      price: '$199/month',
      features: [
        'Multi-language Support',
        'SEO Optimization',
        'Brand Voice Training',
        'Bulk Content Generation',
        'Plagiarism Detection',
        'Content Calendar Integration'
      ],
      benefits: [
        'Save 70% content creation time',
        'Increase SEO rankings by 50%',
        'Maintain consistent brand voice'
      ],
      popular: false,
      rating: 4.8,
      clients: 120,
      icon: FileText,
      category: 'Content'
    },
    {
      id: 'ai-customer-support-suite',
      name: 'AI Customer Support Suite',
      description: 'Intelligent customer service automation with natural language processing and sentiment analysis',
      price: '$399/month',
      features: [
        'Natural Language Processing',
        'Sentiment Analysis',
        'Multi-channel Support',
        'Knowledge Base Integration',
        'Escalation Management',
        'Performance Analytics'
      ],
      benefits: [
        'Reduce response time by 90%',
        'Increase customer satisfaction by 35%',
        'Handle 80% queries automatically'
      ],
      popular: true,
      rating: 4.9,
      clients: 200,
      icon: MessageCircle,
      category: 'Customer Service'
    },
    {
      id: 'ai-code-assistant-pro',
      name: 'AI Code Assistant Pro',
      description: 'Advanced code generation and review platform with intelligent debugging and optimization suggestions',
      price: '$249/month',
      features: [
        'Code Generation',
        'Bug Detection & Fixes',
        'Code Review Automation',
        'Performance Optimization',
        'Security Scanning',
        'Documentation Generation'
      ],
      benefits: [
        'Increase development speed by 50%',
        'Reduce bugs by 70%',
        'Improve code quality significantly'
      ],
      popular: false,
      rating: 4.7,
      clients: 80,
      icon: Code,
      category: 'Development'
    },
    {
      id: 'ai-image-recognition-pro',
      name: 'AI Image Recognition Pro',
      description: 'Advanced computer vision platform for image analysis, object detection, and visual content understanding',
      price: '$179/month',
      features: [
        'Object Detection',
        'Facial Recognition',
        'Image Classification',
        'OCR Text Extraction',
        'Visual Search',
        'Custom Model Training'
      ],
      benefits: [
        'Automate visual content processing',
        'Improve accuracy by 95%',
        'Reduce manual image review time'
      ],
      popular: false,
      rating: 4.6,
      clients: 90,
      icon: Image,
      category: 'Computer Vision'
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      description: 'Intelligent threat detection and response system with machine learning-powered security monitoring',
      price: '$499/month',
      features: [
        'Threat Detection',
        'Anomaly Detection',
        'Automated Response',
        'Security Analytics',
        'Compliance Monitoring',
        'Incident Investigation'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce false positives by 80%',
        'Automate security responses'
      ],
      popular: true,
      rating: 4.9,
      clients: 100,
      icon: Shield,
      category: 'Security'
    }
  ];


  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Accuracy Rate', icon: Target },
    { number: '24/7', label: 'AI Monitoring', icon: Clock },
    { number: '4.9/5', label: 'Client Rating', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including analytics, content generation, customer support, and cybersecurity. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI analytics, AI content generation, AI customer support, AI cybersecurity" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Powered by Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations. 
              Our comprehensive AI services deliver intelligent automation, predictive analytics, 
              and smart solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Get AI Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI services designed to solve complex business challenges 
              and drive innovation across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                service.popular 
                  ? 'border-purple-500/60 ring-2 ring-purple-500/20' 
                  : 'border-purple-500/20 hover:border-purple-500/40'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                        <span className="text-sm text-purple-400">{service.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">{service.clients} clients</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-white font-semibold">Business Impact:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-300 text-sm">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <Link
                    to={`/service/${service.id}`}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600'
                        : 'border border-purple-500 text-purple-300 hover:bg-purple-500/10'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are built on cutting-edge technology and designed to deliver measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Advanced AI Models</h3>
              <p className="text-gray-300">
                State-of-the-art machine learning models trained on vast datasets for superior accuracy and performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Processing</h3>
              <p className="text-gray-300">
                Lightning-fast AI processing that delivers instant results and real-time insights for your business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored AI solutions designed specifically for your business needs and industry requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Support</h3>
              <p className="text-gray-300">
                Dedicated AI experts providing ongoing support, training, and optimization for your AI implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have already transformed their operations with our AI services. 
            Get started with a free consultation and discover the power of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
              <Rocket className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIServicesPage;