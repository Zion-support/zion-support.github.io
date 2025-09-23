import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Smartphone, 
  Globe,
  Zap,
  TrendingUp,
  Users,
  Lock,
  Server,
  Code
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  link: string;
  category: string;
  featured: boolean;
  gradient: string;
  bgColor: string;
}

const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI-Powered Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
    icon: Brain,
    features: [
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Automated Decision Making'
    ],
    link: '/services/ai-solutions',
    category: 'Artificial Intelligence',
    featured: true,
    gradient: 'from-purple-600 to-pink-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'cybersecurity',
    title: 'Advanced Cybersecurity',
    description: 'Protect your digital assets with enterprise-grade security solutions and threat intelligence.',
    icon: Shield,
    features: [
      'Threat Detection & Response',
      'Zero Trust Architecture',
      'Security Auditing',
      'Compliance Management'
    ],
    link: '/services/cybersecurity',
    category: 'Security',
    featured: true,
    gradient: 'from-blue-600 to-cyan-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Infrastructure',
    description: 'Scale your operations with robust cloud solutions and seamless migration services.',
    icon: Cloud,
    features: [
      'Multi-Cloud Strategy',
      'DevOps Automation',
      'Cost Optimization',
      'Disaster Recovery'
    ],
    link: '/services/cloud-services',
    category: 'Infrastructure',
    featured: true,
    gradient: 'from-green-600 to-emerald-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI',
    description: 'Unlock insights from your data with advanced analytics and business intelligence solutions.',
    icon: TrendingUp,
    features: [
      'Real-time Dashboards',
      'Predictive Modeling',
      'Data Visualization',
      'Performance Metrics'
    ],
    link: '/services/data-analytics',
    category: 'Analytics',
    featured: false,
    gradient: 'from-orange-600 to-red-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Solutions',
    description: 'Leverage blockchain technology for secure, transparent, and decentralized applications.',
    icon: Lock,
    features: [
      'Smart Contracts',
      'Supply Chain Tracking',
      'Digital Identity',
      'Cryptocurrency Integration'
    ],
    link: '/services/blockchain',
    category: 'Blockchain',
    featured: false,
    gradient: 'from-indigo-600 to-purple-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Create powerful mobile applications for iOS and Android with modern development practices.',
    icon: Smartphone,
    features: [
      'Cross-platform Development',
      'Native Performance',
      'App Store Optimization',
      'User Experience Design'
    ],
    link: '/services/mobile-development',
    category: 'Development',
    featured: false,
    gradient: 'from-teal-600 to-cyan-600',
    bgColor: 'bg-teal-50'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Build responsive, scalable web applications with modern frameworks and best practices.',
    icon: Globe,
    features: [
      'Responsive Design',
      'Performance Optimization',
      'SEO Implementation',
      'Progressive Web Apps'
    ],
    link: '/services/web-development',
    category: 'Development',
    featured: false,
    gradient: 'from-pink-600 to-rose-600',
    bgColor: 'bg-pink-50'
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    description: 'Streamline your development workflow with automated CI/CD pipelines and infrastructure management.',
    icon: Server,
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Auto-scaling Solutions'
    ],
    link: '/services/devops',
    category: 'Automation',
    featured: false,
    gradient: 'from-gray-600 to-slate-600',
    bgColor: 'bg-gray-50'
  }
];

export const ServicesHighlight: React.FC = () => {
  const featuredServices = services.filter(service => service.featured);
  const otherServices = services.filter(service => !service.featured);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Comprehensive Technology Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            From AI-powered automation to secure cloud infrastructure, we provide end-to-end 
            technology solutions that drive innovation and growth for your business.
          </motion.p>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Services
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className={`${service.bgColor} rounded-2xl p-8 h-full border-2 border-transparent group-hover:border-gray-200 transition-all duration-300`}>
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <Zap className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to={service.link}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 group-hover:scale-105`}
                    >
                      Learn More
                      <Zap className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Other Services */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white mb-4`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {service.category}
                    </span>
                    <Link
                      to={service.link}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                    >
                      Explore →
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Let our experts help you choose the right technology solutions for your unique business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesHighlight;