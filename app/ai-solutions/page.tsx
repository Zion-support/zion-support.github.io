<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
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
<<<<<<< HEAD
} from '@heroicons/react/24/outline'
=======
} from '@heroicons/react/24/outline';

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
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
<<<<<<< HEAD
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,800/month",
      benefits: ["Multi-language support", "Real-time processing", "High accuracy"],
      useCases: ["Customer support", "Content analysis", "Language translation"],
=======
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $2,200/month",
      benefits: ["Multi-language support", "Real-time analysis", "High accuracy"],
      useCases: ["Customer feedback analysis", "Content moderation", "Chatbots"],
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
      href: "/ai-nlp"
    },
    {
      title: "Computer Vision",
      description: "Advanced computer vision solutions for image recognition, object detection, and visual analytics.",
      icon: EyeIcon,
      features: [
<<<<<<< HEAD
=======
        "Object detection",
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
        "Image classification",
        "Object detection",
        "Facial recognition",
        "OCR (Optical Character Recognition)",
        "Video analysis",
<<<<<<< HEAD
        "Real-time processing"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $4,200/month",
      benefits: ["High accuracy", "Real-time processing", "Custom models"],
      useCases: ["Quality control", "Security systems", "Medical imaging"],
=======
        "Quality inspection"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,800/month",
      benefits: ["99.5% accuracy", "Real-time processing", "Multi-format support"],
      useCases: ["Quality control", "Security monitoring", "Medical imaging"],
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
      href: "/ai-computer-vision"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven predictions and forecasting using advanced machine learning algorithms and statistical models.",
      icon: ChartBarIcon,
      features: [
<<<<<<< HEAD
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
=======
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
    },
    {
      title: "AI Data Analytics",
      description: "Advanced AI-powered analytics for extracting insights from complex datasets and driving data-driven decisions.",
      icon: ChartBarIcon,
      features: [
        "Automated data analysis",
        "Pattern recognition",
        "Predictive insights",
        "Custom dashboards",
        "Real-time reporting",
        "Data visualization"
      ],
      color: "from-teal-500 to-green-500",
      price: "Starting at $2,000/month",
      benefits: ["Real-time insights", "Automated analysis", "Custom dashboards"],
      useCases: ["Business intelligence", "Market research", "Performance tracking"],
      href: "/ai-data-analytics"
    },
    {
      title: "AI Process Automation",
      description: "Intelligent process automation using AI to streamline workflows and eliminate manual tasks.",
      icon: CogIcon,
      features: [
        "Workflow automation",
        "Document processing",
        "Data extraction",
        "Decision automation",
        "Integration management",
        "Performance monitoring"
      ],
      color: "from-violet-500 to-purple-500",
      price: "Starting at $2,500/month",
      benefits: ["70% efficiency gain", "Error reduction", "Cost savings"],
      useCases: ["Document processing", "Workflow optimization", "Data entry"],
      href: "/ai-process-automation"
    },
    {
      title: "AI Recommendation Engines",
      description: "Smart recommendation systems powered by AI to personalize user experiences and increase engagement.",
      icon: LightBulbIcon,
      features: [
        "Personalized recommendations",
        "Real-time processing",
        "A/B testing",
        "Performance analytics",
        "Multi-algorithm support",
        "Scalable architecture"
      ],
      color: "from-amber-500 to-orange-500",
      price: "Starting at $1,800/month",
      benefits: ["30% engagement increase", "Personalized experience", "Real-time updates"],
      useCases: ["E-commerce", "Content platforms", "Streaming services"],
      href: "/ai-recommendation-engines"
    },
    {
      title: "AI Fraud Detection",
      description: "Advanced AI-powered fraud detection systems for real-time threat identification and prevention.",
      icon: ShieldCheckIcon,
      features: [
        "Real-time fraud detection",
        "Behavioral analysis",
        "Risk scoring",
        "Automated alerts",
        "False positive reduction",
        "Compliance reporting"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $3,200/month",
      benefits: ["99.9% accuracy", "Real-time detection", "Zero false positives"],
      useCases: ["Financial services", "E-commerce", "Insurance"],
      href: "/ai-fraud-detection"
    },
    {
      title: "AI Voice Recognition",
      description: "Advanced voice recognition and speech processing solutions for voice commands and transcription.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Speech-to-text conversion",
        "Voice commands",
        "Multi-language support",
        "Noise cancellation",
        "Speaker identification",
        "Real-time processing"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,500/month",
      benefits: ["95% accuracy", "Multi-language", "Real-time processing"],
      useCases: ["Voice assistants", "Transcription services", "Accessibility"],
      href: "/ai-voice-recognition"
    },
    {
      title: "AI Business Intelligence",
      description: "Comprehensive AI-powered business intelligence solutions for strategic decision making and insights.",
      icon: ChartBarIcon,
      features: [
        "Strategic insights",
        "Market analysis",
        "Competitive intelligence",
        "ROI optimization",
        "Trend forecasting",
        "Executive dashboards"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "Starting at $4,000/month",
      benefits: ["Strategic insights", "Market intelligence", "ROI optimization"],
      useCases: ["Strategic planning", "Market analysis", "Competitive research"],
      href: "/ai-business-intelligence"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
    }
<<<<<<< HEAD
  ];
<<<<<<< HEAD
=======

>>>>>>> cursor/analyze-improve-and-deploy-application-4227
const AISolutionsPage: React.FC = () => {
=======
  ]
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
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Explore our advanced AI solutions including machine learning, natural language processing, and predictive analytics." />
      </Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text neon-text">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-green-400">{service.price}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={service.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg hover:bg-purple-400/10"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technology and designed for enterprise-scale performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Algorithms</h3>
              <p className="text-gray-300">
                State-of-the-art AI algorithms and models trained on massive datasets for superior performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Processing</h3>
              <p className="text-gray-300">
                Lightning-fast AI processing with sub-second response times for real-time applications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with encryption, compliance, and privacy protection built-in.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored AI solutions designed specifically for your business needs and use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful AI implementation and deployment
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our AI solutions can transform your business and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free AI Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule AI Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
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
        </div>
<<<<<<< HEAD
      </section>;    </>
=======
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Machine Learning</h3>
              <p className="text-gray-300 mb-6">Custom ML models tailored to your specific business needs and data.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Natural Language Processing</h3>
              <p className="text-gray-300 mb-6">Advanced NLP solutions for text analysis and language understanding.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
              <p className="text-gray-300 mb-6">Data-driven insights and predictions to guide business decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </>
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
=======
      </section>
    </>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
  );
}
export default AISolutionsPage;
=======
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, computer vision, and predictive analytics." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, predictive analytics, AI consulting" />
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
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our AI Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="text-purple-400 font-semibold">{service.price}</p>
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )}
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
