import React from 'react';
import SEOHead from '../components/SEOHead';
import { Brain, Cpu, Database, BarChart3, Shield, Zap, Target, Users, CheckCircle, ArrowRight } from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Platform",
      description: "End-to-end ML platform for building, training, and deploying machine learning models at scale.",
      features: ["Model Training", "AutoML", "Model Deployment", "Monitoring"],
      price: "From $4,999",
      popular: true
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "AI Data Pipeline",
      description: "Intelligent data processing and transformation pipeline for AI applications.",
      features: ["Data Ingestion", "ETL Processing", "Data Quality", "Real-time Processing"],
      price: "From $3,999",
      popular: false
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Analytics Suite",
      description: "Advanced analytics platform with AI-powered forecasting and insights.",
      features: ["Forecasting", "Trend Analysis", "Anomaly Detection", "Custom Models"],
      price: "From $5,999",
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security Framework",
      description: "Comprehensive security solution for AI systems and data protection.",
      features: ["Threat Detection", "Data Encryption", "Access Control", "Compliance"],
      price: "From $6,999",
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intelligent Automation",
      description: "AI-powered automation platform for business processes and workflows.",
      features: ["Process Mining", "Workflow Automation", "RPA Integration", "Smart Routing"],
      price: "From $2,999",
      popular: true
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Edge AI Solutions",
      description: "Deploy AI models at the edge for real-time processing and low latency.",
      features: ["Edge Computing", "Model Optimization", "Real-time Inference", "IoT Integration"],
      price: "From $7,999",
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and identify AI opportunities.",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Custom AI solution architecture tailored to your requirements.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Development & Training",
      description: "Build and train AI models with your data and requirements.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Deploy your AI solution and provide ongoing support.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Proven Results",
      description: "Our AI solutions have delivered measurable results for 500+ clients."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Work with experienced AI engineers and data scientists."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security and compliance for all AI solutions."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Implementation",
      description: "Quick deployment with minimal disruption to your operations."
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Solutions - Zion Tech Group" 
        description="Comprehensive AI solutions including machine learning platforms, predictive analytics, intelligent automation, and edge AI. Transform your business with enterprise-grade AI." 
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Enterprise-grade AI solutions that transform your business operations. 
                From machine learning platforms to intelligent automation, we deliver AI that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Explore Solutions
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our AI Solutions</h2>
              <p className="text-xl text-gray-300">Comprehensive AI platforms designed for enterprise success</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className={`bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors relative ${solution.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-blue-400 mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{solution.price}</span>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-24 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our AI Implementation Process</h2>
              <p className="text-xl text-gray-300">A proven methodology for successful AI deployment</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">We deliver AI that makes a real business impact</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-4">Ready to Implement AI Solutions?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can transform your business and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISolutionsPage;