import { ArrowRight, Brain, Zap, Shield, Globe, Database, Code, Smartphone, BarChart3, Users, MessageSquare, Eye, FileText, Cpu, Lock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform. Get real-time dashboards, predictive analytics, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "Starting at $2,500/month",
      features: ["Real-time data processing", "Predictive analytics", "Custom dashboards", "Automated reporting"],
      color: "from-blue-500 to-cyan-500",
      link: "/ai-analytics"
    },
    {
      title: "AI Chatbot & Conversational AI",
      description: "Build intelligent chatbots that understand context, handle complex queries, and provide 24/7 customer support with natural language processing.",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "Starting at $1,800/month",
      features: ["Natural language processing", "Multi-language support", "Integration APIs", "Analytics dashboard"],
      color: "from-green-500 to-emerald-500",
      link: "/ai-chatbot-builder"
    },
    {
      title: "Computer Vision & Image Recognition",
      description: "Implement advanced computer vision solutions for object detection, facial recognition, quality control, and automated image analysis.",
      icon: <Eye className="w-8 h-8" />,
      price: "Starting at $3,200/month",
      features: ["Object detection", "Facial recognition", "Quality control", "Real-time processing"],
      color: "from-purple-500 to-pink-500",
      link: "/ai-computer-vision"
    },
    {
      title: "AI Content Generation",
      description: "Create high-quality content at scale with our AI-powered content generation platform. Generate articles, social media posts, and marketing copy.",
      icon: <FileText className="w-8 h-8" />,
      price: "Starting at $1,200/month",
      features: ["Multi-format content", "SEO optimization", "Brand voice training", "Content scheduling"],
      color: "from-orange-500 to-red-500",
      link: "/ai-content-generation"
    },
    {
      title: "AI Cybersecurity Suite",
      description: "Protect your business with AI-powered threat detection, automated security monitoring, and intelligent incident response systems.",
      icon: <Shield className="w-8 h-8" />,
      price: "Starting at $4,500/month",
      features: ["Threat detection", "Automated response", "Security analytics", "Compliance monitoring"],
      color: "from-red-500 to-pink-500",
      link: "/ai-cybersecurity-suite"
    },
    {
      title: "AI Customer Insights",
      description: "Understand your customers better with AI-powered sentiment analysis, churn prediction, and personalized recommendation engines.",
      icon: <Users className="w-8 h-8" />,
      price: "Starting at $2,800/month",
      features: ["Sentiment analysis", "Churn prediction", "Personalization", "Customer segmentation"],
      color: "from-indigo-500 to-purple-500",
      link: "/ai-customer-insights"
    },
    {
      title: "AI Code Assistant",
      description: "Accelerate development with AI-powered code generation, debugging assistance, and automated testing solutions for your development team.",
      icon: <Code className="w-8 h-8" />,
      price: "Starting at $1,500/month",
      features: ["Code generation", "Debug assistance", "Test automation", "Code review"],
      color: "from-teal-500 to-cyan-500",
      link: "/ai-code-assistant"
    },
    {
      title: "AI Document Processing",
      description: "Automate document processing with intelligent data extraction, classification, and workflow automation for your business documents.",
      icon: <FileText className="w-8 h-8" />,
      price: "Starting at $2,200/month",
      features: ["Data extraction", "Document classification", "Workflow automation", "OCR processing"],
      color: "from-yellow-500 to-orange-500",
      link: "/ai-document-processing"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive AI services including analytics, chatbots, computer vision, content generation, and cybersecurity solutions. Starting from $1,200/month."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, chatbot development, computer vision, AI analytics, business intelligence, AI consulting"
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
              From analytics to automation, we provide comprehensive AI services that drive growth and innovation.
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
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
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
                Comprehensive AI solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
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
              Contact us today for a free AI consultation and discover how our solutions can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your AI Journey
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
