import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  Brain, 
  Zap, 
  Lock, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  Globe,
  Sparkles,
  CreditCard,
  BarChart3,
  Settings,
  Smartphone,
  Monitor,
  Target,
  TrendingUp,
  Database,
  Activity
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIFraudDetectionPro = () => {
  const features = [
    {
      title: "Real-time Fraud Detection",
      description: "Detect fraudulent activities in real-time with 99.9% accuracy using advanced machine learning algorithms",
      icon: <Zap className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Behavioral Analysis",
      description: "Analyze user behavior patterns to identify suspicious activities and potential fraud attempts",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Transaction Monitoring",
      description: "Monitor all transactions in real-time with advanced pattern recognition and anomaly detection",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Risk Scoring",
      description: "Generate comprehensive risk scores for every transaction and user interaction",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Machine Learning Models",
      description: "Continuously learning models that adapt to new fraud patterns and improve over time",
      icon: <Activity className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Compliance & Reporting",
      description: "Meet regulatory requirements with comprehensive audit trails and compliance reporting",
      icon: <Shield className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses starting with fraud protection",
      features: [
        "Up to 10,000 transactions/month",
        "Basic fraud detection",
        "Real-time monitoring",
        "Email alerts",
        "Standard reporting",
        "Email support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$799",
      period: "per month",
      description: "Ideal for growing businesses with advanced fraud protection needs",
      features: [
        "Up to 100,000 transactions/month",
        "Advanced fraud detection",
        "Behavioral analysis",
        "Risk scoring",
        "Custom rules engine",
        "Priority support",
        "Advanced analytics",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "per month",
      description: "Complete solution for large organizations with unlimited transactions",
      features: [
        "Unlimited transactions",
        "All fraud detection features",
        "Custom ML models",
        "24/7 dedicated support",
        "White-label solution",
        "Compliance reporting",
        "Custom integrations",
        "SLA guarantee",
        "Training & consultation"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const fraudTypes = [
    {
      title: "Payment Fraud",
      description: "Detect unauthorized credit card transactions and payment fraud",
      icon: <CreditCard className="w-6 h-6" />,
      benefits: ["Reduce chargebacks", "Prevent unauthorized payments", "Protect customer data"]
    },
    {
      title: "Identity Theft",
      description: "Identify stolen identities and account takeovers",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Prevent account takeovers", "Detect identity theft", "Protect user accounts"]
    },
    {
      title: "Synthetic Fraud",
      description: "Detect synthetic identities and fake account creation",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ["Prevent fake accounts", "Detect synthetic identities", "Reduce false positives"]
    },
    {
      title: "Money Laundering",
      description: "Identify suspicious money laundering activities and patterns",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Comply with regulations", "Detect money laundering", "Generate reports"]
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "Banks, credit unions, and financial institutions",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "E-commerce",
      description: "Online retailers and marketplaces",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Healthcare",
      description: "Healthcare providers and insurance companies",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Gaming & Entertainment",
      description: "Online gaming platforms and streaming services",
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const testimonials = [
    {
      name: "Robert Martinez",
      company: "SecureBank Financial",
      role: "Chief Risk Officer",
      content: "AI Fraud Detection Pro has reduced our fraud losses by 95%. The real-time detection capabilities are outstanding and have saved us millions.",
      rating: 5,
      avatar: "RM"
    },
    {
      name: "Jennifer Lee",
      company: "ShopMax E-commerce",
      role: "VP of Security",
      content: "The behavioral analysis feature is incredible. We can now detect sophisticated fraud attempts that traditional systems miss.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Michael Thompson",
      company: "HealthCare Plus",
      role: "Compliance Director",
      content: "This solution has helped us meet all regulatory requirements while significantly reducing fraud. The reporting capabilities are excellent.",
      rating: 5,
      avatar: "MT"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Fraud Detection Pro - Advanced Fraud Prevention Solutions | Zion Tech Group"
        description="Protect your business with AI Fraud Detection Pro. Real-time fraud detection, behavioral analysis, and risk scoring. Starting at $299/month."
        keywords="AI fraud detection, fraud prevention, risk management, payment fraud, identity theft, compliance, security, fraud analytics"
        canonical="https://ziontechgroup.com/ai-fraud-detection-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">Advanced Fraud Protection</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              AI Fraud Detection Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Protect your business from fraud with advanced AI technology. Real-time detection, behavioral analysis, 
            and risk scoring that adapts to new threats and saves you millions in losses.
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
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-red-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300 text-xs md:text-sm">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">&lt;100ms</div>
              <div className="text-gray-300 text-xs md:text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300 text-xs md:text-sm">Fraud Reduction</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-xs md:text-sm">Protection</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Fraud Detection Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              State-of-the-art AI technology that learns, adapts, and protects your business from 
              sophisticated fraud attempts in real-time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Fraud Detection Pro is protecting businesses across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fraud Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Fraud Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect against all types of fraud with our comprehensive detection capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fraudTypes.map((fraudType, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {fraudType.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {fraudType.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {fraudType.description}
                </p>
                <ul className="space-y-2">
                  {fraudType.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-red-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Protection Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to protect your business at any scale. Start with a free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-red-500/50 shadow-2xl shadow-red-500/10' 
                    : 'border-white/20 hover:border-red-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "/contact"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about AI Fraud Detection Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't wait for fraud to happen. Join thousands of businesses using AI Fraud Detection Pro 
            to protect their revenue and reputation. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
            >
              Security Assessment
            </FuturisticButton>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-red-400 hover:text-red-300">+1 302 464 0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFraudDetectionPro;