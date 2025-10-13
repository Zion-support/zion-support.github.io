import { ArrowRight, Brain, Shield, Zap, Globe, Database, Code, Smartphone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "AI Services",
      description: "Comprehensive AI solutions including content generation, chatbots, cybersecurity, and business intelligence",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      path: "/ai-services",
      features: ["Content Generation", "Customer Support Bots", "Cybersecurity AI", "Business Intelligence"]
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for productivity, security, marketing, and development",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      path: "/micro-saas",
      features: ["URL Shortener", "Password Analyzer", "QR Generator", "API Services"]
    },
    {
      title: "IT Services",
      description: "Professional IT services including cloud management, cybersecurity, DevOps, and infrastructure",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      path: "/it-services",
      features: ["Cloud Management", "Cybersecurity", "DevOps", "Network Infrastructure"]
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services for modern businesses",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      path: "/5g-solutions",
      features: ["5G Implementation", "Edge Computing", "IoT Solutions", "Smart City Solutions"]
    },
    {
      title: "Data Analytics",
      description: "Advanced data analysis and business intelligence solutions with real-time insights",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      path: "/data-analytics",
      features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Real-time Reporting"]
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions and mobile applications for your specific business needs",
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      path: "/custom-development",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive technology services including AI solutions, cloud computing, cybersecurity, and digital transformation for modern businesses."
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

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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
                  <p className="text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
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
              Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
