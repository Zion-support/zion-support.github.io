import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Zap, Shield, BarChart3, Users, Code, Database, Globe, Sparkles } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: "AI Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "Data Visualization"],
      link: "/ai-analytics",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Content Generation",
      description: "Create high-quality content at scale with our AI-powered content generation tools.",
      icon: <Code className="w-8 h-8" />,
      features: ["Blog Posts", "Marketing Copy", "Product Descriptions", "Social Media Content"],
      link: "/ai-content-generation",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Customer Support",
      description: "Enhance customer experience with intelligent chatbots and automated support systems.",
      icon: <Users className="w-8 h-8" />,
      features: ["24/7 Chatbots", "Multi-language Support", "Sentiment Analysis", "Ticket Routing"],
      link: "/ai-customer-support",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Cybersecurity",
      description: "Protect your business with AI-powered threat detection and security automation.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat Detection", "Anomaly Detection", "Automated Response", "Security Analytics"],
      link: "/ai-cybersecurity",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "AI Data Analytics",
      description: "Unlock the power of your data with advanced AI-driven analytics and insights.",
      icon: <Database className="w-8 h-8" />,
      features: ["Data Mining", "Pattern Recognition", "Predictive Modeling", "Real-time Processing"],
      link: "/ai-data-analytics",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "AI Workflow Automation",
      description: "Streamline your business processes with intelligent automation solutions.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Process Automation", "Task Optimization", "Smart Routing", "Performance Monitoring"],
      link: "/ai-workflow-automation",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and boost productivity by up to 300%",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by 40-60% through intelligent automation",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Enhanced Accuracy",
      description: "Achieve 99.9% accuracy in data processing and decision making",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock AI services that never sleep or take breaks",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including analytics, content generation, customer support, cybersecurity, and workflow automation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, business automation, AI analytics, AI content generation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI Services</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. From analytics to automation, 
            we provide comprehensive AI services that drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to address every aspect of your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of AI with measurable results and proven ROI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-cyan-400">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
            <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already leveraging our AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;