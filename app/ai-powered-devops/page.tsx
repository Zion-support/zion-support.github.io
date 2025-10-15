import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Award, DollarSign, Globe, TrendingUp, Monitor, MessageSquare, Eye, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

export default function AiPoweredDevops() {
  const features = [
    "AI-powered automated testing and quality assurance",
    "Intelligent deployment orchestration and rollback",
    "Predictive infrastructure scaling and optimization",
    "Automated security vulnerability detection and patching",
    "AI-driven performance monitoring and alerting",
    "Intelligent log analysis and anomaly detection",
    "Automated code review and optimization suggestions",
    "Smart resource allocation and cost optimization",
    "AI-powered incident response and resolution",
    "Automated compliance checking and reporting",
    "Intelligent capacity planning and forecasting",
    "AI-driven continuous integration and deployment"
  ];

  const benefits = [
    "Reduce deployment time by 80%",
    "Eliminate 95% of manual DevOps tasks",
    "Improve system reliability by 99.9%",
    "Cut infrastructure costs by 40%"
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$499",
      period: "/month",
      description: "Perfect for small development teams and startups",
      features: [
        "Up to 10 applications",
        "Basic AI automation",
        "Standard monitoring",
        "Email support",
        "Basic reporting",
        "5 team members",
        "Cloud deployment only"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Comprehensive solution for large organizations",
      features: [
        "Unlimited applications",
        "Advanced AI automation",
        "Real-time monitoring",
        "24/7 priority support",
        "Advanced analytics",
        "Unlimited team members",
        "Multi-cloud deployment",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered DevOps - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your DevOps with AI-powered automation. Streamline deployments, optimize infrastructure, and enhance reliability with intelligent DevOps solutions." />
        <meta name="keywords" content="AI DevOps, automated deployment, DevOps automation, infrastructure optimization, AI monitoring" />
      </Helmet>
      <SEOHead 
        title="AI-Powered DevOps"
        description="Revolutionize your DevOps with AI-powered automation. Streamline deployments, optimize infrastructure, and enhance reliability with intelligent DevOps solutions."
        keywords="AI DevOps, automated deployment, DevOps automation, infrastructure optimization, AI monitoring"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered DevOps
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your development and operations with intelligent automation. 
                Our AI-powered DevOps platform streamlines deployments, optimizes infrastructure, 
                and ensures maximum reliability and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Intelligent DevOps Features</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to automate and optimize your development pipeline
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See the impact of AI-powered DevOps on your organization
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Flexible pricing options for teams of all sizes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-purple-500' : 'border-slate-700'} hover:border-purple-500 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your DevOps?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams already using our AI-powered DevOps platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}