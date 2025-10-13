'use client';
import React from 'react';
import { CheckCircle, Star, Wifi, Zap, Shield, Cpu, Brain, Target, BarChart, Settings, Globe } from 'lucide-react';

const IoTEdgePage: React.FC = () => {
  const iotServices = [
    {
      title: 'IoT Device Management Platform',
      description: 'Comprehensive platform for managing, monitoring, and updating IoT devices at scale.',
      icon: '📱',
      price: 'Starting at $3,500/month',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Device analytics', 'Security management'],
      benefits: ['Reduce management overhead by 70%', 'Improve device reliability', 'Enable remote operations'],
      marketPrice: '$5,000-15,000/month',
      category: 'Device Management',
      technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'Kubernetes', 'MQTT']
    },
    {
      title: 'Edge Computing Solutions',
      description: 'Real-time data processing at the edge with low latency and high performance.',
      icon: '⚡',
      price: 'Starting at $4,500/month',
      features: ['Edge analytics', 'Real-time processing', 'Local data storage', 'Offline capabilities', 'Edge AI'],
      benefits: ['Reduce latency by 90%', 'Lower bandwidth costs', 'Enable offline operations'],
      marketPrice: '$7,000-20,000/month',
      category: 'Edge Computing',
      technologies: ['Kubernetes', 'Docker', 'TensorFlow Lite', 'OpenVINO', 'Edge TPU']
    },
    {
      title: 'Industrial IoT (IIoT) Systems',
      description: 'Smart manufacturing and industrial automation with predictive maintenance.',
      icon: '🏭',
      price: 'Starting at $8,000/month',
      features: ['Sensor integration', 'Predictive maintenance', 'Process optimization', 'Quality control', 'Safety monitoring'],
      benefits: ['Reduce downtime by 50%', 'Improve efficiency by 30%', 'Prevent equipment failures'],
      marketPrice: '$15,000-40,000/month',
      category: 'Industrial IoT',
      technologies: ['OPC UA', 'Modbus', 'MQTT', 'Time Series DB', 'Machine Learning']
    },
    {
      title: 'Smart City Solutions',
      description: 'Comprehensive smart city infrastructure with traffic, energy, and environmental monitoring.',
      icon: '🏙️',
      price: 'Starting at $12,000/month',
      features: ['Traffic management', 'Energy monitoring', 'Environmental sensors', 'Public safety', 'Citizen services'],
      benefits: ['Improve city efficiency', 'Reduce energy consumption', 'Enhance citizen experience'],
      marketPrice: '$20,000-60,000/month',
      category: 'Smart Cities',
      technologies: ['LoRaWAN', 'NB-IoT', '5G', 'Big Data', 'AI Analytics']
    },
    {
      title: 'IoT Security & Compliance',
      description: 'Comprehensive security solutions for IoT devices and networks with compliance management.',
      icon: '🔒',
      price: 'Starting at $2,800/month',
      features: ['Device authentication', 'Encryption', 'Vulnerability scanning', 'Compliance monitoring', 'Incident response'],
      benefits: ['Protect against cyber threats', 'Ensure compliance', 'Build trust'],
      marketPrice: '$4,500-12,000/month',
      category: 'Security',
      technologies: ['PKI', 'TLS/SSL', 'Zero Trust', 'SIEM', 'Compliance Tools']
    },
    {
      title: 'Real-Time Data Analytics',
      description: 'Streaming analytics for IoT data with real-time insights and alerting.',
      icon: '📊',
      price: 'Starting at $3,200/month',
      features: ['Stream processing', 'Real-time dashboards', 'Anomaly detection', 'Predictive analytics', 'Alert systems'],
      benefits: ['Make faster decisions', 'Identify issues early', 'Optimize operations'],
      marketPrice: '$5,000-15,000/month',
      category: 'Analytics',
      technologies: ['Apache Kafka', 'Apache Flink', 'Apache Spark', 'InfluxDB', 'Grafana']
    },
    {
      title: 'IoT Integration Services',
      description: 'Connect existing systems with IoT devices and cloud platforms seamlessly.',
      icon: '🔗',
      price: 'Starting at $2,500/month',
      features: ['Legacy system integration', 'API development', 'Data transformation', 'Protocol conversion', 'Cloud connectivity'],
      benefits: ['Modernize existing systems', 'Enable new capabilities', 'Reduce integration costs'],
      marketPrice: '$4,000-10,000/month',
      category: 'Integration',
      technologies: ['REST APIs', 'GraphQL', 'Message Queues', 'ETL Tools', 'Cloud Platforms']
    },
    {
      title: 'Predictive Maintenance Systems',
      description: 'AI-powered predictive maintenance for industrial equipment and machinery.',
      icon: '🔧',
      price: 'Starting at $5,500/month',
      features: ['Vibration analysis', 'Temperature monitoring', 'Performance tracking', 'Failure prediction', 'Maintenance scheduling'],
      benefits: ['Prevent unplanned downtime', 'Reduce maintenance costs', 'Extend equipment life'],
      marketPrice: '$8,000-25,000/month',
      category: 'Predictive Maintenance',
      technologies: ['Machine Learning', 'Time Series Analysis', 'Vibration Sensors', 'Thermal Cameras', 'AI Models']
    },
    {
      title: 'Environmental Monitoring',
      description: 'Comprehensive environmental monitoring with air quality, water, and soil sensors.',
      icon: '🌍',
      price: 'Starting at $2,200/month',
      features: ['Air quality monitoring', 'Water quality sensors', 'Soil analysis', 'Weather stations', 'Compliance reporting'],
      benefits: ['Ensure environmental compliance', 'Protect public health', 'Optimize resource usage'],
      marketPrice: '$3,500-10,000/month',
      category: 'Environmental',
      technologies: ['Environmental Sensors', 'Data Loggers', 'Satellite Data', 'GIS', 'Compliance Systems']
    },
    {
      title: 'Smart Agriculture Solutions',
      description: 'Precision agriculture with IoT sensors, drones, and AI-powered crop management.',
      icon: '🌾',
      price: 'Starting at $4,000/month',
      features: ['Soil monitoring', 'Crop health analysis', 'Weather tracking', 'Irrigation control', 'Yield optimization'],
      benefits: ['Increase crop yields by 25%', 'Reduce water usage by 30%', 'Optimize fertilizer use'],
      marketPrice: '$6,000-18,000/month',
      category: 'Agriculture',
      technologies: ['Soil Sensors', 'Drones', 'Satellite Imagery', 'Machine Learning', 'Precision Agriculture']
    },
    {
      title: 'IoT Device Development',
      description: 'Custom IoT device design and development for specific business requirements.',
      icon: '⚙️',
      price: 'Starting at $15,000/project',
      features: ['Hardware design', 'Firmware development', 'Prototyping', 'Testing & validation', 'Manufacturing support'],
      benefits: ['Custom solutions', 'Competitive advantage', 'Optimized performance'],
      marketPrice: '$25,000-100,000/project',
      category: 'Device Development',
      technologies: ['Arduino', 'Raspberry Pi', 'ESP32', 'ARM Cortex', 'Custom PCBs']
    },
    {
      title: 'IoT Data Management',
      description: 'Comprehensive data management for IoT with storage, processing, and analytics.',
      icon: '🗄️',
      price: 'Starting at $2,800/month',
      features: ['Data ingestion', 'Storage optimization', 'Data processing', 'Quality management', 'Analytics'],
      benefits: ['Handle massive data volumes', 'Ensure data quality', 'Enable advanced analytics'],
      marketPrice: '$4,500-12,000/month',
      category: 'Data Management',
      technologies: ['Time Series DB', 'Apache Kafka', 'Apache Spark', 'Data Lakes', 'ETL Tools']
    }
  ];

  const categories = [...new Set(iotServices.map(service => service.category))];

  return (
    <>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            <p>Transform your business with our advanced page solutions.;</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            <p>Experience the power of our page solutions for your business.</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <Phone>
                Call Now;
              </button>
              <button>
                <Mail>
                Email Us;
  );
};

export default PagePage;
