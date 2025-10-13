import { ArrowRight, Brain, Shield, Zap, Globe, Database, Code, Smartphone, Cloud, Lock, BarChart3, Users, Settings, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "Advanced business intelligence and analytics platform with real-time dashboards",
      price: "$99/month",
      features: ["Real-time analytics", "Custom dashboards", "Data visualization", "API integration"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro"
    },
    {
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring and threat detection system",
      price: "$149/month",
      features: ["24/7 monitoring", "Threat detection", "Vulnerability scanning", "Incident response"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/zion-security-shield"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and backup solution with enterprise-grade encryption",
      price: "$79/month",
      features: ["Unlimited storage", "End-to-end encryption", "Automated backups", "File sharing"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      link: "/zion-cloud-vault"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform",
      price: "$129/month",
      features: ["AI content generation", "Multi-platform publishing", "Content scheduling", "Analytics"],
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-content-studio"
    },
    {
      name: "Zion Data Sync",
      description: "Automated data synchronization across multiple platforms and databases",
      price: "$89/month",
      features: ["Real-time sync", "Multiple connectors", "Data transformation", "Error handling"],
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      link: "/zion-data-sync"
    },
    {
      name: "Zion Lead Magnet",
      description: "Lead generation and customer acquisition automation platform",
      price: "$199/month",
      features: ["Lead scoring", "Email automation", "CRM integration", "A/B testing"],
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/zion-lead-magnet"
    }
  ];

  const aiServices = [
    {
      name: "AI Content Generation",
      description: "Advanced AI-powered content creation for blogs, social media, and marketing",
      price: "Starting at $299/month",
      features: ["Natural language processing", "Multi-language support", "Brand voice training", "Content optimization"],
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "AI Customer Support",
      description: "Intelligent chatbot and customer service automation",
      price: "Starting at $399/month",
      features: ["24/7 availability", "Multi-language support", "Sentiment analysis", "Human handoff"],
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-teal-500"
    },
    {
      name: "AI Data Analytics",
      description: "Machine learning-powered business intelligence and predictive analytics",
      price: "Starting at $499/month",
      features: ["Predictive modeling", "Pattern recognition", "Automated insights", "Custom algorithms"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "AI Cybersecurity",
      description: "AI-driven threat detection and security automation",
      price: "Starting at $599/month",
      features: ["Behavioral analysis", "Anomaly detection", "Automated response", "Threat intelligence"],
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure",
      description: "Complete cloud migration and infrastructure management",
      price: "Starting at $2,999/month",
      features: ["AWS/Azure/GCP expertise", "Auto-scaling", "Disaster recovery", "24/7 monitoring"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Web Development",
      description: "Custom web applications and e-commerce solutions",
      price: "Starting at $1,999/month",
      features: ["Responsive design", "SEO optimization", "Performance tuning", "Security hardening"],
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      price: "Starting at $2,499/month",
      features: ["iOS & Android", "Cross-platform", "App store optimization", "Push notifications"],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security assessment and implementation",
      price: "Starting at $3,999/month",
      features: ["Security audit", "Penetration testing", "Compliance", "Incident response"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services, IT solutions, and micro SAAS platforms. Transform your business with cutting-edge technology from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI services, IT solutions, micro SAAS, cloud computing, cybersecurity, web development, mobile apps, business automation"
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
                Ready-to-use software solutions for immediate deployment and instant value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
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
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
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
                Artificial intelligence solutions to automate and optimize your business processes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
