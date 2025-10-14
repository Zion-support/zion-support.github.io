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
  LightBulbIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  SparklesIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: "Machine Learning",
      description: "Custom ML models for predictive analytics, pattern recognition, and data-driven insights.",
      icon: CpuChipIcon,
      features: ["Predictive modeling", "Data analysis", "Pattern recognition", "Automated decision making"],
      color: "from-blue-500 to-purple-500",
      price: "Starting at $2,500/month",
      benefits: ["Improved accuracy", "Cost reduction", "Scalable solutions", "Real-time insights"],
      useCases: ["Sales forecasting", "Customer segmentation", "Risk assessment", "Quality control"],
      href: "/ai-machine-learning"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.",
      icon: ChatBubbleLeftRightIcon,
      features: ["Text analysis", "Sentiment analysis", "Language translation", "Content generation"],
      color: "from-green-500 to-teal-500",
      price: "Starting at $1,800/month",
      benefits: ["Automated content processing", "Better customer insights", "Multilingual support", "Real-time analysis"],
      useCases: ["Customer support", "Content moderation", "Market research", "Document analysis"],
      href: "/ai-nlp"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions for object detection, recognition, and visual insights.",
      icon: EyeIcon,
      features: ["Object detection", "Image classification", "Facial recognition", "Video analysis"],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $3,200/month",
      benefits: ["Automated visual inspection", "Enhanced security", "Quality control", "Real-time monitoring"],
      useCases: ["Manufacturing", "Security systems", "Medical imaging", "Retail analytics"],
      href: "/ai-computer-vision"
    },
    {
      title: "AI Chatbots",
      description: "Intelligent conversational AI for customer service, support, and engagement.",
      icon: ChatBubbleLeftRightIcon,
      features: ["24/7 availability", "Multi-language support", "Context awareness", "Human handoff"],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,200/month",
      benefits: ["Reduced support costs", "Improved response time", "Consistent service", "Scalable support"],
      useCases: ["Customer service", "Lead generation", "Technical support", "Sales assistance"],
      href: "/ai-chatbots"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven predictions and forecasting to optimize business decisions and outcomes.",
      icon: ChartBarIcon,
      features: ["Trend analysis", "Risk assessment", "Demand forecasting", "Performance optimization"],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,800/month",
      benefits: ["Better decision making", "Risk mitigation", "Resource optimization", "Competitive advantage"],
      useCases: ["Financial planning", "Inventory management", "Market analysis", "Operational efficiency"],
      href: "/ai-predictive-analytics"
    },
    {
      title: "AI Automation",
      description: "Intelligent process automation to streamline workflows and reduce manual tasks.",
      icon: CogIcon,
      features: ["Workflow automation", "Document processing", "Data extraction", "Task scheduling"],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $2,000/month",
      benefits: ["Increased efficiency", "Error reduction", "Cost savings", "Scalable operations"],
      useCases: ["Document processing", "Data entry", "Report generation", "Workflow management"],
      href: "/ai-automation"
    },
    {
      title: "AI Content Generation",
      description: "Automated content creation for marketing, documentation, and communication.",
      icon: DocumentTextIcon,
      features: ["Content writing", "SEO optimization", "Multi-format output", "Brand consistency"],
      color: "from-emerald-500 to-green-500",
      price: "Starting at $1,500/month",
      benefits: ["Faster content creation", "Consistent quality", "SEO optimization", "Cost reduction"],
      useCases: ["Marketing content", "Technical documentation", "Social media", "Email campaigns"],
      href: "/ai-content-generation"
    },
    {
      title: "AI Business Intelligence",
      description: "Advanced analytics and insights to drive strategic business decisions.",
      icon: LightBulbIcon,
      features: ["Data visualization", "Trend analysis", "Performance metrics", "Strategic insights"],
      color: "from-emerald-500 to-teal-500",
      price: "Starting at $4,000/month",
      benefits: ["Strategic insights", "Market intelligence", "ROI optimization"],
      useCases: ["Strategic planning", "Market analysis", "Competitive research"],
      href: "/ai-business-intelligence"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, computer vision, predictive analytics, and more. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI solutions, machine learning, natural language processing, computer vision, predictive analytics, AI chatbots, artificial intelligence" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence solutions
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                From machine learning models to conversational AI, our comprehensive AI solutions
                help businesses automate processes, gain insights, and deliver exceptional customer experiences.
              </p>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-purple-400 font-semibold text-lg mb-2">{service.price}</div>
                    <div className="text-gray-400 text-sm">Monthly subscription</div>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can accelerate your growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;