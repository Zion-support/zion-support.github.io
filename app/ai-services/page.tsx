import { ArrowRight, Brain, Zap, Shield, Database, Code, BarChart3, MessageSquare, Eye, FileText, Users, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced business intelligence with real-time AI insights and predictive analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,500/month",
      features: ["Real-time data processing", "Predictive analytics", "Custom dashboards", "API integration"],
      path: "/ai-analytics-dashboard-pro"
    },
    {
      title: "AI Content Generation Suite",
      description: "Automated content creation for blogs, social media, and marketing materials",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "Starting at $1,800/month",
      features: ["Multi-language support", "SEO optimization", "Brand voice training", "Content scheduling"],
      path: "/ai-content-generation-pro"
    },
    {
      title: "AI Customer Support Bot",
      description: "Intelligent chatbot with natural language processing and 24/7 availability",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,200/month",
      features: ["Multi-channel support", "Sentiment analysis", "Escalation management", "Analytics dashboard"],
      path: "/ai-customer-support-chatbot"
    },
    {
      title: "AI Cybersecurity Monitor",
      description: "Advanced threat detection and automated security response system",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      price: "Starting at $3,500/month",
      features: ["Real-time monitoring", "Threat intelligence", "Automated response", "Compliance reporting"],
      path: "/ai-cybersecurity-monitor-pro"
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization for developers",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,000/month",
      features: ["Code generation", "Bug detection", "Performance optimization", "Security scanning"],
      path: "/ai-code-assistant-pro"
    },
    {
      title: "AI Computer Vision Solutions",
      description: "Image recognition, object detection, and visual analytics for business applications",
      icon: <Eye className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $2,800/month",
      features: ["Object detection", "Facial recognition", "Quality control", "Custom model training"],
      path: "/ai-computer-vision"
    },
    {
      title: "AI Business Intelligence Pro",
      description: "Advanced data analysis and business insights with machine learning",
      icon: <Database className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $3,200/month",
      features: ["Data mining", "Trend analysis", "Forecasting", "Custom reports"],
      path: "/ai-business-intelligence-pro"
    },
    {
      title: "AI Workflow Automation",
      description: "Intelligent process automation to streamline business operations",
      icon: <Settings className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "Starting at $1,500/month",
      features: ["Process optimization", "Task automation", "Integration management", "Performance tracking"],
      path: "/ai-workflow-automation"
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase productivity by 60%",
    "24/7 automated operations",
    "Real-time insights and analytics",
    "Scalable AI solutions",
    "Custom model training",
    "Enterprise-grade security",
    "Dedicated support team"
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta
          name="description"
          content="Professional AI services including analytics, content generation, cybersecurity, and automation. Transform your business with cutting-edge artificial intelligence solutions."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, business automation, AI analytics, AI content generation, AI cybersecurity"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we provide comprehensive AI services that drive real results.
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
                  <div className="text-center mb-4">
                    <span className="text-cyan-400 font-semibold text-lg">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
                Experience the power of artificial intelligence with our proven solutions and expert support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
                >
                  <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our AI experts to discuss your specific needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
