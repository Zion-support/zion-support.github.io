import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Truck, 
  Heart,
  TrendingUp, 
  Zap, 
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Database,
  Activity,
  Lightbulb,
  Rocket,
  Award,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Target,
  Server,
  Network,
  Code,
  Search,
  MapPin,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Cpu,
  Atom,
  Cloud,
  Lock,
  Smartphone,
  Leaf,
  Satellite,
  ShoppingCart,
  Truck as TruckIcon,
  DollarSign as DollarSignIcon,
  BookOpen,
  Shield as ShieldIcon,
  Heart as HeartIcon,
  Users as UsersIcon,
  Zap as ZapIcon,
  Home,
  User,
  Settings,
  LogOut,
  Sun,
  Moon,
  Stethoscope,
  Pill,
  Microscope,
  TestTube,
  Hospital,
  Ambulance,
  FileText,
  Clipboard,
  Calendar,
  Clock as ClockIcon
} from 'lucide-react';

export default function ComprehensivePricingGuide2025() {
  const allServices = [
    {
      icon: Brain,
      title: "AI Business Intelligence Platform",
      description: "Transform your data into actionable intelligence with AI-powered analytics",
      href: "/services/ai-business-intelligence-platform",
      category: "AI & Analytics",
      pricing: {
        starter: "$299/month",
        professional: "$799/month",
        enterprise: "$1,999/month"
      },
      features: ["AI-Powered Analytics", "Predictive Analytics", "Real-time Dashboards", "User Behavior Analysis", "Goal Tracking", "Automated Reporting"]
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Threat Intelligence",
      description: "Stay ahead of cyber threats with real-time AI-powered threat detection",
      href: "/services/ai-cybersecurity-threat-intelligence-platform",
      category: "Cybersecurity",
      pricing: {
        starter: "$499/month",
        professional: "$1,299/month",
        enterprise: "$2,999/month"
      },
      features: ["AI-Powered Threat Detection", "Real-time Monitoring", "Predictive Intelligence", "Automated Response", "Global Threat Database", "Zero-Day Protection"]
    },
    {
      icon: Truck,
      title: "AI Supply Chain Optimization",
      description: "Optimize your supply chain with AI-powered demand forecasting and route optimization",
      href: "/services/ai-supply-chain-optimization-platform",
      category: "Supply Chain",
      pricing: {
        starter: "$399/month",
        professional: "$999/month",
        enterprise: "$2,499/month"
      },
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Management", "Global Visibility", "Performance Analytics"]
    },
    {
      icon: Heart,
      title: "AI Healthcare Analytics Platform",
      description: "Transform healthcare with AI-powered diagnostic support and patient monitoring",
      href: "/services/ai-healthcare-analytics-platform",
      category: "Healthcare",
      pricing: {
        starter: "$599/month",
        professional: "$1,499/month",
        enterprise: "$3,999/month"
      },
      features: ["AI Diagnosis Support", "Patient Monitoring", "Predictive Analytics", "Population Health", "Clinical Workflows", "Treatment Plans"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      color: "from-blue-600 to-purple-600",
      features: [
        "Basic AI features",
        "Standard support",
        "Core functionality",
        "Email reports",
        "Basic integrations"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      color: "from-green-600 to-blue-600",
      features: [
        "Advanced AI features",
        "Priority support",
        "Custom integrations",
        "Real-time analytics",
        "Advanced reporting",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large enterprises",
      color: "from-purple-600 to-pink-600",
      features: [
        "Custom AI models",
        "Dedicated support",
        "White-label solution",
        "Custom development",
        "SLA guarantee",
        "On-premise options"
      ]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "10x Faster Implementation",
      description: "Get up and running in days, not months"
    },
    {
      icon: DollarSign,
      title: "30% Cost Reduction",
      description: "Lower operational costs with AI automation"
    },
    {
      icon: Target,
      title: "95% Accuracy",
      description: "Industry-leading accuracy in predictions and analytics"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock support and monitoring"
    }
  ];

  const comparisonTable = [
    {
      feature: "AI-Powered Analytics",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Custom"
    },
    {
      feature: "Real-time Monitoring",
      starter: "Limited",
      professional: "Full",
      enterprise: "Unlimited"
    },
    {
      feature: "Custom Integrations",
      starter: "No",
      professional: "Yes",
      enterprise: "Unlimited"
    },
    {
      feature: "Support Response",
      starter: "24 hours",
      professional: "4 hours",
      enterprise: "1 hour"
    },
    {
      feature: "Data Storage",
      starter: "10GB",
      professional: "100GB",
      enterprise: "Unlimited"
    },
    {
      feature: "API Access",
      starter: "No",
      professional: "Yes",
      enterprise: "Full"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Comprehensive Pricing Guide 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing for
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> All Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our complete pricing structure for all AI services, cybersecurity solutions, and innovative 
              micro SAAS platforms. Choose the plan that best fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Services
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Services & Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive overview of all our AI-powered services with transparent pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">Starter</p>
                    <p className="text-lg font-bold text-white">{service.pricing.starter}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">Professional</p>
                    <p className="text-lg font-bold text-white">{service.pricing.professional}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">Enterprise</p>
                    <p className="text-lg font-bold text-white">{service.pricing.enterprise}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Tiers Explained
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Understand what's included in each pricing tier and choose the right one for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-green-500/50 bg-green-500/5' 
                    : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-blue-600 hover:to-green-600'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Compare features across all pricing tiers to make the best choice for your business.
            </p>
          </motion.div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-white font-semibold">Feature</th>
                    <th className="text-center p-6 text-white font-semibold">Starter</th>
                    <th className="text-center p-6 text-white font-semibold">Professional</th>
                    <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-6 text-gray-300">{row.feature}</td>
                      <td className="p-6 text-center text-gray-300">{row.starter}</td>
                      <td className="p-6 text-center text-gray-300">{row.professional}</td>
                      <td className="p-6 text-center text-gray-300">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and industry-leading technology that drives real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the service and pricing tier that best fits your business needs and start transforming your operations today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}