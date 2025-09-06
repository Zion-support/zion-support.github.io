import React from 'react';
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

interface ServiceCardProps {
  title: string,
  description: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  icon: string;
  features: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  features, 
  className = '' 
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${className}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-400 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
=======
  icon?: string;
  features?: string[];
=======
  icon: string;
  features: string[];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  features,
  className = ''
}) => {
  return (
<<<<<<< HEAD
    <motion.div 
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${className}`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon && (
        <div className="text-4xl mb-4 text-center">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3 text-white text-center">{title}</h3>
      <p className="text-gray-300 mb-4 text-center">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-2">
=======
    <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${className}`}>
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">{icon}</span>        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>        <ul className="space-y-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

        </div>

        <ul className="space-y-2">
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-300">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
<<<<<<< HEAD
<<<<<<< HEAD
      )}
    </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
  );
=======
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
};

export default ServiceCard;