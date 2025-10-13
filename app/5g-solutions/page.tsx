import { ArrowRight, Globe, Zap, Shield, Database, Smartphone, Wifi, Building2, Car, Factory } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function FiveGSolutionsPage() {
  const fiveGServices = [
    {
      title: "5G Network Infrastructure",
      description: "Complete 5G network design, deployment, and optimization for maximum performance",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $50,000",
      features: ["Network planning", "Site surveys", "Equipment installation", "Performance optimization"],
      path: "/5g-network-infrastructure"
    },
    {
      title: "5G Data Analytics",
      description: "Advanced analytics platform for 5G network performance monitoring and optimization",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "Starting at $15,000/month",
      features: ["Real-time monitoring", "Predictive analytics", "Performance insights", "Custom dashboards"],
      path: "/5g-data-analytics"
    },
    {
      title: "5G Edge Computing",
      description: "Edge computing solutions for ultra-low latency applications and IoT devices",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "Starting at $25,000",
      features: ["Edge servers", "IoT integration", "Low latency processing", "Distributed computing"],
      path: "/5g-edge-computing"
    },
    {
      title: "5G Mobile Applications",
      description: "Custom mobile applications optimized for 5G networks and high-speed connectivity",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      price: "Starting at $30,000",
      features: ["5G-optimized apps", "AR/VR integration", "Real-time streaming", "Cross-platform"],
      path: "/5g-mobile-applications"
    },
    {
      title: "5G Smart City Solutions",
      description: "Comprehensive smart city infrastructure powered by 5G technology",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $100,000",
      features: ["Smart traffic", "IoT sensors", "Energy management", "Public safety"],
      path: "/5g-smart-city-solutions"
    },
    {
      title: "5G Private Networks",
      description: "Dedicated 5G private networks for enterprise and industrial applications",
      icon: <Shield className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $75,000",
      features: ["Private infrastructure", "Enhanced security", "Custom configuration", "Dedicated support"],
      path: "/5g-private-networks"
    },
    {
      title: "5G Implementation",
      description: "End-to-end 5G implementation services from planning to deployment",
      icon: <Globe className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $40,000",
      features: ["Project management", "Technical consulting", "Testing & validation", "Training"],
      path: "/5g-implementation"
    },
    {
      title: "5G IoT Solutions",
      description: "Internet of Things solutions powered by 5G connectivity and edge computing",
      icon: <Factory className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "Starting at $35,000",
      features: ["IoT sensors", "Data collection", "Real-time processing", "Analytics platform"],
      path: "/5g-iot-solutions"
    }
  ];

  const benefits = [
    "Ultra-low latency (1ms)",
    "High-speed connectivity (10 Gbps)",
    "Massive device connectivity",
    "Enhanced security",
    "Real-time applications",
    "IoT optimization",
    "Edge computing support",
    "Future-proof technology"
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Industrial automation and real-time monitoring",
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: "Healthcare",
      description: "Telemedicine and remote patient monitoring",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Transportation",
      description: "Autonomous vehicles and smart traffic management",
      icon: <Car className="w-6 h-6" />
    },
    {
      title: "Entertainment",
      description: "AR/VR experiences and live streaming",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Next-Generation Connectivity</title>
        <meta
          name="description"
          content="Comprehensive 5G solutions including network infrastructure, edge computing, mobile applications, and smart city implementations. Transform your business with 5G technology."
        />
        <meta
          name="keywords"
          content="5G solutions, 5G network, edge computing, IoT, smart city, mobile applications, 5G implementation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with next-generation 5G connectivity. 
              Ultra-low latency, high-speed data, and massive device connectivity for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get 5G Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* 5G Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our 5G Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G solutions designed to accelerate your digital transformation and enable new business models.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiveGServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                  <div className="text-center mb-4">
                    <span className="text-cyan-400 font-semibold text-lg">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose 5G?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of next-generation connectivity with our comprehensive 5G solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
                >
                  <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                5G Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G technology can transform your industry and enable new possibilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Deploy 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our 5G experts to discuss your specific requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your 5G Journey
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
      </div>
    </>
  );
}
