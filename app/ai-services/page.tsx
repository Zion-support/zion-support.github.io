'use client';

import React from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Rocket,
  Code,
  Cloud,
  Smartphone,
  TrendingUp,
  Cpu,
  Stethoscope,
  Truck,
  Mail,
  Video,
  Package,
  Home,
  ShoppingCart,
  BookOpen
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      name: "AI Workflow Automation Pro",
      description: "Enterprise-grade workflow automation with intelligent decision making and exception handling",
      price: "$1,500/mo",
      features: ["Visual Workflow Builder", "Smart Decision Trees", "Exception Handling", "API Integrations", "Real-time Monitoring", "Custom Triggers"],
      icon: Zap,
      popular: true,
      category: "Automation"
    },
    {
      name: "AI Customer Support Suite",
      description: "Advanced 24/7 multilingual customer support with sentiment analysis and escalation management",
      price: "$2,200/mo",
      features: ["Multi-language Support", "Sentiment Analysis", "Escalation Management", "Knowledge Base", "Live Chat Integration", "Call Center AI"],
      icon: Users,
      popular: true,
      category: "Customer Service"
    },
    {
      name: "AI Data Analytics Platform",
      description: "Advanced predictive analytics with machine learning insights and real-time dashboards",
      price: "$2,800/mo",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "Data Visualization", "Anomaly Detection", "Forecasting"],
      icon: BarChart,
      popular: true,
      category: "Analytics"
    },
    {
      name: "AI Content Generation Studio",
      description: "Complete content creation suite with AI-powered writing, editing, and SEO optimization",
      price: "$1,200/mo",
      features: ["Content Creation", "SEO Optimization", "Multi-format Support", "Brand Voice Training", "Plagiarism Detection", "Content Scheduling"],
      icon: FileText,
      popular: false,
      category: "Content"
    },
    {
      name: "AI Healthcare Solutions Pro",
      description: "Medical AI platform for diagnosis support, drug discovery, and patient monitoring",
      price: "$4,500/mo",
      features: ["Medical Imaging AI", "Diagnosis Support", "Drug Discovery", "Patient Monitoring", "Clinical Decision Support", "HIPAA Compliance"],
      icon: Stethoscope,
      popular: true,
      category: "Healthcare"
    },
    {
      name: "AI Fintech Platform",
      description: "Financial AI solutions for fraud detection, risk assessment, and algorithmic trading",
      price: "$3,200/mo",
      features: ["Fraud Detection", "Risk Assessment", "Algorithmic Trading", "Compliance Monitoring", "Credit Scoring", "Anti-Money Laundering"],
      icon: Shield,
      popular: true,
      category: "Finance"
    },
    {
      name: "AI Project Manager Pro",
      description: "Intelligent project management with predictive scheduling and resource optimization",
      price: "$800/mo",
      features: ["Smart Scheduling", "Resource Optimization", "Risk Prediction", "Progress Tracking", "Team Collaboration", "Budget Forecasting"],
      icon: Target,
      popular: false,
      category: "Project Management"
    },
    {
      name: "AI Social Media Manager",
      description: "Automated social media management with content creation and engagement optimization",
      price: "$600/mo",
      features: ["Content Creation", "Post Scheduling", "Engagement Analysis", "Hashtag Optimization", "Influencer Identification", "Trend Analysis"],
      icon: Globe,
      popular: false,
      category: "Social Media"
    },
    {
      name: "AI Email Marketing Suite",
      description: "Intelligent email marketing with personalization and automated campaign optimization",
      price: "$450/mo",
      features: ["Email Personalization", "A/B Testing", "Send Time Optimization", "Subject Line AI", "List Segmentation", "Performance Analytics"],
      icon: Mail,
      popular: false,
      category: "Marketing"
    },
    {
      name: "AI Video Generator",
      description: "AI-powered video creation and editing with automated voiceover and subtitle generation",
      price: "$1,800/mo",
      features: ["Video Creation", "Voice Synthesis", "Subtitle Generation", "Scene Transitions", "Background Music", "Multi-language Support"],
      icon: Video,
      popular: false,
      category: "Video"
    },
    {
      name: "AI Code Assistant Pro",
      description: "Advanced AI coding assistant with code generation, debugging, and optimization suggestions",
      price: "$1,000/mo",
      features: ["Code Generation", "Debugging Assistant", "Code Review", "Documentation Generation", "Test Case Creation", "Performance Optimization"],
      icon: Code,
      popular: true,
      category: "Development"
    },
    {
      name: "AI HR Management System",
      description: "Intelligent HR platform with resume screening, candidate matching, and employee analytics",
      price: "$1,400/mo",
      features: ["Resume Screening", "Candidate Matching", "Interview Scheduling", "Employee Analytics", "Performance Tracking", "Retention Prediction"],
      icon: Users,
      popular: false,
      category: "Human Resources"
    },
    {
      name: "AI Inventory Optimizer",
      description: "Smart inventory management with demand forecasting and automated reordering",
      price: "$1,100/mo",
      features: ["Demand Forecasting", "Automated Reordering", "Stock Optimization", "Supplier Management", "Cost Analysis", "Waste Reduction"],
      icon: Package,
      popular: false,
      category: "Supply Chain"
    },
    {
      name: "AI Legal Document Analyzer",
      description: "AI-powered legal document analysis with contract review and compliance checking",
      price: "$2,500/mo",
      features: ["Contract Analysis", "Compliance Checking", "Risk Assessment", "Document Summarization", "Legal Research", "Due Diligence"],
      icon: FileText,
      popular: false,
      category: "Legal"
    },
    {
      name: "AI Cybersecurity Suite",
      description: "Advanced threat detection and response with behavioral analysis and automated incident response",
      price: "$3,500/mo",
      features: ["Threat Detection", "Behavioral Analysis", "Incident Response", "Vulnerability Scanning", "Security Monitoring", "Compliance Reporting"],
      icon: Shield,
      popular: true,
      category: "Security"
    },
    {
      name: "AI Sales Predictor",
      description: "Predictive sales analytics with lead scoring and revenue forecasting",
      price: "$900/mo",
      features: ["Lead Scoring", "Sales Forecasting", "Pipeline Analysis", "Customer Lifetime Value", "Churn Prediction", "Upselling Opportunities"],
      icon: TrendingUp,
      popular: false,
      category: "Sales"
    },
    {
      name: "AI Quality Assurance",
      description: "Automated quality testing with defect detection and performance monitoring",
      price: "$1,300/mo",
      features: ["Automated Testing", "Defect Detection", "Performance Monitoring", "Quality Metrics", "Test Case Generation", "Regression Testing"],
      icon: CheckCircle,
      popular: false,
      category: "Quality Assurance"
    },
    {
      name: "AI Translation Service",
      description: "Real-time multilingual translation with context understanding and cultural adaptation",
      price: "$700/mo",
      features: ["Real-time Translation", "Context Understanding", "Cultural Adaptation", "Document Translation", "Voice Translation", "API Integration"],
      icon: Globe,
      popular: false,
      category: "Translation"
    },
    {
      name: "AI Energy Optimizer",
      description: "Smart energy management with consumption prediction and optimization recommendations",
      price: "$1,600/mo",
      features: ["Energy Consumption Prediction", "Optimization Recommendations", "Cost Analysis", "Renewable Energy Integration", "Smart Grid Management", "Carbon Footprint Tracking"],
      icon: Zap,
      popular: false,
      category: "Energy"
    },
    {
      name: "AI Real Estate Analyzer",
      description: "Property valuation and market analysis with investment recommendations",
      price: "$1,200/mo",
      features: ["Property Valuation", "Market Analysis", "Investment Recommendations", "Risk Assessment", "Rental Yield Prediction", "Market Trends"],
      icon: Home,
      popular: false,
      category: "Real Estate"
    },
    {
      name: "AI E-commerce Optimizer",
      description: "E-commerce optimization with personalized recommendations and pricing strategies",
      price: "$1,500/mo",
      features: ["Product Recommendations", "Dynamic Pricing", "Inventory Management", "Customer Segmentation", "Conversion Optimization", "A/B Testing"],
      icon: ShoppingCart,
      popular: false,
      category: "E-commerce"
    },
    {
      name: "AI Learning Management System",
      description: "Intelligent learning platform with personalized education paths and progress tracking",
      price: "$1,800/mo",
      features: ["Personalized Learning Paths", "Progress Tracking", "Adaptive Content", "Skill Assessment", "Learning Analytics", "Certification Management"],
      icon: BookOpen,
      popular: false,
      category: "Education"
    },
    {
      name: "AI Drug Discovery Platform",
      description: "Accelerated drug discovery with molecular analysis and clinical trial optimization",
      price: "$5,000/mo",
      features: ["Molecular Analysis", "Drug Design", "Clinical Trial Optimization", "Side Effect Prediction", "Drug Interaction Analysis", "Regulatory Compliance"],
      icon: Stethoscope,
      popular: true,
      category: "Pharmaceuticals"
    },
    {
      name: "AI Climate Solutions",
      description: "Environmental monitoring and climate change mitigation with carbon footprint analysis",
      price: "$2,200/mo",
      features: ["Environmental Monitoring", "Carbon Footprint Analysis", "Climate Modeling", "Sustainability Reporting", "Green Energy Optimization", "Waste Reduction"],
      icon: Globe,
      popular: true,
      category: "Environment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. From automation to analytics, we provide comprehensive AI services to drive innovation and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Case Studies
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-400">AI Models</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-400">AI Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve complex business challenges and drive digital transformation.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              All Services
            </button>
            {Array.from(new Set(aiServices.map(service => service.category))).map((category, index) => (
              <button key={index} className="px-6 py-3 bg-slate-800 text-gray-300 font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300">
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-2">
                    <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-cyan-400 text-sm text-center">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-gray-400 text-sm mb-4">per month</div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our AI experts today for a free consultation and discover how our AI services can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Download AI Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;