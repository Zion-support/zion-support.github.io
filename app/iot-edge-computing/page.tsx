import React from "react";
import {
  CheckCircle,
  Star,
  Wifi,
  Cpu,
  Shield,
  Zap,
  Target,
  BarChart,
  Brain,
  Settings,
  Globe,
  Database,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const IoTEdgeComputingPage: React.FC = () => {
  const iotServices = [
    {
      title: "IoT Sensor Network Design",
      description:
        "Comprehensive IoT sensor networks with real-time data collection and edge processing capabilities.",
      icon: "📡",
      price: "Starting at $5,000/project",
      features: [
        "Sensor selection & placement",
        "Network topology design",
        "Data collection protocols",
        "Edge processing setup",
        "Real-time monitoring",
      ],
      benefits: [
        "Improve operational visibility",
        "Reduce manual monitoring",
        "Enable predictive maintenance",
      ],
      marketPrice: "$8,000-25,000/project",
      category: "Sensor Networks",
      technologies: ["LoRaWAN", "NB-IoT", "Zigbee", "WiFi 6", "5G"],
    },
    {
      title: "Edge Computing Solutions",
      description:
        "Edge computing infrastructure for real-time data processing and reduced latency applications.",
      icon: "⚡",
      price: "Starting at $3,500/month",
      features: [
        "Edge server deployment",
        "Real-time processing",
        "Data filtering & aggregation",
        "Local decision making",
        "Cloud synchronization",
      ],
      benefits: [
        "Reduce latency by 80%",
        "Lower bandwidth costs",
        "Enable offline operation",
      ],
      marketPrice: "$6,000-18,000/month",
      category: "Edge Computing",
      technologies: ["Kubernetes", "Docker", "Edge AI", "MQTT", "Apache Kafka"],
    },
    {
      title: "Industrial IoT (IIoT) Systems",
      description:
        "Smart manufacturing and industrial automation solutions with IoT integration.",
      icon: "🏭",
      price: "Starting at $8,000/month",
      features: [
        "Equipment monitoring",
        "Predictive maintenance",
        "Quality control",
        "Energy optimization",
        "Safety systems",
      ],
      benefits: [
        "Increase production efficiency",
        "Reduce downtime by 40%",
        "Improve product quality",
      ],
      marketPrice: "$15,000-50,000/month",
      category: "Industrial IoT",
      technologies: [
        "OPC UA",
        "Modbus",
        "Ethernet/IP",
        "Industrial Protocols",
        "SCADA Systems",
      ],
    },
    {
      title: "Smart City Solutions",
      description:
        "Comprehensive smart city infrastructure including traffic, utilities, and public services.",
      icon: "🏙️",
      price: "Starting at $15,000/month",
      features: [
        "Traffic management",
        "Smart lighting",
        "Waste management",
        "Air quality monitoring",
        "Public safety",
      ],
      benefits: [
        "Improve city efficiency",
        "Reduce energy consumption",
        "Enhance citizen services",
      ],
      marketPrice: "$25,000-100,000/month",
      category: "Smart Cities",
      technologies: [
        "LPWAN",
        "Cellular IoT",
        "Edge Computing",
        "Data Analytics",
        "AI/ML",
      ],
    },
    {
      title: "IoT Data Analytics Platform",
      description:
        "Real-time analytics platform for IoT data with machine learning and predictive insights.",
      icon: "📊",
      price: "Starting at $4,500/month",
      features: [
        "Real-time data processing",
        "Machine learning models",
        "Predictive analytics",
        "Anomaly detection",
        "Custom dashboards",
      ],
      benefits: [
        "Extract actionable insights",
        "Predict equipment failures",
        "Optimize operations",
      ],
      marketPrice: "$8,000-25,000/month",
      category: "Data Analytics",
      technologies: [
        "Apache Spark",
        "TensorFlow",
        "InfluxDB",
        "Grafana",
        "Time Series DB",
      ],
    },
    {
      title: "IoT Security Solutions",
      description:
        "Comprehensive security solutions for IoT devices and networks with threat detection.",
      icon: "🔒",
      price: "Starting at $3,200/month",
      features: [
        "Device authentication",
        "Encrypted communication",
        "Threat detection",
        "Vulnerability scanning",
        "Security monitoring",
      ],
      benefits: [
        "Protect IoT infrastructure",
        "Prevent cyber attacks",
        "Ensure compliance",
      ],
      marketPrice: "$6,000-20,000/month",
      category: "IoT Security",
      technologies: ["Zero Trust", "PKI", "VPN", "Firewall", "SIEM"],
    },
    {
      title: "Connected Vehicle Solutions",
      description:
        "IoT solutions for connected vehicles including fleet management and telematics.",
      icon: "🚗",
      price: "Starting at $6,500/month",
      features: [
        "Fleet tracking",
        "Driver behavior analysis",
        "Vehicle diagnostics",
        "Route optimization",
        "Fuel monitoring",
      ],
      benefits: [
        "Reduce fuel costs by 15%",
        "Improve driver safety",
        "Optimize fleet operations",
      ],
      marketPrice: "$12,000-40,000/month",
      category: "Connected Vehicles",
      technologies: [
        "OBD-II",
        "GPS Tracking",
        "Cellular Networks",
        "CAN Bus",
        "Telematics",
      ],
    },
    {
      title: "Smart Agriculture IoT",
      description:
        "Precision agriculture solutions with soil monitoring, crop management, and automated irrigation.",
      icon: "🌾",
      price: "Starting at $4,000/month",
      features: [
        "Soil monitoring",
        "Weather stations",
        "Irrigation control",
        "Crop health monitoring",
        "Livestock tracking",
      ],
      benefits: [
        "Increase crop yield by 20%",
        "Reduce water usage",
        "Optimize fertilizer application",
      ],
      marketPrice: "$7,000-25,000/month",
      category: "Smart Agriculture",
      technologies: [
        "Soil Sensors",
        "Weather APIs",
        "Irrigation Systems",
        "Drones",
        "Satellite Imagery",
      ],
    },
    {
      title: "IoT Device Management",
      description:
        "Centralized device management platform for monitoring, updating, and maintaining IoT devices.",
      icon: "📱",
      price: "Starting at $2,800/month",
      features: [
        "Device provisioning",
        "Remote updates",
        "Health monitoring",
        "Configuration management",
        "Troubleshooting",
      ],
      benefits: [
        "Reduce maintenance costs",
        "Improve device reliability",
        "Enable remote management",
      ],
      marketPrice: "$5,000-15,000/month",
      category: "Device Management",
      technologies: [
        "Device Twins",
        "OTA Updates",
        "Device Registry",
        "Configuration Management",
      ],
    },
    {
      title: "Environmental Monitoring",
      description:
        "Comprehensive environmental monitoring solutions for air, water, and soil quality.",
      icon: "🌍",
      price: "Starting at $3,500/month",
      features: [
        "Air quality sensors",
        "Water quality monitoring",
        "Noise level detection",
        "Weather monitoring",
        "Compliance reporting",
      ],
      benefits: [
        "Ensure environmental compliance",
        "Protect public health",
        "Enable data-driven decisions",
      ],
      marketPrice: "$6,500-20,000/month",
      category: "Environmental Monitoring",
      technologies: [
        "Environmental Sensors",
        "Data Loggers",
        "Compliance Systems",
        "Reporting Tools",
      ],
    },
    {
      title: "IoT Integration Services",
      description:
        "Integration of IoT devices with existing enterprise systems and cloud platforms.",
      icon: "🔗",
      price: "Starting at $4,500/project",
      features: [
        "System integration",
        "API development",
        "Data transformation",
        "Cloud connectivity",
        "Legacy system integration",
      ],
      benefits: [
        "Connect existing systems",
        "Enable data sharing",
        "Improve interoperability",
      ],
      marketPrice: "$8,000-30,000/project",
      category: "Integration",
      technologies: [
        "REST APIs",
        "GraphQL",
        "Message Queues",
        "Cloud Platforms",
        "Middleware",
      ],
    },
    {
      title: "IoT Consulting & Strategy",
      description:
        "Strategic IoT consulting and technology roadmap development for digital transformation.",
      icon: "💡",
      price: "Starting at $350/hour",
      features: [
        "IoT strategy development",
        "Technology assessment",
        "Use case identification",
        "ROI analysis",
        "Implementation planning",
      ],
      benefits: [
        "Navigate IoT landscape",
        "Make informed decisions",
        "Maximize IoT investment",
      ],
      marketPrice: "$500-1,200/hour",
      category: "Consulting",
      technologies: [
        "Strategic Planning",
        "Technology Assessment",
        "Risk Analysis",
        "ROI Modeling",
      ],
    },
  ];

  const _categories = [
    ...new Set(iotServices.map((service) => service.category)),
  ];

  return (
    <>
      <Helmet>
        <title>IoT & Edge Computing Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced IoT and edge computing solutions for smart cities, industrial automation, and connected devices."
        />
        <meta
          name="keywords"
          content="IoT services, edge computing, smart cities, industrial IoT, sensor networks, connected devices"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IoT & Edge Computing Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto">
                Connect the physical and digital worlds with intelligent IoT
                solutions and edge computing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                  Explore IoT Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IoT Services?
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive IoT solutions that transform your business with
                connected intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Connected Intelligence
                </h3>
                <p className="text-gray-600">
                  Transform data into actionable insights with IoT
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Edge Processing
                </h3>
                <p className="text-gray-600">
                  Real-time processing at the edge for instant decisions
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Enterprise Security
                </h3>
                <p className="text-gray-600">
                  Bank-level security for all IoT devices and networks
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Scalable Solutions
                </h3>
                <p className="text-gray-600">
                  Solutions that grow with your business needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map((category) => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Services
                </h2>
                <p className="text-xl text-gray-600">
                  Specialized {category.toLowerCase()} solutions for connected
                  environments
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {iotServices
                  .filter((service) => service.category === category)
                  .map((service, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-cyan-600">
                            {service.price}
                          </span>
                          <span className="text-sm text-gray-500">
                            Market: {service.marketPrice}
                          </span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 45% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Business Benefits:
                        </h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li
                              key={benefitIndex}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                        Get IoT Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* IoT Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IoT Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive IoT technologies and edge computing expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-lg">
                <Wifi className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sensor Networks
                </h3>
                <p className="text-gray-600">
                  Comprehensive sensor network design and deployment
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                <Cpu className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Edge Computing
                </h3>
                <p className="text-gray-600">
                  Real-time processing and decision making at the edge
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  IoT Security
                </h3>
                <p className="text-gray-600">
                  Comprehensive security for IoT devices and networks
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <BarChart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Data Analytics
                </h3>
                <p className="text-gray-600">
                  Real-time analytics and machine learning for IoT data
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Smart Cities
                </h3>
                <p className="text-gray-600">
                  Comprehensive smart city infrastructure solutions
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Database className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Device Management
                </h3>
                <p className="text-gray-600">
                  Centralized management and monitoring of IoT devices
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Connect Your World?
            </h2>
            <p className="text-xl mb-8 text-cyan-100">
              Contact our IoT experts for a free consultation and custom
              connected solution strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-cyan-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IoTEdgeComputingPage;
