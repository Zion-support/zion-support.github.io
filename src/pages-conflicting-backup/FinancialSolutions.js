import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Shield, BarChart3, ArrowRight, CheckCircle, Brain, Database, Zap, Lock } from 'lucide-react';
export default function FinancialSolutions() {
    const solutions = [
        {
            icon: Brain,
            title: "AI-Powered Trading",
            description: "Intelligent algorithmic trading systems with real-time market analysis",
            features: ["Predictive analytics", "Risk management", "Portfolio optimization"]
        },
        {
            icon: Shield,
            title: "Regulatory Compliance",
            description: "Automated compliance monitoring and reporting for financial regulations",
            features: ["Real-time monitoring", "Automated reporting", "Audit trails"]
        },
        {
            icon: BarChart3,
            title: "Financial Analytics",
            description: "Advanced data analytics for investment decisions and market insights",
            features: ["Market analysis", "Performance tracking", "Risk assessment"]
        },
        {
            icon: Lock,
            title: "Cybersecurity",
            description: "Bank-grade security solutions for financial institutions",
            features: ["Fraud detection", "Secure transactions", "Data protection"]
        },
        {
            icon: Database,
            title: "Data Management",
            description: "Comprehensive financial data integration and management",
            features: ["Real-time data", "Multi-source integration", "Data quality"]
        },
        {
            icon: Zap,
            title: "Process Automation",
            description: "Streamlined financial operations and workflow automation",
            features: ["Workflow automation", "Document processing", "Approval systems"]
        }
    ];
    const useCases = [
        {
            title: "Investment Management",
            description: "AI-powered portfolio management and investment strategies",
            icon: "📈"
        },
        {
            title: "Risk Management",
            description: "Comprehensive risk assessment and mitigation strategies",
            icon: "⚠️"
        },
        {
            title: "Compliance & Audit",
            description: "Automated regulatory compliance and audit preparation",
            icon: "📋"
        },
        {
            title: "Customer Onboarding",
            description: "Streamlined KYC and customer verification processes",
            icon: "👤"
        },
        {
            title: "Fraud Detection",
            description: "Real-time fraud detection and prevention systems",
            icon: "🕵️"
        },
        {
            title: "Treasury Operations",
            description: "Automated treasury management and cash flow optimization",
            icon: "💰"
        }
    ];
    const benefits = [
        "Reduce operational costs by 25-40%",
        "Improve compliance accuracy by 95%",
        "Enhance fraud detection by 80%",
        "Accelerate transaction processing by 60%",
        "Improve customer satisfaction by 35%",
        "Enable real-time decision making"
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
              <DollarSign className="w-8 h-8 text-white"/>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Financial Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your financial operations with cutting-edge AI technology. 
            Streamline processes, enhance security, and drive innovation in the financial sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5"/>
            </Link>
            <Link to="/case-studies" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered solutions address every aspect of modern financial operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (<div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg w-fit mb-4">
                  <solution.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                      {feature}
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how our financial solutions are transforming the industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (<div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See real results with our AI-powered financial solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (<div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"/>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (<div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"/>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of finance with Zion Tech Group's AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200">
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5"/>
            </Link>
            <Link to="/pricing" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>);
}
