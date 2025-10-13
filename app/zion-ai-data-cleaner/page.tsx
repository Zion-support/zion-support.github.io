import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Zap, Shield, BarChart3, Star, CheckCircle, AlertTriangle, Clock, Users, ArrowRight, Sparkles, Brain, Trash2, RefreshCw, Filter } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const ZionAiDataCleanerPage = () => {
  const features = [
    {
      title: "AI-Powered Data Cleaning",
      description: "Advanced machine learning algorithms automatically detect and clean dirty data, duplicates, and inconsistencies",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Duplicate Detection",
      description: "Intelligent duplicate detection using fuzzy matching and machine learning to identify similar records",
      icon: <RefreshCw className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Validation",
      description: "Comprehensive data validation rules to ensure data quality and consistency across your datasets",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Format Standardization",
      description: "Automatically standardize data formats, phone numbers, addresses, and other structured data",
      icon: <Filter className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$19",
      period: "month",
      description: "Perfect for small datasets and individual users",
      features: [
        "Up to 10,000 records per month",
        "Basic data cleaning",
        "Duplicate detection",
        "CSV/Excel support",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$59",
      period: "month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 100,000 records per month",
        "Advanced AI cleaning",
        "Custom validation rules",
        "API integration",
        "Priority support",
        "Team collaboration",
        "Data quality reports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "month",
      description: "For large organizations with complex data needs",
      features: [
        "Unlimited records",
        "Custom AI models",
        "On-premise deployment",
        "Advanced analytics",
        "24/7 phone support",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "95%", label: "Data Quality Improvement", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "80%", label: "Time Saved on Cleaning", icon: <Clock className="w-6 h-6" /> },
    { number: "5,000+", label: "Datasets Processed", icon: <Database className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Zion AI Data Cleaner - Intelligent Data Cleaning & Quality Management | Zion Tech Group"
        description="AI-powered data cleaning tool that automatically detects and fixes dirty data, duplicates, and inconsistencies. Improve data quality with intelligent cleaning algorithms and validation rules."
        keywords="data cleaning, data quality, duplicate detection, data validation, data preprocessing, AI data cleaning, data management, data analytics"
        canonical="https://ziontechgroup.com/zion-ai-data-cleaner"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">AI-Powered Data Cleaning</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400">
              Zion AI Data Cleaner
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your dirty data into clean, reliable datasets with AI-powered cleaning algorithms. 
            Automatically detect duplicates, fix inconsistencies, and ensure data quality across your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
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
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <ResponsiveGrid cols={{ default: 2, md: 4 }} className="max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Intelligent Data Cleaning Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our AI-powered platform provides comprehensive data cleaning capabilities to help you 
              maintain high-quality, reliable datasets for better decision making.
            </p>
          </div>
          
          <ResponsiveGrid cols={{ default: 1, md: 2, lg: 4 }}>
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer"
                glowColor="green"
              >
                <div className="p-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your data cleaning needs. All plans include our core AI cleaning features.
            </p>
          </div>
          
          <ResponsiveGrid cols={{ default: 1, md: 3 }} className="max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
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
                
                <FuturisticButton
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Clean Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations who trust Zion AI Data Cleaner to maintain 
              high-quality, reliable datasets for better business insights.
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
                Schedule Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Contact us for enterprise pricing and custom solutions</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
                <a href="tel:+13024640950" className="text-green-400 hover:text-green-300 transition-colors">
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAiDataCleanerPage;