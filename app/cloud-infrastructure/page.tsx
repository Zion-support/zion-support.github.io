import React from "react";
import { Helmet } from "react-helmet-async";
import { Right, Star, Cloud, Shield, Zap, BarChart3, Server, Database, Globe, Lock } from "lucide-react";
import FuturisticBackground from "../components/FuturisticBackground";

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud with minimal downtime.",
      features: ["AWS, Azure, GCP expertise", "Zero-downtime migration", "Data security", "Cost optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Infrastructure Setup",
      description: "Design and implement scalable cloud infrastructure tailored to your business needs.",
      features: ["Auto-scaling", "Load balancing", "High availability", "Disaster recovery"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
      features: ["Identity management", "Encryption", "Compliance monitoring", "Threat detection"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Optimize and manage your databases in the cloud for maximum performance.",
      features: ["Database migration", "Performance tuning", "Backup & recovery", "Monitoring"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your cloud infrastructure for maximum performance and cost efficiency.",
      features: ["Resource optimization", "Cost analysis", "Performance monitoring", "Auto-scaling"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Deploy your applications globally with our multi-region cloud solutions.",
      features: ["Multi-region setup", "CDN integration", "Global load balancing", "Edge computing"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const benefits = [
    "Scalable Infrastructure",
    "Cost Optimization",
    "Enhanced Security",
    "24/7 Monitoring",
    "Global Reach",
    "Disaster Recovery"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure services including migration, setup, security, and optimization." />
        <meta name="keywords" content="cloud infrastructure, cloud services, IT services, cloud migration, cloud security" />
      </Helmet>
      
      <FuturisticBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Cloud Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced cloud infrastructure solutions designed for scalability, security, and performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                Get Started
                <Right className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Cloud Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-gray-500 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                          <Star className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Our Cloud Infrastructure?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our cloud experts help you build a robust, scalable, and secure infrastructure for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
                Start Your Cloud Journey
                <Right className="w-5 h-5" />
              </button>
              <button className="px-10 py-4 border border-gray-600 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CloudInfrastructurePage;