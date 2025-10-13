import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Brain, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Target,
  MessageSquare,
  Star,
  Clock,
  Award,
  Globe,
  Shield,
  Smartphone,
  Monitor,
  Mail,
  Bell,
  Settings,
  PieChart,
  Activity,
  Send,
  Download,
  Filter,
  Search,
  AlertTriangle,
  Users,
  DollarSign,
  FileText,
  Image,
  Video,
  Trash2,
  RefreshCw
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIDataCleanerPage = () => {
  const features = [
    {
      title: "AI-Powered Data Cleaning",
      description: "Automatically clean, validate, and standardize data using advanced AI algorithms",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Duplicate Detection",
      description: "Identify and remove duplicate records with 99% accuracy using machine learning",
      icon: <Filter className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Validation",
      description: "Validate data formats, ranges, and business rules automatically",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Standardization",
      description: "Standardize data formats, names, and values across all sources",
      icon: <Settings className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Missing Data Imputation",
      description: "Intelligently fill missing data using AI-powered imputation methods",
      icon: <RefreshCw className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Data Quality Analytics",
      description: "Track data quality metrics and get detailed insights on data health",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small datasets and individual users",
      features: [
        "10,000 records/month",
        "Basic cleaning",
        "Email support",
        "Standard reports",
        "1 user account",
        "Basic validation"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and data teams",
      features: [
        "100,000 records/month",
        "Advanced cleaning",
        "Priority support",
        "Advanced reports",
        "5 user accounts",
        "Custom rules",
        "API access",
        "Data quality analytics"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with extensive data needs",
      features: [
        "Unlimited records",
        "Full AI cleaning suite",
        "Custom AI models",
        "24/7 dedicated support",
        "Unlimited users",
        "White-label solution",
        "Advanced API access",
        "SLA guarantee",
        "On-premise deployment",
        "Custom integrations"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "Data Accuracy",
      description: "Improve data accuracy by 95%",
      icon: <Target className="w-6 h-6" />,
      metric: "95% improvement"
    },
    {
      title: "Duplicate Removal",
      description: "Remove duplicates with 99% accuracy",
      icon: <Filter className="w-6 h-6" />,
      metric: "99% accuracy"
    },
    {
      title: "Processing Speed",
      description: "Clean data 10x faster than manual methods",
      icon: <Zap className="w-6 h-6" />,
      metric: "10x faster"
    },
    {
      title: "Data Completeness",
      description: "Fill missing data with 90% accuracy",
      icon: <RefreshCw className="w-6 h-6" />,
      metric: "90% accuracy"
    },
    {
      title: "Cost Savings",
      description: "Reduce data cleaning costs by 80%",
      icon: <DollarSign className="w-6 h-6" />,
      metric: "80% savings"
    },
    {
      title: "Data Quality Score",
      description: "Achieve 98% data quality score",
      icon: <Star className="w-6 h-6" />,
      metric: "98% quality"
    }
  ];

  const testimonials = [
    {
      name: "Lisa Chen",
      company: "Data Analytics Firm",
      role: "Data Quality Manager",
      content: "Zion AI Data Cleaner has transformed our data quality. We've improved accuracy by 95% and reduced cleaning time by 90%. The AI is incredibly intelligent and accurate.",
      rating: 5,
      avatar: "LC"
    },
    {
      name: "David Park",
      company: "E-commerce Platform",
      role: "Data Engineer",
      content: "Duplicate detection was a game-changer for our customer database. We've removed 50,000+ duplicate records and improved our data quality significantly.",
      rating: 5,
      avatar: "DP"
    },
    {
      name: "Maria Rodriguez",
      company: "Financial Services",
      role: "Data Analyst",
      content: "Missing data imputation helped us complete our financial datasets. The AI fills missing values with 90% accuracy, saving us weeks of manual work.",
      rating: 5,
      avatar: "MR"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Data Cleaner - Automated Data Cleaning & Quality Management | Zion Tech Group"
        description="Clean your data with Zion AI Data Cleaner. Automatically clean, validate, and standardize data with 95% accuracy. Start your free trial today!"
        keywords="data cleaning, data quality, data validation, duplicate removal, data standardization, data cleaning AI, data management, data analytics"
        canonical="https://ziontechgroup.com/zion-ai-data-cleaner"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Database className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Data Cleaning</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Clean Your Data
            </span>
            <br />
            <span className="text-white">with AI Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Automatically clean, validate, and standardize your data with 95% accuracy. 
            Transform messy data into clean, reliable datasets with AI-powered data cleaning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Database className="w-5 h-5" />}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Data Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-300 text-sm">Duplicate Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">10x</div>
              <div className="text-gray-300 text-sm">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300 text-sm">Cost Savings</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Data Cleaning Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to clean and standardize your data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
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
              Powerful Data Cleaning Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Achieve remarkable results with AI-powered data cleaning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    {capability.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                    <div className="text-2xl font-bold text-cyan-400">{capability.metric}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{capability.description}</p>
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
              Choose the plan that fits your data cleaning needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "/signup"}
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
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Data Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our users say about Zion AI Data Cleaner
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
                    <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Clean Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations using AI to clean, validate, and standardize their data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Database className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Eye className="w-5 h-5" />}
              >
                View Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIDataCleanerPage;