import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart, 
  Users, 
  Mail, 
  Calendar, 
  FileText, 
  Image, 
  Video, 
  Code, 
  Database,
  Globe,
  Smartphone,
  Cloud,
  Lock,
  CheckCircle,
  Star,
  ArrowRight,
  ExternalLink,
  Cpu,
  Eye,
  MessageSquare,
  TrendingUp,
  Target,
  Settings
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      id: 1,
      name: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, recommendation systems, and automated decision-making processes.",
      icon: Brain,
      price: "$2,500",
      period: "/month",
      features: [
        "Custom Model Development",
        "Data Preprocessing",
        "Model Training & Validation",
        "Real-time Predictions",
        "A/B Testing Framework",
        "Model Monitoring & Maintenance"
      ],
      category: "Core AI",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      useCases: ["Predictive Analytics", "Recommendation Systems", "Fraud Detection", "Demand Forecasting"]
    },
    {
      id: 2,
      name: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, chatbots, and language translation.",
      icon: MessageSquare,
      price: "$1,800",
      period: "/month",
      features: [
        "Text Classification",
        "Sentiment Analysis",
        "Named Entity Recognition",
        "Language Translation",
        "Text Summarization",
        "Chatbot Development"
      ],
      category: "Language AI",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      useCases: ["Customer Support", "Content Moderation", "Market Research", "Document Processing"]
    },
    {
      id: 3,
      name: "Computer Vision",
      description: "Image and video analysis solutions for object detection, facial recognition, and visual inspection.",
      icon: Eye,
      price: "$2,200",
      period: "/month",
      features: [
        "Object Detection & Recognition",
        "Facial Recognition",
        "Image Classification",
        "Video Analysis",
        "OCR (Optical Character Recognition)",
        "Medical Image Analysis"
      ],
      category: "Visual AI",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      useCases: ["Quality Control", "Security Systems", "Medical Diagnosis", "Autonomous Vehicles"]
    },
    {
      id: 4,
      name: "AI-Powered Analytics",
      description: "Intelligent data analysis with automated insights, anomaly detection, and predictive reporting.",
      icon: BarChart,
      price: "$1,500",
      period: "/month",
      features: [
        "Automated Insights Generation",
        "Anomaly Detection",
        "Predictive Analytics",
        "Custom Dashboards",
        "Real-time Monitoring",
        "Automated Reporting"
      ],
      category: "Analytics",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      useCases: ["Business Intelligence", "Risk Management", "Performance Optimization", "Market Analysis"]
    },
    {
      id: 5,
      name: "AI Automation Platform",
      description: "Intelligent process automation with RPA, workflow optimization, and decision-making capabilities.",
      icon: Settings,
      price: "$3,000",
      period: "/month",
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Decision Engine",
        "Exception Handling",
        "Integration APIs",
        "Performance Monitoring"
      ],
      category: "Automation",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      useCases: ["Document Processing", "Customer Onboarding", "Inventory Management", "Financial Operations"]
    },
    {
      id: 6,
      name: "AI Content Generation",
      description: "Advanced content creation using AI for blogs, marketing materials, social media, and documentation.",
      icon: FileText,
      price: "$1,200",
      period: "/month",
      features: [
        "Blog & Article Writing",
        "Marketing Copy Generation",
        "Social Media Content",
        "Technical Documentation",
        "Multi-language Support",
        "Brand Voice Training"
      ],
      category: "Content AI",
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      useCases: ["Content Marketing", "Technical Writing", "Social Media", "E-commerce Descriptions"]
    },
    {
      id: 7,
      name: "AI Customer Intelligence",
      description: "Comprehensive customer analysis with behavior prediction, churn prevention, and personalization.",
      icon: Users,
      price: "$2,800",
      period: "/month",
      features: [
        "Customer Segmentation",
        "Churn Prediction",
        "Personalization Engine",
        "Lifetime Value Prediction",
        "Behavioral Analysis",
        "Recommendation Systems"
      ],
      category: "Customer AI",
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
      useCases: ["Customer Retention", "Personalized Marketing", "Sales Optimization", "Customer Service"]
    },
    {
      id: 8,
      name: "AI Security & Compliance",
      description: "Intelligent security monitoring with threat detection, compliance checking, and automated responses.",
      icon: Shield,
      price: "$3,500",
      period: "/month",
      features: [
        "Threat Detection",
        "Anomaly Detection",
        "Compliance Monitoring",
        "Automated Response",
        "Security Analytics",
        "Risk Assessment"
      ],
      category: "Security AI",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      useCases: ["Cybersecurity", "Fraud Prevention", "Compliance Management", "Risk Assessment"]
    }
  ];

  const categories = [
    "All",
    "Core AI",
    "Language AI",
    "Visual AI",
    "Analytics",
    "Automation",
    "Content AI",
    "Customer AI",
    "Security AI"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredServices, setFilteredServices] = useState(aiServices);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredServices(aiServices);
    } else {
      setFilteredServices(aiServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: Brain },
    { number: "99.9%", label: "Accuracy Rate", icon: Target },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "24/7", label: "AI Monitoring", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Transform your business with cutting-edge artificial intelligence
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            From machine learning to computer vision, our AI services help you harness the power of artificial 
            intelligence to drive innovation, efficiency, and growth across your organization.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse text-center">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-2 neon-text">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'cyber-button'
                    : 'quantum-card text-gray-300 hover:text-white hover:neon-glow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`quantum-card p-6 energy-pulse ${service.borderColor} border-2`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${service.bgColor} ${service.color}`}>
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-text">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400">{service.period}</span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="cyber-button flex-1 text-center py-3">
                    Get Started
                  </button>
                  <button className={`quantum-card ${service.borderColor} border-2 px-4 py-3 hover:neon-glow transition-all duration-300`}>
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Implementation Process */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Our AI Implementation Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="quantum-card p-6 energy-pulse text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
              <p className="text-gray-300 text-sm">
                Analyze your business needs and identify AI opportunities for maximum impact.
              </p>
            </div>

            <div className="quantum-card p-6 energy-pulse text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Design</h3>
              <p className="text-gray-300 text-sm">
                Create custom AI solutions tailored to your specific requirements and data.
              </p>
            </div>

            <div className="quantum-card p-6 energy-pulse text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Deploy</h3>
              <p className="text-gray-300 text-sm">
                Implement and integrate AI solutions into your existing systems seamlessly.
              </p>
            </div>

            <div className="quantum-card p-6 energy-pulse text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Optimize</h3>
              <p className="text-gray-300 text-sm">
                Continuously monitor, improve, and scale your AI solutions for better results.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            AI Service Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="quantum-card p-8 energy-pulse">
              <h3 className="text-2xl font-bold text-white mb-4">Starter AI</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$1,500</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  1 AI Service
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic Implementation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Monthly Reports
                </li>
              </ul>
              <button className="cyber-button w-full text-center py-3">
                Get Started
              </button>
            </div>

            <div className="quantum-card p-8 energy-pulse border-2 border-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional AI</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$4,500</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 3 AI Services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Real-time Monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API Integration
                </li>
              </ul>
              <button className="cyber-button w-full text-center py-3">
                Get Started
              </button>
            </div>

            <div className="quantum-card p-8 energy-pulse">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise AI</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$12,000</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited AI Services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom AI Development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise Deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SLA Guarantee
                </li>
              </ul>
              <button className="cyber-button w-full text-center py-3">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-8 sm:p-12 quantum-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your business with our cutting-edge AI services. Get a free consultation and discover 
            how artificial intelligence can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free AI Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;