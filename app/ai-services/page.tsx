import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Database, Code, Brain, Users, Award, Clock, DollarSign, Target, BarChart3, MessageSquare, FileText, Image, Video, Mic, Search, Settings, Lock, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI Content Generation",
      description: "Advanced AI-powered content creation for blogs, articles, social media, and marketing materials",
      features: ["Multi-language support", "SEO optimization", "Brand voice customization", "Content scheduling", "Plagiarism detection"],
      price: "Starting at $2,500/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-content-generation",
      category: "Content & Marketing"
    },
    {
      title: "AI Analytics & Business Intelligence",
      description: "Comprehensive data analysis and business intelligence solutions powered by machine learning",
      features: ["Predictive analytics", "Custom dashboards", "Automated reporting", "Data visualization", "Real-time insights"],
      price: "Starting at $3,500/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-analytics",
      category: "Analytics & Data"
    },
    {
      title: "AI Customer Service Solutions",
      description: "Intelligent chatbots and customer service automation for enhanced customer experience",
      features: ["24/7 chatbot support", "Natural language processing", "Multi-channel integration", "Sentiment analysis", "Escalation management"],
      price: "Starting at $1,800/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/ai-customer-service",
      category: "Customer Experience"
    },
    {
      title: "AI Computer Vision",
      description: "Advanced image and video analysis solutions for various business applications",
      features: ["Object detection", "Facial recognition", "Quality control", "Medical imaging", "Security monitoring"],
      price: "Starting at $4,200/month",
      icon: <Image className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/ai-computer-vision",
      category: "Computer Vision"
    },
    {
      title: "AI Process Automation",
      description: "Intelligent automation solutions to streamline business processes and workflows",
      features: ["Workflow automation", "Document processing", "Data extraction", "Task scheduling", "Error reduction"],
      price: "Starting at $2,800/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/ai-automation",
      category: "Automation"
    },
    {
      title: "AI Cybersecurity Solutions",
      description: "Advanced AI-powered security solutions to protect against cyber threats",
      features: ["Threat detection", "Anomaly detection", "Security monitoring", "Incident response", "Compliance management"],
      price: "Starting at $3,200/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/ai-cybersecurity",
      category: "Security"
    },
    {
      title: "AI Voice & Speech Solutions",
      description: "Advanced voice recognition, synthesis, and conversational AI solutions",
      features: ["Speech-to-text", "Text-to-speech", "Voice cloning", "Language translation", "Voice commands"],
      price: "Starting at $2,200/month",
      icon: <Mic className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/ai-voice-solutions",
      category: "Voice & Speech"
    },
    {
      title: "AI Search & Recommendation",
      description: "Intelligent search engines and recommendation systems for enhanced user experience",
      features: ["Semantic search", "Personalized recommendations", "Search optimization", "Content discovery", "User behavior analysis"],
      price: "Starting at $2,600/month",
      icon: <Search className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/ai-recommendation-engine",
      category: "Search & Discovery"
    }
  ];

  const categories = [
    "All Services",
    "Content & Marketing",
    "Analytics & Data",
    "Customer Experience",
    "Computer Vision",
    "Automation",
    "Security",
    "Voice & Speech",
    "Search & Discovery"
  ];

  const benefits = [
    "Custom AI model development",
    "24/7 technical support and monitoring",
    "Scalable cloud infrastructure",
    "Enterprise-grade security and compliance",
    "Regular model updates and improvements",
    "Integration with existing systems",
    "Performance optimization and tuning",
    "Comprehensive training and documentation"
  ];

  const stats = [
    { number: "200+", label: "AI Models Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Enterprise Clients", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  const useCases = [
    {
      title: "E-commerce Personalization",
      description: "AI-powered product recommendations and personalized shopping experiences",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Healthcare Diagnostics",
      description: "Medical image analysis and diagnostic assistance for healthcare providers",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Financial Fraud Detection",
      description: "Real-time fraud detection and risk assessment for financial institutions",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Manufacturing Quality Control",
      description: "Automated quality inspection and defect detection in manufacturing",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI services including machine learning, computer vision, natural language processing, and automation solutions for enterprise businesses."
        />
        <meta
          name="keywords"
          content="AI services, machine learning, computer vision, NLP, automation, artificial intelligence, business intelligence, AI consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions. From machine learning to computer vision, we deliver enterprise-grade AI services that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get AI Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View AI Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Excellence in Numbers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions deliver measurable results for businesses across industries.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
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
                Comprehensive AI solutions tailored to your business needs and industry requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-white mb-2">
                      {service.price}
                    </div>
                    <div className="text-gray-400 text-sm">Custom pricing available</div>
                  </div>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World AI Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our AI solutions are transforming businesses across different industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with us for comprehensive AI solutions that deliver measurable business value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
