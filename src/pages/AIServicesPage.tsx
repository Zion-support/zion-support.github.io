import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Database, Zap, Shield, BarChart3, MessageSquare, Code, Globe, Server, Eye, FileText, CheckCircle, Users, Lock, Search, Cpu, Network, Rocket, Target, Award, Clock, Star, Settings, Cloud, RefreshCw, TrendingUp, Package, ShieldCheck, BarChart, MessageCircle, UserCheck, CheckCircle2 } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const AIServices = [
    {
        title: "AI Strategy Consulting",
        description: "Strategic guidance for implementing AI solutions in your business",
        price: "$2,500 - $15,000",
        features: ["AI readiness assessment", "ROI analysis", "Implementation roadmap", "Team training"],
        icon: <Brain className="h-8 w-8 text-zion-cyan"/>,
        category: "Strategy",
        badge: "Popular",
        link: "/request-quote?service=ai-strategy",
        marketSize: "$15.2B",
        growthRate: "25.3% annually",
        deployment: "2-4 weeks"
    },
    {
        title: "Custom AI Model Development",
        description: "Tailored machine learning models for your specific use case",
        price: "$5,000 - $50,000",
        features: ["Data preprocessing", "Model training", "Performance optimization", "Deployment support"],
        icon: <Server className="h-8 w-8 text-zion-purple"/>,
        category: "Development",
        badge: "Premium",
        link: "/request-quote?service=custom-ai-models",
        marketSize: "$23.1B",
        growthRate: "320% annually",
        deployment: "4-8 weeks"
    },
    {
        title: "Data Labeling & Annotation",
        description: "High-quality data preparation for machine learning projects",
        price: "$0.50 - $5.00 per item",
        features: ["Image annotation", "Text labeling", "Quality assurance", "Scalable workforce"],
        icon: <FileText className="h-8 w-8 text-zion-blue"/>,
        category: "Data",
        link: "/request-quote?service=data-labeling",
        marketSize: "$8.5B",
        growthRate: "18.7% annually",
        deployment: "1-2 weeks"
    },
    {
        title: "AI-Powered Analytics",
        description: "Advanced business intelligence with machine learning insights",
        price: "$1,500 - $8,000/month",
        features: ["Predictive analytics", "Real-time dashboards", "Custom reports", "API integration"],
        icon: <BarChart3 className="h-8 w-8 text-zion-cyan"/>,
        category: "Analytics",
        badge: "New",
        link: "/request-quote?service=ai-analytics",
        marketSize: "$23.1B",
        growthRate: "320% annually",
        deployment: "2-3 weeks"
    },
    {
        title: "Computer Vision Solutions",
        description: "Image and video analysis for automation and quality control",
        price: "$3,000 - $25,000",
        features: ["Object detection", "Image classification", "Video processing", "Edge deployment"],
        icon: <Eye className="h-8 w-8 text-zion-purple"/>,
        category: "Vision",
        link: "/request-quote?service=computer-vision",
        marketSize: "$12.2B",
        growthRate: "45.2% annually",
        deployment: "3-6 weeks"
    },
    {
        title: "Natural Language Processing",
        description: "Text analysis, chatbots, and language understanding systems",
        price: "$2,000 - $20,000",
        features: ["Sentiment analysis", "Text generation", "Language translation", "Chatbot development"],
        icon: <MessageSquare className="h-8 w-8 text-zion-blue"/>,
        category: "NLP",
        link: "/request-quote?service=nlp",
        marketSize: "$18.7B",
        growthRate: "38.9% annually",
        deployment: "3-5 weeks"
    },
    {
        title: "AI Ethics & Compliance",
        description: "Ensure your AI systems are fair, transparent, and compliant",
        price: "$1,500 - $10,000",
        features: ["Bias detection", "Explainability", "Privacy compliance", "Audit reports"],
        icon: <Shield className="h-8 w-8 text-zion-cyan"/>,
        category: "Compliance",
        link: "/request-quote?service=ai-ethics",
        marketSize: "$5.8B",
        growthRate: "28.4% annually",
        deployment: "2-4 weeks"
    },
    {
        title: "AI Model Optimization",
        description: "Improve performance and efficiency of existing AI models",
        price: "$1,000 - $15,000",
        features: ["Performance tuning", "Model compression", "Inference optimization", "Cost reduction"],
        icon: <Zap className="h-8 w-8 text-zion-purple"/>,
        category: "Optimization",
        link: "/request-quote?service=model-optimization",
        marketSize: "$12.4B",
        growthRate: "42.1% annually",
        deployment: "2-3 weeks"
    },
    {
        title: "AI Training & Workshops",
        description: "Custom training programs for your team on AI technologies",
        price: "$500 - $3,000 per person",
        features: ["Hands-on workshops", "Custom curriculum", "Certification", "Ongoing support"],
        icon: <Users className="h-8 w-8 text-zion-blue"/>,
        category: "Training",
        link: "/request-quote?service=ai-training",
        marketSize: "$7.2B",
        growthRate: "22.8% annually",
        deployment: "1-2 weeks"
    },
    {
        title: "AI Integration Services",
        description: "Seamlessly integrate AI solutions into existing systems",
        price: "$2,000 - $20,000",
        features: ["API development", "System integration", "Testing", "Maintenance"],
        icon: <Code className="h-8 w-8 text-zion-cyan"/>,
        category: "Integration",
        link: "/request-quote?service=ai-integration",
        marketSize: "$16.8B",
        growthRate: "35.6% annually",
        deployment: "3-6 weeks"
    },
    // New innovative AI services
    {
        title: "Quantum AI Computing",
        description: "Next-generation AI powered by quantum computing capabilities",
        price: "$10,000 - $100,000",
        features: ["Quantum algorithms", "Superposition processing", "Entanglement optimization", "Quantum ML models"],
        icon: <Cpu className="h-8 w-8 text-zion-purple"/>,
        category: "Quantum AI",
        badge: "Revolutionary",
        link: "/request-quote?service=quantum-ai",
        marketSize: "$31.2B",
        growthRate: "280% annually",
        deployment: "8-12 weeks"
    },
    {
        title: "Autonomous AI Systems",
        description: "Self-learning and self-optimizing AI systems for business operations",
        price: "$5,000 - $50,000/month",
        features: ["Continuous learning", "Autonomous decision making", "Self-optimization", "Adaptive behavior"],
        icon: <Rocket className="h-8 w-8 text-zion-cyan"/>,
        category: "Autonomous",
        badge: "Cutting-edge",
        link: "/request-quote?service=autonomous-ai",
        marketSize: "$28.9B",
        growthRate: "350% annually",
        deployment: "6-10 weeks"
    },
    {
        title: "Edge AI Solutions",
        description: "AI processing at the edge for real-time decision making",
        price: "$2,500 - $25,000",
        features: ["Local processing", "Real-time inference", "Low latency", "Offline capabilities"],
        icon: <Network className="h-8 w-8 text-zion-blue"/>,
        category: "Edge AI",
        link: "/request-quote?service=edge-ai",
        marketSize: "$19.8B",
        growthRate: "300% annually",
        deployment: "4-7 weeks"
    },
    {
        title: "AI-Powered Cybersecurity",
        description: "Advanced threat detection and response using artificial intelligence",
        price: "$3,500 - $30,000/month",
        features: ["Threat intelligence", "Behavioral analysis", "Automated response", "Zero-day detection"],
        icon: <ShieldCheck className="h-8 w-8 text-zion-purple"/>,
        category: "Security",
        badge: "Critical",
        link: "/request-quote?service=ai-cybersecurity",
        marketSize: "$31.2B",
        growthRate: "280% annually",
        deployment: "5-8 weeks"
    },
    {
        title: "Generative AI Solutions",
        description: "Create content, designs, and solutions using generative AI models",
        price: "$1,500 - $15,000",
        features: ["Content generation", "Design creation", "Code generation", "Creative solutions"],
        icon: <Brain className="h-8 w-8 text-zion-cyan"/>,
        category: "Generative",
        link: "/request-quote?service=generative-ai",
        marketSize: "$21.3B",
        growthRate: "280% annually",
        deployment: "2-4 weeks"
    },
    {
        title: "AI-Powered Supply Chain",
        description: "Intelligent supply chain optimization and management",
        price: "$4,000 - $40,000/month",
        features: ["Demand forecasting", "Inventory optimization", "Route planning", "Risk mitigation"],
        icon: <Package className="h-8 w-8 text-zion-blue"/>,
        category: "Supply Chain",
        link: "/request-quote?service=ai-supply-chain",
        marketSize: "$25.8B",
        growthRate: "300% annually",
        deployment: "6-9 weeks"
    },
    {
        title: "AI Healthcare Diagnostics",
        description: "Medical imaging and diagnostic AI for healthcare providers",
        price: "$5,000 - $75,000",
        features: ["Medical imaging", "Diagnostic assistance", "Patient monitoring", "Treatment planning"],
        icon: <Eye className="h-8 w-8 text-zion-purple"/>,
        category: "Healthcare",
        badge: "Life-saving",
        link: "/request-quote?service=ai-healthcare",
        marketSize: "$34.2B",
        growthRate: "320% annually",
        deployment: "8-12 weeks"
    },
    {
        title: "AI Financial Trading",
        description: "Algorithmic trading and financial analysis using AI",
        price: "$10,000 - $100,000/month",
        features: ["Market analysis", "Risk assessment", "Portfolio optimization", "Trading algorithms"],
        icon: <BarChart3 className="h-8 w-8 text-zion-cyan"/>,
        category: "Finance",
        link: "/request-quote?service=ai-trading",
        marketSize: "$28.9B",
        growthRate: "350% annually",
        deployment: "6-10 weeks"
    },
    {
        title: "AI Manufacturing Intelligence",
        description: "Smart manufacturing with AI-powered quality control and optimization",
        price: "$3,500 - $35,000/month",
        features: ["Quality control", "Predictive maintenance", "Process optimization", "Production planning"],
        icon: <Settings className="h-8 w-8 text-zion-blue"/>,
        category: "Manufacturing",
        link: "/request-quote?service=ai-manufacturing",
        marketSize: "$22.4B",
        growthRate: "280% annually",
        deployment: "5-8 weeks"
    },
    {
        title: "AI Legal Research",
        description: "Automated legal research and document analysis",
        price: "$2,000 - $20,000",
        features: ["Case research", "Document analysis", "Legal insights", "Compliance checking"],
        icon: <FileText className="h-8 w-8 text-zion-purple"/>,
        category: "Legal",
        link: "/request-quote?service=ai-legal",
        marketSize: "$16.5B",
        growthRate: "250% annually",
        deployment: "3-5 weeks"
    },
    {
        title: "AI Customer Experience",
        description: "Personalized customer experiences using AI and machine learning",
        price: "$2,500 - $25,000/month",
        features: ["Personalization", "Recommendation engines", "Customer insights", "Behavioral analysis"],
        icon: <Users className="h-8 w-8 text-zion-cyan"/>,
        category: "Customer Experience",
        link: "/request-quote?service=ai-customer-experience",
        marketSize: "$17.8B",
        growthRate: "280% annually",
        deployment: "4-6 weeks"
    },
    {
        title: "AI Environmental Monitoring",
        description: "Environmental data analysis and climate change prediction",
        price: "$3,000 - $30,000",
        features: ["Climate modeling", "Environmental monitoring", "Predictive analysis", "Sustainability insights"],
        icon: <Globe className="h-8 w-8 text-zion-blue"/>,
        category: "Environmental",
        link: "/request-quote?service=ai-environmental",
        marketSize: "$14.7B",
        growthRate: "265% annually",
        deployment: "5-8 weeks"
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const categories = [...new Set(AIServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Brain className="w-20 h-20 text-zion-cyan mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                AI <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Cutting-edge artificial intelligence solutions that transform your business operations. 
                From strategy to implementation, we deliver AI-powered innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Link>
                <button className="px-8 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive AI solutions designed to drive innovation and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AIServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                      {service.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Pricing:</span>
                    <span className="text-zion-cyan font-semibold">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Deployment:</span>
                    <span className="text-zion-cyan font-semibold">{service.deployment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Market Size:</span>
                    <span className="text-zion-cyan font-semibold">{service.marketSize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Growth Rate:</span>
                    <span className="text-zion-cyan font-semibold">{service.growthRate}</span>
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 text-center block"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Transform</span> Your Business with AI?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get in touch with our AI experts to discuss your specific needs and discover how artificial intelligence can drive your business forward.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href={`tel:${contactInfo.mobile}`} className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.website}
                </a>
              </div>
            </div>

            <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
              <p className="text-zion-slate-light">{contactInfo.address}</p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 inline-block"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
