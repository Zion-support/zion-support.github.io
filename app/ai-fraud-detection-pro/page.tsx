import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  AlertTriangle, 
  Brain, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Award,
  Clock,
  Globe,
  Settings,
  Target,
  BarChart3,
  Eye,
  Lock,
  CreditCard,
  Banknote,
  TrendingDown,
  Activity,
  Database,
  Cpu,
  AlertCircle,
  CheckCircle2,
  FileText,
  Users,
  Calendar
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIFraudDetectionProPage = () => {
  const features = [
    {
      title: "Real-time Fraud Detection",
      description: "Detect fraudulent transactions in real-time with 99.9% accuracy",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Machine Learning Models",
      description: "Advanced ML models that learn and adapt to new fraud patterns",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-channel Monitoring",
      description: "Monitor fraud across all channels and touchpoints",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Risk Scoring",
      description: "Generate risk scores for every transaction and user",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    "Real-time Fraud Detection",
    "Machine Learning Models",
    "Multi-channel Monitoring",
    "Risk Scoring",
    "Behavioral Analysis",
    "Device Fingerprinting",
    "IP Geolocation",
    "Transaction Monitoring",
    "Account Takeover Detection",
    "Payment Fraud Prevention",
    "Identity Verification",
    "Custom Rule Engine"
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 transactions/month",
        "Basic fraud detection",
        "Standard accuracy",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100,000 transactions/month",
        "Advanced ML models",
        "Real-time monitoring",
        "Priority support",
        "Custom integrations",
        "Risk scoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited transactions",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "On-premise deployment",
        "Custom development"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Johnson",
      company: "Financial Services",
      role: "Security Director",
      content: "AI Fraud Detection Pro has reduced our fraud losses by 85% and false positives by 60%. The real-time detection is incredibly accurate.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "E-commerce Platform",
      role: "Risk Manager",
      content: "The machine learning models adapt quickly to new fraud patterns. We've seen a significant improvement in our fraud prevention capabilities.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Payment Processor",
      role: "CTO",
      content: "The multi-channel monitoring and risk scoring features are outstanding. We can now prevent fraud across all our payment channels effectively.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Fraud Detection Pro - Advanced Security Platform | Zion Tech Group"
        description="Protect your business with AI-powered fraud detection. Real-time monitoring, machine learning models, and risk scoring for comprehensive fraud prevention."
        keywords="AI fraud detection, fraud prevention, risk scoring, machine learning security, payment fraud, identity verification"
        canonical="https://ziontechgroup.com/ai-fraud-detection-pro"
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Shield className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI Security Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Fraud Detection Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your business with AI-powered fraud detection. Real-time monitoring, 
              machine learning models, and risk scoring for comprehensive fraud prevention.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
                icon={<Shield className="w-5 h-5" />}
              >
                Watch Security Demo
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need for comprehensive fraud prevention
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete fraud detection platform for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
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
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing for fraud detection of all scales
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    tier.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    href="/contact"
                    variant={tier.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    Get Started
                  </FuturisticButton>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Security Professionals Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses using AI Fraud Detection Pro
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
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Protect Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your free trial today and discover the power of AI fraud detection.
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
                  icon={<Shield className="w-5 h-5" />}
                >
                  Watch Security Demo
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
};

export default AIFraudDetectionProPage;