import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Zap, 
  CheckCircle, 
  Globe, 
  Brain,
  ArrowRight,
  Star,
  Clock,
  Target,
  Smartphone,
  Monitor,
  Server,
  Users,
  Award,
  RefreshCw,
  ArrowUpDown,
  Link as LinkIcon
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionDataSync = () => {
  const features = [
    {
      title: "Real-time Data Sync",
      description: "Synchronize data across all your systems in real-time with our advanced sync engine.",
      icon: <RefreshCw className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI-Powered Mapping",
      description: "Intelligent data mapping and transformation using machine learning algorithms.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-Platform Support",
      description: "Connect and sync data between 200+ platforms including CRM, ERP, and databases.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Conflict Resolution",
      description: "Automated conflict resolution with intelligent merge strategies and data validation.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const integrations = [
    {
      title: "CRM Systems",
      description: "Salesforce, HubSpot, Pipedrive",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Databases",
      description: "MySQL, PostgreSQL, MongoDB",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Cloud Storage",
      description: "AWS, Google Cloud, Azure",
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "E-commerce",
      description: "Shopify, WooCommerce, Magento",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Marketing Tools",
      description: "Mailchimp, Marketo, Pardot",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Analytics",
      description: "Google Analytics, Mixpanel",
      icon: <Monitor className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "5 data sources",
        "Basic sync rules",
        "Email support",
        "1GB data transfer",
        "Standard connectors",
        "Basic monitoring"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "25 data sources",
        "Advanced sync rules",
        "Priority support",
        "10GB data transfer",
        "Premium connectors",
        "Advanced monitoring",
        "API access",
        "Custom mappings"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Custom sync rules",
        "24/7 phone support",
        "Unlimited data transfer",
        "All connectors",
        "Real-time monitoring",
        "White-label solution",
        "Dedicated support"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "200+", label: "Platform Integrations", icon: <Globe className="w-6 h-6" /> },
    { number: "99.9%", label: "Sync Success Rate", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "Real-time", label: "Data Synchronization", icon: <RefreshCw className="w-6 h-6" /> },
    { number: "10K+", label: "Active Sync Jobs", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion Data Sync - Real-time Data Synchronization Platform | Zion Tech Group"
        description="Sync your data across all platforms with Zion Data Sync. Real-time synchronization, AI-powered mapping, and seamless integration for modern businesses."
        keywords="data sync, data integration, real-time sync, data mapping, platform integration, Zion Data Sync"
        canonical="https://ziontechgroup.com/zion-data-sync"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
            <RefreshCw className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">#1 Data Sync Platform 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400">
              Zion Data Sync
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Synchronize your data across all platforms in real-time. 
            AI-powered mapping, seamless integration, and automated conflict resolution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<RefreshCw className="w-5 h-5" />}
            >
              Start Syncing
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
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              Sync Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powerful data synchronization capabilities for modern businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect and sync data between 200+ popular platforms and services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {integration.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                    {integration.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {integration.description}
                </p>
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
              Sync Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the sync plan that fits your data needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10`}
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
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Sync Your Data Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses using Zion Data Sync to keep their data synchronized. 
            Start your free trial and experience seamless data integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<RefreshCw className="w-5 h-5" />}
            >
              Start Syncing
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
      </section>
    </div>
  );
};

export default ZionDataSync;