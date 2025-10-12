import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, social media posts, and marketing copy.',
      features: [
        'Generate 10,000+ words daily',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection'
      ],
      pricing: '$29/month',
      popular: true,
      link: '/ai-content-generator'
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Builder Enterprise',
      description: 'Create intelligent chatbots for customer service, sales, and support with advanced NLP and machine learning capabilities.',
      features: [
        'Visual chatbot builder',
        'Multi-channel deployment',
        'Advanced analytics',
        'Custom integrations',
        '24/7 monitoring',
        'A/B testing tools'
      ],
      pricing: '$49/month',
      popular: false,
      link: '/ai-chatbot-builder'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'AI Security Suite',
      description: 'Comprehensive AI-powered security solutions for threat detection, fraud prevention, and data protection.',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Automated response',
        'Compliance monitoring',
        'Risk assessment',
        'Incident management'
      ],
      pricing: '$79/month',
      popular: false,
      link: '/ai-security-suite'
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Platform',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics and predictive modeling.',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Custom ML models',
        'Data visualization',
        'Automated reporting',
        'API integrations'
      ],
      pricing: '$99/month',
      popular: true,
      link: '/ai-analytics-platform'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'AI Assessment',
      description: 'We analyze your business needs and identify AI opportunities for maximum impact.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a custom AI solution tailored to your specific requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We deploy and integrate AI solutions with your existing systems and workflows.'
    },
    {
      step: '04',
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support to ensure successful AI adoption.'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 40% through AI automation and optimization.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Increased Efficiency',
      description: 'Boost productivity and efficiency with AI-powered process automation.'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Better Decisions',
      description: 'Make data-driven decisions with AI-powered insights and predictions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Enhanced Security',
      description: 'Protect your business with AI-powered security and fraud detection.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge AI services including content generation, chatbots, analytics, and security solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, content generation, analytics, security" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions designed to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* AI Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <Link 
                    to={service.link}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power of artificial intelligence with our comprehensive solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Implementation Process</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A proven methodology for successful AI implementation and adoption.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can transform your business and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your AI Journey
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIServicesPage;