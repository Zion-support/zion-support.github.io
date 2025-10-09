import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bot, Cpu, Eye, Brain, Shield, Zap, CheckCircle, ArrowRight, Settings, Target } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "Self-managing systems that adapt and optimize without human intervention",
      benefits: ["Reduced operational costs", "24/7 autonomous operation", "Predictive maintenance"]
    },
    {
      icon: Brain,
      title: "Machine Learning Integration",
      description: "Advanced AI algorithms that learn and improve system performance over time",
      benefits: ["Continuous optimization", "Pattern recognition", "Adaptive behavior"]
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Visual perception capabilities for autonomous decision-making and navigation",
      benefits: ["Object detection", "Spatial awareness", "Real-time analysis"]
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Built-in safety protocols and security measures for reliable autonomous operation",
      benefits: ["Fail-safe mechanisms", "Threat detection", "Compliance standards"]
    }
  ];

  const applications = [
    {
      title: "Autonomous Vehicles",
      description: "Self-driving cars and trucks with advanced navigation and safety systems",
      icon: Bot,
      useCases: ["Fleet management", "Delivery automation", "Passenger transport"]
    },
    {
      title: "Smart Manufacturing",
      description: "Automated production lines with intelligent quality control and optimization",
      icon: Settings,
      useCases: ["Quality assurance", "Predictive maintenance", "Supply chain optimization"]
    },
    {
      title: "Robotic Process Automation",
      description: "Intelligent bots that handle complex business processes autonomously",
      icon: Cpu,
      useCases: ["Document processing", "Customer service", "Data management"]
    },
    {
      title: "Smart Infrastructure",
      description: "Autonomous systems for managing city infrastructure and utilities",
      icon: Target,
      useCases: ["Traffic management", "Energy optimization", "Environmental monitoring"]
    }
  ];

  const benefits = [
    "Reduced operational costs by up to 60%",
    "24/7 autonomous operation without breaks",
    "Improved accuracy and consistency",
    "Enhanced safety through predictive analytics",
    "Scalable solutions for any industry",
    "Real-time monitoring and reporting"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Advanced autonomous systems powered by AI and machine learning. Self-managing solutions for vehicles, manufacturing, and infrastructure." />
        <meta name="keywords" content="autonomous systems, self-driving, automation, AI, machine learning, robotics" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Systems</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Self-managing systems powered by advanced AI and machine learning. Transform your operations with intelligent automation that adapts, learns, and optimizes without human intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our autonomous systems combine cutting-edge AI, machine learning, and robotics to deliver intelligent, self-managing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Areas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our autonomous systems are designed for diverse industries and use cases, from transportation to manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <app.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{app.description}</p>
                <ul className="space-y-1">
                  {app.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 text-cyan-400" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Autonomous Systems</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Autonomous systems offer unprecedented efficiency, reliability, and cost savings. Our solutions are designed to operate independently while maintaining the highest standards of safety and performance.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Bot className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate?</h3>
                <p className="text-gray-300 mb-6">
                  Let us help you implement autonomous systems that transform your operations and drive efficiency.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Implement Autonomous Systems?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss how autonomous systems can transform your business operations and drive efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutonomousSystemsPage;