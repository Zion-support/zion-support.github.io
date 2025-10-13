import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Search, 
  Brain, 
  Shield, 
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
  FileText,
  Layers,
  Filter,
  TrendingUp,
  Activity,
  Cpu,
  AlertCircle,
  CheckCircle2,
  Users,
  Calendar,
  PieChart,
  LineChart
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIDataMiningProPage = () => {
  const features = [
    {
      title: "Advanced Pattern Recognition",
      description: "Discover hidden patterns in large datasets with 99% accuracy",
      icon: <Search className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Machine Learning Models",
      description: "Build and deploy custom ML models for data analysis",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Processing",
      description: "Process and analyze data in real-time for instant insights",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and behaviors with advanced algorithms",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    "Advanced Pattern Recognition",
    "Machine Learning Models",
    "Real-time Processing",
    "Predictive Analytics",
    "Data Visualization",
    "Statistical Analysis",
    "Clustering Algorithms",
    "Classification Models",
    "Association Rules",
    "Anomaly Detection",
    "Custom Algorithm Development",
    "Big Data Processing"
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small datasets",
      features: [
        "Up to 1GB data processing",
        "Basic pattern recognition",
        "Standard algorithms",
        "Email support",
        "Basic visualization"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 100GB data processing",
        "Advanced ML models",
        "Real-time processing",
        "Priority support",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited data processing",
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
      name: "Dr. Sarah Williams",
      company: "Research Institute",
      role: "Data Scientist",
      content: "AI Data Mining Pro has revolutionized our research capabilities. The pattern recognition algorithms are incredibly sophisticated and accurate.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Financial Analytics",
      role: "Quantitative Analyst",
      content: "The predictive analytics features have transformed our trading strategies. We can now identify market patterns that were previously invisible.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "Marketing Agency",
      role: "Analytics Director",
      content: "The real-time processing capabilities are outstanding. We can now analyze customer behavior as it happens and make instant decisions.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Data Mining Pro - Advanced Data Analysis Platform | Zion Tech Group"
        description="Unlock insights from your data with AI-powered data mining. Advanced pattern recognition, machine learning models, and predictive analytics for better decision making."
        keywords="AI data mining, pattern recognition, machine learning, predictive analytics, data analysis, big data processing"
        canonical="https://ziontechgroup.com/ai-data-mining-pro"
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Database className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI Data Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Data Mining Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Unlock insights from your data with AI-powered data mining. Advanced pattern recognition, 
              machine learning models, and predictive analytics for better decision making.
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
                icon={<Database className="w-5 h-5" />}
              >
                Try Data Mining Demo
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Data Mining Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need for intelligent data analysis
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
                Comprehensive Data Mining Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete data analysis platform for modern businesses
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
                Flexible pricing for data mining needs of all sizes
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
                What Data Scientists Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of analysts using AI Data Mining Pro
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
                Ready to Unlock Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your free trial today and discover the power of AI data mining.
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
                  icon={<Database className="w-5 h-5" />}
                >
                  Try Data Mining Demo
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
};

export default AIDataMiningProPage;