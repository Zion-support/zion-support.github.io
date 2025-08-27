import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  GitBranch, 
  Shield, 
  Atom, 
  Cpu, 
  Cloud, 
  Rocket, 
  Zap,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

export const EnhancedServicesShowcase: React.FC = () => {
  const services = [
    {
      title: 'AI Workflow Automation',
      description: 'Transform business operations with intelligent automation that learns and scales',
      price: 'From $299/month',
      path: '/services/ai-workflow-automation',
              icon: GitBranch,
      category: 'AI & Automation',
      features: ['Process optimization', 'AI-powered workflows', 'Real-time analytics', 'Scalable automation'],
      benefits: ['Reduce manual work by 70-85%', 'Improve efficiency by 60%', 'Cut operational costs by 40-50%'],
      color: 'from-cyan-500 to-blue-600',
      glowColor: 'cyan'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered threat detection and prevention',
      price: 'From $499/month',
      path: '/services/ai-cybersecurity',
      icon: Shield,
      category: 'Security',
      features: ['Threat detection', 'Behavioral analytics', 'Automated response', 'Compliance monitoring'],
      benefits: ['Detect threats 10x faster', 'Reduce false positives by 85%', 'Prevent 99.9% of attacks'],
      color: 'from-purple-500 to-indigo-600',
      glowColor: 'purple'
    },
    {
      title: 'Quantum Computing',
      description: 'Solve complex problems 1000x faster with quantum computing solutions',
      price: 'From $2,999/month',
      path: '/services/quantum-computing-solutions',
      icon: Atom,
      category: 'Quantum Tech',
      features: ['Quantum algorithms', 'ML acceleration', 'Financial modeling', 'Drug discovery'],
      benefits: ['1000x faster computation', 'Breakthrough discoveries', 'Unbreakable encryption'],
      color: 'from-green-500 to-emerald-600',
      glowColor: 'green'
    },
    {
      title: 'IoT Edge Computing',
      description: 'Process data at the edge and reduce latency by 90%',
      price: 'From $399/month',
      path: '/services/iot-edge-computing',
      icon: Cpu,
      category: 'IoT & Edge',
      features: ['Edge processing', 'Device management', 'Real-time analytics', 'AI at the edge'],
      benefits: ['Reduce latency by 90%', 'Cut bandwidth costs by 60-80%', 'Scale to millions of devices'],
      color: 'from-orange-500 to-red-600',
      glowColor: 'orange'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Build, deploy, and scale with enterprise-grade cloud infrastructure',
      price: 'From $799/month',
      path: '/services/cloud-devops',
      icon: Cloud,
      category: 'Infrastructure',
      features: ['Cloud migration', 'CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting'],
      benefits: ['Faster deployments', 'Improved reliability', 'Cost optimization', 'Scalability'],
      color: 'from-blue-500 to-cyan-600',
      glowColor: 'blue'
    },
    {
      title: 'AI Sales Copilot',
      description: 'Automate sales processes and boost conversion rates with AI',
      price: 'From $1,500/month',
      path: '/services/ai-sales-copilot',
      icon: Brain,
      category: 'Sales AI',
      features: ['Lead scoring', 'CRM automation', 'Sales analytics', 'Predictive insights'],
      benefits: ['Reduce admin time by 40-60%', 'Improve conversion rates', 'Shorten sales cycles'],
      color: 'from-pink-500 to-rose-600',
      glowColor: 'pink'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 bg-futuristic-enhanced relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Innovative <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Technology Solutions</span>
          </h2>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge solutions that combine AI, quantum computing, IoT, and cybersecurity to transform your business operations and drive innovation
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-xl p-8 rounded-3xl border border-zion-cyan/20 hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 hover:transform hover:scale-105">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-semibold rounded-full border border-zion-cyan/30 mb-2">
                        {service.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>5.0</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3">Business Impact:</h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-zion-slate-light text-sm">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  to={service.path}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold text-center block hover:shadow-lg hover:shadow-${service.glowColor}-500/25 transition-all duration-300 group-hover:scale-105`}
                >
                  Explore Service
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center space-x-4">
            <Link 
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="tel:+13024640950"
              className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div className="mt-6 text-zion-slate-light">
            Questions? Email <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};