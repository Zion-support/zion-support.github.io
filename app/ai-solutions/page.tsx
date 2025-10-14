import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

export default function AISolutionsPage() {
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
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and automated content processing.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Text classification",
        "Sentiment analysis",
        "Named entity recognition",
        "Language translation",
        "Chatbot development",
        "Content summarization"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,800/month",
      benefits: ["Multi-language support", "High accuracy", "Scalable processing"],
      useCases: ["Customer support", "Content moderation", "Market research"],
      href: "/ai-nlp"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions for object detection, facial recognition, and visual inspection.",
      icon: EyeIcon,
      features: [
        "Object detection",
        "Facial recognition",
        "Image classification",
        "Video analysis",
        "Quality inspection",
        "Real-time processing"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $4,200/month",
      benefits: ["Real-time analysis", "High precision", "Custom models"],
      useCases: ["Security systems", "Manufacturing", "Healthcare imaging"],
      href: "/ai-computer-vision"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights and predictions to help you make informed business decisions and forecast trends.",
      icon: ChartBarIcon,
      features: [
        "Trend forecasting",
        "Risk assessment",
        "Demand prediction",
        "Customer behavior analysis",
        "Market analysis",
        "Performance optimization"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $2,500/month",
      benefits: ["Accurate predictions", "Data visualization", "Actionable insights"],
      useCases: ["Sales forecasting", "Inventory management", "Financial planning"],
      href: "/ai-predictive-analytics"
    },
    {
      title: "AI Security & Ethics",
      description: "Ensure your AI systems are secure, ethical, and compliant with industry standards and regulations.",
      icon: ShieldCheckIcon,
      features: [
        "Bias detection",
        "Privacy protection",
        "Model security",
        "Compliance auditing",
        "Ethical AI guidelines",
        "Risk assessment"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $1,800/month",
      benefits: ["Compliance ready", "Secure by design", "Ethical AI"],
      useCases: ["Healthcare", "Finance", "Government"],
      href: "/ai-security"
    },
    {
      title: "AI Process Automation",
      description: "Automate complex business processes using AI to increase efficiency and reduce human error.",
      icon: CogIcon,
      features: [
        "Workflow automation",
        "Document processing",
        "Data extraction",
        "Quality control",
        "Process optimization",
        "Intelligent routing"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $3,200/month",
      benefits: ["90% efficiency gain", "Error reduction", "Cost savings"],
      useCases: ["Document management", "Supply chain", "Customer service"],
      href: "/ai-automation"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your business needs, data, and current systems to identify AI opportunities."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive AI strategy with clear objectives, timelines, and success metrics."
    },
    {
      step: "03",
      title: "Development & Training",
      description: "Build and train custom AI models using your data and industry best practices."
    },
    {
      step: "04",
      title: "Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your existing systems and workflows."
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Continuously monitor performance and optimize models for better results over time."
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed" },
    { number: "95%", label: "Average Accuracy" },
    { number: "40%", label: "Cost Reduction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including machine learning, NLP, computer vision, and predictive analytics to transform your business." />
        <meta name="keywords" content="AI solutions, machine learning, artificial intelligence, NLP, computer vision, predictive analytics" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              From machine learning to computer vision, we deliver AI solutions that drive innovation, 
              efficiency, and growth across all industries.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to solve complex business challenges and unlock new opportunities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {aiServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300">
                    <div className="flex items-start mb-6">
                      <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        <div className="text-purple-400 font-semibold mb-4">{service.price}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <span key={useCaseIndex} className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={service.href}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                    >
                      Learn More
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful AI implementation and maximum business value
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can transform your business and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get AI Consultation
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}