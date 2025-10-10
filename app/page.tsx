'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, Rocket, TrendingUp, Building, Activity, Settings, Database, Heart, Home } from 'lucide-react';
import Footer from './components/Footer';
<<<<<<< HEAD
import SEOHead from './components/SEOHead';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import PerformanceMonitor from './components/PerformanceMonitor';
import ServiceCardSkeleton from './components/ServiceCardSkeleton';
import LazyImage from './components/LazyImage';
import AnimatedCounter from './components/AnimatedCounter';
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
  Award as Trophy,
  Users as People,
  CheckCircle2
} from 'lucide-react';
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-0ad0

// Service data
const microSAASServices = [
  {
    name: "AI Project Manager Pro",
    description: "Intelligent project management with predictive analytics and automated resource allocation. Trusted by 2,500+ teams worldwide.",
    price: "$199/mo",
    features: ["Smart Scheduling", "Risk Prediction", "Team Optimization", "Progress Tracking", "Resource Allocation", "Budget Forecasting"],
    category: "Productivity",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-project-manager",
    capabilities: ["40% faster project delivery", "60% reduction in overruns", "Real-time team insights", "Automated risk detection"]
  },
  {
    name: "AI Analytics Dashboard Pro",
    description: "Advanced business intelligence with real-time analytics, predictive modeling, and automated insights. Process unlimited data points.",
    price: "$299/mo",
    features: ["Real-time Analytics", "Predictive Insights", "Custom Reports", "Data Visualization", "Machine Learning", "API Integration"],
    category: "Analytics",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-analytics-dashboard",
    capabilities: ["300% faster insights", "95% prediction accuracy", "Real-time processing", "Unlimited data sources"]
  },
  {
    name: "AI Customer Support Suite",
    description: "Revolutionary 24/7 AI customer support with natural language processing, sentiment analysis, and human handoff capabilities.",
    price: "$399/mo",
    features: ["24/7 Support", "Multi-language", "Sentiment Analysis", "Escalation Management", "Knowledge Base", "Live Chat Integration"],
    category: "Support",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-customer-support",
    capabilities: ["90% faster response time", "95% customer satisfaction", "50+ languages", "24/7 availability"]
  },
  {
    name: "AI Content Studio Pro",
    description: "Complete content creation suite with AI-powered writing, editing, SEO optimization, and multi-platform publishing.",
    price: "$179/mo",
    features: ["Content Creation", "SEO Optimization", "Multi-format", "Brand Voice", "Plagiarism Check", "Performance Analytics"],
    category: "Content",
    popular: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-content-studio",
    capabilities: ["10x faster content creation", "SEO-optimized output", "Brand consistency", "Multi-platform publishing"]
  },
  {
    name: "AI Financial Advisor Pro",
    description: "Personalized financial planning and investment advice powered by advanced AI algorithms and real-time market data.",
    price: "$299/mo",
    features: ["Portfolio Analysis", "Risk Assessment", "Investment Recommendations", "Tax Optimization", "Retirement Planning", "Market Predictions"],
    category: "Finance",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-financial-advisor",
    capabilities: ["95% accuracy in predictions", "Real-time market analysis", "Personalized advice", "Tax optimization"]
  },
  {
    name: "AI Workflow Automation Studio",
    description: "Visual workflow builder with AI-powered automation for complex business processes and integrations.",
    price: "$149/mo",
    features: ["Visual Workflow Builder", "AI Process Discovery", "Smart Triggers", "Error Handling", "Performance Analytics", "Integration Hub"],
    category: "Automation",
    popular: true,
    icon: Settings,
    link: "https://ziontechgroup.com/ai-workflow-automation",
    capabilities: ["80% reduction in manual tasks", "99.9% workflow reliability", "Real-time monitoring", "Intelligent error handling"]
  },
  {
    name: "AI Social Media Manager Pro",
    description: "Automated social media management with AI content generation, optimal posting times, and engagement analytics.",
    price: "$99/mo",
    features: ["Auto Posting", "Content Generation", "Analytics Dashboard", "Engagement Optimization", "Hashtag Research", "Competitor Analysis"],
    category: "Marketing",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-social-media-manager",
    capabilities: ["Optimal posting times", "Content recommendations", "Multi-platform management", "Engagement analytics"]
  },
  {
    name: "AI Email Marketing Suite",
    description: "Intelligent email marketing with personalization, A/B testing, and automated campaign optimization.",
    price: "$79/mo",
    features: ["Personalization Engine", "A/B Testing", "Automation Workflows", "Advanced Analytics", "Deliverability Optimization", "Template Library"],
    category: "Marketing",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-marketing",
    capabilities: ["40% higher open rates", "60% better click-through", "Automated optimization", "Personalized content"]
  }
];

const aiServices = [
  {
    name: "AI Quantum Computing Platform",
    description: "Revolutionary quantum computing solutions for complex optimization problems, cryptography, and scientific simulations. Access to cutting-edge quantum hardware.",
    price: "$4,999/mo",
    features: ["Quantum Algorithm Development", "Quantum Machine Learning", "Cryptographic Security", "Optimization Problems", "Quantum Simulation", "Hybrid Classical-Quantum Computing"],
    category: "Quantum Computing",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-quantum-computing",
    capabilities: ["1000x faster optimization", "Unbreakable encryption", "Quantum advantage in ML", "Scientific breakthrough potential"]
  },
  {
    name: "AI Drug Discovery Pro",
    description: "Advanced AI platform for pharmaceutical research, drug discovery, and molecular analysis. Accelerate drug development by 70%.",
    price: "$3,999/mo",
    features: ["Molecular Modeling", "Drug Design", "Clinical Trial Optimization", "Personalized Medicine", "Side Effect Prediction", "Drug Interaction Analysis"],
    category: "Pharmaceutical AI",
    enterprise: true,
    icon: Stethoscope,
    link: "https://ziontechgroup.com/ai-drug-discovery-pro",
    capabilities: ["70% faster drug discovery", "90% accuracy in predictions", "Personalized treatment plans", "Reduced clinical trial costs"]
  },
  {
    name: "AI Climate Solutions Pro",
    description: "AI-powered climate monitoring, carbon footprint tracking, and environmental impact optimization. Help achieve net-zero goals.",
    price: "$1,299/mo",
    features: ["Climate Modeling", "Carbon Footprint Analysis", "Sustainability Planning", "Environmental Impact Assessment", "Renewable Energy Optimization", "Emission Tracking"],
    category: "Climate Tech",
    enterprise: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-climate-solutions-pro",
    capabilities: ["50% carbon footprint reduction", "Real-time environmental monitoring", "Sustainability optimization", "Climate risk assessment"]
  },
  {
    name: "AI Space Technology Pro",
    description: "Cutting-edge AI solutions for space exploration, satellite management, and space mission optimization. Mission success rate of 99.9%.",
    price: "$4,999/mo",
    features: ["Satellite Management", "Mission Planning", "Space Weather Prediction", "Orbital Mechanics", "Space Debris Tracking", "Communication Optimization"],
    category: "Space Technology",
    enterprise: true,
    icon: Rocket,
    link: "https://ziontechgroup.com/ai-space-technology-pro",
    capabilities: ["99.9% mission success rate", "Real-time space monitoring", "Advanced orbital calculations", "Space debris mitigation"]
  },
  {
    name: "AI Financial Crime Detection Pro",
    description: "Real-time fraud detection and financial security monitoring with machine learning algorithms. Detect 99.9% of fraudulent transactions.",
    price: "$2,999/mo",
    features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring", "Transaction Analysis", "Behavioral Analysis", "Real-time Alerts"],
    category: "Financial AI",
    enterprise: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-financial-crime-detection-pro",
    capabilities: ["99.9% fraud detection accuracy", "Real-time monitoring", "Automated compliance", "Risk mitigation"]
  },
  {
    name: "AI Neural Memory Assistant",
    description: "Advanced AI system with persistent memory and contextual understanding for personalized assistance. Learn and adapt to user preferences.",
    price: "$799/mo",
    features: ["Persistent Memory Storage", "Contextual Understanding", "Personalized Responses", "Learning from Interactions", "Multi-modal Memory", "Emotional Intelligence"],
    category: "Advanced AI",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-neural-memory-assistant",
    capabilities: ["Personalized AI experience", "Context-aware responses", "Emotional intelligence", "Long-term memory retention"]
  },
  {
    name: "AI Holographic Workspace Pro",
    description: "Immersive 3D workspace with AI-powered collaboration tools and virtual reality integration. Next-generation remote work solution.",
    price: "$1,799/mo",
    features: ["3D Holographic Interface", "Virtual Collaboration", "AI-Powered Gestures", "Spatial Computing", "Mixed Reality Integration", "Real-time Translation"],
    category: "Immersive Technology",
    enterprise: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-holographic-workspace",
    capabilities: ["Immersive 3D collaboration", "Spatial computing", "AI-powered gestures", "Mixed reality integration"]
  },
  {
    name: "AI Autonomous Systems Platform",
    description: "AI-powered autonomous vehicle and drone management with real-time decision making. 99.9% safety record in autonomous operations.",
    price: "$2,799/mo",
    features: ["Autonomous Vehicle AI", "Drone Fleet Management", "Real-time Decision Making", "Path Optimization", "Collision Avoidance", "Weather Adaptation"],
    category: "Autonomous Systems",
    enterprise: true,
    icon: Settings,
    link: "https://ziontechgroup.com/ai-autonomous-systems",
    capabilities: ["99.9% safety record", "Real-time autonomous decisions", "Fleet optimization", "Weather-adaptive navigation"]
  }
];

const itServices = [
  {
    name: "Cloud Migration & Setup Pro",
    description: "Seamless cloud migration with zero downtime, comprehensive security, and cost optimization. Migrate to AWS, Azure, or GCP.",
    price: "$10,000",
    features: ["Zero Downtime Migration", "Security Audit", "Performance Optimization", "24/7 Support", "Cost Optimization", "Multi-cloud Strategy"],
    category: "Cloud Services",
    icon: Globe,
    link: "https://ziontechgroup.com/cloud-migration",
    capabilities: ["99.9% uptime guarantee", "40% cost reduction", "Zero data loss", "Complete security compliance"]
  },
  {
    name: "Enterprise Cybersecurity Suite",
    description: "Comprehensive security solutions with AI-powered threat detection, zero-trust architecture, and compliance management.",
    price: "$8,000/mo",
    features: ["AI Threat Detection", "Zero Trust Architecture", "Vulnerability Scanning", "Incident Response", "Compliance Management", "Security Training"],
    category: "Security",
    icon: Shield,
    link: "https://ziontechgroup.com/cybersecurity",
    capabilities: ["99.9% threat detection", "Zero security breaches", "Automated compliance", "Real-time monitoring"]
  },
  {
    name: "IT Infrastructure Design Pro",
    description: "Scalable infrastructure architecture with AI-powered optimization, disaster recovery, and future-proofing. Built for enterprise scale.",
    price: "$15,000",
    features: ["AI-Powered Architecture", "Disaster Recovery", "Scalability Planning", "Performance Tuning", "Monitoring & Analytics", "Future-proofing"],
    category: "Infrastructure",
    icon: Settings,
    link: "https://ziontechgroup.com/it-infrastructure",
    capabilities: ["300% performance improvement", "99.9% availability", "Automated scaling", "Predictive maintenance"]
  },
  {
    name: "24/7 IT Support & Monitoring",
    description: "Round-the-clock technical support with AI-powered monitoring, predictive maintenance, and proactive issue resolution.",
    price: "$2,000/mo",
    features: ["24/7 Expert Support", "AI Monitoring", "Predictive Maintenance", "Quick Response", "Proactive Resolution", "SLA Guarantee"],
    category: "Support",
    icon: Clock,
    link: "https://ziontechgroup.com/it-support",
    capabilities: ["15-minute response time", "99.9% uptime", "Predictive maintenance", "Proactive issue resolution"]
  },
  {
    name: "AI-Powered IT Operations",
    description: "Intelligent IT operations with AI-driven automation, self-healing systems, and predictive analytics for optimal performance.",
    price: "$5,000/mo",
    features: ["AI Automation", "Self-healing Systems", "Predictive Analytics", "Intelligent Alerting", "Root Cause Analysis", "Performance Optimization"],
    category: "AI Operations",
    icon: Brain,
    link: "https://ziontechgroup.com/ai-ops",
    capabilities: ["80% reduction in manual tasks", "99.9% system reliability", "Predictive maintenance", "Automated problem resolution"]
  },
  {
    name: "Quantum-Safe Security Solutions",
    description: "Future-proof security solutions designed to protect against quantum computing threats with post-quantum cryptography.",
    price: "$15,000",
    features: ["Post-Quantum Cryptography", "Quantum Key Distribution", "Security Assessment", "Migration Planning", "Compliance Support", "Risk Analysis"],
    category: "Quantum Security",
    icon: Lock,
    link: "https://ziontechgroup.com/quantum-safe-security",
    capabilities: ["Quantum-resistant encryption", "Future-proof security", "Compliance automation", "Advanced threat protection"]
  },
  {
    name: "Blockchain Integration Services",
    description: "Complete blockchain integration with smart contracts, DeFi solutions, and Web3 applications for modern businesses.",
    price: "$25,000",
    features: ["Smart Contract Development", "DeFi Solutions", "Web3 Integration", "NFT Platforms", "Token Development", "Security Audits"],
    category: "Blockchain",
    icon: Shield,
    link: "https://ziontechgroup.com/blockchain-integration",
    capabilities: ["Secure smart contracts", "DeFi optimization", "Web3 integration", "Token economics"]
  },
  {
    name: "Edge Computing Solutions",
    description: "Edge computing infrastructure for low-latency applications, IoT devices, and real-time data processing at the edge.",
    price: "$10,000",
    features: ["Edge Servers", "IoT Integration", "Low-latency Processing", "Data Synchronization", "Offline Capabilities", "Real-time Analytics"],
    category: "Edge Computing",
    icon: Cpu,
    link: "https://ziontechgroup.com/edge-computing",
    capabilities: ["50ms latency", "Real-time processing", "Offline capabilities", "IoT optimization"]
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced quantum-particles">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden quantum-field">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-text-enhanced neon-pulse">
            AI-Powered Enterprise Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto neon-glow-cyan">
            Transform your business with cutting-edge AI technology. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="neon-button-enhanced py-4 px-8 rounded-xl font-semibold text-lg flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="neon-button-enhanced py-4 px-8 rounded-xl font-semibold text-lg">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">90%</div>
              <div className="text-gray-400">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
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
                className={`futuristic-card-enhanced hover-lift p-6 relative ${
                  service.popular ? 'ring-2 ring-cyan-500 neon-glow-cyan' : ''
                }`}
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
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {service.capabilities && (
                    <div className="space-y-1 mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Proven Results:</h4>
                      {service.capabilities.slice(0, 2).map((capability, capabilityIndex) => (
                        <div key={capabilityIndex} className="flex items-center text-xs text-cyan-300">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {capability}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <a
                      href={service.link || '#'}
                      className="neon-button-enhanced py-2 px-4 rounded-lg font-medium text-sm transition-all inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
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
                className={`futuristic-card-enhanced hover-lift p-8 relative ${
                  service.enterprise ? 'ring-2 ring-purple-400/30 neon-glow-purple' : ''
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.slice(0, 6).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {service.capabilities && (
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Capabilities:</h4>
                      {service.capabilities.slice(0, 3).map((capability, capabilityIndex) => (
                        <div key={capabilityIndex} className="flex items-center text-xs text-purple-300">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {capability}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-4">{service.price}</div>
                    <a
                      href={service.link || '#'}
                      className="neon-button-enhanced px-6 py-3 rounded-lg font-semibold transition-all inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
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
              <div key={index} className="futuristic-card-enhanced hover-lift p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
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

                  {service.capabilities && (
                    <div className="space-y-1 mb-4">
                      <h4 className="text-xs font-semibold text-green-400 mb-1">Results:</h4>
                      {service.capabilities.slice(0, 2).map((capability, capabilityIndex) => (
                        <div key={capabilityIndex} className="flex items-center text-xs text-green-300">
                          <Star className="w-3 h-3 text-yellow-400 mr-1 flex-shrink-0" />
                          {capability}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-white mb-2">{service.price}</div>
                    <a
                      href={service.link || '#'}
                      className="neon-button-enhanced py-2 px-4 rounded-lg font-medium text-sm transition-all inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
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

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our satisfied clients who have transformed their businesses with our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how our AI and IT solutions can revolutionize your operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-cyan-400 font-medium">
                Middletown, DE
              </p>
            </div>
          </div>
          
          <button className="neon-button-enhanced py-4 px-8 rounded-xl font-semibold text-lg">
            Get Free Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
