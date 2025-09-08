import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Clock, 
  CheckCircle,
  Star,
  Users,
  TrendingUp
} from 'lucide-react';

export function EnhancedContactCTA() {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (302) 464-0950',
      description: 'Available 24/7 for urgent support',
      color: 'text-zion-cyan',
      bgColor: 'bg-zion-cyan/20',
      link: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'kleber@ziontechgroup.com',
      description: 'Get a response within 2 hours',
      color: 'text-zion-purple',
      bgColor: 'bg-zion-purple/20',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Schedule an in-person meeting',
      color: 'text-zion-green',
      bgColor: 'bg-zion-green/20',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008,+Middletown+DE+19709'
    }
  ];

  const whyChooseUs = [
    'Expert AI & Technology Specialists',
    'Proven ROI & Performance Metrics',
    '24/7 Support & Maintenance',
    'Custom Solutions & Integration',
    'Enterprise-Grade Security',
    'Global Service Coverage'
  ];

  const stats = [
    { label: 'Response Time', value: '< 2 hours', icon: Clock, color: 'text-zion-cyan' },
    { label: 'Client Satisfaction', value: '99.8%', icon: Star, color: 'text-zion-purple' },
    { label: 'Expert Team', value: '50+', icon: Users, color: 'text-zion-green' },
    { label: 'Success Rate', value: '95%', icon: TrendingUp, color: 'text-zion-orange' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our innovative technology solutions can drive your success and competitive advantage. 
            Our team is ready to help you achieve your digital transformation goals.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={itemVariants}
            >
              <div className={`flex justify-center mb-4 ${stat.color}`}>
                <stat.icon className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-zion-slate-light text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.div 
              key={index}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link 
                to={method.link}
                className="block bg-white/5 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:border-zion-cyan/50 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                <div className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`h-8 w-8 ${method.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-lg text-zion-cyan mb-2 font-medium">
                  {method.value}
                </p>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {method.description}
                </p>
                <div className="flex items-center text-zion-cyan mt-4 group-hover:text-zion-cyan-light transition-colors duration-300">
                  <span className="font-medium">Contact Now</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h3>
            <div className="space-y-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-zion-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-zion-slate-light text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-white mb-6 text-center">
              Get Your Free Consultation
            </h4>
            <p className="text-zion-slate-light mb-6 text-center">
              Schedule a free 30-minute consultation to discuss your technology needs and discover how we can help.
            </p>
            <div className="space-y-4">
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white px-6 py-3 rounded-lg font-semibold text-center block transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                <MessageSquare className="inline-block mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Link>
              <Link
                to="/services"
                className="w-full border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-6 py-3 rounded-lg font-semibold text-center block transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm border border-zion-cyan/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Don't Wait to Transform Your Business
            </h3>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join hundreds of successful companies that have already transformed their operations with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="h-5 w-5" />
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 group"
              >
                <span className="text-lg">View Success Stories</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}