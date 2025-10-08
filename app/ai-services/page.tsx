import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, Bot, Eye, MessageSquare, BarChart3, Mail, Calendar, FileText, Settings, Lock, ArrowRight, Cpu, Database, Globe, Smartphone } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      id: 1,
      name: "Machine Learning Platform",
      description: "End-to-end ML platform with automated model training, deployment, and monitoring for enterprise applications.",
      price: "$2,500",
      period: "/month",
      features: [
        "Automated Model Training",
        "Real-time Model Deployment",
        "A/B Testing Framework",
        "Model Performance Monitoring",
        "Data Pipeline Automation",
        "Custom Algorithm Development",
        "Scalable Infrastructure",
        "24/7 Technical Support"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      popular: true,
      category: "Machine Learning",
      useCases: ["Predictive Analytics", "Recommendation Systems", "Fraud Detection", "Demand Forecasting"]
    },
    {
      id: 2,
      name: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.",
      price: "$1,800",
      period: "/month",
      features: [
        "Text Classification & Sentiment Analysis",
        "Language Translation (100+ languages)",
        "Named Entity Recognition",
        "Text Summarization",
        "Question Answering Systems",
        "Chatbot Development",
        "Document Processing",
        "API Integration"
      ],
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      popular: false,
      category: "NLP",
      useCases: ["Customer Support", "Content Moderation", "Document Analysis", "Multilingual Support"]
    },
    {
      id: 3,
      name: "Computer Vision Solutions",
      description: "Cutting-edge computer vision services for image recognition, object detection, and visual analytics.",
      price: "$2,200",
      period: "/month",
      features: [
        "Image Classification & Recognition",
        "Object Detection & Tracking",
        "Facial Recognition Systems",
        "OCR & Document Scanning",
        "Medical Image Analysis",
        "Quality Control Automation",
        "Real-time Video Processing",
        "Custom Model Training"
      ],
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600",
      popular: true,
      category: "Computer Vision",
      useCases: ["Medical Imaging", "Security Systems", "Manufacturing QC", "Retail Analytics"]
    },
    {
      id: 4,
      name: "AI Chatbot Platform",
      description: "Intelligent conversational AI platform with multi-channel support, voice integration, and advanced analytics.",
      price: "$1,200",
      period: "/month",
      features: [
        "Multi-channel Deployment",
        "Voice & Text Integration",
        "Context-aware Conversations",
        "Intent Recognition",
        "Sentiment Analysis",
        "Human Handoff",
        "Analytics Dashboard",
        "Custom Training"
      ],
      icon: <Bot className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      popular: false,
      category: "Conversational AI",
      useCases: ["Customer Service", "Lead Generation", "Internal Support", "E-commerce Assistant"]
    },
    {
      id: 5,
      name: "Predictive Analytics Suite",
      description: "Advanced predictive modeling platform for forecasting, risk assessment, and business intelligence.",
      price: "$3,000",
      period: "/month",
      features: [
        "Time Series Forecasting",
        "Risk Assessment Models",
        "Customer Lifetime Value Prediction",
        "Churn Prediction",
        "Demand Forecasting",
        "Financial Risk Modeling",
        "Custom Algorithm Development",
        "Real-time Predictions"
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-600",
      popular: true,
      category: "Predictive Analytics",
      useCases: ["Financial Services", "Retail Forecasting", "Supply Chain", "Healthcare Predictions"]
    },
    {
      id: 6,
      name: "AI Content Generation",
      description: "Comprehensive AI content creation platform for text, images, videos, and multimedia content.",
      price: "$800",
      period: "/month",
      features: [
        "Text Generation (Articles, Blogs, Copy)",
        "Image Generation & Editing",
        "Video Content Creation",
        "Social Media Content",
        "SEO-optimized Content",
        "Brand Voice Training",
        "Content Calendar Integration",
        "Performance Analytics"
      ],
      icon: <FileText className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600",
      popular: false,
      category: "Content AI",
      useCases: ["Marketing Content", "Blog Writing", "Social Media", "Product Descriptions"]
    },
    {
      id: 7,
      name: "AI Process Automation",
      description: "Intelligent automation platform for business processes with decision-making capabilities and exception handling.",
      price: "$1,500",
      period: "/month",
      features: [
        "Workflow Automation",
        "Document Processing",
        "Data Extraction & Validation",
        "Decision Tree Automation",
        "Exception Handling",
        "Integration APIs",
        "Process Monitoring",
        "Custom Workflow Builder"
      ],
      icon: <Settings className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-600",
      popular: true,
      category: "Process Automation",
      useCases: ["Invoice Processing", "Claims Processing", "Data Entry", "Compliance Monitoring"]
    },
    {
      id: 8,
      name: "AI Data Analytics",
      description: "Advanced data analytics platform with AI-powered insights, pattern recognition, and automated reporting.",
      price: "$2,000",
      period: "/month",
      features: [
        "Automated Data Processing",
        "Pattern Recognition",
        "Anomaly Detection",
        "Predictive Insights",
        "Interactive Dashboards",
        "Natural Language Queries",
        "Real-time Analytics",
        "Custom Report Generation"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600",
      popular: false,
      category: "Data Analytics",
      useCases: ["Business Intelligence", "Market Research", "Performance Analysis", "Risk Management"]
    },
    {
      id: 9,
      name: "AI Security Solutions",
      description: "Comprehensive AI-powered security platform for threat detection, fraud prevention, and cybersecurity.",
      price: "$2,800",
      period: "/month",
      features: [
        "Threat Detection & Response",
        "Fraud Prevention",
        "Behavioral Analysis",
        "Network Security Monitoring",
        "Incident Response Automation",
        "Compliance Monitoring",
        "Real-time Alerts",
        "Security Analytics"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-600",
      popular: true,
      category: "AI Security",
      useCases: ["Cybersecurity", "Fraud Detection", "Compliance", "Risk Assessment"]
    },
    {
      id: 10,
      name: "AI Healthcare Solutions",
      description: "Specialized AI solutions for healthcare including medical imaging, drug discovery, and patient care optimization.",
      price: "$4,500",
      period: "/month",
      features: [
        "Medical Image Analysis",
        "Drug Discovery Support",
        "Patient Risk Assessment",
        "Treatment Recommendation",
        "Clinical Decision Support",
        "Medical Record Analysis",
        "HIPAA Compliance",
        "Integration with EMR Systems"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      popular: false,
      category: "Healthcare AI",
      useCases: ["Medical Diagnosis", "Drug Development", "Patient Monitoring", "Clinical Research"]
    }
  ];

  const categories = ["All", "Machine Learning", "NLP", "Computer Vision", "Conversational AI", "Predictive Analytics", "Content AI", "Process Automation", "Data Analytics", "AI Security", "Healthcare AI"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = selectedCategory === "All" 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-16">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence services designed to transform your business operations. 
              From machine learning to computer vision, we deliver enterprise-grade AI solutions.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-8">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 ${
                  service.popular ? 'ring-2 ring-blue-400/50' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  {service.icon}
                </div>

                <div className="mb-4">
                  <span className="text-blue-400 text-sm font-medium">{service.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                  
                  {/* Use Cases */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Common Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400 ml-1">{service.period}</span>
                  </div>
                  <p className="text-sm text-gray-400">Enterprise pricing • Custom solutions available</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full bg-white/10 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* AI Capabilities Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our AI Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Machine Learning</h3>
                <p className="text-gray-300 text-sm">Advanced ML algorithms and model training</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Natural Language</h3>
                <p className="text-gray-300 text-sm">NLP and conversational AI solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Computer Vision</h3>
                <p className="text-gray-300 text-sm">Image and video analysis capabilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Automation</h3>
                <p className="text-gray-300 text-sm">Intelligent process automation</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our AI experts are ready to help you implement cutting-edge artificial intelligence solutions 
              that will revolutionize your business operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Schedule AI Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;