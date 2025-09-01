import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Brain,
  Clock,
  DollarSign,
  ArrowRight,
  PieChart,
  Calculator,
  PiggyBank,
  CreditCard,
  LineChart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIFinancialPlanningAssistant = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Investment Analysis",
      description: "Advanced algorithms analyze market trends, risk factors, and portfolio performance to provide personalized investment recommendations.",
      benefits: ["Increase portfolio returns by 25%", "Reduce investment risk", "Optimize asset allocation"]
    },
    {
      icon: Calculator,
      title: "Intelligent Budget Planning",
      description: "AI-driven budget optimization that learns from spending patterns and automatically adjusts financial plans for maximum efficiency.",
      benefits: ["Save 20% on monthly expenses", "Smart spending insights", "Automated budget adjustments"]
    },
    {
      icon: PieChart,
      title: "Portfolio Risk Management",
      description: "Real-time risk assessment and diversification strategies to protect investments during market volatility.",
      benefits: ["Minimize portfolio volatility", "Proactive risk mitigation", "Better diversification"]
    },
    {
      icon: LineChart,
      title: "Predictive Financial Modeling",
      description: "Machine learning models forecast future financial scenarios, helping users make informed long-term financial decisions.",
      benefits: ["Long-term financial planning", "Scenario analysis", "Goal achievement tracking"]
    }
  ];

  const integrations = [
    { name: "Mint", description: "Personal finance and budgeting integration" },
    { name: "YNAB", description: "You Need A Budget synchronization" },
    { name: "Personal Capital", description: "Investment tracking and analysis" },
    { name: "Robinhood", description: "Trading platform integration" },
    { name: "Fidelity", description: "Investment account management" },
    { name: "Chase", description: "Banking and credit card integration" }
  ];

  const pricingTiers = [
    {
      name: "Personal",
      price: 149,
      period: "month",
      description: "Perfect for individual financial planning",
      features: [
        "Personal budget optimization",
        "Basic investment analysis",
        "Portfolio tracking",
        "Financial goal setting",
        "Mobile app access",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 299,
      period: "month",
      description: "Ideal for financial advisors and professionals",
      features: [
        "Advanced AI features",
        "Portfolio risk management",
        "Predictive modeling",
        "Client management tools",
        "Full integrations",
        "Priority support",
        "Custom dashboards",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 799,
      period: "month",
      description: "For financial institutions and large firms",
      features: [
        "Unlimited users",
        "Custom AI models",
        "Advanced risk analytics",
        "API access",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Amanda Rodriguez",
      role: "Financial Advisor",
      company: "Wealth Management Partners",
      content: "AI Financial Planning Assistant has transformed our client services. We've increased portfolio returns by 25% and improved client satisfaction significantly.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "Investment Manager",
      company: "Capital Growth Strategies",
      content: "The predictive modeling and risk management features have given us a competitive edge. Our clients appreciate the data-driven approach.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Personal Finance Coach",
      company: "Financial Freedom Academy",
      content: "The AI-powered budget optimization helps my clients save money automatically. It's like having a personal financial advisor 24/7.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Financial Planning Assistant — Zion Tech Group | Intelligent Financial Planning"
        description="Transform your financial planning with AI-powered investment analysis, budget optimization, risk management, and predictive modeling. Increase portfolio returns by 25%."
        keywords="AI financial planning, investment analysis, budget optimization, portfolio management, risk management"
        canonical="https://ziontechgroup.com/services/ai-financial-planning-assistant"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2"/>
              AI-Powered Financial Planning
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Financial Planning
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Assistant</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your financial future with intelligent automation. AI-powered investment analysis, 
              budget optimization, risk management, and predictive modeling to boost portfolio returns by 25%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a 
                href="/request-quote" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose AI Financial Planning Assistant?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">25% Portfolio Returns</h3>
              <p className="text-gray-300">AI-powered investment optimization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">20% Expense Savings</h3>
              <p className="text-gray-300">Smart budget optimization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Risk Management</h3>
              <p className="text-gray-300">Proactive portfolio protection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <LineChart className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Predictive Insights</h3>
              <p className="text-gray-300">Future financial modeling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful AI Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Seamless Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-300">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 border ${
                tier.popular ? 'border-green-500 bg-green-500/10' : 'border-slate-700'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">${tier.price}</span>
                  <span className="text-gray-400">/{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/request-quote" 
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:scale-105' 
                      : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Financial Future?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of individuals and professionals already using AI to optimize their finances and achieve their goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-4"/>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-green-400 mb-4"/>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-green-400 mb-4"/>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 text-center">
                364 E Main St STE 1008<br/>
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialPlanningAssistant;