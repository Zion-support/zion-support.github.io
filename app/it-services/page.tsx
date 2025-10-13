import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Shield, Code, Database, Cloud, Monitor, CheckCircle, ArrowRight } from 'lucide-react';

export default function ItServices() {
  const services = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, disaster recovery, and multi-cloud support for enterprise-grade reliability.",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Auto-scaling", "Backup & Recovery", "Multi-cloud Support", "Cost Optimization"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced security measures including threat detection, vulnerability assessment, compliance management, and incident response.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance Management", "Incident Response"]
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.",
      icon: <Code className="w-8 h-8" />,
      features: ["Responsive Design", "Performance Optimization", "SEO Optimization", "Mobile-First Approach"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience and performance.",
      icon: <Monitor className="w-8 h-8" />,
      features: ["Native Development", "Cross-platform", "UI/UX Design", "App Store Optimization"]
    },
    {
      title: "Database Management",
      description: "Expert database design, optimization, migration, and maintenance services for improved performance and reliability.",
      icon: <Database className="w-8 h-8" />,
      features: ["Database Design", "Performance Tuning", "Migration Services", "Backup & Recovery"]
    },
    {
      title: "IT Support & Maintenance",
      description: "Provide ongoing monitoring, maintenance, and support to ensure optimal performance and security.",
      icon: <Server className="w-8 h-8" />,
      features: ["24/7 Monitoring", "Proactive Maintenance", "Technical Support", "Performance Optimization"]
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Python", category: "Backend" }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Analysis",
      description: "We analyze your current IT infrastructure and identify areas for improvement and optimization."
    },
    {
      step: 2,
      title: "Strategy & Planning",
      description: "Develop a comprehensive IT strategy tailored to your business goals and requirements."
    },
    {
      step: 3,
      title: "Implementation",
      description: "Execute the planned solutions with minimal disruption to your business operations."
    },
    {
      step: 4,
      title: "Support & Optimization",
      description: "Provide ongoing support and continuous optimization to ensure peak performance."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, and database management." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions to help your business thrive in the digital age. From cloud infrastructure to cybersecurity, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our IT Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our IT experts help you build a robust, secure, and scalable technology foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center">
                <Server className="w-5 h-5 mr-2" />
                Get Free IT Assessment
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
