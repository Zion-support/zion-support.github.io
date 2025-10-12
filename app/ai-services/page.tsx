import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Eye, MessageSquare, BarChart3 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation solutions.',
      features: ['Workflow automation', 'Process optimization', 'Custom integrations', 'Real-time monitoring'],
      pricing: 'Starting at $49/month',
      link: '/ai-automation',
      popular: false
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbots',
      description: 'Deploy intelligent chatbots that provide 24/7 customer support and lead generation.',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard'],
      pricing: 'Starting at $39/month',
      link: '/ai-chatbots',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      pricing: 'Starting at $59/month',
      link: '/ai-analytics',
      popular: false
    },
    {
      icon: <Eye className="w-8 h-8 text-red-500" />,
      title: 'Computer Vision',
      description: 'Implement computer vision solutions for image recognition, object detection, and visual analysis.',
      features: ['Image classification', 'Object detection', 'Facial recognition', 'Quality inspection'],
      pricing: 'Starting at $79/month',
      link: '/computer-vision',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-500" />,
      title: 'AI Security',
      description: 'Protect your business with AI-powered security solutions and threat detection.',
      features: ['Threat detection', 'Anomaly detection', 'Fraud prevention', 'Security monitoring'],
      pricing: 'Starting at $69/month',
      link: '/ai-security',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: '24/7 AI-powered automation'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Scalable and cost-effective solutions'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Custom AI model training'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Real-time performance monitoring'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Expert AI consultation and support'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Seamless integration with existing systems'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="AI Services - Zion Tech Group"
        description="Transform your business with our comprehensive AI services including content generation, chatbots, automation, and analytics solutions."
        keywords="AI services, artificial intelligence, machine learning, automation, chatbots, content generation, analytics"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and scale your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to meet your specific business needs and objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  service.popular ? 'border-purple-500 relative' : 'border-gray-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-900">{service.pricing}</p>
                </div>
                
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver AI solutions that drive real business value and measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <p className="text-gray-700 text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join hundreds of businesses already using our AI solutions to drive growth and efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;