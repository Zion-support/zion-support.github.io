import { ArrowRight, Brain, Zap, Shield, Database, Code, Smartphone, Globe, DollarSign, CheckCircle, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIServices() {
  const aiServices = [
    {
      title: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation for blogs, social media, and marketing materials",
      features: ["Multi-language support", "SEO optimization", "Brand voice training", "Content scheduling"],
      pricing: "Starting at $29/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      path: "/ai-content-generator",
      popular: true
    },
    {
      title: "AI Customer Support Bot",
      description: "Intelligent chatbot solution with natural language processing and 24/7 availability",
      features: ["Multi-channel support", "Sentiment analysis", "Escalation management", "Analytics dashboard"],
      pricing: "Starting at $49/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      path: "/ai-customer-support-bot"
    },
    {
      title: "AI Cybersecurity Monitor",
      description: "Real-time threat detection and automated security response system",
      features: ["Threat intelligence", "Automated response", "Compliance monitoring", "Incident reporting"],
      pricing: "Starting at $99/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      path: "/ai-cybersecurity-monitor"
    },
    {
      title: "AI Business Intelligence",
      description: "Advanced analytics and predictive insights for data-driven decision making",
      features: ["Predictive analytics", "Custom dashboards", "Real-time reporting", "Data visualization"],
      pricing: "Starting at $79/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      path: "/ai-business-intelligence"
    },
    {
      title: "AI Code Assistant",
      description: "Intelligent coding companion with code generation, review, and optimization",
      features: ["Code generation", "Bug detection", "Performance optimization", "Multi-language support"],
      pricing: "Starting at $39/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      path: "/ai-code-assistant"
    },
    {
      title: "AI Mobile App Builder",
      description: "No-code mobile app development with AI-powered design and functionality",
      features: ["Drag-and-drop builder", "AI design suggestions", "Cross-platform", "App store deployment"],
      pricing: "Starting at $59/month",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      path: "/ai-mobile-app-builder"
    },
    {
      title: "AI Document Processor",
      description: "Intelligent document analysis, extraction, and automated processing",
      features: ["OCR technology", "Data extraction", "Document classification", "Workflow automation"],
      pricing: "Starting at $69/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      path: "/ai-document-processor"
    },
    {
      title: "AI Financial Advisor",
      description: "Personalized financial planning and investment recommendations powered by AI",
      features: ["Portfolio analysis", "Risk assessment", "Market predictions", "Tax optimization"],
      pricing: "Starting at $89/month",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      path: "/ai-financial-advisor"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI services including content generation, customer support, cybersecurity, business intelligence, and more. Transform your business with cutting-edge artificial intelligence solutions."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, chatbot, content generation, cybersecurity AI, business intelligence, code assistant"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI services. From content generation to cybersecurity, 
              we provide intelligent solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
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
                Choose from our comprehensive range of AI-powered solutions designed to meet your specific business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${
                    service.popular ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
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
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link
                      to={service.path}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
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
              Contact us today to discuss how our AI services can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Contact Us Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}