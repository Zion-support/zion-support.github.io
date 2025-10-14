'use client';

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
  SparklesIcon,
  BoltIcon,
  StarIcon,
  FireIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: "Machine Learning & Deep Learning",
      description: "Advanced machine learning models and deep learning solutions with custom algorithms, real-time training, and enterprise-grade performance.",
      icon: CpuChipIcon,
      features: [
        "Custom algorithm development",
        "Real-time model training & deployment",
        "A/B testing framework",
        "Model performance monitoring",
        "Automated retraining pipelines",
        "Edge computing deployment",
        "GPU acceleration",
        "Model versioning & management"
      ],
      color: "from-purple-500 via-pink-500 to-rose-500",
      price: "$4,999/month",
      originalPrice: "$7,999/month",
      savings: "Save $3,000/month",
      benefits: ["98% accuracy", "Real-time processing", "Custom algorithms", "Scalable architecture"],
      useCases: ["Predictive analytics", "Recommendation engines", "Fraud detection", "Image recognition"],
      href: "/ai-machine-learning",
      popular: true,
      category: "Core AI"
    },
    {
      title: "Natural Language Processing (NLP)",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI with multi-language support.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Sentiment analysis & emotion detection",
        "Text classification & categorization",
        "Language translation (100+ languages)",
        "Named entity recognition",
        "Text summarization & extraction",
        "Conversational AI & chatbots",
        "Voice-to-text & text-to-speech",
        "Document processing & OCR"
      ],
      color: "from-blue-500 via-cyan-500 to-teal-500",
      price: "$3,999/month",
      originalPrice: "$5,999/month",
      savings: "Save $2,000/month",
      benefits: ["Multi-language support", "Real-time processing", "95% accuracy", "Context understanding"],
      useCases: ["Customer support", "Content analysis", "Language translation", "Document processing"],
      href: "/ai-nlp",
      popular: true,
      category: "Language AI"
    },
    {
      title: "Computer Vision & Image Processing",
      description: "Advanced computer vision solutions for image recognition, object detection, facial recognition, and visual analytics with real-time processing.",
      icon: EyeIcon,
      features: [
        "Image classification & recognition",
        "Object detection & tracking",
        "Facial recognition & analysis",
        "OCR (Optical Character Recognition)",
        "Video analysis & processing",
        "Real-time image processing",
        "Medical imaging analysis",
        "Quality control automation"
      ],
      color: "from-green-500 via-emerald-500 to-teal-500",
      price: "$5,999/month",
      originalPrice: "$8,999/month",
      savings: "Save $3,000/month",
      benefits: ["99% accuracy", "Real-time processing", "Custom models", "Edge deployment"],
      useCases: ["Quality control", "Security systems", "Medical imaging", "Autonomous vehicles"],
      href: "/ai-computer-vision",
      popular: false,
      category: "Visual AI"
    },
    {
      title: "Predictive Analytics & Forecasting",
      description: "Data-driven predictions and forecasting using advanced machine learning algorithms, statistical models, and time series analysis.",
      icon: ChartBarIcon,
      features: [
        "Time series forecasting",
        "Demand prediction & planning",
        "Risk assessment & modeling",
        "Trend analysis & insights",
        "Anomaly detection",
        "Performance optimization",
        "Scenario planning",
        "Real-time dashboards"
      ],
      color: "from-orange-500 via-red-500 to-pink-500",
      price: "$3,499/month",
      originalPrice: "$4,999/month",
      savings: "Save $1,500/month",
      benefits: ["90% forecast accuracy", "Real-time insights", "Custom models", "Automated reporting"],
      useCases: ["Sales forecasting", "Risk management", "Inventory optimization", "Financial planning"],
      href: "/ai-predictive-analytics",
      popular: true,
      category: "Analytics"
    },
    {
      title: "AI Automation & RPA",
      description: "Intelligent automation solutions that streamline business processes, reduce manual work, and optimize operations with AI-powered decision making.",
      icon: CogIcon,
      features: [
        "Process automation & orchestration",
        "Workflow optimization",
        "Intelligent routing & decision making",
        "Resource optimization",
        "Performance monitoring",
        "Exception handling",
        "Integration with 500+ tools",
        "Custom automation workflows"
      ],
      color: "from-indigo-500 via-purple-500 to-pink-500",
      price: "$2,999/month",
      originalPrice: "$4,499/month",
      savings: "Save $1,500/month",
      benefits: ["80% efficiency gain", "Cost reduction", "Error elimination", "24/7 operation"],
      useCases: ["Business processes", "Customer service", "Data processing", "Workflow automation"],
      href: "/ai-automation",
      popular: false,
      category: "Automation"
    },
    {
      title: "AI Consulting & Strategy",
      description: "Strategic AI consulting to help you identify opportunities, develop roadmaps, and implement AI solutions with expert guidance and support.",
      icon: LightBulbIcon,
      features: [
        "AI strategy development",
        "Technology assessment & selection",
        "Implementation planning & roadmaps",
        "ROI analysis & business case",
        "Change management & training",
        "AI governance & ethics",
        "Vendor evaluation",
        "Ongoing support & optimization"
      ],
      color: "from-cyan-500 via-blue-500 to-indigo-500",
      price: "$1,999/month",
      originalPrice: "$2,999/month",
      savings: "Save $1,000/month",
      benefits: ["Expert guidance", "Strategic planning", "Risk mitigation", "Proven methodology"],
      useCases: ["AI transformation", "Technology adoption", "Process improvement", "Digital strategy"],
      href: "/ai-consulting",
      popular: false,
      category: "Consulting"
    },
    {
      title: "AI-Powered Analytics Platform",
      description: "Comprehensive analytics platform with AI-driven insights, automated reporting, and predictive analytics for data-driven decision making.",
      icon: ChartBarIcon,
      features: [
        "AI-powered data insights",
        "Automated report generation",
        "Predictive analytics dashboard",
        "Real-time data processing",
        "Custom visualization tools",
        "Multi-source data integration",
        "Advanced statistical analysis",
        "Collaborative analytics workspace"
      ],
      color: "from-teal-500 via-cyan-500 to-blue-500",
      price: "$4,499/month",
      originalPrice: "$6,999/month",
      savings: "Save $2,500/month",
      benefits: ["Actionable insights", "Automated reporting", "Real-time analytics", "Easy integration"],
      useCases: ["Business intelligence", "Performance tracking", "Data analysis", "Executive reporting"],
      href: "/ai-analytics-platform",
      popular: true,
      category: "Analytics"
    },
    {
      title: "AI Content Generation Suite",
      description: "Advanced AI content creation platform for generating high-quality text, images, videos, and multimedia content with brand consistency.",
      icon: DocumentTextIcon,
      features: [
        "AI text generation (50+ formats)",
        "Image & video generation",
        "Content optimization & SEO",
        "Brand voice consistency",
        "Multi-language content creation",
        "Content scheduling & automation",
        "Performance analytics",
        "Plagiarism detection & originality"
      ],
      color: "from-pink-500 via-rose-500 to-red-500",
      price: "$2,499/month",
      originalPrice: "$3,999/month",
      savings: "Save $1,500/month",
      benefits: ["90% time savings", "Consistent quality", "SEO optimization", "Multi-format support"],
      useCases: ["Content marketing", "Social media", "Blog management", "Creative design"],
      href: "/ai-content-generation",
      popular: false,
      category: "Content AI"
    }
  ];

  const features = [
    {
      title: "Enterprise-Grade AI",
      description: "State-of-the-art AI algorithms and models trained on massive datasets for superior performance and accuracy.",
      icon: CpuChipIcon,
      color: "from-purple-500 to-cyan-500"
    },
    {
      title: "Real-Time Processing",
      description: "Lightning-fast AI processing with sub-second response times for real-time applications and decision making.",
      icon: BoltIcon,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Scalable Architecture",
      description: "AI solutions that grow with your business and handle increasing data volumes and complexity seamlessly.",
      icon: CloudIcon,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption, compliance, and privacy protection built into every AI solution.",
      icon: ShieldCheckIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business needs, industry, and use cases.",
      icon: CogIcon,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Expert Support",
      description: "Dedicated AI experts who provide ongoing support, monitoring, and optimization of your AI systems.",
      icon: UserGroupIcon,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const implementationSteps = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description: "We analyze your business processes, data, and requirements to identify AI opportunities and create a strategic roadmap.",
      icon: LightBulbIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "2",
      title: "Solution Design",
      description: "We design custom AI solutions tailored to your specific needs, industry requirements, and business objectives.",
      icon: CogIcon,
      color: "from-cyan-500 to-blue-500"
    },
    {
      step: "3",
      title: "Development & Training",
      description: "Our AI experts develop and train models using your data for optimal performance and accuracy.",
      icon: CpuChipIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "We deploy your AI solution and provide ongoing support, monitoring, and optimization for continuous improvement.",
      icon: RocketLaunchIcon,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const categories = [
    "All Solutions",
    "Core AI",
    "Language AI",
    "Visual AI",
    "Analytics",
    "Automation",
    "Consulting",
    "Content AI"
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group | Advanced Artificial Intelligence Services</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, computer vision, predictive analytics, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI solutions, machine learning, natural language processing, computer vision, predictive analytics, AI automation, artificial intelligence consulting" />
        <meta property="og:title" content="AI Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions. Machine learning, NLP, computer vision, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce delay-1000"></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-500/30 mb-8">
                <SparklesIcon className="w-6 h-6 text-purple-400 mr-3" />
                <span className="text-purple-300 font-semibold text-lg">Advanced AI Solutions</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                AI Solutions
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                Transform your business with <span className="text-cyan-400 font-semibold">cutting-edge artificial intelligence solutions</span> that drive innovation, 
                efficiency, and competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-bold text-xl shadow-2xl hover:shadow-purple-500/25"
                >
                  <RocketLaunchIcon className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform" />
                  Get AI Consultation
                </Link>
                <Link 
                  to="/demo" 
                  className="group border-2 border-purple-500 text-purple-300 px-10 py-5 rounded-2xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-bold text-xl"
                >
                  <EyeIcon className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
                  View AI Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">98%</div>
                  <div className="text-gray-400">AI Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-400">AI Models</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-gray-400">AI Support</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">100+</div>
                  <div className="text-gray-400">Languages</div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Services Grid */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Our AI Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Comprehensive AI solutions designed to transform every aspect of your business with cutting-edge technology.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-3 bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 border border-slate-700 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden">
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <StarIcon className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="inline-block bg-slate-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {service.category}
                    </div>

                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-semibold">
                          {service.savings}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">per month, billed annually</p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <BoltIcon className="w-5 h-5 text-yellow-400 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        <li className="text-sm text-cyan-400 font-medium">
                          +{service.features.length - 4} more features
                        </li>
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <FireIcon className="w-5 h-5 text-orange-400 mr-2" />
                        Benefits
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link 
                      to={service.href}
                      className="group/btn w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold"
                    >
                      Learn More
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Why Choose Our AI Solutions?
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Built with cutting-edge technology and designed for enterprise-scale performance and reliability.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="group text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Implementation Process */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Our AI Implementation Process
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  A proven methodology for successful AI implementation and deployment in your organization.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="group text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-3xl p-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Ready to Harness the Power of AI?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Join thousands of businesses already using our AI solutions to drive innovation, efficiency, and competitive advantage.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link 
                    to="/contact" 
                    className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-bold text-xl shadow-2xl hover:shadow-purple-500/25"
                  >
                    <RocketLaunchIcon className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform" />
                    Get Free AI Consultation
                  </Link>
                  <Link 
                    to="/demo" 
                    className="group border-2 border-purple-500 text-purple-300 px-10 py-5 rounded-2xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-bold text-xl"
                  >
                    <EyeIcon className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
                    Schedule AI Demo
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <PhoneIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div>+1 (302) 464-0950</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div>kleber@ziontechgroup.com</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <MapPinIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Visit Us</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AISolutionsPage;