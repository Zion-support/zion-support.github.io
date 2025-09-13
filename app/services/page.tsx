import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe, Users, TrendingUp, Star, CheckCircle, Brain, Cpu, Database, Cloud } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      title: "AI Autonomous Operations",
      description: "Revolutionary AI systems that operate independently, making intelligent decisions and optimizing processes in real-time.",
      features: [
        "Real-time Decision Making",
        "Predictive Analytics", 
        "Autonomous Optimization",
        "Machine Learning Models",
        "Neural Network Processing"
      ],
      pricing: "Starting at $10,000/month",
      roi: "2,500% average ROI"
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-400" />,
      title: "Quantum Computing Solutions",
      description: "Breakthrough quantum computing solutions delivering exponential computational power and security.",
      features: [
        "Quantum Supremacy",
        "Error-Corrected Quantum",
        "Quantum Internet",
        "Quantum Machine Learning",
        "Quantum Cryptography"
      ],
      pricing: "Starting at $25,000/month",
      roi: "5,000% average ROI"
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-400" />,
      title: "Advanced Automation",
      description: "Intelligent process automation that streamlines operations and eliminates manual tasks.",
      features: [
        "Process Automation",
        "Smart Resource Management",
        "Predictive Maintenance",
        "Workflow Optimization",
        "Intelligent Monitoring"
      ],
      pricing: "Starting at $5,000/month",
      roi: "1,800% average ROI"
    },
    {
      icon: <Users className="w-12 h-12 text-green-400" />,
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise-grade solutions designed for scalability and reliability.",
      features: [
        "Scalable Architecture",
        "Enterprise Security",
        "24/7 Support",
        "Custom Development",
        "Integration Services"
      ],
      pricing: "Custom pricing",
      roi: "3,200% average ROI"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-yellow-400" />,
      title: "Business Intelligence",
      description: "Advanced analytics and insights that drive data-driven decision making and growth.",
      features: [
        "Real-time Analytics",
        "Predictive Insights",
        "Performance Optimization",
        "Data Visualization",
        "Custom Dashboards"
      ],
      pricing: "Starting at $3,000/month",
      roi: "1,500% average ROI"
    },
    {
      icon: <Star className="w-12 h-12 text-pink-400" />,
      title: "Innovation Hub",
      description: "Cutting-edge research and development in emerging technologies and future solutions.",
      features: [
        "R&D Excellence",
        "Future Technologies",
        "Innovation Labs",
        "Prototype Development",
        "Technology Consulting"
      ],
      pricing: "Project-based",
      roi: "Variable ROI"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our cutting-edge AI, quantum computing, and automation solutions. 
              Experience unprecedented growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-white">{service.pricing}</span>
                    <span className="text-sm text-green-400 font-medium">{service.roi}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already experiencing unprecedented growth with our 
            revolutionary AI and automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}