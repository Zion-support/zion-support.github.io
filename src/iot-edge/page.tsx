import React from 'react';

const IoTEdgePage: React.FC = () => {
  const _iotServices = [
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IoT & Edge Computing Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto">
                Connect, monitor, and optimize your operations with intelligent IoT and edge computing solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                  Explore IoT Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IoT & Edge Services?
              </h2>
              <p className="text-xl text-gray-600">
                Expert IoT engineers delivering scalable, secure, and intelligent connected solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">IoT Experts</h3>
                <p className="text-gray-600">Certified engineers with deep expertise in IoT and edge computing</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Processing</h3>
                <p className="text-gray-600">Ultra-low latency edge computing for critical applications</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security with end-to-end encryption and monitoring</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Successfully deployed 500+ IoT projects across industries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Specialized {category.toLowerCase()} services for connected and intelligent systems
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {iotServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 40% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                        Get IoT Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* IoT Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IoT & Edge Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive IoT solutions covering device management, edge computing, and intelligent analytics
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-lg">
                <Wifi className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Device Management</h3>
                <p className="text-gray-600">Comprehensive platform for managing IoT devices at scale</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Computing</h3>
                <p className="text-gray-600">Real-time processing at the edge with ultra-low latency</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Brain className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analytics</h3>
                <p className="text-gray-600">Machine learning and AI for intelligent IoT insights</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <BarChart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
                <p className="text-gray-600">Streaming analytics and real-time data processing</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Settings className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industrial IoT</h3>
                <p className="text-gray-600">Smart manufacturing and industrial automation solutions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Globe className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Cities</h3>
                <p className="text-gray-600">Comprehensive smart city infrastructure and services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Connect Your World?
            </h2>
            <p className="text-xl mb-8 text-cyan-100">
              Contact our IoT experts for a free consultation and custom connected solution strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-cyan-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
  );
};

export default IoTEdgePage;
import React from 'react';
