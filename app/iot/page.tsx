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
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Star, Wifi, Shield, Zap, Target, BarChart, Cpu, Sparkles } from 'lucide-react'
const IoTPage: React.FC = () => {
<<<<<<< HEAD
  const iotServices = [
=======
    const iotServices = [
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Wifi, Shield, Zap, Target, BarChart, Cpu, Sparkles } from 'lucide-react';
;
const IoTPage: React.FC = () => {
const iotServices = [
];
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    {
      title: 'IoT Device Management Platform',
      description: 'Comprehensive IoT device management and monitoring platform for connected devices.',
      icon: '📱',
      price: 'Starting at $2,500/month',;
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Device analytics', 'Alert management'],
      benefits: ['Reduce device downtime by 60%', 'Improve operational efficiency', 'Lower maintenance costs'],
      marketPrice: '$4,000-15,000/month',;
      category: 'Device Management',
<<<<<<< HEAD
      technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT', 'CoAP']},
    {title: 'Smart City Solutions',
=======
      technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT', 'CoAP']
  },
    {
    title: 'Smart City Solutions',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      description: 'Comprehensive smart city infrastructure including traffic management, environmental monitoring, and citizen services.',
      icon: '🏙️',
      price: 'Starting at $15,000/month',;
      features: ['Traffic optimization', 'Environmental sensors', 'Smart lighting', 'Waste management', 'Citizen apps'],
      benefits: ['Improve city efficiency', 'Enhance citizen satisfaction', 'Reduce operational costs'],
      marketPrice: '$25,000-100,000/month',;
      category: 'Smart Cities',
<<<<<<< HEAD
      technologies: ['LoRaWAN', 'NB-IoT', '5G', 'Edge Computing', 'AI Analytics']},
    {title: 'Industrial IoT (IIoT)',
=======
      technologies: ['LoRaWAN', 'NB-IoT', '5G', 'Edge Computing', 'AI Analytics']
  },
    {
    title: 'Industrial IoT (IIoT)',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      description: 'Industrial IoT solutions for manufacturing, energy, and logistics with predictive maintenance and optimization.',
      icon: '🏭',
      price: 'Starting at $8,000/month',;
      features: ['Predictive maintenance', 'Asset tracking', 'Quality control', 'Energy optimization', 'Safety monitoring'],
      benefits: ['Reduce downtime by 40%', 'Improve product quality', 'Lower energy costs'],
      marketPrice: '$15,000-60,000/month',;
      category: 'Industrial IoT',
<<<<<<< HEAD
      technologies: ['OPC UA', 'Modbus', 'Ethernet/IP', 'Edge Computing', 'Machine Learning']},
    {title: 'Smart Agriculture Platform',
=======
<<<<<<< HEAD
      technologies: ['OPC UA', 'Modbus', 'Ethernet/IP', 'Edge Computing', 'Machine Learning']
  },
=======
      technologies: ['OPC UA', 'Modbus', 'Ethernet/IP', 'Edge Computing', 'Machine Learning']]
    },
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    {
    title: 'Smart Agriculture Platform',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      description: 'IoT-powered agricultural monitoring and optimization for crop management and livestock tracking.',
      icon: '🌾',
      price: 'Starting at $3,500/month',;
      features: ['Soil monitoring', 'Weather stations', 'Crop health tracking', 'Livestock monitoring', 'Irrigation control'],
      benefits: ['Increase crop yields by 25%', 'Reduce water usage', 'Improve sustainability'],
      marketPrice: '$6,000-25,000/month',;
      category: 'Smart Agriculture',
<<<<<<< HEAD
      technologies: ['LoRaWAN', 'Sigfox', 'Satellite IoT', 'Drones', 'Computer Vision']},
    {title: 'Smart Home Automation',
=======
      technologies: ['LoRaWAN', 'Sigfox', 'Satellite IoT', 'Drones', 'Computer Vision']
  },
    {
    title: 'Smart Home Automation',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      description: 'Complete smart home solutions with energy management, security, and comfort automation.',
      icon: '🏠',
      price: 'Starting at $1,500/month',;
      features: ['Energy management', 'Security systems', 'Climate control', 'Lighting automation', 'Voice control'],
      benefits: ['Reduce energy costs by 30%', 'Improve home security', 'Enhance comfort'],
      marketPrice: '$2,500-10,000/month',;
      category: 'Smart Homes',
<<<<<<< HEAD
      technologies: ['Zigbee', 'Z-Wave', 'WiFi', 'Bluetooth', 'Matter']},
    {title: 'Healthcare IoT Solutions',
=======
      technologies: ['Zigbee', 'Z-Wave', 'WiFi', 'Bluetooth', 'Matter']
  },
    {
    title: 'Healthcare IoT Solutions',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      description: 'Medical IoT devices and platforms for patient monitoring, telemedicine, and health analytics.',
      icon: '🏥',
      price: 'Starting at $5,000/month',;
      features: ['Patient monitoring', 'Wearable devices', 'Telemedicine', 'Health analytics', 'Emergency alerts'],
      benefits: ['Improve patient care', 'Reduce hospital visits', 'Enable remote monitoring'],
      marketPrice: '$10,000-40,000/month',;
      category: 'Healthcare IoT',
<<<<<<< HEAD
      technologies: ['Bluetooth LE', 'WiFi', 'Cellular', 'Edge Computing', 'AI Analytics']},
    {title: 'Fleet Management IoT',
=======
      technologies: ['Bluetooth LE', 'WiFi', 'Cellular', 'Edge Computing', 'AI Analytics']
  },
    {
    title: 'Fleet Management IoT',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      description: 'Comprehensive fleet tracking and management solutions for vehicles, drones, and logistics.',
      icon: '🚛',
      price: 'Starting at $2,000/month',;
      features: ['Vehicle tracking', 'Route optimization', 'Driver monitoring', 'Fuel management', 'Maintenance alerts'],
      benefits: ['Reduce fuel costs by 20%', 'Improve driver safety', 'Optimize routes'],
      marketPrice: '$3,500-15,000/month',;
      category: 'Fleet Management',
<<<<<<< HEAD
      technologies: ['GPS', 'Cellular', 'Satellite', 'OBD-II', 'Telematics']},
    {title: 'Environmental Monitoring',
=======
      technologies: ['GPS', 'Cellular', 'Satellite', 'OBD-II', 'Telematics']
  },
    {
    title: 'Environmental Monitoring',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      description: 'IoT-based environmental monitoring for air quality, water quality, and climate data collection.',
      icon: '🌍',
      price: 'Starting at $3,000/month',;
      features: ['Air quality sensors', 'Water quality monitoring', 'Weather stations', 'Noise monitoring', 'Data analytics'],
      benefits: ['Improve environmental awareness', 'Enable data-driven decisions', 'Support sustainability goals'],
      marketPrice: '$5,000-20,000/month',;
      category: 'Environmental',
<<<<<<< HEAD
      technologies: ['LoRaWAN', 'NB-IoT', 'Satellite', 'Edge Computing', 'AI Analytics']},
    {title: 'Retail IoT Solutions',
=======
      technologies: ['LoRaWAN', 'NB-IoT', 'Satellite', 'Edge Computing', 'AI Analytics']
  },
    {
    title: 'Retail IoT Solutions',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      description: 'Smart retail solutions including inventory management, customer analytics, and automated checkout.',
      icon: '🛒',
      price: 'Starting at $4,000/month',;
      features: ['Inventory tracking', 'Customer analytics', 'Smart shelves', 'Automated checkout', 'Loss prevention'],
      benefits: ['Reduce inventory costs', 'Improve customer experience', 'Increase sales'],
      marketPrice: '$7,000-30,000/month',;
      category: 'Retail IoT',
<<<<<<< HEAD
      technologies: ['RFID', 'Computer Vision', 'Beacons', 'Edge Computing', 'AI Analytics']},
    {title: 'Energy Management IoT',
=======
      technologies: ['RFID', 'Computer Vision', 'Beacons', 'Edge Computing', 'AI Analytics']
  },
    {
    title: 'Energy Management IoT',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      description: 'Smart energy management solutions for buildings, grids, and renewable energy systems.',
      icon: '⚡',
      price: 'Starting at $3,500/month',;
      features: ['Energy monitoring', 'Load balancing', 'Renewable integration', 'Demand response', 'Cost optimization'],
      benefits: ['Reduce energy costs by 35%', 'Improve grid stability', 'Support renewable energy'],
      marketPrice: '$6,000-25,000/month',;
      category: 'Energy Management',
<<<<<<< HEAD
      technologies: ['Modbus', 'BACnet', 'LoRaWAN', 'Edge Computing', 'AI Optimization']},
    {title: 'IoT Security Solutions',
=======
      technologies: ['Modbus', 'BACnet', 'LoRaWAN', 'Edge Computing', 'AI Optimization']
  },
    {
    title: 'IoT Security Solutions',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      description: 'Comprehensive IoT security including device authentication, data encryption, and threat monitoring.',
      icon: '🔒',
      price: 'Starting at $2,800/month',;
      features: ['Device authentication', 'Data encryption', 'Threat detection', 'Access control', 'Compliance monitoring'],
      benefits: ['Protect IoT devices', 'Ensure data privacy', 'Meet compliance requirements'],
      marketPrice: '$5,000-20,000/month',;
      category: 'IoT Security',
<<<<<<< HEAD
      technologies: ['PKI', 'TLS/SSL', 'Zero Trust', 'SIEM', 'Threat Intelligence']},
    {title: 'IoT Data Analytics Platform',
=======
<<<<<<< HEAD
      technologies: ['PKI', 'TLS/SSL', 'Zero Trust', 'SIEM', 'Threat Intelligence']
  },
=======
      technologies: ['PKI', 'TLS/SSL', 'Zero Trust', 'SIEM', 'Threat Intelligence']]
    },
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    {
    title: 'IoT Data Analytics Platform',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      description: 'Advanced analytics platform for IoT data processing, visualization, and insights generation.',
      icon: '📊',
      price: 'Starting at $4,500/month',;
      features: ['Real-time analytics', 'Predictive modeling', 'Data visualization', 'Custom dashboards', 'API integration'],
      benefits: ['Gain actionable insights', 'Improve decision making', 'Optimize operations'],
      marketPrice: '$8,000-35,000/month',;
      category: 'Analytics',
<<<<<<< HEAD
      technologies: ['Apache Kafka', 'Apache Spark', 'InfluxDB', 'Grafana', 'Machine Learning']}}
=======
<<<<<<< HEAD
      technologies: ['Apache Kafka', 'Apache Spark', 'InfluxDB', 'Grafana', 'Machine Learning']
  }
    }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  ]
const categories = [...new Set(iotServices.map(service => service.category))]
return (
    <>
  <Helmet />
        <title>IoT Services - Zion Tech Group</title>
<<<<<<< HEAD
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
=======
        <meta name="description" content="Advanced AI solutions" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50"></div>
        {/* Hero Section */}</div>
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-teal-800 text-white py-20"></section>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/50 to-teal-800/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center"></div>
              <h1>
                IoT Solutions</h1>
              </h1>
              <p>
                Connect, monitor, and optimize your world with intelligent Internet of Things solutions
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Explore IoT Solutions
                </button>
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Schedule IoT Consultation,
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2>
                Why Choose Our IoT Services?,
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">End-to-end IoT solutions with proven expertise in connectivity, security, and analytics</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Wifi>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connectivity Experts</h3>
                <p className="text-gray-600">Multi-protocol IoT connectivity solutions</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Shield>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Comprehensive IoT security and data protection</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Zap>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Computing</h3>
                <p className="text-gray-600">Low-latency processing at the edge</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Target>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Tailored IoT solutions for your specific needs</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services by Category */}
        {
    categories.map(category => (
  }
          <section key={category} className="py-16 bg-gray-50"></section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
              <div className="text-center mb-12"></div>
                <h2 className="text-4xl font-bold text-white mb-4">{category} Solutions</h2>
                <p>
                  Specialized {category.toLowerCase()} solutions powered by IoT technology
                </p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {
    iotServices
                  .filter(service => service.category === category),
                  .map((service, index) => (</div>
  }
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"></div>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="mb-4"></div>
                        <div className="flex items-center justify-between mb-2"></div>
                          <span className="text-2xl font-bold text-green-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold"></div>
                          Save up to 40% vs market rates</div>
                        </div>
                      </div>
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul>
                          {
    service.features.map((feature, featureIndex) => (
  }
                            <li>
                              <CheckCircle>

                              {feature}
                            </li>
                          ))}

                        </ul>
                      </div>
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2"></div>
                          {
    service.technologies.map((tech, techIndex) => (</div>
  }
                            <span>

                              {tech}
                            </span>
                          ))}

                        </div>
                      </div>
                      <div className="mb-6"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul>
                          {
    service.benefits.map((benefit, benefitIndex) => (
  }
                            <li>
                              <Star>

                              {benefit}
                            </li>
                          ))}

                        </ul>
                      </div>
                      <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Get IoT Quote
                      </button>
                    </div>

                  ))}
              </div>
            </div>
          </section>
        ))}
{/* IoT Capabilities Showcase */}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2>
                Our IoT Capabilities
              </h2>
              <p>
                Comprehensive IoT technologies and methodologies for connected solutions,
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg"></div>
                <Wifi>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connectivity</h3>
                <p className="text-gray-600">Multi-protocol connectivity including WiFi, LoRaWAN, NB-IoT, and 5G</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg"></div>
                <Shield>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">End-to-end security with device authentication and data encryption</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg"></div>
                <Cpu>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Computing</h3>
                <p className="text-gray-600">Low-latency processing and real-time decision making at the edge</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg"></div>
                <Target>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Device Management</h3>
                <p className="text-gray-600">Comprehensive device lifecycle management and monitoring</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg"></div>
                <Sparkles>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analytics</h3>
                <p className="text-gray-600">Machine learning and AI for predictive analytics and insights</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg"></div>
                <BarChart>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Visualization</h3>
                <p className="text-gray-600">Real-time dashboards and analytics for IoT data insights</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"></div>
            <h2>
              Ready to Connect Your World?
            </h2>
            <p>
              Contact our IoT experts for a free consultation and custom IoT strategy development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a>
                📞 +1 302 464 0950
              </a>
              <a>
                ✉️ kleber@ziontechgroup.com,
              </a>
            </div>
            <div className="mt-8 text-sm text-green-200"></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default IoTPage
=======
technologies: ['Apache Kafka', 'Apache Spark', 'InfluxDB', 'Grafana', 'Machine Learning']]
    };
  ];
;
const categories = [...new Set(iotServices.map(service => service.category))];
  return (
    <div>
        <title>IoT Services - Zion Tech Group<
        <meta name="description" content="Comprehensive IoT solutions including smart cities, industrial IoT, smart agriculture, and connected device management." 
        <meta name="keywords" content="IoT services, smart cities, industrial IoT, smart agriculture, connected devices, Internet of Things" 
      <
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}<
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-teal-800 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-30"><
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/50 to-teal-800/50"><
          <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"><
            <div className="text-center"><
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                IoT Solutions<
              <
              <p className="text-xl m,
    d:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
                Connect, monitor, and optimize your world with intelligent Internet of Things solutions
              <
              <div className="flex flex-col sm: flex-row gap-4 justify-center"><
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg">
                  Explore IoT Solutions
                <
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Schedule IoT Consultation
                <
              <
            <
          <
        <
        {/* Key Benefits *
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><
            <div className="text-center mb-12"><
              <h2 className="text-3xl m,
    d:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IoT Services?
              <
              <p className="text-xl text-gray-600">
                End-to-end IoT solutions with proven expertise in connectivity, security, and analytics
              <
            <
            <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-4 gap-8"><
              <div className="text-center"><
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><
                  <Wifi className="w-8 h-8 text-green-600" 
                <
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connectivity Experts<
                <p className="text-gray-600">Multi-protocol IoT connectivity solutions<
              <
              <div className="text-center"><
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><
                  <Shield className="w-8 h-8 text-blue-600" 
                <
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First<
                <p className="text-gray-600">Comprehensive IoT security and data protection<
              <
              <div className="text-center"><
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><
                  <Zap className="w-8 h-8 text-purple-600" 
                <
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Computing<
                <p className="text-gray-600">Low-latency processing at the edge<
              <
              <div className="text-center"><
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><
                  <Target className="w-8 h-8 text-orange-600" 
                <
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions<
                <p className="text-gray-600">Tailored IoT solutions for your specific needs<
              <
            <
          <
        <
        {/* Services by Category *
        {categories.map(category => (
          <section key={category)} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"><
              <div className="text-center mb-12"><
                <h2 className="text-3xl m,
    d:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                <
                <p className="text-xl text-gray-600">
                  Specialized {category.toLowerCase()} solutions powered by IoT technology
                <
              <
              <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-8">
                {iotServices
                  .filter(service => service.category === category)
                  .map((service, index) => (<
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"><
                      <div className="text-4xl mb-4">{service.icon}<
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}<
                      <p className="text-gray-600 mb-4">{service.description}<
                      <div className="mb-4"><
                        <div className="flex items-center justify-between mb-2"><
                          <span className="text-2xl font-bold text-green-600">{service.price}<
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}<
                        <
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 40% vs market rates<
                        <
                      <
                      <div className="mb-4"><
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features: <
                        <ul className="space-y-1">)
                          {service.features.map((feature), featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" 
                              {feature};
                            <)
                          ))};
                        <
                      <
                      <div className="mb-4"><
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies: <
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech), techIndex) => (<
                            <span key={techIndex} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                              {tech};
                            <)
                          ))};
                        <
                      <
                      <div className="mb-6"><
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits: <
                        <ul className="space-y-1">
                          {service.benefits.map((benefit), benefitIndex) => (<li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        Get IoT Quote
                      <
                    <
                  ))};
              <
            <
          <
        ))};
        {/* IoT Capabilities Showcase *
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"><
            <div className="text-center mb-12"><
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IoT Capabilities
              <
              <p className="text-xl text-gray-600">
                Comprehensive IoT technologies and methodologies for connected solutions
              <
            <
            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-3 gap-8"><
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg"><
                <Wifi className="w-12 h-12 text-green-600 mx-auto mb-4" 
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connectivity<
                <p className="text-gray-600">Multi-protocol connectivity including WiFi, LoRaWAN, NB-IoT, and 5G<
              <
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg"><
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" 
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security<
                <p className="text-gray-600">End-to-end security with device authentication and data encryption<
              <
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg"><
                <Cpu className="w-12 h-12 text-purple-600 mx-auto mb-4" 
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Computing<
                <p className="text-gray-600">Low-latency processing and real-time decision making at the edge<
              <
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg"><
                <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" 
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Device Management<
                <p className="text-gray-600">Comprehensive device lifecycle management and monitoring<
              <
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg"><
                <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" 
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analytics<
                <p className="text-gray-600">Machine learning and AI for predictive analytics and insights<
              <
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg"><
                <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" 
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Visualization<
                <p className="text-gray-600">Real-time dashboards and analytics for IoT data insights<
              <
            <
          <
        <
        {/* Contact Section *
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"><
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Connect Your World?
            <
            <p className="text-xl mb-8 text-green-100">
              Contact our IoT experts for a free consultation and custom IoT strategy development
            <
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><
              <a 
                href="tel:+13024640950"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
              ></a>
                📞 +1 302 464 0950
              <
              <a href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hove,
    r:text-green-600 transition-colors">
                ✉️ kleber@ziontechgroup.com
              <
            <
            <div className="mt-8 text-sm text-green-200"><
              <p>📍 364 E Main St STE 1008, Middletown DE 19709<
            <
          <
        <
      <
    <
  );
};
export default IoTPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
