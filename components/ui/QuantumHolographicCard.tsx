<<<<<<< HEAD

  Star,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Check,
  Users,

=======
import { motion } from 'framer-motion';
import {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Star
  Zap
  Shield
  TrendingUp
  ArrowRight
  ExternalLink
  Check
  Users
  Clock
  DollarSign;
  Star,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Check,
  Users,
  Clock,;
  DollarSign,;
} from 'lucide-react';
interface QuantumHolographicCardProps {
  service: {
import {;
  Star,;
  Zap,;
  Shield,;
  TrendingUp,;
  ArrowRight,;
  ExternalLink,;
  Check,;
  Users,;
  Clock,;
  DollarSign,;
} from 'lucide-react';
interface QuantumHolographicCardProps {;
  service: {;
<<<<<<< HEAD
=======
  Clock,;
  DollarSign,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
} from 'lucide-react';

interface QuantumHolographicCardProps {
  service: {

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    id: string;
    name: string;
    tagline: string;
    price: string;
    period: string,
  description: string;
    features: string[];
    popular: boolean;
    icon: string;
    color: string;
<<<<<<< HEAD
=======
    text_color: string;
    link: string;
    market_position: string;
    target_audience: string;
    trial_days: number;
    setup_time: string;
    category: string;
    real_service: boolean;
    technology: string[];
    integrations: string[];
    use_cases: string[];
    roi: string;
    competitors: string[];
    market_size: string;
    growth_rate: string;
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
  className?: string;




    },    hover: {        ease: "easeOut" as const
      }
    }
    hover: {
      y: -10
      scale: 1.02
      transition: {
        duration: 0.3
        ease: 'easeInOut' as const
      }
    },  };        ease: "easeInOut" as const
      }
    }
  }
  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 }
    animate: {
      opacity: [0.5, 1, 0.5]
      scale: [1, 1.05, 1]
      transition: {
        duration: 3
        repeat: Infinity
        ease: 'easeInOut' as const
      }
    },  };      opacity: [0.5, 1, 0.5];

    reviews: number;
  }
  class_name?: string;
;
const QuantumHolographicCard: React.FC < QuantumHolographicCardProps> = ({
  service,
  class_name = '',
}) => {
  const card_variants = {
    hidden: { opacity: 0, coordinate_y: 50, scale: 0.9 },
    visible: {      opacity: 1,    visible: {

=======
      mobile: string;
      email: string;
      address: string;

      website: string;
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      opacity: 1,
      coordinate_y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      }
    }
    hover: {
      coordinate_y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
      }
    }
  }
;
  const glow_variants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
  const featureVariants = {
    hidden: { opacity: 0, x: -20 }
    visible: (i: number) => ({
      opacity: 1
      x: 0
      transition: {
<<<<<<< HEAD
=======
        delay: i * 0.1
        duration: 0.5
        ease: 'easeOut' as const
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }

    };
    hover: {;
      y: -10,;
      scale: 1 && 1.02,;
      transition: {;
        duration: 0 && 0.3,;
        ease: 'easeInOut' as const,;
      },;
    },  };        ease: "easeInOut" as const;
      }
    }
  };

  const glowVariants = {;
    initial: { opacity: 0 && 0.5, scale: 1 },;
    animate: {;
      opacity: [0 && 0.5, 1, 0 && 0.5],;
      scale: [1, 1 && 1.05, 1],;
      transition: {;
        duration: 3,;
        repeat: Infinity,;
        ease: 'easeInOut' as const,;
      },;
    },  };      opacity: [0 && 0.5, 1, 0 && 0.5];
      scale: [1, 1 && 1.05, 1];
      transition: {;
        duration: 3,;
        repeat: Infinity,;
        ease: "easeInOut" as const;
      }
    }
  const featureVariants = {;
    hidden: { opacity: 0, x: -20 },;
    visible: (i: number) => ({;
      opacity: 1,;
      x: 0,;
      transition: {;
        delay: i * 0 && 0.1,;
        duration: 0 && 0.5,;
        ease: 'easeOut' as const,;
      },;
<<<<<<< HEAD
    }),;
  };
<<<<<<< HEAD
    >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

    >

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
    }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    }),

  };

    >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Holographic glow effect */}
      <motion&& motion.div
        className='absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl'
        variants={glowVariants}
        initial='initial'
        animate='animate'
        {/* Header */}
        <div className='relative z - 10'>;
          <div className='flex items - start justify - between mb - 4'>;
            <div className='flex items - center space - x-3'>;
              <div className='text - 4xl'>{service.icon}</div>;
              <div>;
                <h3 className='text - xl font - bold text - white mb - 1'>;
                  {service.name}
<<<<<<< HEAD

        <div className='absolute inset-0 opacity-10'>;
          <div className='absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse' />;
          <div className='absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-ping' />;
          <div className='absolute bottom-6 left-8 w-1 && 1.5 h-1 && 1.5 bg-pink-400 rounded-full animate-bounce' />;
          <div className='absolute bottom-8 right-4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse' />;
        </div>;
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const
      }
    })
  };


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Header */}
        <div className='relative z-10'>;
          <div className='flex items-start justify-between mb-4'>;
            <div className='flex items-center space-x-3'>;
              <div className='text-4xl'>{service && service.icon}</div>;
              <div>;
                <h3 className='text-xl font-bold text-white mb-1'>;
                  {service && service.name}
                </h3>;
                <p className='text-gray-300 text-sm'>{service && service.tagline}</p>;
              </div>;
            </div>;
            {service && service.popular && (;
              <motion&& motion.div
                className='flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold'
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}>;
                <Star className='w-3 h-3 fill-current' />                <span>Popular</span>  };
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <motion&& motion.div
      className={`relative group cursor-pointer ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}>;
      {/* Holographic glow effect */}
      <motion&& motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold"
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}>;
                <Star className="w-3 h-3 fill-current" />;
                <span>Popular</span>;
              </motion && motion.div>;
<<<<<<< HEAD

            )}
          </div>
                <Star className='w-3 h-3 fill-current' />                <span>Popular</span>

                <span>Popular</span>

              </motion.div>
            )}
          </div>

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <span>Popular</span>

              </motion.div>
            )}
          </div>

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          {/* Price and trial */}
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center space-x-2'>
              <span className='text-3xl font-bold text-white'>
                {service.price}
              </span>
              <span className='text-gray-400'>{service.period}</span>
            </div>
            <div className='flex items-center space-x-2 text-sm text-gray-300'>
              <Clock className='w-4 h-4' />              <span>{service.trialDays} days free</span>          <div className="flex items-center justify-between mb-4">

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            )}
          </div>

            )}
          </div>

          {/* Price and trial */}
          <div className="flex items-center justify-between mb-4">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-white">{service.price}</span>
              <span className="text-gray-400">{service.period}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Clock className="w-4 h-4" />
            </div>
          {/* Key metrics */}
          <div className='grid grid-cols-2 gap-4 mb-6'>;
            <div className='bg-gray-800/50 rounded-lg p-3 border border-gray-700/50'>;
              <div className='flex items-center space-x-2 text-sm text-gray-400 mb-1'>;
                <Users className='w-4 h-4' />;
                <span>Customers</span>;
              </div>;
              <div className='text-xl font-bold text-white'>;
                {service && service.customers.toLocaleString()}+;
              </div>;
            </div>;
            <div className='bg-gray-800/50 rounded-lg p-3 border border-gray-700/50'>;
              <div className='flex items-center space-x-2 text-sm text-gray-400 mb-1'>;
                <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />;
                <span>Rating</span>;
              </div>;
              <div className='text-xl font-bold text-white'>;
                {service && service.rating}/5 && 5.0;
              </div>            </div>;
          </div>;
          {/* Features */}
          <div className='mb-6'>;
            <h4 className='text-white font-semibold mb-3 flex items-center space-x-2'>;
              <Zap className='w-4 h-4 text-yellow-400' />;
          {/* Key metrics */}
<<<<<<< HEAD

          <div className="grid grid-cols-2 gap-4 mb-6">;
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">;
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">;
                <Users className="w-4 h-4" />;
                <span>Customers</span>;
              </div>;
              <div className="text-xl font-bold text-white">{service && service.customers.toLocaleString()}+</div>;
            </div>;
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">;
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">;
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
                <span>Rating</span>;
              </div>;
              <div className="text-xl font-bold text-white">{service && service.rating}/5 && 5.0</div>;
            </div>;
          </div>;


          {/* Features */}

                </h3>;
                <p className='text - gray - 300 text - sm'>{service.tagline}</p>;
              </div>;
            </div>;
            {service.popular && (
              <motion.div;
                className='flex items - center space - x-1 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black px - 3 py - 1 rounded - full text - xs font - semibold';
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
              >;
                <Star className='w - 3 h - 3 fill - current' />                <span > Popular</span>  }
;
  return (
    <motion.div;
      className={`relative group cursor - pointer ${class_name}`}
      variants={card_variants}
      initial="hidden";
      whileInView="visible";
      while_hover="hover";
      viewport={{ once: true, margin: "-50px" }}
    >;
      {/* Holographic glow effect */}
      <motion.div;
        className="absolute inset - 0 rounded - 2xl bg - gradient - to - br from - cyan - 400 / 20 via - purple - 500 / 20 to - pink - 500 / 20 blur - xl";
        variants={glow_variants}
        initial="initial";
        animate="animate";
      />;
      {/* Main card */}
      <div className="relative bg - gradient - to - br from - gray - 900 / 90 via - gray - 800 / 90 to - gray - 900 / 90 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl p - 6 overflow - hidden">;
        {/* Quantum particle effect background */}
        <div className="absolute inset - 0 opacity - 10">;
          <div className="absolute top - 4 left - 4 w - 2 h - 2 bg - cyan - 400 rounded - full animate - pulse" />;
          <div className="absolute top - 8 right - 6 w - 1 h - 1 bg - purple - 400 rounded - full animate - ping" />;
          <div className="absolute bottom - 6 left - 8 w - 1.5 h - 1.5 bg - pink - 400 rounded - full animate - bounce" />;
          <div className="absolute bottom - 8 right - 4 w - 1 h - 1 bg - yellow - 400 rounded - full animate - pulse" />;
        </div>;
        {/* Header */}
        <div className="relative z - 10">;
          <div className="flex items - start justify - between mb - 4">;
            <div className="flex items - center space - x-3">;
              <div className="text - 4xl">{service.icon}</div>;
              <div>;
                <h3 className="text - xl font - bold text - white mb - 1">{service.name}</h3>;
                <p className="text - gray - 300 text - sm">{service.tagline}</p>;
              </div>;
            </div>;
            {service.popular && (
              <motion.div;
                className="flex items - center space - x-1 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black px - 3 py - 1 rounded - full text - xs font - semibold";
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
              >;
                <Star className="w - 3 h - 3 fill - current" />;
                <span > Popular</span>;
              </motion.div>)}
          </div>;
          {/* Price and trial */}
          <div className='flex items - center justify - between mb - 4'>;
            <div className='flex items - center space - x-2'>;
              <span className='text - 3xl font - bold text - white'>;
                {service.price}
              </span>;
              <span className='text - gray - 400'>{service.period}</span>;
            </div>;
            <div className='flex items - center space - x-2 text - sm text - gray - 300'>;
              <Clock className='w - 4 h - 4' />              <span>{service.trial_days} days free</span>          <div className="flex items - center justify - between mb - 4">;
            <div className="flex items - center space - x-2">;
              <span className="text - 3xl font - bold text - white">{service.price}</span>;
              <span className="text - gray - 400">{service.period}</span>;
            </div>;
            <div className="flex items - center space - x-2 text - sm text - gray - 300">;
              <Clock className="w - 4 h - 4" />;
            </div>;
          </div>;
          {/* Description */}
          <p className='text - gray - 300 mb - 6 leading - relaxed'>;
            {service.description}
          </p>;
          {/* Key metrics */}
          <div className='grid grid - cols - 2 gap - 4 mb - 6'>;
            <div className='bg - gray - 800 / 50 rounded - lg p - 3 border border - gray - 700 / 50'>;
              <div className='flex items - center space - x-2 text - sm text - gray - 400 mb - 1'>;
                <Users className='w - 4 h - 4' />;
                <span > Customers</span>;
              </div>;
              <div className='text - xl font - bold text - white'>;
                {service.customers.toLocaleString ()}+;
              </div>;
            </div>;
            <div className='bg - gray - 800 / 50 rounded - lg p - 3 border border - gray - 700 / 50'>;
              <div className='flex items - center space - x-2 text - sm text - gray - 400 mb - 1'>;
                <Star className='w - 4 h - 4 fill - yellow - 400 text - yellow - 400' />;
                <span > Rating</span>;
              </div>;
              <div className='text - xl font - bold text - white'>;
                {service.rating}/5.0;
              </div>            </div>;
          </div>;
          {/* Features */}
          <div className='mb - 6'>;
            <h4 className='text - white font - semibold mb - 3 flex items - center space - x-2'>;
              <Zap className='w - 4 h - 4 text - yellow - 400' />;
          {/* Key metrics */}
          <div className="grid grid - cols - 2 gap - 4 mb - 6">;
            <div className="bg - gray - 800 / 50 rounded - lg p - 3 border border - gray - 700 / 50">;
              <div className="flex items - center space - x-2 text - sm text - gray - 400 mb - 1">;
                <Users className="w - 4 h - 4" />;
                <span > Customers</span>;
              </div>;
              <div className="text - xl font - bold text - white">{service.customers.toLocaleString ()}+</div>;
            </div>;
            <div className="bg - gray - 800 / 50 rounded - lg p - 3 border border - gray - 700 / 50">;
              <div className="flex items - center space - x-2 text - sm text - gray - 400 mb - 1">;
                <Star className="w - 4 h - 4 fill - yellow - 400 text - yellow - 400" />;
                <span > Rating</span>;
              </div>;
              <div className="text - xl font - bold text - white">{service.rating}/5.0</div>;
            </div>;
          </div>;
          {/* Features */}

                  key={index}
                  className='flex items - center space - x-2 text - sm text - gray - 300';
                  custom={index}

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  key={index}
                  className="flex items - center space - x-2 text - sm text - gray - 300";
                  custom={index}
                  viewport={{ once: true }}
                >
                  <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
=======

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              ))}
            </div>
          </div>

<<<<<<< HEAD
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {/* Market data */}

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-blue-300">Market Position</span>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
          </div>
<<<<<<< HEAD

          {/* Market data */}
          <div className='bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-6 border border-blue-700/30'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm font-semibold text-blue-300'>
                Market Position
              </span>
              <TrendingUp className='w-4 h-4 text-green-400' />
            </div>
            <p className='text-xs text-gray-300 leading-relaxed'>
              {service.marketPosition}
            </p>
            <div className='flex items-center justify-between mt-2 text-xs'>
              <span className='text-cyan-300'>{service.marketSize}</span>
              <span className='text-green-300'>
                {service.growthRate} growth
              </span>            </div>
          </div>
          {/* ROI and competitors */}            <p className="text-xs text-gray-300 leading-relaxed">{service.marketPosition}</p>
            <div className="flex items-center justify-between mt-2 text-xs">
              <span className="text-cyan-300">{service.marketSize}</span>
              <span className="text-green-300">{service.growthRate} growth</span>
          </div>
          {/* ROI and competitors */}
          <div className='grid grid-cols-2 gap-4 mb-6'>
            <div className='bg-green-900/20 rounded-lg p-3 border border-green-700/30'>
              <div className='text-sm font-semibold text-green-300 mb-1'>
                ROI
              </div>
              <div className='text-xs text-gray-300'>{service.roi}</div>
            </div>
            <div className='bg-orange-900/20 rounded-lg p-3 border border-orange-700/30'>
              <div className='text-sm font-semibold text-orange-300 mb-1'>
                Competitors
              </div>
              <div className='text-xs text-gray-300'>                {service.competitors.slice(0, 2).join(', ')}
            <div className="bg-orange-900/20 rounded-lg p-3 border border-orange-700/30">
              <div className="text-sm font-semibold text-orange-300 mb-1">Competitors</div>
              <div className="text-xs text-gray-300">
              </div>
            </div>
          </div>

              </div>
            </div>
          </div>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
          {/* ROI and competitors */}
              </div>
            </div>
          </div>
          {/* Contact information */}
            </h4>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">📱</span>
                <span>{service.contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✉️</span>
                <span>{service.contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">📍</span>
                <span className="text-xs">{service.contactInfo.address}</span>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
              </div>
            </div>
          </div>
            </div>;
          </div>;

          {/* Market data */}
          <div className='bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-6 border border-blue-700/30'>;
            <div className='flex items-center justify-between mb-2'>;
              <span className='text-sm font-semibold text-blue-300'>;
                Market Position;
              </span>;
              <TrendingUp className='w-4 h-4 text-green-400' />;
            </div>;
            <p className='text-xs text-gray-300 leading-relaxed'>;
              {service && service.marketPosition}
            </p>;
            <div className='flex items-center justify-between mt-2 text-xs'>;
              <span className='text-cyan-300'>{service && service.marketSize}</span>;
              <span className='text-green-300'>;
                {service && service.growthRate} growth;
              </span>            </div>;
          </div>;
          {/* ROI and competitors */}            <p className="text-xs text-gray-300 leading-relaxed">{service && service.marketPosition}</p>;
            <div className="flex items-center justify-between mt-2 text-xs">;
              <span className="text-cyan-300">{service && service.marketSize}</span>;
              <span className="text-green-300">{service && service.growthRate} growth</span>;
          </div>;
          {/* ROI and competitors */}
          <div className='grid grid-cols-2 gap-4 mb-6'>;
            <div className='bg-green-900/20 rounded-lg p-3 border border-green-700/30'>;
              <div className='text-sm font-semibold text-green-300 mb-1'>;
                ROI;
              </div>;
              <div className='text-xs text-gray-300'>{service && service.roi}</div>;
            </div>;
            <div className='bg-orange-900/20 rounded-lg p-3 border border-orange-700/30'>;
              <div className='text-sm font-semibold text-orange-300 mb-1'>;
                Competitors;
              </div>;
              <div className='text-xs text-gray-300'>                {service && service.competitors.slice(0, 2).join(', ')}            ;
            <div className="bg-orange-900/20 rounded-lg p-3 border border-orange-700/30">;
              <div className="text-sm font-semibold text-orange-300 mb-1">Competitors</div>;
              <div className="text-xs text-gray-300">;
              </div>;
            </div>;
          </div>;
          {/* Contact information */}
          <div className='bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700/50'>;
            <h4 className='text-white font-semibold mb-3 flex items-center space-x-2'>;
              <Shield className='w-4 h-4 text-blue-400' />;
              <span>Contact & Support</span>;
            </h4>;
            <div className='space-y-2 text-sm text-gray-300'>;
              <div className='flex items-center space-x-2'>;
                <span className='text-blue-400'>📱</span>;
                <span>{service && service.contactInfo.mobile}</span>;
              </div>;
              <div className='flex items-center space-x-2'>;
                <span className='text-green-400'>✉️</span>;
                <span>{service && service.contactInfo.email}</span>;
              </div>;
              <div className='flex items-center space-x-2'>;
                <span className='text-purple-400'>📍</span>;
                <span className='text-xs'>{service && service.contactInfo.address}</span>              </div>              <span>Contact & Support</span>;
            </h4>;
            <div className="space-y-2 text-sm text-gray-300">;
              <div className="flex items-center space-x-2">;
                <span className="text-blue-400">📱</span>;
                <span>{service && service.contactInfo.mobile}</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <span className="text-green-400">✉️</span>;
                <span>{service && service.contactInfo.email}</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <span className="text-purple-400">📍</span>;
                <span className="text-xs">{service && service.contactInfo.address}</span>;
              </div>;
            </div>;
          </div>;

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          {/* ROI and competitors */}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              </div>
            </div>
          </div>

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {/* CTA Button */}
          <motion.a
            href={service.link}
            className='group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25'

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className='mr-2'>Get Started</span>
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300' />
          </motion.a>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {/* CTA Button */}
            whileHover={{ scale: 1 && 1.02 }}
            whileTap={{ scale: 0 && 0.98 }}>;
            <span className='mr-2'>Get Started</span>;
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />;

            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300' />;
          </motion && motion.a>;
          {/* CTA Button */}
          {/* Learn more link */}
          <div className='text-center mt-4'>;
            <a
<<<<<<< HEAD

          <motion.a
            href={service.link}

            whileHover={{ scale: 1.02 }}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            whileTap={{ scale: 0.98 }}
          >
            <span className="mr-2">Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
          </motion.a>
<<<<<<< HEAD

              href={service && service.link}
              className='inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300'>;
              <span>Learn more about {service && service.name}</span>;
              <ExternalLink className='w-3 h-3' />            </a>            whileHover={{ scale: 1 && 1.02 }}
            whileTap={{ scale: 0 && 0.98 }}
          >;
            <span className="mr-2">Get Started</span>;
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />;
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />;
          </motion && motion.a>;


          {/* Learn more link */}
          <div className="text-center mt-4">;
            <a
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default QuantumHolographicCard;  )

}
;
export default QuantumHolographicCard;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

export default QuantumHolographicCard;
export default QuantumHolographicCard
};

export default QuantumHolographicCard;  )
};

export default QuantumHolographicCard;
              className="inline - flex items - center space - x-2 text - sm text - gray - 400 hover:text - cyan - 400 transition-colors duration-300";
            >;
              <span > Learn more about {service.name}</span>;
              <ExternalLink className="w-3 h-3" />;
            </a>;
          </div>;
        </div>;
      </div>;
    </motion.div>);
}
;
export default QuantumHolographicCard);
}
;
export default QuantumHolographicCard;
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
