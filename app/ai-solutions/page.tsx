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
        "Text classification",
        "Language translation",
        "Chatbot development",
        "Voice recognition",
        "Document summarization"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,800/month",
      benefits: ["Multi-language support", "Real-time processing", "High accuracy"],
      useCases: ["Customer support", "Content moderation", "Language translation"],
      href: "/ai-nlp"
    },
    {
      title: "Computer Vision",
      description: "Cutting-edge computer vision solutions for image recognition, object detection, and visual analytics.",
      icon: EyeIcon,
      features: [
        "Image recognition",
        "Object detection",
        "Facial recognition",
        "Medical imaging",
        "Quality control",
        "Augmented reality",
        "Video analytics"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $4,200/month",
      benefits: ["High precision", "Real-time processing", "Scalable solutions"],
      useCases: ["Medical diagnosis", "Security systems", "Manufacturing"],
      href: "/ai-computer-vision"
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline business processes and reduce manual work.",
      icon: CogIcon,
      features: [
        "Process automation",
        "Workflow optimization",
        "Data entry automation",
        "Document processing",
        "Email automation",
        "Task scheduling",
        "Error reduction"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,500/month",
      benefits: ["90% time savings", "Error reduction", "Cost efficiency"],
      useCases: ["Data processing", "Customer service", "Administrative tasks"],
      href: "/ai-automation"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including machine learning, natural language processing, computer vision, and automation services." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, AI automation, artificial intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text neon-text">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From machine learning models to conversational AI, our comprehensive AI solutions 
              help businesses automate processes, gain insights, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/ai-solutions#services"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our AI Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to solve complex business challenges and drive innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-purple-400 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <span key={idx} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="bg-slate-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    Learn More
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Solutions?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the power of artificial intelligence in your business
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ChartBarIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Data-Driven Insights</h3>
                  <p className="text-gray-300">
                    Transform raw data into actionable insights that drive business growth and decision-making.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CogIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Automated Processes</h3>
                  <p className="text-gray-300">
                    Streamline operations with intelligent automation that reduces costs and improves efficiency.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                  <p className="text-gray-300">
                    Built with enterprise-grade security and compliance standards to protect your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you identify opportunities and implement solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Start Your AI Journey
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/ai-solutions#services"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  };

export default AISolutionsPage;
