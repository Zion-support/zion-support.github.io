'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';


const IoTEdgeComputingPage: React.FC = () => {
  const _iotServices = [
    {
      title: 'IoT Sensor Network Design',
      description: 'Comprehensive IoT sensor networks with real-time data collection and edge processing capabilities.',
      icon: '📡',
      price: 'ting at $5,000/project',
      features: ['Sensor selection & placement', 'Network topology design', 'Data collection protocols', 'Edge processing setup', 'Real-time monitoring'],
      benefits: ['Improve operational visibility', 'Reduce manual monitoring', 'Enable predictive maintenance'],
      marketPrice: '$8,000-25,000/project',
      category: 'Sensor Networks',
      technologies: ['LoRaWAN', 'NB-IoT', 'Zigbee', 'WiFi 6', '5G']
    },
    {
      title: 'Edge Computing Solutions',
      description: 'Edge computing infrastructure for real-time data processing and reduced latency applications.',
      icon: '⚡',
      price: 'ting at $3,500/month',
      features: ['Edge server deployment', 'Real-time processing', 'Data filtering & aggregation', 'Local decision making', 'Cloud synchronization'],
      benefits: ['Reduce latency by 80%', 'Lower bandwidth costs', 'Enable offline operation'],
      marketPrice: '$6,000-18,000/month',
      category: 'Edge Computing',
      technologies: ['Kubernetes', 'Docker', 'Edge AI', 'MQTT', 'Apache Kafka']
    },
    {
      title: 'Industrial IoT (IIoT) Systems',
      description: 'Smart manufacturing and industrial automation solutions with IoT integration.',
      icon: '🏭',
      price: 'ting at $8,000/month',
      features: ['Equipment monitoring', 'Predictive maintenance', 'Quality control', 'Energy optimization', 'Safety systems'],
      benefits: ['Increase production efficiency', 'Reduce downtime by 40%', 'Improve product quality'],
      marketPrice: '$15,000-50,000/month',
      category: 'Industrial IoT',
      technologies: ['OPC UA', 'Modbus', 'Ethernet/IP', 'Industrial Protocols', 'SCADA Systems']
    },
    {
      title: 'Smart City Solutions',
      description: 'Comprehensive smart city infrastructure including traffic, utilities, and public services.',
      icon: '🏙️',
      price: 'ting at $15,000/month',
      features: ['Traffic management', 'Smart lighting', 'Waste management', 'Air quality monitoring', 'Public safety'],
      benefits: ['Improve city efficiency', 'Reduce energy consumption', 'Enhance citizen services'],
      marketPrice: '$25,000-100,000/month',
      category: 'Smart Cities',
      technologies: ['LPWAN', 'Cellular IoT', 'Edge Computing', 'Data Analytics', 'AI/ML']
    },
    {
      title: 'IoT Data Analytics Platform',
      description: 'Real-time analytics platform for IoT data with machine learning and predictive insights.',
      icon: '📊',
      price: 'ting at $4,500/month',
      features: ['Real-time data processing', 'Machine learning models', 'Predictive analytics', 'Anomaly detection', 'Custom dashboards'],
      benefits: ['Extract actionable insights', 'Predict equipment failures', 'Optimize operations'],
      marketPrice: '$8,000-25,000/month',
      category: 'Data Analytics',
      technologies: ['Apache Spark', 'TensorFlow', 'InfluxDB', 'Grafana', 'Time Series DB']
    },
    {
      title: 'IoT Security Solutions',
      description: 'Comprehensive security solutions for IoT devices and networks with threat detection.',
      icon: '🔒',
      price: 'ting at $3,200/month',
      features: ['Device authentication', 'Encrypted communication', 'Threat detection', 'Vulnerability scanning', 'Security monitoring'],
      benefits: ['Protect IoT infrastructure', 'Prevent cyber attacks', 'Ensure compliance'],
      marketPrice: '$6,000-20,000/month',
      category: 'IoT Security',
      technologies: ['Zero Trust', 'PKI', 'VPN', 'Firewall', 'SIEM']
    },
    {
      title: 'Connected Vehicle Solutions',
      description: 'IoT solutions for connected vehicles including fleet management and telematics.',
      icon: '🚗',
      price: 'ting at $6,500/month',
      features: ['Fleet tracking', 'Driver behavior analysis', 'Vehicle diagnostics', 'Route optimization', 'Fuel monitoring'],
      benefits: ['Reduce fuel costs by 15%', 'Improve driver safety', 'Optimize fleet operations'],
      marketPrice: '$12,000-40,000/month',
      category: 'Connected Vehicles',
      technologies: ['OBD-II', 'GPS Tracking', 'Cellular Networks', 'CAN Bus', 'Telematics']
    },
    {
      title: 'Smart Agriculture IoT',
      description: 'Precision agriculture solutions with soil monitoring, crop management, and automated irrigation.',
      icon: '🌾',
      price: 'ting at $4,000/month',
      features: ['Soil monitoring', 'Weather stations', 'Irrigation control', 'Crop health monitoring', 'Livestock tracking'],
      benefits: ['Increase crop yield by 20%', 'Reduce water usage', 'Optimize fertilizer application'],
      marketPrice: '$7,000-25,000/month',
      category: 'Smart Agriculture',
      technologies: ['Soil Sensors', 'Weather APIs', 'Irrigation Systems', 'Drones', 'Satellite Imagery']
    },
    {
      title: 'IoT Device Management',
      description: 'Centralized device management platform for monitoring, updating, and maintaining IoT devices.',
      icon: '📱',
      price: 'ting at $2,800/month',
      features: ['Device provisioning', 'Remote updates', 'Health monitoring', 'Configuration management', 'Troubleshooting'],
      benefits: ['Reduce maintenance costs', 'Improve device reliability', 'Enable remote management'],
      marketPrice: '$5,000-15,000/month',
      category: 'Device Management',
      technologies: ['Device Twins', 'OTA Updates', 'Device Registry', 'Configuration Management']
    },
    {
      title: 'Environmental Monitoring',
      description: 'Comprehensive environmental monitoring solutions for air, water, and soil quality.',
      icon: '🌍',
      price: 'ting at $3,500/month',
      features: ['Air quality sensors', 'Water quality monitoring', 'Noise level detection', 'Weather monitoring', 'Compliance reporting'],
      benefits: ['Ensure environmental compliance', 'Protect public health', 'Enable data-driven decisions'],
      marketPrice: '$6,500-20,000/month',
      category: 'Environmental Monitoring',
      technologies: ['Environmental Sensors', 'Data Loggers', 'Compliance Systems', 'Reporting Tools']
    },
    {
      title: 'IoT Integration Services',
      description: 'Integration of IoT devices with existing enterprise systems and cloud platforms.',
      icon: '🔗',
      price: 'ting at $4,500/project',
      features: ['System integration', 'API development', 'Data transformation', 'Cloud connectivity', 'Legacy system integration'],
      benefits: ['Connect existing systems', 'Enable data sharing', 'Improve interoperability'],
      marketPrice: '$8,000-30,000/project',
      category: 'Integration',
      technologies: ['REST APIs', 'GraphQL', 'Message Queues', 'Cloud Platforms', 'Middleware']
    },
    {
      title: 'IoT Consulting & Strategy',
      description: 'Strategic IoT consulting and technology roadmap development for digital transformation.',
      icon: '💡',
      price: 'ting at $350/hour',
      features: ['IoT strategy development', 'Technology assessment', 'Use case identification', 'ROI analysis', 'Implementation planning'],
      benefits: ['Navigate IoT landscape', 'Make informed decisions', 'Maximize IoT investment'],
      marketPrice: '$500-1,200/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Risk Analysis', 'ROI Modeling']
    }
  ];

  return (
    <>
      <Helmet>
        <title>IoT & Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Connect and process data at the edge with IoT solutions and edge computing infrastructure for real-time insights." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              IoT & Edge Computing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect and process data at the edge with IoT solutions and edge computing infrastructure for real-time insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Device Management</h3>
              <p className="text-gray-600">Comprehensive IoT device management and monitoring.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Edge Analytics</h3>
              <p className="text-gray-600">Real-time data processing and analytics at the edge.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Connectivity Solutions</h3>
              <p className="text-gray-600">Secure and reliable connectivity for IoT devices.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IoTEdgeComputingPage;