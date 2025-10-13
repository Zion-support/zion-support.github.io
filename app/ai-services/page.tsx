import { ArrowRight, Brain, Zap, Shield, Database, Code, BarChart3, MessageSquare, Eye, Cpu, TrendingUp, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI Content Generation",
      description: "Automated content creation for blogs, social media, and marketing materials",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Blog posts", "Social media content", "Product descriptions", "Email campaigns"],
      pricing: "Starting at $299/month",
      path: "/ai-content-generation"
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time business intelligence and predictive analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Data visualization"],
      pricing: "Starting at $499/month",
      path: "/ai-analytics-dashboard"
    },
    {
      title: "AI Customer Support",
      description: "Intelligent chatbots and automated customer service solutions",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["24/7 chatbots", "Multi-language support", "Sentiment analysis", "Ticket routing"],
      pricing: "Starting at $199/month",
      path: "/ai-customer-support"
    },
    {
      title: "AI Cybersecurity",
      description: "Advanced threat detection and automated security monitoring",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: ["Threat detection", "Automated response", "Security monitoring", "Compliance reporting"],
      pricing: "Starting at $799/month",
      path: "/ai-cybersecurity"
    },
    {
      title: "AI Computer Vision",
      description: "Image recognition, object detection, and visual analysis solutions",
      icon: <Eye className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["Object detection", "Facial recognition", "Quality inspection", "Visual search"],
      pricing: "Starting at $599/month",
      path: "/ai-computer-vision"
    },
    {
      title: "AI Code Assistant",
      description: "Intelligent code generation, review, and optimization tools",
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: ["Code generation", "Bug detection", "Performance optimization", "Documentation"],
      pricing: "Starting at $399/month",
      path: "/ai-code-assistant"
    },
    {
      title: "AI Business Intelligence",
      description: "Advanced data analysis and business insights automation",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["Market analysis", "Sales forecasting", "Customer insights", "ROI optimization"],
      pricing: "Starting at $699/month",
      path: "/ai-business-intelligence"
    },
    {
      title: "AI Automation",
      description: "Workflow automation and intelligent process optimization",
      icon: <Zap className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: ["Process automation", "Workflow optimization", "Task scheduling", "Integration"],
      pricing: "Starting at $349/month",
      path: "/ai-automation"
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 60%",
    "Increase productivity by 40%",
    "24/7 automated operations",
    "Scalable AI solutions",
    "Real-time insights and analytics",
    "Custom AI model development"
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive AI services including content generation, analytics, cybersecurity, and automation. Starting at $199/month."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI content generation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}AI Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From content generation to cybersecurity, we provide comprehensive AI services 
              that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get AI Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="text-cyan-400 font-semibold text-lg">{service.pricing}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of artificial intelligence with our proven solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect AI solution for your business needs with our flexible pricing options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-300">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI chatbot
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Content generation (100 posts/month)
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Get Started
                </Link>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$499<span className="text-lg text-gray-300">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited content generation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Get Started
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Full AI suite
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    On-premise deployment
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Contact Sales
                </Link>
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
              Join thousands of businesses already using our AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
