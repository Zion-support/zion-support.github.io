import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Rocket,
  Target,
  Users,
  BarChart3,
  Zap,
  TrendingUp,
  Globe,
  Lightbulb,
  Shield,
  Database,
  Cpu,
  Network
} from 'lucide-react';
const DigitalTransformation: React.FC = () => {
  const transformationServices = [
    {
      title: 'Business Process Optimization',
      description: 'Streamline and automate business processes for maximum efficiency',
      icon: <Target className="w-8 h-8" />,
      features: ['Process Mapping', 'Workflow Automation', 'Performance Metrics', 'Continuous Improvement']
    },
    {
      title: 'Customer Experience Transformation',
      description: 'Create seamless, personalized customer experiences across all touchpoints',
      icon: <Users className="w-8 h-8" />,
      features: ['Omnichannel Strategy', 'Personalization', 'Customer Journey Mapping', 'Feedback Systems']
    },
    {
      title: 'Data & Analytics Strategy',
      description: 'Leverage data insights to drive informed business decisions',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Data Strategy', 'Business Intelligence', 'Predictive Analytics', 'Data Governance']
    },
    {
      title: 'Technology Modernization',
      description: 'Upgrade legacy systems and adopt modern technology solutions',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Legacy System Migration', 'Cloud Adoption', 'API Integration', 'Microservices Architecture']
    }
  ];
  const transformationPhases = [
    { name: 'Assessment', description: 'Evaluate current state and identify opportunities' },
    { name: 'Strategy', description: 'Develop comprehensive transformation roadmap' },
    { name: 'Implementation', description: 'Execute transformation initiatives' },
    { name: 'Optimization', description: 'Continuous improvement and refinement' }
  ];
  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Streamlined processes and automated workflows',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Better Customer Experience',
      description: 'Enhanced customer satisfaction and loyalty',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Informed decision making with analytics',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead with modern technology',
      icon: <Rocket className="w-6 h-6" />
    }
  ];
  const industries = [
    { name: 'Healthcare', description: 'Digital health solutions and patient care optimization' },
    { name: 'Finance', description: 'Fintech innovation and digital banking solutions' },
    { name: 'Manufacturing', description: 'Industry 4.0 and smart manufacturing' },
    { name: 'Retail', description: 'E-commerce and omnichannel retail solutions' },
    { name: 'Education', description: 'Digital learning platforms and EdTech solutions' },
    { name: 'Government', description: 'Digital government and citizen services' }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Transformation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Transform your business for the digital age with strategic technology adoption and process optimization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </section>
      {/* Transformation Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive transformation solutions designed to modernize your business
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Transformation Phases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Transformation Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful digital transformation
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationPhases.map((phase, index) => (
              <motion.div
                key={phase.name}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white font-bold text-xl">{index + 1}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{phase.name}</h3>
                <p className="text-gray-300 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized transformation solutions for various industry sectors
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ y: -3 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{industry.name}</h3>
                <p className="text-gray-300 text-sm text-center">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Digital Transformation Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of strategic digital transformation
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our digital transformation services can modernize your business and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default DigitalTransformation;