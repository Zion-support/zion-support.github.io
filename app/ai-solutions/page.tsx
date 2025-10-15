import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: "Machine Learning Models",
      description: "Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.",
      icon: CpuChipIcon,
      features: [
        "Custom algorithm development",
        "Real-time data processing",
        "Predictive analytics",
        "Model optimization",
        "Continuous learning",
        "Performance monitoring"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $2,500/month",
      href: "/machine-learning"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment detection, and automated content processing.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Text analysis and classification",
        "Sentiment analysis",
        "Language translation",
        "Content generation",
        "Chatbot development",
        "Document processing"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $1,800/month",
      href: "/nlp-solutions"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions for quality control, security, and enhanced user experiences.",
      icon: EyeIcon,
      features: [
        "Object detection and recognition",
        "Facial recognition systems",
        "Quality control automation",
        "Medical image analysis",
        "Security monitoring",
        "Augmented reality"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $3,200/month",
      href: "/computer-vision"
    },
    {
      title: "Process Automation",
      description: "Intelligent automation solutions to streamline workflows and reduce manual tasks.",
      icon: CogIcon,
      features: [
        "Workflow automation",
        "Document processing",
        "Data entry automation",
        "Quality control",
        "Customer service automation",
        "Business process optimization"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,000/month",
      href: "/process-automation"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights and forecasting to help you make better business decisions.",
      icon: ChartBarIcon,
      features: [
        "Sales forecasting",
        "Risk assessment",
        "Customer behavior analysis",
        "Market trend prediction",
        "Performance optimization",
        "Real-time dashboards"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,800/month",
      href: "/predictive-analytics"
    },
    {
      title: "AI Security Solutions",
      description: "Advanced security measures to protect your AI systems and sensitive data.",
      icon: ShieldCheckIcon,
      features: [
        "Threat detection and prevention",
        "Data privacy protection",
        "Model security auditing",
        "Compliance management",
        "Access control systems",
        "Security monitoring"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $2,200/month",
      href: "/ai-security"
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and optimize processes to save time and resources.",
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />
    },
    {
      title: "Better Decision Making",
      description: "Get data-driven insights and recommendations to make informed business decisions.",
      icon: <LightBulbIcon className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation and optimization.",
      icon: <DocumentTextIcon className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Scalable Solutions",
      description: "AI solutions that grow with your business and adapt to changing needs.",
      icon: <CpuChipIcon className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, natural language processing, computer vision, and automation services." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, automation, artificial intelligence" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions.
            From strategy to implementation, we help you harness the power of AI.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-400 font-semibold mb-4">{service.price}</div>
                <Link 
                  to={service.href}
                  className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our AI Solutions?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 mb-6">
              Our AI experts are ready to help you implement the right solutions for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Get Started Today
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutionsPage;