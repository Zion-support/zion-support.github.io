import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap, 
  Code, 
  FileText, 
  Camera, 
  Mic, 
  Search, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Lock,
  Activity,
  Users,
  Database,
  Cloud,
  Smartphone
} from "lucide-react";

export default function AiServices() {
  const aiServices = [
    {
      id: "ai-chatbot-enterprise",
      title: "AI Chatbot Enterprise",
      description: "Advanced conversational AI chatbots with natural language processing, multi-language support, and seamless human handoff capabilities.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "$299/month",
      features: [
        "Natural language processing",
        "Multi-language support (50+ languages)",
        "Context-aware conversations",
        "Human handoff capabilities",
        "Integration with CRM systems",
        "Analytics and insights"
      ],
      benefits: [
        "Reduce support costs by 60%",
        "Handle 80% of customer inquiries automatically",
        "Provide 24/7 customer support",
        "Improve customer satisfaction scores"
      ],
      link: "/ai-chatbot-enterprise"
    },
    {
      id: "ai-computer-vision",
      title: "AI Computer Vision",
      description: "Advanced image and video analysis using deep learning models for object detection, facial recognition, and automated visual inspection.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "$399/month",
      features: [
        "Object detection and classification",
        "Facial recognition and analysis",
        "OCR and text extraction",
        "Quality control automation",
        "Real-time video processing",
        "Custom model training"
      ],
      benefits: [
        "Automate visual inspection processes",
        "Reduce human error by 95%",
        "Process images 100x faster",
        "Enable new business applications"
      ],
      link: "/ai-computer-vision"
    },
    {
      id: "ai-content-generation",
      title: "AI Content Generation Pro",
      description: "Intelligent content creation platform that generates high-quality text, images, and videos tailored to your brand voice and requirements.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "$199/month",
      features: [
        "Text generation (articles, blogs, ads)",
        "Image generation and editing",
        "Video content creation",
        "Brand voice consistency",
        "SEO optimization",
        "Multi-language content"
      ],
      benefits: [
        "Create content 10x faster",
        "Maintain consistent brand voice",
        "Reduce content creation costs by 70%",
        "Scale content production infinitely"
      ],
      link: "/ai-content-generation-pro"
    },
    {
      id: "ai-data-analytics",
      title: "AI Data Analytics Suite",
      description: "Advanced analytics platform with machine learning models for predictive analytics, anomaly detection, and automated business insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      price: "$349/month",
      features: [
        "Predictive analytics models",
        "Anomaly detection",
        "Automated reporting",
        "Real-time dashboards",
        "Custom ML model training",
        "Data visualization"
      ],
      benefits: [
        "Make data-driven decisions",
        "Predict future trends accurately",
        "Identify opportunities and risks",
        "Automate business intelligence"
      ],
      link: "/ai-analytics-dashboard-pro"
    },
    {
      id: "ai-cybersecurity",
      title: "AI Cybersecurity Suite",
      description: "Intelligent threat detection and response system that uses machine learning to identify and prevent cyber attacks in real-time.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      price: "$449/month",
      features: [
        "Real-time threat detection",
        "Behavioral analysis",
        "Automated incident response",
        "Vulnerability assessment",
        "Phishing detection",
        "Compliance monitoring"
      ],
      benefits: [
        "Prevent 99.9% of cyber attacks",
        "Reduce false positives by 80%",
        "Respond to threats in seconds",
        "Ensure regulatory compliance"
      ],
      link: "/ai-cybersecurity-suite-pro"
    },
    {
      id: "ai-automation",
      title: "AI Process Automation",
      description: "Intelligent automation platform that uses AI to automate complex business processes, decision-making, and workflow optimization.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      price: "$279/month",
      features: [
        "Intelligent process automation",
        "Decision-making algorithms",
        "Workflow optimization",
        "Exception handling",
        "Learning and adaptation",
        "Integration capabilities"
      ],
      benefits: [
        "Automate 90% of repetitive tasks",
        "Reduce processing time by 75%",
        "Eliminate human errors",
        "Scale operations efficiently"
      ],
      link: "/ai-automation"
    },
    {
      id: "ai-code-assistant",
      title: "AI Code Assistant Pro",
      description: "Advanced AI-powered coding assistant that helps developers write better code, debug issues, and accelerate development cycles.",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "$149/month",
      features: [
        "Code generation and completion",
        "Bug detection and fixing",
        "Code review and optimization",
        "Documentation generation",
        "Multi-language support",
        "IDE integration"
      ],
      benefits: [
        "Increase coding speed by 300%",
        "Reduce bugs by 80%",
        "Improve code quality",
        "Accelerate development cycles"
      ],
      link: "/ai-code-assistant-pro"
    },
    {
      id: "ai-voice-assistant",
      title: "AI Voice Assistant",
      description: "Intelligent voice recognition and synthesis system for voice commands, transcription, and natural language voice interactions.",
      icon: <Mic className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "$229/month",
      features: [
        "Speech-to-text conversion",
        "Text-to-speech synthesis",
        "Voice command processing",
        "Multi-language support",
        "Custom voice training",
        "Real-time processing"
      ],
      benefits: [
        "Enable hands-free operations",
        "Improve accessibility",
        "Enhance user experience",
        "Reduce typing and manual input"
      ],
      link: "/ai-conversational-ai"
    },
    {
      id: "ai-search-engine",
      title: "AI Search & Discovery",
      description: "Intelligent search platform with semantic understanding, personalized results, and advanced filtering capabilities.",
      icon: <Search className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      price: "$179/month",
      features: [
        "Semantic search capabilities",
        "Personalized results",
        "Natural language queries",
        "Advanced filtering",
        "Search analytics",
        "Custom ranking algorithms"
      ],
      benefits: [
        "Improve search accuracy by 90%",
        "Reduce search time by 70%",
        "Enable natural language queries",
        "Provide personalized results"
      ],
      link: "/ai-search-engine"
    },
    {
      id: "ai-recommendation",
      title: "AI Recommendation Engine",
      description: "Advanced recommendation system that uses machine learning to provide personalized suggestions for products, content, and services.",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "$259/month",
      features: [
        "Personalized recommendations",
        "Collaborative filtering",
        "Content-based filtering",
        "Real-time updates",
        "A/B testing capabilities",
        "Performance analytics"
      ],
      benefits: [
        "Increase conversion rates by 200%",
        "Improve customer engagement",
        "Boost sales and revenue",
        "Enhance user experience"
      ],
      link: "/ai-recommendation-engine"
    },
    {
      id: "ai-document-processing",
      title: "AI Document Intelligence",
      description: "Intelligent document processing system that extracts, analyzes, and processes information from various document types automatically.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      price: "$199/month",
      features: [
        "Document classification",
        "Data extraction",
        "OCR and text recognition",
        "Form processing",
        "Document analysis",
        "Automated workflows"
      ],
      benefits: [
        "Process documents 50x faster",
        "Reduce manual data entry",
        "Improve accuracy by 95%",
        "Automate document workflows"
      ],
      link: "/ai-document-intelligence"
    },
    {
      id: "ai-predictive-maintenance",
      title: "AI Predictive Maintenance",
      description: "IoT-enabled predictive maintenance system that uses AI to predict equipment failures and optimize maintenance schedules.",
      icon: <Activity className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      price: "$399/month",
      features: [
        "Equipment monitoring",
        "Failure prediction",
        "Maintenance scheduling",
        "Cost optimization",
        "Real-time alerts",
        "Performance analytics"
      ],
      benefits: [
        "Reduce downtime by 60%",
        "Lower maintenance costs by 40%",
        "Extend equipment lifespan",
        "Optimize resource allocation"
      ],
      link: "/ai-predictive-maintenance"
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced AI services and solutions including machine learning, computer vision, natural language processing, and intelligent automation for modern businesses."
        />
        <meta
          name="keywords"
          content="AI services, machine learning, computer vision, natural language processing, artificial intelligence, automation, predictive analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="neon-cyan">Artificial Intelligence</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions. From machine learning to computer vision, 
              we provide the intelligence your business needs to stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center neon-glow"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free AI Consultation
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to Harness AI Power?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Brain className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">Call: {contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.website}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="neon-purple">AI Services</span> Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve complex business challenges 
                and unlock new opportunities for growth and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={service.id}
                  className="futuristic-card group p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Benefits:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-purple-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="neon-green">AI Capabilities</span> & Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest AI technologies and frameworks to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
                <p className="text-gray-300 text-sm">
                  Advanced ML algorithms for predictive modeling, classification, and pattern recognition.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Computer Vision</h3>
                <p className="text-gray-300 text-sm">
                  Image and video analysis, object detection, and visual recognition capabilities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">NLP & Chatbots</h3>
                <p className="text-gray-300 text-sm">
                  Natural language processing and intelligent conversational AI systems.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automation</h3>
                <p className="text-gray-300 text-sm">
                  Intelligent process automation and workflow optimization solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose <span className="neon-green">Zion Tech Group</span> for AI?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine deep AI expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300 text-sm">
                  PhD-level AI researchers and engineers with 10+ years of experience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300 text-sm">
                  Bank-level security with SOC2 compliance and data privacy protection.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300 text-sm">
                  Our AI solutions have generated $50M+ in value for our clients.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300 text-sm">
                  Round-the-clock technical support and continuous model optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution and unlock the full potential of your business with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center neon-glow"
              >
                Start Your AI Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule AI Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
