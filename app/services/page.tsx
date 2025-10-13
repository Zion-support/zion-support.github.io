import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cloud, Shield, Globe, Database, Code, Smartphone, Zap, CheckCircle } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        "AI Strategy & Consulting",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "AI Automation & Workflows",
        "Predictive Analytics"
      ],
      link: "/ai-services"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        "Cloud Migration & Strategy",
        "Multi-Cloud Architecture",
        "Container Orchestration",
        "Serverless Solutions",
        "Cloud Security & Compliance",
        "Cost Optimization"
      ],
      link: "/cloud-infrastructure"
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with advanced security solutions",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      services: [
        "Security Assessment & Auditing",
        "Threat Detection & Response",
        "Identity & Access Management",
        "Data Protection & Encryption",
        "Compliance & Governance",
        "Security Training & Awareness"
      ],
      link: "/cybersecurity-solutions"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      services: [
        "5G Network Implementation",
        "Edge Computing Solutions",
        "IoT Device Management",
        "Smart City Infrastructure",
        "Private 5G Networks",
        "Mobile Application Development"
      ],
      link: "/5g-solutions"
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced analytics",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      services: [
        "Data Strategy & Architecture",
        "Real-time Analytics",
        "Business Intelligence",
        "Data Visualization",
        "Big Data Processing",
        "Data Science & Modeling"
      ],
      link: "/data-analytics"
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions for your unique needs",
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      services: [
        "Web Application Development",
        "Mobile App Development",
        "API Development & Integration",
        "Custom Software Solutions",
        "Legacy System Modernization",
        "Microservices Architecture"
      ],
      link: "/custom-development"
    }
  ];

  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "Advanced business intelligence and analytics platform",
      link: "/zion-analytics-pro"
    },
    {
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring and protection",
      link: "/zion-security-shield"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and file management solution",
      link: "/zion-cloud-vault"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform",
      link: "/zion-content-studio"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, Cloud, Cybersecurity & 5G Solutions</title>
        <meta
          name="description"
          content="Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, 5G implementation, data analytics, and custom development. Transform your business with our expertise."
        />
        <meta
          name="keywords"
          content="AI services, cloud solutions, cybersecurity, 5G implementation, data analytics, custom development, IT consulting, digital transformation"
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
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From AI and machine learning to cloud infrastructure and cybersecurity, we provide end-to-end technology services.
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

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Core Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services designed to meet your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={category.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Products */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready-to-Use Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Micro SAAS products provide immediate value with minimal setup time.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    {product.description}
                  </p>
                  <Link
                    to={product.link}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors"
                  >
                    Explore Product →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understanding your business needs and technical requirements" },
                { step: "02", title: "Strategy", description: "Developing a comprehensive solution architecture and roadmap" },
                { step: "03", title: "Implementation", description: "Building and deploying your solution with agile methodologies" },
                { step: "04", title: "Optimization", description: "Continuous monitoring, maintenance, and performance optimization" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-300">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our services can help you achieve your technology goals and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Project
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
          </div>
        </section>
      </div>
    </>
  );
}
