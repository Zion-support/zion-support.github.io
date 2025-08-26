import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Star, 
  CheckCircle,
  ArrowRight,
  Globe,
  Cpu,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Users,
  Target,
  Truck,
  Building2,
  GraduationCap,
  Home,
  Factory,
  Phone
} from 'lucide-react';
import { revolutionary2030AIAutonomousServices } from '../../data/revolutionary-2030-ai-autonomous-services';
import { revolutionary2030ITCloudServices } from '../../data/revolutionary-2030-it-cloud-services';
import { revolutionary2030BusinessIndustryServices } from '../../data/revolutionary-2030-business-industry-services';

const Revolutionary2030ServicesShowcase: React.FC = () => {
  const allServices = [
    ...revolutionary2030AIAutonomousServices,
    ...revolutionary2030ITCloudServices,
    ...revolutionary2030BusinessIndustryServices
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
        duration: 0.5
      }
    }
  };

  const getIconComponent = (icon: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      '🤖': Brain,
      '🔒': Shield,
      '🔬': Zap,
      '📈': TrendingUp,
      '🏥': Building2,
      '🚚': Truck,
      '✍️': Target,
      '💬': Users,
      '⚖️': Lock,
      '🎓': GraduationCap,
      '🏢': Home,
      '🏭': Factory,
      '⚛️': Cpu,
      '🚀': Zap,
      '🌐': Globe,
      '🔌': Database,
      '🔗': BarChart3,
      '🗄️': Cloud,
      '🛡️': Shield,
      '⛓️': Lock,
      '💻': Cpu,
      '📊': BarChart3,
      '💰': TrendingUp,
      '👥': Users,
      '🎯': Target
    };
    return iconMap[icon] || Star;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Automation': 'from-purple-600 to-indigo-700',
      'Cybersecurity & AI': 'from-red-600 to-pink-700',
      'AI & Research': 'from-blue-600 to-cyan-700',
      'AI & Finance': 'from-green-600 to-emerald-700',
      'AI & Healthcare': 'from-teal-600 to-blue-700',
      'AI & Supply Chain': 'from-orange-600 to-red-700',
      'AI & Marketing': 'from-pink-600 to-purple-700',
      'AI & Customer Service': 'from-indigo-600 to-blue-700',
      'AI & Legal': 'from-amber-600 to-yellow-700',
      'AI & Education': 'from-emerald-600 to-green-700',
      'Cloud & Infrastructure': 'from-violet-600 to-purple-700',
      'DevOps & Development': 'from-blue-600 to-cyan-700',
      'Network & Security': 'from-cyan-600 to-blue-700',
      'Infrastructure & Management': 'from-gray-600 to-slate-700',
      'Edge Computing & IoT': 'from-orange-600 to-red-700',
      'API & Integration': 'from-indigo-600 to-purple-700',
      'Database & Analytics': 'from-emerald-600 to-green-700',
      'Blockchain & DeFi': 'from-yellow-600 to-orange-700',
      'IT Management': 'from-slate-600 to-gray-700',
      'Business Intelligence': 'from-blue-600 to-indigo-700',
      'Financial Management': 'from-green-600 to-emerald-700',
      'Human Resources': 'from-purple-600 to-pink-700',
      'Marketing & Sales': 'from-pink-600 to-rose-700',
      'Supply Chain & Logistics': 'from-orange-600 to-red-700',
      'Healthcare Management': 'from-teal-600 to-blue-700',
      'Legal & Compliance': 'from-amber-600 to-yellow-700',
      'Education & Training': 'from-emerald-600 to-green-700',
      'Real Estate & Property': 'from-slate-600 to-gray-700',
      'Manufacturing & Industry 4.0': 'from-indigo-600 to-purple-700'
    };
    return colorMap[category] || 'from-blue-600 to-indigo-700';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary 2030
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Autonomous Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the future of business with our cutting-edge AI autonomous services that operate with superhuman precision and zero human intervention.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allServices.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105">
                  {/* Service Header */}
                  <div className={`p-6 bg-gradient-to-r ${categoryColor} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{service.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                          <p className="text-sm text-white/80">{service.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-white/80">{service.period}</div>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 5).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-400">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="space-y-3 mb-6 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-cyan-400 font-medium">{service.marketSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Growth Rate:</span>
                        <span className="text-green-400 font-medium">{service.growthRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-yellow-400 font-medium">{service.roi.split(' ')[0]} {service.roi.split(' ')[1]}</span>
                      </div>
                    </div>

                    {/* Contact & Trial */}
                    <div className="space-y-3 mb-6 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Trial:</span>
                        <span className="text-purple-400 font-medium">{service.trialDays} days free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Setup:</span>
                        <span className="text-blue-400 font-medium">{service.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Rating:</span>
                        <div className="flex items-center">
                          <span className="text-yellow-400 font-medium">{service.rating}</span>
                          <Star className="w-3 h-3 text-yellow-400 ml-1 fill-current" />
                          <span className="text-gray-400 ml-1">({service.reviews})</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex space-x-3">
                      <a
                        href={service.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                        className="bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                      >
                        Contact
                      </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-slate-700/50 text-xs text-gray-400">
                      <div className="flex items-center justify-between">
                        <span>{service.contactInfo.mobile}</span>
                        <span>{service.contactInfo.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already leveraging our revolutionary AI autonomous services to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Inquiry about Revolutionary 2030 AI Services"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Revolutionary2030ServicesShowcase;