import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, Zap, Brain, Shield, Globe, Star, Users, Award, CheckCircle, TrendingUp, Clock, Settings, Target, Workflow } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIAutomationPlatform = () => {
  const features = [
    {
      title: "Workflow Automation",
      description: "Automate complex business processes with AI-powered workflows",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Decision Making",
      description: "AI-driven decision making for automated business processes",
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Process Optimization",
      description: "Continuously optimize processes using machine learning",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Integration Hub",
      description: "Connect and automate across all your business systems",
      icon: <Settings className="w-6 h-6" />,
=======
import { ArrowRight, Brain, Zap, Shield, BarChart3, Users, Clock, CheckCircle, Star, Sparkles, Monitor, Mic, Mail, Smartphone, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIAutomationPlatformPage = () => {
  const features = [
    {
      title: "Intelligent Workflow Design",
      description: "Drag-and-drop interface for creating complex automation workflows with AI-powered suggestions",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Process Optimization",
      description: "AI analyzes your processes and suggests improvements for maximum efficiency",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Monitoring",
      description: "Track automation performance with advanced analytics and reporting",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with role-based access control and audit trails",
      icon: <Shield className="w-8 h-8" />,
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
<<<<<<< HEAD
    "70% process efficiency gain",
    "Automated decision making",
    "Seamless integrations",
    "Real-time optimization",
    "Scalable workflows",
    "Cost reduction"
=======
    "Reduce manual work by up to 80%",
    "Increase process accuracy to 99.9%",
    "Deploy automations in minutes, not months",
    "Scale across your entire organization",
    "Integrate with 500+ business applications",
    "24/7 monitoring and support"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 10 automations",
        "5 users included",
        "Basic integrations",
        "Email support",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited automations",
        "25 users included",
        "Advanced integrations",
        "Priority support",
        "Custom templates",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Unlimited users",
        "Custom integrations",
        "Dedicated support",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false
    }
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
<<<<<<< HEAD
        title="AI Automation Platform - Intelligent Process Automation | Zion Tech Group"
        description="Transform your business with AI-powered automation. Workflow automation, smart decision making, and process optimization for modern enterprises."
        keywords="AI automation, workflow automation, process optimization, business automation, intelligent automation, RPA"
=======
        title="AI Automation Platform - Zion Tech Group | Workflow Automation Solutions"
        description="Transform your business with our AI-powered automation platform. Create intelligent workflows, optimize processes, and scale operations with enterprise-grade security."
        keywords="AI automation, workflow automation, business process automation, AI platform, enterprise automation, process optimization"
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
        canonical="https://ziontechgroup.com/ai-automation-platform"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
<<<<<<< HEAD
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Intelligent Automation</span>
=======
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Automation</span>
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Automation Platform
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
<<<<<<< HEAD
            Transform your business with AI-powered automation. 
            Automate workflows, optimize processes, and make intelligent decisions at scale.
=======
            Transform your business operations with intelligent automation. Our AI-powered platform 
            creates, optimizes, and manages workflows that scale with your organization.
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
<<<<<<< HEAD
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
=======
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
<<<<<<< HEAD
              icon={<Zap className="w-5 h-5" />}
            >
              View Demo
=======
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
<<<<<<< HEAD
              Advanced Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to automate and optimize your business processes.
=======
              Powerful Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to automate, optimize, and scale your business processes with AI intelligence.
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
<<<<<<< HEAD
              <FuturisticCard
=======
              <div
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
<<<<<<< HEAD
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
=======
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
<<<<<<< HEAD
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Automation Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience intelligent automation that transforms your business operations.
=======
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Automation Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses already using our platform to streamline operations and drive growth.
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading companies using AI Automation Platform to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5" />}
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
=======
              <div
                key={index}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core automation features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our AI automation platform to streamline operations and drive growth. 
            Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
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
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default AIAutomationPlatform;
=======
export default AIAutomationPlatformPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
