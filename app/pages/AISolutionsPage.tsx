import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  ExternalLink,
  TrendingUp,
  Users,
  Clock,
  Target,
  BarChart,
  MessageSquare,
  Cpu,
  Eye,
  Mic,
  FileText,
  Search,
  Settings
} from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform that learns from your business patterns.",
      features: [
        "Predictive Analytics",
        "Real-time Dashboards",
        "Natural Language Queries",
        "Automated Reporting",
        "Anomaly Detection",
        "Custom ML Models"
      ],
      pricing: {
        starter: "$199/month",
        pro: "$499/month",
        enterprise: "$1,299/month"
      },
      link: "https://ziontechgroup.com/ai-business-intelligence",
      category: "Analytics"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      title: "Conversational AI Platform",
      description: "Build intelligent chatbots and virtual assistants that understand context and provide human-like interactions.",
      features: [
        "Multi-language Support",
        "Voice Integration",
        "Sentiment Analysis",
        "Custom Training",
        "API Integration",
        "Analytics Dashboard"
      ],
      pricing: {
        starter: "$99/month",
        pro: "$299/month",
        enterprise: "$799/month"
      },
      link: "https://ziontechgroup.com/conversational-ai",
      category: "Conversational AI"
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-400" />,
      title: "Computer Vision Solutions",
      description: "Advanced image and video analysis for quality control, security, and automated visual inspection systems.",
      features: [
        "Object Detection",
        "Facial Recognition",
        "Quality Control",
        "Real-time Processing",
        "Custom Model Training",
        "Edge Computing Support"
      ],
      pricing: {
        starter: "$149/month",
        pro: "$399/month",
        enterprise: "$999/month"
      },
      link: "https://ziontechgroup.com/computer-vision",
      category: "Computer Vision"
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: "AI Content Generation Suite",
      description: "Create high-quality content at scale with our AI-powered writing, design, and multimedia generation tools.",
      features: [
        "Content Writing",
        "Image Generation",
        "Video Creation",
        "SEO Optimization",
        "Brand Consistency",
        "Multi-format Export"
      ],
      pricing: {
        starter: "$79/month",
        pro: "$199/month",
        enterprise: "$499/month"
      },
      link: "https://ziontechgroup.com/ai-content-generation",
      category: "Content Creation"
    },
    {
      icon: <Search className="w-8 h-8 text-orange-400" />,
      title: "Intelligent Search & Discovery",
      description: "Implement semantic search and recommendation engines that understand user intent and context.",
      features: [
        "Semantic Search",
        "Recommendation Engine",
        "Auto-tagging",
        "Fuzzy Matching",
        "Real-time Indexing",
        "Custom Ranking"
      ],
      pricing: {
        starter: "$59/month",
        pro: "$179/month",
        enterprise: "$449/month"
      },
      link: "https://ziontechgroup.com/intelligent-search",
      category: "Search & Discovery"
    },
    {
      icon: <Settings className="w-8 h-8 text-pink-400" />,
      title: "AI Process Automation",
      description: "Automate complex business processes with intelligent workflow management and decision-making systems.",
      features: [
        "Workflow Automation",
        "Decision Trees",
        "Exception Handling",
        "Integration APIs",
        "Performance Monitoring",
        "Custom Logic Rules"
      ],
      pricing: {
        starter: "$129/month",
        pro: "$349/month",
        enterprise: "$899/month"
      },
      link: "https://ziontechgroup.com/ai-automation",
      category: "Process Automation"
    }
  ];

  const aiCapabilities = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "Machine Learning",
      description: "Custom ML models tailored to your specific business needs and data patterns."
    },
    {
      icon: <Cpu className="w-12 h-12 text-purple-400" />,
      title: "Deep Learning",
      description: "Advanced neural networks for complex pattern recognition and prediction tasks."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-green-400" />,
      title: "Natural Language Processing",
      description: "Text analysis, sentiment detection, and language understanding capabilities."
    },
    {
      icon: <Eye className="w-12 h-12 text-blue-400" />,
      title: "Computer Vision",
      description: "Image and video analysis for automated visual inspection and recognition."
    },
    {
      icon: <Mic className="w-12 h-12 text-orange-400" />,
      title: "Speech Processing",
      description: "Voice recognition, synthesis, and audio analysis for conversational interfaces."
    },
    {
      icon: <BarChart className="w-12 h-12 text-pink-400" />,
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes using advanced statistical and ML techniques."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions for modern businesses. Machine learning, computer vision, NLP, and automation services with expert implementation." />
        <meta name="keywords" content="ai solutions, machine learning, artificial intelligence, computer vision, nlp, automation, ai consulting" />
        <meta property="og:title" content="AI Solutions | Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for modern businesses with expert implementation and support." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 particle-bg">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 cyber-text neon-pulse">
                AI Solutions
                <span className="block text-3xl lg:text-4xl mt-4 text-gray-300">
                  Transform Your Business with Artificial Intelligence
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation. 
                Our comprehensive AI solutions are designed to solve real business challenges and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our AI Capabilities
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We leverage cutting-edge AI technologies to deliver solutions that transform how your business operates, 
                makes decisions, and serves customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-all duration-300">
                  <div className="mb-6">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of AI services designed to address specific business challenges 
                and drive digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="mb-6">
                    {service.icon}
                    <div className="mt-4">
                      <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Starter:</span>
                        <span className="text-cyan-400 font-bold">{service.pricing.starter}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Pro:</span>
                        <span className="text-purple-400 font-bold">{service.pricing.pro}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Enterprise:</span>
                        <span className="text-pink-400 font-bold">{service.pricing.enterprise}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button text-center inline-flex items-center justify-center"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className="cyber-button-secondary text-center inline-flex items-center justify-center"
                    >
                      Contact Sales
                      <Mail className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are built by experts and designed to deliver real business value with measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
                <p className="text-gray-300">Tailored AI solutions designed specifically for your business needs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with SOC 2 Type II compliance and data protection</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">Average 300% ROI with measurable business impact</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">PhD-level AI researchers and experienced implementation specialists</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI solutions. Get started with a free consultation 
              and discover how AI can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;