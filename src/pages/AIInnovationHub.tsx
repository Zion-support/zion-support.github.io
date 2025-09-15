import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Eye, 
  Shield, 
  Zap, 
  ArrowRight, 
  Star, 
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Globe,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Heart,
  Scale,
  Leaf,
  Car,
  Building,
  Atom,
  Sparkles,
  Award,
  Lightbulb,
  Gauge,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface AIInnovation {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  category: string;
  price: string;
  href: string;
  color: string;
  featured?: boolean;
  new?: boolean;
}

interface InnovationCategory {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  count: number;
  color: string;
  href: string;
}

export default function AIInnovationHub() {
  const aiInnovations: AIInnovation[] = [
    {
      title: "AI Legal Document Generator",
      description: "Automatically generate legal documents, contracts, and agreements with AI-powered templates and compliance checking",
      icon: Scale,
      features: ["Contract Generation", "Legal Compliance", "Template Library", "Risk Assessment", "Document Review"],
      category: "Legal Technology",
      price: "$299/month",
      href: "/services/ai-legal-document-generator",
      color: "from-blue-500 to-indigo-600",
      featured: true,
      new: true
    },
    {
      title: "AI Healthcare Diagnostics",
      description: "Advanced medical AI that assists doctors with diagnostic imaging, patient analysis, and treatment recommendations",
      icon: Heart,
      features: ["Medical Imaging AI", "Diagnostic Support", "Patient Analysis", "Treatment Planning", "Drug Discovery"],
      category: "Healthcare AI",
      price: "$1,999/month",
      href: "/services/ai-healthcare-diagnostics",
      color: "from-red-500 to-pink-600",
      featured: true,
      new: true
    },
    {
      title: "AI Financial Trading Platform",
      description: "Advanced algorithmic trading platform with AI-powered market analysis and automated trading strategies",
      icon: TrendingUp,
      features: ["Algorithmic Trading", "Market Analysis", "Risk Management", "Portfolio Optimization", "Real-time Execution"],
      category: "Financial Technology",
      price: "$2,499/month",
      href: "/services/ai-financial-trading",
      color: "from-yellow-500 to-orange-600",
      featured: true,
      new: true
    },
    {
      title: "Quantum AI Cybersecurity",
      description: "Next-generation cybersecurity powered by quantum computing and AI for ultra-secure protection",
      icon: Shield,
      features: ["Quantum Encryption", "AI Threat Detection", "Zero Trust Security", "Compliance Monitoring", "Incident Response"],
      category: "Cybersecurity",
      price: "$3,999/month",
      href: "/services/quantum-ai-cybersecurity",
      color: "from-purple-500 to-violet-600",
      featured: true,
      new: true
    },
    {
      title: "AI Content Creation Studio",
      description: "Comprehensive AI-powered content creation platform for marketing, social media, and brand communication",
      icon: Code,
      features: ["Content Generation", "Brand Voice", "Multi-language Support", "SEO Optimization", "Content Analytics"],
      category: "Content & Marketing",
      price: "$599/month",
      href: "/services/ai-content-creation-studio",
      color: "from-cyan-500 to-blue-600",
      new: true
    },
    {
      title: "AI Customer Support Automation",
      description: "Intelligent customer service platform with natural language processing and automated response systems",
      icon: MessageCircle,
      features: ["Natural Language Processing", "Automated Responses", "Sentiment Analysis", "Multi-channel Support", "Learning System"],
      category: "Customer Experience",
      price: "$799/month",
      href: "/services/ai-customer-support-automation",
      color: "from-green-500 to-emerald-600",
      new: true
    },
    {
      title: "AI Sales Intelligence Platform",
      description: "Advanced sales analytics and lead scoring platform powered by machine learning and predictive analytics",
      icon: Target,
      features: ["Lead Scoring", "Sales Forecasting", "Customer Insights", "Pipeline Management", "Performance Analytics"],
      category: "Sales & Marketing",
      price: "$1,199/month",
      href: "/services/ai-sales-intelligence-platform",
      color: "from-orange-500 to-red-600",
      featured: true
    },
    {
      title: "AI Data Analytics & BI",
      description: "Comprehensive business intelligence platform with AI-powered data analysis and visualization",
      icon: BarChart3,
      features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "Custom Reports", "Data Integration"],
      category: "Business Intelligence",
      price: "$899/month",
      href: "/services/ai-data-analytics-bi",
      color: "from-indigo-500 to-purple-600",
      new: true
    },
    {
      title: "AI Education Platform",
      description: "Personalized learning platform with AI-powered curriculum adaptation and student performance tracking",
      icon: Users,
      features: ["Personalized Learning", "Adaptive Curriculum", "Performance Tracking", "Skill Assessment", "Progress Analytics"],
      category: "Education Technology",
      price: "$699/month",
      href: "/services/ai-education-platform",
      color: "from-teal-500 to-cyan-600",
      new: true
    },
    {
      title: "AI Green Technology Platform",
      description: "Sustainable technology solutions powered by AI for environmental monitoring and green energy optimization",
      icon: Leaf,
      features: ["Environmental Monitoring", "Energy Optimization", "Carbon Tracking", "Sustainability Reports", "Green Analytics"],
      category: "Green Technology",
      price: "$899/month",
      href: "/services/ai-green-technology",
      color: "from-green-400 to-teal-600",
      featured: true
    }
  ];

  const innovationCategories: InnovationCategory[] = [
    {
      name: "Healthcare AI",
      description: "Revolutionary medical AI solutions for diagnostics, treatment, and patient care",
      icon: Heart,
      count: 12,
      color: "from-red-500 to-pink-600",
      href: "/services/healthcare-ai"
    },
    {
      name: "Financial Technology",
      description: "Advanced fintech solutions with AI-powered trading, risk management, and analytics",
      icon: TrendingUp,
      count: 15,
      color: "from-yellow-500 to-orange-600",
      href: "/services/fintech-ai"
    },
    {
      name: "Legal Technology",
      description: "AI-powered legal solutions for document generation, compliance, and case analysis",
      icon: Scale,
      count: 8,
      color: "from-blue-500 to-indigo-600",
      href: "/services/legal-tech-ai"
    },
    {
      name: "Cybersecurity AI",
      description: "Next-generation security solutions with quantum AI and advanced threat detection",
      icon: Shield,
      count: 20,
      color: "from-purple-500 to-violet-600",
      href: "/services/cybersecurity-ai"
    },
    {
      name: "Content & Marketing",
      description: "AI-driven content creation, marketing automation, and brand management solutions",
      icon: Code,
      count: 18,
      color: "from-cyan-500 to-blue-600",
      href: "/services/content-marketing-ai"
    },
    {
      name: "Business Intelligence",
      description: "Advanced analytics and business intelligence platforms with AI-powered insights",
      icon: BarChart3,
      count: 14,
      color: "from-indigo-500 to-purple-600",
      href: "/services/business-intelligence-ai"
    }
  ];

  const stats = [
    { value: "50+", label: "AI Innovations", icon: Brain },
    { value: "99.7%", label: "Accuracy Rate", icon: Target },
    { value: "24/7", label: "AI Monitoring", icon: Gauge },
    { value: "500+", label: "Enterprise Clients", icon: Users }
  ];

  return (
    <>
      <SEO 
        title="AI Innovation Hub - Zion Tech Group"
        description="Discover cutting-edge AI innovations, machine learning solutions, and artificial intelligence platforms that are transforming industries worldwide."
        keywords="AI innovation, machine learning, artificial intelligence, AI solutions, AI platforms, AI technology, AI services"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.03)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                AI Innovation Hub
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
                The Future of
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Artificial Intelligence
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
                Explore our comprehensive suite of AI innovations, from healthcare diagnostics to quantum cybersecurity. 
                Discover how artificial intelligence is revolutionizing every industry.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Explore AI Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Request Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-lg font-semibold text-cyan-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  AI Innovation Categories
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our AI solutions across different industries and use cases
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovationCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={category.href}>
                    <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-6`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {category.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-6">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-semibold">{category.count} Solutions</span>
                        <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured AI Innovations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Featured AI Innovations
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover our most advanced AI solutions that are transforming industries and driving innovation
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiInnovations.map((innovation, index) => (
                <motion.div
                  key={innovation.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    {innovation.new && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        NEW
                      </div>
                    )}
                    {innovation.featured && (
                      <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        FEATURED
                      </div>
                    )}
                    
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${innovation.color} mb-6`}>
                      <innovation.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {innovation.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-sm">
                      {innovation.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {innovation.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {innovation.category}
                      </span>
                      <p className="text-lg font-bold text-white">{innovation.price}</p>
                    </div>
                    
                    <Link
                      to={innovation.href}
                      className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already using our AI innovations to drive growth, efficiency, and competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Your AI Journey
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  <Award className="w-5 h-5 mr-2" />
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}