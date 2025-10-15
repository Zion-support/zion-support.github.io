import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  Award,
  Clock,
  Zap,
  Users,
  BarChart3,
  Target,
  Shield,
  Database,
  Server
} from 'lucide-react';

const AiCloudMigrationProPage: React.FC = () => {
  const features = [
    "AI-Powered Migration Planning",
    "Zero-Downtime Migration",
    "Cost Optimization Analysis",
    "Security Assessment",
    "Performance Monitoring",
    "Data Synchronization",
    "Application Compatibility Check",
    "Disaster Recovery Setup",
    "Compliance Validation",
    "24/7 Migration Support"
  ];

  const migrationPhases = [
    {
      name: "Assessment & Planning",
      description: "Comprehensive analysis of your current infrastructure and migration requirements",
      icon: <Target className="w-8 h-8" />,
      duration: "1-2 weeks",
      deliverables: ["Infrastructure Audit", "Migration Strategy", "Risk Assessment", "Cost Analysis"]
    },
    {
      name: "Pre-Migration Setup",
      description: "Preparation of cloud environment and security configurations",
      icon: <Shield className="w-8 h-8" />,
      duration: "2-3 weeks",
      deliverables: ["Cloud Environment Setup", "Security Configuration", "Network Setup", "Backup Strategy"]
    },
    {
      name: "Data Migration",
      description: "Secure and efficient transfer of data to cloud infrastructure",
      icon: <Database className="w-8 h-8" />,
      duration: "1-4 weeks",
      deliverables: ["Data Transfer", "Data Validation", "Integrity Checks", "Performance Testing"]
    },
    {
      name: "Application Migration",
      description: "Migration of applications and services to cloud platform",
      icon: <Server className="w-8 h-8" />,
      duration: "2-6 weeks",
      deliverables: ["App Migration", "Configuration Updates", "Integration Testing", "Performance Optimization"]
    },
    {
      name: "Testing & Validation",
      description: "Comprehensive testing and validation of migrated systems",
      icon: <CheckCircle className="w-8 h-8" />,
      duration: "1-2 weeks",
      deliverables: ["System Testing", "Performance Validation", "Security Testing", "User Acceptance Testing"]
    },
    {
      name: "Go-Live & Support",
      description: "Production deployment and ongoing support and monitoring",
      icon: <Zap className="w-8 h-8" />,
      duration: "Ongoing",
      deliverables: ["Production Cutover", "Monitoring Setup", "Training", "Ongoing Support"]
    }
  ];

  const pricingTiers = [
    {
      name: "Small Business",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses (1-50 users)",
      features: [
        "Basic Migration Planning",
        "Data Migration (up to 1TB)",
        "Email Support",
        "30-day Support"
      ]
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "one-time",
      description: "Ideal for mid-size organizations (51-500 users)",
      features: [
        "Advanced Migration Planning",
        "Data Migration (up to 10TB)",
        "Priority Support",
        "90-day Support",
        "Performance Optimization"
      ]
    },
    {
      name: "Large Enterprise",
      price: "Custom",
      period: "quote",
      description: "For large organizations (500+ users)",
      features: [
        "Custom Migration Strategy",
        "Unlimited Data Migration",
        "Dedicated Support Team",
        "1-year Support",
        "Custom Integrations"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CTO",
      company: "TechCorp Solutions",
      content: "AI Cloud Migration Pro reduced our migration time by 60% and eliminated downtime completely. The AI planning was incredibly accurate.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "IT Director",
      company: "Global Manufacturing Inc",
      content: "The cost optimization analysis saved us $50K annually. The migration was seamless and our performance improved significantly.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "VP of Technology",
      company: "Financial Services Group",
      content: "The security assessment and compliance validation gave us confidence in our cloud migration. Everything was handled professionally.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cloud Migration Pro - Intelligent Cloud Migration Services | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cloud migration services with zero-downtime migration, cost optimization, and comprehensive support. Starting at $2,999." />
        <meta name="keywords" content="AI cloud migration, cloud migration services, AWS migration, Azure migration, Google Cloud migration, cloud consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Cloud className="w-4 h-4 mr-2" />
                AI-Powered Cloud Migration
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI Cloud Migration Pro
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Seamlessly migrate your infrastructure to the cloud with AI-powered 
                planning, zero-downtime migration, and intelligent optimization.
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
                  Get Migration Quote
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
                  <div className="text-gray-400 text-sm">Faster Migration</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                  <div className="text-gray-400 text-sm">Downtime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                  <div className="text-gray-400 text-sm">Successful Migrations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">$2M+</div>
                  <div className="text-gray-400 text-sm">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Migration Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI algorithms analyze your infrastructure and create 
                optimized migration plans for seamless cloud transitions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Phases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Migration Process
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven 6-phase migration process ensures a smooth, 
                secure, and efficient transition to the cloud.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationPhases.map((phase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{phase.icon}</div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {phase.name}
                    </h3>
                    <span className="text-cyan-400 text-sm font-medium">{phase.duration}</span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Migration Packages
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect migration package for your organization size. 
                All packages include comprehensive support and monitoring.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  tier.name === 'Enterprise' 
                    ? 'border-cyan-400/40 shadow-2xl shadow-cyan-500/10 scale-105' 
                    : 'border-cyan-500/20'
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.name === 'Enterprise'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {tier.name === 'Large Enterprise' ? 'Get Custom Quote' : 'Choose Package'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Client Success Stories
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of organizations who trust AI Cloud Migration Pro 
                for seamless, secure, and cost-effective cloud transitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Get Migration Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCloudMigrationProPage;