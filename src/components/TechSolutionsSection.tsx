import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Shield, Brain, Zap, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    icon: Code,
    title: 'AI-Powered Development',
    description: 'Automated code generation, testing, and deployment with intelligent assistance.',
    features: ['Code Review', 'Auto-testing', 'CI/CD Integration'],
    color: 'from-blue-500 to-cyan-500',
    link: '/services/ai-development'
  },
  {
    icon: Database,
    title: 'Data Analytics & BI',
    description: 'Transform raw data into actionable insights with advanced analytics.',
    features: ['Real-time Dashboards', 'Predictive Analytics', 'Data Visualization'],
    color: 'from-green-500 to-emerald-500',
    link: '/services/data-analytics'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions for modern applications and services.',
    features: ['Multi-cloud Strategy', 'Auto-scaling', 'Cost Optimization'],
    color: 'from-purple-500 to-pink-500',
    link: '/services/cloud-infrastructure'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response'],
    color: 'from-red-500 to-orange-500',
    link: '/services/cybersecurity'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Custom ML models and AI solutions for business automation.',
    features: ['Model Training', 'API Integration', 'Performance Monitoring'],
    color: 'from-indigo-500 to-purple-500',
    link: '/services/machine-learning'
  },
  {
    icon: Zap,
    title: 'DevOps & Automation',
    description: 'Streamline development workflows with automated processes.',
    features: ['Pipeline Automation', 'Infrastructure as Code', 'Monitoring'],
    color: 'from-yellow-500 to-orange-500',
    link: '/services/devops'
  },
  {
    icon: Globe,
    title: 'Digital Transformation',
    description: 'Modernize your business with cutting-edge digital solutions.',
    features: ['Legacy Migration', 'Process Optimization', 'Change Management'],
    color: 'from-teal-500 to-blue-500',
    link: '/services/digital-transformation'
  },
  {
    icon: Lock,
    title: 'Compliance & Governance',
    description: 'Ensure regulatory compliance and maintain data governance.',
    features: ['Audit Trails', 'Policy Management', 'Risk Assessment'],
    color: 'from-gray-500 to-slate-500',
    link: '/services/compliance'
  }
];

export function TechSolutionsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technology <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={solution.title}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={solution.link} className="block">
                  <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 h-full hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/25">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {solution.title}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                      <span className="text-zion-cyan text-sm font-medium group-hover:text-zion-purple transition-colors">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-zion-slate-light mb-6">
            Don't see what you need? Let's discuss your custom requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
          >
            Get Custom Solution
            <Zap className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}