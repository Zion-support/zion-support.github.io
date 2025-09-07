import React from 'react';'
import { motion } from 'framer-motion';'
import Link from 'next/link';'
import { motion  } from 'framer-motion';'

interface ServiceCardProps {
  }
  "title": string;
  "description": string;
  icon?: string;
  features?: string[];
  pricing?: string;
  link?: string;
  className?: string;
}

const "ServiceCard": React.FC<ServiceCardProps> = ({
  }
  title,
  description,
  icon,
  features = [],
  pricing,
  link,
  className = '''
}) => {
  }
  const CardContent = () => (
    <motion.div,
className={`bg-white rounded-xl p-6 shadow-lg "hover":shadow-xl transition-all duration-300 "hover":scale-105 cursor-pointer ${className}`}`      whileHover={{ "y": -5 }}
      initial={{ "opacity": 0, "y": 20 }}
      animate={{ "opacity": 1, "y": 0 }}
      transition={{ "duration": 0.5 }}
    >
      {icon && (
        <div className="text-4xl mb-4 text-center">"

}

const "ServiceCard": React.FC<ServiceCardProps> = ({ title,description,icon,features = [],className = '';'
   }) => {


}


return (<motion.div;
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 "hover": bg-white/20 transition-all duration-300 "hover":scale-105 ${className}`}`
      whileHover={{ "y": -5 
}
      initial={{ "opacity": 0, "y": 20 
}
      animate={{ "opacity": 1, "y": 0 }}
      transition={{ "duration": 0.5 
}
    >;
      {icon && (<div className="text-4xl mb-4 text-center">;"
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">{title}</h3>"
      <p className="text-gray-600 mb-4 text-center">{description}</p>"
      {pricing && (
        <div className="text-center mb-4">"
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">"
            {pricing}
          </span>
        </div>
      )}
      {features.length > 0 && (
        <ul className="space-y-2">"
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">"
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>"
              {feature}
            </li>
          ))}
        </ul>
      )}
      {link && (
        <div className="mt-4 text-center">"
          <span className="text-blue-600 text-sm font-semibold "hover":text-blue-800">"
            }
            Learn More →
          </span>
        </div>
      )}
    </motion.div>
  );

  if (link) {
}
return (;
      <Link href={link}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};
    </motion.div>;
  )}

export default ServiceCard;
