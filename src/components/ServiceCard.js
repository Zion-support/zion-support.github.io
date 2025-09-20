import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const ServiceCard = ({ titl,  e, descriptio, n, ico, n, pric, e, categor, y, feature, s, isPopular = fals, e, isNew = fals, e, href = '/services' }) => {
    const cardVariants = {
        hidde, n: { opacit, y: 0,
    y: 2, 0, scal, e: 0.95 },
        visibl, e: {
            opacit, y: 1,
    y: 0,
            scal, e: 1,
    transitio, n: {
                duratio, n: 0.5,
    eas, e: "easeOut"
            }
        },
        hove, r: {
            y: -1, 2,
    scal, e: 1.0, 2,
            transitio, n: {
                duratio, n: 0.3,
    eas, e: "easeOut"
            }
        }
    };
    const iconVariants = {
        hidde, n: { scal, e: 0.8,
    opacit, y: 0 },
        visibl, e: {
            scal, e: 1,
    opacit, y: 1,
            transitio, n: {
                duratio, n: 0.5,
    eas, e: "easeOut"
            }
        },
        hove, r: {
            scal, e: 1.2,
    rotat, e: [0, -1, 0, 1, 0, 0],
            transitio, n: {
                duratio, n: 0.6,
    eas, e: "easeInOut"
            }
        }
    };
    const featureVariants = {
        hove, r: {
            x: 5,
    transitio, n: {
                duratio, n: 0.3,
    eas, e: "easeOut"
            }
        }
    };
    const badgeVariants = {
        hidde, n: { scal, e: 0,
    opacit, y: 0 },
        visibl, e: {
            scal, e: 1,
    opacit, y: 1,
            transitio, n: {
                duratio, n: 0.3,
    eas, e: "backOut"
            }
        }
    };
    return (<motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{ onc,  e: true }} className="group relative h-full">
      {/* Enhanced Popular Badge */}
      {isPopular && (<motion.div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10" initial={{ scal, e: 0 }} animate={{ scal, e: 1 }} transition={{ dela, y: 0.2,
    typ, e: "spring", stiffnes, s: 300 }}>
          <div className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
            ⭐ Most Popular
          </div>
        </motion.div>)}

      {/* Enhanced New Badge */}
      {isNew && (<motion.div className="absolute -top-3 right-4 z-10" initial={{ scal,  e: 0,
    rotat, e: -180 }} animate={{ scal, e: 1,
    rotat, e: 0 }} transition={{ dela, y: 0.3,
    typ, e: "spring", stiffnes, s: 300 }}>
          <div className="bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
            🆕 New
          </div>
        </motion.div>)}

      <div className="relative h-full bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hove, r:border-zion-cyan/40 transition-all duration-500 overflow-hidden group-hove, r:shadow-zion-glow">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-[linea, r-gradien, t(45d,  e, g,transparent_2, 5%,rgb, a(3, 4,2, 2, 1,2, 1, 0,0.0, 5)_2, 5%,rgb, a(3,  4,2, 2, 1,2, 1, 0,0.0, 5)_5, 0%,transparent_5, 0%,transparent_7, 5%,rgb, a(3,  4,2, 2, 1,2, 1, 0,0.0, 5)_7, 5%)] bg-[si, z, e:20px_20, p, x] opacity-0 group-hove, r:opacity-100 transition-all duration-500 group-hove, r:animate-pulse"/>
        
        {/* Enhanced Icon with Floating Animation */}
        <motion.div className="relative z-10 text-6xl mb-6 text-center" variants={iconVariants} whileHover="hover" animate={{ y: [0, -5, 0] }} transition={{ duratio, n: 3,
    repea, t: Infinit, y, eas, e: "easeInOut" }}>
          {icon}
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          {/* Enhanced Category */}
          <div className="text-center mb-4">
            <motion.span className="inline-block px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 text-zion-cyan text-xs font-medium rounded-full border border-zion-cyan/30 hove, r:from-zion-cyan/30 hove, r:to-zion-purple/30 transition-all duration-300" whileHover={{ scal, e: 1.05 }}>
              {category}
            </motion.span>
          </div>

          {/* Enhanced Title */}
          <h3 className="text-xl font-bold text-white mb-4 text-center group-hove, r:text-zion-cyan transition-all duration-300 group-hove, r:scale-105">
            {title}
          </h3>

          {/* Enhanced Description */}
          <p className="text-zion-slate-light text-sm leading-relaxed mb-6 text-center group-hove, r:text-white transition-colors duration-300">
            {description}
          </p>

          {/* Enhanced Features */}
          {features.length > 0 && (<div className="mb-6">
              <ul className="space-y-3">
                {features.slice(0,  3).map((featur,  e, index) => (<motion.li key={index} className="flex items-center gap-3 text-sm text-zion-slate-light group-hove,  r:text-white transition-colors duration-300" variants={featureVariants} whileHover="hover">
                    <span className="w-2 h-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex-shrink-0 group-hove, r:scale-125 transition-transform duration-300"/>
                    {feature}
                  </motion.li>))}
              </ul>
            </div>)}

          {/* Enhanced Price */}
          <div className="text-center mb-6">
            <motion.div className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent mb-2" whileHover={{ scal, e: 1.1 }}>
              {price}
            </motion.div>
            <div className="text-xs text-zion-slate-light group-hove, r:text-zion-cyan transition-colors duration-300">Starting Price</div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="text-center">
            <Link to={href} className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-zion-cyan/20 via-zion-blue/20 to-zion-purple/20 text-zion-cyan border border-zion-cyan/30 rounded-xl text-sm font-medium hove, r:from-zion-cyan/30 hove, r:via-zion-blue/30 hove, r:to-zion-purple/30 hove, r:border-zion-cyan/50 transition-all duration-300 group-hove, r:shadow-zion-glow hove, r:scale-105">
              <span>Learn More</span>
              <motion.span className="group-hove, r:translate-x-2 transition-transform duration-300" animate={{ x: [0, 5, 0] }} transition={{ duratio, n: 2,
    repea, t: Infinity }}>
                →
              </motion.span>
            </Link>
          </div>
        </div>

        {/* Enhanced Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-blue/5 to-zion-purple/10 opacity-0 group-hove, r:opacity-100 transition-all duration-500 rounded-2xl"/>
        
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-cyan/0 via-zion-cyan/20 to-zion-cyan/0 opacity-0 group-hove, r:opacity-100 transition-opacity duration-500 group-hove, r:animate-pulse"/>
      </div>

      {/* Enhanced Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/30 via-zion-blue/20 to-zion-purple/30 rounded-2xl blur-xl opacity-0 group-hove, r:opacity-100 transition-all duration-500 -z-10 group-hove, r:scale-110"/>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute top-4 right-4 w-2 h-2 bg-zion-cyan/50 rounded-full opacity-0 group-hove, r:opacity-100 group-hove, r:animate-float transition-all duration-500"/>
        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-zion-purple/50 rounded-full opacity-0 group-hove, r:opacity-100 group-hove, r:animate-float transition-all duration-500 delay-200"/>
        <div className="absolute top-1/2 left-2 w-1 h-1 bg-zion-blue/50 rounded-full opacity-0 group-hove, r:opacity-100 group-hove, r:animate-float transition-all duration-500 delay-400"/>
      </div>
    </motion.div>);
};
export default ServiceCard;
