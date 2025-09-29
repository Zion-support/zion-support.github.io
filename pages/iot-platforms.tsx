import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const IotPlatforms: NextPage = () => {
  const platforms = [
    {
      title: "Smart Home Solutions",
      description: "Complete smart home automation systems with intelligent device control and energy management.",
      features: ["Device Integration", "Energy Monitoring", "Security Systems", "Voice Control"],
      icon: "🏠",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Industrial IoT",
      description: "Industrial IoT solutions for manufacturing, logistics, and supply chain optimization.",
      features: ["Predictive Maintenance", "Asset Tracking", "Quality Control", "Process Automation"],
      icon: "🏭",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "Smart City Infrastructure",
      description: "IoT platforms for smart cities including traffic management, waste management, and environmental monitoring.",
      features: ["Traffic Optimization", "Air Quality Monitoring", "Smart Lighting", "Waste Management"],
      icon: "🌆",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Healthcare IoT",
      description: "Connected healthcare solutions for remote patient monitoring and medical device management.",
      features: ["Patient Monitoring", "Medical Device Integration", "Health Analytics", "Telemedicine"],
      icon: "🏥",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Agricultural IoT",
      description: "Smart farming solutions for precision agriculture and crop management.",
      features: ["Soil Monitoring", "Irrigation Control", "Crop Analytics", "Weather Integration"],
      icon: "🌾",
      color: "from-teal-500 to-green-600"
    },
    {
      title: "Retail IoT",
      description: "Smart retail solutions for inventory management, customer analytics, and store optimization.",
      features: ["Inventory Tracking", "Customer Analytics", "Smart Shelves", "Loss Prevention"],
      icon: "🛒",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const benefits = [
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of devices and systems with instant alerts and notifications.",
      icon: "📊"
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics and insights from IoT data to drive informed decision making.",
      icon: "📈"
    },
    {
      title: "Scalability",
      description: "Scalable IoT platforms that grow with your business needs and device count.",
      icon: "📈"
    },
    {
      title: "Security",
      description: "Enterprise-grade security with encryption, authentication, and access control.",
      icon: "🔒"
    },
    {
      title: "Integration",
      description: "Seamless integration with existing systems and third-party applications.",
      icon: "🔗"
    },
    {
      title: "Cost Efficiency",
      description: "Reduce operational costs through automation and predictive maintenance.",
      icon: "💰"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>IoT Platforms - Zion Tech Solutions | Smart Device Solutions & IoT Development</title>
        <meta name="description" content="Comprehensive IoT platform solutions including smart home, industrial IoT, healthcare IoT, and smart city infrastructure development." />
        <meta name="keywords" content="IoT development, smart devices, industrial IoT, smart home, healthcare IoT, IoT platforms" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-6">
              IoT Platforms & Solutions
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
              Connect and manage your devices with our comprehensive IoT platforms. From smart homes to industrial automation, we build scalable, secure solutions that transform data into actionable insights.
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{platform.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{platform.title}</h3>
                <p className="text-white/80 mb-4 text-sm">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="text-white/70 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Key Benefits of Our IoT Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-white/80 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">IoT Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "MQTT", "CoAP", "HTTP/HTTPS", "WebSocket", "LoRaWAN", "Zigbee",
                "AWS IoT", "Azure IoT", "Google Cloud IoT", "ThingWorx", "Particle", "Arduino",
                "Raspberry Pi", "ESP32", "Node.js", "Python", "C++", "JavaScript",
                "Grafana", "InfluxDB", "TimescaleDB", "Redis", "Docker", "Kubernetes"
              ].map((tech, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">IoT Platform Architecture</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Device Layer</h3>
                <p className="text-white/80 text-sm">Smart sensors, actuators, and connected devices with secure communication protocols.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Connectivity</h3>
                <p className="text-white/80 text-sm">Secure data transmission using MQTT, CoAP, and other IoT protocols.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🗄️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Data Processing</h3>
                <p className="text-white/80 text-sm">Real-time data processing, analytics, and storage in the cloud.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Applications</h3>
                <p className="text-white/80 text-sm">User interfaces, dashboards, and business applications for data visualization.</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">IoT Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Manufacturing</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Predictive maintenance to reduce downtime</li>
                  <li>• Quality control and defect detection</li>
                  <li>• Energy consumption optimization</li>
                  <li>• Supply chain visibility and tracking</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Healthcare</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Remote patient monitoring</li>
                  <li>• Medical device integration</li>
                  <li>• Hospital asset tracking</li>
                  <li>• Environmental monitoring in facilities</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Smart Cities</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Traffic flow optimization</li>
                  <li>• Air quality and noise monitoring</li>
                  <li>• Smart lighting and energy management</li>
                  <li>• Waste management optimization</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Agriculture</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Soil moisture and nutrient monitoring</li>
                  <li>• Automated irrigation systems</li>
                  <li>• Crop health and yield prediction</li>
                  <li>• Livestock monitoring and tracking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Connect Your World?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Let's discuss your IoT project and explore how connected devices can transform your business operations.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your IoT Project
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IotPlatforms;