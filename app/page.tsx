import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Phone, MapPin, CheckCircle, TrendingUp, Target, Heart, Workflow, Cpu, Link as LinkIcon, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import EnhancedSEO from "./components/EnhancedSEO";
import FuturisticBackground from "./components/FuturisticBackground";
import FuturisticCard from "./components/FuturisticCard";
import FuturisticButton from "./components/FuturisticButton";
import FuturisticText from "./components/FuturisticText";
import ResponsiveContainer from "./components/ResponsiveContainer";
import ResponsiveGrid from "./components/ResponsiveGrid";
import ResponsiveText from "./components/ResponsiveText";

export default function HomePage() {
  const services = [
    {
      title: "AI Quantum Computing",
      description: "Revolutionary quantum computing solutions that solve complex optimization problems and accelerate machine learning with 1000x faster processing.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/ai-quantum-computing",
      color: "from-purple-500 to-blue-500",
      price: "Starting at $2,999/month",
      features: ["Quantum Machine Learning", "Quantum Optimization", "Quantum Simulation", "Quantum Cryptography", "Quantum Data Processing", "Quantum AI Research"],
      category: "AI Innovation",
      featured: true
    },
    {
      title: "AI Blockchain Solutions",
      description: "Intelligent blockchain technology with AI-powered smart contracts, automated DeFi protocols, and advanced security systems.",
      icon: <LinkIcon className="w-8 h-8" />,
      path: "/ai-blockchain-solutions",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $499/month",
      features: ["AI Smart Contracts", "DeFi Automation", "AI Security", "AI Trading Bots", "Blockchain Analytics", "Gas Optimization"],
      category: "Blockchain AI",
      featured: true
    },
    {
      title: "Zion AI Sales Predictor",
      description: "Advanced AI-powered sales prediction platform that forecasts revenue, identifies high-value prospects, and optimizes sales strategies with 95% accuracy.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/zion-ai-sales-predictor",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $99/month",
      features: ["Revenue Forecasting", "Lead Scoring", "Sales Analytics", "Customer Lifetime Value", "Process Optimization", "Risk Assessment"],
      category: "Micro SAAS",
      featured: true
    },
    {
      title: "Zion AI Workflow Optimizer",
      description: "Intelligent process automation platform that eliminates bottlenecks, automates repetitive tasks, and increases productivity by up to 300%.",
      icon: <Workflow className="w-8 h-8" />,
      path: "/zion-ai-workflow-optimizer",
      color: "from-orange-500 to-red-500",
      price: "Starting at $149/month",
      features: ["Visual Workflow Designer", "AI Process Analysis", "Smart Automation", "Real-time Monitoring", "Team Collaboration", "Integration Hub"],
      category: "Micro SAAS",
      featured: true
    },
    {
      title: "Zion AI Customer Insights Pro",
      description: "Advanced customer analytics platform that analyzes behavior, predicts preferences, and optimizes customer experience with 40% higher retention.",
      icon: <Heart className="w-8 h-8" />,
      path: "/zion-ai-customer-insights-pro",
      color: "from-pink-500 to-purple-500",
      price: "Starting at $199/month",
      features: ["Behavioral Analytics", "Sentiment Analysis", "Predictive Modeling", "Conversation Intelligence", "Customer Segmentation", "Real-time Alerts"],
      category: "Micro SAAS",
      featured: true
    },
    {
      title: "AI-Powered Business Intelligence Pro",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting with 99.9% accuracy.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-business-intelligence",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $299/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "AI Analytics"
    },
    {
      title: "AI Customer Support Automation Suite",
      description: "Deploy intelligent chatbots and automated customer service solutions. 24/7 support with natural language processing, sentiment analysis, and multilingual capabilities.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-customer-service",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "Voice Recognition", "Custom Training"],
      category: "AI Customer Service"
    },
    {
      title: "AI Cybersecurity Defense Matrix",
      description: "Advanced threat detection and response system with real-time monitoring, automated incident response, and compliance reporting. Protect your business 24/7.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response", "Security Training"],
      category: "AI Security"
    }
  ];

  const stats = [
    { label: "AI Services", value: "100+", icon: <Brain className="w-6 h-6" /> },
    { label: "Micro SAAS", value: "50+", icon: <Zap className="w-6 h-6" /> },
    { label: "IT Solutions", value: "75+", icon: <Settings className="w-6 h-6" /> },
    { label: "5G Services", value: "25+", icon: <Globe className="w-6 h-6" /> },
    { label: "Happy Clients", value: "10K+", icon: <Users className="w-6 h-6" /> },
    { label: "Success Rate", value: "99.9%", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Revolutionary Technology Services</title>
        <meta name="description" content="Leading provider of AI-powered solutions, micro SAAS platforms, IT services, and 5G technology. Transform your business with cutting-edge AI, blockchain, quantum computing, and intelligent automation." />
        <meta name="keywords" content="AI solutions, micro SAAS, IT services, 5G technology, quantum computing, blockchain AI, business intelligence, cybersecurity, workflow automation, customer insights" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>
      <EnhancedSEO />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">Revolutionary AI & Technology Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}AI-Powered Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of cutting-edge AI services, micro SAAS platforms, IT solutions, and 5G technology. 
              From quantum computing to blockchain AI, we deliver intelligent automation that drives real business results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                className="border border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Watch Demo
              </FuturisticButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <div className="text-purple-400">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary AI & Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge solutions that are transforming industries and driving innovation
            </p>
          </div>

          <ResponsiveGrid className="gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className={`p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 ${
                  service.featured ? 'ring-2 ring-purple-500/30' : ''
                }`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                    {service.featured && <Star className="w-4 h-4 inline ml-2 text-yellow-400" />}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-purple-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400 mb-4">{service.category}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <FuturisticButton
                  href={service.path}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI-powered solutions to drive growth, 
              increase efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}