import React from 'react'

import { Wifi, CheckCircle, Star, Shield, Zap, Database, BarChart, Helmet, Check, Cpu, Globe } from 'lucide-react';
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
  ];
  constcategories= [...new Set(iotServices.map(service=> service.category))];
  return (
  <><Helme t><titl e>IoT & Edge Computing Services - ZionTechGroup</titl><metaname="description"content="Advanced IoT and edge computing solutions for smart cities, industrial automation, and connecteddevices." /><metaname="keywords"content="IoT services, edge computing, smart cities, industrial IoT, sensor networks, connecteddevices" /></Helme><divclassName="min-h-screen bg-gradient-to-brfrom-slate-50to-cyan-50">{/* HeroSection */}
      <sectionclassName="relative overflow-hidden bg-gradient-to-r from-cyan-600to-blue-700text-whitepy-20"><divclassName="absolute inset-0 bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">IoT & Edge Computing Services
            </h><spanclassName="text-xlmd:text-2 xl mb-8 text-cyan-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-cyan-100max-w-3xlmx-auto">Connect the physical and digital worlds with intelligent IoT solutions and edge computing
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-cyan-600px-8 py-3 rounded-lg font-semiboldhover:bg-cyan-50transition-colors"></className="bg-white text-cyan-600px-8 py-3 rounded-lg font-semiboldhover:bg-cyan-50transition-colors">Explore IoT Solutions
              </butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-cyan-600transition-colors"></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-cyan-600transition-colors">Schedule Demo
              </butto></di></di></di></sectio>{/* KeyBenefits */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Our IoT Services?
            </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Comprehensive IoT solutions that transform your business with connected intelligence
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"><divclassName="text-center"><divclassName="bg-cyan-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><WificlassName="w-8 h-8text-cyan-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">ConnectedIntelligence</h><pclassName="text-gray-600">Transform data into actionable insightswithIoT</p></di><divclassName="text-center"><divclassName="bg-blue-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><CpuclassName="w-8 h-8text-blue-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">EdgeProcessing</h><pclassName="text-gray-600">Real-time processing at the edge forinstantdecisions</p></di><divclassName="text-center"><divclassName="bg-green-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ShieldclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">EnterpriseSecurity</h><pclassName="text-gray-600">Bank-level security for all IoT devicesandnetworks</p></di><divclassName="text-center"><divclassName="bg-orange-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ZapclassName="w-8 h-8text-orange-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">ScalableSolutions</h><pclassName="text-gray-600">Solutions that grow with yourbusinessneeds</p></di></di></di></sectio>{/* Services byCategory */}
        {categories.map(category=> (
       <sectionkey={category}className="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">{category} Services
              </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Specialized {category.toLowerCase()} solutions for connected environments
              </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{iotServices
                  .filter(service=> service.category=== category)
                  .map((serviceindex) => (
                 <divkey={index}className="bg-white rounded-lg shado w-lg p-6 hover:shado w-xltransition-shadow"><divclassName="text-4xlmb-4">{service.icon}</di><h3className="text-xl font-semibold text-gray-900mb-3">{service.title}</h><pclassName="text-gray-600mb-4">{service.description}</p><divclassName="mb-4"><divclassName="flex items-centerjustify-betweenmb-2"><spanclassName="text-2 xl font-boldtext-cyan-600">{service.price}</spa><spanclassName="text-smtext-gray-500">Market:{service.marketPrice}</spa></di><divclassName="text-sm text-green-600font-semibold">Save up to45% vs market rates
                      </di></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">KeyFeatures:</h><ulclassName="space-y-1">{service.features.map((featurefeatureIndex) => (
                         <likey={featureIndex}className="flex items-center text-smtext-gray-600"><CheckCircleclassName="w-4 h-4text-green-500mr-2flex-shrink-0" />{feature}
                          </l>))}
                      </u></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">Technologies:</h><divclassName="flexflex-wrapgap-2">{service.technologies.map((techtechIndex) => (
                          <key={techIndex}className="bg-cyan-100text-cyan-800text-xs px-2py-1rounded"></ key={techIndex}className="bg-cyan-100text-cyan-800text-xs px-2py-1rounded">{tech}
                          </spa>))}
                      </di></di><divclassName="mb-6"><h4className="font-semibold text-gray-900mb-2">BusinessBenefits:</h><ulclassName="space-y-1">{service.benefits.map((benefitbenefitIndex) => (
                         <likey={benefitIndex}className="flex items-center text-smtext-gray-600"><StarclassName="w-4 h-4text-yellow-500mr-2flex-shrink-0" />{benefit}
                          </l>))}
                      </u></di><spanclassName="w-full bg-cyan-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-cyan-700transition-colors"></spa></className="w-full bg-cyan-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-cyan-700transition-colors">Get IoT Consultation
                    </butto></di>))}
            </di></di></sectio>))}
        {/* IoT CapabilitiesShowcase */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our IoT Capabilities
            </h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">Comprehensive IoT technologies and edge computing expertise
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="text-center p-6 bg-gradient-to-br from-cyan-50to-blue-100rounded-lg"><WificlassName="w-12h-1 2text-cyan-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">SensorNetworks</h><pclassName="text-gray-600">Comprehensive sensor network designanddeployment</p></di><divclassName="text-center p-6 bg-gradient-to-br from-blue-50to-indigo-100rounded-lg"><CpuclassName="w-12h-1 2text-blue-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">EdgeComputing</h><pclassName="text-gray-600">Real-time processing and decision making attheedge</p></di><divclassName="text-center p-6 bg-gradient-to-br from-green-50to-emerald-100rounded-lg"><ShieldclassName="w-12h-1 2text-green-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">IoTSecurity</h><pclassName="text-gray-600">Comprehensive security for IoT devicesandnetworks</p></di><divclassName="text-center p-6 bg-gradient-to-br from-purple-50to-violet-100rounded-lg"><BarChartclassName="w-12h-1 2text-purple-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">DataAnalytics</h><pclassName="text-gray-600">Real-time analytics and machine learning forIoTdata</p></di><divclassName="text-center p-6 bg-gradient-to-br from-orange-50to-amber-100rounded-lg"><GlobeclassName="w-12h-1 2text-orange-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">SmartCities</h><pclassName="text-gray-600">Comprehensive smart cityinfrastructuresolutions</p></di><divclassName="text-center p-6 bg-gradient-to-br from-pink-50to-rose-100rounded-lg"><DatabaseclassName="w-12h-1 2text-pink-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">DeviceManagement</h><pclassName="text-gray-600">Centralized management and monitoring ofIoTdevices</p></di></di></di></sectio>{/* ContactSection */}
      <sectionclassName="py-16bg-gradient-to-r from-cyan-600to-blue-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Connect Your World?
          </h><spanclassName="text-xl mb-8text-cyan-100"></spa></className="text-xl mb-8text-cyan-100">Contact our IoT experts for a free consultation and custom connected solution strategy
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
               className="bg-white text-cyan-600px-8 py-3 rounded-lg font-semiboldhover:bg-cyan-50transition-colorsinline-flexitems-center"
              >📞 +1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
               className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-cyan-600transition-colors"
              >✉️ kleber@ziontechgroup.com
            </a></di><divclassName="mt-8 text-smtext-cyan-200"><p>📍 364E Main St STE1008, Middletown DE19709</p></di></di></sectio></di></>
  );
};
export default IoTEdgeComputingPage;
