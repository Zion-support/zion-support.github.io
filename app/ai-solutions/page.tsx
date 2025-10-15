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
        "Text analysis and processing",
        "Sentiment analysis",
        "Language translation",
        "Chatbot development",
        "Voice recognition",
        "Document summarization"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,800/month",
      benefits: ["Multi-language support", "Real-time processing", "High accuracy"],
      useCases: ["Customer service", "Content analysis", "Language translation"],
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
        "Medical imaging",
        "Quality control",
        "Augmented reality"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $4,200/month",
      benefits: ["High precision", "Real-time processing", "Custom models"],
      useCases: ["Medical diagnosis", "Security systems", "Quality control"],
      href: "/ai-computer-vision"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights and predictions to help you make informed business decisions and optimize operations.",
      icon: ChartBarIcon,
      features: [
        "Data mining and analysis",
        "Predictive modeling",
        "Risk assessment",
        "Trend analysis",
        "Forecasting",
        "Business intelligence"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,500/month",
      benefits: ["Accurate predictions", "Real-time insights", "Custom dashboards"],
      useCases: ["Sales forecasting", "Risk management", "Market analysis"],
      href: "/ai-predictive-analytics"
    },
    {
      title: "Process Automation",
      description: "Intelligent automation solutions to streamline workflows, reduce costs, and improve efficiency.",
      icon: CogIcon,
      features: [
        "Workflow automation",
        "Document processing",
        "Data extraction",
        "Task scheduling",
        "Error handling",
        "Performance monitoring"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,800/month",
      benefits: ["90% time savings", "Error reduction", "Cost efficiency"],
      useCases: ["Document processing", "Data entry", "Workflow management"],
      href: "/ai-automation"
    },
    {
      title: "AI Security Solutions",
      description: "Advanced AI-powered security solutions to protect your digital assets and detect threats in real-time.",
      icon: ShieldCheckIcon,
      features: [
        "Threat detection",
        "Anomaly detection",
        "Behavioral analysis",
        "Fraud prevention",
        "Security monitoring",
        "Incident response"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $3,200/month",
      benefits: ["Real-time protection", "High accuracy", "Automated response"],
      useCases: ["Cybersecurity", "Fraud detection", "Threat monitoring"],
      href: "/ai-security"
    }
  ];

  const benefits = [
    {
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business needs and industry requirements.",
      icon: <CogIcon className="w-8 h-8" />
    },
    {
      title: "Expert Team",
      description: "Our team of AI specialists and data scientists bring years of experience in cutting-edge technologies.",
      icon: <CheckCircleIcon className="w-8 h-8" />
    },
    {
      title: "Scalable Infrastructure",
      description: "Cloud-based solutions that scale with your business growth and changing requirements.",
      icon: <ChartBarIcon className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support and monitoring to ensure your AI solutions run smoothly.",
      icon: <ShieldCheckIcon className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, computer vision, and automation services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions designed to drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-3 border border-cyan-600 text-cyan-400 rounded-lg hover:bg-cyan-600 hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-400 flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-cyan-400 font-semibold mb-4">
                    {service.price}
                  </div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our AI Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you implement cutting-edge solutions that drive real business value.
            </p>
            <button className="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors inline-flex items-center">
              Get Started Today
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;