import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';

const AIIoTSolutionsPage: React.FC = () => {
  const iotServices = [
    {
      title: 'AI Smart City Platform',
      description: 'Comprehensive smart city management with traffic optimization, energy management, and citizen services automation.',
      icon: '🏙️',
      price: '$4,999/month',
      features: [
        'Traffic Flow Optimization',
        'Energy Grid Management',
        'Waste Management AI',
        'Public Safety Monitoring',
        'Citizen Service Portal',
        'Environmental Monitoring',
        'Predictive Maintenance',
        'Real-time Analytics Dashboard'
      ],
      benefits: [
        'Reduce traffic congestion by 40%',
        'Lower energy consumption by 25%',
        'Improve citizen satisfaction by 60%',
        'Reduce operational costs by 35%'
      ],
      marketPrice: '$8,000-15,000/month',
      category: 'Smart Cities',
      technologies: ['IoT Sensors', 'Machine Learning', 'Edge Computing', 'React', 'Python', '5G'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Industrial IoT Suite',
      description: 'Intelligent manufacturing solutions with predictive maintenance, quality control, and production optimization.',
      icon: '🏭',
      price: '$3,499/month',
      features: [
        'Predictive Maintenance',
        'Quality Control AI',
        'Production Optimization',
        'Equipment Monitoring',
        'Safety Compliance',
        'Energy Efficiency',
        'Supply Chain Integration',
        'Real-time Alerts'
      ],
      benefits: [
        'Reduce downtime by 50%',
        'Improve product quality by 30%',
        'Increase production efficiency by 25%',
        'Lower maintenance costs by 40%'
      ],
      marketPrice: '$6,000-12,000/month',
      category: 'Industrial IoT',
      technologies: ['Industrial Sensors', 'Machine Learning', 'Edge AI', 'React', 'Python', 'OPC UA'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Healthcare IoT Platform',
      description: 'Connected healthcare devices with patient monitoring, medication management, and emergency response systems.',
      icon: '🏥',
      price: '$2,799/month',
      features: [
        'Patient Vital Monitoring',
        'Medication Adherence',
        'Emergency Response',
        'Remote Diagnostics',
        'Health Trend Analysis',
        'Caregiver Alerts',
        'HIPAA Compliance',
        'Integration with EHR'
      ],
      benefits: [
        'Improve patient outcomes by 45%',
        'Reduce hospital readmissions by 30%',
        'Enable remote patient care',
        'Lower healthcare costs by 25%'
      ],
      marketPrice: '$4,500-9,000/month',
      category: 'Healthcare IoT',
      technologies: ['Medical Sensors', 'Machine Learning', 'React', 'Python', 'HIPAA Compliance', 'Bluetooth'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Agriculture IoT System',
      description: 'Smart farming solutions with crop monitoring, soil analysis, and automated irrigation management.',
      icon: '🌾',
      price: '$1,999/month',
      features: [
        'Crop Health Monitoring',
        'Soil Analysis AI',
        'Automated Irrigation',
        'Weather Integration',
        'Pest Detection',
        'Yield Prediction',
        'Resource Optimization',
        'Farm Management Dashboard'
      ],
      benefits: [
        'Increase crop yields by 35%',
        'Reduce water usage by 30%',
        'Minimize pesticide use by 40%',
        'Improve farm profitability by 50%'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Agriculture IoT',
      technologies: ['Soil Sensors', 'Computer Vision', 'Machine Learning', 'React', 'Python', 'LoRaWAN'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Energy Management IoT',
      description: 'Smart energy systems with consumption monitoring, renewable integration, and automated optimization.',
      icon: '⚡',
      price: '$2,299/month',
      features: [
        'Energy Consumption Monitoring',
        'Renewable Energy Integration',
        'Demand Response',
        'Grid Optimization',
        'Carbon Footprint Tracking',
        'Cost Analysis',
        'Predictive Maintenance',
        'Automated Controls'
      ],
      benefits: [
        'Reduce energy costs by 30%',
        'Increase renewable usage by 40%',
        'Lower carbon footprint by 25%',
        'Improve grid stability'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Energy IoT',
      technologies: ['Smart Meters', 'Machine Learning', 'Edge Computing', 'React', 'Python', 'Modbus'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Retail IoT Analytics',
      description: 'Intelligent retail analytics with customer behavior tracking, inventory optimization, and personalized experiences.',
      icon: '🛍️',
      price: '$1,799/month',
      features: [
        'Customer Behavior Analysis',
        'Inventory Optimization',
        'Heat Map Analytics',
        'Queue Management',
        'Personalized Recommendations',
        'Loss Prevention',
        'Staff Optimization',
        'Real-time Insights'
      ],
      benefits: [
        'Increase sales by 25%',
        'Reduce inventory costs by 20%',
        'Improve customer experience',
        'Optimize store layouts'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Retail IoT',
      technologies: ['Computer Vision', 'Machine Learning', 'React', 'Python', 'RFID', 'Beacon Technology'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI IoT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Intelligent Internet of Things solutions that connect, analyze, and optimize your devices and systems for maximum efficiency and innovation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
              <div className="text-gray-300">IoT Solutions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-300">Efficiency Gain</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-gray-300">Connected Devices</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your IoT AI Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iotServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Connect Everything with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI IoT solutions today and transform your connected world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIIoTSolutionsPage;