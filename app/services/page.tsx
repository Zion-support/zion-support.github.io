import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Code, Database, Smartphone, Globe, Shield, BarChart3, Users, Award, Clock, Phone, Mail, MapPin, Cloud, Lock, Wifi, Monitor, HardDrive, Layers, MessageSquare, Eye, FileText, Network } from "lucide-react";

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: "ai-solutions",
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions to transform your business",
      icon: <Code className="w-8 h-8" />,
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      pricing: "Custom"
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat Detection", "Vulnerability Assessment", "Security Audits", "Incident Response"],
      pricing: "From $2,999/month"
    },
    {
      id: "cloud-infrastructure",
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses",
      icon: <Cloud className="w-8 h-8" />,
      features: ["AWS/Azure/GCP", "Migration Services", "Cost Optimization", "24/7 Monitoring"],
      pricing: "From $1,999/month"
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Modern, responsive web applications built with latest technologies",
      icon: <Globe className="w-8 h-8" />,
      features: ["React/Next.js", "Node.js", "Database Design", "API Development"],
      pricing: "From $5,999/project"
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["iOS/Android", "React Native", "Flutter", "App Store Optimization"],
      pricing: "From $8,999/project"
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      description: "Transform your data into actionable business insights",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Business Intelligence", "Data Visualization", "ETL Processes", "Real-time Dashboards"],
      pricing: "From $3,999/month"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "25+" }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including cybersecurity, cloud infrastructure, web development, and data analytics." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud infrastructure, web development, mobile development, data analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold text-lg">
                    {service.pricing}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you transform your business with our cutting-edge solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Get a Quote
                </button>
                <button className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
