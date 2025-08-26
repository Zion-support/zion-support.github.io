import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';

export const ITServiceRequestHero = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "+1 (302) 464-0950",
      action: "Call Now",
      link: "tel:+13024640950",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "kleber@ziontechgroup.com",
      action: "Send Email",
      link: "mailto:kleber@ziontechgroup.com",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant support",
      action: "Start Chat",
      link: "/contact",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need IT Services?
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Get Started Today
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to transform your business with cutting-edge technology? 
              Our expert team is here to help you achieve your goals with 
              innovative AI, cloud, and cybersecurity solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Request Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Expert Team</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -3 }}
                className="group"
              >
                <Link to={method.link}>
                  <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-6 border border-slate-500 hover:border-cyan-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                    <div className="flex items-center gap-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {method.title}
                        </h3>
                        <p className="text-gray-300 mb-3">
                          {method.description}
                        </p>
                        <div className="inline-flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 font-medium">
                          {method.action}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};