import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Shield, Zap, Database, Globe, Server, Lock } from "lucide-react";

export default function CloudServices() {
  const services = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure solutions tailored to your business needs.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      features: ["Auto-scaling", "High Availability", "Disaster Recovery", "24/7 Monitoring"]
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration of your applications and data to the cloud with zero downtime.",
      icon: <ArrowRight className="w-8 h-8" />,
      path: "/cloud-migration-advanced",
      features: ["Zero Downtime", "Data Security", "Cost Optimization", "Performance Tuning"]
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cloud-native-security",
      features: ["Identity Management", "Data Encryption", "Threat Detection", "Compliance"]
    },
    {
      title: "Cloud Cost Optimization",
      description: "Optimize your cloud spending with intelligent resource management and cost analysis.",
      icon: <Zap className="w-8 h-8" />,
      path: "/cloud-cost-optimization",
      features: ["Cost Analysis", "Resource Optimization", "Automated Scaling", "Budget Management"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive cloud services including infrastructure, migration, security, and cost optimization solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive cloud solutions. 
                From infrastructure to security, we provide everything you need for cloud success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive cloud solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Cloud Infrastructure?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our cloud experts help you design, implement, and optimize your cloud strategy.
              </p>
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}