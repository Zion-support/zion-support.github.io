import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  Database, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Shield,
  Globe,
  Cpu,
  Network,
  Bot
} from 'lucide-react';

const aiServices = [
  {
    id: 'ai-analytics',
    icon: Brain,
    title: 'AI-Powered Analytics',
    description: 'Transform raw data into actionable insights with advanced machine learning algorithms.',
    features: [
      'Predictive analytics and forecasting',
      'Real-time data processing',
      'Custom ML model development',
      'Automated reporting and dashboards',
      'Natural language processing',
      'Computer vision solutions'
    ],
    benefits: ['30% faster decision making', 'Improved accuracy', 'Cost reduction'],
    color: 'from-cyan-500 to-blue-600',
    path: '/services/ai-analytics'
  },
  {
    id: 'ai-development',
    icon: Code,
    title: 'Custom AI Development',
    description: 'Tailored artificial intelligence solutions designed for your specific business needs.',
    features: [
      'Custom AI model development',
      'API integration and deployment',
      'Scalable architecture design',
      'Continuous learning systems',
      'Edge AI implementation',
      'AI model optimization'
    ],
    benefits: ['Competitive advantage', 'Process automation', 'Innovation leadership'],
    color: 'from-purple-500 to-pink-600',
    path: '/services/ai-development'
  },
  {
    id: 'data-intelligence',
    icon: Database,
    title: 'Data Intelligence Platform',
    description: 'Unlock the full potential of your data with intelligent processing and analysis.',
    features: [
      'Advanced data mining techniques',
      'Pattern recognition algorithms',
      'Business intelligence dashboards',
      'Data visualization tools',
      'Real-time data streaming',
      'Data quality management'
    ],
    benefits: ['Data-driven insights', 'Improved efficiency', 'Better customer understanding'],
    color: 'from-green-500 to-emerald-600',
    path: '/services/data-intelligence'
  },
  {
    id: 'ai-automation',
    icon: Bot,
    title: 'Intelligent Automation',
    description: 'Streamline operations with AI-driven process automation and workflow optimization.',
    features: [
      'RPA with AI enhancement',
      'Workflow automation',
      'Document processing',
      'Customer service automation',
      'Supply chain optimization',
      'Quality control automation'
    ],
    benefits: ['Reduced manual work', 'Increased productivity', 'Error reduction'],
    color: 'from-orange-500 to-red-600',
    path: '/services/ai-automation'
  }
];

export function AIServicesShowcase() {
  const [selectedService, setSelectedService] = useState(aiServices[0]);
  const [isHovered, setIsHovered] = useState(false);

    };
    const itemVariants = {
  hidden: { opacity: 0, y: 20,
  scale: 0.95 

},
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"

    };
    return (<section className="py - 20 bg - gradient - to - br from - zion - slate - dark via - zion - slate to - zion - blue - dark relative overflow - hidden">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset - 0">
        <div className="absolute top - 0 left - 0 w - full h - full bg - gradient - to - br from - purple - 900 / 20 via - blue - 900 / 20 to - cyan - 900 / 20 animate - pulse"></div>
        <div className="absolute top - 1/4 right - 1/4 w - 96 h - 96 bg - purple - 500 / 10 rounded - full blur - 3xl animate - bounce"></div>
        <div className="absolute bottom - 1/4 left - 1/4 w - 80 h - 80 bg - cyan - 500 / 10 rounded - full blur - 3xl animate - ping"></div>
      </div>

      <div className="container mx - auto px - 4 relative z - 10">
        {/* Header Section */}
        <motion.div className="text - center mb - 16" initial = {
  { opacity: 0,
  y: 20 

}} whileInView = {
  { opacity: 1,
  y: 0 

}} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline - flex items - center gap - 2 bg - gradient - to - r from - purple - 500 / 20 to - cyan - 500 / 20 px - 4 py - 2 rounded - full border border - purple - 500 / 30 mb - 6">
            <Zap className="w - 5 h - 5 text - purple - 400"      />
            <span className="text - purple - 300 font - medium">Latest AI Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how artificial intelligence can transform your business operations and drive innovation
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 2 gap - 8 mb - 16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <AnimatePresence mode="wait">
            {filteredServices.map ( (service, index) => (<motion.div key={service.id} variants={itemVariants} layout whileHover = {
  {
                y: -8,
                scale: 1.02,
  transition: { duration: 0.2 

}
            }} className="relative bg - white / 5 backdrop - blur - sm border border - white / 10 rounded - 2xl p - 6 overflow - hidden group">
                <div className={`absolute inset - 0 bg - gradient - to - br ${service.color} opacity - 10 group - hover:opacity - 20 transition - opacity duration - 300`}      />
                <div className="relative z - 10">
                  <div className="flex items - start justify - between mb - 4">
                    <div className="flex items - center gap - 3">
                      <div className="w - 12 h - 12 rounded - xl bg - white / 10 flex items - center justify - center">
                        <service.icon className="w - 6 h - 6 text - white"      />
                      </div>
                      <div>
                        <h3 className="text - xl font - bold text - white">{service.name}</h3>
                        <div className="text - zion - slate - light text - sm">{service.category}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Service Details */}
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {/* Service Header */}
            <div className="text-center mb-8">
              <div className={`
                w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300
                bg-gradient-to-br ${selectedService.color}
                ${isHovered ? 'scale-110 shadow-2xl' : ''}
              `}>
                <selectedService.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">{selectedService.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg mx-auto">
                {selectedService.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                Key Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                Business Benefits
              </h4>
              <div className="space-y-3">
                {selectedService.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                to={selectedService.path}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Explore {selectedService.title}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our AI experts help you identify the perfect solutions for your business needs and implement them seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
