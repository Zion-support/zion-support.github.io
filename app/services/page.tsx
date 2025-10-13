import { ArrowRight, Cloud, Shield, Code, Smartphone, Database, Globe, Zap, BarChart3, Users, MessageSquare, Eye, FileText, Cpu, Lock, Server, Network, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "AI Analytics & BI", price: "$2,500/month", link: "/ai-analytics" },
        { name: "AI Chatbots", price: "$1,800/month", link: "/ai-chatbot-builder" },
        { name: "Computer Vision", price: "$3,200/month", link: "/ai-computer-vision" },
        { name: "Content Generation", price: "$1,200/month", link: "/ai-content-generation" }
      ]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "Cloud Migration", price: "$5,000/project", link: "/cloud-infrastructure" },
        { name: "Cloud Security", price: "$3,500/month", link: "/cloud-native-security" },
        { name: "Cost Optimization", price: "$2,000/month", link: "/cloud-cost-optimization" },
        { name: "Disaster Recovery", price: "$4,000/month", link: "/disaster-recovery-advanced" }
      ]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security protection for your business",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      services: [
        { name: "Security Assessment", price: "$3,000/assessment", link: "/cybersecurity-solutions" },
        { name: "AI Security Suite", price: "$4,500/month", link: "/ai-cybersecurity-suite" },
        { name: "Compliance Automation", price: "$2,800/month", link: "/compliance-automation" },
        { name: "Security Monitoring", price: "$3,200/month", link: "/security-automation" }
      ]
    },
    {
      title: "Software Development",
      description: "Custom software solutions for your unique needs",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: "Web Development", price: "$8,000/project", link: "/web-development" },
        { name: "Mobile Apps", price: "$12,000/project", link: "/mobile-development" },
        { name: "Custom Software", price: "$15,000/project", link: "/custom-software" },
        { name: "E-commerce Solutions", price: "$10,000/project", link: "/e-commerce-development" }
      ]
    },
    {
      title: "Data & Analytics",
      description: "Turn your data into actionable business insights",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      services: [
        { name: "Data Engineering", price: "$4,000/month", link: "/data-engineering" },
        { name: "Data Visualization", price: "$2,500/month", link: "/data-visualization" },
        { name: "Business Intelligence", price: "$3,500/month", link: "/ai-business-intelligence" },
        { name: "Predictive Analytics", price: "$4,200/month", link: "/ai-analytics" }
      ]
    },
    {
      title: "5G & IoT Solutions",
      description: "Next-generation connectivity and smart solutions",
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      services: [
        { name: "5G Implementation", price: "$25,000/project", link: "/5g-implementation" },
        { name: "IoT Development", price: "$8,000/project", link: "/5g-iot-solutions" },
        { name: "Smart City Solutions", price: "$50,000/project", link: "/5g-smart-city-solutions" },
        { name: "Edge Computing", price: "$15,000/project", link: "/5g-edge-computing" }
      ]
    }
  ];

  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "Advanced business analytics platform with AI-powered insights",
      price: "$299/month",
      link: "/zion-analytics-pro"
    },
    {
      title: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring and protection",
      price: "$199/month",
      link: "/zion-security-shield"
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage and file management solution",
      price: "$149/month",
      link: "/zion-cloud-vault"
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation and management platform",
      price: "$179/month",
      link: "/zion-content-studio"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Professional IT services including AI solutions, cloud infrastructure, cybersecurity, software development, data analytics, and 5G implementation. Contact us at +1 302 464 0950."
        />
        <meta
          name="keywords"
          content="IT services, cloud computing, cybersecurity, software development, data analytics, 5G solutions, AI services, technology consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our full-stack technology solutions. 
              From AI and cloud infrastructure to cybersecurity and 5G implementation, we provide end-to-end IT services.
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
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    {category.description}
                  </p>
                  <div className="space-y-3">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <Link
                          to={service.link}
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                        >
                          {service.name}
                        </Link>
                        <span className="text-gray-300 text-sm">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready-to-Use Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deploy powerful business tools instantly with our pre-built micro SAAS solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-xl font-bold text-cyan-400">{service.price}</span>
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

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and discover how our solutions can accelerate your growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  +1 302 464 0950
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
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
