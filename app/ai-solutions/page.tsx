import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      icon: CpuChipIcon,
      title: "Machine Learning Models",
      description: "Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.",
      features: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Automated Decision Making",
        "Real-time Processing",
        "Model Optimization",
        "Continuous Learning"
      ]
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, chatbots, and language understanding.",
      features: [
        "Text Analysis & Classification",
        "Sentiment Analysis",
        "Chatbot Development",
        "Language Translation",
        "Document Processing",
        "Voice Recognition"
      ]
    },
    {
      icon: EyeIcon,
      title: "Computer Vision",
      description: "Image and video analysis solutions for object detection, facial recognition, and visual content understanding.",
      features: [
        "Object Detection & Recognition",
        "Facial Recognition",
        "Image Classification",
        "Video Analysis",
        "OCR (Optical Character Recognition)",
        "Medical Imaging Analysis"
      ]
    },
    {
      icon: ChartBarIcon,
      title: "Predictive Analytics",
      description: "Data-driven insights and forecasting solutions to help you make informed business decisions.",
      features: [
        "Sales Forecasting",
        "Risk Assessment",
        "Customer Behavior Analysis",
        "Market Trend Analysis",
        "Demand Planning",
        "Performance Optimization"
      ]
    },
    {
      icon: CogIcon,
      title: "Process Automation",
      description: "Intelligent automation solutions to streamline workflows and reduce manual tasks.",
      features: [
        "Workflow Automation",
        "Document Processing",
        "Data Entry Automation",
        "Quality Control",
        "Inventory Management",
        "Customer Service Automation"
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: "AI Security",
      description: "Advanced security solutions powered by AI to protect your systems and data.",
      features: [
        "Threat Detection",
        "Anomaly Detection",
        "Fraud Prevention",
        "Access Control",
        "Security Monitoring",
        "Incident Response"
      ]
    }
  ];

  const benefits = [
    "Increased Efficiency",
    "Cost Reduction",
    "Better Decision Making",
    "Enhanced Customer Experience",
    "Competitive Advantage",
    "Scalable Solutions"
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Education",
    "Transportation"
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including machine learning, natural language processing, computer vision, and predictive analytics to transform your business." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business. 
                Our cutting-edge AI solutions drive innovation, efficiency, and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve complex business challenges 
                and unlock new opportunities for growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions deliver measurable results and drive real business value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are tailored to meet the unique needs of various industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{industry}</h3>
                  <p className="text-gray-300">Customized AI solutions for {industry.toLowerCase()} industry</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you identify opportunities and implement solutions 
              that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Get Free AI Assessment
              </Link>
              <Link 
                to="/case-studies" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105"
              >
                View AI Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;