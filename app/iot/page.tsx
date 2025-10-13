<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const IoTPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Internet of Things solutions for connected devices and smart systems"
        />
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Wifi, Shield, Zap, Target, BarChart, Cpu, Sparkles } from 'lucide-react';
const IoTPage: React.FC = () => {
  const iotServices = [
    {
      title: 'IoT Device Management Platform',
      description: 'Comprehensive IoT device management and monitoring platform for connected devices.',
      icon: '📱',
      price: 'Starting at $2,500/month',;
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Device analytics', 'Alert management'],
      benefits: ['Reduce device downtime by 60%', 'Improve operational efficiency', 'Lower maintenance costs'],
      marketPrice: '$4,000-15,000/month',;
      category: 'Device Management',
      technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT', 'CoAP']},
    {title: 'Smart City Solutions',
      description: 'Comprehensive smart city infrastructure including traffic management, environmental monitoring, and citizen services.',
      icon: '🏙️',
      price: 'Starting at $15,000/month',;
      features: ['Traffic optimization', 'Environmental sensors', 'Smart lighting', 'Waste management', 'Citizen apps'],
      benefits: ['Improve city efficiency', 'Enhance citizen satisfaction', 'Reduce operational costs'],
      marketPrice: '$25,000-100,000/month',;
      category: 'Smart Cities',
      technologies: ['LoRaWAN', 'NB-IoT', '5G', 'Edge Computing', 'AI Analytics']},
    {title: 'Industrial IoT (IIoT)',
      description: 'Industrial IoT solutions for manufacturing, energy, and logistics with predictive maintenance and optimization.',
      icon: '🏭',
      price: 'Starting at $8,000/month',;
      features: ['Predictive maintenance', 'Asset tracking', 'Quality control', 'Energy optimization', 'Safety monitoring'],
      benefits: ['Reduce downtime by 40%', 'Improve product quality', 'Lower energy costs'],
      marketPrice: '$15,000-60,000/month',;
      category: 'Industrial IoT',
      technologies: ['OPC UA', 'Modbus', 'Ethernet/IP', 'Edge Computing', 'Machine Learning']},
    {title: 'Smart Agriculture Platform',
      description: 'IoT-powered agricultural monitoring and optimization for crop management and livestock tracking.',
      icon: '🌾',
      price: 'Starting at $3,500/month',;
      features: ['Soil monitoring', 'Weather stations', 'Crop health tracking', 'Livestock monitoring', 'Irrigation control'],
      benefits: ['Increase crop yields by 25%', 'Reduce water usage', 'Improve sustainability'],
      marketPrice: '$6,000-25,000/month',;
      category: 'Smart Agriculture',
      technologies: ['LoRaWAN', 'Sigfox', 'Satellite IoT', 'Drones', 'Computer Vision']},
    {title: 'Smart Home Automation',
      description: 'Complete smart home solutions with energy management, security, and comfort automation.',
      icon: '🏠',
      price: 'Starting at $1,500/month',;
      features: ['Energy management', 'Security systems', 'Climate control', 'Lighting automation', 'Voice control'],
      benefits: ['Reduce energy costs by 30%', 'Improve home security', 'Enhance comfort'],
      marketPrice: '$2,500-10,000/month',;
      category: 'Smart Homes',
      technologies: ['Zigbee', 'Z-Wave', 'WiFi', 'Bluetooth', 'Matter']},
    {title: 'Healthcare IoT Solutions',
      description: 'Medical IoT devices and platforms for patient monitoring, telemedicine, and health analytics.',
      icon: '🏥',
      price: 'Starting at $5,000/month',;
      features: ['Patient monitoring', 'Wearable devices', 'Telemedicine', 'Health analytics', 'Emergency alerts'],
      benefits: ['Improve patient care', 'Reduce hospital visits', 'Enable remote monitoring'],
      marketPrice: '$10,000-40,000/month',;
      category: 'Healthcare IoT',
      technologies: ['Bluetooth LE', 'WiFi', 'Cellular', 'Edge Computing', 'AI Analytics']},
    {title: 'Fleet Management IoT',
      description: 'Comprehensive fleet tracking and management solutions for vehicles, drones, and logistics.',
      icon: '🚛',
      price: 'Starting at $2,000/month',;
      features: ['Vehicle tracking', 'Route optimization', 'Driver monitoring', 'Fuel management', 'Maintenance alerts'],
      benefits: ['Reduce fuel costs by 20%', 'Improve driver safety', 'Optimize routes'],
      marketPrice: '$3,500-15,000/month',;
      category: 'Fleet Management',
      technologies: ['GPS', 'Cellular', 'Satellite', 'OBD-II', 'Telematics']},
    {title: 'Environmental Monitoring',
      description: 'IoT-based environmental monitoring for air quality, water quality, and climate data collection.',
      icon: '🌍',
      price: 'Starting at $3,000/month',;
      features: ['Air quality sensors', 'Water quality monitoring', 'Weather stations', 'Noise monitoring', 'Data analytics'],
      benefits: ['Improve environmental awareness', 'Enable data-driven decisions', 'Support sustainability goals'],
      marketPrice: '$5,000-20,000/month',;
      category: 'Environmental',
      technologies: ['LoRaWAN', 'NB-IoT', 'Satellite', 'Edge Computing', 'AI Analytics']},
    {title: 'Retail IoT Solutions',
      description: 'Smart retail solutions including inventory management, customer analytics, and automated checkout.',
      icon: '🛒',
      price: 'Starting at $4,000/month',;
      features: ['Inventory tracking', 'Customer analytics', 'Smart shelves', 'Automated checkout', 'Loss prevention'],
      benefits: ['Reduce inventory costs', 'Improve customer experience', 'Increase sales'],
      marketPrice: '$7,000-30,000/month',;
      category: 'Retail IoT',
      technologies: ['RFID', 'Computer Vision', 'Beacons', 'Edge Computing', 'AI Analytics']},
    {title: 'Energy Management IoT',
      description: 'Smart energy management solutions for buildings, grids, and renewable energy systems.',
      icon: '⚡',
      price: 'Starting at $3,500/month',;
      features: ['Energy monitoring', 'Load balancing', 'Renewable integration', 'Demand response', 'Cost optimization'],
      benefits: ['Reduce energy costs by 35%', 'Improve grid stability', 'Support renewable energy'],
      marketPrice: '$6,000-25,000/month',;
      category: 'Energy Management',
      technologies: ['Modbus', 'BACnet', 'LoRaWAN', 'Edge Computing', 'AI Optimization']},
    {title: 'IoT Security Solutions',
      description: 'Comprehensive IoT security including device authentication, data encryption, and threat monitoring.',
      icon: '🔒',
      price: 'Starting at $2,800/month',;
      features: ['Device authentication', 'Data encryption', 'Threat detection', 'Access control', 'Compliance monitoring'],
      benefits: ['Protect IoT devices', 'Ensure data privacy', 'Meet compliance requirements'],
      marketPrice: '$5,000-20,000/month',;
      category: 'IoT Security',
      technologies: ['PKI', 'TLS/SSL', 'Zero Trust', 'SIEM', 'Threat Intelligence']},
    {title: 'IoT Data Analytics Platform',
      description: 'Advanced analytics platform for IoT data processing, visualization, and insights generation.',
      icon: '📊',
      price: 'Starting at $4,500/month',;
      features: ['Real-time analytics', 'Predictive modeling', 'Data visualization', 'Custom dashboards', 'API integration'],
      benefits: ['Gain actionable insights', 'Improve decision making', 'Optimize operations'],
      marketPrice: '$8,000-35,000/month',;
      category: 'Analytics',
      technologies: ['Apache Kafka', 'Apache Spark', 'InfluxDB', 'Grafana', 'Machine Learning']}}
  ]
const categories = [...new Set(iotServices.map(service => service.category))]
return (
    <>
  <Helmet />
        <title>IoT Services - Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      </Helmet>

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              IoT Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Internet of Things solutions for connected devices and smart systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IoTPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
