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
      color: "from-purple-5 0 0 to-pink-5 0 0",
      price: "Starting at $3,5 0 0/month",
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
      color: "from-blue-5 0 0 to-cyan-5 0 0",
      price: "Starting at $2,8 0 0/month",
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
      color: "from-green-5 0 0 to-emerald-5 0 0",
      price: "Starting at $3,2 0 0/month",
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
      color: "from-orange-5 0 0 to-red-5 0 0",
      price: "Starting at $2,5 0 0/month",
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
      color: "from-pink-5 0 0 to-rose-5 0 0",
      price: "Starting at $1,8 0 0/month",
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
      color: "from-indigo-5 0 0 to-purple-5 0 0",
      price: "Starting at $2,2 0 0/month",
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
      color: "from-teal-5 0 0 to-cyan-5 0 0",
      price: "Starting at $2,0 0 0/month",
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
      color: "from-yellow-5 0 0 to-orange-5 0 0",
      price: "Starting at $2,6 0 0/month",
      benefits: ["Efficiency gains", "Cost reduction", "Error reduction"],
      useCases: ["Document processing", "Workflow optimization", "Quality control"],
      href: "/ai-process-automation"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-9 0 0 text-white">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions for your business needs" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-20 bg-gradient-to-br from-slate-9 0 0 via-purple-9 0 0 to-slate-9 0 0">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xlmd:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-4 0 0 to-cyan-4 0 0 bg-clip-text text-transparent">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-3 0 0 mb-8 max-w-3xl mx-auto">
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
              <div key={index} className="bg-slate-80 0 rounded-xl p-8 border border-slate-7 0 0 hover:border-purple-5 0 0 transition-all duration-3 0 0 hover:transform hover:scale-1 0 5">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8h-8 text-white" />
                </div>
                
                <h3 className="text-2xlfont-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-30 0 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-whitefont-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-30 0 text-sm flex items-center">
                        <CheckCircleIcon className="w-4h-4 text-green-4 0 0 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xlfont-bold text-purple-4 0 0 mb-2">{service.price}</div>
                  <div className="text-gray-40 0 text-sm mb-4">Benefits: {service.benefits.join(', ')}</div>
                </div>

                <Link
                  to={service.href}
                  className="w-fullbg-gradient-to-r from-purple-6 0 0 to-cyan-6 0 0 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-7 0 0 hover:to-cyan-7 0 0 transition-all duration-3 0 0 flex items-center justify-center gap-2"
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
      <section className="py-2 0 bg-gradient-to-r from-purple-9 0 0/30 to-cyan-9 0 0/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xlmd:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-3 0 0 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our AI solutions can transform your business and give you a competitive edge.
          </p>
          <div className="flexflex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-rfrom-purple-6 0 0 to-cyan-6 0 0 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-7 0 0 hover:to-cyan-7 0 0 transition-all duration-3 0 0 transform hover:scale-1 0 5"
            >
              Start Your AI Journey
            </Link>
            <Link
              to="/demo"
              className="border-2border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-9 0 0 transition-all duration-3 0 0"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
