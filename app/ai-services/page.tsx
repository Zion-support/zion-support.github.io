import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Lock, 
  Globe, 
  Cpu, 
  BarChart3, 
  Users, 
  Mail, 
  Calendar,
  CheckCircle,
  Star,
  ArrowRight,
  Sparkles,
  Rocket,
  Target,
  TrendingUp,
  DollarSign,
  Clock,
  Award,
  Eye,
  MessageSquare,
  FileText,
  Image,
  Video,
  Mic,
  Search,
  Filter,
  Layers,
  Settings,
  Monitor,
  Smartphone,
  Laptop,
  Server
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      id: 1,
      name: "AI-Powered Business Intelligence",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Get predictive analytics, automated reporting, and real-time dashboards.",
      features: [
        "Predictive Analytics & Forecasting",
        "Real-time Data Processing",
        "Automated Report Generation",
        "Custom Dashboard Creation",
        "Natural Language Queries",
        "Anomaly Detection",
        "Trend Analysis",
        "ROI Optimization"
      ],
      pricing: {
        starter: { price: 299, period: "month", features: ["5 data sources", "Basic analytics", "Email reports"] },
        professional: { price: 799, period: "month", features: ["20 data sources", "Advanced analytics", "Custom dashboards", "API access"] },
        enterprise: { price: 1999, period: "month", features: ["Unlimited sources", "AI insights", "White-label", "Dedicated support"] }
      },
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      category: "Analytics",
      marketPrice: "$599-2499/month",
      savings: "50%",
      useCases: ["Financial Forecasting", "Sales Optimization", "Customer Behavior Analysis", "Risk Assessment"]
    },
    {
      id: 2,
      name: "Natural Language Processing Suite",
      description: "Advanced NLP solutions for text analysis, sentiment detection, language translation, and automated content processing across multiple languages.",
      features: [
        "Multi-language Support (50+ languages)",
        "Sentiment Analysis & Emotion Detection",
        "Text Classification & Categorization",
        "Named Entity Recognition",
        "Language Translation",
        "Text Summarization",
        "Intent Recognition",
        "Content Moderation"
      ],
      pricing: {
        starter: { price: 199, period: "month", features: ["10,000 API calls", "5 languages", "Basic analysis"] },
        professional: { price: 599, period: "month", features: ["100,000 API calls", "20 languages", "Advanced features"] },
        enterprise: { price: 1499, period: "month", features: ["Unlimited calls", "All languages", "Custom models", "Priority support"] }
      },
      icon: MessageSquare,
      color: "from-purple-500 to-pink-500",
      category: "Language Processing",
      marketPrice: "$399-1799/month",
      savings: "45%",
      useCases: ["Customer Support Automation", "Content Analysis", "Social Media Monitoring", "Document Processing"]
    },
    {
      id: 3,
      name: "Computer Vision & Image Recognition",
      description: "Cutting-edge computer vision solutions for object detection, facial recognition, image classification, and automated visual analysis.",
      features: [
        "Object Detection & Recognition",
        "Facial Recognition & Analysis",
        "Image Classification",
        "OCR (Optical Character Recognition)",
        "Video Analysis",
        "Quality Assessment",
        "Brand Detection",
        "Custom Model Training"
      ],
      pricing: {
        starter: { price: 249, period: "month", features: ["1,000 images/month", "Basic recognition", "Standard models"] },
        professional: { price: 699, period: "month", features: ["10,000 images/month", "Advanced recognition", "Custom models"] },
        enterprise: { price: 1799, period: "month", features: ["Unlimited images", "Premium models", "Custom training", "Dedicated support"] }
      },
      icon: Eye,
      color: "from-green-500 to-emerald-500",
      category: "Computer Vision",
      marketPrice: "$499-2199/month",
      savings: "40%",
      useCases: ["Quality Control", "Security Systems", "Medical Imaging", "Retail Analytics"]
    },
    {
      id: 4,
      name: "AI-Powered Automation Platform",
      description: "Intelligent process automation that learns and adapts to your business workflows, reducing manual tasks by up to 80%.",
      features: [
        "Intelligent Process Discovery",
        "Workflow Automation",
        "Document Processing",
        "Email Automation",
        "Data Entry Automation",
        "Exception Handling",
        "Process Optimization",
        "ROI Tracking"
      ],
      pricing: {
        starter: { price: 399, period: "month", features: ["5 processes", "Basic automation", "Email support"] },
        professional: { price: 999, period: "month", features: ["25 processes", "Advanced automation", "API integration"] },
        enterprise: { price: 2499, period: "month", features: ["Unlimited processes", "Custom development", "White-label", "Dedicated support"] }
      },
      icon: Settings,
      color: "from-orange-500 to-red-500",
      category: "Automation",
      marketPrice: "$799-2999/month",
      savings: "50%",
      useCases: ["Invoice Processing", "Customer Onboarding", "Data Migration", "Report Generation"]
    },
    {
      id: 5,
      name: "AI Customer Experience Platform",
      description: "Revolutionary customer experience management with AI-powered chatbots, sentiment analysis, and personalized recommendations.",
      features: [
        "Intelligent Chatbots",
        "Sentiment Analysis",
        "Personalized Recommendations",
        "Multi-channel Support",
        "Predictive Customer Service",
        "Voice Analysis",
        "Emotion Detection",
        "Customer Journey Mapping"
      ],
      pricing: {
        starter: { price: 299, period: "month", features: ["1,000 conversations", "Basic chatbot", "Email support"] },
        professional: { price: 799, period: "month", features: ["10,000 conversations", "Advanced AI", "Multi-channel"] },
        enterprise: { price: 1999, period: "month", features: ["Unlimited conversations", "Custom AI", "White-label", "Priority support"] }
      },
      icon: Users,
      color: "from-indigo-500 to-blue-500",
      category: "Customer Experience",
      marketPrice: "$599-2399/month",
      savings: "50%",
      useCases: ["Customer Support", "Sales Assistance", "Lead Qualification", "Feedback Analysis"]
    },
    {
      id: 6,
      name: "AI Content Generation Suite",
      description: "Advanced AI content creation platform that generates high-quality text, images, and videos tailored to your brand and audience.",
      features: [
        "Text Generation (50+ languages)",
        "Image Generation & Editing",
        "Video Creation",
        "Voice Synthesis",
        "Brand Voice Training",
        "SEO Optimization",
        "Plagiarism Detection",
        "Content Strategy"
      ],
      pricing: {
        starter: { price: 199, period: "month", features: ["10,000 words", "Basic images", "Standard voice"] },
        professional: { price: 599, period: "month", features: ["100,000 words", "Advanced images", "Custom voice"] },
        enterprise: { price: 1499, period: "month", features: ["Unlimited content", "Premium features", "Custom models", "Dedicated support"] }
      },
      icon: FileText,
      color: "from-yellow-500 to-orange-500",
      category: "Content Creation",
      marketPrice: "$399-1799/month",
      savings: "50%",
      useCases: ["Marketing Content", "Product Descriptions", "Social Media Posts", "Educational Materials"]
    },
    {
      id: 7,
      name: "AI Security & Fraud Detection",
      description: "Advanced AI-powered security solutions that detect and prevent fraud, cyber threats, and suspicious activities in real-time.",
      features: [
        "Real-time Fraud Detection",
        "Behavioral Analysis",
        "Anomaly Detection",
        "Risk Scoring",
        "Threat Intelligence",
        "Compliance Monitoring",
        "Automated Response",
        "Forensic Analysis"
      ],
      pricing: {
        starter: { price: 499, period: "month", features: ["1,000 transactions", "Basic detection", "Email alerts"] },
        professional: { price: 1299, period: "month", features: ["10,000 transactions", "Advanced detection", "API integration"] },
        enterprise: { price: 2999, period: "month", features: ["Unlimited transactions", "Custom models", "White-label", "Dedicated support"] }
      },
      icon: Shield,
      color: "from-red-500 to-pink-500",
      category: "Security",
      marketPrice: "$999-3499/month",
      savings: "50%",
      useCases: ["Payment Fraud Prevention", "Account Takeover Detection", "Insider Threat Detection", "Compliance Monitoring"]
    },
    {
      id: 8,
      name: "AI Predictive Maintenance",
      description: "Intelligent predictive maintenance solutions that use machine learning to predict equipment failures and optimize maintenance schedules.",
      features: [
        "Failure Prediction",
        "Maintenance Optimization",
        "Sensor Data Analysis",
        "Cost Optimization",
        "Downtime Reduction",
        "Asset Lifecycle Management",
        "Real-time Monitoring",
        "Custom Alerts"
      ],
      pricing: {
        starter: { price: 399, period: "month", features: ["10 assets", "Basic prediction", "Email reports"] },
        professional: { price: 999, period: "month", features: ["100 assets", "Advanced prediction", "API access"] },
        enterprise: { price: 2499, period: "month", features: ["Unlimited assets", "Custom models", "White-label", "Dedicated support"] }
      },
      icon: Monitor,
      color: "from-teal-500 to-cyan-500",
      category: "Predictive Analytics",
      marketPrice: "$799-2999/month",
      savings: "50%",
      useCases: ["Manufacturing Equipment", "Fleet Management", "Building Systems", "IT Infrastructure"]
    }
  ];

  const categories = ["All", "Analytics", "Language Processing", "Computer Vision", "Automation", "Customer Experience", "Content Creation", "Security", "Predictive Analytics"];
  const filteredServices = selectedCategory === "All" 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Brain className="w-4 h-4" />
            <span>AI Services & Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="holographic">Artificial Intelligence</span>
            <br />
            <span className="text-white">That Transforms Business</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the power of cutting-edge AI to automate processes, gain insights, 
            and drive unprecedented growth. Real AI solutions with proven results.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
              <div className="text-gray-300">AI Service Categories</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Process Automation</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Languages Supported</div>
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
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`cyber-card p-8 hover:scale-105 transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Service Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{service.category}</div>
                    <div className="text-xs text-green-400 font-semibold">{service.savings} Savings</div>
                  </div>
                </div>

                {/* Service Info */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3 uppercase tracking-wider">Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 2).map((useCase, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Pricing</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Starter</span>
                      <span className="text-lg font-bold text-white">${service.pricing.starter.price}/{service.pricing.starter.period}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Professional</span>
                      <span className="text-lg font-bold text-cyan-400">${service.pricing.professional.price}/{service.pricing.professional.period}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Enterprise</span>
                      <span className="text-lg font-bold text-purple-400">${service.pricing.enterprise.price}/{service.pricing.enterprise.period}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full futuristic-btn group">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* AI Capabilities Section */}
        <div className="cyber-card p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="holographic">AI Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest AI technologies to deliver solutions that understand, learn, and adapt to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Machine Learning</h3>
              <p className="text-gray-300 text-sm">
                Advanced ML algorithms that learn from your data to make intelligent predictions and recommendations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Natural Language Processing</h3>
              <p className="text-gray-300 text-sm">
                Understand and process human language with advanced NLP capabilities across 50+ languages.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Computer Vision</h3>
              <p className="text-gray-300 text-sm">
                Extract insights from images and videos with state-of-the-art computer vision technology.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Process Automation</h3>
              <p className="text-gray-300 text-sm">
                Automate complex business processes with intelligent workflow automation and decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="cyber-card p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="holographic">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI solutions have transformed businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
              <div className="text-lg text-white mb-2">Annual Savings</div>
              <p className="text-gray-300 text-sm">
                Fortune 500 company reduced operational costs by 50% using our AI automation platform.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-lg text-white mb-2">Process Automation</div>
              <p className="text-gray-300 text-sm">
                Manufacturing client automated 95% of their quality control processes with our computer vision solution.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>
              <div className="text-lg text-white mb-2">ROI Increase</div>
              <p className="text-gray-300 text-sm">
                E-commerce company increased ROI by 300% using our AI-powered customer experience platform.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your business with our cutting-edge AI solutions. Get started with a free consultation and see the difference AI can make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="futuristic-btn text-lg px-8 py-4"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold border border-cyan-500 hover:bg-cyan-500/20 transition-all duration-300"
            >
              Get Free AI Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;