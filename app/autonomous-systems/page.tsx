import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bot, Cpu, Eye, Brain, Shield, Zap, Target, BarChart, Settings, CheckCircle, ArrowRight, Star, Users, Award, Globe, Database, Smartphone, Lock, TrendingUp, Calendar, FileText, Search, Code, Cloud, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: "Self-Managing Infrastructure",
      description: "Autonomous systems that monitor, maintain, and optimize themselves without human intervention.",
      benefits: ["24/7 Monitoring", "Predictive Maintenance", "Automatic Scaling", "Self-Healing"]
    },
    {
      icon: Brain,
      title: "AI-Powered Decision Making",
      description: "Intelligent systems that make real-time decisions based on data analysis and machine learning.",
      benefits: ["Real-time Analysis", "Pattern Recognition", "Adaptive Learning", "Intelligent Routing"]
    },
    {
      icon: Eye,
      title: "Advanced Monitoring",
      description: "Comprehensive monitoring systems that track performance, security, and operational metrics.",
      benefits: ["Real-time Alerts", "Performance Tracking", "Security Monitoring", "Predictive Analytics"]
    },
    {
      icon: Shield,
      title: "Autonomous Security",
      description: "Self-protecting systems that detect and respond to threats automatically.",
      benefits: ["Threat Detection", "Automatic Response", "Security Updates", "Compliance Monitoring"]
    }
  ];

  const useCases = [
    {
      title: "Autonomous Data Centers",
      description: "Self-managing data centers that optimize energy usage, cooling, and resource allocation automatically.",
      icon: Database,
      benefits: ["40% Energy Savings", "99.9% Uptime", "Automatic Scaling", "Predictive Maintenance"]
    },
    {
      title: "Smart Manufacturing",
      description: "Autonomous production lines that adjust operations based on demand, quality metrics, and resource availability.",
      icon: Settings,
      benefits: ["30% Efficiency Gain", "Quality Optimization", "Reduced Downtime", "Cost Reduction"]
    },
    {
      title: "Autonomous Cloud Management",
      description: "Self-optimizing cloud infrastructure that automatically scales, balances loads, and manages resources.",
      icon: Cloud,
      benefits: ["Dynamic Scaling", "Cost Optimization", "Performance Tuning", "Resource Management"]
    },
    {
      title: "Intelligent Network Management",
      description: "Self-configuring networks that adapt to traffic patterns and optimize performance automatically.",
      icon: Globe,
      benefits: ["Traffic Optimization", "Bandwidth Management", "Security Updates", "Performance Tuning"]
    }
  ];

  const technologies = [
    {
      name: "Machine Learning",
      description: "Advanced ML algorithms for pattern recognition and decision making",
      applications: ["Predictive Analytics", "Anomaly Detection", "Optimization", "Learning Systems"]
    },
    {
      name: "IoT Integration",
      description: "Seamless integration with IoT devices and sensors for real-time data",
      applications: ["Sensor Networks", "Device Management", "Data Collection", "Remote Monitoring"]
    },
    {
      name: "Edge Computing",
      description: "Processing at the edge for faster response times and reduced latency",
      applications: ["Real-time Processing", "Local Decision Making", "Bandwidth Optimization", "Offline Capability"]
    },
    {
      name: "Blockchain",
      description: "Decentralized systems for secure and transparent autonomous operations",
      applications: ["Secure Transactions", "Decentralized Control", "Audit Trails", "Trust Networks"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Autonomous systems operate 24/7 without breaks, maximizing productivity and efficiency.",
      metric: "300%"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Continuous monitoring and automatic threat response ensure maximum security.",
      metric: "99.9%"
    },
    {
      icon: Target,
      title: "Reduced Costs",
      description: "Automated operations reduce labor costs and minimize human error.",
      metric: "50%"
    },
    {
      icon: Zap,
      title: "Faster Response",
      description: "Instant response to issues and opportunities without human intervention.",
      metric: "10x"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Revolutionary autonomous systems that manage, monitor, and optimize themselves. Self-managing infrastructure for the future." />
        <meta name="keywords" content="autonomous systems, self-managing, AI automation, intelligent systems, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Autonomous</span> Systems
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionary self-managing systems that monitor, maintain, and optimize themselves without human intervention. The future of intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/consultation"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced autonomous capabilities that transform how systems operate and maintain themselves.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how autonomous systems are transforming industries and operations across the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <useCase.icon className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-cyan-400">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering our autonomous systems for maximum performance and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.applications.map((app, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Autonomous Systems</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your operations with self-managing systems that deliver measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group text-center">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <benefit.icon className="w-12 h-12 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Go <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Autonomous</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your infrastructure with self-managing systems that work around the clock to optimize performance and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MailIcon className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousSystemsPage;