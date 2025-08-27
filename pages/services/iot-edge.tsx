import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Wifi, 
  Cpu, 
  Zap, 
  Shield, 
  Database, 
  Globe,
  CheckCircle,
  BarChart3,
  Network,
  Server,
  Smartphone,
  Cloud,
  ArrowRight
} from 'lucide-react';

const IoTEdge = () => {
  const features = [
    {
      icon: Wifi,
      title: "Edge Computing",
      description: "Process data closer to the source for faster response times and reduced latency"
    },
    {
      icon: Cpu,
      title: "IoT Device Management",
      description: "Centralized management and monitoring of all connected devices and sensors"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant data analysis and decision-making at the edge of your network"
    },
    {
      icon: Shield,
      title: "Edge Security",
      description: "Advanced security protocols to protect your IoT infrastructure and data"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Comprehensive analytics and insights from your IoT devices and sensors"
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "Seamless connectivity across multiple locations and cloud platforms"
    }
  ];

  const benefits = [
    "Reduce latency by 80-90% with edge processing",
    "Lower bandwidth costs by 40-60%",
    "Improve system reliability with local processing",
    "Enable real-time decision making",
    "Scale IoT deployments efficiently",
    "Enhanced data privacy and security"
  ];

  const industrySolutions = [
    {
      industry: "Manufacturing",
      description: "Smart factories with predictive maintenance, quality control, and production optimization",
      features: ["Predictive maintenance", "Quality control", "Production monitoring"]
    },
    {
      industry: "Healthcare",
      description: "Connected medical devices, patient monitoring, and healthcare analytics",
      features: ["Medical device monitoring", "Patient tracking", "Health analytics"]
    },
    {
      industry: "Smart Cities",
      description: "Intelligent infrastructure, traffic management, and environmental monitoring",
      features: ["Traffic optimization", "Environmental monitoring", "Infrastructure management"]
    },
    {
      industry: "Retail",
      description: "Smart inventory management, customer analytics, and automated systems",
      features: ["Inventory tracking", "Customer analytics", "Automated systems"]
    },
    {
      industry: "Energy",
      description: "Smart grid management, renewable energy optimization, and consumption monitoring",
      features: ["Grid optimization", "Energy monitoring", "Renewable integration"]
    },
    {
      industry: "Transportation",
      description: "Fleet management, route optimization, and vehicle monitoring systems",
      features: ["Fleet tracking", "Route optimization", "Vehicle monitoring"]
    }
  ];

  const technologyStack = [
    {
      category: "Edge Devices",
      technologies: ["Raspberry Pi", "Arduino", "ESP32", "Industrial IoT Gateways"]
    },
    {
      category: "Edge Computing",
      technologies: ["Docker", "Kubernetes", "Edge Runtime", "Function-as-a-Service"]
    },
    {
      category: "Communication",
      technologies: ["MQTT", "CoAP", "HTTP/2", "LoRaWAN", "5G"]
    },
    {
      category: "Cloud Platforms",
      technologies: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "IBM Watson"]
    },
    {
      category: "Analytics",
      technologies: ["TensorFlow Lite", "Apache Kafka", "InfluxDB", "Grafana"]
    },
    {
      category: "Security",
      technologies: ["TLS/SSL", "OAuth 2.0", "Device Authentication", "Encryption"]
    }
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "IoT Director, SmartFactory Corp",
      content: "Zion Tech Group's IoT Edge solution transformed our manufacturing operations. We now have real-time visibility and predictive capabilities.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "CTO, HealthTech Innovations",
      content: "The edge computing implementation reduced our data processing time from minutes to milliseconds. Game-changing technology.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Infrastructure Manager, CitySmart Solutions",
      content: "Their IoT Edge platform enabled us to build a truly intelligent city infrastructure with real-time monitoring and control.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>IoT & Edge Computing Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Tech Group's IoT & Edge Computing services. Real-time processing, device management, and intelligent automation." />
        <meta name="keywords" content="IoT, edge computing, internet of things, device management, real-time processing, smart devices" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20"></div>
          <div className="relative container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IoT & Edge
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                  Computing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Connect, process, and analyze data at the edge of your network. 
                Transform your business with intelligent IoT solutions and real-time edge computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Your IoT Journey
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  📞 Call +1 (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful IoT & Edge Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive IoT and edge computing platform provides everything you need to build intelligent, connected systems
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Operations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience measurable improvements with IoT and edge computing solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored IoT and edge computing solutions for your industry's unique challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((solution, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{solution.industry}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with cutting-edge technologies for maximum performance and reliability
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologyStack.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.technologies.map((technology, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">{technology}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from businesses using our IoT and edge computing solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Connect Your World?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with intelligent IoT solutions and edge computing. 
                Our experts are ready to help you build the connected future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start IoT Implementation
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  📞 +1 (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>🌐 https://ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IoTEdge;