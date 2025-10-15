

import {},
      Globe,
      CheckCircle,
      ArrowRight} from "lucide-react";
const EnhancedServicesShowcase: React.FC = () => {};
}const services = []
    {},
      icon: title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions to automate and optimize your business processes.",
      features: []
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision";
        "Predictive Analytics"]};
    {},
      icon: title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
      features: []
        "Security Audits",
        "Threat Detection",
        "Data Protection";
        "Compliance Management"]};
    {},
      icon: title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions to modernize your infrastructure and reduce costs.",

      features: []
        "Cloud Migration",
        "Infrastructure as Code",
        "Auto-scaling",
        "Disaster Recovery"]},
    {}
      icon: Globe,
      title: "Digital Transformation",
      description:
        "Complete digital transformation services to modernize your business and stay competitive.",
      features: []
        "Strategy Development",
        "Technology Integration",
        "Change Management",
        "Training & Support",

import React from "react";
import {
  Brain,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,;
}; from "lucide-react";
import { Link } from "react-router-dom";

interface EnhancedServicesShowcaseProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const EnhancedServicesShowcase: React.FC<EnhancedServicesShowcaseProps> = ({
  children,
  className = '',
  title,
  description
}) => {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",";
      description: "Cutting-edge artificial intelligence solutions to automate and optimize your business processes.",";
      features: [
        "Machine Learning",";
        "Natural Language Processing",";
        "Computer Vision",";
        "Predictive Analytics",";

      ],
      href: "/ai-solutions",";
      gradient: "from-purple-500 to-pink-500",";
    },
    {
      icon: Shield,
      title: "Cybersecurity",";
      description: "Comprehensive security solutions to protect your business from cyber threats and data breaches.",";
      features: [
        "Security Audits",";
        "Threat Detection",";
        "Data Protection",";
        "Compliance Management",";
      ],
      href: "/cybersecurity",";
      gradient: "from-red-500 to-orange-500",";
    },
    {
      icon: Zap,
      title: "Cloud Infrastructure",";
      description: "Scalable and secure cloud solutions to modernize your infrastructure and reduce costs.",";
      features: [
        "Cloud Migration",";
        "Infrastructure as Code",";
        "Auto-scaling",";
        "Disaster Recovery",";
      ],
      href: "/cloud-solutions",";
      gradient: "from-blue-500 to-cyan-500",";
    },
    {
      icon: Globe,
      title: "Digital Transformation",";
      description: "Complete digital transformation services to modernize your business and stay competitive.",";
      features: [
        "Strategy Development",";
        "Technology Integration",";
        "Change Management",";
        "Process Optimization",";
      ],
      href: "/digital-transformation",";
      gradient: "from-green-500 to-teal-500",";
    },
    {}
  ],
      return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>)
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h2 className="text-4xl font-bold text-white mb-4"></h2>

            Our Core Services

  return (
<<<<<<< HEAD
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 ${className}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Core Services
=======
    <div className ="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";
      <div className ="container mx-auto px-4">";
        <div className ="text-center mb-16">";
          <h2 className ="text-4xl font-bold text-white mb-6">";
            Our <span className ="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>";

>>>>>>> main
          </h2>
          <p className ="text-xl text-gray-300 max-w-3xl mx-auto">";
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
          {services.map((service, index) => (<divkey={index},>)
      className="cyber-card p-8 group hover:scale-105 transition-transform"
            ></div
>
              <div className="flex items-center mb-4"></div>

                <service.icon className="h-12 w-12 text-cyan-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">

        <div className ="grid md: grid-cols-2 lg:grid-cols-4 gap-8">",
          {services.map((service, index) => (
            <div key ={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover: border-white/20 transition-all duration-300 hover:transform hover:scale-105"";
            >
              <div className ="mb-4">",
                <div className ={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4`}>
                  <service.icon: className ="w-6 h-6 text-white" />";
                </div>
                <h3 className ="text-xl font-semibold text-white mb-2">",

                  {service.title}
                </h3>
                <p className ="text-gray-300 text-sm mb-4">";
                  {service.description}
                </p>
              </div>

              <p className="text-gray-300 mb-6">{service.description}</p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2"></ul>
                  {service.features.map((feature, featureIndex) => ()}
                    <likey={featureIndex},>
      className="flex items-center text-sm text-gray-300"
                    ></li
>

                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">

              <ul className ="space-y-2 mb-6">";
                {service.features.map((feature, idx) => (
                  <li key ={idx} className="flex items-center gap-2 text-sm text-gray-400">";
                    <CheckCircle className ="w-4 h-4 text-green-400" />";
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to ={service.href}
                className="inline-flex items-center gap-2 text-blue-400 hover: text-blue-300 font-medium transition-colors duration-200"";
              >

                Learn More
                <ArrowRight className ="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />",
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16"></div>
          <>
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          ></>

            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </>
        </div>
<<<<<<< HEAD
        
        {children}
=======

>>>>>>> main
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;