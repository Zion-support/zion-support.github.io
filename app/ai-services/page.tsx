import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Zap, 
  BarChart3, 
  Eye, 
  MessageSquare, 
  Code, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Settings,
  Database,
  Smartphone
} from "lucide-react";

const AIServicesPage = () => {
  const aiServiceCategories = [
    {
      title: "AI Analytics & Insights",
      description: "Transform your data into actionable insights with advanced AI analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        "Predictive Analytics",
        "Business Intelligence",
        "Data Visualization",
        "Real-time Dashboards",
        "Custom Reporting",
        "Machine Learning Models"
      ],
      pricing: "From $299/month",
      link: "/ai-analytics"
    },
    {
      title: "AI Content Generation",
      description: "Create high-quality content at scale with AI-powered tools",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        "Blog Writing",
        "Social Media Content",
        "Email Campaigns",
        "Product Descriptions",
        "Technical Documentation",
        "Multilingual Content"
      ],
      pricing: "From $199/month",
      link: "/ai-content-generation"
    },
    {
      title: "Computer Vision",
      description: "Extract insights from images and videos with advanced computer vision",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        "Image Recognition",
        "Object Detection",
        "Facial Recognition",
        "Quality Inspection",
        "Medical Imaging",
        "Video Analysis"
      ],
      pricing: "From $399/month",
      link: "/ai-computer-vision"
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI for customer service and support",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      services: [
        "Customer Support Bots",
        "Sales Assistants",
        "Voice Assistants",
        "Multi-language Support",
        "Integration APIs",
        "Analytics & Insights"
      ],
      pricing: "From $149/month",
      link: "/ai-chatbot-builder"
    },
    {
      title: "AI Automation",
      description: "Automate complex business processes with intelligent AI workflows",
      icon: <Zap className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      services: [
        "Workflow Automation",
        "Document Processing",
        "Email Automation",
        "Data Entry Automation",
        "Process Optimization",
        "Custom Integrations"
      ],
      pricing: "From $249/month",
      link: "/ai-automation"
    },
    {
      title: "AI Security & Monitoring",
      description: "Protect your business with AI-powered security solutions",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      services: [
        "Threat Detection",
        "Anomaly Detection",
        "Fraud Prevention",
        "Security Monitoring",
        "Risk Assessment",
        "Compliance Management"
      ],
      pricing: "From $349/month",
      link: "/ai-cybersecurity"
    }
  ];

  const aiSolutions = [
    {
      title: "AI Strategy Consulting",
      description: "Strategic AI implementation planning and roadmap development",
      features: [
        "AI Readiness Assessment",
        "Technology Roadmap",
        "ROI Analysis",
        "Implementation Planning",
        "Change Management",
        "Training & Support"
      ],
      pricing: "$200/hour",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions tailored to your specific business needs",
      features: [
        "Custom Model Development",
        "API Integration",
        "Data Pipeline Setup",
        "Model Training",
        "Performance Optimization",
        "Ongoing Maintenance"
      ],
      pricing: "From $5,000/project",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "AI Model Training",
      description: "Train and optimize AI models for your specific use cases",
      features: [
        "Data Preparation",
        "Model Selection",
        "Training & Validation",
        "Hyperparameter Tuning",
        "Performance Testing",
        "Model Deployment"
      ],
      pricing: "From $2,500/model",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "AI Integration Services",
      description: "Seamlessly integrate AI capabilities into your existing systems",
      features: [
        "System Integration",
        "API Development",
        "Data Migration",
        "Testing & Validation",
        "User Training",
        "Documentation"
      ],
      pricing: "From $150/hour",
      icon: <Database className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and boost productivity by up to 300%",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Better Decision Making",
      description: "Data-driven insights for smarter business decisions",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 40% through automation",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "24/7 Availability",
      description: "AI systems that work around the clock without breaks",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      description: "AI-powered diagnostic tools, patient monitoring, and treatment optimization",
      icon: <Shield className="w-6 h-6" />
    },
    {
      industry: "Finance",
      description: "Fraud detection, risk assessment, algorithmic trading, and customer service",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      industry: "E-commerce",
      description: "Personalized recommendations, inventory optimization, and customer support",
      icon: <Globe className="w-6 h-6" />
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services & Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced AI services including machine learning, computer vision, natural language processing, and custom AI solutions for modern businesses."
        />
        <meta
          name="keywords"
          content="AI services, machine learning, artificial intelligence, computer vision, NLP, AI consulting, custom AI development"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services &
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Harness the power of artificial intelligence to transform your business. 
                From machine learning to computer vision, we provide cutting-edge AI solutions 
                that drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Free AI Assessment
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom Solutions
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Proven Results
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">AI Capabilities</h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-300">Machine Learning</span>
                        <span className="text-sm font-semibold text-green-400">95%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-cyan-500 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-300">Computer Vision</span>
                        <span className="text-sm font-semibold text-green-400">92%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-300">Natural Language Processing</span>
                        <span className="text-sm font-semibold text-green-400">98%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '98%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              We combine cutting-edge AI technology with deep industry expertise to deliver 
              solutions that drive real business value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions covering all aspects of artificial intelligence and machine learning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServiceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-1">Starting from</div>
                  <div className="text-lg font-bold text-cyan-400">
                    {category.pricing}
                  </div>
                </div>
                <Link
                  to={category.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential AI services to transform your business operations and drive innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {solution.description}
                    </p>
                    <div className="text-lg font-bold text-cyan-400 mb-4">
                      {solution.pricing}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI solutions tailored for specific industries and use cases.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.industry}
                </h3>
                <p className="text-gray-300">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI services today and transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free AI Assessment
              </Link>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              Contact us: <span className="text-cyan-400">+1 302 464 0950</span> | 
              <span className="text-cyan-400 ml-2">kleber@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;