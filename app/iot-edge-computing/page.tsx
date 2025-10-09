import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Cpu, Cloud, Shield, Zap, CheckCircle, ArrowRight, Database, Globe, Settings, Target, Activity } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IotEdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: "Edge Computing",
      description: "Process data locally at the edge for faster response times and reduced latency",
      benefits: ["Real-time processing", "Reduced bandwidth", "Offline capability"]
    },
    {
      icon: Cpu,
      title: "IoT Device Management",
      description: "Comprehensive management and monitoring of connected devices",
      benefits: ["Device provisioning", "Remote updates", "Health monitoring"]
    },
    {
      icon: Cloud,
      title: "Hybrid Cloud Integration",
      description: "Seamless integration between edge devices and cloud infrastructure",
      benefits: ["Scalable processing", "Data synchronization", "Centralized management"]
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "End-to-end security for IoT devices and edge computing systems",
      benefits: ["Device authentication", "Data encryption", "Secure communication"]
    }
  ];

  const applications = [
    {
      title: "Smart Manufacturing",
      description: "Industrial IoT solutions for predictive maintenance and quality control",
      icon: Settings,
      useCases: ["Predictive maintenance", "Quality monitoring", "Production optimization"]
    },
    {
      title: "Smart Cities",
      description: "Urban IoT infrastructure for traffic, utilities, and public services",
      icon: Globe,
      useCases: ["Traffic management", "Energy optimization", "Environmental monitoring"]
    },
    {
      title: "Healthcare IoT",
      description: "Connected medical devices and patient monitoring systems",
      icon: Activity,
      useCases: ["Patient monitoring", "Remote diagnostics", "Health tracking"]
    },
    {
      title: "Agriculture IoT",
      description: "Precision farming with connected sensors and automated systems",
      icon: Target,
      useCases: ["Crop monitoring", "Irrigation control", "Livestock tracking"]
    }
  ];

  const benefits = [
    "Reduced latency with edge processing",
    "Lower bandwidth costs and usage",
    "Enhanced data privacy and security",
    "Improved reliability and uptime",
    "Real-time decision making",
    "Scalable and flexible architecture"
  ];

  const technologies = [
    "AWS IoT Core",
    "Azure IoT Hub",
    "Google Cloud IoT",
    "Kubernetes Edge",
    "Docker Edge",
    "MQTT Protocol"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT & Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Advanced IoT and edge computing solutions for smart devices, real-time processing, and connected systems. Transform your operations with intelligent edge technology." />
        <meta name="keywords" content="IoT, edge computing, smart devices, connected systems, real-time processing, industrial IoT" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IoT & Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Computing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connect, process, and analyze data at the edge with our advanced IoT and edge computing solutions. Transform your operations with intelligent, connected systems that work in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT and edge computing solutions combine the power of connected devices with intelligent processing at the edge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Areas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              IoT and edge computing solutions are transforming industries across the globe with intelligent, connected systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <app.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{app.description}</p>
                <ul className="space-y-1">
                  {app.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 text-cyan-400" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Supported <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading IoT and edge computing platforms to deliver robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center group">
                <div className="text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                  <Wifi className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-sm font-semibold text-white">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IoT & Edge Computing</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                IoT and edge computing offer unprecedented opportunities for real-time processing, reduced latency, and enhanced efficiency. Our solutions are designed to maximize these benefits.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Wifi className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Connect?</h3>
                <p className="text-gray-300 mb-6">
                  Let us help you implement IoT and edge computing solutions that transform your operations.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Implement IoT & Edge Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our IoT and edge computing experts to discuss how connected systems can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IotEdgeComputingPage;