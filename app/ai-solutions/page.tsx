import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CpuChipIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon
} from &apos;@heroicons/react/24/outline&apos;;

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
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Text analysis and processing",
        "Sentiment analysis",
        "Language translation",
        "Conversational AI",
        "Document summarization",
        "Intent recognition"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,800/month",
      benefits: ["Multi-language support", "High accuracy", "Real-time processing"],
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
        "Quality inspection",
        "Visual search"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $3,200/month",
      benefits: ["High precision", "Real-time processing", "Custom models"],
      useCases: ["Security systems", "Quality control", "Medical imaging"],
      href: "/ai-computer-vision"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights and forecasting solutions to help you make informed business decisions.",
      icon: ChartBarIcon,
      features: [
        "Data forecasting",
        "Trend analysis",
        "Risk assessment",
        "Demand prediction",
        "Anomaly detection",
        "Custom dashboards"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,500/month",
      benefits: ["Accurate predictions", "Real-time insights", "Custom models"],
      useCases: ["Sales forecasting", "Risk management", "Inventory optimization"],
      href: "/ai-predictive-analytics"
    },
    {
      title: "AI Chatbots",
      description: "Intelligent conversational agents that provide 24/7 customer support and automate interactions.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Natural conversations",
        "Multi-channel support",
        "Custom training",
        "Integration capabilities",
        "Analytics and reporting",
        "Human handoff"
      ],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $1,800/month",
      benefits: ["24/7 availability", "Instant responses", "Scalable"],
      useCases: ["Customer support", "Lead generation", "FAQ automation"],
      href: "/ai-chatbots"
    },
    {
      title: "Content Generation",
      description: "AI-powered content creation for blogs, social media, marketing materials, and documentation.",
      icon: DocumentTextIcon,
      features: [
        "Blog and article writing",
        "Social media content",
        "Marketing copy",
        "Technical documentation",
        "Performance analytics",
        "Brand voice consistency"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,200/month",
      benefits: ["High-quality content", "Brand consistency", "Time savings"],
      useCases: ["Content marketing", "Social media", "Documentation"],
      href: "/ai-content-generation"
    },
    {
      title: "Data Analytics",
      description: "Advanced data analysis and visualization solutions to extract meaningful insights from your data.",
      icon: ChartBarIcon,
      features: [
        "Data processing and cleaning",
        "Statistical analysis",
        "Data visualization",
        "Custom reports",
        "Real-time dashboards",
        "Data integration"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $2,000/month",
      benefits: ["Comprehensive insights", "Real-time data", "Custom reports"],
      useCases: ["Business intelligence", "Performance tracking", "Data-driven decisions"],
      href: "/ai-data-analytics"
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
        "Scalable architecture",
        "Integration capabilities"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $2,600/month",
      benefits: ["Efficiency gains", "Cost reduction", "Error reduction"],
      useCases: ["Document processing", "Workflow optimization", "Quality control"],
      href: "/ai-process-automation"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions for your business needs" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xlmd:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to automation, we deliver AI that drives real results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-800rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8h-8 text-white" />
                </div>
                
                <h3 className="text-2xlfont-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-whitefont-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300text-sm flex items-center">
                        <CheckCircleIcon className="w-4h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xlfont-bold text-purple-400 mb-2">{service.price}</div>
                  <div className="text-gray-400text-sm mb-4">Benefits: {service.benefits.join(&apos;, &apos;)}</div>
                </div>

                <Link
                  to={service.href}
                  className="w-fullbg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRightIcon className="w-4h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xlmd:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our AI solutions can transform your business and give you a competitive edge.
          </p>
          <div className="flexflex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-rfrom-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
            </Link>
            <Link
              to="/demo"
              className="border-2border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
