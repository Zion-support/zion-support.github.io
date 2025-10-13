import { ArrowRight, CheckCircle, Star, Zap, Shield, Brain, Globe, Code, Database, Cloud, Smartphone, Lock, BarChart3, Users, Settings, Target, TrendingUp, Award, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const aiServices = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Transform your data into actionable insights with our advanced AI analytics platform. Real-time processing, predictive modeling, and automated reporting.",
      features: ["Real-time data processing", "Predictive analytics", "Automated reporting", "Custom dashboards", "API integration"],
      price: "$299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-analytics-dashboard-pro"
    },
    {
      title: "AI Content Generation Suite",
      description: "Create high-quality content at scale with our AI-powered content generation tools. Blog posts, social media, marketing copy, and more.",
      features: ["Multi-format content", "SEO optimization", "Brand voice training", "Bulk generation", "Quality scoring"],
      price: "$199/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/ai-content-generation-pro"
    },
    {
      title: "AI Customer Support Bot",
      description: "Deploy intelligent chatbots that understand context and provide human-like customer support 24/7.",
      features: ["Natural language processing", "Multi-language support", "Integration with CRM", "Escalation management", "Analytics dashboard"],
      price: "$149/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-customer-support-chatbot"
    },
    {
      title: "AI Cybersecurity Monitor",
      description: "Advanced threat detection and response system powered by machine learning algorithms.",
      features: ["Real-time threat detection", "Automated response", "Behavioral analysis", "Compliance reporting", "24/7 monitoring"],
      price: "$399/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/ai-cybersecurity-monitor-pro"
    }
  ];

  const itServices = [
    {
      title: "Cloud Infrastructure Management",
      description: "Complete cloud migration, optimization, and management services for AWS, Azure, and Google Cloud.",
      features: ["Cloud migration", "Cost optimization", "Security hardening", "Auto-scaling", "24/7 monitoring"],
      price: "Starting at $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      link: "/cloud-infrastructure"
    },
    {
      title: "Custom Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      features: ["React/Next.js development", "Mobile-first design", "SEO optimization", "Performance tuning", "Maintenance support"],
      price: "Starting at $5,000/project",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      link: "/web-development"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.",
      features: ["iOS & Android apps", "Cross-platform solutions", "App store optimization", "Push notifications", "Analytics integration"],
      price: "Starting at $8,000/project",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      link: "/mobile-development"
    },
    {
      title: "Database Management & Optimization",
      description: "Expert database design, optimization, and management services for improved performance and reliability.",
      features: ["Database design", "Performance tuning", "Backup strategies", "Security hardening", "Migration services"],
      price: "Starting at $1,500/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/database-management"
    }
  ];

  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "Advanced business intelligence platform with real-time analytics, custom dashboards, and automated insights.",
      features: ["Real-time analytics", "Custom dashboards", "Automated reports", "Data visualization", "API access"],
      price: "$99/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      link: "/zion-analytics-pro"
    },
    {
      title: "Zion Security Shield",
      description: "Comprehensive security monitoring and threat protection for small to medium businesses.",
      features: ["Threat monitoring", "Vulnerability scanning", "Incident response", "Compliance reporting", "Security training"],
      price: "$79/month",
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/zion-security-shield"
    },
    {
      title: "Zion Content Studio",
      description: "All-in-one content creation and management platform with AI-powered tools and collaboration features.",
      features: ["Content calendar", "AI writing assistant", "Team collaboration", "Brand guidelines", "Publishing automation"],
      price: "$59/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      link: "/zion-content-studio"
    },
    {
      title: "Zion Project Master",
      description: "Complete project management solution with time tracking, resource management, and team collaboration tools.",
      features: ["Project planning", "Time tracking", "Resource management", "Team collaboration", "Progress reporting"],
      price: "$49/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-project-master"
    }
  ];

  const fiveGServices = [
    {
      title: "5G Network Infrastructure",
      description: "Complete 5G network design, deployment, and optimization services for enterprise and smart city applications.",
      features: ["Network design", "Infrastructure deployment", "Performance optimization", "Security implementation", "Maintenance support"],
      price: "Starting at $50,000/project",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/5g-network-infrastructure"
    },
    {
      title: "5G Edge Computing Solutions",
      description: "Deploy edge computing infrastructure to leverage 5G's low latency for real-time applications and IoT devices.",
      features: ["Edge infrastructure", "IoT integration", "Real-time processing", "Data analytics", "Scalable architecture"],
      price: "Starting at $25,000/project",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/5g-edge-computing"
    },
    {
      title: "5G Smart City Solutions",
      description: "Comprehensive smart city infrastructure powered by 5G technology for traffic management, utilities, and public services.",
      features: ["Traffic management", "Utility monitoring", "Public safety", "Environmental sensors", "Data analytics"],
      price: "Starting at $100,000/project",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/5g-smart-city-solutions"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services, IT solutions, micro SAAS platforms, and 5G technology services. Transform your business with cutting-edge technology solutions."
        />
        <meta
          name="keywords"
          content="AI services, IT solutions, micro SAAS, 5G technology, cloud computing, web development, mobile apps, cybersecurity, business intelligence"
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
              From AI-powered analytics to 5G infrastructure, we deliver cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
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

        {/* AI Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Brain className="w-10 h-10 mr-3 text-cyan-400" />
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations and gain competitive advantages.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
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
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 text-sm">
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

        {/* IT Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Settings className="w-10 h-10 mr-3 text-purple-400" />
                IT Solutions & Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete technology infrastructure and development services to modernize your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
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
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 text-sm">
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
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                  </div>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Zap className="w-10 h-10 mr-3 text-green-400" />
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions that can be deployed immediately to solve specific business challenges.
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
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 text-sm">
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
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5G Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Globe className="w-10 h-10 mr-3 text-blue-400" />
                5G Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Next-generation connectivity solutions powered by 5G technology for ultra-fast, low-latency applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiveGServices.map((service, index) => (
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
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 text-sm">
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
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                  </div>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and discover how our solutions can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                Call: +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
