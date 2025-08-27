import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Users, 
  BarChart3, 
  Target, 
  Rocket, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Award,
  Lightbulb,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  MessageCircle,
  BookOpen,
  DollarSign,
  ShoppingCart,
  Heart,
  Gauge,
  Workflow,
  Atom,
  PenTool,
  MessageSquare,
  HelpCircle,
  ShoppingBag,
  FileText,
  Users as UsersIcon,
  Search,
  Settings,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Eye
} from 'lucide-react';
import { SEO } from '../components/SEO';

const AISolutions: React.FC = () => {
  const heroFeatures = [
    "Machine Learning & Deep Learning",
    "Natural Language Processing",
    "Computer Vision & Image Recognition",
    "Predictive Analytics & Forecasting",
    "Autonomous Decision Making",
    "Real-time Data Processing"
  ];

  const aiServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform raw data into actionable insights with our advanced AI-powered analytics platform.",
      icon: BarChart3,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom AI Models", "Data Visualization"],
      path: "/services/ai-business-intelligence",
      featured: true
    },
    {
      title: "AI Workflow Automation",
      description: "Streamline business processes with intelligent automation that learns and improves over time.",
      icon: Workflow,
      features: ["Process Optimization", "Smart Routing", "Exception Handling", "Performance Analytics"],
      path: "/services/ai-workflow-automation",
      featured: true
    },
    {
      title: "AI Cybersecurity",
      description: "Protect your digital assets with AI-powered threat detection and response systems.",
      icon: Shield,
      features: ["Threat Detection", "Behavioral Analysis", "Incident Response", "Risk Assessment"],
      path: "/services/ai-cybersecurity",
      featured: true
    },
    {
      title: "AI Content Generation",
      description: "Create high-quality, engaging content at scale with our AI content studio.",
      icon: PenTool,
      features: ["Multi-format Content", "Brand Consistency", "SEO Optimization", "Performance Tracking"],
      path: "/services/ai-content-generator"
    },
    {
      title: "AI Customer Support",
      description: "Provide 24/7 intelligent customer support with AI-powered chatbots and automation.",
      icon: MessageCircle,
      features: ["24/7 Availability", "Multi-language Support", "Context Awareness", "Seamless Handoff"],
      path: "/services/ai-customer-support"
    },
    {
      title: "AI Data Analytics",
      description: "Unlock the full potential of your data with advanced AI analytics and insights.",
      icon: Database,
      features: ["Data Mining", "Pattern Recognition", "Trend Analysis", "Custom Reports"],
      path: "/services/ai-data-analytics"
    },
    {
      title: "AI Marketing Automation",
      description: "Optimize your marketing campaigns with AI-driven insights and automation.",
      icon: Target,
      features: ["Campaign Optimization", "Audience Segmentation", "Performance Tracking", "ROI Analysis"],
      path: "/services/ai-marketing-automation"
    },
    {
      title: "AI Project Manager",
      description: "Manage complex projects with AI-powered planning, tracking, and optimization.",
      icon: Calendar,
      features: ["Smart Planning", "Resource Optimization", "Risk Management", "Progress Tracking"],
      path: "/services/ai-project-manager"
    }
  ];

  const aiCapabilities = [
    {
      title: "Machine Learning",
      description: "Advanced algorithms that learn from data to make predictions and decisions.",
      icon: Brain,
      examples: ["Predictive Models", "Classification Systems", "Recommendation Engines"]
    },
    {
      title: "Natural Language Processing",
      description: "Understand and process human language for better communication and insights.",
      icon: MessageSquare,
      examples: ["Text Analysis", "Language Translation", "Sentiment Analysis"]
    },
    {
      title: "Computer Vision",
      description: "Analyze and interpret visual information from images and videos.",
      icon: Eye,
      examples: ["Object Recognition", "Image Classification", "Video Analysis"]
    },
    {
      title: "Robotic Process Automation",
      description: "Automate repetitive tasks with intelligent bots and workflows.",
      icon: Settings,
      examples: ["Data Entry", "Report Generation", "Process Monitoring"]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "AI-powered diagnostics, patient care, and medical research",
      icon: Heart,
      solutions: ["Medical Imaging Analysis", "Drug Discovery", "Patient Risk Assessment"]
    },
    {
      name: "Finance",
      description: "Intelligent financial services and risk management",
      icon: DollarSign,
      solutions: ["Fraud Detection", "Credit Scoring", "Investment Analysis"]
    },
    {
      name: "Manufacturing",
      description: "Smart manufacturing and predictive maintenance",
      icon: Cpu,
      solutions: ["Quality Control", "Predictive Maintenance", "Supply Chain Optimization"]
    },
    {
      name: "Retail",
      description: "Personalized shopping experiences and inventory management",
      icon: ShoppingBag,
      solutions: ["Customer Segmentation", "Demand Forecasting", "Personalized Recommendations"]
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "AI Models Deployed", description: "Across various industries" },
    { icon: TrendingUp, value: "95%", label: "Accuracy Rate", description: "In predictive analytics" },
    { icon: Award, value: "10+", label: "Years Experience", description: "In AI development" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global AI solutions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Solutions - Zion Tech Group"
        description="Transform your business with cutting-edge AI solutions including machine learning, automation, and intelligent analytics. Discover how our AI services can revolutionize your operations."
        keywords="AI solutions, artificial intelligence, machine learning, automation, business intelligence, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Solutions
              </span>
              <br />
              <span className="text-white">That Transform</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Harness the power of artificial intelligence to revolutionize your business operations, 
              gain unprecedented insights, and stay ahead of the competition.
            </p>
            
            {/* Hero Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-slate-300"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-cyan-400 font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive <span className="text-cyan-400">AI Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From machine learning to autonomous systems, our AI solutions cover every aspect of 
              artificial intelligence that your business needs to thrive in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 ${
                  service.featured ? 'border-cyan-400/30 bg-gradient-to-br from-cyan-400/5 to-blue-500/5' : 'border-slate-700/50'
                }`}
              >
                {service.featured && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 text-sm font-semibold">Featured Service</span>
                  </div>
                )}
                
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced <span className="text-cyan-400">AI Capabilities</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technologies to deliver intelligent solutions 
              that adapt, learn, and evolve with your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 border border-slate-600/30 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <capability.icon className="w-8 h-8 text-cyan-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-slate-300 mb-6">{capability.description}</p>
                
                <div className="space-y-3">
                  {capability.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-slate-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Solutions for <span className="text-cyan-400">Every Industry</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges and opportunities 
              across different industries and business sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-slate-300 mb-4">{industry.description}</p>
                
                <ul className="space-y-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="text-sm text-slate-400">
                      • {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can revolutionize your operations, 
              boost efficiency, and drive innovation across your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                Get a Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISolutions;
