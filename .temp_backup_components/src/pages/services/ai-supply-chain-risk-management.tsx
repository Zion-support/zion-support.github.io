import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Network, 
  AlertTriangle, 
  TrendingUp, 
  BarChart3, 
  CheckCircle, 
  Globe,
  Zap,
  FileText,
  Database,
  Target,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Lightbulb,
  Gauge,
  Calendar,
  PieChart,
  Truck,
  Factory,
  Ship,
  Plane
} from 'lucide-react';

const AISupplyChainRiskManagement: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "AI-Powered Risk Detection",
      description: "Advanced machine learning algorithms that identify potential supply chain disruptions, supplier risks, and market volatility before they impact your operations."
    },
    {
      icon: Network,
      title: "End-to-End Supply Chain Visibility",
      description: "Real-time tracking of goods across the entire supply chain with predictive analytics for delivery times, quality issues, and potential bottlenecks."
    },
    {
      icon: AlertTriangle,
      title: "Proactive Risk Alerts",
      description: "Intelligent monitoring system that provides early warnings for geopolitical risks, natural disasters, supplier financial issues, and regulatory changes."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics Dashboard",
      description: "Comprehensive analytics platform with scenario modeling, risk scoring, and automated recommendations for supply chain optimization."
    },
    {
      icon: FileText,
      title: "Automated Risk Reporting",
      description: "AI-generated risk assessment reports with actionable insights, mitigation strategies, and compliance documentation for stakeholders."
    },
    {
      icon: Target,
      title: "Intelligent Supplier Management",
      description: "Automated supplier evaluation, performance monitoring, and risk assessment with real-time scoring and recommendation engine."
    }
  ];

  const benefits = [
    "Reduce supply chain disruptions by up to 80% through predictive analytics",
    "Achieve 95% accuracy in risk prediction and assessment",
    "Real-time monitoring of 1000+ supply chain risk factors",
    "Automated compliance with international trade regulations",
    "Predictive analytics for proactive risk mitigation",
    "Seamless integration with existing ERP and SCM systems"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 100 suppliers monitoring",
        "Basic risk assessment",
        "Standard reporting templates",
        "Email support",
        "Monthly risk score updates"
      ]
    },
    {
      plan: "Professional",
      price: "$1,199",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 500 suppliers monitoring",
        "Advanced risk analytics",
        "Custom reporting and dashboards",
        "Priority support",
        "Real-time monitoring",
        "API access",
        "Custom risk scoring"
      ]
    },
    {
      plan: "Enterprise",
      price: "$3,499",
      period: "/month",
      description: "For large enterprises with complex supply chains",
      features: [
        "Unlimited suppliers monitoring",
        "Advanced AI risk modeling",
        "Custom integrations",
        "Dedicated support team",
        "Advanced predictive analytics",
        "White-label options",
        "On-premise deployment",
        "Custom training"
      ]
    }
  ];

  const riskCategories = [
    {
      name: "Geopolitical Risks",
      description: "Monitor political instability, trade wars, sanctions, and regulatory changes that could impact global supply chains."
    },
    {
      name: "Natural Disasters",
      description: "Track hurricanes, earthquakes, floods, and other natural events that could disrupt manufacturing and logistics."
    },
    {
      name: "Supplier Financial Health",
      description: "Monitor supplier financial stability, credit ratings, and bankruptcy risks to prevent supply chain disruptions."
    },
    {
      name: "Quality & Compliance",
      description: "Track product quality issues, regulatory compliance, and certification requirements across the supply chain."
    },
    {
      name: "Logistics & Transportation",
      description: "Monitor port congestion, shipping delays, fuel costs, and transportation capacity constraints."
    },
    {
      name: "Market Volatility",
      description: "Track commodity price fluctuations, currency exchange rates, and demand volatility impacts."
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Monitor supplier performance, track raw material availability, and predict production delays to maintain optimal inventory levels."
    },
    {
      industry: "Retail & E-commerce",
      description: "Track product availability, monitor supplier reliability, and predict seasonal demand fluctuations for better inventory management."
    },
    {
      industry: "Healthcare & Pharmaceuticals",
      description: "Ensure critical medical supplies availability, monitor regulatory compliance, and track cold chain logistics for temperature-sensitive products."
    },
    {
      industry: "Automotive",
      description: "Monitor just-in-time supply chains, track semiconductor availability, and predict production bottlenecks for complex assembly operations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">AI-Powered Supply Chain Risk Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            AI Supply Chain Risk Management
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Transform your supply chain resilience with AI-powered risk detection, predictive analytics, and intelligent monitoring. 
            Stay ahead of disruptions and protect your business from supply chain vulnerabilities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>Real-time Monitoring</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>Predictive Analytics</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>Global Coverage</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>24/7 Alerts</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <a 
              href="#pricing" 
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Supply Chain Risk Management Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI platform provides comprehensive supply chain risk management capabilities that help organizations build resilient operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Supply Chain Platform?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Transform your supply chain strategy with AI-powered automation and intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Risk Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform monitors all major supply chain risk categories with AI-powered analysis and prediction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {riskCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                <p className="text-slate-300">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing for Supply Chain Excellence
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that best fits your supply chain risk management needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 border rounded-2xl p-8 ${
                  index === 1 
                    ? 'border-orange-500/50 bg-orange-500/10 scale-105' 
                    : 'border-white/10'
                }`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                <p className="text-slate-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="/contact" 
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? 'bg-orange-600 hover:bg-orange-700 text-white'
                      : 'bg-white/10 hover:bg-white/15 border border-white/20 text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Supply Chain Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tailored supply chain risk management solutions for various industries and operational requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-slate-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Supply Chain Risk Management?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading organizations that trust our AI-powered platform to build resilient and efficient supply chains
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6 text-orange-400" />
                <span className="text-slate-300">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6 text-orange-400" />
                <span className="text-slate-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 text-orange-400" />
                <span className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainRiskManagement;