import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Users, 
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  DollarSign,
  Target,
  TrendingUp,
  Smartphone,
  Monitor,
  Globe,
  Phone,
  Mail,
  Settings,
  FileText,
  Share2,
  Database,
  Shield,
  Server,
  Lock
} from 'lucide-react';

const AiCloudMigrationProPage: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "AI-Powered Migration Planning",
      description: "Intelligent assessment and migration strategy using AI to optimize cloud architecture and costs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Zero-Downtime Migration",
      description: "Seamless migration with minimal business disruption using advanced migration techniques"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security-First Approach",
      description: "Comprehensive security assessment and implementation during the migration process"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "AI-driven cost analysis and optimization to reduce cloud expenses by up to 40%"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Multi-Cloud Strategy",
      description: "Support for AWS, Azure, Google Cloud, and hybrid cloud environments"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Monitoring",
      description: "Continuous monitoring and optimization of cloud performance and costs"
    }
  ];

  const cloudProviders = [
    { name: "AWS", icon: <Cloud className="w-5 h-5" />, color: "text-orange-500" },
    { name: "Azure", icon: <Cloud className="w-5 h-5" />, color: "text-blue-500" },
    { name: "Google Cloud", icon: <Cloud className="w-5 h-5" />, color: "text-green-500" },
    { name: "IBM Cloud", icon: <Cloud className="w-5 h-5" />, color: "text-cyan-500" },
    { name: "Oracle Cloud", icon: <Cloud className="w-5 h-5" />, color: "text-red-500" },
    { name: "Hybrid Cloud", icon: <Server className="w-5 h-5" />, color: "text-purple-500" }
  ];

  const pricingPlans = [
    {
      name: "Assessment",
      price: "$2,999",
      period: "one-time",
      description: "Comprehensive cloud readiness assessment",
      features: [
        "Infrastructure analysis",
        "Security assessment",
        "Cost analysis",
        "Migration roadmap",
        "Risk assessment",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Migration",
      price: "$9,999",
      period: "per project",
      description: "Complete cloud migration service",
      features: [
        "Full migration planning",
        "Zero-downtime migration",
        "Security implementation",
        "Performance optimization",
        "Training & documentation",
        "Priority support",
        "3 months monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Large-scale enterprise migration",
      features: [
        "Custom migration strategy",
        "Dedicated migration team",
        "White-label options",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited monitoring"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "500+", label: "Migrations Completed", icon: <Cloud className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Savings", icon: <DollarSign className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime During Migration", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cloud Migration Pro - Zion Tech Group | Intelligent Cloud Migration</title>
        <meta name="description" content="Revolutionary AI-powered cloud migration services. Seamlessly migrate your infrastructure with zero downtime, cost optimization, and advanced security." />
        <meta name="keywords" content="AI cloud migration, cloud migration services, AWS migration, Azure migration, Google Cloud migration, cloud optimization" />
        <meta property="og:title" content="AI Cloud Migration Pro - Zion Tech Group" />
        <meta property="og:description" content="Transform your infrastructure with AI-powered cloud migration." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-6xl mx-auto">
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Cloud className="w-4 h-4 mr-2" />
                  AI-Powered Cloud Migration
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Cloud Migration
                  </span>
                  <br />
                  <span className="text-white">Pro</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your infrastructure with AI-powered cloud migration. Seamlessly migrate 
                  to any cloud platform with zero downtime, cost optimization, and enhanced security.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Assessment
                  </a>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-cyan-400">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Migration Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Advanced AI capabilities that ensure successful cloud migration
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cloud Providers */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Supported Cloud Providers</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Migrate to any major cloud platform with our expertise
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {cloudProviders.map((provider, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className={`w-12 h-12 mx-auto mb-4 ${provider.color} group-hover:scale-110 transition-transform duration-300`}>
                      {provider.icon}
                    </div>
                    <h3 className="text-white font-semibold">{provider.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the perfect migration service for your needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-2xl shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Migrate to the Cloud?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of businesses already using our AI-powered cloud migration services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Migration
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Get Free Assessment
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AiCloudMigrationProPage;