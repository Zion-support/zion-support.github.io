import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  ChartBarIcon,
  CogIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: "Machine Learning Development",
      description: "Custom machine learning models and algorithms tailored to your specific business needs and data.",
      icon: CpuChipIcon,
      features: [
        "Custom algorithm development",
        "Model training and optimization",
        "Real-time inference",
        "A/B testing framework",
        "Performance monitoring",
        "Continuous learning"
      ],
      price: "Starting at $3,500/month"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and conversational AI applications.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Text classification",
        "Sentiment analysis",
        "Language translation",
        "Named entity recognition",
        "Text summarization",
        "Conversational AI"
      ],
      price: "Starting at $2,800/month"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions for quality control, security, and automated visual inspection.",
      icon: EyeIcon,
      features: [
        "Image classification",
        "Object detection",
        "Facial recognition",
        "OCR capabilities",
        "Video analysis",
        "Real-time processing"
      ],
      price: "Starting at $4,200/month"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven predictions and forecasting using advanced machine learning and statistical models.",
      icon: ChartBarIcon,
      features: [
        "Time series forecasting",
        "Demand prediction",
        "Risk assessment",
        "Trend analysis",
        "Anomaly detection",
        "Performance optimization"
      ],
      price: "Starting at $3,000/month"
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline business processes and reduce manual work.",
      icon: CogIcon,
      features: [
        "Process automation",
        "Workflow optimization",
        "Intelligent routing",
        "Decision automation",
        "Resource optimization",
        "Performance monitoring"
      ],
      price: "Starting at $2,500/month"
    },
    {
      title: "AI Consulting",
      description: "Strategic AI consulting to help you identify opportunities and develop AI implementation roadmaps.",
      icon: LightBulbIcon,
      features: [
        "AI strategy development",
        "Technology assessment",
        "Implementation planning",
        "ROI analysis",
        "Change management",
        "Training and support"
      ],
      price: "Starting at $1,500/month"
    }
  ];

  const features = [
    "Custom AI Solutions",
    "Scalable Architecture",
    "Real-time Processing",
    "Expert Support",
    "24/7 Monitoring",
    "Continuous Optimization"
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, predictive analytics, and AI consulting." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, predictive analytics, AI consulting, artificial intelligence" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence services. 
              From machine learning to computer vision, we deliver AI solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get AI Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <p className="text-purple-400 font-semibold text-lg">{service.price}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our AI Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free AI Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule AI Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300 mt-12">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
