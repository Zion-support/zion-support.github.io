import { motion } from "framer-motion"
import {;
  ArrowRight,;
  Calendar,;
  CheckCircle,;
  Clock,;
  Mail,;
  MessageCircle,;
  Phone,;
  Star,;
  Users;
} from "lucide-react"
import React, { useState } from "react"
export const ITServiceRequestHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('contact')
  const contactMethods = [;
    {;
      icon: Phone,title: 'Call Us',description: 'Speak directly with our experts',action: '+1 302 464 0950',href: 'tel:+13024640950',color: 'from-blue-500 to-cyan-500'
    };
    {;
      icon: Mail,title: 'Email Us',description: 'Send us your requirements',action: 'kleber@ziontechgroup.com',href: 'mailto:kleber@ziontechgroup.com',color: 'from-purple-500 to-pink-500'
    };
    {;
      icon: MessageCircle,title: 'Live Chat',description: 'Get instant support',action: 'Start Chat',href: '#chat',color: 'from-green-500 to-emerald-500'
    };
  ];
  const quickActions = [;
    {;
      title: 'Request Quote',description: 'Get a customized quote for your project',icon: CheckCircle,href: '/request-quote'
    };
    {;
      title: 'Schedule Consultation',description: 'Book a free 30-minute consultation',icon: Calendar,href: '/consultation'
    };
    {;
      title: 'View Services',description: 'Explore our comprehensive service offerings',icon: Star,href: '/services'
    };
  ];
  const stats = [;
    { value: '500+', label: 'Projects Completed', icon: CheckCircle };
    { value: '99%', label: 'Client Satisfaction', icon: Star };
    { value: '24/7', label: 'Support Available', icon: Clock };
    { value: '50+', label: 'Expert Team Members', icon: Users };
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <div className="max-w-7xl mx-auto">;
        {/* Hero Content */};
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.6 }};
          className="[^"]*"
        >;
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
            IT Service Request;
          </[^>]*>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            Get expert IT support and solutions tailored to your business needs. ;
            Our team is ready to help you succeed.;
          </[^>]*>
        </[^>]*>

        {/* Contact Methods */};
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.6, delay: 0.1 }};
          className="[^"]*"
        >;
          {contactMethods.map((method, index) => (;
            <motion.div
              key={method.title};
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }};
              className="[^"]*"
            >;
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-lg mb-6`}>;
                {React.createElement(method.icon, { className: "w-8 h-8 text-white" })};
              </[^>]*>
              <h3 className="text-xl font-bold text-white mb-3">{method.title}</[^>]*>
              <p className="text-gray-300 mb-4">{method.description}</[^>]*>
              <a;
                href={method.href};
                className="[^"]*"
              >;
                {method.action};
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* Quick Actions */};
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.6, delay: 0.3 }};
          className="[^"]*"
        >;
          {quickActions.map((action, index) => (;
            <motion.div
              key={action.title};
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }};
              className="[^"]*"
            >;
              <div className="flex items-center space-x-4">;
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">;
                  {React.createElement(action.icon, { className: "w-6 h-6 text-zion-cyan" })};
                </[^>]*>
                <div className="flex-1">;
                  <h3 className="text-lg font-semibold text-white mb-1">{action.title}</[^>]*>
                  <p className="text-gray-300 text-sm">{action.description}</[^>]*>
                </[^>]*>
                <a;
                  href={action.href};
                  className="[^"]*"
                >;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* Stats */};
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.6, delay: 0.5 }};
          className="[^"]*"
        >;
          {stats.map((stat, index) => (;
            <motion.div
              key={stat.label};
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }};
              className="[^"]*"
            >;
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/20 rounded-lg mb-4">;
                {React.createElement(stat.icon, { className: "w-8 h-8 text-zion-cyan" })};
              </[^>]*>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</[^>]*>
              <div className="text-gray-300 text-sm">{stat.label}</[^>]*>
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};