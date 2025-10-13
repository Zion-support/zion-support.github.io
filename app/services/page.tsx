import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Code, 
  Smartphone, 
  Cloud, 
  Lock, 
  BarChart3, 
  Users, 
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  DollarSign
} from "lucide-react";

export default function Services() {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "Advanced business intelligence and analytics platform with real-time dashboards, predictive analytics, and automated reporting.",
      features: ["Real-time dashboards", "Predictive analytics", "Automated reports", "Custom metrics", "API integration"],
      price: "$99/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro"
    },
    {
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring and threat detection system with 24/7 monitoring and automated incident response.",
      features: ["24/7 monitoring", "Threat detection", "Automated response", "Compliance reporting", "Security audits"],
      price: "$149/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/zion-security-shield"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and backup solution with enterprise-grade encryption and automated backup scheduling.",
      features: ["Enterprise encryption", "Automated backups", "Version control", "Team collaboration", "99.9% uptime"],
      price: "$79/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      link: "/zion-cloud-vault"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform with automated writing, SEO optimization, and social media scheduling.",
      features: ["AI content generation", "SEO optimization", "Social scheduling", "Brand consistency", "Analytics"],
      price: "$129/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-content-studio"
    },
    {
      name: "Zion Data Sync",
      description: "Real-time data synchronization and integration platform connecting all your business applications seamlessly.",
      features: ["Real-time sync", "API integrations", "Data transformation", "Error handling", "Monitoring"],
      price: "$89/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      link: "/zion-data-sync"
    },
    {
      name: "Zion Lead Magnet",
      description: "Advanced lead generation and CRM platform with automated follow-ups, lead scoring, and conversion tracking.",
      features: ["Lead scoring", "Automated follow-ups", "CRM integration", "Conversion tracking", "A/B testing"],
      price: "$119/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/zion-lead-magnet"
    }
  ];

  const aiServices = [
    {
      name: "AI-Powered Analytics",
      description: "Machine learning algorithms that analyze your data to provide actionable insights and predictions.",
      features: ["Predictive modeling", "Pattern recognition", "Automated insights", "Custom algorithms", "Real-time analysis"],
      price: "Starting at $299/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "AI Content Generation",
      description: "Advanced AI models for creating high-quality content, including articles, social media posts, and marketing copy.",
      features: ["Content creation", "SEO optimization", "Brand voice", "Multi-language", "Quality assurance"],
      price: "Starting at $199/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "AI Customer Support",
      description: "Intelligent chatbots and virtual assistants that provide 24/7 customer support with natural language processing.",
      features: ["24/7 availability", "Natural language", "Multi-channel", "Learning capability", "Human handoff"],
      price: "Starting at $249/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-teal-500"
    },
    {
      name: "AI Cybersecurity",
      description: "Advanced threat detection and prevention using machine learning to identify and stop cyber attacks in real-time.",
      features: ["Threat detection", "Behavioral analysis", "Automated response", "Learning algorithms", "Compliance"],
      price: "Starting at $399/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure",
      description: "Complete cloud migration, setup, and management services for AWS, Azure, and Google Cloud platforms.",
      features: ["Cloud migration", "Infrastructure setup", "Monitoring", "Security", "Cost optimization"],
      price: "Starting at $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security assessment, implementation, and ongoing monitoring to protect your digital assets.",
      features: ["Security audits", "Penetration testing", "Firewall setup", "Monitoring", "Incident response"],
      price: "Starting at $1,800/month",
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Web Development",
      description: "Custom web applications, e-commerce solutions, and responsive websites built with modern technologies.",
      features: ["Custom development", "Responsive design", "E-commerce", "CMS integration", "Performance optimization"],
      price: "Starting at $3,000/project",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.",
      features: ["Native apps", "Cross-platform", "UI/UX design", "App store deployment", "Maintenance"],
      price: "Starting at $4,000/project",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Database Management",
      description: "Database design, optimization, migration, and ongoing maintenance for optimal performance and security.",
      features: ["Database design", "Performance tuning", "Migration", "Backup solutions", "Monitoring"],
      price: "Starting at $1,200/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "5G Solutions",
      description: "5G network implementation, optimization, and IoT solutions for next-generation connectivity.",
      features: ["5G implementation", "IoT solutions", "Network optimization", "Edge computing", "Smart city solutions"],
      price: "Starting at $5,000/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta
          name="description"
          content="Comprehensive technology services including AI solutions, IT services, and micro SAAS platforms. Transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="AI services, IT solutions, micro SAAS, cloud computing, cybersecurity, web development, mobile apps, 5G solutions"
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
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
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
                Ready-to-use software solutions that can be deployed immediately to solve specific business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-4">
                      {service.price}
                    </div>
                    <Link
                      to={service.link}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
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
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions to automate processes and gain competitive advantages.
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
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-4">
                      {service.price}
                    </div>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 inline-flex items-center"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
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
                IT Services & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services to build, maintain, and optimize your technology infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-4">
                      {service.price}
                    </div>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 inline-flex items-center"
                    >
                      Contact Us
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your project and get a customized solution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical support</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">Track record of successful implementations</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Phone</h4>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Email</h4>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Address</h4>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
