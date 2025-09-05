import React from 'react';
import Layout from './components/Layout';

const iotServices = [
  {
    title: "Smart Device Development",
    description: "Custom IoT devices and sensors for your specific business needs",
    icon: Globe,
    features: ["Sensor Integration", "Edge Computing", "Real-time Monitoring"],
    pricing: "Starting at $3,500/month",
    timeline: "8-20 weeks"
  },
  {
    title: "IoT Platform Development",
    description: "Comprehensive IoT platforms for device management and data processing",
    icon: Cloud,
    features: ["Device Management", "Data Analytics", "API Integration"],
    pricing: "Starting at $2,500/month",
    timeline: "12-24 weeks"
  },
  {
    title: "Industrial IoT (IIoT)",
    description: "IoT solutions for manufacturing and industrial automation",
    icon: Zap,
    features: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization"],
    pricing: "Starting at $5,000/month",
    timeline: "16-32 weeks"
  },
  {
    title: "Smart City Solutions",
    description: "IoT infrastructure for smart cities and urban management",
    icon: Database,
    features: ["Traffic Management", "Environmental Monitoring", "Public Safety"],
    pricing: "Starting at $8,000/month",
    timeline: "24-48 weeks"
  },
  {
    title: "IoT Security",
    description: "Comprehensive security solutions for IoT networks and devices",
    icon: Shield,
    features: ["Device Authentication", "Data Encryption", "Threat Detection"],
    pricing: "Starting at $2,000/month",
    timeline: "6-12 weeks"
  },
  {
    title: "IoT Analytics & AI",
    description: "Advanced analytics and AI integration for IoT data insights",
    icon: TrendingUp,
    features: ["Predictive Analytics", "Machine Learning", "Real-time Insights"],
    pricing: "Starting at $3,000/month",
    timeline: "8-16 weeks"
  }
];

const industries = [
  { name: "Manufacturing", applications: ["Predictive Maintenance", "Quality Control", "Supply Chain"] },
  { name: "Healthcare", applications: ["Patient Monitoring", "Medical Devices", "Health Analytics"] },
  { name: "Agriculture", applications: ["Crop Monitoring", "Livestock Tracking", "Smart Irrigation"] },
  { name: "Transportation", applications: ["Fleet Management", "Traffic Optimization", "Vehicle Tracking"] },
  { name: "Energy", applications: ["Smart Grids", "Energy Monitoring", "Renewable Integration"] },
  { name: "Retail", applications: ["Inventory Management", "Customer Analytics", "Smart Stores"] }
];

const benefits = [
  {
    title: "Real-time Monitoring",
    description: "Monitor your operations in real-time with IoT sensors and devices",
    icon: Globe,
    percentage: "99.9%"
  },
  {
    title: "Cost Reduction",
    description: "Reduce operational costs through automation and optimization",
    icon: DollarSign,
    percentage: "35%"
  },
  {
    title: "Improved Efficiency",
    description: "Enhance operational efficiency with data-driven insights",
    icon: TrendingUp,
    percentage: "50%"
  },
  {
    title: "Predictive Maintenance",
    description: "Prevent equipment failures with predictive maintenance",
    icon: Shield,
    percentage: "80%"
  }
];

const process = [
  {
    step: "1",
    title: "Requirements Analysis",
    description: "Analyze your business needs and IoT requirements",
    duration: "1-2 weeks"
  },
  {
    step: "2",
    title: "Architecture Design",
    description: "Design IoT architecture and select appropriate technologies",
    duration: "2-3 weeks"
  },
  {
    step: "3",
    title: "Device Development",
    description: "Develop and configure IoT devices and sensors",
    duration: "8-20 weeks"
  },
  {
    step: "4",
    title: "Platform Development",
    description: "Build IoT platform for data management and analytics",
    duration: "12-24 weeks"
  },
  {
    step: "5",
    title: "Integration & Testing",
    description: "Integrate all components and conduct comprehensive testing",
    duration: "2-4 weeks"
  },
  {
    step: "6",
    title: "Deployment & Support",
    description: "Deploy IoT solution and provide ongoing support",
    duration: "Ongoing"
  }
];

const stats = [
  { number: "100+", label: "IoT Projects Completed" },
  { number: "50,000+", label: "Devices Connected" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "35%", label: "Average Cost Savings" }
];

export default function IoTSolutionsPage() {
  return (
    <Layout
      title="IoT Solutions - Zion Tech Group"
      description="Comprehensive IoT solutions including smart devices, platforms, industrial IoT, and smart city solutions. Connect, monitor, and optimize with our IoT expertise."
      keywords="IoT solutions, smart devices, industrial IoT, smart city, IoT platform, connected devices, IoT development"
      canonical="https://ziontechgroup.com/iot-solutions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IoT Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Connect, monitor, and optimize your business with our comprehensive IoT solutions. 
                From smart devices to industrial automation, we help you harness the power of connected technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Free Consultation
                </a>
                <a href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                  View Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IoT Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end IoT solutions from device development to platform management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {iotServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="mb-4 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Pricing:</span>
                        <span className="font-semibold text-green-600">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Timeline:</span>
                        <span className="text-sm font-medium">{service.timeline}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits of IoT Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform your business with connected technology and data-driven insights.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {benefit.percentage}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our IoT solutions are tailored for various industries and use cases.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {industry.name}
                  </h3>
                  <ul className="space-y-2">
                    {industry.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IoT Development Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to deliver successful IoT solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <div className="flex items-center text-sm text-blue-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Let's discuss how our IoT solutions can transform your business operations. 
              Get a free consultation and discover the power of connected technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Free Consultation
              </a>
              <a 
                href="/pricing" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}