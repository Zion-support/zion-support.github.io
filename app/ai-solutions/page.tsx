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
        "Custom model development",
        "Real-time processing",
        "Predictive analytics",
        "Data preprocessing",
        "Model optimization",
        "Performance monitoring"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,500/month",
      benefits: ["Customization", "Scalability", "Performance"],
      useCases: ["Predictive analytics", "Automation", "Decision support"],
      href: "/machine-learning"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Text analysis",
        "Sentiment analysis",
        "Language translation",
        "Chatbot development",
        "Document processing",
        "Voice recognition"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,800/month",
      benefits: ["Automation", "Efficiency", "Accuracy"],
      useCases: ["Customer service", "Content analysis", "Language processing"],
      href: "/nlp-solutions"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions for object detection, recognition, and processing.",
      icon: EyeIcon,
      features: [
        "Object detection",
        "Image classification",
        "Facial recognition",
        "Video analysis",
        "Quality inspection",
        "Medical imaging"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $2,200/month",
      benefits: ["Automation", "Precision", "Speed"],
      useCases: ["Quality control", "Security", "Medical diagnosis"],
      href: "/computer-vision"
    },
    {
      title: "AI Consulting",
      description: "Strategic AI consulting to help you identify opportunities and implement AI solutions.",
      icon: LightBulbIcon,
      features: [
        "AI strategy development",
        "Technology assessment",
        "Implementation planning",
        "ROI analysis",
        "Training and support",
        "Ongoing optimization"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $1,500/month",
      benefits: ["Expertise", "Strategy", "Implementation"],
      useCases: ["Digital transformation", "Process optimization", "Innovation"],
      href: "/ai-consulting"
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
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including machine learning, NLP, computer vision, and AI consulting services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to drive innovation and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-slate-200">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-slate-900 mb-2">{service.price}</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the power of AI with our proven solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our AI solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your AI Journey
            </Link>
            <Link
              to="/ai-solutions"
              className="border border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;