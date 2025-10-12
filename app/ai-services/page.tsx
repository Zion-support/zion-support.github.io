import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3, Cog } from 'lucide-react';
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
        'Multi-language support'
      ],
      pricing: '$99/month',
      popular: false,
      link: '/ai-chatbot-builder'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting',
        'Data visualization',
        'Machine learning models'
      ],
      pricing: '$199/month',
      popular: false,
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Intelligent email management that drafts, schedules, and optimizes your email communications automatically.',
      features: [
        'Smart email drafting',
        'Auto-scheduling',
        'Sentiment analysis',
        'Template library',
        'Follow-up automation',
        'Performance tracking'
      ],
      pricing: '$49/month',
      popular: false,
      link: '/ai-email-assistant'
    },
    {
      icon: <Eye className="w-12 h-12 text-red-500" />,
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis using computer vision technology for various business applications.',
      features: [
        'Image recognition',
        'Object detection',
        'Video analysis',
        'Quality control',
        'Security monitoring',
        'Custom model training'
      ],
      pricing: '$149/month',
      popular: false,
      link: '/ai-computer-vision'
    },
    {
      icon: <Cog className="w-12 h-12 text-indigo-500" />,
      title: 'AI Automation Suite',
      description: 'Comprehensive automation platform that streamlines business processes using artificial intelligence.',
      features: [
        'Workflow automation',
        'Process optimization',
        'Task scheduling',
        'Error detection',
        'Performance monitoring',
        'Custom integrations'
      ],
      pricing: '$299/month',
      popular: false,
      link: '/ai-automation'
    }
  ];

  const benefits = [
    {
      title: 'Save 80% Time',
      description: 'Automate repetitive tasks and focus on strategic work',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Increase Productivity',
      description: 'Boost team efficiency with AI-powered tools',
      icon: <Star className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Better Insights',
      description: 'Make data-driven decisions with AI analytics',
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    },
    {
      title: '24/7 Support',
      description: 'AI assistants that never sleep',
      icon: <Shield className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, and automation solutions to transform your business." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, analytics, automation, machine learning" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}AI Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and accelerate your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/micro-saas-services"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Micro SAAS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI services designed to address every aspect of your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900">
                    {service.pricing}
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of artificial intelligence with our proven solutions and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies already leveraging our AI services to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/micro-saas-services"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Micro SAAS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
