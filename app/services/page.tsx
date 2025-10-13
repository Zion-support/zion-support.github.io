import { ArrowRight, Brain, Shield, Globe, Database, Code, Smartphone, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "AI Services",
      description: "Transform your business with cutting-edge artificial intelligence solutions.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Micro SAAS Solutions",
      description: "Ready-to-use software solutions for immediate deployment and business growth.",
      icon: <Zap className="w-8 h-8" />,
      path: "/micro-saas",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your business with comprehensive cybersecurity services.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cybersecurity-solutions",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services.",
      icon: <Globe className="w-8 h-8" />,
      path: "/5g-solutions",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable business insights.",
      icon: <Database className="w-8 h-8" />,
      path: "/data-analytics",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Web Development",
      description: "Custom web applications and digital solutions.",
      icon: <Code className="w-8 h-8" />,
      path: "/web-development",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive technology services including AI, cloud infrastructure, cybersecurity, 5G solutions, data analytics, and custom development."
        />
        <meta
          name="keywords"
          content="technology services, AI services, cloud infrastructure, cybersecurity, 5G solutions, data analytics, web development, mobile development"
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
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology services designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
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
                  <p className="text-gray-300 text-center">
                    {service.description}
                  </p>
                </Link>
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
              Join thousands of businesses already using our solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Journey
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
