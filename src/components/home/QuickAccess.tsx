import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface QuickAccessProps {
  className?: string;
}

export const QuickAccess: React.FC<QuickAccessProps> = ({ className = '' }) => {
  const quickLinks = [
    {
      title: 'AI Services',
      description: 'Explore our AI-powered solutions',
      href: '/ai-services',
      icon: '🤖'
    },
    {
      title: 'IT Services',
      description: 'Professional IT infrastructure solutions',
      href: '/it-services',
      icon: '💻'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team',
      href: '/contact',
      icon: '📞'
    },
    {
      title: 'About Us',
      description: 'Learn more about our company',
      href: '/about',
      icon: '🏢'
    }
  ];

  return (
    <div className={`bg-zion-slate-dark rounded-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold text-white mb-6">Quick Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quickLinks.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={link.href}
              className="block p-4 bg-zion-slate-light/10 rounded-lg hover:bg-zion-slate-light/20 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{link.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm">
                    {link.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};