import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Cloud, 
  Code, 
  Smartphone, 
  ArrowRight, 
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Lock,
  Cpu,
  BarChart3,
  MessageSquare,
  FileText,
  Settings,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Clock,
  DollarSign
} from "lucide-react";

export default function Services() {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "Advanced business intelligence and data visualization platform with AI-powered insights",
      price: "$99/month",
      features: ["Real-time dashboards", "AI predictions", "Custom reports", "API integration"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro"
    },
    {
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring and threat detection for small to medium businesses",
      price: "$149/month",
      features: ["24/7 monitoring", "Threat detection", "Compliance reporting", "Incident response"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/zion-security-shield"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and backup solution with enterprise-grade encryption",
      price: "$79/month",
      features: ["Unlimited storage", "End-to-end encryption", "Version control", "Team collaboration"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      link: "/zion-cloud-vault"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform for marketing teams",
      price: "$129/month",
      features: ["AI writing assistant", "Content calendar", "SEO optimization", "Multi-platform publishing"],
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-content-studio"
    },
    {
      name: "Zion Data Sync",
      description: "Automated data synchronization and integration across multiple platforms",
      price: "$89/month",
      features: ["Real-time sync", "Data transformation", "Error handling", "Custom connectors"],
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      link: "/zion-data-sync"
    },
    {
      name: "Zion Lead Magnet",
      description: "Lead generation and nurturing platform with AI-powered lead scoring",
      price: "$119/month",
      features: ["Lead capture forms", "Email automation", "Lead scoring", "CRM integration"],
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/zion-lead-magnet"
    }
  ];

  const aiServices = [
    {
      name: "AI-Powered Chatbots",
      description: "Intelligent conversational AI solutions for customer service and support",
      price: "Starting at $299/month",
      features: ["Natural language processing", "Multi-language support", "Integration APIs", "Analytics dashboard"],
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Machine Learning Models",
      description: "Custom ML models for predictive analytics, recommendation systems, and automation",
      price: "Starting at $499/month",
      features: ["Custom model development", "Data preprocessing", "Model training", "Deployment support"],
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Computer Vision Solutions",
      description: "Image and video analysis solutions for quality control, security, and automation",
      price: "Starting at $399/month",
      features: ["Object detection", "Image classification", "Video analytics", "Real-time processing"],
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Natural Language Processing",
      description: "Text analysis and language understanding solutions for content and communication",
      price: "Starting at $249/month",
      features: ["Sentiment analysis", "Text classification", "Language translation", "Content moderation"],
      icon: <FileText className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure",
      description: "Scalable cloud solutions with AWS, Azure, and Google Cloud expertise",
      price: "Starting at $199/month",
      features: ["Cloud migration", "Infrastructure setup", "Monitoring & maintenance", "Cost optimization"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security services including penetration testing and compliance",
      price: "Starting at $399/month",
      features: ["Security audits", "Penetration testing", "Compliance management", "Incident response"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Web Development",
      description: "Modern web applications with React, Next.js, and full-stack development",
      price: "Starting at $149/hour",
      features: ["Responsive design", "Performance optimization", "SEO optimization", "Maintenance support"],
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      price: "Starting at $179/hour",
      features: ["Native development", "Cross-platform apps", "App store optimization", "Push notifications"],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Database Management",
      description: "Database design, optimization, and management services",
      price: "Starting at $129/hour",
      features: ["Database design", "Performance tuning", "Backup & recovery", "Migration services"],
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "5G Implementation",
      description: "Next-generation 5G network infrastructure and IoT solutions",
      price: "Starting at $999/month",
      features: ["5G network design", "IoT integration", "Edge computing", "Performance monitoring"],
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const benefits = [
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Grow with your business needs",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security and compliance",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Proven Results",
      description: "98% client satisfaction rate",
      icon: <Award className="w-6 h-6" />
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
                Ready-to-use software solutions for immediate deployment. No setup required, start using today.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
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
                Cutting-edge artificial intelligence solutions to transform your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                  <div className="text-center mb-4">
                    <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
                Comprehensive technology solutions for modern businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                  <div className="text-center mb-4">
                    <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional value and results for our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
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
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
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