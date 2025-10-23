import React from 'react'

import { Wifi } from 'lucide-react'
import { CheckCircle, Star, Zap, Brain, BarChart, Shield, Target, Helmet } from 'lucide-react'
import { Globe, Settings } from 'lucide-react'

const IoTEdgePage: React.FC = () => {
  const iotServices = [
=======
import {Wifi, CheckCircle, Star, Zap, Brain, BarChart, Target, Shield, Helmet, Globe, Globe} from 'lucide-react';;;
constIoTEdgePage: React.FC= () =>{constiotServices= [
    {
      title: 'IoT Device Management Platform',
      description: 'Comprehensive platform for managing, monitoring, and updating IoT devices at scale.',
      icon: '📱',
      price: 'Starting at $3,50 0/month',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Device analytics', 'Security management'],
      benefits: ['Reduce management overhead by70%', 'Improve device reliability', 'Enable remote operations'],
      marketPrice: '$5,00 0-1 5,00 0/month',
      category: 'Device Management',
      technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'Kubernetes', 'MQTT']
   },
    {title: 'Edge Computing Solutions',
      description: 'Real-time data processing at the edge with low latency and high performance.',
      icon: '⚡',
      price: 'Starting at $4,50 0/month',
      features: ['Edge analytics', 'Real-time processing', 'Local data storage', 'Offline capabilities', 'Edge AI'],
      benefits: ['Reduce latency by90%', 'Lower bandwidth costs', 'Enable offline operations'],
      marketPrice: '$7,00 0-2 0,00 0/month',
      category: 'Edge Computing',
      technologies: ['Kubernetes', 'Docker', 'TensorFlow Lite', 'OpenVINO', 'Edge TPU']
   },
    {title: 'Industrial IoT (IIoT) Systems',
      description: 'Smart manufacturing and industrial automation with predictive maintenance.',
      icon: '🏭',
      price: 'Starting at $8,00 0/month',
      features: ['Sensor integration', 'Predictive maintenance', 'Process optimization', 'Quality control', 'Safety monitoring'],
      benefits: ['Reduce do wntime by50%', 'Improve efficiency by30%', 'Prevent equipment failures'],
      marketPrice: '$1 5,00 0-4 0,00 0/month',
      category: 'Industrial IoT',
      technologies: ['OPC UA', 'Modbus', 'MQTT', 'Time Series DB', 'Machine Learning']
   },
    {title: 'Smart City Solutions',
      description: 'Comprehensive smart city infrastructure with traffic, energy, and environmental monitoring.',
      icon: '🏙️',
      price: 'Starting at $1 2,00 0/month',
      features: ['Traffic management', 'Energy monitoring', 'Environmental sensors', 'Public safety', 'Citizen services'],
      benefits: ['Improve city efficiency', 'Reduce energy consumption', 'Enhance citizen experience'],
      marketPrice: '$2 0,00 0-6 0,00 0/month',
      category: 'Smart Cities',
      technologies: ['LoRaWAN', 'NB-IoT', '5 G', 'Big Data', 'AI Analytics']
   },
    {title: 'IoT Security & Compliance',
      description: 'Comprehensive security solutions for IoT devices and networks with compliance management.',
      icon: '🔒',
      price: 'Starting at $2,80 0/month',
      features: ['Device authentication', 'Encryption', 'Vulnerability scanning', 'Compliance monitoring', 'Incident response'],
      benefits: ['Protect against cyber threats', 'Ensure compliance', 'Build trust'],
      marketPrice: '$4,50 0-1 2,00 0/month',
      category: 'Security',
      technologies: ['PKI', 'TLS/SSL', 'Zero Trust', 'SIEM', 'Compliance Tools']
   },
    {title: 'Real-Time Data Analytics',
      description: 'Streaming analytics for IoT data with real-time insights and alerting.',
      icon: '📊',
      price: 'Starting at $3,20 0/month',
      features: ['Stream processing', 'Real-time dashboards', 'Anomaly detection', 'Predictive analytics', 'Alert systems'],
      benefits: ['Make faster decisions', 'Identify issues early', 'Optimize operations'],
      marketPrice: '$5,00 0-1 5,00 0/month',
      category: 'Analytics',
      technologies: ['Apache Kafka', 'Apache Flink', 'Apache Spark', 'InfluxDB', 'Grafana']
   },
    {title: 'IoT Integration Services',
      description: 'Connect existing systems with IoT devices and cloud platforms seamlessly.',
      icon: '🔗',
      price: 'Starting at $2,50 0/month',
      features: ['Legacy system integration', 'API development', 'Data transformation', 'Protocol conversion', 'Cloud connectivity'],
      benefits: ['Modernize existing systems', 'Enable new capabilities', 'Reduce integration costs'],
      marketPrice: '$4,00 0-1 0,00 0/month',
      category: 'Integration',
      technologies: ['REST APIs', 'GraphQL', 'Message Queues', 'ETL Tools', 'Cloud Platforms']
   },
    {title: 'Predictive Maintenance Systems',
      description: 'AI-powered predictive maintenance for industrial equipment and machinery.',
      icon: '🔧',
      price: 'Starting at $5,50 0/month',
      features: ['Vibration analysis', 'Temperature monitoring', 'Performance tracking', 'Failure prediction', 'Maintenance scheduling'],
      benefits: ['Prevent unplanned do wntime', 'Reduce maintenance costs', 'Extend equipment life'],
      marketPrice: '$8,00 0-2 5,00 0/month',
      category: 'Predictive Maintenance',
      technologies: ['Machine Learning', 'Time Series Analysis', 'Vibration Sensors', 'Thermal Cameras', 'AI Models']
   },
    {title: 'Environmental Monitoring',
      description: 'Comprehensive environmental monitoring with air quality, water, and soil sensors.',
      icon: '🌍',
      price: 'Starting at $2,20 0/month',
      features: ['Air quality monitoring', 'Water quality sensors', 'Soil analysis', 'Weather stations', 'Compliance reporting'],
      benefits: ['Ensure environmental compliance', 'Protect public health', 'Optimize resource usage'],
      marketPrice: '$3,50 0-1 0,00 0/month',
      category: 'Environmental',
      technologies: ['Environmental Sensors', 'Data Loggers', 'Satellite Data', 'GIS', 'Compliance Systems']
   },
    {title: 'Smart Agriculture Solutions',
      description: 'Precision agriculture with IoT sensors, drones, and AI-powered crop management.',
      icon: '🌾',
      price: 'Starting at $4,00 0/month',
      features: ['Soil monitoring', 'Crop health analysis', 'Weather tracking', 'Irrigation control', 'Yield optimization'],
      benefits: ['Increase crop yield s by25%', 'Reduce water usage by30%', 'Optimize fertilizer use'],
      marketPrice: '$6,00 0-1 8,00 0/month',
      category: 'Agriculture',
      technologies: ['Soil Sensors', 'Drones', 'Satellite Imagery', 'Machine Learning', 'Precision Agriculture']
   },
    {title: 'IoT Device Development',
      description: 'Custom IoT device design and development for specific business requirements.',
      icon: '⚙️',
      price: 'Starting at $1 5,00 0/project',
      features: ['Hardware design', 'Firmware development', 'Prototyping', 'Testing & validation', 'Manufacturing support'],
      benefits: ['Custom solutions', 'Competitive advantage', 'Optimized performance'],
      marketPrice: '$2 5,00 0-10 0,00 0/project',
      category: 'Device Development',
      technologies: ['Arduino', 'Raspberry Pi', 'ESP3 2', 'ARM Cortex', 'Custom PCBs']
   },
    {title: 'IoT Data Management',
      description: 'Comprehensive data management for IoT with storage, processing, and analytics.',
      icon: '🗄️',
      price: 'Starting at $2,80 0/month',
      features: ['Data ingestion', 'Storage optimization', 'Data processing', 'Quality management', 'Analytics'],
      benefits: ['Handle massive data volumes', 'Ensure data quality', 'Enable advanced analytics'],
      marketPrice: '$4,50 0-1 2,00 0/month',
      category: 'Data Management',
      technologies: ['Time Series DB', 'Apache Kafka', 'Apache Spark', 'Data Lakes', 'ETL Tools']
    }
  ]
  const categories = [...new Set(iotServices.map(service => service.category))]
  return (
    <>
      <Helmet>
        <title>IoT & Edge Computing Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Advanced IoT and edge computing services including device management, real-time analytics, and industrial automation solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;IoT services, edge computing, industrial IoT, smart cities, IoT analytics, device management&quot; />
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
                Connect, monitor, and optimize your operations with intelligent IoT and edge computing solutions
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
                Why Choose Our IoT & Edge Services?
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Expert IoT engineers delivering scalable, secure, and intelligent connected solutions
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Wifi className=&quot;w-8 h-8 text-cyan-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>IoT Experts</h3>
                <p className=&quot;text-gray-600&quot;>Certified engineers with deep expertise in IoT and edge computing</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Zap className=&quot;w-8 h-8 text-blue-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Real-Time Processing</h3>
                <p className=&quot;text-gray-600&quot;>Ultra-low latency edge computing for critical applications</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Shield className=&quot;w-8 h-8 text-green-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Enterprise Security</h3>
                <p className=&quot;text-gray-600&quot;>Bank-level security with end-to-end encryption and monitoring</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Target className=&quot;w-8 h-8 text-orange-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Proven Results</h3>
                <p className=&quot;text-gray-600&quot;>Successfully deployed 500+ IoT projects across industries</p>
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
                  {category} Solutions
                </h2>
                <p className=&quot;text-xl text-gray-600&quot;>
                  Specialized {category.toLowerCase()} services for connected and intelligent systems
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
                          Save up to 40% vs market rates
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
                Our IoT & Edge Capabilities
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Comprehensive IoT solutions covering device management, edge computing, and intelligent analytics
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-lg&quot;></div>
                <Wifi className=&quot;w-12 h-12 text-cyan-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Device Management</h3>
                <p className=&quot;text-gray-600&quot;>Comprehensive platform for managing IoT devices at scale</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg&quot;></div>
                <Zap className=&quot;w-12 h-12 text-blue-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Edge Computing</h3>
                <p className=&quot;text-gray-600&quot;>Real-time processing at the edge with ultra-low latency</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg&quot;></div>
                <Brain className=&quot;w-12 h-12 text-green-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>AI Analytics</h3>
                <p className=&quot;text-gray-600&quot;>Machine learning and AI for intelligent IoT insights</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg&quot;></div>
                <BarChart className=&quot;w-12 h-12 text-purple-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Real-Time Analytics</h3>
                <p className=&quot;text-gray-600&quot;>Streaming analytics and real-time data processing</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg&quot;></div>
                <Settings className=&quot;w-12 h-12 text-orange-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Industrial IoT</h3>
                <p className=&quot;text-gray-600&quot;>Smart manufacturing and industrial automation solutions</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg&quot;></div>
                <Globe className=&quot;w-12 h-12 text-pink-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Smart Cities</h3>
                <p className=&quot;text-gray-600&quot;>Comprehensive smart city infrastructure and services</p>
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
export default IoTEdgePage
