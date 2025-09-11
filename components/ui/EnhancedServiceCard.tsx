
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


} from 'lucide-react';

interface EnhancedServiceCardProps {
  service: {
=======
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
    text_color: string;
    link: string;
    marketPosition: string;
    targetAudience: string;
    trialDays: number;
    setupTime: string;
    category: string;
    realService: boolean;
    technology: string[];
    integrations: string[];
    useCases: string[];
    roi: string;
    competitors: string[];
    marketSize: string;
    growthRate: string;
    variant: string;

    contact_info: {

      mobile: string;
      email: string;
      address: string;

      website: string;
    }

    realImplementation: boolean;
    implementationDetails: string;
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
  };

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
        duration: 0.6
        ease: 'easeOut' as const
      }
    },    hover: {        ease: "easeOut" as const
      }
    }
    hover: {
      y: -8
      scale: 1.02
      transition: {
        duration: 0.3
        ease: 'easeOut' as const
      }
    },  }
  const iconVariants = {
    hidden: { rotate: -180, scale: 0 }
    visible: {      rotate: 0
      scale: 1
      transition: {
        duration: 0.6
        ease: 'backOut' as const
      }
    },    hover: {        ease: "easeOut" as const
      }
    }
  }
  const iconVariants = {
    hidden: { rotate: -180, scale: 0 }
    visible: {    visible: {
      rotate: 0
      scale: 1
      transition: {
        duration: 0.6
        ease: 'backOut' as const
      }
    },        ease: "backOut" as const
      }
    }
    hover: {
      rotate: 360
      scale: 1.1
      transition: {
        duration: 0.6
        ease: 'easeInOut' as const
      }
    }
  }
        duration: 0.6,

        ease: 'ease_out' as const,
      },
    },    hover: {        ease: "ease_out" as const;

      }
    }
    hover: {

      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,

        ease: 'ease_out' as const,
      },
    },  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,

    hover: {

      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6,


    >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Background Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service && service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        style={{
          background: `linear-gradient(135deg, ${service && service.color
            .replace('from-', '')
            .replace('to-', '')
            .split(' ')

            .map(c => `var(--tw-${c && c.split('-')[0]}-${c && c.split('-')[1]})`);
            .join(', ')})`,;

=======
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
=======
        ease: 'easeInOut' as const,
      },
    },

  };

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

      )}




      {/* Card Content */}
      <div className='relative p-6'>

      {/* Card Content */}
      <div className='relative p-6'>

        {/* Header */}



        <div className='flex items-start justify-between mb-4'>
          <motion.div
            className={`text-4xl ${service.textColor}`}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


        {/* Key Metrics */}          


          <div className="text-right">
            <div className="text-2xl font-bold text-white">{service.price}</div>
            <div className="text-sm text-gray-400">{service.period}</div>
          </div>
        </div>
        {/* Title & Tagline */}
        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>
          {service.name}
        </h3>
        <p className='text-gray-300 text-sm mb-4 leading-relaxed'>        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
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
        <div className='grid grid-cols-2 gap-4 mb-6'>
          <div className='text-center p-3 bg-white/5 rounded-lg border border-white/10'>
            <div className='text-cyan-400 text-lg font-bold'>
              {service.customers}+
            </div>
            <div className='text-xs text-gray-400'>Customers</div>

          {service.tagline}
        </p>

        {/* Description */}

          {service.description}
        </p>

        {/* Key Metrics */}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            Key Features
          </h4>
          <div className="space-y-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.div

                key={index}
                className="flex items-center gap-2 text-sm text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full' />                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {feature}
              </motion && motion.div>;
            ))}

=======
            {service.features.length > 3 && (
              <div className="text-xs text-gray-500 mt-2">
                +{service.features.length - 3} more features
              </div>

            )}
          </div>
        </div>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Market Info */}
        <div className='mb-6 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-lg border border-white/10'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-xs font-semibold text-white'>
              Market Size
            </span>
            <span className='text-xs text-cyan-400'>{service.marketSize}</span>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
        <div className='flex items-center justify-between mb-6 text-sm'>
          <div className='flex items-center gap-2 text-gray-400'>
            <Clock className='w-4 h-4' />
            {service.trialDays} day trial
          </div>
          <div className='flex items-center gap-2 text-gray-400'>
            <Shield className='w-4 h-4' />            {service.setupTime}        <div className="flex items-center justify-between mb-6 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            {service.trialDays} day trial
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-4 h-4" />

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



            {service.setupTime}



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
          </div>
        </div>
        {/* Action Buttons */}
        <div className='flex gap-3'>



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

        <div className="mt-4 pt-4 border-t border-white/10">

          <div className="text-xs text-gray-500 text-center">
            Contact: {service.contactInfo.email}


            Contact: {service.contactInfo.email}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          </div>
        </div>
      </div>

};

export default EnhancedServiceCard;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
        ease: 'easeInOut' as const,
      },
    },
  }
;
    >;
      {/* Background Glow */}
      <div;
        className={`absolute inset - 0 bg - gradient - to - br ${service.color} opacity - 0 group - hover:opacity - 10 transition - opacity duration - 500`}
        style={{
          background: `linear - gradient (135deg, ${service.color;
            .replace ('from-', '');
            .replace ('to-', '');
            .split (' ');
            .map (c => `var (--tw-${c.split ('-')[0]}-${c.split ('-')[1]})`);
            .join (', ')})`,
        }}
      />;
      {/* Popular Badge */}
      {service.popular && (
        <div className='absolute top - 4 right - 4 z - 10'>;
          <motion.div;
            className='bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full flex items - center gap - 1'            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >;
            <Star className='w - 3 h - 3 fill - current' />            POPULAR            className="bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full flex items - center gap - 1";
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >;
            <Star className='w - 3 h - 3 fill - current' />            <Star className="w - 3 h - 3 fill - current" />;
            POPULAR;
          </motion.div>;
        </div>)}
      {/* Card Content */}
      <div className='relative p - 6'>;
        <div className='flex items - start justify - between mb - 4'>;
          <motion.div;
            className={`text - 4xl ${service.text_color}`}
            variants={icon_variants}
            initial='hidden';
            animate='visible';
            while_hover='hover';
          >;
            {service.icon}
          </motion.div>;
          <div className='text - right'>;
            <div className='text - 2xl font - bold text - white'>{service.price}</div>;
            <div className='text - sm text - gray - 400'>{service.period}</div>          </div>;
        </div>;
        {/* Title & Tagline */}
        <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300'>;
          {service.name}
        </h3>;
        <p className='text - gray - 300 text - sm mb - 4 leading - relaxed'>          {service.tagline}
        </p>;
        {/* Description */}
        <p className='text - gray - 400 text - sm mb - 6 leading - relaxed line - clamp - 3'>          {service.description}
        </p>;
        {/* Key Metrics */}
          <div className="text - right">;
            <div className="text - 2xl font - bold text - white">{service.price}</div>;
            <div className="text - sm text - gray - 400">{service.period}</div>;
        </div>;
        {/* Title & Tagline */}
        <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300'>;
          {service.name}
        </h3>;
        <p className='text - gray - 300 text - sm mb - 4 leading - relaxed'>        <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300">;
          {service.name}
        </h3>;
        <p className="text - gray - 300 text - sm mb - 4 leading - relaxed">;
        </p>;
        {/* Description */}
        <p className='text - gray - 400 text - sm mb - 6 leading - relaxed line - clamp - 3'>        <p className="text - gray - 400 text - sm mb - 6 leading - relaxed line - clamp - 3">;
          {service.description}
        </p>;
        {/* Key Metrics */}
        <div className='grid grid - cols - 2 gap - 4 mb - 6'>;
          <div className='text - center p - 3 bg - white / 5 rounded - lg border border - white / 10'>;
            <div className='text - cyan - 400 text - lg font - bold'>;
              {service.customers}+;
            </div>;
            <div className='text - xs text - gray - 400'>Customers</div>;
          </div>;
          <div className='text - center p - 3 bg - white / 5 rounded - lg border border - white / 10'>;
            <div className='text - purple - 400 text - lg font - bold'>;
              {service.rating}
            </div>;
            <div className='text - xs text - gray - 400'>Rating</div>          </div>;
        </div>;
        {/* Features Preview */}
        <div className='mb - 6'>;
          <h4 className='text - sm font - semibold text - white mb - 3 flex items - center gap - 2'>;
            <Zap className='w - 4 h - 4 text - yellow - 400' />        <div className="grid grid - cols - 2 gap - 4 mb - 6">;
          <div className="text - center p - 3 bg - white / 5 rounded - lg border border - white / 10">;
            <div className="text - cyan - 400 text - lg font - bold">{service.customers}+</div>;
            <div className="text - xs text - gray - 400">Customers</div>;
          </div>;
          <div className="text - center p - 3 bg - white / 5 rounded - lg border border - white / 10">;
            <div className="text - purple - 400 text - lg font - bold">{service.rating}</div>;
            <div className="text - xs text - gray - 400">Rating</div>;
        </div>;
        {/* Features Preview */}
        <div className='mb - 6'>;
          <h4 className='text - sm font - semibold text - white mb - 3 flex items - center gap - 2'>;
            <Zap className='w - 4 h - 4 text - yellow - 400' />;
            Key Features;
          </h4>;
          <div className='space - y-2'>;
            {service.features.slice (0, 3).map ((feature, index) => (
              <motion.div;
                key={index}
                className='flex items - center gap - 2 text - sm text - gray - 300'                initial={{ opacity: 0, coordinate_x: -20 }}
                animate={{ opacity: 1, coordinate_x: 0 }}
                transition={{ delay: 0.1 * index }}
              >;
                <div className='w - 1.5 h - 1.5 bg - cyan - 400 rounded - full' />                {feature}
              </motion.div>))}
            {service.features.length > 3 && (
              <div className='text - xs text - gray - 500 mt - 2'>                +{service.features.length - 3} more features            Key Features;
          </h4>;
          <div className="space - y-2">;
            {service.features.slice (0, 3).map ((feature, index) => (
              <motion.div;
                key={index}
                className="flex items - center gap - 2 text - sm text - gray - 300";
                initial={{ opacity: 0, coordinate_x: -20 }}
                animate={{ opacity: 1, coordinate_x: 0 }}
                transition={{ delay: 0.1 * index }}
              >;
                <div className='w - 1.5 h - 1.5 bg - cyan - 400 rounded - full' />                <div className="w - 1.5 h - 1.5 bg - cyan - 400 rounded - full" />;
                {feature}
              </motion.div>))}
            {service.features.length > 3 && (
              <div className='text - xs text - gray - 500 mt - 2'>              <div className="text - xs text - gray - 500 mt - 2">;
                +{service.features.length - 3} more features;
              </div>)}
          </div>;
        </div>;
        {/* Market Info */}
        <div className='mb - 6 p - 4 bg - gradient - to - r from - white / 5 to - white / 10 rounded - lg border border - white / 10'>;
          <div className='flex items - center justify - between mb - 2'>;
            <span className='text - xs font - semibold text - white'>;
              Market Size;
            </span>;
            <span className='text - xs text - cyan - 400'>{service.market_size}</span>;
          </div>;
          <div className='flex items - center justify - between mb - 2'>;
            <span className='text - xs font - semibold text - white'>;
              Growth Rate;
            </span>;
            <span className='text - xs text - green - 400'>{service.growth_rate}</span>;
          </div>;
          <div className='flex items - center justify - between'>;
            <span className='text - xs font - semibold text - white'>ROI</span>;
            <span className='text - xs text - yellow - 400'>{service.roi}</span>          </div>;
        </div>;
        {/* Trial & Setup Info */}          </div>;
          <div className="flex items - center justify - between mb - 2">;
            <span className="text - xs font - semibold text - white">Growth Rate</span>;
            <span className="text - xs text - green - 400">{service.growth_rate}</span>;
          </div>;
          <div className="flex items - center justify - between">;
            <span className="text - xs font - semibold text - white">ROI</span>;
            <span className="text - xs text - yellow - 400">{service.roi}</span>;
          </div>;
        </div>;
        {/* Trial & Setup Info */}
        <div className='flex items - center justify - between mb - 6 text - sm'>;
          <div className='flex items - center gap - 2 text - gray - 400'>;
            <Clock className='w - 4 h - 4' />;
            {service.trial_days} day trial;
          </div>;
          <div className='flex items - center gap - 2 text - gray - 400'>;
            <Shield className='w - 4 h - 4' />            {service.setup_time}        <div className="flex items - center justify - between mb - 6 text - sm">;
          <div className="flex items - center gap - 2 text - gray - 400">;
            <Clock className="w - 4 h - 4" />;
            {service.trial_days} day trial;
          </div>;
          <div className="flex items - center gap - 2 text - gray - 400">;
            <Shield className="w - 4 h - 4" />;
          </div>;
        </div>;
        {/* Action Buttons */}
        <div className='flex gap - 3'>;
          <motion.a;
            href={service.link}
            className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - lg text - center transition - all duration - 300 transform hover:scale - 105 flex items - center justify - center gap - 2';
            while_hover={{ scale: 1.05 }}
            while_tap={{ scale: 0.95 }}
          >;
            <ExternalLink className='w - 4 h - 4' />;
            Learn More;
          </motion.a>;
          <motion.a;
            href={`mailto:${service.contact_info.email}?subject = Inquiry about ${service.name}`}
            className='bg - white / 10 hover:bg - white / 20 text - white font - semibold py - 3 px - 4 rounded - lg transition - all duration - 300 border border - white / 20 hover:border - white / 40 flex items - center justify - center';
            while_hover={{ scale: 1.05 }}
            while_tap={{ scale: 0.95 }}
          >;
            <ArrowRight className='w - 4 h - 4' />          </motion.a>;
        </div>;
        {/* Contact Info */}
        <div className='mt - 4 pt - 4 border - t border - white / 10'>;
          <div className='text - xs text - gray - 500 text - center'>            Contact: {service.contact_info.email}          <motion.a;
            href={service.link}
            className="flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - lg text - center transition - all duration - 300 transform hover:scale - 105 flex items - center justify - center gap - 2";
            while_hover={{ scale: 1.05 }}
            while_tap={{ scale: 0.95 }}
          >;
            <ExternalLink className="w - 4 h - 4" />;
            Learn More;
          </motion.a>;
          <motion.a;
            href={`mailto:${service.contact_info.email}?subject = Inquiry about ${service.name}`}
            className="bg - white / 10 hover:bg - white / 20 text - white font - semibold py - 3 px - 4 rounded - lg transition - all duration - 300 border border - white / 20 hover:border - white / 40 flex items - center justify - center";
            while_hover={{ scale: 1.05 }}
            while_tap={{ scale: 0.95 }}
          >;
            <ArrowRight className="w - 4 h - 4" />;
          </motion.a>;
        </div>;
        {/* Contact Info */}
        <div className='mt - 4 pt - 4 border - t border - white / 10'>;
          <div className='text - xs text - gray - 500 text - center'>        <div className="mt - 4 pt - 4 border - t border - white / 10">;
          <div className="text - xs text - gray - 500 text - center">;
            Contact: {service.contact_info.email}
          </div>;
        </div>;
      </div>;
      {/* Hover Effect Border */}
      <div className='absolute inset - 0 rounded - 2xl border - 2 border - transparent bg - gradient - to - r from - cyan - 500 / 20 via - purple - 500 / 20 to - pink - 500 / 20 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500' />;
    </motion.div>);
}
;
export default EnhancedServiceCard;    </motion.div>);
}
;
export default EnhancedServiceCard;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

};


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
