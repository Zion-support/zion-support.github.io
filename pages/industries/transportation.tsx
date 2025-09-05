import * as React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Plane, 
  Ship, 
  Train, 
  MapPin, 
  Clock, 
  Fuel, 
  Navigation, 
  Shield, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin as LocationIcon,
  Cpu,
  Zap,
  Users
} from 'lucide-react';
import Layout from '../../components/Layout';

const transportationSolutions = [
  {
    icon: Navigation,,
    features: ['Route Optimization', 'Fuel Efficiency', 'Driver Safety', 'Maintenance Scheduling']
  },
  {
    icon: MapPin,,
    features: ['Demand Forecasting', 'Inventory Management', 'Warehouse Automation', 'Last-Mile Delivery']
  },
  {
    icon: Shield,,
    features: ['Driver Monitoring', 'Vehicle Safety', 'Compliance Tracking', 'Incident Management']
  },
  {
    icon: BarChart3,,
    features: ['Performance Analytics', 'Cost Analysis', 'Predictive Maintenance', 'KPI Dashboard']
  }
];

const transportationChallenges = [
  {,
    solution: 'AI-powered route planning with real-time traffic and weather data integration.'
  },
  {,
    solution: 'IoT sensors and machine learning for predictive maintenance scheduling.'
  },
  {,
    solution: 'Advanced driver monitoring systems with real-time alerts and coaching.'
  },
  {,
    solution: 'Automated compliance monitoring and reporting systems.'
  }
];

const transportationStats = [
  { number: '30%', label: 'Reduction in Fuel Costs' },
  { number: '25%', label: 'Improvement in Delivery Times' },
  { number: '40%', label: 'Reduction in Maintenance Costs' },
  { number: '50%', label: 'Decrease in Accidents' }
];

const transportationTechnologies = [
  {
    name: 'IoT Fleet Tracking',
    description: 'Real-time vehicle monitoring with GPS, sensors, and telematics.',
    benefits: ['Real-time Location', 'Fuel Monitoring', 'Driver Behavior', 'Vehicle Health']
  },
  {
    name: 'Predictive Analytics',
    description: 'Machine learning models for maintenance, demand, and route optimization.',
    benefits: ['Preventive Maintenance', 'Demand Forecasting', 'Route Optimization', 'Cost Reduction']
  },
  {
    name: 'Autonomous Systems',
    description: 'AI-powered autonomous vehicles and driver assistance systems.',
    benefits: ['Safety Improvement', 'Cost Reduction', '24/7 Operations', 'Efficiency Gains']
  },
  {
    name: 'Blockchain Logistics',
    description: 'Secure, transparent supply chain tracking and documentation.',
    benefits: ['Transparency', 'Security', 'Traceability', 'Trust Building']
  }
];

const transportationModes = [
  {
    icon: Truck,,
    solutions: ['Fleet Tracking', 'Route Planning', 'Driver Monitoring', 'Fuel Management']
  },
  {
    icon: Train,,
    solutions: ['Schedule Optimization', 'Passenger Analytics', 'Maintenance Planning', 'Safety Systems']
  },
  {
    icon: Plane,,
    solutions: ['Flight Planning', 'Maintenance Scheduling', 'Passenger Management', 'Cargo Optimization']
  },
  {
    icon: Ship,,
    solutions: ['Vessel Tracking', 'Port Operations', 'Cargo Management', 'Weather Routing']
  }
];

export default function Transportation() {
  return (
    <Layout>
      <Head>
        <title>Transportation Industry Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your transportation operations with Zion Tech Group's AI-powered solutions for fleet management, logistics optimization, and supply chain management." />
        <meta name="keywords" content="transportation industry, fleet management, logistics, supply chain, route optimization, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/industries/transportation" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">Transportation Industry Solutions</h1>
              <p className="text-xl text-blue-100 mb-8">
                Drive efficiency and safety with AI-powered transportation solutions for fleet management, logistics optimization, and supply chain excellence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Transportation Solutions
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Transportation Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Transportation Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed specifically for the transportation and logistics sector.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {transportationSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <solution.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-semibold text-gray-900">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transportation Modes */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Transportation Modes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized solutions for different transportation modes and their unique challenges.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {transportationModes.map((mode, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <mode.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{mode.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{mode.description}</p>
                  <ul className="space-y-1">
                    {mode.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Challenges */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Challenges We Solve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Addressing the most pressing challenges in the transportation sector with innovative technology solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {transportationChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{challenge.title}</h3>
                  <p className="text-gray-600 mb-4">{challenge.description}</p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="text-blue-800 font-medium">Our Solution:</p>
                    <p className="text-blue-700">{challenge.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transportation Stats */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our transportation solutions deliver measurable improvements in efficiency, safety, and cost reduction.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {transportationStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Technologies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technologies powering the future of transportation and logistics.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {transportationTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{tech.name}</h3>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {tech.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Transportation Operations?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading transportation companies that trust Zion Tech Group for their digital transformation needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Download Transportation Guide
                </button>
              </div>
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>transportation@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <LocationIcon className="w-6 h-6 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}