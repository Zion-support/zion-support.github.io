import React from 'react';
import { CheckCircle, Zap, Cpu, Shield, Users, Award } from 'lucide-react';

const AutonomousSystemsPage: React.FC = () => {
  const autonomousServices = [
    {
      name: 'Autonomous Vehicle Systems',
      price: '$50,000/month',
      description: 'Self-driving vehicle technology with advanced AI and sensor fusion',
      features: [
        'Computer vision systems',
        'Sensor fusion algorithms',
        'Path planning and navigation',
        'Real-time decision making'
      ],
      icon: Cpu,
      benefits: [
        'Reduced accidents by 90%',
        'Improved fuel efficiency',
        '24/7 operation capability',
        'Enhanced safety standards'
      ]
    },
    {
      name: 'Autonomous Drones',
      price: '$15,000/month',
      description: 'Intelligent drone systems for surveillance, delivery, and inspection',
      features: [
        'Autonomous flight control',
        'Object detection and avoidance',
        'Mission planning',
        'Real-time monitoring'
      ],
      icon: Zap,
      benefits: [
        '80% reduction in inspection time',
        'Access to remote locations',
        'Cost-effective operations',
                'Enhanced data collection'
      ]
    },
    {
      name: 'Autonomous Manufacturing',
      price: '$30,000/month',
      description: 'Self-managing manufacturing systems with intelligent automation',
      features: [
        'Predictive maintenance',
        'Quality control automation',
        'Production optimization',
        'Adaptive manufacturing'
      ],
      icon: Shield,
      benefits: [
        '40% increase in efficiency',
        '99.9% quality consistency',
        'Reduced downtime',
        'Optimized resource usage'
      ]
    },
    {
      name: 'Autonomous Infrastructure',
      price: '$25,000/month',
      description: 'Smart infrastructure systems for cities and buildings',
      features: [
        'Traffic management',
        'Energy optimization',
        'Security monitoring',
        'Environmental control'
      ],
      icon: Users,
      benefits: [
        '30% energy savings',
        'Improved traffic flow',
        'Enhanced security',
        'Better resource management'
      ]
    }
  ];

  const applications = [
    {
      title: 'Smart Cities',
      description: 'Autonomous traffic management, waste collection, and public services',
      benefits: ['Reduced traffic congestion', 'Improved air quality', 'Efficient resource usage', 'Enhanced citizen services']
    },
    {
      title: 'Healthcare',
      description: 'Autonomous medical devices, patient monitoring, and surgical assistance',
      benefits: ['Improved patient outcomes', 'Reduced medical errors', '24/7 monitoring', 'Enhanced precision']
    },
    {
      title: 'Agriculture',
      description: 'Autonomous farming equipment, crop monitoring, and harvesting systems',
      benefits: ['Increased crop yield', 'Reduced labor costs', 'Precision farming', 'Sustainable practices']
    },
    {
      title: 'Logistics',
      description: 'Autonomous warehouses, delivery systems, and supply chain management',
      benefits: ['Faster order fulfillment', 'Reduced errors', '24/7 operations', 'Cost optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Autonomous Systems
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build the future with intelligent autonomous systems that operate independently, 
            make decisions, and adapt to changing environments. From self-driving vehicles 
            to smart infrastructure, we deliver cutting-edge autonomous technology.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-gray-300">Autonomous Systems</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Efficiency Gain</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Reliability</div>
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
            Autonomous Systems Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {autonomousServices.map((service, index) => (
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
              <p className="text-gray-300">Advanced AI algorithms for autonomous decision-making</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Computer Vision</h3>
              <p className="text-gray-300">Real-time image processing and object recognition</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sensor Fusion</h3>
              <p className="text-gray-300">Multi-sensor data integration and processing</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-purple-100 mb-6">
            Create intelligent autonomous systems that transform industries and improve lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Autonomous Systems Consultation
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

export default AutonomousSystemsPage;