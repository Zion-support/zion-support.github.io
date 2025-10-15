import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Shield, CheckCircle, ArrowRight, Clock, Network, Cpu, Smartphone, BarChart3 } from 'lucide-react';

const G5gSolutionsPage: React.FC = () => {
  const g5gServices = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Network Design",
      description: "Complete 5G network architecture and infrastructure design for optimal coverage and performance.",
      features: ["Network Planning", "Coverage Analysis", "Capacity Planning", "Interference Management"]
    },
    {
      name: "5G Network Infrastructure",
      description: "Robust 5G infrastructure with advanced tower installation and fiber optic connectivity.",
      features: ["Tower Installation", "Fiber Optic Setup", "Antenna Configuration", "Power Management"]
    },
    {
      name: "5G Security Solutions",
      description: "Comprehensive security measures to protect your 5G network from cyber threats.",
      features: ["Network Encryption", "Threat Detection", "Access Control", "Security Monitoring"]
    },
    {
      name: "5G Performance Optimization",
      description: "Advanced optimization techniques to maximize 5G network performance and reliability.",
      features: ["Speed Optimization", "Latency Reduction", "Bandwidth Management", "Quality of Service"]
    }
  ];

  const solutions = [
    {
      icon: <Wifi className="w-12 h-12" />,
      name: "5G Network Design",
      description: "Complete 5G network architecture and infrastructure design"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      name: "5G Security",
      description: "Advanced security solutions for 5G networks"
    },
    {
      icon: <Network className="w-12 h-12" />,
      name: "5G Infrastructure",
      description: "Robust 5G infrastructure deployment and management"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      name: "5G Optimization",
      description: "Performance optimization and network tuning"
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Ultra-Fast Speeds",
      description: "Experience blazing-fast 5G speeds up to 10 Gbps"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Low Latency",
      description: "Ultra-low latency for real-time applications"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First",
      description: "Optimized for mobile devices and IoT applications"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Scalable",
      description: "Easily scale your network as your business grows"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive 5G solutions for businesses including network design, infrastructure, security, and optimization services."
        />
        <meta name="keywords" content="5G solutions, 5G network, 5G infrastructure, 5G security, network optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Advanced <span className="text-cyan-400">5G Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge 5G technology. Deploy faster, scale efficiently, and stay ahead of the competition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{solution.name}</h3>
                  <p className="text-gray-300">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="text-cyan-400">5G Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G solutions are designed to deliver exceptional performance, security, and scalability for your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-700 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">5G Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G services to help you build, deploy, and manage your next-generation network infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {g5gServices.map((service, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 flex items-center">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Deploy <span className="text-cyan-200">5G Solutions</span>?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Contact our experts today to discuss your 5G requirements and get started with a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Get Started
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default G5gSolutionsPage;