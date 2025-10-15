import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const services = [
    {
      name: "Cloud Migration",
      description: "Seamless migration of your applications and data to the cloud with zero downtime.",
      features: ["Application migration", "Data migration", "Infrastructure setup", "Performance optimization"],
      icon: <Cloud className="w-8 h-8" />
    },
    {
      name: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure designed for your specific business needs.",
      features: ["Auto-scaling", "Load balancing", "High availability", "Disaster recovery"],
      icon: <Server className="w-8 h-8" />
    },
    {
      name: "Database Services",
      description: "Managed database solutions with automated backups, monitoring, and optimization.",
      features: ["Database setup", "Performance tuning", "Automated backups", "24/7 monitoring"],
      icon: <Database className="w-8 h-8" />
    },
    {
      name: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
      features: ["Security audits", "Access control", "Data encryption", "Threat detection"],
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const platforms = [
    { name: "Amazon Web Services (AWS)", description: "Leading cloud platform with comprehensive services" },
    { name: "Microsoft Azure", description: "Enterprise-grade cloud solutions and hybrid capabilities" },
    { name: "Google Cloud Platform", description: "Advanced AI and machine learning cloud services" },
    { name: "Multi-Cloud", description: "Hybrid and multi-cloud strategies for optimal performance" }
  ];

  const benefits = [
    "Reduced infrastructure costs",
    "Improved scalability and flexibility",
    "Enhanced security and compliance",
    "24/7 monitoring and support",
    "Automated backups and disaster recovery",
    "Global accessibility and performance"
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
        <meta name="description" content="Transform your business with our comprehensive cloud services. Migration, infrastructure, security, and managed solutions for AWS, Azure, and GCP." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, managed cloud, cloud security" />
        <meta property="og:title" content="Cloud Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive cloud solutions and migration services" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Accelerate your digital transformation with our comprehensive cloud solutions. 
                Migration, infrastructure, security, and managed services for all major cloud platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Cloud Consultation
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cloud solutions designed to optimize your business operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Cloud Platforms We Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to deliver the best solution for your needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:border-cyan-500/40 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{platform.name}</h3>
                  <p className="text-gray-300">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cloud computing with our expert guidance and support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your cloud strategy and help you choose the best platform for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Cloud Migration
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Get Free Assessment
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudServicesPage;