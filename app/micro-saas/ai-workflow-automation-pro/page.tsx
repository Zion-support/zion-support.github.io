'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Workflow, 
  Zap, 
  Bot, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Brain,
  Target,
  Settings,
  BarChart,
  Users,
  Shield,
  Globe,
  FileText,
  Cpu,
  Heart,
  DollarSign,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AiWorkflowAutomationProPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: <Workflow className="w-6 h-6 text-cyan-400" />,
      title: "Visual Workflow Builder",
      description: "Drag-and-drop interface to create complex automation workflows without coding. Intuitive design makes it easy for anyone to build powerful automations."
    },
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Decision Making",
      description: "Smart automation that learns from your data and makes intelligent decisions based on context, patterns, and business rules."
    },
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      title: "Multi-Platform Integration",
      description: "Connect with 500+ apps and services including CRM, email, social media, project management, and custom APIs."
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "Real-Time Processing",
      description: "Process workflows instantly with our high-performance engine. Handle thousands of automations simultaneously without delays."
    },
    {
      icon: <BarChart className="w-6 h-6 text-cyan-400" />,
      title: "Analytics & Monitoring",
      description: "Track automation performance, identify bottlenecks, and optimize workflows with detailed analytics and reporting."
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, audit logs, role-based access control, and compliance with industry standards."
    }
  ];

  const automationTypes = [
    {
      title: "Marketing Automation",
      description: "Automate email campaigns, lead nurturing, social media posting, and customer journey management.",
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      examples: ["Email sequences", "Lead scoring", "Social media scheduling", "Campaign optimization"]
    },
    {
      title: "Sales Process Automation",
      description: "Streamline sales workflows, automate follow-ups, and optimize the entire sales pipeline.",
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      examples: ["Lead qualification", "Proposal generation", "Follow-up sequences", "Deal tracking"]
    },
    {
      title: "Customer Support Automation",
      description: "Automate ticket routing, response generation, and customer service workflows for better efficiency.",
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
      examples: ["Ticket classification", "Auto-responses", "Escalation rules", "Satisfaction surveys"]
    },
    {
      title: "HR & Operations",
      description: "Automate recruitment, onboarding, employee management, and operational processes.",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      examples: ["Resume screening", "Onboarding workflows", "Performance reviews", "Expense management"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 1,000 automations/month",
        "10 integrations",
        "Basic workflow builder",
        "Email support",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 automations/month",
        "50 integrations",
        "Advanced AI features",
        "Priority support",
        "Custom workflows",
        "Analytics dashboard",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited automations",
        "Unlimited integrations",
        "Full AI capabilities",
        "Dedicated support",
        "Custom development",
        "Advanced security",
        "White-label options"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Save 40+ Hours Per Week",
      description: "Automate repetitive tasks and focus on high-value activities that drive growth.",
      icon: <Clock className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Reduce Errors by 95%",
      description: "Eliminate human errors with consistent, reliable automation processes.",
      icon: <Shield className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Scale Without Limits",
      description: "Handle increasing workloads without proportional increases in team size.",
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "ROI in 30 Days",
      description: "Most customers see positive ROI within the first month of implementation.",
      icon: <DollarSign className="w-6 h-6 text-cyan-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Workflow Automation Pro - Advanced Business Process Automation | Zion Tech Group</title>
        <meta name="description" content="Automate complex business processes with AI-powered workflow automation. Visual builder, 500+ integrations, and intelligent decision making for maximum efficiency." />
        <meta name="keywords" content="workflow automation, business process automation, AI automation, workflow builder, process optimization, business efficiency" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-workflow-automation-pro" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Workflow className="w-4 h-4 mr-2" />
              Advanced Workflow Automation
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Workflow
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Automation Pro</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with intelligent workflow automation. Create, deploy, and manage complex 
              business processes with our AI-powered platform that learns and adapts to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Automation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Build sophisticated workflows with our comprehensive automation platform designed for modern businesses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Types Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Automate Any Business Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From marketing to operations, our platform can automate virtually any business process.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {automationTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    {type.icon}
                    <h3 className="text-2xl font-semibold text-white ml-4">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {type.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {type.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose AI Workflow Automation Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their operations with intelligent automation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your automation needs. Scale up or down as your business grows.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                      : 'border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-gray-600 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how AI Workflow Automation Pro can transform your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiWorkflowAutomationProPage;