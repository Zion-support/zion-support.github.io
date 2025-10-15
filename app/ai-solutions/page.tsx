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
  LightBulbIcon,
  BeakerIcon,
  CodeBracketIcon,
  SparklesIcon,
  CommandLineIcon
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
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,800/month",
      benefits: ["Multi-language support", "Real-time processing", "High accuracy"],
      useCases: ["Customer support", "Content analysis", "Language translation"],
      href: "/ai-nlp"
    },
    {
      title: "Computer Vision",
      description: "Advanced computer vision solutions for image recognition, object detection, and visual analytics.",
      icon: EyeIcon,
      features: [
        "Image classification",
        "Object detection",
        "Facial recognition",
        "OCR (Optical Character Recognition)",
        "Video analysis",
        "Real-time processing"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $4,200/month",
      benefits: ["High accuracy", "Real-time processing", "Custom models"],
      useCases: ["Quality control", "Security systems", "Medical imaging"],
      href: "/ai-computer-vision"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven predictions and forecasting using advanced machine learning algorithms and statistical models.",
      icon: ChartBarIcon,
      features: [
        "Time series forecasting",
        "Demand prediction",
        "Risk assessment",
        "Trend analysis",
        "Anomaly detection",
        "Performance optimization"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $3,000/month",
      benefits: ["Accurate forecasts", "Real-time insights", "Custom models"],
      useCases: ["Sales forecasting", "Risk management", "Inventory optimization"],
      href: "/ai-predictive-analytics"
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline business processes and reduce manual work.",
      icon: CogIcon,
      features: [
        "Process automation",
        "Workflow optimization",
        "Intelligent routing",
        "Decision automation",
        "Resource optimization",
        "Performance monitoring"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,500/month",
      benefits: ["Increased efficiency", "Cost reduction", "Error reduction"],
      useCases: ["Business processes", "Customer service", "Data processing"],
      href: "/ai-automation"
    },
    {
      title: "AI Consulting",
      description: "Strategic AI consulting to help you identify opportunities, develop roadmaps, and implement AI solutions.",
      icon: LightBulbIcon,
      features: [
        "AI strategy development",
        "Technology assessment",
        "Implementation planning",
        "ROI analysis",
        "Change management",
        "Training and support"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $1,500/month",
      benefits: ["Expert guidance", "Strategic planning", "Risk mitigation"],
      useCases: ["AI transformation", "Technology adoption", "Process improvement"],
      href: "/ai-consulting"
    },
    {
      title: "AI Research & Development",
      description: "Cutting-edge AI research and development services to create next-generation AI solutions.",
      icon: BeakerIcon,
      features: [
        "Custom AI research",
        "Algorithm development",
        "Proof of concept",
        "Technology innovation",
        "Patent development",
        "Academic collaboration"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $5,000/month",
      benefits: ["Innovation leadership", "Competitive advantage", "Future-ready solutions"],
      useCases: ["R&D projects", "Technology innovation", "Academic research"],
      href: "/ai-research-development"
    },
    {
      title: "AI Code Generation",
      description: "AI-powered code generation and development assistance to accelerate software development.",
      icon: CodeBracketIcon,
      features: [
        "Code generation",
        "Bug detection",
        "Code optimization",
        "Documentation generation",
        "Test case creation",
        "Refactoring assistance"
      ],
      color: "from-teal-500 to-green-500",
      price: "Starting at $1,800/month",
      benefits: ["Faster development", "Higher quality code", "Reduced bugs"],
      useCases: ["Software development", "Code review", "Technical debt reduction"],
      href: "/ai-code-generation"
    },
    {
      title: "AI Content Creation",
      description: "Advanced AI content creation tools for generating high-quality text, images, and multimedia content.",
      icon: DocumentTextIcon,
      features: [
        "Text generation",
        "Image creation",
        "Video production",
        "Content optimization",
        "Brand consistency",
        "Multi-format output"
      ],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $2,200/month",
      benefits: ["Creative efficiency", "Consistent quality", "Scalable production"],
      useCases: ["Content marketing", "Creative agencies", "Media production"],
      href: "/ai-content-creation"
    },
    {
      title: "AI Data Science",
      description: "Comprehensive data science services using AI to extract insights from complex datasets.",
      icon: ChartBarIcon,
      features: [
        "Data exploration",
        "Statistical analysis",
        "Machine learning modeling",
        "Data visualization",
        "Insight generation",
        "Report automation"
      ],
      color: "from-violet-500 to-purple-500",
      price: "Starting at $3,200/month",
      benefits: ["Data-driven insights", "Automated analysis", "Actionable recommendations"],
      useCases: ["Business intelligence", "Research analysis", "Market research"],
      href: "/ai-data-science"
    },
    {
      title: "AI Voice & Speech",
      description: "Advanced voice and speech AI solutions for voice recognition, synthesis, and conversational interfaces.",
      icon: CommandLineIcon,
      features: [
        "Speech recognition",
        "Voice synthesis",
        "Voice cloning",
        "Conversational AI",
        "Multi-language support",
        "Real-time processing"
      ],
      color: "from-sky-500 to-blue-500",
      price: "Starting at $2,600/month",
      benefits: ["Natural interaction", "Accessibility", "Multi-language support"],
      useCases: ["Voice assistants", "Accessibility tools", "Call centers"],
      href: "/ai-voice-speech"
    },
    {
      title: "AI Blockchain Solutions",
      description: "AI-powered blockchain solutions for smart contracts, DeFi, and decentralized applications.",
      icon: ShieldCheckIcon,
      features: [
        "Smart contract AI",
        "DeFi optimization",
        "Blockchain analytics",
        "Security monitoring",
        "Automated trading",
        "Risk assessment"
      ],
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $4,500/month",
      benefits: ["Enhanced security", "Automated operations", "Optimized performance"],
      useCases: ["DeFi platforms", "Cryptocurrency trading", "Blockchain security"],
      href: "/ai-blockchain-solutions"
    }
  ];

  const features = [
    {
      title: "Custom AI Solutions",
      description: "Tailored AI implementations designed specifically for your business needs and requirements.",
      icon: CpuChipIcon
    },
    {
      title: "Scalable Architecture",
      description: "AI solutions that grow with your business and handle increasing data volumes and complexity.",
      icon: CloudIcon
    },
    {
      title: "Real-time Processing",
      description: "High-performance AI systems that process data in real-time for immediate insights and actions.",
      icon: RocketLaunchIcon
    },
    {
      title: "Expert Support",
      description: "Dedicated AI experts who provide ongoing support, monitoring, and optimization of your AI systems.",
      icon: UserGroupIcon
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "50+", label: "Industry Verticals" },
    { number: "24/7", label: "AI Support" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI solutions including machine learning, NLP, computer vision, predictive analytics, and AI consulting services." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, predictive analytics, AI consulting, artificial intelligence" />
        <meta property="og:title" content="AI Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions. From machine learning to computer vision, we deliver AI that drives real results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to computer vision, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our AI Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="text-purple-400 font-semibold">{service.price}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link 
                    to={service.href}
                    className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our AI Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Implementation Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our AI Implementation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Discovery & Analysis</h3>
                <p className="text-gray-300">
                  We analyze your business processes, data, and requirements to identify AI opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Solution Design</h3>
                <p className="text-gray-300">
                  We design custom AI solutions tailored to your specific needs and business objectives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Development & Training</h3>
                <p className="text-gray-300">
                  Our AI experts develop and train models using your data for optimal performance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Deployment & Support</h3>
                <p className="text-gray-300">
                  We deploy your AI solution and provide ongoing support, monitoring, and optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can help you achieve your goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free AI Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule AI Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300 mt-12">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
