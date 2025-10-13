import React from "react";
import { Link } from "react-router-dom";
import { Cloud, Shield, Zap, BarChart3, TrendingUp, CheckCircle, ArrowRight, Users, Award, Clock } from "lucide-react";

const CloudServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.",
      features: [
        "Assessment and planning",
        "Data migration strategies",
        "Application modernization",
        "Post-migration optimization"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
      features: [
        "Identity and access management",
        "Data encryption and protection",
        "Threat detection and response",
        "Compliance and governance"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cloud Optimization",
      description: "Optimize your cloud resources for better performance and cost efficiency.",
      features: [
        "Cost analysis and optimization",
        "Performance monitoring",
        "Auto-scaling implementation",
        "Resource right-sizing"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Cloud Analytics",
      description: "Leverage cloud-based analytics to gain insights from your data.",
      features: [
        "Data warehousing solutions",
        "Real-time analytics",
        "Machine learning integration",
        "Business intelligence dashboards"
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Cloud Migrations", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Savings", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services",
      logo: "/api/placeholder/200/100",
      description: "Comprehensive cloud platform with extensive services and global reach.",
      services: ["EC2", "S3", "Lambda", "RDS", "CloudFront"]
    },
    {
      name: "Microsoft Azure",
      logo: "/api/placeholder/200/100",
      description: "Enterprise-focused cloud platform with strong integration capabilities.",
      services: ["Virtual Machines", "Blob Storage", "Functions", "SQL Database", "CDN"]
    },
    {
      name: "Google Cloud Platform",
      logo: "/api/placeholder/200/100",
      description: "AI and machine learning focused cloud platform with advanced analytics.",
      services: ["Compute Engine", "Cloud Storage", "Cloud Functions", "BigQuery", "AI Platform"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Cloud Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. From migration to optimization, we help you leverage the full power of cloud computing.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Cloud Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer end-to-end cloud solutions to help you modernize your infrastructure and accelerate your digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cloud Providers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Cloud Platform Expertise</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We work with all major cloud providers to deliver the best solution for your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cloudProviders.map((provider, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src={provider.logo} alt={provider.name} className="w-16 h-16 object-contain" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                {provider.name}
              </h3>
              
              <p className="text-gray-300 text-center mb-4">
                {provider.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {provider.services.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center inline-block"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Cloud Journey Process</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We follow a proven methodology to ensure successful cloud implementation and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Assessment",
              description: "Analyze your current infrastructure and identify migration opportunities."
            },
            {
              step: "02",
              title: "Planning",
              description: "Develop a comprehensive cloud strategy and migration roadmap."
            },
            {
              step: "03",
              title: "Implementation",
              description: "Execute the migration with minimal downtime and maximum efficiency."
            },
            {
              step: "04",
              title: "Optimization",
              description: "Continuously monitor and optimize your cloud environment for peak performance."
            }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 text-center border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let our cloud experts help you transform your infrastructure and unlock the full potential of cloud computing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Cloud className="w-5 h-5 mr-2" />
              Start Your Cloud Journey
            </Link>
            <Link
              to="/consultation"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudServicesPage;