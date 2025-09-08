import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const ServiceCard = ({ title, description, icon, price, category, features, isPopular = false, isNew = false, href = '/services' }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -12,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };
    const iconVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.2,
            rotate: [0, -10, 10, 0],
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };
    const featureVariants = {
        hover: {
            x: 5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };
    const badgeVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "backOut"
            }
        }
    };
    return (<motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true }} className="group relative h-full">
      {/* Enhanced Popular Badge */}
      {isPopular && (<motion.div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 300 }}>
          <div className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
            ⭐ Most Popular
          </div>
        </motion.div>)}

interface ServiceCardProps {
  title: string,
  description: string;
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
    <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${className}`}>
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">{icon}</span>        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-300">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>  )
};
export default ServiceCard;
