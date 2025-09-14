"use client";
import React{ useState } from 'react';
import Link from 'next/link';
import { motionAnimatePresence } from 'framer-motion';
import { 
  BrainShieldRocketCpuDatabaseAtomUsers
  CheckCircleTrendingUpClockStarFilterChevronDown
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: string;
  period: string;
  setupTime: string;
  customers: string;
  features: string[];
  benefits: string[];
  roi: string;
  marketSize: string;
  growthRate: string;
  popular?: boolean;
  icon: React.ComponentType<any>;
  color: string;
}

const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategorysetSelectedCategory] = useState<string>('all');
  const [searchTermsetSearchTerm] = useState('');

  const services: Service[] = [
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      icon: <Brain className="w-8 h-8 text-white" />,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Custom AI model development',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'AI strategy consulting',
        'Model optimization & deployment'
      ],
      benefits: [
        'Automated decision making',
        'Enhanced customer experience',
        'Improved operational efficiency',
        'Data-driven insights'
      ],
      technologies: ['TensorFlow'PyTorch'OpenAI'Hugging Face'AWS SageMaker'],
      href: '/services/ai'
    },
    {
      id: 'cloud',
      title: 'Cloud Infrastructure',
      description: 'Scalablesecureand reliable cloud solutions tailored to your business needs.',
      icon: <Cloud className="w-8 h-8 text-white" />,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Multi-cloud architecture design',
        'Container orchestration',
        'Serverless computing',
        'Database migration',
        'Disaster recovery planning',
        'Cost optimization'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Scalable infrastructure',
        'Reduced operational costs',
        'Enhanced security'
      ],
      technologies: ['AWS'Azure'Google Cloud'Kubernetes'Docker'],
      href: '/services/cloud'
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      icon: <Shield className="w-8 h-8 text-white" />,
      gradient: 'from-red-500 to-orange-500',
      features: [
        'Security assessment & auditing',
        'Penetration testing',
        'Incident response planning',
        'Compliance management',
        'Security training',
        'Threat monitoring'
      ],
      benefits: [
        'Enterprise-grade protection',
        'Regulatory compliance',
        '24/7 threat monitoring',
        'Reduced security risks'
      ],
      technologies: ['SIEM'SOAR'EDR'XDR'Zero Trust'],
      href: '/services/security'
    },
    {
      id: 'quantum',
      title: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex computational challenges and optimization.',
      icon: <Zap className="w-8 h-8 text-white" />,
      gradient: 'from-indigo-500 to-purple-500',
      features: [
        'Quantum algorithm development',
        'Quantum machine learning',
        'Optimization problems',
        'Cryptography solutions',
        'Quantum simulation',
        'Research & development'
      ],
      benefits: [
        'Exponential speed improvements',
        'Complex problem solving',
        'Future-ready technology',
        'Competitive advantage'
      ],
      technologies: ['Qiskit'Cirq'PennyLane'IBM Quantum'Google Quantum'],
      href: '/services/quantum'
    }
  ];

  const stats = [
    { number: '500+'label: 'Projects Delivered' },
    { number: '99.9%'label: 'Uptime Guarantee' },
    { number: '50+'label: 'Expert Engineers' },
    { number: '24/7'label: 'Support Available' }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Technology Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver comprehensive technology solutions that drive innovation and growth 
            for businesses of all sizes across various industries.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 appearance-none pr-12"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300 w-64"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((serviceindex) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}

              {/* Service Content */}
              <div className="p-8">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/60 mb-1">{getCategoryIcon(service.category)({ className: 'w-3 h-3' })}</div>
                    <div className="text-xs text-white/40">{service.category}</div>
                  </div>
                </div>

                {/* Service Info */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${services[activeService].gradient} rounded-xl flex items-center justify-center`}>
                      {services[activeService].icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {services[activeService].title}
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {services[activeService].description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {services[activeService].features.map((featureindex) => (
                          <li key={index} className="flex items-center space-x-3 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {services[activeService].benefits.map((benefitindex) => (
                          <li key={index} className="flex items-center space-x-3 text-gray-300">
                            <ArrowRight className="w-5 h-5 text-blue-400" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(03).map((featureidx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(02).map((benefitidx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <TrendingUp className="w-3 h-3 text-blue-400" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI and Market Info */}
                <div className="mb-6 p-4 bg-white/5 rounded-lg">
                  <div className="text-xs text-white/60 mb-2">ROI & Market Position</div>
                  <div className="text-xs text-white/80 leading-relaxed">{service.roi}</div>
                  <div className="mt-2 text-xs text-white/60">
                    Market: {service.marketSize} • Growth: {service.growthRate}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Demo request for ${service.name}`}
                    className="px-4 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((statindex) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations 
              with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Consultation Request"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesShowcase;