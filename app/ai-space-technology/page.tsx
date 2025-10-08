import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Rocket, Satellite, Planet } from 'lucide-react';

const AISpaceTechnologyPage: React.FC = () => {
  const spaceServices = [
    {
      title: 'AI Satellite Constellation Manager',
      description: 'Intelligent management of satellite constellations with autonomous orbit optimization and mission coordination.',
      icon: '🛰️',
      price: '$1,999/month',
      features: ['Constellation optimization', 'Autonomous orbit control', 'Mission coordination', 'Collision avoidance', 'Performance monitoring'],
      benefits: ['Maximize satellite efficiency', 'Reduce operational costs', 'Prevent collisions', 'Optimize coverage'],
      marketPrice: '$3,000-6,000/month',
      category: 'Satellite Management',
      technologies: ['Orbital mechanics', 'Machine Learning', 'Python', 'React', 'Custom space algorithms']
    },
    {
      title: 'AI Space Mission Planner',
      description: 'Advanced mission planning and execution system for space exploration with resource optimization and risk assessment.',
      icon: '🚀',
      price: '$2,499/month',
      features: ['Mission planning', 'Resource optimization', 'Risk assessment', 'Trajectory optimization', 'Payload management'],
      benefits: ['Optimize mission success', 'Reduce mission costs', 'Minimize risks', 'Maximize payload efficiency'],
      marketPrice: '$4,000-8,000/month',
      category: 'Mission Planning',
      technologies: ['Orbital mechanics', 'AI planning', 'Python', 'React', 'Custom mission algorithms']
    },
    {
      title: 'AI Space Weather Prediction',
      description: 'Advanced space weather forecasting and solar activity monitoring for satellite and space mission protection.',
      icon: '☀️',
      price: '$1,299/month',
      features: ['Solar activity monitoring', 'Space weather forecasting', 'Radiation prediction', 'Aurora forecasting', 'Impact assessment'],
      benefits: ['Protect satellites', 'Predict space weather', 'Minimize radiation exposure', 'Optimize mission timing'],
      marketPrice: '$2,000-4,000/month',
      category: 'Space Weather',
      technologies: ['Solar physics', 'Machine Learning', 'Python', 'React', 'Custom space weather models']
    },
    {
      title: 'AI Asteroid Detection & Defense',
      description: 'Advanced asteroid detection, tracking, and deflection system for planetary defense and space security.',
      icon: '☄️',
      price: '$3,999/month',
      features: ['Asteroid detection', 'Threat assessment', 'Deflection planning', 'Impact prediction', 'Defense coordination'],
      benefits: ['Protect Earth', 'Detect threats early', 'Plan defense strategies', 'Coordinate global response'],
      marketPrice: '$6,000-12,000/month',
      category: 'Planetary Defense',
      technologies: ['Asteroid tracking', 'Deflection physics', 'Python', 'React', 'Custom defense algorithms']
    },
    {
      title: 'AI Space Resource Mining',
      description: 'Autonomous space resource extraction and processing system for asteroid and lunar mining operations.',
      icon: '⛏️',
      price: '$4,999/month',
      features: ['Resource identification', 'Mining optimization', 'Processing automation', 'Logistics management', 'Safety protocols'],
      benefits: ['Extract space resources', 'Enable space economy', 'Reduce Earth dependency', 'Create new industries'],
      marketPrice: '$8,000-15,000/month',
      category: 'Space Mining',
      technologies: ['Mining robotics', 'Resource processing', 'Python', 'React', 'Custom mining algorithms']
    },
    {
      title: 'AI Mars Colony Manager',
      description: 'Complete autonomous Mars colony management system for life support, resource management, and mission operations.',
      icon: '🔴',
      price: '$9,999/month',
      features: ['Life support management', 'Resource optimization', 'Mission operations', 'Safety monitoring', 'Colony planning'],
      benefits: ['Enable Mars colonization', 'Optimize colony operations', 'Ensure survival', 'Plan future missions'],
      marketPrice: '$15,000-30,000/month',
      category: 'Space Colonization',
      technologies: ['Mars AI', 'Life support systems', 'Python', 'React', 'Custom Mars colony algorithms']
    },
    {
      title: 'AI Space Debris Cleanup',
      description: 'Autonomous space debris removal and orbital cleanup system for sustainable space operations.',
      icon: '🧹',
      price: '$2,999/month',
      features: ['Debris detection', 'Removal planning', 'Autonomous cleanup', 'Orbital optimization', 'Impact assessment'],
      benefits: ['Clean space debris', 'Protect satellites', 'Ensure orbital safety', 'Enable sustainable space'],
      marketPrice: '$5,000-10,000/month',
      category: 'Space Cleanup',
      technologies: ['Debris tracking', 'Cleanup robotics', 'Python', 'React', 'Custom cleanup algorithms']
    },
    {
      title: 'AI Interplanetary Communication Network',
      description: 'Advanced interplanetary communication system with autonomous relay management and signal optimization.',
      icon: '📡',
      price: '$1,799/month',
      features: ['Interplanetary relay', 'Signal optimization', 'Autonomous routing', 'Data compression', 'Error correction'],
      benefits: ['Enable deep space communication', 'Optimize data transmission', 'Reduce communication delays', 'Ensure reliable links'],
      marketPrice: '$3,000-6,000/month',
      category: 'Space Communication',
      technologies: ['Deep space comm', 'Signal processing', 'Python', 'React', 'Custom communication algorithms']
    },
    {
      title: 'AI Space Manufacturing Platform',
      description: 'Autonomous space manufacturing system for in-orbit production and assembly of space structures.',
      icon: '🏭',
      price: '$3,499/month',
      features: ['In-orbit manufacturing', 'Assembly automation', 'Quality control', 'Resource management', 'Production optimization'],
      benefits: ['Manufacture in space', 'Reduce launch costs', 'Enable large structures', 'Create space industry'],
      marketPrice: '$5,000-10,000/month',
      category: 'Space Manufacturing',
      technologies: ['Space robotics', 'Manufacturing AI', 'Python', 'React', 'Custom manufacturing algorithms']
    },
    {
      title: 'AI Space Tourism Manager',
      description: 'Complete space tourism management system with flight planning, passenger safety, and experience optimization.',
      icon: '👨‍🚀',
      price: '$1,599/month',
      features: ['Flight planning', 'Passenger management', 'Safety protocols', 'Experience optimization', 'Mission coordination'],
      benefits: ['Enable space tourism', 'Ensure passenger safety', 'Optimize experiences', 'Manage space flights'],
      marketPrice: '$2,500-5,000/month',
      category: 'Space Tourism',
      technologies: ['Tourism AI', 'Flight management', 'Python', 'React', 'Custom tourism algorithms']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Space Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered space technology solutions including satellite management, space missions, asteroid defense, and Mars colonization. Transform space operations with cutting-edge AI." />
        <meta name="keywords" content="AI space technology, satellite management, space missions, asteroid defense, Mars colonization, space AI, orbital mechanics, space exploration" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Space Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Revolutionary AI-powered space technology solutions for satellite management, space missions, 
              asteroid defense, and interplanetary exploration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Launch Your Space Mission: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Get Space Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Space Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Space Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI solutions for space exploration, satellite management, and interplanetary operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaceServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-6xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-600 text-center mb-2">{service.price}</div>
                  <div className="text-sm text-gray-500 text-center">Market Price: {service.marketPrice}</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="/contact"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Launch This Solution
                    <Rocket className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Capabilities */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Space Technology Capabilities
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Advanced AI capabilities for space operations, exploration, and colonization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Satellite className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Satellite Management</h3>
              <p className="text-blue-100">Autonomous satellite constellation management and optimization</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mission Planning</h3>
              <p className="text-blue-100">Advanced AI-powered space mission planning and execution</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Planetary Defense</h3>
              <p className="text-blue-100">Asteroid detection, tracking, and deflection systems</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Planet className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Space Colonization</h3>
              <p className="text-blue-100">Mars colony management and interplanetary operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Launch Your Space Mission?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Contact us today for a free consultation and custom space technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Launch Now: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🚀 Ready to explore the final frontier with AI-powered space technology</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISpaceTechnologyPage;