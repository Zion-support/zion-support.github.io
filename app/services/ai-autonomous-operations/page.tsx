import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
  Target,
  Clock,
  DollarSign,
  BarChart3,
  Settings,
  Activity,
} from 'lucide-react';

export default function AIAutonomousOperationsPage() {
  const features = [
    {
      icon: Brain,
      title: "Self-Healing Infrastructure",
      description: "Automatically detects and resolves issues before they impact your business operations.",
      benefits: ["99.9% uptime guarantee", "Instant problem resolution", "Zero manual intervention"]
    },
    {
      icon: Zap,
      title: "Self-Optimizing Performance",
      description: "Continuously monitors and optimizes system performance for maximum efficiency.",
      benefits: ["75% cost reduction", "60% performance improvement", "Real-time optimization"]
    },
    {
      icon: TrendingUp,
      title: "Self-Scaling Resources",
      description: "Intelligently scales resources based on demand patterns and business needs.",
      benefits: ["Automatic scaling", "Predictive capacity planning", "Cost-effective resource usage"]
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "AI-powered security monitoring and threat detection with automatic response.",
      benefits: ["Real-time threat detection", "Automated security patches", "Compliance monitoring"]
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Companies Using AI Ops" },
    { icon: Award, value: "99.9%", label: "Uptime SLA" },
    { icon: DollarSign, value: "75%", label: "Cost Reduction" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
  ];

  const useCases = [
    {
      title: "E-commerce Platform",
      description: "Automatically handled Black Friday traffic spikes with zero downtime",
      result: "300% traffic increase handled seamlessly"
    },
    {
      title: "Financial Services",
      description: "Prevented security breaches and ensured compliance automatically",
      result: "100% compliance rate achieved"
    },
    {
      title: "Manufacturing",
      description: "Optimized production line efficiency with predictive maintenance",
      result: "40% reduction in downtime"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Operations - Zion Tech Group | Self-Managing Infrastructure</title>
        <meta
          name="description"
          content="Revolutionary AI Autonomous Operations that manages your entire infrastructure autonomously. Self-healing, self-optimizing, self-scaling with 99.9% uptime guarantee."
        />
        <meta
          name="keywords"
          content="AI autonomous operations, self-healing infrastructure, AI ops, infrastructure automation, self-managing systems"
        />
        <meta property="og:title" content="AI Autonomous Operations - Zion Tech Group" />
        <meta
          property="og:description"
          content="Revolutionary AI that manages your entire infrastructure autonomously - Self-healing, self-optimizing, self-scaling!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services/ai-autonomous-operations" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Autonomous Operations - Zion Tech Group" />
        <meta
          name="twitter:description"
          content="Revolutionary AI that manages your entire infrastructure autonomously"
        />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-autonomous-operations" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-orange-900">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-500/20 text-red-400 text-sm font-medium mb-8 border border-red-500/30">
              <Brain className="w-4 h-4 mr-2 animate-pulse" />
              Revolutionary AI Technology - 2025
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                AI Autonomous Operations
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              🚀 Revolutionary AI that manages your entire infrastructure autonomously - 
              Self-healing, self-optimizing, self-scaling! Experience the future of infrastructure management.
            </p>

            {/* Special Offer Banner */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Star className="w-6 h-6 text-green-400 animate-pulse" />
                <span className="text-lg font-bold text-green-400">🎯 LIMITED TIME OFFER</span>
                <Star className="w-6 h-6 text-green-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                50% OFF Your First 3 Months + FREE AI Strategy Consultation
              </p>
              <p className="text-red-100 text-sm mb-4">
                Valid until March 31, 2025 • Transform your infrastructure today
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-green-400 text-green-400 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-red-400 group-hover:text-orange-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-red-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How AI Autonomous Operations Works
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Our revolutionary AI system continuously monitors, learns, and optimizes your infrastructure without human intervention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="bg-red-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-red-500/30">
                  <feature.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-red-100 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-red-100">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-red-900/50 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Real-World Success Stories
              </h2>
              <p className="text-xl text-red-100 max-w-2xl mx-auto">
                See how companies are transforming their operations with AI Autonomous Operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-red-100 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="text-red-400 font-bold text-lg">{useCase.result}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Autonomous Operations?
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Experience unprecedented levels of reliability, efficiency, and cost savings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
                <Clock className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Monitoring</h3>
              <p className="text-red-100">
                Continuous monitoring and optimization with zero downtime. Your infrastructure never sleeps.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
                <DollarSign className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cost Optimization</h3>
              <p className="text-red-100">
                Reduce operational costs by up to 75% through intelligent resource management and optimization.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
                <BarChart3 className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Gains</h3>
              <p className="text-red-100">
                Achieve up to 60% performance improvement through continuous optimization and predictive scaling.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Join 500+ companies already using AI Autonomous Operations to revolutionize their infrastructure management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                <Settings className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Activity className="w-5 h-5" />
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}