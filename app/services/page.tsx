import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Cloud, 
  Smartphone, 
  Code, 
  BarChart3, 
  Lock, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Clock,
  DollarSign
} from "lucide-react";

export default function Services() {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "Advanced business intelligence and analytics platform with AI-powered insights",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reporting", "API integration"],
      price: "$299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro"
    },
    {
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring and threat detection system",
      features: ["24/7 monitoring", "Threat intelligence", "Incident response", "Compliance reporting"],
      price: "$199/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/zion-security-shield"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and file management with enterprise-grade encryption",
      features: ["End-to-end encryption", "Version control", "Team collaboration", "Backup automation"],
      price: "$149/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      link: "/zion-cloud-vault"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform",
      features: ["AI writing assistant", "Content calendar", "SEO optimization", "Multi-platform publishing"],
      price: "$179/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-content-studio"
    }
  ];

  const aiServices = [
    {
      name: "AI Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform",
      features: ["Machine learning models", "Predictive analytics", "Natural language queries", "Automated reporting"],
      price: "Starting at $2,500/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/ai-business-intelligence-pro"
    },
    {
      name: "AI Customer Support",
      description: "Intelligent chatbots and customer service automation powered by advanced NLP",
      features: ["24/7 chatbot", "Sentiment analysis", "Multi-language support", "Human handoff"],
      price: "Starting at $1,800/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-customer-support"
    },
    {
      name: "AI Content Generation",
      description: "Automated content creation for marketing, documentation, and communications",
      features: ["Blog posts", "Social media content", "Email campaigns", "Technical documentation"],
      price: "Starting at $1,200/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-content-generation-pro"
    },
    {
      name: "AI Cybersecurity Suite",
      description: "Advanced threat detection and response using machine learning algorithms",
      features: ["Behavioral analysis", "Anomaly detection", "Automated response", "Threat hunting"],
      price: "Starting at $3,500/month",
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/ai-cybersecurity-suite-pro"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure",
      description: "Scalable cloud solutions with AWS, Azure, and Google Cloud expertise",
      features: ["Migration services", "Cost optimization", "Security hardening", "24/7 monitoring"],
      price: "Starting at $5,000/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      link: "/cloud-infrastructure"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security services including penetration testing and compliance",
      features: ["Security audits", "Penetration testing", "Compliance consulting", "Incident response"],
      price: "Starting at $3,000/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/cybersecurity-solutions"
    },
    {
      name: "Web Development",
      description: "Modern web applications with React, Next.js, and cutting-edge technologies",
      features: ["Responsive design", "Performance optimization", "SEO optimization", "Maintenance"],
      price: "Starting at $2,500/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      link: "/web-development"
    },
    {
      name: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["Native development", "Cross-platform apps", "App store optimization", "Push notifications"],
      price: "Starting at $4,000/month",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      link: "/mobile-development"
    }
  ];

  const fiveGServices = [
    {
      name: "5G Network Implementation",
      description: "Complete 5G infrastructure deployment and optimization services",
      features: ["Network planning", "Equipment installation", "Performance tuning", "Monitoring"],
      price: "Starting at $50,000",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/5g-implementation"
    },
    {
      name: "5G Edge Computing",
      description: "Edge computing solutions for ultra-low latency applications",
      features: ["Edge deployment", "Latency optimization", "Real-time processing", "IoT integration"],
      price: "Starting at $25,000",
      icon: <Zap className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      link: "/5g-edge-computing"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services, IT solutions, and micro SAAS platforms. Transform your business with cutting-edge technology and innovative solutions."
        />
        <meta
          name="keywords"
          content="AI services, IT solutions, micro SAAS, cloud computing, cybersecurity, web development, mobile apps, 5G implementation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From AI-powered insights to enterprise-grade infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
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

        {/* Micro SAAS Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions for immediate deployment. No setup required, start using today.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
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

        {/* AI Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations and decision-making.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                        <Link
                          to={service.link}
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions for modern businesses. From cloud infrastructure to custom development.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                        <Link
                          to={service.link}
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5G Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                5G Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Next-generation connectivity and infrastructure services for the future of business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fiveGServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                        <Link
                          to={service.link}
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and discover how our solutions can accelerate your growth.
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
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
