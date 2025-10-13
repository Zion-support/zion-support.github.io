import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Shield, 
  Users, 
  Mail, 
  Target, 
  Calendar,
  Code,
  Database,
  Smartphone,
  Globe,
  Zap,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Lock,
  RefreshCw,
  Headphones,
  Cpu,
  Eye,
  MessageSquare,
  FileText,
  Workflow,
  Mic,
  Search,
  Bot,
  Layers
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIServicesPage = () => {
  const aiServices = [
    {
      category: "AI Analytics & Intelligence",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "AI Business Intelligence Pro",
          description: "Advanced AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting. Transform your data into actionable business intelligence.",
          features: [
            "Real-time data processing",
            "Predictive analytics engine",
            "Automated report generation",
            "Custom dashboard creation",
            "Natural language queries",
            "Multi-source data integration"
          ],
          pricing: {
            starter: { price: "$2,999", period: "month", features: "Up to 10 users, 1M data points" },
            professional: { price: "$5,999", period: "month", features: "Up to 50 users, 10M data points" },
            enterprise: { price: "$12,999", period: "month", features: "Unlimited users, unlimited data" }
          },
          link: "/ai-analytics",
          popular: true,
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: "AI Predictive Analytics Suite",
          description: "Comprehensive predictive analytics solution with machine learning models for forecasting, risk assessment, and trend analysis.",
          features: [
            "Machine learning models",
            "Forecasting algorithms",
            "Risk assessment tools",
            "Trend analysis",
            "Scenario planning",
            "Automated insights"
          ],
          pricing: {
            starter: { price: "$1,999", period: "month", features: "Basic models, 5 predictions" },
            professional: { price: "$3,999", period: "month", features: "Advanced models, 20 predictions" },
            enterprise: { price: "$7,999", period: "month", features: "Custom models, unlimited predictions" }
          },
          link: "/ai-predictive-analytics",
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          name: "AI Data Visualization Studio",
          description: "Create stunning, interactive data visualizations with AI-powered insights and automated chart generation.",
          features: [
            "Interactive dashboards",
            "Automated chart generation",
            "3D visualizations",
            "Real-time updates",
            "Custom themes",
            "Export capabilities"
          ],
          pricing: {
            starter: { price: "$999", period: "month", features: "Up to 10 dashboards" },
            professional: { price: "$1,999", period: "month", features: "Up to 50 dashboards" },
            enterprise: { price: "$3,999", period: "month", features: "Unlimited dashboards" }
          },
          link: "/ai-data-analytics",
          icon: <Layers className="w-6 h-6" />
        }
      ]
    },
    {
      category: "AI Content & Communication",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "AI Content Generation Pro",
          description: "Advanced AI content creation platform with natural language processing, automated writing, and multi-format content generation.",
          features: [
            "Natural language processing",
            "Multi-format content generation",
            "Brand voice customization",
            "SEO optimization",
            "Content scheduling",
            "Plagiarism detection"
          ],
          pricing: {
            starter: { price: "$1,499", period: "month", features: "Up to 100 articles/month" },
            professional: { price: "$2,999", period: "month", features: "Up to 500 articles/month" },
            enterprise: { price: "$5,999", period: "month", features: "Unlimited content generation" }
          },
          link: "/ai-content-generation",
          popular: true,
          icon: <FileText className="w-6 h-6" />
        },
        {
          name: "AI Customer Support Suite",
          description: "Intelligent customer support system with chatbots, automated responses, and sentiment analysis.",
          features: [
            "AI-powered chatbots",
            "Automated ticket routing",
            "Sentiment analysis",
            "Multi-language support",
            "Knowledge base integration",
            "Performance analytics"
          ],
          pricing: {
            starter: { price: "$1,999", period: "month", features: "Up to 1K conversations/month" },
            professional: { price: "$3,999", period: "month", features: "Up to 10K conversations/month" },
            enterprise: { price: "$7,999", period: "month", features: "Unlimited conversations" }
          },
          link: "/ai-customer-support",
          icon: <Users className="w-6 h-6" />
        },
        {
          name: "AI Voice Assistant Platform",
          description: "Advanced voice AI platform with natural language understanding, speech synthesis, and multi-modal interactions.",
          features: [
            "Natural language understanding",
            "Speech synthesis",
            "Multi-modal interactions",
            "Custom voice training",
            "Integration APIs",
            "Real-time processing"
          ],
          pricing: {
            starter: { price: "$2,499", period: "month", features: "Up to 10K voice interactions" },
            professional: { price: "$4,999", period: "month", features: "Up to 100K voice interactions" },
            enterprise: { price: "$9,999", period: "month", features: "Unlimited voice interactions" }
          },
          link: "/ai-voice-assistant",
          icon: <Mic className="w-6 h-6" />
        }
      ]
    },
    {
      category: "AI Security & Compliance",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      services: [
        {
          name: "AI Cybersecurity Suite",
          description: "Advanced AI-powered cybersecurity platform with threat detection, automated response, and compliance monitoring.",
          features: [
            "AI threat detection",
            "Automated incident response",
            "Behavioral analysis",
            "Compliance monitoring",
            "Real-time alerts",
            "Forensic analysis"
          ],
          pricing: {
            starter: { price: "$3,999", period: "month", features: "Up to 100 endpoints" },
            professional: { price: "$7,999", period: "month", features: "Up to 500 endpoints" },
            enterprise: { price: "$15,999", period: "month", features: "Unlimited endpoints" }
          },
          link: "/ai-cybersecurity",
          popular: true,
          icon: <Shield className="w-6 h-6" />
        },
        {
          name: "AI Content Moderation Pro",
          description: "Intelligent content moderation system with image, text, and video analysis for safe content management.",
          features: [
            "Image content analysis",
            "Text sentiment analysis",
            "Video content scanning",
            "Real-time moderation",
            "Custom rule creation",
            "Audit trail"
          ],
          pricing: {
            starter: { price: "$1,999", period: "month", features: "Up to 100K content items" },
            professional: { price: "$3,999", period: "month", features: "Up to 1M content items" },
            enterprise: { price: "$7,999", period: "month", features: "Unlimited content items" }
          },
          link: "/ai-content-moderation",
          icon: <Eye className="w-6 h-6" />
        }
      ]
    },
    {
      category: "AI Automation & Workflow",
      icon: <Workflow className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "AI Workflow Automation Pro",
          description: "Intelligent workflow automation platform with AI decision-making, process optimization, and intelligent routing.",
          features: [
            "AI decision-making",
            "Process optimization",
            "Intelligent routing",
            "Exception handling",
            "Performance monitoring",
            "Custom workflows"
          ],
          pricing: {
            starter: { price: "$2,499", period: "month", features: "Up to 10 workflows" },
            professional: { price: "$4,999", period: "month", features: "Up to 50 workflows" },
            enterprise: { price: "$9,999", period: "month", features: "Unlimited workflows" }
          },
          link: "/ai-workflow-automation",
          popular: true,
          icon: <Workflow className="w-6 h-6" />
        },
        {
          name: "AI Document Processing Suite",
          description: "Advanced document processing with OCR, intelligent extraction, and automated classification.",
          features: [
            "OCR technology",
            "Intelligent extraction",
            "Automated classification",
            "Multi-format support",
            "Batch processing",
            "Quality assurance"
          ],
          pricing: {
            starter: { price: "$1,999", period: "month", features: "Up to 10K documents" },
            professional: { price: "$3,999", period: "month", features: "Up to 100K documents" },
            enterprise: { price: "$7,999", period: "month", features: "Unlimited documents" }
          },
          link: "/ai-document-processing",
          icon: <FileText className="w-6 h-6" />
        },
        {
          name: "AI Marketing Automation Pro",
          description: "Comprehensive AI marketing automation with personalization, campaign optimization, and predictive targeting.",
          features: [
            "Personalization engine",
            "Campaign optimization",
            "Predictive targeting",
            "A/B testing automation",
            "ROI optimization",
            "Multi-channel orchestration"
          ],
          pricing: {
            starter: { price: "$2,999", period: "month", features: "Up to 50K contacts" },
            professional: { price: "$5,999", period: "month", features: "Up to 500K contacts" },
            enterprise: { price: "$11,999", period: "month", features: "Unlimited contacts" }
          },
          link: "/ai-marketing-automation",
          icon: <Target className="w-6 h-6" />
        }
      ]
    }
  ];

  const capabilities = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Advanced ML algorithms for pattern recognition, prediction, and decision-making"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Image and video analysis with object detection, facial recognition, and scene understanding"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Text analysis, sentiment detection, language translation, and conversational AI"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Deep Learning",
      description: "Neural networks for complex pattern recognition and advanced AI capabilities"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Forecasting, trend analysis, and predictive modeling for business insights"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Conversational AI",
      description: "Intelligent chatbots, virtual assistants, and voice-enabled interactions"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "TechStart Inc.",
      role: "Chief Data Officer",
      content: "Zion's AI analytics platform revolutionized our data strategy. We now predict market trends with 95% accuracy.",
      rating: 5,
      service: "AI Business Intelligence Pro"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI content generation system increased our content output by 300% while maintaining quality standards.",
      rating: 5,
      service: "AI Content Generation Pro"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion's AI cybersecurity suite detected and prevented 15 potential breaches in the first month alone.",
      rating: 5,
      service: "AI Cybersecurity Suite"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Discover our comprehensive AI services including machine learning, computer vision, natural language processing, and AI automation. Transform your business with cutting-edge AI technology."
        keywords="AI services, artificial intelligence, machine learning, computer vision, NLP, AI automation, predictive analytics, AI consulting"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-advanced particle-system" />
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Leading AI Solutions Provider</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="holographic-text">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to computer vision, we deliver AI that drives real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="btn-cyber px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              <span>Get AI Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center group"
            >
              <Monitor className="w-5 h-5 mr-2" />
              <span>Watch AI Demo</span>
            </Link>
          </div>
        </ResponsiveContainer>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of advanced artificial intelligence technologies to solve complex business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* AI Services by Category */}
      {aiServices.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-4`}>
                  {category.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {category.category}
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {category.category === "AI Analytics & Intelligence" && "Transform your data into actionable insights with advanced AI analytics and intelligence solutions."}
                {category.category === "AI Content & Communication" && "Enhance communication and content creation with intelligent AI-powered tools and platforms."}
                {category.category === "AI Security & Compliance" && "Protect your business with AI-powered security solutions and automated compliance monitoring."}
                {category.category === "AI Automation & Workflow" && "Streamline operations and boost productivity with intelligent automation and workflow solutions."}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="text-center p-3 bg-white/5 rounded-lg">
                          <div className="text-sm text-gray-400 capitalize mb-1">{plan}</div>
                          <div className="text-lg font-bold text-white mb-1">
                            {details.price}<span className="text-sm text-gray-400">/{details.period}</span>
                          </div>
                          <div className="text-xs text-gray-400">{details.features}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>
      ))}

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by AI Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what industry leaders say about our AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="mb-2">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
                <div className="text-xs text-cyan-400 font-medium">{testimonial.service}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Harness AI Power?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced AI solutions. From machine learning to automation, 
              we deliver AI that drives real results and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start AI Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center group"
              >
                <Monitor className="w-5 h-5 mr-2" />
                Schedule AI Demo
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Contact us: <span className="text-cyan-400">kleber@ziontechgroup.com</span> | <span className="text-cyan-400">+1 302 464 0950</span></p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIServicesPage;