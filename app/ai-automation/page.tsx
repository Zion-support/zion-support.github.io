'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bot, Zap, Workflow, Target, Clock, Shield, ArrowRight, CheckCircle, Star, Cpu } from 'lucide-react';

export default function AIAutomationPage() {
  const automationTypes = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows with intelligent bots that learn and adapt.",
      features: ["RPA Integration", "Workflow Optimization", "Error Reduction", "Cost Savings"]
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Business Process Management",
      description: "Streamline complex business processes with AI-powered orchestration and monitoring.",
      features: ["Process Mapping", "Performance Analytics", "Compliance Tracking", "Real-time Monitoring"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customer Service Automation",
      description: "Deploy intelligent chatbots and virtual assistants for 24/7 customer support.",
      features: ["Natural Language Processing", "Multi-channel Support", "Sentiment Analysis", "Escalation Management"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IT Operations Automation",
      description: "Automate IT infrastructure management, monitoring, and incident response.",
      features: ["Infrastructure Monitoring", "Auto-scaling", "Incident Response", "Security Automation"]
    }
  ];

  const benefits = [
    {
      metric: "85%",
      description: "Reduction in manual tasks",
      icon: <Zap className="w-6 h-6" />
    },
    {
      metric: "60%",
      description: "Faster process completion",
      icon: <Clock className="w-6 h-6" />
    },
    {
      metric: "99.9%",
      description: "Automation accuracy",
      icon: <Shield className="w-6 h-6" />
    },
    {
      metric: "40%",
      description: "Cost reduction",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small teams starting with automation",
      features: [
        "Up to 5 automation workflows",
        "Basic bot templates",
        "Email support",
        "Standard integrations",
        "5 team members",
        "1 month data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Advanced automation for growing businesses",
      features: [
        "Unlimited workflows",
        "Custom bot development",
        "Priority support",
        "Advanced integrations",
        "25 team members",
        "1 year data retention",
        "API access",
        "Custom training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "Full-scale automation for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated automation architect",
        "24/7 phone support",
        "Unlimited team members",
        "Unlimited data retention",
        "White-label solutions",
        "On-premise deployment",
        "Custom development"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Finance",
      title: "Automated Invoice Processing",
      description: "Process thousands of invoices daily with 99.5% accuracy using AI-powered OCR and validation.",
      results: "Reduced processing time by 80% and eliminated manual errors"
    },
    {
      industry: "Healthcare",
      title: "Patient Data Management",
      description: "Automate patient record updates, appointment scheduling, and insurance verification.",
      results: "Improved patient satisfaction by 45% and reduced administrative overhead"
    },
    {
      industry: "E-commerce",
      title: "Order Fulfillment Automation",
      description: "Streamline order processing, inventory management, and shipping notifications.",
      results: "Increased order processing speed by 70% and reduced fulfillment errors"
    },
    {
      industry: "Manufacturing",
      title: "Quality Control Automation",
      description: "Automate product inspection, defect detection, and quality reporting using computer vision.",
      results: "Improved quality consistency by 90% and reduced inspection time by 60%"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation - Intelligent Process Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation. Reduce manual work, increase efficiency, and scale operations with intelligent process automation." />
        <meta name="keywords" content="AI automation, process automation, RPA, business automation, workflow automation, intelligent automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                <Bot className="w-4 h-4 mr-2" />
                Intelligent Process Automation
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Automation
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with intelligent automation. Reduce manual work, increase efficiency, 
                and scale operations with AI-powered process automation that learns and adapts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Start Free Trial
                  <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
                <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Proven <span className="text-purple-400">Results</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI automation solutions deliver measurable improvements across all business metrics.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                      <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                        {benefit.icon}
                      </div>
                      <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                      <div className="text-gray-300">{benefit.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automation Types Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive <span className="text-cyan-400">Automation Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From simple task automation to complex business process orchestration, we have you covered.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {automationTypes.map((type, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                    <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {type.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{type.title}</h3>
                    <p className="text-gray-300 mb-6">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Real-World <span className="text-purple-400">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses across industries are transforming with our AI automation solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {useCase.industry}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                      <p className="text-cyan-300 font-medium">📈 {useCase.results}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Flexible <span className="text-purple-400">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the automation plan that fits your business needs and scale as you grow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative ${plan.popular ? 'scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 h-full ${
                    plan.popular ? 'border-purple-500/50' : 'border-slate-700/50'
                  }`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white hover:from-purple-600 hover:to-cyan-700' 
                        : 'border border-slate-600 text-white hover:bg-slate-700'
                    }`}>
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-purple-400">Automate Your Business</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI automation platform to streamline operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Start Free Trial
                <ArrowRight className="inline w-5 h-5 ml-2" />
              </button>
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-400">kleber@ziontechgroup.com</a> | 
              📞 <a href="tel:+13024640950" className="hover:text-purple-400">+1 302 464 0950</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}