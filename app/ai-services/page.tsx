import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Award, Target, Star, ArrowRight, Sparkles, Cpu, Database, Smartphone, Lock, Zap, Globe, Calendar, FileText, Settings, CheckSquare, MessageSquare, Building, Clock, Send } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Comprehensive AI strategy development and implementation planning",
      features: ["AI Readiness Assessment", "Strategic Roadmap", "ROI Analysis", "Change Management"],
      price: "Starting at $15,000",
      popular: true
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "Bespoke AI solutions tailored to your specific business needs",
      features: ["Machine Learning Models", "Custom Algorithms", "API Development", "Integration Support"],
      price: "Starting at $25,000",
      popular: false
    },
    {
      icon: BarChart,
      title: "AI Analytics & Insights",
      description: "Transform your data into actionable insights with AI-powered analytics",
      features: ["Predictive Analytics", "Real-time Dashboards", "Data Visualization", "Business Intelligence"],
      price: "Starting at $10,000",
      popular: true
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI for customer service and support",
      features: ["Natural Language Processing", "Multi-channel Support", "Sentiment Analysis", "24/7 Availability"],
      price: "Starting at $8,000",
      popular: false
    },
    {
      icon: Shield,
      title: "AI Security Solutions",
      description: "Advanced AI-powered cybersecurity and threat detection",
      features: ["Threat Detection", "Anomaly Detection", "Automated Response", "Compliance Monitoring"],
      price: "Starting at $20,000",
      popular: false
    },
    {
      icon: Smartphone,
      title: "AI Mobile Applications",
      description: "AI-powered mobile apps with intelligent features and capabilities",
      features: ["Computer Vision", "Voice Recognition", "Personalization", "Offline AI"],
      price: "Starting at $30,000",
      popular: true
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "AI for medical diagnosis, drug discovery, and patient care" },
    { name: "Finance", icon: "💰", description: "Fraud detection, algorithmic trading, and risk assessment" },
    { name: "Manufacturing", icon: "🏭", description: "Predictive maintenance, quality control, and automation" },
    { name: "Retail", icon: "🛒", description: "Personalized recommendations, inventory management, and pricing" },
    { name: "Education", icon: "🎓", description: "Personalized learning, automated grading, and student analytics" },
    { name: "Transportation", icon: "🚗", description: "Autonomous vehicles, route optimization, and fleet management" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and identify AI opportunities",
      icon: Target
    },
    {
      step: "02", 
      title: "Strategy & Planning",
      description: "Develop a comprehensive AI strategy and implementation plan",
      icon: Calendar
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build and rigorously test your AI solutions",
      icon: Code
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Deploy your AI solutions and provide ongoing support",
      icon: CheckCircle
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: "300% Average ROI", description: "Our clients see significant returns on their AI investments" },
    { icon: Clock, title: "70% Time Savings", description: "Automate repetitive tasks and focus on strategic work" },
    { icon: Shield, title: "99.9% Accuracy", description: "AI-powered solutions with enterprise-grade reliability" },
    { icon: Users, title: "500+ Happy Clients", description: "Join hundreds of satisfied customers worldwide" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 cyber-grid">
      <Navigation />
      <SEOOptimizer 
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI solutions including strategy, development, analytics, chatbots, and security. Transform your business with cutting-edge artificial intelligence technology."
        keywords="AI services, artificial intelligence, machine learning, AI consulting, AI development, AI analytics"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 neural-network-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Services</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Transform Your Business with
              <span className="block holographic-text cyber-text">Artificial Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Unlock the power of AI with our comprehensive suite of services. From strategy 
              and consulting to custom development and deployment, we help you harness 
              artificial intelligence for maximum business impact.
            </p>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to drive innovation and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`quantum-card p-8 space-y-6 relative ${service.popular ? 'border-2 border-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                  <div className="text-cyan-400 font-bold text-xl">{service.price}</div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/contact"
                  className="w-full cyber-button inline-flex items-center justify-center px-6 py-3 text-center font-semibold rounded-lg transition-all duration-300 group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI solutions tailored for your industry's unique challenges and opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="quantum-card p-6 text-center space-y-4">
                <div className="text-4xl">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">Our AI Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation and maximum ROI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto energy-pulse">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results and expertise that deliver real business value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="quantum-card p-12 text-center space-y-8">
            <h2 className="text-4xl font-bold text-white neon-text">Ready to Harness the Power of AI?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let our AI experts help you transform your business with cutting-edge 
              artificial intelligence solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;