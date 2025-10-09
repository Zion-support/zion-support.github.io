import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Wifi, Cpu, Shield, BarChart, Phone, CheckCircle } from 'lucide-react';

const IoTEdgePage: React.FC = () => {
  const services = [
    {
      title: 'IoT Device Management Platform',
      description: 'Comprehensive platform for managing, monitoring, and updating IoT devices at scale.',
      icon: Wifi,
      price: 'Starting at $3,500/month',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Device analytics', 'Security management'],
      benefits: ['Reduce management overhead by 70%', 'Improve device reliability', 'Enable remote operations'],
      category: 'Device Management',
      technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'Kubernetes', 'MQTT']
    },
    {
      title: 'Edge Computing Solutions',
      description: 'Process data locally at the edge for faster response times and reduced latency.',
      icon: Cpu,
      price: 'Starting at $2,800/month',
      features: ['Local data processing', 'Real-time analytics', 'Edge AI inference', 'Offline capabilities', 'Bandwidth optimization'],
      benefits: ['50% faster response times', 'Reduced bandwidth costs', 'Improved reliability'],
      category: 'Edge Computing',
      technologies: ['Docker', 'Kubernetes', 'TensorFlow Lite', 'OpenVINO', 'EdgeX Foundry']
    },
    {
      title: 'IoT Security Suite',
      description: 'Comprehensive security solutions for IoT devices and edge infrastructure.',
      icon: Shield,
      price: 'Starting at $2,200/month',
      features: ['Device authentication', 'Encrypted communication', 'Threat detection', 'Access control', 'Compliance monitoring'],
      benefits: ['Enhanced security posture', 'Compliance assurance', 'Risk mitigation'],
      category: 'Security',
      technologies: ['TLS/SSL', 'OAuth 2.0', 'PKI', 'Zero Trust', 'SIEM']
    },
    {
      title: 'IoT Analytics Dashboard',
      description: 'Real-time analytics and visualization for IoT data streams and device performance.',
      icon: BarChart,
      price: 'Starting at $1,800/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom alerts', 'Data visualization', 'Performance metrics'],
      benefits: ['Data-driven insights', 'Proactive maintenance', 'Improved efficiency'],
      category: 'Analytics',
      technologies: ['InfluxDB', 'Grafana', 'Apache Kafka', 'Apache Spark', 'TimescaleDB']
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Devices Managed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50%', label: 'Faster Response' },
    { number: '24/7', label: 'Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IoT & Edge Computing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect, manage, and optimize your IoT devices with our comprehensive edge computing solutions. 
            Process data locally for faster insights and better performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Get Started Today
            </Link>
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IoT & Edge Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions for IoT device management and edge computing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {service.title}
                      </h3>
                      <span className="text-sm text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    {service.price}
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-300">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Connect Your IoT Devices?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our experts help you build a robust IoT infrastructure with edge computing capabilities 
              that scales with your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Call for Assessment
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IoTEdgePage;