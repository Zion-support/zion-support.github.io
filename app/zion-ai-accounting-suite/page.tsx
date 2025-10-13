import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  Zap, 
  Brain, 
  ArrowRight,
  Star,
  Clock,
  Users,
  DollarSign,
  Smartphone,
  Monitor,
  Cloud,
  Target,
  Award,
  Sparkles,
  BarChart3,
  Receipt,
  CreditCard,
  PieChart,
  Globe
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import StructuredData from '../components/StructuredData';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ZionAIAccountingSuite = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Accounting Suite",
    "description": "AI-powered accounting software with automated bookkeeping, tax preparation, and financial insights",
    "url": "https://ziontechgroup.com/zion-ai-accounting-suite",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "149",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "149",
        "priceCurrency": "USD",
        "billingIncrement": "P1M"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const features = [
    {
      title: "AI-Powered Bookkeeping",
      description: "Automatically categorize transactions and reconcile accounts with 99.5% accuracy",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefits: ["Auto-categorize transactions", "Smart reconciliation", "Error detection & correction"]
    },
    {
      title: "Automated Tax Preparation",
      description: "Generate tax reports and forms automatically with real-time tax law updates",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefits: ["Auto-generate tax forms", "Real-time tax updates", "Multi-state compliance"]
    },
    {
      title: "Smart Financial Insights",
      description: "Get AI-driven financial analysis and recommendations for better business decisions",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefits: ["Cash flow forecasting", "Expense optimization", "Revenue insights"]
    },
    {
      title: "Receipt & Invoice Management",
      description: "Automatically capture, process, and store receipts and invoices with OCR technology",
      icon: <Receipt className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefits: ["OCR receipt scanning", "Auto-invoice generation", "Digital storage"]
    },
    {
      title: "Multi-Currency Support",
      description: "Handle international transactions with real-time currency conversion and reporting",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      benefits: ["150+ currencies", "Real-time conversion", "Multi-currency reports"]
    },
    {
      title: "Bank Integration",
      description: "Connect all your bank accounts and credit cards for seamless transaction import",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      benefits: ["10,000+ banks supported", "Real-time sync", "Secure connections"]
    }
  ];

  const pricingPlans = [
    {
      name: "Solo",
      price: "$49",
      period: "per month",
      description: "Perfect for freelancers and solopreneurs",
      features: [
        "Up to 5 bank accounts",
        "Basic AI bookkeeping",
        "Simple tax reports",
        "Email support",
        "Mobile app access",
        "Basic reporting",
        "Receipt scanning (50/month)"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Business",
      price: "$149",
      period: "per month",
      description: "Most popular for small to medium businesses",
      features: [
        "Up to 25 bank accounts",
        "Advanced AI bookkeeping",
        "Full tax preparation",
        "Priority support",
        "Multi-user access",
        "Advanced analytics",
        "Unlimited receipt scanning",
        "API access",
        "Custom reporting"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large businesses and accounting firms",
      features: [
        "Unlimited bank accounts",
        "Custom AI models",
        "White-label options",
        "24/7 phone support",
        "Unlimited users",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced security",
        "Custom workflows"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Martinez Consulting",
      role: "CPA",
      content: "Zion AI Accounting Suite has revolutionized how we handle client accounts. The AI bookkeeping saves us 20+ hours per week, and the accuracy is incredible.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "Thompson & Associates",
      role: "Owner",
      content: "The automated tax preparation feature is a game-changer. We went from spending days on tax prep to having everything ready in minutes.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "Robert Kim",
      company: "Kim Enterprises",
      role: "CFO",
      content: "The financial insights help us make better business decisions. The cash flow forecasting has been spot-on and helped us avoid potential issues.",
      rating: 5,
      avatar: "RK"
    }
  ];

  const stats = [
    { number: "99.5%", label: "Accuracy Rate", icon: <Target className="w-6 h-6" /> },
    { number: "20+", label: "Hours Saved Weekly", icon: <Clock className="w-6 h-6" /> },
    { number: "10,000+", label: "Banks Supported", icon: <Shield className="w-6 h-6" /> },
    { number: "150+", label: "Currencies", icon: <DollarSign className="w-6 h-6" /> }
  ];

  const integrations = [
    { name: "QuickBooks", logo: "QB", description: "Seamless data migration" },
    { name: "Xero", logo: "X", description: "Real-time synchronization" },
    { name: "Stripe", logo: "S", description: "Payment processing" },
    { name: "PayPal", logo: "PP", description: "Online payments" },
    { name: "Shopify", logo: "SH", description: "E-commerce integration" },
    { name: "Salesforce", logo: "SF", description: "CRM integration" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Accounting Suite - Automated Accounting Software | Zion Tech Group"
        description="AI-powered accounting software with automated bookkeeping, tax preparation, and financial insights. Save 20+ hours weekly with 99.5% accuracy."
        keywords="accounting software, AI bookkeeping, automated accounting, tax preparation, financial management, small business accounting"
        canonical="https://ziontechgroup.com/zion-ai-accounting-suite"
        structuredData={structuredData}
      />
      
      <StructuredData type="SoftwareApplication" data={structuredData} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Accounting</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Accounting Suite
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your accounting with AI-powered automation. Save 20+ hours weekly with automated bookkeeping, 
            tax preparation, and intelligent financial insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Accounting Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to streamline your accounting with cutting-edge AI technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite business tools and platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {integration.logo}
                </div>
                <h3 className="text-white font-semibold mb-2">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
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
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Accounting Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Accounting Suite
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Accounting?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses already using Zion AI Accounting Suite to streamline their financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIAccountingSuite;