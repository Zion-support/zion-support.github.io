'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ArrowRightIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
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
  ServerIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  HeartIcon,
  StarIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  BeakerIcon,
  CommandLineIcon,
  DatabaseIcon,
  LockClosedIcon,
  KeyIcon,
  ShieldExclamationIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
  TrophyIcon,
  GiftIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "description": "Advanced artificial intelligence services including machine learning, natural language processing, computer vision, and predictive analytics",
    "serviceType": "Artificial Intelligence Services",
    "areaServed": "Worldwide"
  };

  const aiServices = [
    {
      title: "Machine Learning Models",
      description: "Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing. Build, train, and deploy ML models that drive business value.",
      icon: CpuChipIcon,
      price: "$3,500/month",
      features: [
        "Custom algorithm development",
        "Real-time model training",
        "A/B testing framework",
        "Model performance monitoring",
        "Automated retraining",
        "Edge deployment",
        "Model versioning",
        "API integration"
      ],
      benefits: [
        "95% accuracy rate",
        "Real-time processing",
        "Custom algorithms",
        "Scalable infrastructure"
      ],
      useCases: [
        "Predictive analytics",
        "Recommendation engines",
        "Fraud detection",
        "Demand forecasting"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "AWS", "Docker"],
      href: "/ai-machine-learning"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI. Transform unstructured text into actionable insights.",
      icon: ChatBubbleLeftRightIcon,
      price: "$2,200/month",
      features: [
        "Sentiment analysis",
        "Text classification",
        "Language translation",
        "Named entity recognition",
        "Text summarization",
        "Conversational AI",
        "Intent recognition",
        "Multi-language support"
      ],
      benefits: [
        "Multi-language support",
        "Real-time analysis",
        "High accuracy",
        "Scalable processing"
      ],
      useCases: [
        "Customer feedback analysis",
        "Content moderation",
        "Chatbots",
        "Document processing"
      ],
      technologies: ["OpenAI GPT", "BERT", "Transformers", "SpaCy", "NLTK", "AWS"],
      href: "/ai-nlp"
    },
    {
      title: "Computer Vision",
      description: "AI-powered computer vision solutions for image recognition, object detection, and visual analytics. Extract valuable insights from visual data.",
      icon: EyeIcon,
      price: "$2,800/month",
      features: [
        "Object detection",
        "Image classification",
        "Facial recognition",
        "OCR technology",
        "Video analysis",
        "Quality inspection",
        "Real-time processing",
        "Custom model training"
      ],
      benefits: [
        "99.5% accuracy",
        "Real-time processing",
        "Multi-format support",
        "Edge deployment"
      ],
      useCases: [
        "Quality control",
        "Security monitoring",
        "Medical imaging",
        "Autonomous vehicles"
      ],
      technologies: ["OpenCV", "TensorFlow", "PyTorch", "YOLO", "AWS Rekognition", "Docker"],
      href: "/ai-computer-vision"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced predictive analytics using AI to forecast trends, customer behavior, and business outcomes. Make data-driven decisions with confidence.",
      icon: ChartBarIcon,
      price: "$2,500/month",
      features: [
        "Demand forecasting",
        "Customer churn prediction",
        "Sales forecasting",
        "Risk assessment",
        "Market trend analysis",
        "Anomaly detection",
        "Real-time predictions",
        "Custom dashboards"
      ],
      benefits: [
        "90% forecast accuracy",
        "Real-time insights",
        "Automated alerts",
        "ROI optimization"
      ],
      useCases: [
        "Sales forecasting",
        "Inventory management",
        "Risk management",
        "Market analysis"
      ],
      technologies: ["Python", "R", "Pandas", "Scikit-learn", "Tableau", "Power BI"],
      href: "/ai-predictive-analytics"
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI solutions for customer service, sales, and internal operations. Provide 24/7 intelligent support to your customers.",
      icon: ChatBubbleLeftRightIcon,
      price: "$1,800/month",
      features: [
        "Natural conversations",
        "Multi-channel support",
        "Context awareness",
        "Integration capabilities",
        "Analytics dashboard",
        "Custom training",
        "Voice and text support",
        "Escalation management"
      ],
      benefits: [
        "24/7 availability",
        "Instant responses",
        "95% satisfaction",
        "Cost reduction"
      ],
      useCases: [
        "Customer support",
        "Lead qualification",
        "Internal helpdesk",
        "Sales assistance"
      ],
      technologies: ["OpenAI GPT", "Dialogflow", "Rasa", "WebSocket", "React", "Node.js"],
      href: "/ai-chatbots"
    },
    {
      title: "AI Content Generation",
      description: "AI-powered content creation tools for automated writing, optimization, and personalization. Scale your content production with intelligent automation.",
      icon: DocumentTextIcon,
      price: "$1,200/month",
      features: [
        "Automated content creation",
        "SEO optimization",
        "Multi-language generation",
        "Brand voice consistency",
        "Content personalization",
        "Performance analytics",
        "Plagiarism detection",
        "Social media integration"
      ],
      benefits: [
        "80% time savings",
        "SEO optimized",
        "Consistent quality",
        "Scalable production"
      ],
      useCases: [
        "Blog content",
        "Marketing copy",
        "Product descriptions",
        "Social media posts"
      ],
      technologies: ["GPT-4", "Claude", "BERT", "React", "Node.js", "AWS"],
      href: "/ai-content-generation"
    },
    {
      title: "AI Data Analytics",
      description: "Advanced AI-powered analytics for extracting insights from complex datasets and driving data-driven decisions. Transform your data into competitive advantage.",
      icon: ChartBarIcon,
      price: "$2,000/month",
      features: [
        "Automated data analysis",
        "Pattern recognition",
        "Predictive insights",
        "Custom dashboards",
        "Real-time reporting",
        "Data visualization",
        "Anomaly detection",
        "Integration capabilities"
      ],
      benefits: [
        "Real-time insights",
        "Automated analysis",
        "Custom dashboards",
        "Actionable recommendations"
      ],
      useCases: [
        "Business intelligence",
        "Market research",
        "Performance tracking",
        "Customer analytics"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Plotly", "D3.js"],
      href: "/ai-data-analytics"
    },
    {
      title: "AI Process Automation",
      description: "Intelligent process automation using AI to streamline workflows and eliminate manual tasks. Automate complex business processes with smart AI.",
      icon: CogIcon,
      price: "$2,500/month",
      features: [
        "Workflow automation",
        "Document processing",
        "Data extraction",
        "Decision automation",
        "Integration management",
        "Performance monitoring",
        "Error handling",
        "Scalable deployment"
      ],
      benefits: [
        "70% efficiency gain",
        "Error reduction",
        "Cost savings",
        "24/7 operation"
      ],
      useCases: [
        "Document processing",
        "Workflow optimization",
        "Data entry",
        "Compliance automation"
      ],
      technologies: ["Python", "RPA", "OCR", "NLP", "AWS", "Docker"],
      href: "/ai-process-automation"
    },
    {
      title: "AI Recommendation Engines",
      description: "Smart recommendation systems powered by AI to personalize user experiences and increase engagement. Boost your conversion rates with intelligent recommendations.",
      icon: LightBulbIcon,
      price: "$1,800/month",
      features: [
        "Personalized recommendations",
        "Real-time processing",
        "A/B testing",
        "Performance analytics",
        "Multi-algorithm support",
        "Scalable architecture",
        "Cold start handling",
        "Feedback integration"
      ],
      benefits: [
        "30% engagement increase",
        "Personalized experience",
        "Real-time updates",
        "Higher conversion rates"
      ],
      useCases: [
        "E-commerce",
        "Content platforms",
        "Streaming services",
        "Social media"
      ],
      technologies: ["Python", "TensorFlow", "Apache Spark", "Redis", "PostgreSQL", "AWS"],
      href: "/ai-recommendation-engines"
    },
    {
      title: "AI Fraud Detection",
      description: "Advanced AI-powered fraud detection systems for real-time threat identification and prevention. Protect your business with intelligent security.",
      icon: ShieldCheckIcon,
      price: "$3,200/month",
      features: [
        "Real-time fraud detection",
        "Behavioral analysis",
        "Risk scoring",
        "Automated alerts",
        "False positive reduction",
        "Compliance reporting",
        "Machine learning models",
        "Integration capabilities"
      ],
      benefits: [
        "99.9% accuracy",
        "Real-time detection",
        "Zero false positives",
        "Compliance ready"
      ],
      useCases: [
        "Financial services",
        "E-commerce",
        "Insurance",
        "Payment processing"
      ],
      technologies: ["Python", "TensorFlow", "XGBoost", "Apache Kafka", "Redis", "AWS"],
      href: "/ai-fraud-detection"
    },
    {
      title: "AI Voice Recognition",
      description: "Advanced voice recognition and speech processing solutions for voice commands and transcription. Enable voice-first experiences for your applications.",
      icon: ChatBubbleLeftRightIcon,
      price: "$1,500/month",
      features: [
        "Speech-to-text conversion",
        "Voice commands",
        "Multi-language support",
        "Noise cancellation",
        "Speaker identification",
        "Real-time processing",
        "Custom wake words",
        "Integration APIs"
      ],
      benefits: [
        "95% accuracy",
        "Multi-language",
        "Real-time processing",
        "Easy integration"
      ],
      useCases: [
        "Voice assistants",
        "Transcription services",
        "Accessibility",
        "Call center automation"
      ],
      technologies: ["Google Speech", "Azure Speech", "Whisper", "WebRTC", "React", "Node.js"],
      href: "/ai-voice-recognition"
    },
    {
      title: "AI Business Intelligence",
      description: "Comprehensive AI-powered business intelligence solutions for strategic decision making and insights. Transform your data into strategic advantage.",
      icon: ChartBarIcon,
      price: "$4,000/month",
      features: [
        "Strategic insights",
        "Market analysis",
        "Competitive intelligence",
        "ROI optimization",
        "Trend forecasting",
        "Executive dashboards",
        "Automated reporting",
        "Custom analytics"
      ],
      benefits: [
        "Strategic insights",
        "Market intelligence",
        "ROI optimization",
        "Competitive advantage"
      ],
      useCases: [
        "Strategic planning",
        "Market analysis",
        "Competitive research",
        "Executive reporting"
      ],
      technologies: ["Python", "Tableau", "Power BI", "Apache Superset", "AWS", "Docker"],
      href: "/ai-business-intelligence"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter AI",
      price: "$1,200",
      period: "per month",
      description: "Perfect for small businesses starting their AI journey",
      features: [
        "1 AI service",
        "Basic AI features",
        "Email support",
        "Standard integrations",
        "Up to 10,000 API calls",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional AI",
      price: "$2,500",
      period: "per month",
      description: "Ideal for growing businesses with advanced AI needs",
      features: [
        "3 AI services",
        "Advanced AI features",
        "Priority support",
        "Advanced integrations",
        "Up to 100,000 API calls",
        "Advanced analytics",
        "Custom model training"
      ],
      popular: true
    },
    {
      name: "Enterprise AI",
      price: "Custom",
      period: "per month",
      description: "For large organizations requiring comprehensive AI solutions",
      features: [
        "Unlimited AI services",
        "Full AI capabilities",
        "24/7 dedicated support",
        "Custom integrations",
        "Unlimited API calls",
        "Enterprise analytics",
        "White-label solution",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced artificial intelligence services including machine learning, natural language processing, computer vision, and predictive analytics. AI solutions starting at $1,200/month." />
        <meta name="keywords" content="AI solutions, machine learning, natural language processing, computer vision, predictive analytics, artificial intelligence, AI services, deep learning" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden particles">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Advanced Artificial Intelligence for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI technologies including machine learning, 
              natural language processing, computer vision, and predictive analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#pricing" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                View Pricing
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions powered by cutting-edge technology and industry expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-cyan-400 font-semibold text-xl mb-3">{service.price}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-green-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to={service.href} className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect AI plan for your business needs. All plans include 24/7 support and regular updates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift ${
                tier.popular 
                  ? 'border-cyan-500 ring-2 ring-cyan-500/20' 
                  : 'border-slate-600 hover:border-cyan-500'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our AI solutions can transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="group bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Us: +1-302-464-0950
            </Link>
            <Link 
              to="/contact" 
              className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AISolutionsPage;
