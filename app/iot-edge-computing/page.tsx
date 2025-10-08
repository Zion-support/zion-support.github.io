import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Cpu, Wifi, Database, Zap } from 'lucide-react';

const IoTEdgeComputingPage: React.FC = () => {
  const iotServices = [
    {
      title: 'IoT Device Management',
      description: 'Comprehensive management platform for connected devices and sensors',
      price: 'Starting at $2,500/month',
      features: [
        'Device provisioning',
        'Remote monitoring',
        'Firmware updates',
        'Device analytics',
        'Security management'
      ],
      icon: '📱',
      popular: true
    },
    {
      title: 'Edge Analytics Platform',
      description: 'Real-time data processing and analytics at the edge of the network',
      price: 'Starting at $3,000/month',
      features: [
        'Real-time processing',
        'Machine learning at edge',
        'Data streaming',
        'Predictive analytics',
        'Low latency processing'
      ],
      icon: '📊',
      popular: true
    },
    {
      title: 'Industrial IoT Solutions',
      description: 'Specialized IoT solutions for manufacturing and industrial applications',
      price: 'Starting at $4,000/month',
      features: [
        'Sensor integration',
        'Process monitoring',
        'Predictive maintenance',
        'Quality control',
        'Safety systems'
      ],
      icon: '🏭',
      popular: false
    },
    {
      title: 'Smart City Infrastructure',
      description: 'IoT solutions for smart cities including traffic, utilities, and public services',
      price: 'Starting at $5,000/month',
      features: [
        'Traffic management',
        'Utility monitoring',
        'Environmental sensing',
        'Public safety',
        'Citizen services'
      ],
      icon: '🏙️',
      popular: false
    },
    {
      title: 'IoT Security Solutions',
      description: 'Comprehensive security for IoT devices and edge computing infrastructure',
      price: 'Starting at $2,000/month',
      features: [
        'Device authentication',
        'Data encryption',
        'Network security',
        'Threat detection',
        'Compliance management'
      ],
      icon: '🔒',
      popular: false
    },
    {
      title: 'IoT Integration Services',
      description: 'Connect existing systems with IoT devices and edge computing platforms',
      price: 'Starting at $1,500/month',
      features: [
        'Legacy system integration',
        'API development',
        'Data synchronization',
        'Protocol conversion',
        'System migration'
      ],
      icon: '🔌',
      popular: false
    }
  ];

  const technologies = [
    { name: 'MQTT', category: 'Protocol' },
    { name: 'CoAP', category: 'Protocol' },
    { name: 'Modbus', category: 'Protocol' },
    { name: 'OPC UA', category: 'Protocol' },
    { name: 'AWS IoT', category: 'Platform' },
    { name: 'Azure IoT', category: 'Platform' },
    { name: 'Google Cloud IoT', category: 'Platform' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Raspberry Pi', category: 'Hardware' },
    { name: 'Arduino', category: 'Hardware' },
    { name: 'ESP32', category: 'Hardware' },
    { name: 'InfluxDB', category: 'Database' },
    { name: 'TimescaleDB', category: 'Database' },
    { name: 'Grafana', category: 'Visualization' },
    { name: 'Prometheus', category: 'Monitoring' },
    { name: 'TensorFlow Lite', category: 'ML' },
    { name: 'OpenVINO', category: 'ML' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IoT & Edge Computing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto">
              Connect, process, and analyze data at the edge with intelligent IoT solutions
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

      {/* What is IoT & Edge Computing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is IoT & Edge Computing?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                IoT (Internet of Things) connects physical devices to the internet, while edge computing 
                processes data closer to where it's generated. Together, they enable real-time insights, 
                reduced latency, and improved efficiency across industries.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Cpu className="w-6 h-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Real-Time Processing</h3>
                    <p className="text-gray-600">Process data at the edge for instant insights and responses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Wifi className="w-6 h-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Connected Devices</h3>
                    <p className="text-gray-600">Seamlessly connect and manage thousands of devices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Data Intelligence</h3>
                    <p className="text-gray-600">Extract valuable insights from sensor data and device interactions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">IoT Benefits</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-600">50B+</div>
                    <div className="text-sm text-gray-600">Connected devices by 2030</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-600">90%</div>
                    <div className="text-sm text-gray-600">Reduction in data transfer</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-600">10ms</div>
                    <div className="text-sm text-gray-600">Ultra-low latency processing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IoT & Edge Computing Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete IoT solutions from device management to edge analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iotServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge IoT and edge computing technologies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                <div className="text-sm font-semibold text-gray-900">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IoT & Edge Computing Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Real-world applications across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Manufacturing</h3>
              <p className="text-gray-600 mb-4">Smart factories with predictive maintenance and quality control</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Predictive maintenance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Quality monitoring
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Asset tracking
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare</h3>
              <p className="text-gray-600 mb-4">Remote patient monitoring and medical device management</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Patient monitoring
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Medical device tracking
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Health analytics
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transportation</h3>
              <p className="text-gray-600 mb-4">Connected vehicles and smart transportation systems</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Vehicle telematics
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Traffic optimization
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Fleet management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IoT Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Leading expertise in IoT and edge computing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IoT Experts</h3>
              <p className="text-gray-600">Certified IoT architects and engineers</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Performance</h3>
              <p className="text-gray-600">Ultra-low latency edge processing</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Handle millions of connected devices</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock monitoring and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Connect Your World?
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Contact our IoT experts for a consultation and custom edge computing solution
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IoTEdgeComputingPage;