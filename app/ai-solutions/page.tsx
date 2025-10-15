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
  CheckCircleIcon
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
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and automated content generation.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Sentiment analysis",
        "Text classification",
        "Named entity recognition",
        "Language translation",
        "Content generation",
        "Chatbot development"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,800/month",
      benefits: ["Multi-language support", "High accuracy", "Real-time processing"],
      useCases: ["Customer support", "Content moderation", "Market research"],
      href: "/ai-nlp-solutions"
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
        "Quality inspection",
        "Augmented reality"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $4,200/month",
      benefits: ["High precision", "Real-time processing", "Custom models"],
      useCases: ["Medical diagnosis", "Security systems", "Manufacturing"],
      href: "/ai-computer-vision"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights and predictions to help you make informed business decisions.",
      icon: DocumentTextIcon,
      features: [
        "Trend analysis",
        "Risk assessment",
        "Demand forecasting",
        "Customer behavior prediction",
        "Financial modeling",
        "Performance optimization"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $3,200/month",
      benefits: ["Accurate predictions", "Real-time insights", "Custom dashboards"],
      useCases: ["Sales forecasting", "Risk management", "Inventory optimization"],
      href: "/ai-predictive-analytics"
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions to streamline your business processes and increase efficiency.",
      icon: LightBulbIcon,
      features: [
        "Process automation",
        "Workflow optimization",
        "Intelligent routing",
        "Document processing",
        "Data extraction",
        "Decision support"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,500/month",
      benefits: ["Increased efficiency", "Reduced errors", "Cost savings"],
      useCases: ["Document processing", "Customer onboarding", "Supply chain"],
      href: "/ai-automation"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "AI-powered diagnostic tools, patient monitoring, and treatment optimization.",
      icon: "🏥",
      solutions: ["Medical imaging", "Drug discovery", "Patient care"]
    },
    {
      name: "Finance",
      description: "Fraud detection, algorithmic trading, and risk assessment solutions.",
      icon: "💼",
      solutions: ["Risk management", "Trading algorithms", "Customer insights"]
    },
    {
      name: "E-commerce",
      description: "Personalized recommendations, inventory management, and customer service.",
      icon: "🛒",
      solutions: ["Recommendation engines", "Price optimization", "Chatbots"]
    },
    {
      name: "Manufacturing",
      description: "Quality control, predictive maintenance, and supply chain optimization.",
      icon: "🏭",
      solutions: ["Quality inspection", "Predictive maintenance", "Supply chain"]
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Industries Served" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including machine learning, NLP, computer vision, and predictive analytics for businesses across all industries." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, predictive analytics, artificial intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advanced AI Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your business with cutting-edge artificial intelligence technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/case-studies"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Case Studies
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
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
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

      {/* AI Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services designed to solve complex business challenges and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </span>
                  </div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are tailored to meet the unique needs of various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {industry.description}
                </p>
                <div className="space-y-1">
                  {industry.solutions.map((solution, idx) => (
                    <div key={idx} className="text-sm text-blue-600">
                      • {solution}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let our experts help you implement the perfect AI solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your AI Journey
            </Link>
            <Link
              to="/ai-solutions/consultation"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;