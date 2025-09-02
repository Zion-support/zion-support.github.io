import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  BarChart3,
  Cpu,
  Globe,
  Lock,
  Activity,
  Target,
  Rocket,
  Atom,
  ChartLine,
  Wallet,
  Network,
  Database,
  Server,
  Monitor,
  Smartphone,
  Cloud,
  Users,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIQuantumFinancialTradingPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Trading Algorithms",
      description: "Advanced machine learning models that analyze market patterns and execute trades with precision"
    },
    {
      icon: Atom,
      title: "Quantum Computing Integration",
      description: "Leverage quantum algorithms for complex financial modeling and risk assessment"
    },
    {
      icon: Shield,
      title: "Real-time Risk Management",
      description: "Continuous monitoring and automated risk mitigation across all trading activities"
    },
    {
      icon: Zap,
      title: "High-Frequency Trading",
      description: "Ultra-fast execution with microsecond latency for competitive advantage"
    }
  ];

  const services = [
    {
      title: "Algorithmic Trading",
      description: "Custom trading algorithms powered by AI and quantum computing for optimal performance",
      icon: ChartLine,
      features: ["AI-driven strategy development", "Quantum optimization", "Real-time backtesting", "Performance analytics"]
    },
    {
      title: "Portfolio Management",
      description: "Intelligent portfolio optimization using quantum algorithms and AI risk assessment",
      icon: BarChart3,
      features: ["Risk-adjusted returns", "Diversification optimization", "Dynamic rebalancing", "Tax optimization"]
    },
    {
      title: "Market Analysis",
      description: "Advanced market intelligence with predictive analytics and sentiment analysis",
      icon: TrendingUp,
      features: ["Sentiment analysis", "News impact assessment", "Technical analysis", "Fundamental insights"]
    },
    {
      title: "Compliance & Reporting",
      description: "Automated regulatory compliance and comprehensive reporting for financial institutions",
      icon: Lock,
      features: ["Regulatory compliance", "Audit trails", "Real-time reporting", "Risk monitoring"]
    }
  ];

  const technologies = [
    "Quantum Machine Learning",
    "High-Frequency Trading Engines",
    "AI-Powered Risk Models",
    "Blockchain Integration",
    "Real-time Data Processing",
    "Advanced Analytics Platform",
    "Cloud-Native Architecture",
    "Multi-Exchange Connectivity"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$2,500",
      period: "/month",
      features: [
        "Basic AI trading algorithms",
        "Real-time market data",
        "Portfolio tracking",
        "Email support",
        "Basic risk management"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      plan: "Professional",
      price: "$8,500",
      period: "/month",
      features: [
        "Advanced AI algorithms",
        "Quantum computing access",
        "High-frequency trading",
        "Priority support",
        "Advanced analytics",
        "Custom strategy development"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$25,000",
      period: "/month",
      features: [
        "Full quantum computing access",
        "Custom AI model development",
        "White-label solutions",
        "24/7 dedicated support",
        "Compliance consulting",
        "API access"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="AI Quantum Financial Trading Platform - Zion Tech Group"
        description="Revolutionary AI-powered quantum financial trading platform combining machine learning with quantum computing for superior trading performance and risk management."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              AI + Quantum Computing
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Financial
              <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Trading Platform
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your trading with the world's first AI-powered quantum financial platform. 
              Combine machine learning precision with quantum computing power for unprecedented trading performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Trading Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI Quantum platform combines cutting-edge artificial intelligence with quantum computing 
              to deliver unprecedented trading capabilities and performance.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Trading Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From algorithmic trading to portfolio management, our platform provides everything you need 
              to succeed in today's complex financial markets.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-green-400/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 text-lg mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Competitive Pricing Plans
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your trading needs. All plans include our core AI and quantum computing features.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-400/50 bg-gradient-to-br from-green-500/10 to-blue-500/10' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-400 hover:to-blue-500 hover:scale-105'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform leverages the most advanced technologies in AI, quantum computing, and financial engineering.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-green-400/30 transition-all duration-200"
              >
                <Atom className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Trading?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join the future of financial trading with AI and quantum computing. 
                Get started with a free trial today.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}