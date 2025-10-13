import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Mic, Eye, MessageSquare, TrendingUp, Target, Globe, Lock, Cpu, Layers, FileText, Search, Bot, Sparkles } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

const AIServicesPage = () => {
  const aiServices = [
    {
      id: "ai-voice-assistant-pro",
      name: "AI Voice Assistant Pro",
      description: "Advanced conversational AI with natural language understanding, voice synthesis, and multi-modal interactions",
      price: "From $1,700/month",
      icon: <Mic className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500",
      features: [
        "Natural language understanding",
        "Voice synthesis & generation",
        "Multi-modal interactions",
        "Context-aware conversations",
        "Multi-language support (100+ languages)",
        "Custom voice training",
        "Integration with smart devices",
        "Real-time voice processing"
      ],
      benefits: [
        "Enhance customer experience",
        "Reduce support costs by 50%",
        "Enable hands-free operations",
        "Scale customer interactions",
        "Improve accessibility"
      ],
      link: "/ai-voice-assistant"
    },
    {
      id: "ai-computer-vision-pro",
      name: "AI Computer Vision Pro",
      description: "Advanced image and video analysis with object detection, facial recognition, and real-time processing capabilities",
      price: "From $2,200/month",
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Object detection & recognition",
        "Facial recognition & analysis",
        "Real-time video processing",
        "Image classification & tagging",
        "OCR & text extraction",
        "Quality inspection automation",
        "Security monitoring",
        "Medical image analysis"
      ],
      benefits: [
        "Automate visual inspections",
        "Enhance security systems",
        "Improve quality control",
        "Enable smart surveillance",
        "Accelerate medical diagnosis"
      ],
      link: "/ai-computer-vision"
    },
    {
      id: "ai-chatbot-enterprise",
      name: "AI Chatbot Enterprise",
      description: "Enterprise-grade conversational AI platform with advanced NLP, multi-channel support, and seamless integrations",
      price: "From $1,500/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Advanced NLP & understanding",
        "Multi-channel deployment",
        "Custom training & fine-tuning",
        "Integration with CRM/ERP",
        "Analytics & insights",
        "Human handoff capabilities",
        "Multi-language support",
        "Voice & text interfaces"
      ],
      benefits: [
        "Reduce support workload by 70%",
        "Provide 24/7 customer service",
        "Improve response times",
        "Scale customer interactions",
        "Gather valuable insights"
      ],
      link: "/ai-chatbot-enterprise"
    },
    {
      id: "ai-predictive-analytics-pro",
      name: "AI Predictive Analytics Pro",
      description: "Advanced machine learning platform for forecasting, trend analysis, and data-driven decision making",
      price: "From $2,500/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Advanced forecasting models",
        "Real-time data processing",
        "Custom algorithm development",
        "Automated model training",
        "Risk assessment & mitigation",
        "Performance optimization",
        "Integration with data sources",
        "Visualization & reporting"
      ],
      benefits: [
        "Improve decision accuracy by 85%",
        "Reduce operational risks",
        "Optimize resource allocation",
        "Identify growth opportunities",
        "Enhance competitive advantage"
      ],
      link: "/ai-predictive-analytics"
    },
    {
      id: "ai-content-generation-pro",
      name: "AI Content Generation Pro",
      description: "Advanced AI-powered content creation platform for text, images, videos, and multimedia content",
      price: "From $1,200/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: [
        "Text generation & editing",
        "Image & video creation",
        "Multi-language content",
        "Brand voice customization",
        "SEO optimization",
        "Content planning & scheduling",
        "Plagiarism detection",
        "Performance analytics"
      ],
      benefits: [
        "Increase content production by 300%",
        "Maintain consistent brand voice",
        "Reduce content creation costs",
        "Improve SEO performance",
        "Scale content marketing"
      ],
      link: "/ai-content-generation"
    },
    {
      id: "ai-workflow-automation-pro",
      name: "AI Workflow Automation Pro",
      description: "Intelligent automation platform that streamlines business processes and eliminates manual tasks",
      price: "From $1,800/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Process automation & optimization",
        "Intelligent task routing",
        "Exception handling & escalation",
        "Integration with existing systems",
        "Custom workflow creation",
        "Performance monitoring",
        "Compliance & audit trails",
        "Scalable architecture"
      ],
      benefits: [
        "Reduce manual work by 80%",
        "Improve process efficiency",
        "Eliminate human errors",
        "Accelerate time-to-market",
        "Enhance compliance"
      ],
      link: "/ai-workflow-automation"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "50+", label: "Enterprise Clients", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Cpu className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group"
        description="Comprehensive AI services including voice assistants, computer vision, chatbots, predictive analytics, and workflow automation. Transform your business with cutting-edge AI technology."
        keywords="AI services, artificial intelligence, machine learning, voice assistants, computer vision, chatbots, predictive analytics, workflow automation, AI consulting"
        canonical="https://ziontechgroup.com/ai-services"
        author="Zion Tech Group"
        section="AI Services"
        tags={["AI", "Artificial Intelligence", "Machine Learning", "Automation", "Technology"]}
        readingTime={8}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Advanced AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From voice assistants to predictive analytics, we deliver AI that drives real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get AI Consultation
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View AI Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI solutions designed to solve complex business challenges and drive innovation. 
              Each service is tailored to your specific needs and industry requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <FuturisticCard
                key={service.id}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <FuturisticButton
                      href={service.link}
                      variant="outline"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="w-full"
                    >
                      Learn More
                    </FuturisticButton>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of businesses already using our AI solutions to drive growth, efficiency, and innovation. 
            Let's build the future together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your AI Journey
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
