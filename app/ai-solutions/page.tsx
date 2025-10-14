import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Shield, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';

const AiSolutionsPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms tailored to your business needs",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making", "Real-time Processing"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for text analysis and language understanding",
      features: ["Chatbots & Virtual Assistants", "Sentiment Analysis", "Language Translation", "Content Generation"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Image and video analysis powered by cutting-edge AI technology",
      features: ["Object Detection", "Facial Recognition", "Medical Imaging", "Quality Control"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI Automation",
      description: "Streamline operations with intelligent automation solutions",
      features: ["Process Automation", "Workflow Optimization", "Data Processing", "Task Scheduling"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "AI-powered diagnostics, drug discovery, and patient care optimization",
      icon: "🏥"
    },
    {
      name: "Finance",
      description: "Fraud detection, algorithmic trading, and risk assessment",
      icon: "💰"
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: "🏭"
    },
    {
      name: "Retail",
      description: "Personalized recommendations, inventory management, and customer service",
      icon: "🛍️"
    },
    {
      name: "Transportation",
      description: "Autonomous vehicles, route optimization, and traffic management",
      icon: "🚗"
    },
    {
      name: "Education",
      description: "Personalized learning, automated grading, and educational content generation",
      icon: "🎓"
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and optimize processes for maximum productivity",
      stat: "40%"
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation and optimization",
      stat: "35%"
    },
    {
      title: "Better Decision Making",
      description: "Data-driven insights and predictions for informed business decisions",
      stat: "60%"
    },
    {
      title: "Enhanced Customer Experience",
      description: "Personalized interactions and 24/7 intelligent customer support",
      stat: "85%"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI solutions including machine learning, NLP, computer vision, and automation services." />
        <meta name="keywords" content="AI solutions, machine learning, artificial intelligence, NLP, computer vision, automation" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Solutions That Transform
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Harness the power of artificial intelligence to revolutionize your business operations, 
                enhance customer experiences, and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address your specific business challenges and opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Transform</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions are making a difference across various industries, driving innovation and growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience measurable improvements in efficiency, cost reduction, and business performance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-4">{benefit.stat}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our AI Implementation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful AI adoption and maximum ROI.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold text-white mb-4">Discovery & Analysis</h3>
                <p className="text-gray-300">We analyze your business processes and identify AI opportunities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold text-white mb-4">Strategy & Planning</h3>
                <p className="text-gray-300">Develop a comprehensive AI strategy tailored to your goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold text-white mb-4">Development & Testing</h3>
                <p className="text-gray-300">Build and rigorously test your AI solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">4</div>
                <h3 className="text-xl font-bold text-white mb-4">Deployment & Support</h3>
                <p className="text-gray-300">Deploy your AI solutions with ongoing support and optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can drive innovation and growth in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Download AI Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiSolutionsPage;