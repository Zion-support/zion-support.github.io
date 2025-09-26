import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,
  Shield,
  Rocket,
  Lock,
  Cpu,
  Code,
  Cloud,
  Database,
  Globe,
  Zap,
  Target,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  path: string;
  gradient: string;
  stats: { label: string; value: string }[];
}

const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI & Machine Learning',
    description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
    icon: Brain,
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making'],
    path: '/services/ai-solutions',
    gradient: 'from-purple-500 to-blue-600',
    stats: [
      { label: 'AI Models', value: '500+' },
      { label: 'Accuracy', value: '99.2%' },
      { label: 'Cost Savings', value: '45%' }
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure, and high-performance cloud solutions for modern businesses.',
    icon: Cloud,
    features: ['Auto-scaling', 'Global CDN', '99.9% Uptime', 'Security First'],
    path: '/services/cloud-infrastructure',
    gradient: 'from-blue-500 to-cyan-600',
    stats: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Regions', value: '25+' },
      { label: 'Response Time', value: '<50ms' }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    icon: Shield,
    features: ['Threat Detection', 'Zero Trust', 'Compliance', '24/7 Monitoring'],
    path: '/services/cybersecurity',
    gradient: 'from-red-500 to-orange-600',
    stats: [
      { label: 'Threats Blocked', value: '1M+' },
      { label: 'Security Score', value: 'A+' },
      { label: 'Response Time', value: '<5min' }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Unlock insights from your data with advanced analytics and visualization tools.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Data Visualization', 'Predictive Modeling', 'Business Intelligence'],
    path: '/services/data-analytics',
    gradient: 'from-green-500 to-teal-600',
    stats: [
      { label: 'Data Sources', value: '100+' },
      { label: 'Insights Generated', value: '10K+' },
      { label: 'Decision Speed', value: '3x Faster' }
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: Rocket,
    features: ['Native iOS/Android', 'Cross-platform', 'Progressive Web Apps', 'App Store Optimization'],
    path: '/services/mobile-development',
    gradient: 'from-indigo-500 to-purple-600',
    stats: [
      { label: 'Apps Delivered', value: '200+' },
      { label: 'User Rating', value: '4.8/5' },
      { label: 'Download Speed', value: '2x Faster' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    description: 'Streamline your development and deployment processes with modern DevOps practices.',
    icon: Cpu,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automated Testing'],
    path: '/services/devops',
    gradient: 'from-yellow-500 to-orange-600',
    stats: [
      { label: 'Deployment Speed', value: '10x Faster' },
      { label: 'Error Reduction', value: '80%' },
      { label: 'Uptime Improvement', value: '99.9%' }
    ]
  }
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {service.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={service.path}
                  className="group/btn w-full inline-flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Let's discuss how our services can accelerate your digital transformation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;