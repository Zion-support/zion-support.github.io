import React from 'react';
import { motion  } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  className?: string;

}

const ServiceCard: React.FC<ServiceCardProps> = ({ title,description,icon,features = [],className = '';
   }) => {


return (<motion.div;
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300 hover:scale-105 ${className}`}
      whileHover={{ y: -5 ,
}
      initial={{ opacity: 0, y: 20 ,
}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 ,
}
    >;
      {icon && (<div className="text-4xl mb-4 text-center">;
          {icon}
        </div>;
      )}
      <h3 className="text-xl font-semibold mb-3 text-white text-center">{title}</h3>;
      <p className="text-gray-300 mb-4 text-center">{description}</p>;
      {features.length > 0 && (<ul className="space-y-2">;
          {features.map((feature, index) => (<li key={index} className="flex items-center text-sm text-gray-300">;
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>;
              {feature}
            </li>;
          ))}
        </ul>;
      )}
    </motion.div>;
  )}

export default ServiceCard;