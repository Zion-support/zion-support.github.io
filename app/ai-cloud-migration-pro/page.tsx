import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  ArrowRight, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star,
  Clock,
  Target,
  Shield,
  Database,
  Server,
  Network,
  FileText,
  Users
} from 'lucide-react';

const AiCloudMigrationProPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Migration Planning",
      description: "Intelligent migration strategy with automated assessment and optimization recommendations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero-Downtime Migration",
      description: "Seamless migration with minimal disruption to your business operations"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "AI-powered cost analysis and optimization to reduce cloud expenses by up to 40%"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Multi-Cloud Strategy",
      description: "Comprehensive multi-cloud and hybrid cloud solutions for maximum flexibility"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Migration",
      description: "Secure and efficient data migration with integrity verification and rollback capabilities"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Network Optimization",
      description: "Advanced network architecture design and optimization for cloud environments"
    }
  ];

  const pricingPlans = [
    {
      name: "Assessment",
      price: "$2,999",
      period: "one-time",
      description: "Comprehensive cloud readiness assessment",
      features: [
        "Infrastructure Analysis",
        "Migration Strategy",
        "Cost Estimation",
        "Risk Assessment",
        "Timeline Planning",
        "Executive Report"
      ],
      popular: false
    },
    {
      name: "Standard Migration",
      price: "$9,999",
      period: "per project",
      description: "Complete migration for small to medium businesses",
      features: [
        "Full Migration Planning",
        "Data Migration",
        "Application Migration",
        "Testing & Validation",
        "30 Days Support",
        "Documentation"
      ],
      popular: true
    },
    {
      name: "Enterprise Migration",
      price: "$49,999",
      period: "per project",
      description: "Complex enterprise migration with ongoing support",
      features: [
        "Custom Migration Strategy",
        "Multi-Cloud Setup",
        "Security Implementation",
        "Performance Optimization",
        "90 Days Support",
        "Training & Documentation",
        "Dedicated Team"
      ],
      popular: false
    }
  ];

  const migrationTypes = [
    {
      title: "Lift & Shift",
      description: "Quick migration of existing applications to cloud with minimal changes",
      icon: <ArrowRight className="w-8 h-8" />
    },
    {
      title: "Replatforming",
      description: "Optimize applications for cloud-native features and performance",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Refactoring",
      description: "Complete application redesign for cloud-native architecture",
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "Hybrid Cloud",
      description: "Seamless integration between on-premises and cloud environments",
      icon: <Network className="w-8 h-8" />
    }
  ];

  const cloudProviders = [
    { name: "AWS", icon: <Cloud className="w-6 h-6" />, color: "text-orange-600" },
    { name: "Azure", icon: <Cloud className="w-6 h-6" />, color: "text-blue-600" },
    { name: "Google Cloud", icon: <Cloud className="w-6 h-6" />, color: "text-green-600" },
    { name: "IBM Cloud", icon: <Cloud className="w-6 h-6" />, color: "text-purple-600" },
    { name: "Oracle Cloud", icon: <Cloud className="w-6 h-6" />, color: "text-red-600" },
    { name: "Alibaba Cloud", icon: <Cloud className="w-6 h-6" />, color: "text-cyan-600" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cloud Migration Pro - Zion Tech Group | Intelligent Cloud Migration</title>
        <meta name="description" content="Revolutionary AI-powered cloud migration services. Seamless migration to AWS, Azure, Google Cloud with zero downtime. Reduce costs by 40% with intelligent cloud optimization." />
        <meta name="keywords" content="AI cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud optimization, multi-cloud strategy" />
        <meta property="og:title" content="AI Cloud Migration Pro - Zion Tech Group" />
        <meta property="og:description" content="Transform your infrastructure with AI-powered cloud migration and optimization." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cloud-migration-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                #1 AI Cloud Migration Platform
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Cloud Migration
                </span>
                <br />
                <span className="text-white">Pro</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your infrastructure with AI-powered cloud migration services. Seamless migration 
                to AWS, Azure, Google Cloud with zero downtime and intelligent cost optimization. 
                Reduce cloud costs by up to 40%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Assessment
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Cloud className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-400 text-sm">Successful Migrations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-gray-400 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Migration Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for a successful cloud migration with AI-powered intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Migration Strategies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the right migration approach for your specific needs and requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationTypes.map((migration, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{migration.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{migration.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{migration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Supported Cloud Providers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We support all major cloud platforms and can help you choose the best one for your needs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className={`w-12 h-12 mx-auto mb-3 ${provider.color} group-hover:scale-110 transition-transform duration-300`}>
                    {provider.icon}
                  </div>
                  <h3 className="text-white font-semibold">{provider.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the migration package that best fits your organization's needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/10' 
                    : 'border-cyan-500/20'
                } hover:border-cyan-400/40 transition-all duration-300 group`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? 'Start Migration' : 'Get Started'}
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of businesses already using our AI-powered migration services. 
                Start your free assessment today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Assessment
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Cloud className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCloudMigrationProPage;