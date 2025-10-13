import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  Smartphone, 
  Monitor,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  TrendingUp,
  Eye,
  MessageCircle,
  FileText,
  Settings,
  Clock,
  Award,
  Sparkles,
  Database,
  Mic,
  Image,
  Video
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIServicesPage = () => {
  const aiServices = [
    {
      name: "AI Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with advanced AI-powered analytics and predictive modeling",
      price: "From $2,499/month",
      features: ["Predictive Analytics", "Data Visualization", "Real-time Dashboards", "Custom Reports"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-analytics",
      popular: true
    },
    {
      name: "AI Content Generation",
      description: "Create high-quality content at scale using advanced AI models for text, images, and multimedia",
      price: "From $1,999/month",
      features: ["Text Generation", "Image Creation", "Video Production", "Multi-language Support"],
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/ai-content-generation",
      popular: true
    },
    {
      name: "AI Customer Support",
      description: "Intelligent chatbots and virtual assistants for 24/7 customer service and support",
      price: "From $1,499/month",
      features: ["Chatbot Development", "Voice Assistants", "Sentiment Analysis", "Multi-channel Support"],
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-customer-support",
      popular: false
    },
    {
      name: "AI Cybersecurity",
      description: "Advanced threat detection and prevention using AI-powered security solutions",
      price: "From $2,999/month",
      features: ["Threat Detection", "Anomaly Detection", "Automated Response", "Compliance Monitoring"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/ai-cybersecurity",
      popular: true
    },
    {
      name: "AI Data Analytics",
      description: "Extract valuable insights from your data using machine learning and advanced analytics",
      price: "From $1,799/month",
      features: ["Data Mining", "Pattern Recognition", "Predictive Modeling", "Automated Insights"],
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/ai-data-analytics",
      popular: false
    },
    {
      name: "AI Document Processing",
      description: "Automate document processing, extraction, and analysis with intelligent AI systems",
      price: "From $1,299/month",
      features: ["OCR Processing", "Data Extraction", "Document Classification", "Automated Workflows"],
      icon: <FileText className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      link: "/ai-document-processing",
      popular: false
    },
    {
      name: "AI Marketing Automation",
      description: "Intelligent marketing campaigns with personalized content and automated optimization",
      price: "From $1,899/month",
      features: ["Personalization", "Campaign Optimization", "Lead Scoring", "A/B Testing"],
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/ai-marketing-automation",
      popular: false
    },
    {
      name: "AI Predictive Analytics",
      description: "Forecast future trends and behaviors with advanced predictive modeling and machine learning",
      price: "From $2,199/month",
      features: ["Trend Forecasting", "Risk Assessment", "Demand Prediction", "Behavioral Analysis"],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/ai-predictive-analytics",
      popular: true
    },
    {
      name: "AI Voice Assistant",
      description: "Natural language processing and voice recognition for intelligent voice interactions",
      price: "From $1,599/month",
      features: ["Voice Recognition", "Natural Language Processing", "Multi-language Support", "Custom Training"],
      icon: <Mic className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      link: "/ai-voice-assistant",
      popular: false
    },
    {
      name: "AI Workflow Automation",
      description: "Streamline business processes with intelligent automation and workflow optimization",
      price: "From $1,699/month",
      features: ["Process Automation", "Workflow Optimization", "Task Scheduling", "Error Handling"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      link: "/ai-workflow-automation",
      popular: false
    }
  ];

  const aiCapabilities = [
    {
      title: "Machine Learning",
      description: "Advanced ML algorithms for pattern recognition, prediction, and decision making",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Natural Language Processing",
      description: "Understand and generate human language with state-of-the-art NLP models",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Computer Vision",
      description: "Analyze and interpret visual information from images and videos",
      icon: <Eye className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Deep Learning",
      description: "Neural networks and deep learning models for complex problem solving",
      icon: <Settings className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "AI-powered diagnostics, drug discovery, and patient care optimization",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Finance",
      description: "Fraud detection, risk assessment, and algorithmic trading solutions",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "E-commerce",
      description: "Personalized recommendations, inventory optimization, and customer insights",
      icon: <Globe className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: <Settings className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "AI Strategy & Planning",
      description: "Assess your needs and develop a comprehensive AI strategy aligned with your business goals",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Data Preparation",
      description: "Clean, organize, and prepare your data for AI model training and deployment",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "03",
      title: "Model Development",
      description: "Build, train, and optimize AI models tailored to your specific use cases",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "04",
      title: "Deployment & Monitoring",
      description: "Deploy AI solutions and continuously monitor performance for optimal results",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "Healthcare System",
      role: "Chief Medical Officer",
      content: "The AI analytics platform has revolutionized our patient care. We can now predict health issues before they become critical.",
      rating: 5
    },
    {
      name: "Mark Thompson",
      company: "Financial Services",
      role: "Risk Management Director",
      content: "Our fraud detection accuracy improved by 95% with their AI cybersecurity solutions. The ROI was immediate and substantial.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "E-commerce Platform",
      role: "VP of Technology",
      content: "The AI content generation has increased our content output by 300% while maintaining quality. It's been a game-changer for our marketing team.",
      rating: 5
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Improvement", icon: <Target className="w-6 h-6" /> },
    { number: "300%", label: "Efficiency Boost", icon: <Zap className="w-6 h-6" /> },
    { number: "50+", label: "AI Models Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services. Machine learning, natural language processing, computer vision, and custom AI solutions for modern enterprises."
        keywords="ai services, artificial intelligence, machine learning, nlp, computer vision, ai consulting, ai development, ai solutions, ai automation"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Brain className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Advanced AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              AI Services & Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Harness the power of artificial intelligence to transform your business. From machine learning to natural language processing, 
            we provide cutting-edge AI solutions for modern enterprises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Start Your AI Journey
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View AI Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We leverage cutting-edge AI technologies to solve complex business challenges and drive innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {capability.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI services designed to solve specific business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-purple-400 font-medium">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges of different industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful AI implementation and maximum value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 text-center"
              >
                <div className="text-4xl font-bold text-purple-400 mb-4">{step.step}</div>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their business with our AI solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let our AI experts help you build intelligent solutions that drive growth and innovation in your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Your AI Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View AI Demo
              <Brain className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;