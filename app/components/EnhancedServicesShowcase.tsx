import React from "react";
import {
  Brain,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const EnhancedServicesShowcase: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description:
        "Cutting-edge artificial intelligence solutions to automate and optimize your business processes.",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
      features: [
        "Security Audits",
        "Threat Detection",
        "Data Protection",
        "Compliance Management"
      ]
    },
    {
      icon: Zap,
      title: "Cloud Services",
      description:
        "Scalable cloud infrastructure and services to accelerate your digital transformation.",
      features: [
        "Cloud Migration",
        "Infrastructure Management",
        "Auto-scaling",
        "24/7 Monitoring"
      ]
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with the latest technologies and best practices.",
      features: [
        "React/Next.js",
        "Progressive Web Apps",
        "Performance Optimization",
        "SEO Optimization"
      ]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group-hover:translate-x-1"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;