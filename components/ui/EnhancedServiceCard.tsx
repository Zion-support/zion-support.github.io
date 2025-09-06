
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
;
const EnhancedServiceCard: React.FC < EnhancedServiceCardProps> = ({
  service,
}) => {
  const card_variants = {
    hidden: { opacity: 0, coordinate_y: 20, scale: 0.95 },
    visible: {      opacity: 1,    visible: {
      opacity: 1,
      coordinate_y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'ease_out' as const,
      },
    },    hover: {        ease: "ease_out" as const;
      }
    }
    
    return this.props.children;
  }
}
import React from 'react';

import { motion } from 'framer-motion';
import {
  Star
  ExternalLink
  ArrowRight
  TrendingUp
  Users
  Clock
  Shield
  Zap;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  Star,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
} from 'lucide-react';

interface EnhancedServiceCardProps {
  service: {

import {;
  Star,;
  ExternalLink,;
  ArrowRight,;
  TrendingUp,;
  Users,;
  Clock,;
  Shield,;
  Zap,;
} from 'lucide-react';
interface EnhancedServiceCardProps {;
  service: {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    id: string;
    name: string;
    tagline: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    icon: string;
    color: string;

    reviews: number;
  }
const EnhancedServiceCard: React.FC<EnhancedServiceCardProps> = ({
  service
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 }
    visible: {      opacity: 1,    visible: {
      opacity: 1
      y: 0
      scale: 1
      transition: {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    hidden: { rotate: -180, scale: 0 },
    visible: {      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,

      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,

      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6,

    >
      {/* Background Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        style={{
          background: `linear-gradient(135deg, ${service.color.replace('from-', '').replace('to-', '').split(' ').map(c => `var(--tw-${c.split('-')[0]}-${c.split('-')[1]})`).join(', ')})`
        }}
      />;
      {/* Popular Badge */}

      {service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <motion.div

            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >

            POPULAR
          </motion.div>
        </div>
      )}

      {/* Card Content */}
      <div className='relative p-6'>

      {/* Card Content */}
      <div className='relative p-6'>

        {/* Header */}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        <div className='flex items-start justify-between mb-4'>
          <motion.div
            className={`text-4xl ${service.textColor}`}
            variants={iconVariants}
            initial='hidden'
            animate='visible'
            whileHover='hover'
          >
            {service.icon}
          </motion.div>
          <div className='text-right'>
            <div className='text-2xl font-bold text-white'>{service.price}</div>
            <div className='text-sm text-gray-400'>{service.period}</div>          </div>
        </div>
        {/* Title & Tagline */}
        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>
          {service.name}
        </h3>
        <p className='text-gray-300 text-sm mb-4 leading-relaxed'>          {service.tagline}
        </p>
        {/* Description */}
        <p className='text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3'>          {service.description}
        </p>
            variants={iconVariants}
            initial='hidden'
            animate='visible'

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className={`text-4xl ${service.textColor}`}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            {service.icon}
          </motion.div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-white">{service.price}</div>
            <div className="text-sm text-gray-400">{service.period}</div>
          </div>

        </div>
        {/* Title & Tagline */}
        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>
          {service.name}
        </h3>
        <p className='text-gray-300 text-sm mb-4 leading-relaxed'>          {service.tagline}
        </p>
        {/* Description */}
        <p className='text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3'>          {service.description}
        </p>
        {/* Key Metrics */}
        {/* Key Metrics */}          

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          <div className="text-right">
            <div className="text-2xl font-bold text-white">{service.price}</div>
            <div className="text-sm text-gray-400">{service.period}</div>
          </div>
        </div>
        {/* Title & Tagline */}

          {service.name}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {service.tagline}

        </p>
        {/* Description */}

        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">

          {service.description}
        </p>
        {/* Key Metrics */}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          </div>
          <div className='text-center p-3 bg-white/5 rounded-lg border border-white/10'>
            <div className='text-purple-400 text-lg font-bold'>
              {service.rating}
            </div>
            <div className='text-xs text-gray-400'>Rating</div>          </div>
        </div>
        {/* Features Preview */}
        <div className='mb-6'>
          <h4 className='text-sm font-semibold text-white mb-3 flex items-center gap-2'>
            <Zap className='w-4 h-4 text-yellow-400' />        <div className="grid grid-cols-2 gap-4 mb-6">

          <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="text-cyan-400 text-lg font-bold">{service.customers}+</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="text-purple-400 text-lg font-bold">{service.rating}</div>
            <div className="text-xs text-gray-400">Rating</div>

          </div>

        </div>
            whileHover='hover'>;
            {service && service.icon}
          </motion && motion.div>;
          <div className='text-right'>;
            <div className='text-2xl font-bold text-white'>{service && service.price}</div>;
            <div className='text-sm text-gray-400'>{service && service.period}</div>          </div>;
        </div>;
        {/* Title & Tagline */}
        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>;
          {service && service.name}
        </h3>;
        <p className='text-gray-300 text-sm mb-4 leading-relaxed'>          {service && service.tagline}
        </p>;
        {/* Description */}
        <p className='text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3'>          {service && service.description}
        </p>;
        {/* Key Metrics */}          ;
          <div className="text-right">;
            <div className="text-2xl font-bold text-white">{service && service.price}</div>;
            <div className="text-sm text-gray-400">{service && service.period}</div>;
        </div>;
        {/* Title & Tagline */}
        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>;
          {service && service.name}
        </h3>;
        <p className='text-gray-300 text-sm mb-4 leading-relaxed'>        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">;
          {service && service.name}
        </h3>;
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">;
        </p>;
        {/* Description */}
        <p className='text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3'>        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">;
          {service && service.description}
        </p>;
        {/* Key Metrics */}
        <div className='grid grid-cols-2 gap-4 mb-6'>;
          <div className='text-center p-3 bg-white/5 rounded-lg border border-white/10'>;
            <div className='text-cyan-400 text-lg font-bold'>;
              {service && service.customers}+;
            </div>;
            <div className='text-xs text-gray-400'>Customers</div>;
          </div>;
          <div className='text-center p-3 bg-white/5 rounded-lg border border-white/10'>;
            <div className='text-purple-400 text-lg font-bold'>;
              {service && service.rating}
            </div>;
            <div className='text-xs text-gray-400'>Rating</div>          </div>;
        </div>;
        {/* Features Preview */}

                key={index}
                className="flex items-center gap-2 text-sm text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >

                {feature}
              </motion && motion.div>;
            ))}
            {service.features.length > 3 && (

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                {feature}
              </motion && motion.div>;
            ))}

                +{service.features.length - 3} more features
              </div>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            )}
        <div className="mb-6 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-lg border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white">Market Size</span>
            <span className="text-xs text-cyan-400">{service.marketSize}</span>
          </div>

        {/* Market Info */}
        <div className='mb-6 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-lg border border-white/10'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-xs font-semibold text-white'>
              Market Size
            </span>
            <span className='text-xs text-cyan-400'>{service.marketSize}</span>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        {/* Market Info */}
        <div className='mb-6 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-lg border border-white/10'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-xs font-semibold text-white'>
              Market Size
            </span>
            <span className='text-xs text-cyan-400'>{service.marketSize}</span>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          </div>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-xs font-semibold text-white'>
              Growth Rate
            </span>
            <span className='text-xs text-green-400'>{service.growthRate}</span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-semibold text-white'>ROI</span>
            <span className='text-xs text-yellow-400'>{service.roi}</span>          </div>
        </div>
        {/* Trial & Setup Info */}          </div>

          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white">Growth Rate</span>
            <span className="text-xs text-green-400">{service.growthRate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white">ROI</span>
            <span className="text-xs text-yellow-400">{service.roi}</span>
          </div>
        </div>
        {/* Trial & Setup Info */}

          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            {service.trialDays} day trial
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-4 h-4" />

=======
            {service.setupTime}

          </div>
        </div>
          </div>;
        </div>;
        {/* Market Info */}
        <div className='mb-6 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-lg border border-white/10'>;
          <div className='flex items-center justify-between mb-2'>;
            <span className='text-xs font-semibold text-white'>;
              Market Size;
            </span>;
            <span className='text-xs text-cyan-400'>{service && service.marketSize}</span>;
          </div>;
          <div className='flex items-center justify-between mb-2'>;
            <span className='text-xs font-semibold text-white'>;
              Growth Rate;
            </span>;
            <span className='text-xs text-green-400'>{service && service.growthRate}</span>;
          </div>;
          <div className='flex items-center justify-between'>;
            <span className='text-xs font-semibold text-white'>ROI</span>;
            <span className='text-xs text-yellow-400'>{service && service.roi}</span>          </div>;
        </div>;
        {/* Trial & Setup Info */}          </div>;
          <div className="flex items-center justify-between mb-2">;
            <span className="text-xs font-semibold text-white">Growth Rate</span>;
            <span className="text-xs text-green-400">{service && service.growthRate}</span>;
          </div>;
          <div className="flex items-center justify-between">;
            <span className="text-xs font-semibold text-white">ROI</span>;
            <span className="text-xs text-yellow-400">{service && service.roi}</span>;
          </div>;
        </div>;
        {/* Trial & Setup Info */}
        <div className='flex items-center justify-between mb-6 text-sm'>;
          <div className='flex items-center gap-2 text-gray-400'>;
            <Clock className='w-4 h-4' />;
            {service && service.trialDays} day trial;
          </div>;
          <div className='flex items-center gap-2 text-gray-400'>;
            <Shield className='w-4 h-4' />            {service && service.setupTime}        <div className="flex items-center justify-between mb-6 text-sm">;
          <div className="flex items-center gap-2 text-gray-400">;
            <Clock className="w-4 h-4" />;
            {service && service.trialDays} day trial;
          </div>;
          <div className="flex items-center gap-2 text-gray-400">;
            <Shield className="w-4 h-4" />;
          </div>;
        </div>;
        {/* Action Buttons */}

          <motion.a
            href={service.link}
            className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className='w-4 h-4' />
            Learn More
          </motion.a>
          <motion.a
            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          <motion.a
            href={service.link}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2'

            whileHover={{ scale: 1 && 1.05 }}
            whileTap={{ scale: 0 && 0.95 }}>;
            <ExternalLink className='w-4 h-4' />;
            Learn More;
          </motion && motion.a>;

          <motion&& motion.a
            href={`mailto:${service && service.contactInfo.email}?subject=Inquiry about ${service && service.name}`}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            className='bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center'
            whileHover={{ scale: 1 && 1.05 }}
            whileTap={{ scale: 0 && 0.95 }}>;
            <ArrowRight className='w-4 h-4' />          </motion && motion.a>;
        </div>;


        {/* Contact Info */}
        <div className='mt-4 pt-4 border-t border-white/10'>;
          <div className='text-xs text-gray-500 text-center'>            Contact: {service && service.contactInfo.email}          <motion&& motion.a
            href={service && service.link}
        <div className="flex gap-3">
          <motion.a
            href={service.link}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"

          <div className="text-xs text-gray-500 text-center">
            Contact: {service.contactInfo.email}

          </div>
        </div>
      </div>

export default EnhancedServiceCard;    </motion.div>
  )
}
export default EnhancedServiceCard;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          </div>
        </div>
      </div>
whileHover={{ scale: 1 && 1.05 }}
            whileTap={{ scale: 0 && 0.95 }}>;
            <ExternalLink className="w-4 h-4" />;
            Learn More;
          </motion && motion.a>;
          <motion&& motion.a
            href={`mailto:${service && service.contactInfo.email}?subject=Inquiry about ${service && service.name}`}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center"
            whileHover={{ scale: 1 && 1.05 }}
            whileTap={{ scale: 0 && 0.95 }}>;
            <ArrowRight className="w-4 h-4" />;
          </motion && motion.a>;
        </div>;
        {/* Contact Info */}
        <div className='mt-4 pt-4 border-t border-white/10'>;
          <div className='text-xs text-gray-500 text-center'>        <div className="mt-4 pt-4 border-t border-white/10">;
          <div className="text-xs text-gray-500 text-center">;
            Contact: {service && service.contactInfo.email}
          </div>;
        </div>;
      </div>;
      {/* Hover Effect Border */}

};
export default EnhancedServiceCard;    </motion && motion.div>;
  );
}
};

export default EnhancedServiceCard;    </motion.div>
  )
}
export default EnhancedServiceCard;

};
export default EnhancedServiceCard;
export default EnhancedServiceCard;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
