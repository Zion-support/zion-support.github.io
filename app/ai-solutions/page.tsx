import React from 'react';
import { Helmet } from 'react-helmet-async';
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
        "Sentiment analysis",
        "Text classification",
        "Language translation",
        "Named entity recognition",
        "Text summarization",
        "Conversational AI"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $2,200/month",
      benefits: ["Multi-language support", "Real-time analysis", "High accuracy"],
      useCases: ["Customer feedback analysis", "Content moderation", "Chatbots"],
      href: "/ai-nlp"
    },
    {
      title: "Computer Vision",
      description: "AI-powered computer vision solutions for image recognition, object detection, and visual analytics.",
      icon: EyeIcon,
      features: [
        "Object detection",
        "Image classification",
        "Facial recognition",
        "OCR technology",
        "Video analysis",
        "Quality inspection"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,800/month",
      benefits: ["99.5% accuracy", "Real-time processing", "Multi-format support"],
      useCases: ["Quality control", "Security monitoring", "Medical imaging"],
      href: "/ai-computer-vision"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced predictive analytics using AI to forecast trends, customer behavior, and business outcomes.",
      icon: ChartBarIcon,
      features: [
        "Demand forecasting",
        "Customer churn prediction",
        "Sales forecasting",
        "Risk assessment",
        "Market trend analysis",
        "Anomaly detection"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,500/month",
      benefits: ["90% forecast accuracy", "Real-time insights", "Automated alerts"],
      useCases: ["Sales forecasting", "Inventory management", "Risk management"],
      href: "/ai-predictive-analytics"
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI solutions for customer service, sales, and internal operations.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Natural conversations",
        "Multi-channel support",
        "Context awareness",
        "Integration capabilities",
        "Analytics dashboard",
        "Custom training"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $1,800/month",
      benefits: ["24/7 availability", "Instant responses", "95% satisfaction"],
      useCases: ["Customer support", "Lead qualification", "Internal helpdesk"],
      href: "/ai-chatbots"
    },
    {
      title: "AI Content Generation",
      description: "AI-powered content creation tools for automated writing, optimization, and personalization.",
      icon: DocumentTextIcon,
      features: [
        "Automated content creation",
        "SEO optimization",
        "Multi-language generation",
        "Brand voice consistency",
        "Content personalization",
        "Performance analytics"
      ],
      color: "from-rose-500 to-pink-500",
      price: "Starting at $1,200/month",
      benefits: ["80% time savings", "SEO optimized", "Consistent quality"],
      useCases: ["Blog content", "Marketing copy", "Product descriptions"],
      href: "/ai-content-generation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions for modern businesses" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">AI Solutions</h1>
          <p className="text-lg text-gray-300 mb-12">
            Discover our comprehensive AI solutions designed to transform your business.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-purple-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AISolutionsPage;