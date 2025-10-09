import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Cpu, Database, Globe, Shield, Zap, Target, BarChart, Settings, CheckCircle, ArrowRight, Star, Users, Award, Smartphone, Lock, TrendingUp, Calendar, FileText, Search, Code, Cloud, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const IotEdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: "Connected Devices",
      description: "Seamless integration of IoT devices with real-time data collection and processing capabilities.",
      benefits: ["Real-time Monitoring", "Device Management", "Data Collection", "Remote Control"]
    },
    {
      icon: Cpu,
      title: "Edge Processing",
      description: "Local data processing at the edge for faster response times and reduced latency.",
      benefits: ["Low Latency", "Real-time Processing", "Bandwidth Optimization", "Offline Capability"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced analytics and insights from IoT data streams for informed decision making.",
      benefits: ["Predictive Analytics", "Pattern Recognition", "Real-time Insights", "Data Visualization"]
    },
    {
      icon: Shield,
      title: "Secure Communication",
      description: "End-to-end encryption and secure protocols for protecting IoT communications.",
      benefits: ["End-to-end Encryption", "Secure Protocols", "Device Authentication", "Data Privacy"]
    }
  ];

  const solutions = [
    {
      title: "Smart Manufacturing",
      description: "IoT-enabled manufacturing systems with real-time monitoring, predictive maintenance, and quality control.",
      icon: Settings,
      benefits: ["Predictive Maintenance", "Quality Control", "Production Optimization", "Energy Management"],
      useCases: ["Assembly Lines", "Quality Inspection", "Equipment Monitoring", "Supply Chain"]
    },
    {
      title: "Smart Cities",
      description: "Comprehensive IoT solutions for urban infrastructure including traffic, utilities, and public services.",
      icon: Globe,
      benefits: ["Traffic Management", "Utility Monitoring", "Public Safety", "Environmental Monitoring"],
      useCases: ["Traffic Lights", "Water Systems", "Waste Management", "Air Quality"]
    },
    {
      title: "Healthcare IoT",
      description: "Connected medical devices and patient monitoring systems for improved healthcare outcomes.",
      icon: Shield,
      benefits: ["Patient Monitoring", "Remote Care", "Medical Device Integration", "Health Analytics"],
      useCases: ["Wearables", "Medical Devices", "Patient Tracking", "Telemedicine"]
    },
    {
      title: "Agricultural IoT",
      description: "Smart farming solutions with sensors, automation, and data analytics for optimal crop management.",
      icon: Target,
      benefits: ["Crop Monitoring", "Soil Analysis", "Irrigation Control", "Weather Tracking"],
      useCases: ["Soil Sensors", "Weather Stations", "Irrigation Systems", "Crop Health"]
    }
  ];

  const technologies = [
    {
      name: "Edge Computing",
      description: "Processing data closer to the source for faster response times",
      features: ["Local Processing", "Reduced Latency", "Bandwidth Savings", "Real-time Analytics"]
    },
    {
      name: "5G Networks",
      description: "High-speed, low-latency connectivity for IoT devices",
      features: ["Ultra-low Latency", "High Bandwidth", "Massive Connectivity", "Reliability"]
    },
    {
      name: "Machine Learning",
      description: "AI-powered analytics and decision making at the edge",
      features: ["Predictive Analytics", "Anomaly Detection", "Pattern Recognition", "Automated Decisions"]
    },
    {
      name: "Cloud Integration",
      description: "Seamless integration between edge devices and cloud platforms",
      features: ["Data Synchronization", "Scalable Storage", "Global Access", "Backup & Recovery"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Operational Efficiency",
      description: "Automated processes and real-time monitoring improve operational efficiency significantly.",
      metric: "40%"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Comprehensive security measures protect IoT devices and data from cyber threats.",
      metric: "99.9%"
    },
    {
      icon: Target,
      title: "Cost Reduction",
      description: "Optimized resource usage and predictive maintenance reduce operational costs.",
      metric: "30%"
    },
    {
      icon: Zap,
      title: "Real-time Insights",
      description: "Instant data processing and analytics for immediate decision making.",
      metric: "10x"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      icon: Settings,
      applications: ["Predictive Maintenance", "Quality Control", "Supply Chain", "Energy Management"]
    },
    {
      name: "Healthcare",
      icon: Shield,
      applications: ["Patient Monitoring", "Medical Devices", "Remote Care", "Health Analytics"]
    },
    {
      name: "Agriculture",
      icon: Target,
      applications: ["Crop Monitoring", "Soil Analysis", "Irrigation", "Weather Tracking"]
    },
    {
      name: "Smart Cities",
      icon: Globe,
      applications: ["Traffic Management", "Utilities", "Public Safety", "Environmental Monitoring"]
    },
    {
      name: "Retail",
      icon: Smartphone,
      applications: ["Inventory Management", "Customer Analytics", "Supply Chain", "Store Optimization"]
    },
    {
      name: "Energy",
      icon: Zap,
      applications: ["Smart Grids", "Renewable Energy", "Energy Storage", "Demand Response"]
    }
  ];

  const edgeCapabilities = [
    {
      title: "Real-time Processing",
      description: "Process data locally for instant response and decision making",
      icon: Cpu,
      benefits: ["Sub-millisecond Latency", "Real-time Analytics", "Instant Alerts", "Local Decision Making"]
    },
    {
      title: "Bandwidth Optimization",
      description: "Reduce data transmission costs by processing data at the edge",
      icon: Wifi,
      benefits: ["Reduced Data Transfer", "Cost Savings", "Network Efficiency", "Selective Upload"]
    },
    {
      title: "Offline Operation",
      description: "Continue operations even when disconnected from the cloud",
      icon: Database,
      benefits: ["Uninterrupted Service", "Local Storage", "Sync When Online", "Resilient Operations"]
    },
    {
      title: "Privacy & Security",
      description: "Keep sensitive data local and secure with edge processing",
      icon: Lock,
      benefits: ["Data Localization", "Enhanced Privacy", "Reduced Attack Surface", "Compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT & Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Advanced IoT and edge computing solutions for connected devices, real-time processing, and intelligent automation. Transform your operations with cutting-edge technology." />
        <meta name="keywords" content="IoT, edge computing, connected devices, smart systems, real-time processing, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IoT & Edge</span> Computing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connect, process, and analyze data at the edge with our advanced IoT and edge computing solutions. Real-time insights and intelligent automation for the connected world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/consultation"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced IoT and edge computing capabilities that enable real-time processing and intelligent automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IoT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IoT solutions tailored to your industry and operational requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <solution.icon className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-cyan-400">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-1">
                        {solution.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded-full">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Computing Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Edge Computing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Process data locally for faster response times, reduced latency, and enhanced security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {edgeCapabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <capability.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering our IoT and edge computing solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group text-center">
                <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <div className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              IoT and edge computing solutions across various industries transforming operations and creating new opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <industry.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <div className="space-y-2">
                  {industry.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IoT & Edge</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your operations with IoT and edge computing solutions that deliver measurable results and competitive advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group text-center">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <benefit.icon className="w-12 h-12 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Go <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Connected</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your operations with IoT and edge computing solutions that connect, process, and analyze data in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MailIcon className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IotEdgeComputingPage;