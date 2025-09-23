import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Calculator,
  PieChart,
  Scale,
  Gavel,
  Clipboard,
  BookOpen,
  LineChart,
  ShoppingBag,
  DollarSign,
  CreditCard,
  PiggyBank,
  TrendingDown,
  AlertTriangle,
  Calendar,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';

export default function AIAutonomousFinancialAdvisor(props: any) {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Investment Analysis",
      description: "Advanced algorithms analyze market trends, risk factors, and investment opportunities in real-time"
    },
    {
      icon: TrendingUp,
      title: "Portfolio Optimization",
      description: "Automated portfolio rebalancing and optimization based on your risk tolerance and financial goals"
    },
    {
      icon: Target,
      title: "Goal-Based Planning",
      description: "Personalized financial planning aligned with your specific life goals and milestones"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for your investment portfolio"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "24/7 portfolio monitoring with instant alerts for market changes and opportunities"
    },
    {
      icon: Coins,
      title: "Tax Optimization",
      description: "Intelligent tax-loss harvesting and tax-efficient investment strategies"
    }
  ];

  const benefits = [
    "Achieve 15-25% better returns through AI-optimized portfolios",
    "Reduce investment risk by 40% with advanced risk management",
    "Save 20+ hours monthly on financial planning and monitoring",
    "Minimize tax liability with intelligent tax optimization strategies",
    "Access institutional-grade investment tools and insights",
    "Get personalized advice without the high fees of traditional advisors"
  ];

  const investmentTypes = [
    {
      icon: TrendingUp,
      title: "Stocks & ETFs",
      description: "Diversified equity portfolios with sector rotation and momentum strategies",
      features: ["Market analysis", "Sector allocation", "Risk assessment"]
    },
    {
      icon: Coins,
      title: "Bonds & Fixed Income",
      description: "Fixed income strategies for capital preservation and income generation",
      features: ["Yield optimization", "Duration management", "Credit analysis"]
    },
    {
      icon: Globe,
      title: "International Markets",
      description: "Global diversification with emerging market opportunities",
      features: ["Currency hedging", "Geographic allocation", "Political risk assessment"]
    },
    {
      icon: Leaf,
      title: "ESG Investing",
      description: "Environmental, Social, and Governance focused investment strategies",
      features: ["ESG scoring", "Impact measurement", "Sustainability tracking"]
    }
  ];

  const useCases = [
    {
      profile: "Young Professionals",
      icon: Users2,
      applications: [
        "Retirement planning and 401(k) optimization",
        "Student loan management and debt consolidation",
        "Emergency fund building and cash flow management",
        "First-time home buying and real estate investment"
      ]
    },
    {
      profile: "Mid-Career Investors",
      icon: TrendingUp,
      applications: [
        "Portfolio diversification and risk management",
        "College savings planning (529 plans)",
        "Tax optimization and retirement account management",
        "Business investment and entrepreneurial ventures"
      ]
    },
    {
      profile: "Pre-Retirement",
      icon: Calendar,
      applications: [
        "Retirement income planning and distribution strategies",
        "Social Security optimization and claiming strategies",
        "Healthcare cost planning and Medicare optimization",
        "Estate planning and wealth transfer strategies"
      ]
    },
    {
      profile: "High Net Worth",
      icon: Award,
      applications: [
        "Alternative investment opportunities and private equity",
        "Tax-efficient wealth preservation strategies",
        "Philanthropic planning and charitable giving",
        "Multi-generational wealth transfer planning"
      ]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for beginners starting their investment journey",
      features: [
        "AI-powered portfolio recommendations",
        "Basic risk assessment",
        "Monthly portfolio rebalancing",
        "Investment education resources",
        "Mobile app access",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for active investors seeking comprehensive financial planning",
      features: [
        "Everything in Starter",
        "Advanced portfolio optimization",
        "Real-time market monitoring",
        "Tax-loss harvesting",
        "Goal-based financial planning",
        "Priority customer support",
        "Quarterly financial reviews"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Wealth Management",
      price: "$199",
      period: "/month",
      description: "Comprehensive wealth management for high-net-worth individuals",
      features: [
        "Everything in Professional",
        "Personal financial advisor consultation",
        "Alternative investment opportunities",
        "Estate planning assistance",
        "Tax strategy optimization",
        "Philanthropic planning",
        "Dedicated relationship manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Financial Advisory</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Financial Advisor
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your personal AI financial advisor that provides intelligent investment advice, 
              portfolio optimization, and comprehensive financial planning 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Financial Advisory Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage the power of AI to make smarter financial decisions and achieve your wealth goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Financial Advisory?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of financial planning with AI-powered insights and automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Investment Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access a wide range of investment strategies tailored to your financial goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/50"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mr-4">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tailored for Every Life Stage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Personalized financial planning solutions for different life stages and financial goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/50"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mr-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.profile}</h3>
                </div>
                <ul className="space-y-3">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      {application}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Financial Advisory Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your financial planning needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-green-500/50 shadow-lg shadow-green-500/25' 
                    : 'border-slate-600/50'
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
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/25'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of investors who trust AI-powered financial advisory for their wealth management needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300"
              >
                Start Your Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>