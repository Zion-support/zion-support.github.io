import Head from 'next/head';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Building, Key, Cloud, MapPin as Location } from 'lucide-react';
export default function IoTSolutionsPage() {
  const title = 'IoT Solutions & Services — Zion Tech Group';
  const description = 'Enterprise IoT solutions including smart sensors, edge computing, real-time monitoring, predictive maintenance, and industrial automation. Production-ready with enterprise security.';

  const iotServices = [
    {
      name: 'Smart Sensor Networks',
      description: 'Deploy and manage intelligent sensor networks for real-time data collection and monitoring',
      icon: Thermometer,
      features: [
        'Multi-sensor data fusion and processing',
        'Edge computing and local analytics',
        'Real-time alerting and notifications',
        'Battery optimization and power management',
        'Wireless connectivity (LoRaWAN, NB-IoT, 5G)',
        'Cloud integration and data visualization'
      ],
      pricing: '$15,000 - $100,000/project',
      delivery: '6-12 weeks',
      category: 'Sensors',
      benefits: 'Reduce monitoring costs by 70%, improve data accuracy by 95%',
      marketPrice: '$30,000 - $200,000/project',
      link: '/services/iot-solutions/smart-sensors'
    },
    {
      name: 'Industrial IoT Platform',
      description: 'Complete IIoT platform for manufacturing, energy, and industrial automation',
      icon: Settings,
      features: [
        'Equipment monitoring and predictive maintenance',
        'Production line optimization',
        'Energy consumption tracking',
        'Quality control and defect detection',
        'Safety monitoring and compliance',
        'Integration with existing ERP/MES systems'
      ],
      pricing: '$50,000 - $500,000/project',
      delivery: '12-24 weeks',
      category: 'Industrial',
      benefits: 'Increase productivity by 25%, reduce downtime by 60%',
      marketPrice: '$100,000 - $1,000,000/project',
      link: '/services/iot-solutions/industrial-platform'
    },
    {
      name: 'Smart Building Management',
      description: 'Intelligent building automation with energy optimization and occupant comfort',
      icon: Building,
      features: [
        'HVAC and lighting automation',
        'Energy consumption monitoring',
        'Occupancy detection and space utilization',
        'Security and access control integration',
        'Environmental monitoring (air quality, temperature)',
        'Mobile app for building management'
      ],
      pricing: '$25,000 - $200,000/project',
      delivery: '8-16 weeks',
      category: 'Smart Buildings',
      benefits: 'Reduce energy costs by 30%, improve occupant satisfaction',
      marketPrice: '$50,000 - $400,000/project',
      link: '/services/iot-solutions/smart-buildings'
    },
    {
      name: 'Fleet Management System',
      description: 'Real-time vehicle tracking, maintenance scheduling, and driver behavior monitoring',
      icon: Truck,
      features: [
        'GPS tracking and route optimization',
        'Fuel consumption monitoring',
        'Driver behavior analysis and safety scoring',
        'Predictive maintenance scheduling',
        'Geofencing and alerts',
        'Mobile app for drivers and managers'
      ],
      pricing: '$20,000 - $150,000/project',
      delivery: '6-12 weeks',
      category: 'Fleet',
      benefits: 'Reduce fuel costs by 20%, improve safety by 40%',
      marketPrice: '$40,000 - $300,000/project',
      link: '/services/iot-solutions/fleet-management'
    },
    {
      name: 'Environmental Monitoring',
      description: 'Air quality, water quality, and environmental condition monitoring systems',
      icon: Gauge,
      features: [
        'Air quality sensors (PM2.5, CO2, VOCs)',
        'Water quality monitoring (pH, turbidity, chemicals)',
        'Weather station integration',
        'Real-time alerts and notifications',
        'Historical data analysis and reporting',
        'Compliance reporting and documentation'
      ],
      pricing: '$15,000 - $100,000/project',
      delivery: '4-8 weeks',
      category: 'Environment',
      benefits: 'Ensure compliance, reduce environmental risks',
      marketPrice: '$30,000 - $200,000/project',
      link: '/services/iot-solutions/environmental-monitoring'
    },
    {
      name: 'IoT Data Analytics Platform',
      description: 'Advanced analytics and AI-powered insights from IoT data streams',
      icon: BarChart3,
      features: [
        'Real-time data processing and analysis',
        'Machine learning model deployment',
        'Anomaly detection and predictive analytics',
        'Custom dashboards and visualizations',
        'API for third-party integrations',
        'Data export and reporting tools'
      ],
      pricing: '$30,000 - $250,000/project',
      delivery: '8-16 weeks',
      category: 'Analytics',
      benefits: 'Extract actionable insights, improve decision making',
      marketPrice: '$60,000 - $500,000/project',
      link: '/services/iot-solutions/data-analytics'
    }
  ];

  const iotTechnologies = [
    { name: 'LoRaWAN', icon: Wifi, description: 'Long-range, low-power connectivity' },
    { name: 'MQTT', icon: MessageSquare, description: 'Lightweight messaging protocol' },
    { name: 'Edge Computing', icon: Cpu, description: 'Local data processing' },
    { name: '5G', icon: Network, description: 'High-speed connectivity' },
    { name: 'NB-IoT', icon: Smartphone, description: 'Cellular IoT connectivity' },
    { name: 'Zigbee', icon: Zap, description: 'Mesh networking protocol' }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="IoT solutions, industrial IoT, smart sensors, edge computing, fleet management, environmental monitoring" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services/iot-solutions" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com/services/iot-solutions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IoT Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Connect, monitor, and optimize with intelligent IoT solutions for industrial automation, smart buildings, and environmental monitoring
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="#services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Services
                </Link>
                <Link to="/contact" className="border border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                IoT Technologies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge IoT technologies for reliable, scalable, and secure solutions
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {iotTechnologies.map((tech, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-100 rounded-xl p-6 mb-4 group-hover:bg-green-50 transition-colors">
                    <tech.icon className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                IoT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end IoT solutions with enterprise-grade security and proven ROI
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {iotServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 rounded-lg p-3 mr-4">
                        <service.icon className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Our Pricing:</span>
                        <span className="font-semibold text-green-600">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Market Rate:</span>
                        <span className="text-sm text-gray-600">{service.marketPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Delivery:</span>
                        <span className="text-sm font-medium text-blue-600">{service.delivery}</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Benefits:</strong> {service.benefits}
                      </p>
                    </div>

                    <Link to={service.link} className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Connect Your World?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's build intelligent IoT solutions that transform your operations and drive measurable business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-blue-400">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}