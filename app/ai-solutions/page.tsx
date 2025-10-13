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
    },
    {
      title: "AI-Powered Code Review Assistant",
      description: "Intelligent code review system that automatically analyzes code quality, security vulnerabilities, and performance issues.",
      icon: CpuChipIcon,
      features: [
        "Automated code analysis",
        "Security vulnerability detection",
        "Performance optimization",
        "Best practice suggestions",
        "Code quality scoring",
        "Integration with CI/CD"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,500/month",
      benefits: ["50% faster reviews", "Security enhancement", "Code quality improvement"],
      useCases: ["Software development", "Code quality", "Security auditing"],
      href: "/ai-code-review"
    },
    {
      title: "AI-Powered Legal Document Analysis",
      description: "Advanced legal document processing with AI-powered contract analysis, risk assessment, and compliance checking.",
      icon: DocumentTextIcon,
      features: [
        "Contract analysis",
        "Risk assessment",
        "Compliance checking",
        "Clause extraction",
        "Legal research",
        "Document comparison"
      ],
      color: "from-slate-500 to-gray-500",
      price: "Starting at $2,800/month",
      benefits: ["90% time savings", "Risk mitigation", "Compliance assurance"],
      useCases: ["Legal document review", "Contract management", "Compliance monitoring"],
      href: "/ai-legal-analysis"
    },
    {
      title: "AI-Powered Medical Diagnosis Assistant",
      description: "Advanced medical AI system for diagnostic assistance, symptom analysis, and treatment recommendations.",
      icon: ShieldCheckIcon,
      features: [
        "Symptom analysis",
        "Diagnostic assistance",
        "Treatment recommendations",
        "Medical image analysis",
        "Drug interaction checking",
        "Patient monitoring"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $5,000/month",
      benefits: ["Improved accuracy", "Faster diagnosis", "Better outcomes"],
      useCases: ["Medical diagnosis", "Healthcare", "Clinical decision support"],
      href: "/ai-medical-diagnosis"
    },
    {
      title: "AI-Powered Supply Chain Optimizer",
      description: "Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning.",
      icon: CloudIcon,
      features: [
        "Demand forecasting",
        "Inventory optimization",
        "Logistics planning",
        "Supplier management",
        "Risk assessment",
        "Cost optimization"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $3,500/month",
      benefits: ["30% cost reduction", "Optimized inventory", "Risk mitigation"],
      useCases: ["Supply chain management", "Logistics optimization", "Inventory control"],
      href: "/ai-supply-chain"
    },
    {
      title: "AI-Powered Energy Management",
      description: "Smart energy management system with AI-powered optimization, consumption analysis, and cost reduction strategies.",
      icon: LightBulbIcon,
      features: [
        "Energy consumption analysis",
        "Cost optimization",
        "Predictive maintenance",
        "Renewable energy integration",
        "Carbon footprint tracking",
        "Automated controls"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $2,200/month",
      benefits: ["25% energy savings", "Cost reduction", "Sustainability improvement"],
      useCases: ["Energy management", "Sustainability", "Cost optimization"],
      href: "/ai-energy-management"
    },
    {
      title: "AI-Powered Real Estate Analytics",
      description: "Advanced real estate market analysis with AI-powered property valuation, market trends, and investment insights.",
      icon: ChartBarIcon,
      features: [
        "Property valuation",
        "Market trend analysis",
        "Investment recommendations",
        "Risk assessment",
        "Location analysis",
        "ROI predictions"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,800/month",
      benefits: ["Accurate valuations", "Market insights", "Investment optimization"],
      useCases: ["Real estate investment", "Property valuation", "Market analysis"],
      href: "/ai-real-estate"
    },
    {
      title: "AI-Powered Language Translation",
      description: "Advanced multilingual translation system with context understanding, cultural adaptation, and real-time processing.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Multi-language support",
        "Context understanding",
        "Cultural adaptation",
        "Real-time translation",
        "Document translation",
        "Voice translation"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $1,200/month",
      benefits: ["95% accuracy", "Cultural context", "Real-time processing"],
      useCases: ["Global communication", "Document translation", "Multilingual support"],
      href: "/ai-translation"
    },
    {
      title: "AI-Powered Weather Prediction",
      description: "Advanced weather forecasting system with AI-powered analysis, extreme weather prediction, and climate modeling.",
      icon: CloudIcon,
      features: [
        "Weather forecasting",
        "Extreme weather prediction",
        "Climate modeling",
        "Agricultural insights",
        "Risk assessment",
        "Custom alerts"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $2,500/month",
      benefits: ["Improved accuracy", "Early warning", "Risk mitigation"],
      useCases: ["Weather forecasting", "Agriculture", "Risk management"],
      href: "/ai-weather-prediction"
    },
    {
      title: "AI-Powered Personalization Engine",
      description: "Advanced personalization system that creates unique user experiences based on behavior, preferences, and context.",
      icon: UserGroupIcon,
      features: [
        "Behavioral analysis",
        "Preference learning",
        "Context awareness",
        "Dynamic content",
        "A/B testing",
        "Performance optimization"
      ],
      color: "from-rose-500 to-pink-500",
      price: "Starting at $1,600/month",
      benefits: ["40% engagement increase", "Personalized experiences", "Higher conversion"],
      useCases: ["E-commerce", "Content platforms", "Marketing personalization"],
      href: "/ai-personalization"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, computer vision, predictive analytics, and more. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI solutions, machine learning, natural language processing, computer vision, predictive analytics, AI chatbots, artificial intelligence" />
      </Helmet>
      
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
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
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={service.href}
                      className={`flex-1 inline-flex items-center justify-center gap-2 text-${service.color.split(' ')[1].split('-')[1]}-400 hover:text-${service.color.split(' ')[1].split('-')[1]}-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg`}
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all"
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
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free AI Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
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
      </section>
    </>
  );
}