import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Eye, MessageSquare, BarChart3, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      name: "Machine Learning Solutions",
      description: "Custom ML models and algorithms tailored to your specific business needs and data patterns.",
      features: ["Predictive analytics", "Pattern recognition", "Custom model training", "Real-time inference"],
      icon: <Brain className="w-8 h-8" />,
      applications: ["Fraud detection", "Demand forecasting", "Customer segmentation", "Quality control"]
    },
    {
      name: "Computer Vision",
      description: "Advanced image and video analysis capabilities for automation and intelligent decision making.",
      features: ["Object detection", "Facial recognition", "OCR processing", "Video analytics"],
      icon: <Eye className="w-8 h-8" />,
      applications: ["Quality inspection", "Security monitoring", "Medical imaging", "Autonomous vehicles"]
    },
    {
      name: "Natural Language Processing",
      description: "Transform text and speech data into actionable insights with our advanced NLP solutions.",
      features: ["Sentiment analysis", "Language translation", "Text summarization", "Chatbot development"],
      icon: <MessageSquare className="w-8 h-8" />,
      applications: ["Customer service", "Content moderation", "Document processing", "Voice assistants"]
    },
    {
      name: "AI Automation",
      description: "Intelligent automation solutions that streamline workflows and reduce manual processes.",
      features: ["Process automation", "Workflow optimization", "Decision automation", "Integration APIs"],
      icon: <Zap className="w-8 h-8" />,
      applications: ["Document processing", "Email automation", "Data entry", "Report generation"]
    },
    {
      name: "Predictive Analytics",
      description: "Leverage historical data to predict future trends and make informed business decisions.",
      features: ["Trend forecasting", "Risk assessment", "Performance prediction", "Scenario modeling"],
      icon: <BarChart3 className="w-8 h-8" />,
      applications: ["Sales forecasting", "Risk management", "Inventory optimization", "Market analysis"]
    },
    {
      name: "AI Security Solutions",
      description: "Advanced AI-powered security systems to protect your digital assets and infrastructure.",
      features: ["Threat detection", "Anomaly detection", "Behavioral analysis", "Incident response"],
      icon: <Shield className="w-8 h-8" />,
      applications: ["Cybersecurity", "Fraud prevention", "Access control", "Network monitoring"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business requirements and data to identify AI opportunities"
    },
    {
      step: "02", 
      title: "Solution Design",
      description: "Our experts design a custom AI solution tailored to your specific needs"
    },
    {
      step: "03",
      title: "Development & Training",
      description: "We develop and train AI models using your data and industry best practices"
    },
    {
      step: "04",
      title: "Deployment & Integration",
      description: "Seamless integration into your existing systems with full support and monitoring"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including machine learning, computer vision, NLP, and automation solutions." />
        <meta name="keywords" content="ai services, machine learning, computer vision, nlp, artificial intelligence, automation, predictive analytics" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for modern businesses" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we deliver AI that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get AI Consultation
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive artificial intelligence solutions designed to solve complex business challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, appIndex) => (
                        <span key={appIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our AI Development Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful AI implementation and maximum ROI
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Harness the Power of AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI can transform your business and give you a competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;