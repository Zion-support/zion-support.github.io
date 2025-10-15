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
      description: "Image and video analysis solutions for object detection, facial recognition, and visual content understanding.",
      icon: EyeIcon,
      features: [
        "Object detection and recognition",
        "Facial recognition",
        "Image classification",
        "Video analysis",
        "OCR (Optical Character Recognition)",
        "Medical imaging analysis"
      ],
      color: "from-green-500 to-teal-500",
      price: "Starting at $4,200/month",
      benefits: ["High accuracy", "Real-time processing", "Custom models"],
      useCases: ["Security systems", "Medical diagnosis", "Quality control"],
      href: "/ai-computer-vision"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights and predictions to help businesses make informed decisions and optimize operations.",
      icon: DocumentTextIcon,
      features: [
        "Data analysis and visualization",
        "Predictive modeling",
        "Trend analysis",
        "Risk assessment",
        "Performance optimization",
        "Custom dashboards"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $3,000/month",
      benefits: ["Data-driven insights", "Accurate predictions", "Real-time analytics"],
      useCases: ["Business intelligence", "Risk management", "Operational optimization"],
      href: "/ai-predictive-analytics"
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions to streamline business processes and reduce manual work.",
      icon: LightBulbIcon,
      features: [
        "Process automation",
        "Workflow optimization",
        "Task automation",
        "Data processing",
        "Report generation",
        "System integration"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,500/month",
      benefits: ["Increased efficiency", "Reduced errors", "Cost savings"],
      useCases: ["Business process automation", "Data processing", "Workflow optimization"],
      href: "/ai-automation"
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI solutions for customer service, support, and business automation.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Natural language understanding",
        "Multi-channel support",
        "Context awareness",
        "Integration capabilities",
        "Analytics and reporting",
        "Custom training"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $1,800/month",
      benefits: ["24/7 availability", "Scalable support", "Cost effective"],
      useCases: ["Customer service", "Lead generation", "Internal support"],
      href: "/ai-chatbots"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed" },
    { number: "99.5%", label: "Accuracy Rate" },
    { number: "24/7", label: "AI Monitoring" },
    { number: "50+", label: "AI Experts" }
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI GPT", "Hugging Face", 
    "AWS SageMaker", "Azure ML", "Google Cloud AI", "Docker", "Kubernetes"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, computer vision, and automation services for modern businesses." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, AI automation, predictive analytics, AI chatbots" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business with 
              cutting-edge machine learning, NLP, computer vision, and automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to meet your specific business needs and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {service.price}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200"
                >
                  Learn More
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge AI technologies and frameworks to deliver the best solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white text-gray-700 font-medium rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let our AI experts help you implement cutting-edge artificial intelligence 
            solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;