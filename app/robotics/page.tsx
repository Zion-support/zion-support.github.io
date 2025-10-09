import React from 'react';
import { CheckCircle, Zap, Cpu, Shield, Users, Award } from 'lucide-react';

const RoboticsPage: React.FC = () => {
  const roboticsServices = [
    {
      name: 'Autonomous Mobile Robots',
      price: '$15,000/month',
      description: 'Intelligent mobile robots for warehouse automation and logistics',
      features: [
        'Path planning and navigation',
        'Object detection and avoidance',
        'Load carrying and transportation',
        'Real-time monitoring and control'
      ],
      icon: Cpu,
      benefits: [
        '50% reduction in labor costs',
        '24/7 operation capability',
        '99.9% accuracy in navigation',
        'Scalable fleet management'
      ]
    },
    {
      name: 'Industrial Robotic Arms',
      price: '$25,000/month',
      description: 'Precision robotic arms for manufacturing and assembly operations',
      features: [
        'High-precision positioning',
        'Multi-axis movement',
        'Force feedback control',
        'Vision-guided operations'
      ],
      icon: Zap,
      benefits: [
        '300% increase in production speed',
        '99.5% accuracy in assembly',
        'Reduced human error',
        'Consistent quality output'
      ]
    },
    {
      name: 'Service Robots',
      price: '$8,000/month',
      description: 'Customer service and hospitality robots for various industries',
      features: [
        'Natural language processing',
        'Facial recognition',
        'Autonomous navigation',
        'Multi-language support'
      ],
      icon: Users,
      benefits: [
        'Enhanced customer experience',
        '24/7 availability',
        'Multilingual support',
        'Consistent service quality'
      ]
    },
    {
      name: 'Robotic Process Automation',
      price: '$5,000/month',
      description: 'Software robots for automating repetitive business processes',
      features: [
        'Process discovery and mapping',
        'Workflow automation',
        'Exception handling',
        'Performance monitoring'
      ],
      icon: Shield,
      benefits: [
        '80% reduction in manual work',
        '99.9% accuracy in processing',
        'Faster processing times',
        'Cost-effective automation'
      ]
    }
  ];

  const applications = [
    {
      title: 'Manufacturing',
      description: 'Automated assembly lines, quality control, and material handling',
      benefits: ['Increased production efficiency', 'Improved product quality', 'Reduced labor costs', '24/7 operation']
    },
    {
      title: 'Healthcare',
      description: 'Surgical robots, patient care assistants, and medical device automation',
      benefits: ['Enhanced precision', 'Reduced recovery time', 'Improved patient outcomes', 'Consistent care quality']
    },
    {
      title: 'Logistics & Warehousing',
      description: 'Automated picking, sorting, and transportation systems',
      benefits: ['Faster order fulfillment', 'Reduced errors', 'Optimized space utilization', 'Scalable operations']
    },
    {
      title: 'Agriculture',
      description: 'Autonomous farming equipment, crop monitoring, and harvesting robots',
      benefits: ['Increased crop yield', 'Reduced resource usage', 'Precision farming', 'Labor cost savings']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Robotics Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your operations with intelligent robotics solutions. From autonomous mobile robots 
            to industrial robotic arms, we deliver cutting-edge robotics technology for every industry.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Robots Deployed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Operation</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Robotics Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roboticsServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    <div className="text-2xl font-bold text-green-400">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Applications Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI & Machine Learning</h3>
              <p className="text-gray-300">Advanced AI algorithms for autonomous decision-making and learning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Computer Vision</h3>
              <p className="text-gray-300">Real-time image processing and object recognition capabilities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">IoT Integration</h3>
              <p className="text-gray-300">Seamless integration with existing systems and IoT devices</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Automate with Robotics?
          </h2>
          <p className="text-purple-100 mb-6">
            Discover how robotics can transform your operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Robotics Consultation
            </a>
            <a
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticsPage;