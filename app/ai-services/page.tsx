import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Shield, Target, ArrowRight, CheckCircle } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your business needs, from predictive analytics to recommendation systems.",
      features: ["Predictive Analytics", "Recommendation Engines", "Custom Model Training", "Real-time Processing"],
      price: "Starting at $2,500/month",
      icon: "🧠"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for text analysis, sentiment analysis, and automated content processing.",
      features: ["Text Analysis", "Sentiment Analysis", "Language Translation", "Content Generation"],
      price: "Starting at $1,800/month",
      icon: "💬"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions for quality control, object detection, and visual recognition.",
      features: ["Image Recognition", "Object Detection", "Quality Control", "Visual Analytics"],
      price: "Starting at $3,200/month",
      icon: "👁️"
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI that can handle customer service, sales, and support tasks 24/7.",
      features: ["24/7 Availability", "Multi-language Support", "Integration Ready", "Learning Capabilities"],
      price: "Starting at $899/month",
      icon: "🤖"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using advanced statistical models and machine learning algorithms.",
      features: ["Demand Forecasting", "Risk Assessment", "Trend Analysis", "Performance Prediction"],
      price: "Starting at $2,100/month",
      icon: "📊"
    },
    {
      title: "AI Automation",
      description: "Automate complex business processes with intelligent decision-making and exception handling.",
      features: ["Process Automation", "Decision Making", "Exception Handling", "Workflow Optimization"],
      price: "Starting at $1,500/month",
      icon: "⚙️"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and processes, saving up to 80% of manual work time."
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: "Better Decision Making",
      description: "Data-driven insights and predictions help you make smarter business decisions."
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Enhanced Security",
      description: "AI-powered security solutions protect your data and systems from threats."
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Scalable Solutions",
      description: "AI systems that grow with your business and adapt to changing needs."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, AI automation, artificial intelligence" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text cyber-text">
              AI Services
            </h1>
            
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Transform your business with our comprehensive artificial intelligence solutions. 
              From machine learning to computer vision, we deliver cutting-edge AI that drives real results.
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Process Automation</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-gray-300">Client Savings</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-cyan-400 font-bold mb-4">{service.price}</div>
                  
                  <button className="w-full cyber-button">
                    Learn More
                  </button>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our AI Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our AI Implementation Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="cyber-card p-6 text-center">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Discovery & Analysis</h3>
                  <p className="text-gray-300 text-sm">We analyze your business needs and identify AI opportunities.</p>
                </div>
                <div className="cyber-card p-6 text-center">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Solution Design</h3>
                  <p className="text-gray-300 text-sm">We design a custom AI solution tailored to your requirements.</p>
                </div>
                <div className="cyber-card p-6 text-center">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Development & Testing</h3>
                  <p className="text-gray-300 text-sm">We build and thoroughly test your AI solution.</p>
                </div>
                <div className="cyber-card p-6 text-center">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Deployment & Support</h3>
                  <p className="text-gray-300 text-sm">We deploy your solution and provide ongoing support.</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="cyber-card p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Ready to Transform Your Business with AI?</h2>
                <p className="text-gray-300 mb-6">
                  Get a free consultation and discover how our AI services can help you achieve 
                  unprecedented growth and efficiency. Join the AI revolution today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="cyber-button">
                    Get Free Consultation
                  </a>
                  <a href="tel:+13024640950" className="cyber-button-secondary">
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiServicesPage;