import React from "react";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  BarChart3, 
  Lock, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "AI Solutions",
      description: "Comprehensive artificial intelligence services including machine learning, natural language processing, and predictive analytics.",
      features: ["Machine Learning Models", "AI Chatbots", "Predictive Analytics", "Computer Vision"],
      href: "/ai-solutions"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Incident Response"],
      href: "/cybersecurity"
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed to optimize performance, reduce costs, and enhance business agility.",
      features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Disaster Recovery"],
      href: "/cloud-infrastructure"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes and technology stack.",
      features: ["Process Automation", "Legacy Modernization", "API Development", "Integration Services"],
      href: "/digital-transformation"
    }
  ];

  const specializedServices = [
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics solutions.",
      href: "/ai-data-analytics"
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "Fraud Detection",
      description: "AI-powered fraud detection systems to protect your business from financial losses.",
      href: "/ai-fraud-detection"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
      title: "Mobile App Development",
      description: "Custom mobile applications built with the latest technologies and best practices.",
      href: "/ai-mobile-app-development"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: "Customer Support AI",
      description: "Intelligent customer support solutions that provide 24/7 assistance to your customers.",
      href: "/ai-customer-support"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current systems, identify pain points, and define clear objectives for your project."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Our team develops a comprehensive strategy and detailed implementation plan tailored to your needs."
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "We build and deploy your solution using agile methodologies and industry best practices."
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing ensures your solution works perfectly before going live."
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "We launch your solution and provide ongoing support to ensure continued success."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive business growth through innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our flagship services that form the foundation of your digital transformation journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Targeted solutions for specific business challenges and industry requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value.
            </p>
          </div>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project requirements and create a customized solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-200"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
