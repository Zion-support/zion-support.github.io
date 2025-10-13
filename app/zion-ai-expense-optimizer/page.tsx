import { ArrowRight, DollarSign, TrendingDown, Receipt, BarChart3, CheckCircle, Star, Brain, Calculator, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAIExpenseOptimizer() {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "AI-Powered Cost Analysis",
      description: "Intelligent expense analysis with automated categorization and cost optimization recommendations"
    },
    {
      icon: <Receipt className="w-6 h-6" />,
      title: "Smart Receipt Processing",
      description: "OCR technology extracts data from receipts and invoices with 99% accuracy"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Expense Reduction Insights",
      description: "AI identifies cost-saving opportunities and suggests budget optimizations"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Budget Tracking",
      description: "Live budget monitoring with alerts and spending pattern analysis"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Approvals",
      description: "AI-powered expense approval workflow with policy compliance checking"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Predictive Budgeting",
      description: "Machine learning forecasts future expenses and recommends budget adjustments"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 100 receipts/month",
        "Basic expense tracking",
        "Simple budget alerts",
        "Email support",
        "1 user account",
        "Standard reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 1,000 receipts/month",
        "AI expense analysis",
        "Advanced budget tracking",
        "Automated approvals",
        "Priority support",
        "Up to 10 user accounts",
        "API access",
        "Custom categories"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited receipts",
        "AI-powered insights",
        "Custom approval workflows",
        "White-label reporting",
        "24/7 dedicated support",
        "Unlimited users",
        "Advanced integrations",
        "Compliance reporting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "Financial Services Inc.",
      role: "CFO",
      content: "Zion AI Expense Optimizer reduced our expense processing time by 80% and saved us $50K annually.",
      rating: 5
    },
    {
      name: "Mark Thompson",
      company: "Tech Startup",
      role: "Finance Director",
      content: "The AI insights helped us identify $30K in unnecessary expenses we never knew about.",
      rating: 5
    },
    {
      name: "Rachel Kim",
      company: "Consulting Firm",
      role: "Operations Manager",
      content: "Automated receipt processing is a game-changer. Our team can focus on strategic work now.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Expense Optimizer - Smart Expense Management Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Optimize your business expenses with Zion AI Expense Optimizer. AI-powered cost analysis, smart receipt processing, and automated budget tracking for modern businesses."
        />
        <meta
          name="keywords"
          content="expense management, cost optimization, receipt processing, budget tracking, AI finance, expense analysis, financial automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <DollarSign className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">AI-Powered Expense Management</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Zion AI Expense Optimizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your expense management with AI-powered cost analysis and optimization. 
              Smart receipt processing, automated approvals, and intelligent budget insights for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                <div className="text-gray-300">Time Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">$50K</div>
                <div className="text-gray-300">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
                <div className="text-gray-300">Receipt Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Expense Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize expenses and streamline financial processes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-green-400 bg-gradient-to-br from-green-500/10 to-emerald-500/10'
                      : 'border-white/20 hover:border-green-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Finance Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what finance professionals say about our expense optimization platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Expenses?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses saving money and time with AI-powered expense management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}