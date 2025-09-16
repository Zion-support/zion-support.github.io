import React from 'react';
<<<<<<< HEAD
=======

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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const ServiceCard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ServiceCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ServiceCard;