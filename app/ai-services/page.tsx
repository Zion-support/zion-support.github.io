import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Smartphone,
  Eye,
  MessageSquare,
  Database,
  Cpu
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 1,
      name: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, pattern recognition, and data-driven insights.",
      features: ["Predictive modeling", "Data preprocessing", "Model training", "Performance optimization"],
      icon: <Brain className="w-8 h-8" />,
      category: "Core AI"
    },
    {
      id: 2,
      name: "Computer Vision",
      description: "Advanced image and video analysis for object detection, recognition, and processing.",
      features: ["Object detection", "Image classification", "Facial recognition", "Video analysis"],
      icon: <Eye className="w-8 h-8" />,
      category: "Computer Vision"
    },
    {
      id: 3,
      name: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, and language understanding solutions.",
      features: ["Text classification", "Sentiment analysis", "Language translation", "Chatbot development"],
      icon: <MessageSquare className="w-8 h-8" />,
      category: "NLP"
    },
    {
      id: 4,
      name: "AI Automation",
      description: "Intelligent process automation to streamline business operations and reduce manual work.",
      features: ["Workflow automation", "Document processing", "Data extraction", "Task scheduling"],
      icon: <Zap className="w-8 h-8" />,
      category: "Automation"
    },
    {
      id: 5,
      name: "AI Analytics",
      description: "Advanced analytics and business intelligence powered by artificial intelligence.",
      features: ["Predictive analytics", "Real-time insights", "Custom dashboards", "Data visualization"],
      icon: <BarChart3 className="w-8 h-8" />,
      category: "Analytics"
    },
    {
      id: 6,
      name: "AI Infrastructure",
      description: "Scalable AI infrastructure and cloud solutions for enterprise deployments.",
      features: ["Cloud deployment", "Scalable computing", "API management", "Security compliance"],
      icon: <Database className="w-8 h-8" />,
      category: "Infrastructure"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "AI-powered diagnostics, patient monitoring, and medical research",
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "Finance",
      description: "Fraud detection, algorithmic trading, and risk assessment",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      name: "E-commerce",
      description: "Personalized recommendations, inventory optimization, and customer insights",
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and identify AI opportunities for maximum impact."
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Our experts design a custom AI solution tailored to your specific requirements."
    },
    {
      step: "03",
      title: "Development & Training",
      description: "We develop and train AI models using your data and industry best practices."
    },
    {
      step: "04",
      title: "Deployment & Integration",
      description: "Seamless integration with your existing systems and infrastructure."
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and optimization to ensure peak performance."
    }
  ];

  const stats = [
    { number: "200+", label: "AI Projects Delivered" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "50%", label: "Average Cost Reduction" },
    { number: "24/7", label: "AI Support" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Custom Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. From machine learning to computer vision, we deliver custom AI solutions that drive real results." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, AI automation, artificial intelligence consulting" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Custom AI solutions to transform your business" />
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
                From machine learning to computer vision, we deliver custom AI that drives real results.
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

        {/* Stats Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 transition-all duration-300 hover:border-cyan-500/40 hover:scale-105">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI solutions across diverse industries and use cases
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300 text-sm">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our AI Development Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for delivering successful AI projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
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
                Let's discuss how AI can transform your business. Get a free consultation with our AI experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Download AI Guide
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