import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  Cloud, 
  Shield, 
  Zap, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Users,
  Globe,
  Database,
  Server,
  Lock
} from "lucide-react";
import { Link } from "react-router-dom";

const CloudServicesPage = () => {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale your infrastructure up or down based on demand"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade security with advanced threat protection"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliability",
      description: "99.9% uptime guarantee with redundant systems"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized performance with global content delivery"
    }
  ];

  const services = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with zero downtime",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Assessment & Planning", "Data Migration", "Application Migration", "Testing & Validation"]
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions for cloud environments",
      icon: <Shield className="w-8 h-8" />,
      features: ["Identity Management", "Data Encryption", "Threat Detection", "Compliance"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Managed cloud infrastructure for optimal performance",
      icon: <Server className="w-8 h-8" />,
      features: ["Infrastructure Design", "Monitoring", "Backup & Recovery", "24/7 Support"]
    },
    {
      title: "Cloud Storage",
      description: "Secure and scalable cloud storage solutions",
      icon: <Database className="w-8 h-8" />,
      features: ["Data Storage", "File Sharing", "Backup Solutions", "Disaster Recovery"]
    }
  ];

  const benefits = [
    "Reduced IT costs by up to 40%",
    "Improved scalability and flexibility",
    "Enhanced security and compliance",
    "24/7 monitoring and support",
    "Faster time to market",
    "Global accessibility"
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Enterprise Cloud Solutions</title>
        <meta name="description" content="Comprehensive cloud services including migration, security, storage, and infrastructure management. Transform your business with our enterprise cloud solutions." />
        <meta name="keywords" content="cloud services, cloud migration, cloud security, cloud infrastructure, AWS, Azure, Google Cloud" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Cloud Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud services. From migration to management, 
              we provide end-to-end cloud solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive cloud solutions that help businesses scale, secure, and optimize their operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions tailored to your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our cloud services can transform your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud experts help you migrate, secure, and optimize your infrastructure for maximum performance and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Your Cloud Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
};

export default CloudServicesPage;