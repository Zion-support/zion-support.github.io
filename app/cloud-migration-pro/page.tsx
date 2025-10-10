'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Download, 
  Upload, 
  Settings, 
  Calendar,
  Clock,
  Shield,
  Smartphone,
  Globe,
  Users,
  Award,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Bot,
  Palette,
  Send,
  Eye,
  Edit,
  Trash2,
  Copy,
  Share2,
  Lock,
  Zap,
  Brain,
  FileText,
  Video,
  Image,
  Wand2,
  Calculator,
  CreditCard,
  Building,
  ChartLine,
  TrendingDown,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  Database,
  Server,
  HardDrive,
  Network,
  Wifi,
  WifiOff,
  RefreshCw,
  Play,
  Pause,
  Square,
  Monitor,
  Laptop,
  Smartphone as PhoneIcon,
  Tablet,
  Cpu,
  MemoryStick,
  HardDrive as Storage,
  Zap as Lightning,
  Target,
  BarChart3,
  PieChart,
  TrendingUp
} from 'lucide-react';

const CloudMigrationPro: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    document.title = 'Cloud Migration Pro - Enterprise Cloud Solutions | Zion Tech Group';
  }, []);

  const features = [
    {
      icon: Cloud,
      title: "Zero-Downtime Migration",
      description: "Seamless cloud migration with zero business disruption using advanced orchestration and automation",
      benefits: ["Zero downtime", "Automated orchestration", "Real-time sync", "Rollback capability"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, compliance certifications, and advanced threat protection",
      benefits: ["End-to-end encryption", "Compliance ready", "Threat protection", "Security audits"]
    },
    {
      icon: Zap,
      title: "Automated Migration Tools",
      description: "AI-powered migration tools that analyze your infrastructure and optimize for cloud performance",
      benefits: ["AI analysis", "Auto-optimization", "Performance tuning", "Cost optimization"]
    },
    {
      icon: Globe,
      title: "Multi-Cloud Support",
      description: "Support for AWS, Azure, Google Cloud, and hybrid cloud environments with unified management",
      benefits: ["Multi-cloud", "Hybrid support", "Unified management", "Vendor flexibility"]
    },
    {
      icon: Database,
      title: "Database Migration",
      description: "Specialized database migration services with data integrity and performance optimization",
      benefits: ["Data integrity", "Performance optimization", "Schema conversion", "Backup & recovery"]
    },
    {
      icon: Monitor,
      title: "24/7 Monitoring",
      description: "Continuous monitoring and support during and after migration with proactive issue resolution",
      benefits: ["24/7 monitoring", "Proactive support", "Performance tracking", "Issue resolution"]
    }
  ];

  const pricingPlans = [
    {
      name: "Small Business",
      price: "$2,500",
      period: "one-time",
      description: "Perfect for small businesses with basic cloud needs",
      features: [
        "Up to 10 servers",
        "Basic migration",
        "Email support",
        "30-day warranty",
        "Documentation",
        "Training session",
        "Basic monitoring",
        "Phone support"
      ],
      popular: false,
      cta: "Get Quote"
    },
    {
      name: "Enterprise",
      price: "$15,000",
      period: "one-time",
      description: "Ideal for medium to large enterprises",
      features: [
        "Up to 100 servers",
        "Advanced migration",
        "Priority support",
        "90-day warranty",
        "Comprehensive documentation",
        "Team training",
        "Advanced monitoring",
        "Dedicated support",
        "Performance optimization",
        "Security audit"
      ],
      popular: true,
      cta: "Get Quote"
    },
    {
      name: "Custom Solution",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for complex enterprise needs",
      features: [
        "Unlimited servers",
        "Custom migration strategy",
        "Dedicated team",
        "1-year warranty",
        "Custom documentation",
        "Executive training",
        "Enterprise monitoring",
        "24/7 dedicated support",
        "Custom integrations",
        "Compliance certification",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CTO",
      company: "TechCorp Solutions",
      content: "Cloud Migration Pro completed our migration 3 weeks ahead of schedule with zero downtime. Our performance improved by 40%.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Thompson",
      role: "IT Director",
      company: "Global Manufacturing Inc.",
      content: "The team's expertise in multi-cloud environments saved us $2M in annual costs. Highly recommend their services.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Sarah Wilson",
      role: "VP of Technology",
      company: "Financial Services Group",
      content: "Their security-first approach gave us confidence throughout the migration. We're now fully compliant and more secure.",
      rating: 5,
      avatar: "SW"
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Migrations", icon: Cloud },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "40%", label: "Average Performance Gain", icon: TrendingUp },
    { number: "4.9/5", label: "Client Rating", icon: Star }
  ];

  const migrationSteps = [
    {
      icon: Eye,
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current infrastructure and cloud readiness"
    },
    {
      icon: Settings,
      title: "Strategy Development",
      description: "Custom migration strategy tailored to your business requirements"
    },
    {
      icon: Play,
      title: "Migration Execution",
      description: "Seamless execution with real-time monitoring and support"
    },
    {
      icon: CheckCircle,
      title: "Optimization & Support",
      description: "Post-migration optimization and ongoing support"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Enterprise Cloud Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero downtime, enterprise security, and AI-powered optimization. Migrate to AWS, Azure, or Google Cloud with confidence. Starting at $2,500." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud consulting, enterprise cloud, cloud services" />
        <meta property="og:title" content="Cloud Migration Pro - Enterprise Cloud Solutions" />
        <meta property="og:description" content="Professional cloud migration services with zero downtime, enterprise security, and AI-powered optimization." />
        <meta property="og:url" content="https://ziontechgroup.com/cloud-migration-pro" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cloud Migration Pro - Enterprise Cloud Solutions" />
        <meta name="twitter:description" content="Professional cloud migration services with zero downtime, enterprise security, and AI-powered optimization." />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-migration-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-8">
                <Zap className="w-4 h-4 mr-2" />
                Enterprise Cloud Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Cloud Migration
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Professional cloud migration services with zero downtime, enterprise security, 
                and AI-powered optimization. Migrate to AWS, Azure, or Google Cloud with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-lg mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise-Grade Migration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expert team provides comprehensive cloud migration services 
                with proven methodologies and cutting-edge tools.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Proven Migration Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a systematic approach to ensure successful cloud migration 
                with minimal risk and maximum efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{index + 1}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the migration package that fits your infrastructure size and requirements. 
                All packages include our core migration services with warranty and support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-cyan-400 scale-105' : 'border-slate-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white transform hover:scale-105' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Enterprise Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how Cloud Migration Pro has helped organizations successfully 
                transition to the cloud with confidence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-cyan-400">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free assessment and discover how we can help you migrate to the cloud 
              with zero downtime and maximum efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Free assessment • No obligation • Expert consultation</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center text-gray-300">
                  <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudMigrationPro;