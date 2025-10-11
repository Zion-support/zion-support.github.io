import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, and automated reporting.',
      features: [
        'Real-time data visualization',
        'Predictive modeling',
        'Custom report generation',
        'Data integration tools',
        'Mobile app access',
        'Team collaboration features'
      ],
      pricing: '$79/month',
      popular: false,
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Globe className="w-12 h-12 text-orange-500" />,
      title: 'AI Translation Suite',
      description: 'Enterprise-grade translation service with AI-powered language processing for global business communication.',
      features: [
        '100+ language support',
        'Real-time translation',
        'Document processing',
        'API integration',
        'Quality assurance',
        'Custom terminology'
      ],
      pricing: '$39/month',
      popular: false,
      link: '/ai-translation-suite'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Increased Productivity',
      description: 'Automate repetitive tasks and focus on strategic initiatives'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 40% with AI automation'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Enhanced Accuracy',
      description: 'AI-powered solutions deliver 99.9% accuracy in data processing'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Availability',
      description: 'Round-the-clock AI assistance for your business needs'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including content generation, chatbots, analytics, and translation solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, business intelligence" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered
                <span className="text-blue-600"> Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence services. 
                From content generation to predictive analytics, we deliver AI solutions that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our comprehensive suite of AI-powered solutions designed to accelerate your business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 relative"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="text-3xl font-bold text-blue-600 mb-4">
                      {service.pricing}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the power of artificial intelligence with our proven solutions and expert support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AIServicesPage;
