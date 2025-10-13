import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Receipt, 
  BarChart3, 
  TrendingUp, 
  Sparkles, 
  Clock, 
  Target, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Eye,
  Heart,
  MessageSquare,
  ShoppingCart,
  CreditCard,
  Award,
  Bell,
  Calendar,
  Settings,
  PieChart,
  Activity,
  Send,
  Inbox,
  Archive,
  Trash2,
  Filter,
  Search,
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  TrendingDown,
  FileText,
  Calculator
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionSmartExpenseCategorizerPage = () => {
  const features = [
    {
      title: "AI-Powered Categorization",
      description: "Automatically categorize expenses with 95% accuracy using machine learning",
      icon: <Brain className="w-6 h-6" />,
      stats: "95% accuracy"
    },
    {
      title: "Smart Receipt Processing",
      description: "Extract data from receipts and invoices automatically using OCR technology",
      icon: <Receipt className="w-6 h-6" />,
      stats: "OCR processing"
    },
    {
      title: "Multi-Currency Support",
      description: "Handle expenses in multiple currencies with real-time exchange rates",
      icon: <Globe className="w-6 h-6" />,
      stats: "150+ currencies"
    },
    {
      title: "Custom Categories",
      description: "Create and train custom expense categories for your business needs",
      icon: <Settings className="w-6 h-6" />,
      stats: "Unlimited categories"
    },
    {
      title: "Integration Ready",
      description: "Connect with accounting software, banks, and financial platforms",
      icon: <Shield className="w-6 h-6" />,
      stats: "50+ integrations"
    },
    {
      title: "Expense Analytics",
      description: "Get detailed insights and reports on your spending patterns",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Real-time analytics"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and freelancers",
      features: [
        "Up to 500 expenses/month",
        "Basic categorization",
        "Receipt scanning",
        "Email support",
        "Basic reports",
        "30-day data retention"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "Ideal for small to medium businesses",
      features: [
        "Up to 5,000 expenses/month",
        "Advanced AI categorization",
        "Multi-currency support",
        "Priority support",
        "Advanced analytics",
        "1-year data retention",
        "API access",
        "Custom categories"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations with high expense volume",
      features: [
        "Unlimited expenses",
        "Custom AI models",
        "Advanced integrations",
        "24/7 phone support",
        "White-label options",
        "Unlimited data retention",
        "Dedicated account manager",
        "Custom reporting"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "Small Business Owner",
      role: "Founder",
      content: "Zion Smart Expense Categorizer has saved me hours every week. The AI categorization is incredibly accurate and the receipt scanning feature is a game-changer.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Sarah Chen",
      company: "Accounting Firm",
      role: "Senior Accountant",
      content: "This tool has revolutionized how we handle client expenses. The multi-currency support and custom categories make it perfect for our international clients.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Freelance Consultant",
      role: "Independent Contractor",
      content: "As a freelancer, tracking expenses is crucial for tax purposes. This AI tool makes it effortless and ensures I never miss a deductible expense.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const benefits = [
    {
      title: "Time Savings",
      description: "Reduce expense processing time by 80% with AI automation",
      icon: <Clock className="w-8 h-8" />,
      stat: "80% time saved"
    },
    {
      title: "Accuracy",
      description: "Eliminate human errors in expense categorization",
      icon: <Target className="w-8 h-8" />,
      stat: "95% accuracy"
    },
    {
      title: "Cost Reduction",
      description: "Reduce accounting costs and improve efficiency",
      icon: <DollarSign className="w-8 h-8" />,
      stat: "60% cost reduction"
    },
    {
      title: "Compliance",
      description: "Ensure tax compliance with proper expense categorization",
      icon: <Shield className="w-8 h-8" />,
      stat: "100% compliant"
    }
  ];

  const metrics = [
    { label: "Processing Time", value: "2 min", improvement: "-80%" },
    { label: "Categorization Accuracy", value: "95%", improvement: "+25%" },
    { label: "Cost Savings", value: "$2,400", improvement: "+60%" },
    { label: "User Satisfaction", value: "4.8/5", improvement: "+0.9" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion Smart Expense Categorizer - AI-Powered Expense Management | Zion Tech Group"
        description="Automatically categorize expenses with AI. Smart receipt processing, multi-currency support, and detailed analytics. Perfect for businesses and individuals. Start free trial today!"
        keywords="AI expense categorization, expense management, receipt scanning, expense tracking, financial automation, accounting software, expense analytics"
        canonical="https://ziontechgroup.com/zion-smart-expense-categorizer"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Receipt className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Expense Management Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Smart Expense Categorization
            </span>
            <br />
            <span className="text-white">with AI Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Automatically categorize expenses with 95% accuracy using AI. Process receipts, 
            handle multi-currency transactions, and get detailed analytics on your spending patterns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Receipt className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-300 text-sm">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">150+</div>
              <div className="text-gray-300 text-sm">Currencies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4.8/5</div>
              <div className="text-gray-300 text-sm">User Rating</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Expense Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven features to automate expense management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <div className="text-cyan-400 text-sm font-medium">{feature.stats}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your expense management with measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-2">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the impact of AI-powered expense categorization
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 text-sm mb-1">{metric.label}</div>
                <div className="text-green-400 text-sm font-medium">{metric.improvement}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scale your expense management as your business grows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Finance Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are automating expense management with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Expense Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses who are already using Zion Smart Expense Categorizer 
            to streamline their financial processes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Receipt className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionSmartExpenseCategorizerPage;