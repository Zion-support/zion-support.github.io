import {CheckCircle, Star, Wifi, Zap, Shield, Brain, Target, BarChart, Settings, Globe} from 'lucide-react;

const IoTEdgePage: any,
    e: any,
      description: any, monitoring, and updating IoT devices at scale.',
      icon: any,
      price: any,500/month',
      features: any, 'Remote monitoring', 'Firmware updates', 'Device analytics', 'Security management'],
      benefits: any, 'Improve device reliability', 'Enable remote operations'],
      marketPrice: any,000-15,000/month',
      category: any,
      technologies: any, 'Azure IoT', 'Google Cloud IoT', 'Kubernetes', 'MQTT']
    },
    {
      title: any,
      description: any,
      icon: any,
      price: any,500/month',
      features: any, 'Real-time processing', 'Local data storage', 'Offline capabilities', 'Edge AI'],
      benefits: any, 'Lower bandwidth costs', 'Enable offline operations'],
      marketPrice: any,000-20,000/month',
      category: any,
      technologies: any, 'Docker', 'TensorFlow Lite', 'OpenVINO', 'Edge TPU']
    },
    {
      title: any,
      description: any,
      icon: any,
      price: any,000/month',
      features: any, 'Predictive maintenance', 'Process optimization', 'Quality control', 'Safety monitoring'],
      benefits: any, 'Improve efficiency by 30%', 'Prevent equipment failures'],
      marketPrice: any,000-40,000/month',
      category: any,
      technologies: any, 'Modbus', 'MQTT', 'Time Series DB', 'Machine Learning']
    },
    {
      title: any,
      description: any, energy, and environmental monitoring.',
      icon: any,
      price: any,000/month',
      features: any, 'Energy monitoring', 'Environmental sensors', 'Public safety', 'Citizen services'],
      benefits: any, 'Reduce energy consumption', 'Enhance citizen experience'],
      marketPrice: any,000-60,000/month',
      category: any,
      technologies: any, 'NB-IoT', '5G', 'Big Data', 'AI Analytics']
    },
    {
      title: any,
      description: any,
      icon: any,
      price: any,800/month',
      features: any, 'Encryption', 'Vulnerability scanning', 'Compliance monitoring', 'Incident response'],
      benefits: any, 'Ensure compliance', 'Build trust'],
      marketPrice: any,500-12,000/month',
      category: any,
      technologies: any, 'TLS/SSL', 'Zero Trust', 'SIEM', 'Compliance Tools']
    },
    {
      title: any,
      description: any,
      icon: any,
      price: any,200/month',
      features: any, 'Real-time dashboards', 'Anomaly detection', 'Predictive analytics', 'Alert systems'],
      benefits: any, 'Identify issues early', 'Optimize operations'],
      marketPrice: any,000-15,000/month',
      category: any,
      technologies: any, 'Apache Flink', 'Apache Spark', 'InfluxDB', 'Grafana']
    },
    {
      title: any,
      description: any,
      icon: any,
      price: any,500/month',
      features: any, 'API development', 'Data transformation', 'Protocol conversion', 'Cloud connectivity'],
      benefits: any, 'Enable new capabilities', 'Reduce integration costs'],
      marketPrice: any,000-10,000/month',
      category: any,
      technologies: any, 'GraphQL', 'Message Queues', 'ETL Tools', 'Cloud Platforms']
    },
    {
      title: any,
      description: any,
      icon: any,
      price: any,500/month',
      features: any, 'Temperature monitoring', 'Performance tracking', 'Failure prediction', 'Maintenance scheduling'],
      benefits: any, 'Reduce maintenance costs', 'Extend equipment life'],
      marketPrice: any,000-25,000/month',
      category: any,
      technologies: any, 'Time Series Analysis', 'Vibration Sensors', 'Thermal Cameras', 'AI Models']
    },
    {
      title: any,
      description: any, water, and soil sensors.',
      icon: any,
      price: any,200/month',
      features: any, 'Water quality sensors', 'Soil analysis', 'Weather stations', 'Compliance reporting'],
      benefits: any, 'Protect public health', 'Optimize resource usage'],
      marketPrice: any,500-10,000/month',
      category: any,
      technologies: any, 'Data Loggers', 'Satellite Data', 'GIS', 'Compliance Systems']
    },
    {
      title: any,
      description: any, drones, and AI-powered crop management.',
      icon: any,
      price: any,000/month',
      features: any, 'Crop health analysis', 'Weather tracking', 'Irrigation control', 'Yield optimization'],
      benefits: any, 'Reduce water usage by 30%', 'Optimize fertilizer use'],
      marketPrice: any,000-18,000/month',
      category: any,
      technologies: any, 'Drones', 'Satellite Imagery', 'Machine Learning', 'Precision Agriculture']
    },
    {
      title: any,
      description: any,
      icon: any,
      price: any,000/project',
      features: any, 'Firmware development', 'Prototyping', 'Testing & validation', 'Manufacturing support'],
      benefits: any, 'Competitive advantage', 'Optimized performance'],
      marketPrice: any,000-100,000/project',
      category: any,
      technologies: any, 'Raspberry Pi', 'ESP32', 'ARM Cortex', 'Custom PCBs']
    },
    {
      title: any,
      description: any, processing, and analytics.',
      icon: any,
      price: any,800/month',
      features: any, 'Storage optimization', 'Data processing', 'Quality management', 'Analytics'],
      benefits: any, 'Ensure data quality', 'Enable advanced analytics'],
      marketPrice: any,500-12,000/month',
      category: any,
      technologies: any, 'Apache Kafka', 'Apache Spark', 'Data Lakes', 'ETL Tools']
    }
  ];

  const categories = [...new Set(iotServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm: any,>
    d: any, monitor, and optimize your operations with intelligent IoT and edge computing solutions
              </p>
              <div className="flex flex-col sm: any,>
    r: any{/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: any,>
    d: any,>
    e="text-xl text-gray-600">
                Expert IoT engineers delivering scalable, secure, and intelligent connected solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md: any,>
    g: any,>
    e="text-gray-600">Successfully deployed 500+ IoT projects across industries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm: any,>;
    d: any{category} Solutions;
                </h2>";
                <p className="text-xl text-gray-600">);
                  Specialized {category.toLowerCase()} services for connected and intelligent systems
                </p>
              </div>
              <div className="grid grid-cols-1 md: any,;>
    g: any,>;
    y=== category);>
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover: any,>
    e="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: any{service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 40% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features: any,
    e="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies: any,
    e="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits: any,
    e="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover: any}>
              </div>
            </div>
          </section>
        ))}

        {/* IoT Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: any,>
    d: any,>
    e="text-xl text-gray-600">
                Comprehensive IoT solutions covering device management, edge computing, and intelligent analytics
              </p>
            </div>
            <div className="grid grid-cols-1 md: any,>
    g: any,>
    e="text-gray-600">Comprehensive smart city infrastructure and services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm: any,>
    r: any,>
    e="mt-8 text-sm text-cyan-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>;
            </div>;
          </div>;
        </section>;
      </div>;
  );
};

export default IoTEdgePage;'";
import React from 'react';"'";
"'"'";