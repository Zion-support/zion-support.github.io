import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Wind, 
  Sun, 
  Battery, 
  Leaf, 
  BarChart3, 
  Shield, 
  Cloud, 
  Cpu, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Layout from '../../components/Layout';

const energySolutions = [
  {
    icon: Sun,,
    features: ['Smart Grid Integration', 'Weather Prediction', 'Energy Storage Optimization', 'Real-time Monitoring']
  },
  {
    icon: Wind,,
    features: ['Predictive Maintenance', 'Turbine Optimization', 'Wind Pattern Analysis', 'Performance Monitoring']
  },
  {
    icon: Battery,,
    features: ['Battery Health Monitoring', 'Load Balancing', 'Peak Shaving', 'Grid Stabilization']
  },
  {
    icon: Leaf,,
    features: ['Emissions Tracking', 'Carbon Credits', 'Sustainability Reporting', 'Green Energy Integration']
  }
];

const energyChallenges = [
  {,
    solution: 'Smart grid implementation with real-time monitoring and automated controls.'
  },
  {,
    solution: 'Advanced forecasting algorithms and energy storage management systems.'
  },
  {,
    solution: 'AI-powered optimization and predictive analytics for energy management.'
  },
  {,
    solution: 'Automated compliance monitoring and reporting systems.'
  }
];

const energyStats = [
  { number: '40%', label: 'Reduction in Energy Costs' },
  { number: '25%', label: 'Improvement in Efficiency' },
  { number: '60%', label: 'Faster Issue Resolution' },
  { number: '99.9%', label: 'System Uptime' }
];

const energyTechnologies = [
  {
    name: 'Smart Grid Technology',
    description: 'Advanced grid management with real-time monitoring and control capabilities.',
    benefits: ['Improved Reliability', 'Enhanced Efficiency', 'Better Integration', 'Reduced Outages']
  },
  {
    name: 'Predictive Analytics',
    description: 'Machine learning models for equipment maintenance and energy forecasting.',
    benefits: ['Preventive Maintenance', 'Cost Reduction', 'Extended Equipment Life', 'Optimized Performance']
  },
  {
    name: 'IoT Sensors',
    description: 'Connected devices for comprehensive energy monitoring and control.',
    benefits: ['Real-time Data', 'Remote Monitoring', 'Automated Controls', 'Energy Optimization']
  },
  {
    name: 'Energy Management Systems',
    description: 'Integrated platforms for comprehensive energy portfolio management.',
    benefits: ['Centralized Control', 'Data Analytics', 'Performance Tracking', 'Strategic Planning']
  }
];

export default function Energy() {
  return (
    <Layout>
      <Head>
        <title>Energy Industry Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your energy operations with Zion Tech Group's AI-powered solutions for renewable energy, smart grids, and energy management systems." />
        <meta name="keywords" content="energy industry, renewable energy, smart grid, energy management, solar, wind, battery storage, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/industries/energy" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">Energy Industry Solutions</h1>
              <p className="text-xl text-green-100 mb-8">
                Power the future with AI-driven energy solutions for renewable integration, smart grids, and sustainable energy management.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Energy Solutions
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Energy Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Energy Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed specifically for the energy sector.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {energySolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <solution.icon className="w-12 h-12 text-green-600 mr-4" />
                    <h3 className="text-2xl font-semibold text-gray-900">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Challenges */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Challenges We Solve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Addressing the most pressing challenges in the energy sector with innovative technology solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {energyChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{challenge.title}</h3>
                  <p className="text-gray-600 mb-4">{challenge.description}</p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="text-green-800 font-medium">Our Solution:</p>
                    <p className="text-green-700">{challenge.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Energy Stats */}
        <section className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Our energy solutions deliver measurable improvements in efficiency, cost reduction, and sustainability.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {energyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-green-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Technologies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technologies powering the future of energy management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {energyTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{tech.name}</h3>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {tech.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Energy Operations?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading energy companies that trust Zion Tech Group for their digital transformation needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <button className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Download Energy Solutions Guide
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
                  <span>energy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 mr-2" />
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