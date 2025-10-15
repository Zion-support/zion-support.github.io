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
        "Real-time model training",
        "A/B testing framework",
        "Model performance monitoring",
        "Automated retraining",
        "Edge deployment"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $3,500/month",
      benefits: ["95% accuracy", "Real-time processing", "Custom algorithms"],
      useCases: ["Predictive analytics", "Recommendation engines", "Fraud detection"],
      href: "/ai-machine-learning"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Sentiment analysis",
        "Text classification",
        "Language translation",
        "Chatbot development",
        "Document summarization",
        "Named entity recognition"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,800/month",
      benefits: ["Multi-language support", "High accuracy", "Real-time processing"],
      useCases: ["Customer support", "Content moderation", "Market research"],
      href: "/ai-nlp"
    },
    {
      title: "Computer Vision",
      description: "Cutting-edge computer vision solutions for image recognition, object detection, and visual analytics.",
      icon: EyeIcon,
      features: [
        "Image classification",
        "Object detection",
        "Facial recognition",
        "OCR capabilities",
        "Video analysis",
        "Medical imaging"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $4,200/month",
      benefits: ["High precision", "Real-time processing", "Custom models"],
      useCases: ["Quality control", "Security systems", "Medical diagnosis"],
      href: "/ai-computer-vision"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced predictive analytics to forecast trends, optimize operations, and make data-driven decisions.",
      icon: ChartBarIcon,
      features: [
        "Time series forecasting",
        "Demand prediction",
        "Risk assessment",
        "Performance optimization",
        "Anomaly detection",
        "Trend analysis"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $3,200/month",
      benefits: ["Accurate forecasts", "Real-time insights", "Automated reporting"],
      useCases: ["Sales forecasting", "Inventory management", "Financial planning"],
      href: "/ai-predictive-analytics"
    },
    {
      title: "Process Automation",
      description: "Intelligent automation solutions to streamline workflows, reduce manual work, and improve efficiency.",
      icon: CogIcon,
      features: [
        "Workflow automation",
        "Document processing",
        "Data extraction",
        "Task scheduling",
        "Error handling",
        "Integration APIs"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,500/month",
      benefits: ["90% time savings", "Error reduction", "Scalable solutions"],
      useCases: ["Document processing", "Data entry", "Customer onboarding"],
      href: "/ai-process-automation"
    },
    {
      title: "AI Security Solutions",
      description: "Advanced AI-powered security solutions to protect your systems, detect threats, and ensure compliance.",
      icon: ShieldCheckIcon,
      features: [
        "Threat detection",
        "Anomaly monitoring",
        "Fraud prevention",
        "Access control",
        "Compliance monitoring",
        "Incident response"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $4,500/month",
      benefits: ["Real-time protection", "Advanced detection", "Compliance ready"],
      useCases: ["Cybersecurity", "Fraud prevention", "Access management"],
      href: "/ai-security"
    }
  ];

  const benefits = [
    "Custom AI solutions tailored to your business",
    "Advanced machine learning algorithms",
    "Real-time processing and analytics",
    "Scalable cloud infrastructure",
    "24/7 monitoring and support",
    "Easy integration with existing systems"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions for modern businesses. Machine learning, NLP, computer vision, and more." />
        <meta name="keywords" content="AI solutions, machine learning, artificial intelligence, automation, predictive analytics" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI solutions. From machine learning to automation, 
            we provide comprehensive AI services to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {aiServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <div className="text-blue-400 font-bold text-lg mb-2">{service.price}</div>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit, idx) => (
                    <span key={idx} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              <Link 
                to={service.href}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
              >
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Our AI Solutions?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our AI solutions can help your business achieve its goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Start Your AI Journey
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutionsPage;