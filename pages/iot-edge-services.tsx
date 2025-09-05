import * as React from 'react';
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
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  DollarSign, 
  Clock, 
  Award,
  Users,
  Smartphone,
  Building,
  TrendingUp,
  Target,
  Cloud,
  Server,
  BarChart3,
  Settings,
  Monitor,
  HardDrive
} from 'lucide-react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const iotServices = [
  {
    id: 1,
    title: 'IoT Platform Development',
    description: 'Comprehensive IoT platforms for device management, data collection, and real-time analytics with scalable cloud infrastructure.',
    icon: Wifi,
    category: 'Platform',
    price: 'Starting at $12,000/month',
    marketPrice: '$25,000-50,000/month',
    setupTime: '6-12 weeks',
    features: [
      'Device management & provisioning',
      'Real-time data ingestion',
      'Edge computing capabilities',
      'Scalable cloud infrastructure',
      'API management & integration',
      'Device monitoring & diagnostics',
      'Firmware over-the-air updates',
      'Multi-tenant architecture'
    ],
    benefits: [
      'Reduce operational costs by 40-60%',
      'Improve efficiency by 50-70%',
      'Enable predictive maintenance',
      'Scale to millions of devices'
    ],
    targetUsers: 'Manufacturing, Smart Cities, Agriculture, Healthcare'
  },
  {
    id: 2,
    title: 'Edge Computing Solutions',
    description: 'Deploy computing power closer to data sources for real-time processing, reduced latency, and improved performance.',
    icon: Cpu,
    category: 'Edge Computing',
    price: 'Starting at $8,000/month',
    marketPrice: '$15,000-30,000/month',
    setupTime: '4-8 weeks',
    features: [
      'Edge server deployment',
      'Real-time data processing',
      'Machine learning at the edge',
      'Low-latency applications',
      'Offline capability',
      'Bandwidth optimization',
      'Edge analytics',
      'Distributed computing'
    ],
    benefits: [
      'Reduce latency by 80-90%',
      'Lower bandwidth costs by 60%',
      'Enable real-time decision making',
      'Improve data privacy and security'
    ],
    targetUsers: 'Autonomous Vehicles, Manufacturing, Retail, Healthcare'
  },
  {
    id: 3,
    title: 'Industrial IoT (IIoT)',
    description: 'Specialized IoT solutions for industrial environments with rugged devices, predictive maintenance, and operational optimization.',
    icon: Building,
    category: 'Industrial',
    price: 'Starting at $15,000/month',
    marketPrice: '$30,000-60,000/month',
    setupTime: '8-16 weeks',
    features: [
      'Rugged sensor deployment',
      'Predictive maintenance systems',
      'Asset tracking & monitoring',
      'Quality control automation',
      'Energy management',
      'Safety monitoring',
      'Production optimization',
      'Compliance reporting'
    ],
    benefits: [
      'Reduce downtime by 50-70%',
      'Increase production efficiency by 30%',
      'Prevent equipment failures',
      'Optimize energy consumption'
    ],
    targetUsers: 'Manufacturing, Oil & Gas, Mining, Utilities'
  },
  {
    id: 4,
    title: 'Smart City Solutions',
    description: 'Comprehensive smart city infrastructure including traffic management, environmental monitoring, and citizen services.',
    icon: Globe,
    category: 'Smart Cities',
    price: 'Starting at $20,000/month',
    marketPrice: '$40,000-80,000/month',
    setupTime: '12-24 weeks',
    features: [
      'Traffic management systems',
      'Environmental monitoring',
      'Smart lighting & utilities',
      'Public safety systems',
      'Citizen engagement platforms',
      'Data analytics & insights',
      'Integration with city services',
      'Scalable infrastructure'
    ],
    benefits: [
      'Improve citizen quality of life',
      'Reduce operational costs by 30%',
      'Enable data-driven decisions',
      'Enhance public safety'
    ],
    targetUsers: 'Municipalities, Government, Urban Planners'
  },
  {
    id: 5,
    title: 'IoT Security & Compliance',
    description: 'Comprehensive security solutions for IoT devices and networks including threat detection, encryption, and compliance management.',
    icon: Shield,
    category: 'Security',
    price: 'Starting at $10,000/month',
    marketPrice: '$20,000-40,000/month',
    setupTime: '4-8 weeks',
    features: [
      'Device authentication & encryption',
      'Network security monitoring',
      'Threat detection & response',
      'Vulnerability assessments',
      'Compliance management',
      'Security updates & patches',
      'Access control systems',
      'Incident response planning'
    ],
    benefits: [
      'Protect against cyber attacks',
      'Ensure regulatory compliance',
      'Maintain data integrity',
      'Build trust with stakeholders'
    ],
    targetUsers: 'Healthcare, Finance, Government, Critical Infrastructure'
  },
  {
    id: 6,
    title: 'IoT Analytics & AI',
    description: 'Advanced analytics and AI solutions for IoT data including predictive modeling, anomaly detection, and intelligent automation.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $8,000/month',
    marketPrice: '$15,000-30,000/month',
    setupTime: '6-10 weeks',
    features: [
      'Real-time data analytics',
      'Predictive modeling',
      'Anomaly detection',
      'Machine learning algorithms',
      'Custom dashboards',
      'Automated reporting',
      'Pattern recognition',
      'Intelligent automation'
    ],
    benefits: [
      'Gain actionable insights from data',
      'Predict and prevent issues',
      'Automate decision making',
      'Improve operational efficiency'
    ],
    targetUsers: 'Manufacturing, Retail, Agriculture, Energy'
  }
];

const industries = [
  {
    title: "Manufacturing",
    description: "Smart factories with predictive maintenance and quality control",
    icon: "🏭",
    useCases: ["Predictive maintenance", "Quality control", "Asset tracking", "Energy optimization"]
  },
  {
    title: "Healthcare",
    description: "Remote patient monitoring and medical device management",
    icon: "🏥",
    useCases: ["Patient monitoring", "Medical devices", "Asset tracking", "Compliance"]
  },
  {
    title: "Agriculture",
    description: "Precision farming and smart irrigation systems",
    icon: "🌾",
    useCases: ["Crop monitoring", "Irrigation control", "Livestock tracking", "Weather data"]
  },
  {
    title: "Retail",
    description: "Smart stores with inventory management and customer analytics",
    icon: "🛒",
    useCases: ["Inventory tracking", "Customer analytics", "Supply chain", "Loss prevention"]
  },
  {
    title: "Energy & Utilities",
    description: "Smart grids and energy management systems",
    icon: "⚡",
    useCases: ["Smart meters", "Grid monitoring", "Energy optimization", "Outage management"]
  },
  {
    title: "Transportation",
    description: "Fleet management and smart transportation systems",
    icon: "🚛",
    useCases: ["Fleet tracking", "Route optimization", "Driver monitoring", "Maintenance"]
  }
];

const technologies = [
  {
    name: "LoRaWAN",
    description: "Long-range, low-power wireless communication",
    icon: Wifi
  },
  {
    name: "5G",
    description: "Ultra-fast, low-latency connectivity",
    icon: Zap
  },
  {
    name: "Edge Computing",
    description: "Real-time processing at the edge",
    icon: Cpu
  },
  {
    name: "Machine Learning",
    description: "AI-powered analytics and automation",
    icon: BarChart3
  },
  {
    name: "Blockchain",
    description: "Secure, decentralized data management",
    icon: Shield
  },
  {
    name: "Cloud Platforms",
    description: "Scalable cloud infrastructure",
    icon: Cloud
  }
];

export default function IoTEdgeServicesPage() {
  return (
    <Layout
      title="IoT & Edge Computing Services - Zion Tech Group | Smart Solutions"
      description="Comprehensive IoT and edge computing services including platform development, industrial IoT, smart cities, and analytics. Transform your business with connected technology."
      keywords="IoT services, edge computing, industrial IoT, smart cities, IoT platform, connected devices, IoT analytics"
      canonical="https://ziontechgroup.com/iot-edge-services"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-blue-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IoT & Edge Computing Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                Connect, analyze, and optimize with our comprehensive IoT and edge computing solutions. 
                From smart cities to industrial automation, we deliver scalable, secure, and intelligent connected systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Get IoT Consultation
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IoT & Edge Computing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IoT solutions tailored to your business needs with competitive pricing and proven results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {iotServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{service.setupTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-green-600">{service.price}</span>
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Save up to 50% vs market rate
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600">
                      <strong>Target Users:</strong> {service.targetUsers}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded text-center hover:bg-green-700 transition-colors font-semibold"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 border border-green-600 text-green-600 px-4 py-2 rounded text-center hover:bg-green-50 transition-colors font-semibold"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
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
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our IoT solutions are tailored to meet the unique needs of various industries and use cases.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {industry.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage cutting-edge technologies to build robust, scalable, and secure IoT solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tech.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IoT Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge IoT technology with deep expertise to deliver solutions that provide real business value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "IoT Expertise",
                  description: "Certified IoT engineers with 5+ years experience"
                },
                {
                  icon: Shield,
                  title: "Security First",
                  description: "Comprehensive security and compliance solutions"
                },
                {
                  icon: DollarSign,
                  title: "Competitive Pricing",
                  description: "50% lower than market rates with transparent pricing"
                },
                {
                  icon: Clock,
                  title: "Fast Delivery",
                  description: "Rapid development with 4-24 week timelines"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Connect Your World?
              </h2>
              <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
                Transform your business with our comprehensive IoT and edge computing solutions. 
                From smart factories to connected cities, we'll help you build the future of connectivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Start Your IoT Project
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}