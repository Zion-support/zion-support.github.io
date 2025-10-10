'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, Rocket, TrendingUp, Building, Activity, Settings, Database, Heart, Home } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Service data
const microSAASServices = [
  {
    name: "AI Project Manager Pro",
    description: "Intelligent project management with predictive analytics and automated resource allocation",
    price: "$99/mo",
    features: ["Smart Scheduling", "Risk Prediction", "Team Optimization", "Progress Tracking"],
    category: "Productivity",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-project-manager"
  },
  {
    name: "AI Analytics Dashboard",
    description: "Get intelligent insights from your data with AI-powered analytics and predictive modeling",
    price: "$149/mo",
    features: ["Real-time Analytics", "Predictive Insights", "Custom Reports", "Data Visualization"],
    category: "Analytics",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-analytics"
  },
  {
    name: "AI Customer Support Bot",
    description: "24/7 AI-powered customer support with natural language processing and instant responses",
    price: "$199/mo",
    features: ["24/7 Support", "Multi-language", "Sentiment Analysis", "Escalation Management"],
    category: "Support",
    popular: false,
    icon: Users,
    link: "https://ziontechgroup.com/ai-customer-support"
  },
  {
    name: "AI Content Generator",
    description: "Create high-quality content automatically with AI-powered writing and editing tools",
    price: "$79/mo",
    features: ["Content Creation", "SEO Optimization", "Multi-format", "Brand Voice"],
    category: "Content",
    popular: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-content-generator"
  },
  {
    name: "AI Invoice Generator",
    description: "Automated invoice creation with smart templates and payment tracking",
    price: "$49/mo",
    features: ["Auto Generation", "Payment Tracking", "Multi-currency", "Tax Calculation"],
    category: "Finance",
    popular: false,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-invoice-generator"
  },
  {
    name: "AI Expense Tracker",
    description: "Smart expense management with receipt scanning and categorization",
    price: "$39/mo",
    features: ["Receipt Scanning", "Auto Categorization", "Budget Alerts", "Tax Reports"],
    category: "Finance",
    popular: false,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-expense-tracker"
  },
  {
    name: "AI Lead Generation",
    description: "Automated lead finding and qualification with AI-powered prospecting",
    price: "$299/mo",
    features: ["Lead Discovery", "Qualification", "Contact Info", "CRM Integration"],
    category: "Sales",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-lead-generation"
  },
  {
    name: "AI Logo Designer",
    description: "Professional logo creation with AI-powered design and brand guidelines",
    price: "$89/mo",
    features: ["Auto Design", "Brand Guidelines", "Multiple Formats", "Unlimited Revisions"],
    category: "Design",
    popular: false,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-logo-designer"
  }
];

const aiServices = [
  {
    name: "AI Drug Discovery Pro",
    description: "Accelerate pharmaceutical research with AI-powered molecular analysis and drug interaction prediction",
    price: "$4,500/mo",
    features: ["Molecular Modeling", "Drug Interaction Analysis", "Clinical Trial Optimization", "Patent Research"],
    category: "Healthcare AI",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-drug-discovery-pro"
  },
  {
    name: "AI Climate Solutions Pro",
    description: "Combat climate change with intelligent environmental monitoring and carbon footprint optimization",
    price: "$3,200/mo",
    features: ["Carbon Analysis", "Weather Prediction", "Sustainability Planning", "Emission Tracking"],
    category: "Environmental AI",
    enterprise: false,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-climate-solutions-pro"
  },
  {
    name: "AI Space Technology Pro",
    description: "Advanced space exploration and satellite management with AI-powered mission planning",
    price: "$5,500/mo",
    features: ["Satellite Operations", "Mission Planning", "Data Analysis", "Orbital Mechanics"],
    category: "Space Technology",
    enterprise: true,
    icon: Rocket,
    link: "https://ziontechgroup.com/ai-space-technology-pro"
  },
  {
    name: "AI Financial Crime Detection Pro",
    description: "Real-time fraud detection and financial security monitoring with machine learning algorithms",
    price: "$2,800/mo",
    features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring", "Transaction Analysis"],
    category: "Financial AI",
    enterprise: false,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-financial-crime-detection-pro"
  },
  {
    name: "AI Agricultural Intelligence Pro",
    description: "Smart farming solutions with precision agriculture and crop optimization",
    price: "$1,800/mo",
    features: ["Crop Monitoring", "Yield Prediction", "Pest Detection", "Soil Analysis"],
    category: "Agricultural AI",
    enterprise: false,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-agricultural-intelligence-pro"
  },
  {
    name: "AI Energy Grid Management Pro",
    description: "Intelligent energy distribution and grid optimization for smart cities",
    price: "$3,500/mo",
    features: ["Grid Optimization", "Load Balancing", "Renewable Integration", "Predictive Maintenance"],
    category: "Energy AI",
    enterprise: true,
    icon: Activity,
    link: "https://ziontechgroup.com/ai-energy-grid-management-pro"
  },
  {
    name: "AI Legal Research Pro",
    description: "Advanced legal research and case analysis with AI-powered document processing",
    price: "$2,200/mo",
    features: ["Case Analysis", "Document Review", "Precedent Research", "Contract Analysis"],
    category: "Legal AI",
    enterprise: false,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-legal-research-pro"
  },
  {
    name: "AI Autonomous Systems Pro",
    description: "Self-driving and autonomous vehicle technology with advanced AI algorithms",
    price: "$6,000/mo",
    features: ["Autonomous Navigation", "Object Detection", "Path Planning", "Safety Systems"],
    category: "Autonomous AI",
    enterprise: true,
    icon: Rocket,
    link: "https://ziontechgroup.com/ai-autonomous-systems-pro"
  }
];

const itServices = [
  {
    name: "Cloud Migration & Setup",
    description: "Seamless cloud migration with zero downtime and comprehensive security",
    price: "$2,500/mo",
    features: ["Zero Downtime", "Security Audit", "Performance Optimization", "24/7 Support"],
    category: "Cloud Services",
    icon: Globe,
    link: "https://ziontechgroup.com/cloud-migration"
  },
  {
    name: "Cybersecurity Suite",
    description: "Comprehensive security solutions to protect your digital assets and data",
    price: "$1,800/mo",
    features: ["Threat Detection", "Vulnerability Scanning", "Incident Response", "Compliance"],
    category: "Security",
    icon: Shield,
    link: "https://ziontechgroup.com/cybersecurity-suite"
  },
  {
    name: "IT Infrastructure Design",
    description: "Scalable infrastructure architecture designed for your business needs",
    price: "$3,000/mo",
    features: ["Architecture Design", "Scalability Planning", "Performance Tuning", "Monitoring"],
    category: "Infrastructure",
    icon: Settings,
    link: "https://ziontechgroup.com/it-infrastructure-design"
  },
  {
    name: "24/7 IT Support",
    description: "Round-the-clock technical support and monitoring for your systems",
    price: "$1,200/mo",
    features: ["24/7 Support", "Remote Monitoring", "Quick Response", "Proactive Maintenance"],
    category: "Support",
    icon: Clock,
    link: "https://ziontechgroup.com/it-support"
  },
  {
    name: "Database Services",
    description: "Advanced database management, optimization, and migration services",
    price: "$1,500/mo",
    features: ["Database Design", "Performance Tuning", "Migration Services", "Backup Solutions"],
    category: "Database",
    icon: Database,
    link: "https://ziontechgroup.com/database-services"
  },
  {
    name: "Mobile Development",
    description: "Native and cross-platform mobile app development for iOS and Android",
    price: "$2,200/mo",
    features: ["Native Apps", "Cross-platform", "UI/UX Design", "App Store Optimization"],
    category: "Development",
    icon: Globe,
    link: "https://ziontechgroup.com/mobile-development"
  },
  {
    name: "IT Training",
    description: "Comprehensive IT training programs for your team and organization",
    price: "$800/mo",
    features: ["Custom Training", "Certification Prep", "Hands-on Labs", "Progress Tracking"],
    category: "Training",
    icon: Users,
    link: "https://ziontechgroup.com/it-training"
  },
  {
    name: "GDPR Compliance",
    description: "Complete GDPR compliance solutions and data protection services",
    price: "$1,100/mo",
    features: ["Compliance Audit", "Data Mapping", "Privacy Policies", "Training Programs"],
    category: "Compliance",
    icon: Shield,
    link: "https://ziontechgroup.com/gdpr-compliance"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    company: "Fortune 500 Technology Company",
    content: "Zion Tech Group's AI solutions increased our operational efficiency by 85% and reduced costs by $2.3M annually. Their quantum computing integration was revolutionary.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Research Director",
    company: "Global Pharmaceuticals Inc.",
    content: "The AI Drug Discovery Pro platform accelerated our research timeline by 60%. We discovered 3 new potential compounds in just 6 months instead of the usual 2 years.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Jennifer Walsh",
    role: "VP of Operations",
    company: "GreenTech Solutions",
    content: "Their climate solutions helped us reduce our carbon footprint by 40% while improving operational efficiency. The ROI was evident within the first quarter.",
    rating: 5,
    avatar: "JW"
  }
];

const stats = [
  { number: "500+", label: "Enterprise Clients", icon: Building },
  { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
  { number: "24/7", label: "Expert Support", icon: Clock },
  { number: "50+", label: "Countries Served", icon: Globe }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden matrix-bg particles">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="cyber-grid absolute inset-0 opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text float-animation">
            AI-Powered Enterprise Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto hologram">
            Transform your business with cutting-edge AI technology. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
          </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="btn-cyber py-4 px-8 text-lg flex items-center pulse-glow">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary py-4 px-8 text-lg border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center cyber-card p-6 float-animation">
                <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">300%</div>
                <div className="text-gray-400">Average ROI</div>
              </div>
              <div className="text-center cyber-card p-6 float-animation" style={{animationDelay: '1s'}}>
                <div className="text-4xl font-bold text-purple-400 mb-2 neon-text">70%</div>
                <div className="text-gray-400">Cost Reduction</div>
              </div>
              <div className="text-center cyber-card p-6 float-animation" style={{animationDelay: '2s'}}>
                <div className="text-4xl font-bold text-pink-400 mb-2 neon-text">90%</div>
                <div className="text-gray-400">Efficiency Gains</div>
              </div>
              <div className="text-center cyber-card p-6 float-animation" style={{animationDelay: '3s'}}>
                <div className="text-4xl font-bold text-green-400 mb-2 neon-text">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* Micro SAAS Section */}
        <section className="py-16 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-powered micro SaaS tools to streamline your business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSAASServices.map((service, index) => (
                <div
                  key={index}
                  className="cyber-card p-6 hover:scale-105 transition-all duration-300 relative"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <a 
                        href={service.link}
                        className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI solutions for enterprise clients. Transform your industry with cutting-edge artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 hover:scale-105 transition-all duration-300 relative ${
                    service.enterprise ? 'ring-2 ring-purple-400/30' : ''
                  }`}
                >
                  {service.enterprise && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Enterprise
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="text-5xl mb-6">🧠</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-4">{service.price}</div>
                      <a 
                        href={service.link}
                        className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-16 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions to build, secure, and scale your technology infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-4">⚙️</div>
                    <h3 className="text-lg font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-lg font-bold text-white mb-2">{service.price}</div>
                      <a 
                        href={service.link}
                        className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 matrix-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto hologram">
              Contact us today for a free consultation and discover how our AI and IT solutions can revolutionize your operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center cyber-card p-6 float-animation">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              
              <div className="text-center cyber-card p-6 float-animation" style={{animationDelay: '1s'}}>
                <div className="text-2xl mb-2">✉️</div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center cyber-card p-6 float-animation" style={{animationDelay: '2s'}}>
                <div className="text-2xl mb-2">📍</div>
                <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                <p className="text-cyan-400 font-medium">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+13024640950"
                className="btn-cyber py-4 px-8 text-lg pulse-glow"
              >
                Call Now: +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="btn-secondary py-4 px-8 text-lg"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
};

export default HomePage;
