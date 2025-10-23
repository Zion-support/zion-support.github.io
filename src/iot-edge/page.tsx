import React from 'react'

import { Wifi, CheckCircle, Star, Brain, Shield, Zap, Target, BarChart, Helmet, Check, Globe, Settings } from 'lucide-react';
const IoTEdgePage: React.FC = () => {
  const iotServices = [
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
  ];
  constcategories= [...new Set(iotServices.map(service=> service.category))];
  return (
  <><Helme t><titl e>IoT & Edge Computing Services - ZionTechGroup</titl><metaname="description"content="Advanced IoT and edge computing services including device management, real-time analytics, and industrial automationsolutions." /><metaname="keywords"content="IoT services, edge computing, industrial IoT, smart cities, IoT analytics, devicemanagement" /></Helme><divclassName="min-h-screen bg-gradient-to-brfrom-slate-50to-cyan-50">{/* HeroSection */}
      <sectionclassName="relative overflow-hidden bg-gradient-to-r from-cyan-600to-blue-700text-whitepy-20"><divclassName="absolute inset-0 bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">IoT & Edge Computing Services
            </h><spanclassName="text-xlmd:text-2 xl mb-8 text-cyan-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-cyan-100max-w-3xlmx-auto">Connect, monitor, and optimize your operations with intelligent IoT and edge computing solutions
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-cyan-600px-8 py-3 rounded-lg font-semiboldhover:bg-cyan-50transition-colors"></className="bg-white text-cyan-600px-8 py-3 rounded-lg font-semiboldhover:bg-cyan-50transition-colors">Explore IoT Solutions
              </butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-cyan-600transition-colors"></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-cyan-600transition-colors">Schedule Demo
              </butto></di></di></di></sectio>{/* KeyBenefits */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Our IoT & Edge Services?
            </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Expert IoT engineers delivering scalable, secure, and intelligent connected solutions
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"><divclassName="text-center"><divclassName="bg-cyan-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><WificlassName="w-8 h-8text-cyan-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">IoTExperts</h><pclassName="text-gray-600">Certified engineers with deep expertise in IoT andedgecomputing</p></di><divclassName="text-center"><divclassName="bg-blue-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ZapclassName="w-8 h-8text-blue-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">Real-TimeProcessing</h><pclassName="text-gray-600">Ultra-low latency edge computing forcriticalapplications</p></di><divclassName="text-center"><divclassName="bg-green-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ShieldclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">EnterpriseSecurity</h><pclassName="text-gray-600">Bank-level security with end-to-end encryptionandmonitoring</p></di><divclassName="text-center"><divclassName="bg-orange-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><TargetclassName="w-8 h-8text-orange-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">ProvenResults</h><pclassName="text-gray-600">Successfully deployed500+ IoT projectsacrossindustries</p></di></di></di></sectio>{/* Services byCategory */}
        {categories.map(category=> (
       <sectionkey={category}className="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">{category} Solutions
              </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Specialized {category.toLowerCase()} services for connected and intelligent systems
              </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{iotServices
                  .filter(service=> service.category=== category)
                  .map((serviceindex) => (
                 <divkey={index}className="bg-white rounded-lg shado w-lg p-6 hover:shado w-xltransition-shadow"><divclassName="text-4xlmb-4">{service.icon}</di><h3className="text-xl font-semibold text-gray-900mb-3">{service.title}</h><pclassName="text-gray-600mb-4">{service.description}</p><divclassName="mb-4"><divclassName="flex items-centerjustify-betweenmb-2"><spanclassName="text-2 xl font-boldtext-cyan-600">{service.price}</spa><spanclassName="text-smtext-gray-500">Market:{service.marketPrice}</spa></di><divclassName="text-sm text-green-600font-semibold">Save up to40% vs market rates
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
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our IoT & Edge Capabilities
            </h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">Comprehensive IoT solutions covering device management, edge computing, and intelligent analytics
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="text-center p-6 bg-gradient-to-br from-cyan-50to-blue-100rounded-lg"><WificlassName="w-12h-1 2text-cyan-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">DeviceManagement</h><pclassName="text-gray-600">Comprehensive platform for managing IoT devicesatscale</p></di><divclassName="text-center p-6 bg-gradient-to-br from-blue-50to-indigo-100rounded-lg"><ZapclassName="w-12h-1 2text-blue-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">EdgeComputing</h><pclassName="text-gray-600">Real-time processing at the edge withultra-lowlatency</p></di><divclassName="text-center p-6 bg-gradient-to-br from-green-50to-emerald-100rounded-lg"><BrainclassName="w-12h-1 2text-green-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">AIAnalytics</h><pclassName="text-gray-600">Machine learning and AI for intelligentIoTinsights</p></di><divclassName="text-center p-6 bg-gradient-to-br from-purple-50to-violet-100rounded-lg"><BarChartclassName="w-12h-1 2text-purple-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">Real-TimeAnalytics</h><pclassName="text-gray-600">Streaming analytics and real-timedataprocessing</p></di><divclassName="text-center p-6 bg-gradient-to-br from-orange-50to-amber-100rounded-lg"><SettingsclassName="w-12h-1 2text-orange-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">IndustrialIoT</h><pclassName="text-gray-600">Smart manufacturing and industrialautomationsolutions</p></di><divclassName="text-center p-6 bg-gradient-to-br from-pink-50to-rose-100rounded-lg"><GlobeclassName="w-12h-1 2text-pink-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">SmartCities</h><pclassName="text-gray-600">Comprehensive smart city infrastructureandservices</p></di></di></di></sectio>{/* ContactSection */}
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
export default IoTEdgePage;
