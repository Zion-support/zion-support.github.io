import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Star, Wifi, Shield, Zap, Target, BarChart, Cpu, Sparkles } from 'lucide-react'
const iotServices = [
    {
      title: 'IoT Device Management Platform',
      description: 'Comprehensive IoT device management and monitoring platform for connected devices.',
      icon: '📱',
      price: 'Starting at $2,500/month',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Device analytics', 'Alert management'],
      benefits: ['Reduce device downtime by 60%', 'Improve operational efficiency', 'Lower maintenance costs'],
      marketPrice: '$4,000-15,000/month',
      category: 'Device Management',
      technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT', 'CoAP']
    },
    {
      title: 'Smart City Solutions',
      description: 'Comprehensive smart city infrastructure including traffic management, environmental monitoring, and citizen services.',
      icon: '🏙️',
      price: 'Starting at $15,000/month',
      features: ['Traffic optimization', 'Environmental sensors', 'Smart lighting', 'Waste management', 'Citizen apps'],
      benefits: ['Improve city efficiency', 'Enhance citizen satisfaction', 'Reduce operational costs'],
      marketPrice: '$25,000-100,000/month',
      category: 'Smart Cities',
      technologies: ['LoRaWAN', 'NB-IoT', '5G', 'Edge Computing', 'AI Analytics']
    },
    {
      title: 'Industrial IoT (IIoT)',
      description: 'Industrial IoT solutions for manufacturing, energy, and logistics with predictive maintenance and optimization.',
      icon: '🏭',
      price: 'Starting at $8,000/month',
      features: ['Predictive maintenance', 'Asset tracking', 'Quality control', 'Energy optimization', 'Safety monitoring'],
      benefits: ['Reduce downtime by 40%', 'Improve product quality', 'Lower energy costs'],
      marketPrice: '$15,000-60,000/month',
      category: 'Industrial IoT',
      technologies: ['OPC UA', 'Modbus', 'Ethernet/IP', 'Edge Computing', 'Machine Learning']
    },
    {
      title: 'Smart Agriculture Platform',
      description: 'IoT-powered agricultural monitoring and optimization for crop management and livestock tracking.',
      icon: '🌾',
      price: 'Starting at $3,500/month',
      features: ['Soil monitoring', 'Weather stations', 'Crop health tracking', 'Livestock monitoring', 'Irrigation control'],
      benefits: ['Increase crop yields by 25%', 'Reduce water usage', 'Improve sustainability'],
      marketPrice: '$6,000-25,000/month',
      category: 'Smart Agriculture',
      technologies: ['LoRaWAN', 'Sigfox', 'Satellite IoT', 'Drones', 'Computer Vision']
    },
    {
      title: 'Smart Home Automation',
      description: 'Complete smart home solutions with energy management, security, and comfort automation.',
      icon: '🏠',
      price: 'Starting at $1,500/month',
      features: ['Energy management', 'Security systems', 'Climate control', 'Lighting automation', 'Voice control'],
      benefits: ['Reduce energy costs by 30%', 'Improve home security', 'Enhance comfort'],
      marketPrice: '$2,500-10,000/month',
      category: 'Smart Homes',
      technologies: ['Zigbee', 'Z-Wave', 'WiFi', 'Bluetooth', 'Matter']
    },
    {
      title: 'Healthcare IoT Solutions',
      description: 'Medical IoT devices and platforms for patient monitoring, telemedicine, and health analytics.',
      icon: '🏥',
      price: 'Starting at $5,000/month',
      features: ['Patient monitoring', 'Wearable devices', 'Telemedicine', 'Health analytics', 'Emergency alerts'],
      benefits: ['Improve patient care', 'Reduce hospital visits', 'Enable remote monitoring'],
      marketPrice: '$10,000-40,000/month',
      category: 'Healthcare IoT',
      technologies: ['Bluetooth LE', 'WiFi', 'Cellular', 'Edge Computing', 'AI Analytics']
    },
    {
      title: 'Fleet Management IoT',
      description: 'Comprehensive fleet tracking and management solutions for vehicles, drones, and logistics.',
      icon: '🚛',
      price: 'Starting at $2,000/month',
      features: ['Vehicle tracking', 'Route optimization', 'Driver monitoring', 'Fuel management', 'Maintenance alerts'],
      benefits: ['Reduce fuel costs by 20%', 'Improve driver safety', 'Optimize routes'],
      marketPrice: '$3,500-15,000/month',
      category: 'Fleet Management',
      technologies: ['GPS', 'Cellular', 'Satellite', 'OBD-II', 'Telematics']
    },
    {
      title: 'Environmental Monitoring',
      description: 'IoT-based environmental monitoring for air quality, water quality, and climate data collection.',
      icon: '🌍',
      price: 'Starting at $3,000/month',
      features: ['Air quality sensors', 'Water quality monitoring', 'Weather stations', 'Noise monitoring', 'Data analytics'],
      benefits: ['Improve environmental awareness', 'Enable data-driven decisions', 'Support sustainability goals'],
      marketPrice: '$5,000-20,000/month',
      category: 'Environmental',
      technologies: ['LoRaWAN', 'NB-IoT', 'Satellite', 'Edge Computing', 'AI Analytics']
    },
    {
      title: 'Retail IoT Solutions',
      description: 'Smart retail solutions including inventory management, customer analytics, and automated checkout.',
      icon: '🛒',
      price: 'Starting at $4,000/month',
      features: ['Inventory tracking', 'Customer analytics', 'Smart shelves', 'Automated checkout', 'Loss prevention'],
      benefits: ['Reduce inventory costs', 'Improve customer experience', 'Increase sales'],
      marketPrice: '$7,000-30,000/month',
      category: 'Retail IoT',
      technologies: ['RFID', 'Computer Vision', 'Beacons', 'Edge Computing', 'AI Analytics']
    },
    {
      title: 'Energy Management IoT',
      description: 'Smart energy management solutions for buildings, grids, and renewable energy systems.',
      icon: '⚡',
      price: 'Starting at $3,500/month',
      features: ['Energy monitoring', 'Load balancing', 'Renewable integration', 'Demand response', 'Cost optimization'],
      benefits: ['Reduce energy costs by 35%', 'Improve grid stability', 'Support renewable energy'],
      marketPrice: '$6,000-25,000/month',
      category: 'Energy Management',
      technologies: ['Modbus', 'BACnet', 'LoRaWAN', 'Edge Computing', 'AI Optimization']
    },
    {
      title: 'IoT Security Solutions',
      description: 'Comprehensive IoT security including device authentication, data encryption, and threat monitoring.',
      icon: '🔒',
      price: 'Starting at $2,800/month',
      features: ['Device authentication', 'Data encryption', 'Threat detection', 'Access control', 'Compliance monitoring'],
      benefits: ['Protect IoT devices', 'Ensure data privacy', 'Meet compliance requirements'],
      marketPrice: '$5,000-20,000/month',
      category: 'IoT Security',
      technologies: ['PKI', 'TLS/SSL', 'Zero Trust', 'SIEM', 'Threat Intelligence']
    },
    {
      title: 'IoT Data Analytics Platform',
      description: 'Advanced analytics platform for IoT data processing, visualization, and insights generation.',
      icon: '📊',
      price: 'Starting at $4,500/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Data visualization', 'Custom dashboards', 'API integration'],
      benefits: ['Gain actionable insights', 'Improve decision making', 'Optimize operations'],
      marketPrice: '$8,000-35,000/month',
      category: 'Analytics',
      technologies: ['Apache Kafka', 'Apache Spark', 'InfluxDB', 'Grafana', 'Machine Learning']
    }
  ]
  const categories = [...new Set(iotServices.map(service => service.category))]
  return (
    <>
      <Helmet>
        <title>IoT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IoT solutions including smart cities, industrial IoT, smart agriculture, and connected device management." />
        <meta name="keywords" content="IoT services, smart cities, industrial IoT, smart agriculture, connected devices, Internet of Things" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50" loading="lazy">
        >{/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-teal-800 text-white py-20" loading="lazy">
          <div className="absolute inset-0 bg-black opacity-30" loading="lazy"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/50 to-teal-800/50" loading="lazy"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" loading="lazy"></div>
            <div className="text-center" loading="lazy"></div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent" loading="lazy">
                IoT Solutions</h1>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto" loading="lazy">Connect, monitor, and optimize your world with intelligent Internet of Things solutions</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy"></div>
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg" loading="lazy" aria-label="Action button">Explore IoT Solutions</button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors" loading="lazy" aria-label="Action button">Schedule IoT Consultation</button>
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className="py-16 bg-white" loading="lazy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" loading="lazy"></div>
            <div className="text-center mb-12" loading="lazy"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" loading="lazy">Why Choose Our IoT Services?</h2>
              <p className="text-xl text-gray-600" loading="lazy">End-to-end IoT solutions with proven expertise in connectivity, security, and analytics</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" loading="lazy"></div>
              <div className="text-center" loading="lazy"></div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" loading="lazy"></div>
                  <Wifi className="w-8 h-8 text-green-600" loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Connectivity Experts</h3>
                <p className="text-gray-600" loading="lazy">Multi-protocol IoT connectivity solutions</p>
              </div>
              <div className="text-center" loading="lazy"></div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" loading="lazy"></div>
                  <Shield className="w-8 h-8 text-blue-600" loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Security First</h3>
                <p className="text-gray-600" loading="lazy">Comprehensive IoT security and data protection</p>
              </div>
              <div className="text-center" loading="lazy"></div>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" loading="lazy"></div>
                  <Zap className="w-8 h-8 text-purple-600" loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Edge Computing</h3>
                <p className="text-gray-600" loading="lazy">Low-latency processing at the edge</p>
              </div>
              <div className="text-center" loading="lazy"></div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" loading="lazy"></div>
                  <Target className="w-8 h-8 text-orange-600" loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Custom Solutions</h3>
                <p className="text-gray-600" loading="lazy">Tailored IoT solutions for your specific needs</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50" loading="lazy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" loading="lazy"></div>
              <div className="text-center mb-12" loading="lazy"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" loading="lazy">{category} Solutions</h2>
                <p className="text-xl text-gray-600" loading="lazy">Specialized {category.toLowerCase()} solutions powered by IoT technology</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" loading="lazy">{iotServices</div>
                  .filter(service => service.category === category)
                  .map((service, index) => (</div>
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow" loading="lazy"></div>
                      <div className="text-4xl mb-4" loading="lazy">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3" loading="lazy">{service.title}</h3>
                      <p className="text-gray-600 mb-4" loading="lazy">{service.description}</p>
                      <div className="mb-4" loading="lazy"></div>
                        <div className="flex items-center justify-between mb-2" loading="lazy"></div>
                          <span className="text-2xl font-bold text-green-600" loading="lazy">{service.price}</span>
                          <span className="text-sm text-gray-500" loading="lazy">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold" loading="lazy">
                          Save up to 40% vs market rates</div>
                        </div>
                      </div>
                      <div className="mb-4" loading="lazy"></div>
                        <h4 className="font-semibold text-gray-900 mb-2" loading="lazy">Key Features:</h4>
                        <ul className="space-y-1" loading="lazy">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600" loading="lazy">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" loading="lazy" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4" loading="lazy"></div>
                        <h4 className="font-semibold text-gray-900 mb-2" loading="lazy">Technologies:</h4>
                        <div className="flex flex-wrap gap-2" loading="lazy">
                          {service.technologies.map((tech, techIndex) => (</div>
                            <span key={techIndex} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded" loading="lazy">{tech}</span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6" loading="lazy"></div>
                        <h4 className="font-semibold text-gray-900 mb-2" loading="lazy">Business Benefits:</h4>
                        <ul className="space-y-1" loading="lazy">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600" loading="lazy">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" loading="lazy" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors" loading="lazy" aria-label="Action button">Get IoT Quote</button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
        {/* IoT Capabilities Showcase */}
        <section className="py-16 bg-white" loading="lazy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" loading="lazy"></div>
            <div className="text-center mb-12" loading="lazy"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" loading="lazy">Our IoT Capabilities</h2>
              <p className="text-xl text-gray-600" loading="lazy">Comprehensive IoT technologies and methodologies for connected solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" loading="lazy"></div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg" loading="lazy"></div>
                <Wifi className="w-12 h-12 text-green-600 mx-auto mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Connectivity</h3>
                <p className="text-gray-600" loading="lazy">Multi-protocol connectivity including WiFi, LoRaWAN, NB-IoT, and 5G</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg" loading="lazy"></div>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Security</h3>
                <p className="text-gray-600" loading="lazy">End-to-end security with device authentication and data encryption</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg" loading="lazy"></div>
                <Cpu className="w-12 h-12 text-purple-600 mx-auto mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Edge Computing</h3>
                <p className="text-gray-600" loading="lazy">Low-latency processing and real-time decision making at the edge</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg" loading="lazy"></div>
                <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Device Management</h3>
                <p className="text-gray-600" loading="lazy">Comprehensive device lifecycle management and monitoring</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg" loading="lazy"></div>
                <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">AI Analytics</h3>
                <p className="text-gray-600" loading="lazy">Machine learning and AI for predictive analytics and insights</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg" loading="lazy"></div>
                <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Data Visualization</h3>
                <p className="text-gray-600" loading="lazy">Real-time dashboards and analytics for IoT data insights</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white" loading="lazy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" loading="lazy"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" loading="lazy">Ready to Connect Your World?</h2>
            <p className="text-xl mb-8 text-green-100" loading="lazy">Contact our IoT experts for a free consultation and custom IoT strategy development</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy"></div>
              <a
                href="tel:+13024640950"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center" loading="lazy">📞 +1 302 464 0950</a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors" loading="lazy">✉️ kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-8 text-sm text-green-200" loading="lazy"></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default IoTPage
