import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Wifi, Shield, Zap, Target, BarChart, Cpu, Sparkles } from 'lucide-react';
const IoTPage: React.FC = () => {
    const iotServices = [
    {
      title: 'IoT Device Management Platform',
      description: 'Comprehensive IoT device management and monitoring platform for connected devices.',
      icon: '📱',
      price: 'Starting at $2,500/month',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Device analytics', 'Alert management'],
      benefits: ['Reduce device downtime by 60%', 'Improve operational efficiency', 'Lower maintenance costs'],
      marketPrice: '$4,000-15,000/month',;
      category: 'Device Management',;
      technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT', 'CoAP'];
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
    }
  ];
const categories = [...new Set(iotServices.map(service => service.category))];
return null
                  Specialized {category.toLowerCase()} solutions powered by IoT technology
                </p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8" / /></div>
                {
    iotServices
                  .filter(service => service.category === category),
                  .map((service, index) => ()
    service.features.map((feature, featureIndex) => ()
                          ))}

                        </ul>
                      </div>
                      <div className="mb-4" / /></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2" / /></div>
                          {
    service.technologies.map((tech, techIndex) => ()
                          ))}

                        </div>
                      </div>
                      <div className="mb-6" / /></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul></ul>
                          {
    service.benefits.map((benefit, benefitIndex) => ()
                          ))}

                        </ul>
                      </div>
                      <button></button>
                        Get IoT Quote
                      </button>
                    </div>

                  ))}
              </div>
            </div>
          </section>
        ))},
    {/* IoT Capabilities Showcase */}
        <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8" / /></div>
            <div className="text-center mb-12" / /></div>
              <h2></h2>
                Our IoT Capabilities
              </h2>
              <p></p>
                Comprehensive IoT technologies and methodologies for connected solutions,
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" / /></div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg" / /></div>
                <Wifi></Wifi>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connectivity</h3>
                <p className="text-gray-600">Multi-protocol connectivity including WiFi, LoRaWAN, NB-IoT, and 5G</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg" / /></div>
                <Shield></Shield>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">End-to-end security with device authentication and data encryption</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg" / /></div>
                <Cpu></Cpu>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Computing</h3>
                <p className="text-gray-600">Low-latency processing and real-time decision making at the edge</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg" / /></div>
                <Target></Target>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Device Management</h3>
                <p className="text-gray-600">Comprehensive device lifecycle management and monitoring</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg" / /></div>
                <Sparkles></Sparkles>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analytics</h3>
                <p className="text-gray-600">Machine learning and AI for predictive analytics and insights</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg" / /></div>
                <BarChart></BarChart>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Visualization</h3>
                <p className="text-gray-600">Real-time dashboards and analytics for IoT data insights</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center" / /></div>
            <h2></h2>
              Ready to Connect Your World?
            </h2>
            <p></p>
              Contact our IoT experts for a free consultation and custom IoT strategy development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" / /></div>
              <a></a>
                📞 +1 302 464 0950
              </a>
              <a></a>
                ✉️ kleber@ziontechgroup.com,
              </a>
            </div>
            <div className="mt-8 text-sm text-green-200" / /></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IoTPage;
