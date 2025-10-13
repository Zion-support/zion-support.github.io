import React from 'react';
import { ArrowRight, CheckCircle, Star, Shield, Server, Cloud, Database, Code, Network, Smartphone, Monitor, Headphones, Clock, DollarSign, Globe, Lock, Settings, Zap, BarChart3, Users, Award, Target, TrendingUp, Cpu, HardDrive, Wifi, Bluetooth, Usb, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Calendar, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function CloudServices() {
  const cloudServices = [
    {
      id: "aws-migration",
      name: "AWS Migration & Optimization",
      description: "Complete migration to Amazon Web Services with cost optimization and performance tuning",
      price: "From $3,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      features: [
        "AWS infrastructure setup",
        "Data migration services",
        "Cost optimization",
        "Security configuration",
        "Auto-scaling setup",
        "Monitoring & alerting",
        "Backup & disaster recovery",
        "Performance optimization"
      ],
      benefits: [
        "Reduce cloud costs by 35%",
        "Improve performance by 50%",
        "Enhance security posture",
        "Increase scalability"
      ],
      category: "Cloud Migration",
      rating: 4.9,
      reviews: 892,
      link: "/aws-migration",
      featured: true
    },
    {
      id: "azure-solutions",
      name: "Microsoft Azure Solutions",
      description: "Comprehensive Azure cloud services including hybrid cloud and AI integration",
      price: "From $2,800/month",
      icon: <Server className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Azure infrastructure design",
        "Hybrid cloud setup",
        "AI & ML integration",
        "DevOps implementation",
        "Security & compliance",
        "Cost management",
        "Monitoring & analytics",
        "Support & maintenance"
      ],
      benefits: [
        "Seamless hybrid integration",
        "Advanced AI capabilities",
        "Enterprise-grade security",
        "Cost-effective scaling"
      ],
      category: "Cloud Solutions",
      rating: 4.8,
      reviews: 654,
      link: "/azure-solutions"
    },
    {
      id: "google-cloud",
      name: "Google Cloud Platform",
      description: "Leverage Google's cloud infrastructure for data analytics and machine learning",
      price: "From $2,200/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      features: [
        "GCP infrastructure setup",
        "BigQuery implementation",
        "Machine learning services",
        "Kubernetes orchestration",
        "Data analytics platform",
        "Security & IAM",
        "Cost optimization",
        "24/7 support"
      ],
      benefits: [
        "Advanced data analytics",
        "ML/AI capabilities",
        "Global infrastructure",
        "Cost-effective solutions"
      ],
      category: "Data & Analytics",
      rating: 4.7,
      reviews: 543,
      link: "/google-cloud"
    }
  ];

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale your infrastructure up or down based on demand"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade security with advanced threat protection"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliability",
      description: "99.9% uptime guarantee with redundant systems"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized performance with global content delivery"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Analyze your current infrastructure and identify migration opportunities",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Planning",
      description: "Create a detailed migration plan with timelines and resource allocation",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Migration",
      description: "Execute the migration with minimal downtime and data loss",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Optimization",
      description: "Fine-tune performance and costs for optimal cloud operations",
      icon: <Settings className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group | AWS, Azure, GCP Solutions</title>
        <meta name="description" content="Professional cloud services including AWS migration, Azure solutions, and Google Cloud Platform. Expert cloud infrastructure management and optimization." />
        <meta name="keywords" content="cloud services, AWS migration, Azure solutions, Google Cloud, cloud infrastructure, cloud optimization, cloud security" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-services" />
      </Helmet>
      
      <SEOOptimizer
        title="Cloud Services - Zion Tech Group | AWS, Azure, GCP Solutions"
        description="Professional cloud services including AWS migration, Azure solutions, and Google Cloud Platform. Expert cloud infrastructure management and optimization."
        keywords="cloud services, AWS migration, Azure solutions, Google Cloud, cloud infrastructure, cloud optimization, cloud security"
        canonical="https://ziontechgroup.com/cloud-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Cloud Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Cloud Services
            </span>
            <br />
            <span className="text-white">That Scale With You</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive cloud solutions. From AWS and Azure to Google Cloud, we help you migrate, optimize, and manage your cloud infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold"
            >
              Get Cloud Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-semibold"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide end-to-end cloud solutions that deliver performance, security, and cost optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 rounded-2xl bg-slate-800/50 mb-6 group-hover:bg-slate-700/50 transition-colors">
                  <div className="text-cyan-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of cloud solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300 ml-1">{service.rating}</span>
                      <span className="text-gray-500 ml-1">({service.reviews})</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 font-semibold group-hover:from-cyan-500 group-hover:to-purple-500"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful cloud migration and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30 hidden lg:block"></div>
                </div>
                
                <div className="inline-flex p-3 rounded-xl bg-slate-700/50 mb-4 group-hover:bg-slate-600/50 transition-colors">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-2xl p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud experts help you migrate, optimize, and manage your cloud infrastructure for maximum performance and cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold"
              >
                Start Your Cloud Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-semibold"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
