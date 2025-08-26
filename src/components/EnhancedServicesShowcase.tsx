import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Lightbulb, 
  Wrench,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  benefits: string[];
  delivery: string;
  support: string;
  category: string;
  priority: number;
}

interface Technology {
  name: string;
  category: string;
  icon?: string;
}

interface Industry {
  name: string;
  description: string;
  icon: string;
}

export const EnhancedServicesShowcase: React.FC = () => {
  const services: Service[] = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      icon: Brain,
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      benefits: ['Automated Decision Making', 'Improved Efficiency', 'Data-Driven Insights', 'Competitive Advantage'],
      delivery: 'Agile development with continuous iteration and testing',
      support: '24/7 monitoring and ongoing optimization',
      category: 'AI & ML',
      priority: 1
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Modern cloud infrastructure and development operations',
      icon: Cloud,
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code'],
      benefits: ['Scalability', 'Cost Optimization', 'Faster Deployment', 'Improved Reliability'],
      delivery: 'Phased migration with minimal downtime',
      support: 'Proactive monitoring and automated scaling',
      category: 'Infrastructure',
      priority: 2
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for modern threats',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
      benefits: ['Risk Mitigation', 'Compliance', 'Business Continuity', 'Customer Trust'],
      delivery: 'Security-first approach with regular assessments',
      support: 'Real-time threat monitoring and rapid response',
      category: 'Security',
      priority: 3
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Strategic guidance for organizational digital evolution',
      icon: Rocket,
      features: ['Technology Strategy', 'Process Optimization', 'Change Management', 'Innovation Consulting'],
      benefits: ['Operational Efficiency', 'Market Agility', 'Cost Reduction', 'Future Readiness'],
      delivery: 'Strategic roadmap with milestone tracking',
      support: 'Ongoing consultation and strategy refinement',
      category: 'Strategy',
      priority: 4
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Robust and scalable technology foundations',
      icon: Wrench,
      features: ['Network Design', 'System Architecture', 'Data Management', 'Performance Optimization'],
      benefits: ['Reliability', 'Performance', 'Scalability', 'Maintainability'],
      delivery: 'Phased implementation with testing at each stage',
      support: 'Proactive maintenance and performance tuning',
      category: 'Infrastructure',
      priority: 5
    },
    {
      id: 'consulting',
      title: 'Consulting',
      description: 'Expert technology strategy and advisory services',
      icon: Lightbulb,
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Project Management'],
      benefits: ['Informed Decisions', 'Cost Savings', 'Risk Mitigation', 'Best Practices'],
      delivery: 'Comprehensive analysis with actionable recommendations',
      support: 'Ongoing guidance and implementation support',
      category: 'Strategy',
      priority: 6
    }
  ];

  const technologies: Technology[] = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'AI/ML' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'PyTorch', category: 'AI/ML' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Cache' }
  ];

  const industries: Industry[] = [
    { name: 'Healthcare', description: 'HIPAA compliant solutions', icon: '🏥' },
    { name: 'Finance', description: 'Regulatory compliant systems', icon: '💳' },
    { name: 'E-commerce', description: 'Scalable online platforms', icon: '🛒' },
    { name: 'Manufacturing', description: 'Industry 4.0 solutions', icon: '🏭' },
    { name: 'Education', description: 'EdTech innovations', icon: '🎓' },
    { name: 'Real Estate', description: 'Property management systems', icon: '🏠' },
    { name: 'Transportation', description: 'Logistics optimization', icon: '🚚' },
    { name: 'Energy', description: 'Smart grid solutions', icon: '⚡' },
    { name: 'Retail', description: 'Omnichannel experiences', icon: '🛍️' },
    { name: 'Media', description: 'Content management systems', icon: '📺' }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Services
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive technology solutions designed to transform your business and drive innovation
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              View All Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end technology solutions across all major domains
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="text-5xl mb-4 flex justify-center">
                  <service.icon className="h-16 w-16 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Key Features
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Benefits
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivery & Support */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-sm">
                    <p className="text-gray-300 mb-2">
                      <strong className="text-blue-400">Delivery:</strong> {service.delivery}
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-cyan-400">Support:</strong> {service.support}
                    </p>
                  </div>
                </div>

                {/* Priority Badge */}
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs px-2 py-1 bg-zion-purple/20 text-zion-purple rounded-full">
                    Priority {service.priority}
                  </span>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium group-hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technologies and proven frameworks
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center hover:border-white/40 transition-all duration-300 group hover:scale-105"
                variants={itemVariants}
              >
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                <div className="text-xs text-gray-500 mt-1">{tech.category}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven expertise across diverse business sectors
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center hover:border-white/40 transition-all duration-300 group hover:scale-105"
                variants={itemVariants}
              >
                <div className="text-3xl mb-2">{industry.icon}</div>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                  {industry.name}
                </span>
                <div className="text-xs text-gray-500 mt-1">{industry.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can drive your success
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};