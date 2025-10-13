import { ArrowRight, Brain, Zap, Shield, Database, Code, BarChart3, MessageSquare, Eye, FileText, Users, Settings, CheckCircle, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI Analytics & Business Intelligence",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Get real-time dashboards, predictive analytics, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      path: "/ai-analytics",
      price: "Starting at $2,999/month",
      features: ["Real-time dashboards", "Predictive analytics", "Automated reporting", "Custom data models"]
    },
    {
      title: "AI Automation & Workflow",
      description: "Streamline your business processes with intelligent automation. Reduce manual work by up to 80% with our AI-powered workflow solutions.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      path: "/ai-automation",
      price: "Starting at $1,999/month",
      features: ["Process automation", "Smart workflows", "ROI optimization", "Custom integrations"]
    },
    {
      title: "AI Cybersecurity Suite",
      description: "Protect your digital assets with our AI-powered cybersecurity solutions. Advanced threat detection, automated response, and 24/7 monitoring.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      path: "/ai-cybersecurity",
      price: "Starting at $3,499/month",
      features: ["Threat detection", "Automated response", "24/7 monitoring", "Compliance management"]
    },
    {
      title: "AI Content Generation",
      description: "Create high-quality content at scale with our AI content studio. Generate blogs, social media posts, marketing copy, and technical documentation.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      path: "/ai-content-generation",
      price: "Starting at $799/month",
      features: ["Multi-format content", "SEO optimization", "Brand voice training", "Content scheduling"]
    },
    {
      title: "AI Customer Support",
      description: "Enhance customer experience with intelligent chatbots and virtual assistants. 24/7 support with human-like interactions and seamless escalation.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      path: "/ai-customer-support",
      price: "Starting at $1,499/month",
      features: ["Intelligent chatbots", "Multi-language support", "Sentiment analysis", "Live agent handoff"]
    },
    {
      title: "AI Computer Vision",
      description: "Extract insights from images and videos with our computer vision solutions. Quality control, object detection, and visual analytics for your business.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      path: "/ai-computer-vision",
      price: "Starting at $2,299/month",
      features: ["Object detection", "Quality control", "Visual analytics", "Real-time processing"]
    },
    {
      title: "AI Data Processing",
      description: "Process and analyze large datasets with our AI-powered data engineering solutions. Clean, transform, and extract insights from complex data structures.",
      icon: <Database className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      path: "/ai-data-analytics",
      price: "Starting at $2,799/month",
      features: ["Data cleaning", "ETL pipelines", "Real-time processing", "Custom algorithms"]
    },
    {
      title: "AI Code Assistant",
      description: "Accelerate development with our AI-powered coding assistant. Code generation, debugging, optimization, and automated testing for faster delivery.",
      icon: <Code className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      path: "/ai-code-assistant",
      price: "Starting at $1,299/month",
      features: ["Code generation", "Bug detection", "Performance optimization", "Auto-testing"]
    }
  ];

  const benefits = [
    {
      title: "Proven ROI",
      description: "Average 300% ROI within 6 months",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Custom Solutions",
      description: "Tailored to your specific business needs",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive AI services. From analytics to automation, cybersecurity to content generation - we deliver cutting-edge AI solutions that drive real results."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI cybersecurity, AI content generation, business intelligence"
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
              From analytics to automation, we deliver AI-powered tools that drive real results and measurable ROI.
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

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with deep industry expertise to deliver solutions that actually work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
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

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address every aspect of your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-cyan-400 font-semibold text-lg">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
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
              Join 500+ companies already using our AI solutions to drive growth and innovation.
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
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
