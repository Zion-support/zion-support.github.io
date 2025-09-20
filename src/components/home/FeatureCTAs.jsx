import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Briefcase, MessageCircle, Calendar, Phone, Mail } from 'lucide-react';

const FeatureCTAs = () => {
  const ctaOptions = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule a Demo",
      description: "See our AI solutions in action with a personalized demonstration",
      buttonText: "Book Demo",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      link: "/demo"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Get a Quote",
      description: "Receive custom pricing for your specific business needs",
      buttonText: "Get Quote",
      buttonColor: "bg-green-600 hover:bg-green-700",
      link: "/quote"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Contact Sales",
      description: "Speak directly with our AI experts about your requirements",
      buttonText: "Contact Us",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      link: "/contact"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose the best way to connect with our team and start your AI transformation journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaOptions.map((cta, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                {cta.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {cta.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {cta.description}
              </p>
              
              <button className={`w-full ${cta.buttonColor} text-white py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 group`}>
                {cta.buttonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prefer to Talk First?
            </h3>
            <p className="text-gray-600 mb-6">
              Our AI specialists are standing by to answer your questions and help you choose the right solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1-555-0123" 
                className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Phone className="w-5 h-5" />
                Call: (555) 123-4567
              </a>
              <a 
                href="mailto:sales@ziontechgroup.com" 
                className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Mail className="w-5 h-5" />
                sales@ziontechgroup.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCTAs;