import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Database, BarChart3, Shield, Cloud, Zap, Globe, Star, Award, Mail, Phone, MapPin, TrendingUp, Users, Clock } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticBackground from '../../components/FuturisticBackground';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';

const ZionAIDataWarehousePro = () => {
  const features = [
    {
      title: "AI-Powered Data Integration",
      description: "Automatically connect and integrate data from 500+ sources with intelligent mapping",
      icon: <Database className="w-6 h-6" />,
      benefits: ["Real-time data sync", "Auto-schema detection", "Data quality validation"]
    },
    {
      title: "Advanced Analytics Engine",
      description: "Built-in AI analytics with predictive modeling and machine learning capabilities",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Predictive analytics", "ML model training", "Automated insights"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption, access controls, and compliance features",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["End-to-end encryption", "Role-based access", "SOC 2 compliance"]
    },
    {
      title: "Cloud-Native Architecture",
      description: "Scalable cloud infrastructure that grows with your business needs",
      icon: <Cloud className="w-6 h-6" />,
      benefits: ["Auto-scaling", "99.9% uptime", "Global CDN"]
    },
    {
      title: "Real-time Processing",
      description: "Process and analyze data in real-time with sub-second query performance",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Stream processing", "Fast queries", "Live dashboards"]
    },
    {
      title: "Multi-Cloud Support",
      description: "Deploy across AWS, Azure, GCP, or hybrid environments",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Cloud flexibility", "Vendor lock-in free", "Hybrid deployments"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small to medium businesses starting their data journey",
      features: [
        "Up to 1TB storage",
        "10 data sources",
        "Basic analytics",
        "Email support",
        "Standard security",
        "Monthly backups"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses with complex data needs",
      features: [
        "Up to 10TB storage",
        "50 data sources",
        "Advanced analytics",
        "Priority support",
        "Advanced security",
        "Daily backups",
        "API access",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations with enterprise-level data requirements",
      features: [
        "Unlimited storage",
        "Unlimited data sources",
        "AI/ML analytics",
        "24/7 dedicated support",
        "Enterprise security",
        "Real-time backups",
        "White-label options",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "DataFlow Analytics",
      role: "Chief Data Officer",
      content: "Zion AI Data Warehouse Pro transformed our data infrastructure. We now have real-time insights that were impossible before.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "RetailMax Corporation",
      role: "VP of Analytics",
      content: "The AI-powered analytics helped us discover patterns we never knew existed. Our revenue increased by 25% in 6 months.",
      rating: 5
    },
    {
      name: "Robert Chen",
      company: "FinTech Solutions",
      role: "Head of Data Science",
      content: "Finally, a data warehouse that scales with our needs. The performance and reliability are outstanding.",
      rating: 5
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime SLA" },
    { number: "10x", label: "Faster Queries" },
    { number: "500+", label: "Data Sources" },
    { number: "24/7", label: "Support Available" }
  ];

  const useCases = [
    {
      title: "Business Intelligence",
      description: "Transform raw data into actionable business insights with AI-powered analytics",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Real-time dashboards", "Predictive analytics", "Custom reports"]
    },
    {
      title: "Customer Analytics",
      description: "Understand customer behavior and preferences with advanced segmentation",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Customer profiling", "Churn prediction", "Personalization"]
    },
    {
      title: "Financial Reporting",
      description: "Automated financial reporting and compliance with real-time data processing",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Automated reports", "Compliance tracking", "Risk analysis"]
    },
    {
      title: "Operational Analytics",
      description: "Monitor and optimize business operations with real-time performance metrics",
      icon: <Clock className="w-6 h-6" />,
      benefits: ["Performance monitoring", "Process optimization", "Alert systems"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Zion AI Data Warehouse Pro - Advanced Data Analytics Platform | Zion Tech Group"
        description="Transform your data into actionable insights with AI-powered data warehouse. Real-time analytics, 500+ integrations, enterprise security. Starting at $499/month."
        keywords="data warehouse, data analytics, business intelligence, data integration, AI analytics, data processing, cloud data warehouse, data visualization"
        canonical="https://ziontechgroup.com/zion-ai-data-warehouse-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Database className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 AI Data Warehouse Platform 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Data Warehouse Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your data into actionable insights with AI-powered analytics. 
            Connect 500+ data sources, process in real-time, and unlock the power of your data with enterprise-grade security.
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
              href="#demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Data Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to collect, process, and analyze your data with AI intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are using Zion AI Data Warehouse Pro to drive growth and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {useCase.description}
                </p>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your data needs. All plans include 14-day free trial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Start Free Trial
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Data Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about Zion AI Data Warehouse Pro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using Zion AI Data Warehouse Pro to transform their data into actionable insights. 
            Start your free trial today and see the power of AI-driven analytics.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
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
              href="/micro-saas"
              variant="outline"
              size="lg"
              icon={<Database className="w-5 h-5" />}
            >
              View All Micro SAAS
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIDataWarehousePro;