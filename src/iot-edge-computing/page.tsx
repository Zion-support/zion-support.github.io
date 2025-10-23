import React from 'react'

import { Wifi } from 'lucide-react'
import { CheckCircle, Star, Zap, BarChart, Shield, Database, Helmet } from 'lucide-react'
import { Cpu, Globe } from 'lucide-react'

const IoTEdgeComputingPage: React.FC = () => {
  const iotServices = [
import {Wifi, CheckCircle, Star, Zap, BarChart, Database, Shield, Helmet, Globe, Globe} from 'lucide-react';;;
constIoTEdgeComputingPage: React.FC= () =>{constiotServices= [
    {
      title: 'IoT Sensor Network Design',
      description: 'Comprehensive IoT sensor networks with real-time data collection and edge processing capabilities.',
      icon: '📡',
      price: 'Starting at $5,00 0/project',
      features: ['Sensor selection & placement', 'Network topology design', 'Data collection protocols', 'Edge processing setup', 'Real-time monitoring'],
      benefits: ['Improve operational visibility', 'Reduce manual monitoring', 'Enable predictive maintenance'],
      marketPrice: '$8,00 0-2 5,00 0/project',
      category: 'Sensor Networks',
      technologies: ['LoRaWAN', 'NB-IoT', 'Zigbee', 'WiFi 6', '5 G']
   },
    {title: 'Edge Computing Solutions',
      description: 'Edge computing infrastructure for real-time data processing and reduced latency applications.',
      icon: '⚡',
      price: 'Starting at $3,50 0/month',
      features: ['Edge server deployment', 'Real-time processing', 'Data filtering & aggregation', 'Local decision making', 'Cloud synchronization'],
      benefits: ['Reduce latency by80%', 'Lower bandwidth costs', 'Enable offline operation'],
      marketPrice: '$6,00 0-1 8,00 0/month',
      category: 'Edge Computing',
      technologies: ['Kubernetes', 'Docker', 'Edge AI', 'MQTT', 'Apache Kafka']
   },
    {title: 'Industrial IoT (IIoT) Systems',
      description: 'Smart manufacturing and industrial automation solutions with IoT integration.',
      icon: '🏭',
      price: 'Starting at $8,00 0/month',
      features: ['Equipment monitoring', 'Predictive maintenance', 'Quality control', 'Energy optimization', 'Safety systems'],
      benefits: ['Increase production efficiency', 'Reduce do wntime by40%', 'Improve product quality'],
      marketPrice: '$1 5,00 0-5 0,00 0/month',
      category: 'Industrial IoT',
      technologies: ['OPC UA', 'Modbus', 'Ethernet/IP', 'Industrial Protocols', 'SCADA Systems']
   },
    {title: 'Smart City Solutions',
      description: 'Comprehensive smart city infrastructure including traffic, utilities, and public services.',
      icon: '🏙️',
      price: 'Starting at $1 5,00 0/month',
      features: ['Traffic management', 'Smart lighting', 'Waste management', 'Air quality monitoring', 'Public safety'],
      benefits: ['Improve city efficiency', 'Reduce energy consumption', 'Enhance citizen services'],
      marketPrice: '$2 5,00 0-10 0,00 0/month',
      category: 'Smart Cities',
      technologies: ['LPWAN', 'Cellular IoT', 'Edge Computing', 'Data Analytics', 'AI/ML']
   },
    {title: 'IoT Data Analytics Platform',
      description: 'Real-time analytics platform for IoT data with machine learning and predictive insights.',
      icon: '📊',
      price: 'Starting at $4,50 0/month',
      features: ['Real-time data processing', 'Machine learning models', 'Predictive analytics', 'Anomaly detection', 'Custom dashboards'],
      benefits: ['Extract actionable insights', 'Predict equipment failures', 'Optimize operations'],
      marketPrice: '$8,00 0-2 5,00 0/month',
      category: 'Data Analytics',
      technologies: ['Apache Spark', 'TensorFlow', 'InfluxDB', 'Grafana', 'Time Series DB']
   },
    {title: 'IoT Security Solutions',
      description: 'Comprehensive security solutions for IoT devices and networks with threat detection.',
      icon: '🔒',
      price: 'Starting at $3,20 0/month',
      features: ['Device authentication', 'Encrypted communication', 'Threat detection', 'Vulnerability scanning', 'Security monitoring'],
      benefits: ['Protect IoT infrastructure', 'Prevent cyber attacks', 'Ensure compliance'],
      marketPrice: '$6,00 0-2 0,00 0/month',
      category: 'IoT Security',
      technologies: ['Zero Trust', 'PKI', 'VPN', 'Firewall', 'SIEM']
   },
    {title: 'Connected Vehicle Solutions',
      description: 'IoT solutions for connected vehicles including fleet management and telematics.',
      icon: '🚗',
      price: 'Starting at $6,50 0/month',
      features: ['Fleet tracking', 'Driver behavior analysis', 'Vehicle diagnostics', 'Route optimization', 'Fuel monitoring'],
      benefits: ['Reduce fuel costs by15%', 'Improve driver safety', 'Optimize fleet operations'],
      marketPrice: '$1 2,00 0-4 0,00 0/month',
      category: 'Connected Vehicles',
      technologies: ['OBD-II', 'GPS Tracking', 'Cellular Networks', 'CAN Bus', 'Telematics']
   },
    {title: 'Smart Agriculture IoT',
      description: 'Precision agriculture solutions with soil monitoring, crop management, and automated irrigation.',
      icon: '🌾',
      price: 'Starting at $4,00 0/month',
      features: ['Soil monitoring', 'Weather stations', 'Irrigation control', 'Crop health monitoring', 'Livestock tracking'],
      benefits: ['Increase crop yield by20%', 'Reduce water usage', 'Optimize fertilizer application'],
      marketPrice: '$7,00 0-2 5,00 0/month',
      category: 'Smart Agriculture',
      technologies: ['Soil Sensors', 'Weather APIs', 'Irrigation Systems', 'Drones', 'Satellite Imagery']
   },
    {title: 'IoT Device Management',
      description: 'Centralized device management platform for monitoring, updating, and maintaining IoT devices.',
      icon: '📱',
      price: 'Starting at $2,80 0/month',
      features: ['Device provisioning', 'Remote updates', 'Health monitoring', 'Configuration management', 'Troubleshooting'],
      benefits: ['Reduce maintenance costs', 'Improve device reliability', 'Enable remote management'],
      marketPrice: '$5,00 0-1 5,00 0/month',
      category: 'Device Management',
      technologies: ['Device Twins', 'OTA Updates', 'Device Registry', 'Configuration Management']
   },
    {title: 'Environmental Monitoring',
      description: 'Comprehensive environmental monitoring solutions for air, water, and soil quality.',
      icon: '🌍',
      price: 'Starting at $3,50 0/month',
      features: ['Air quality sensors', 'Water quality monitoring', 'Noise level detection', 'Weather monitoring', 'Compliance reporting'],
      benefits: ['Ensure environmental compliance', 'Protect public health', 'Enable data-driven decisions'],
      marketPrice: '$6,50 0-2 0,00 0/month',
      category: 'Environmental Monitoring',
      technologies: ['Environmental Sensors', 'Data Loggers', 'Compliance Systems', 'Reporting Tools']
   },
    {title: 'IoT Integration Services',
      description: 'Integration of IoT devices with existing enterprise systems and cloud platforms.',
      icon: '🔗',
      price: 'Starting at $4,50 0/project',
      features: ['System integration', 'API development', 'Data transformation', 'Cloud connectivity', 'Legacy system integration'],
      benefits: ['Connect existing systems', 'Enable data sharing', 'Improve interoperability'],
      marketPrice: '$8,00 0-3 0,00 0/project',
      category: 'Integration',
      technologies: ['REST APIs', 'GraphQL', 'Message Queues', 'Cloud Platforms', 'Middleware']
   },
    {title: 'IoT Consulting & Strategy',
      description: 'Strategic IoT consulting and technology roadmap development for digital transformation.',
      icon: '💡',
      price: 'Starting at $35 0/hour',
      features: ['IoT strategy development', 'Technology assessment', 'Use case identification', 'ROI analysis', 'Implementation planning'],
      benefits: ['Navigate IoT landscape', 'Make informed decisions', 'Maximize IoT investment'],
      marketPrice: '$50 0-1,20 0/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Risk Analysis', 'ROI Modeling']
    }
  ]
  const categories = [...new Set(iotServices.map(service => service.category))]
  return (
    <>
      <Helmet>
        <title>IoT & Edge Computing Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Advanced IoT and edge computing solutions for smart cities, industrial automation, and connected devices.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;IoT services, edge computing, smart cities, industrial IoT, sensor networks, connected devices&quot; />
      </Helmet>
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20&quot;></section>
          <div className=&quot;absolute inset-0 bg-black opacity-20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center&quot;></div>
              <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
                IoT & Edge Computing Services
              </h1>
              <p className=&quot;text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto&quot;>
                Connect the physical and digital worlds with intelligent IoT solutions and edge computing
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                <button className=&quot;bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors&quot;>
                  Explore IoT Solutions
                </button>
                <button className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors&quot;>
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className=&quot;py-16 bg-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-12&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                Why Choose Our IoT Services?
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Comprehensive IoT solutions that transform your business with connected intelligence
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Wifi className=&quot;w-8 h-8 text-cyan-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Connected Intelligence</h3>
                <p className=&quot;text-gray-600&quot;>Transform data into actionable insights with IoT</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Cpu className=&quot;w-8 h-8 text-blue-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Edge Processing</h3>
                <p className=&quot;text-gray-600&quot;>Real-time processing at the edge for instant decisions</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Shield className=&quot;w-8 h-8 text-green-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Enterprise Security</h3>
                <p className=&quot;text-gray-600&quot;>Bank-level security for all IoT devices and networks</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Zap className=&quot;w-8 h-8 text-orange-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Scalable Solutions</h3>
                <p className=&quot;text-gray-600&quot;>Solutions that grow with your business needs</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className=&quot;py-16 bg-gray-50&quot;></section>
            <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
              <div className=&quot;text-center mb-12&quot;></div>
                <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                  {category} Services
                </h2>
                <p className=&quot;text-xl text-gray-600&quot;>
                  Specialized {category.toLowerCase()} solutions for connected environments
                </p>
              </div>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
                {iotServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow&quot;></div>
                      <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                      <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>{service.title}</h3>
                      <p className=&quot;text-gray-600 mb-4&quot;>{service.description}</p>
                      <div className=&quot;mb-4&quot;></div>
                        <div className=&quot;flex items-center justify-between mb-2&quot;></div>
                          <span className=&quot;text-2xl font-bold text-cyan-600&quot;>{service.price}</span>
                          <span className=&quot;text-sm text-gray-500&quot;>Market: {service.marketPrice}</span>
                        </div>
                        <div className=&quot;text-sm text-green-600 font-semibold&quot;></div>
                          Save up to 45% vs market rates
                        </div>
                      </div>
                      <div className=&quot;mb-4&quot;></div>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Key Features:</h4>
                        <ul className=&quot;space-y-1&quot;>
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-600&quot;>
                              <CheckCircle className=&quot;w-4 h-4 text-green-500 mr-2 flex-shrink-0&quot; />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className=&quot;mb-4&quot;></div>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Technologies:</h4>
                        <div className=&quot;flex flex-wrap gap-2&quot;></div>
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className=&quot;bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded&quot;>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className=&quot;mb-6&quot;></div>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Business Benefits:</h4>
                        <ul className=&quot;space-y-1&quot;>
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className=&quot;flex items-center text-sm text-gray-600&quot;>
                              <Star className=&quot;w-4 h-4 text-yellow-500 mr-2 flex-shrink-0&quot; />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className=&quot;w-full bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors&quot;>
                        Get IoT Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
        {/* IoT Capabilities Showcase */}
        <section className=&quot;py-16 bg-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-12&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                Our IoT Capabilities
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Comprehensive IoT technologies and edge computing expertise
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-lg&quot;></div>
                <Wifi className=&quot;w-12 h-12 text-cyan-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Sensor Networks</h3>
                <p className=&quot;text-gray-600&quot;>Comprehensive sensor network design and deployment</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg&quot;></div>
                <Cpu className=&quot;w-12 h-12 text-blue-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Edge Computing</h3>
                <p className=&quot;text-gray-600&quot;>Real-time processing and decision making at the edge</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg&quot;></div>
                <Shield className=&quot;w-12 h-12 text-green-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>IoT Security</h3>
                <p className=&quot;text-gray-600&quot;>Comprehensive security for IoT devices and networks</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg&quot;></div>
                <BarChart className=&quot;w-12 h-12 text-purple-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Data Analytics</h3>
                <p className=&quot;text-gray-600&quot;>Real-time analytics and machine learning for IoT data</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg&quot;></div>
                <Globe className=&quot;w-12 h-12 text-orange-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Smart Cities</h3>
                <p className=&quot;text-gray-600&quot;>Comprehensive smart city infrastructure solutions</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg&quot;></div>
                <Database className=&quot;w-12 h-12 text-pink-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Device Management</h3>
                <p className=&quot;text-gray-600&quot;>Centralized management and monitoring of IoT devices</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className=&quot;py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Ready to Connect Your World?
            </h2>
            <p className=&quot;text-xl mb-8 text-cyan-100&quot;>
              Contact our IoT experts for a free consultation and custom connected solution strategy
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors inline-flex items-center&quot;
              >
                📞 +1 302 464 0950
              </a>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors&quot;
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className=&quot;mt-8 text-sm text-cyan-200&quot;></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default IoTEdgeComputingPage
