<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Zap,
  Shield,

=======
import { motion } from 'framer-motion';
import {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import React from 'react';
import { motion  } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Globe, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  ArrowRight
  Star
  Users
  TrendingUp
  Zap
  Shield
  Globe
  Rocket;
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Globe,;
  Rocket,;
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
} from 'lucide-react';
interface ServiceCardProps {
  service: {
import {;
  ArrowRight,;
  Star,;
  Users,;
  TrendingUp,;
  Zap,;
  Shield,;
  Globe,;
  Rocket,;
} from 'lucide-react';
interface ServiceCardProps {;
  service: {;
<<<<<<< HEAD
=======
  Globe,;
  Rocket,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
} from 'lucide-react';

interface ServiceCardProps {
  service: {

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    id: string;
    name: string;
    tagline: string,
  description: string;
    category: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    price: {;
      monthly: number;
      yearly: number;
      currency: string;

      trial_days: number;
      setup_time: string;
      enterprise?: number;
    }

    features: string[];
    benefits: string[];
    target_audience: string[];
    market_position: string;
    competitors: string[];
    tech_stack: string[];
    real_implementation: boolean;
    implementation_details: string;
    roi: string;
    use_cases: string[];

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    price: {
      monthly: number;
      yearly: number;
      currency: string;
      trialDays: number;
      setupTime: string;
      enterprise?: number
    },
    features: string[];
    benefits: string[];
    targetAudience: string[];
    marketPosition: string;
    competitors: string[];
    techStack: string[];
    realImplementation: boolean;
    implementationDetails: string;
    roi: string;
    useCases: string[];
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    integrations: string[];
    support: string;
    compliance: string[];
    link: string;
    icon: string;
    color: string;
    popular: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    growthRate?: string;
  }
  index: number;
const UltraFuturisticServiceCardV2: React.FC<ServiceCardProps> = ({
  service
  index
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & consciousness':
        return <Zap className='w-5 h-5' />;
=======
      case 'quantum & emerging tech':
        return <Rocket className='w-5 h-5' />;
      case 'enterprise it':
        return <Shield className='w-5 h-5' />;
      case 'space & metaverse':
        return <Globe className='w-5 h-5' />;
      case 'micro saas':
        return <TrendingUp className='w-5 h-5' />;
      default:
        return <Zap className='w-5 h-5' />;    }        return <Zap className="w-5 h-5" />;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      case 'quantum & emerging tech':
        return <Rocket className='w-5 h-5' />;
      case 'enterprise it':
        return <Shield className='w-5 h-5' />;
      case 'space & metaverse':
        return <Globe className='w-5 h-5' />;
      case 'micro saas':
        return <TrendingUp className='w-5 h-5' />;
      default:

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        return <Zap className='w-5 h-5' />;
      case 'quantum & emerging tech':;
        return <Rocket className='w-5 h-5' />;
      case 'enterprise it':;
        return <Shield className='w-5 h-5' />;
      case 'space & metaverse':;
        return <Globe className='w-5 h-5' />;
      case 'micro saas':;
        return <TrendingUp className='w-5 h-5' />;
        return <Rocket className="w-5 h-5" />;
      case 'enterprise it':;
        return <Shield className="w-5 h-5" />;
      case 'space & metaverse':;
        return <Globe className="w-5 h-5" />;
      case 'micro saas':;
        return <TrendingUp className="w-5 h-5" />;

      default:

        return <Zap className='w-5 h-5' />;    }

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
    marketSize?: string;
        return <Zap className='w-5 h-5' />;
origin/cursor/automate-test-improve-and-merge-code-2533
    }

<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  };

  const getGradientClass = (color: string) => {
    if (color.includes('from-') && color.includes('to-')) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      return color;
    }
    return 'from-cyan-500 to-blue-500';
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    >
      {/* Glow effect */}
      <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
=======

  };

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
return color;
    }
    return 'from-cyan-500 to-blue-500';
  }
    >
origin/cursor/automate-test-improve-and-merge-code-2533
      {/* Glow effect */}
      <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Main card */}
      <div className='relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden'>
        {/* Background pattern */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400'></div>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]'></div>
        </div>
        {/* Header */}
        <div className='relative z-10 mb-6'>
          <div className='flex items-start justify-between mb-4'>
            <div className='flex items-center space-x-3'>
              <div className='text-3xl'>{service.icon}</div>
              <div>
                <div className='flex items-center space-x-2'>
                  {getCategoryIcon(service.category)}

                  </span>
                </div>
              </div>
            </div>

        return <Rocket className="w-5 h-5" />;
      case 'enterprise it':;
        return <Shield className="w-5 h-5" />;
      case 'space & metaverse':;
        return <Globe className="w-5 h-5" />;
      case 'micro saas':;
        return <TrendingUp className="w-5 h-5" />;


    }
  }
        return <Zap className='w-5 h-5' />;    }

    }

=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  };

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const getGradientClass = (color: string) => {
    if (color.includes('from-') && color.includes('to-')) {
      return color;
    }
    return 'from-cyan-500 to-blue-500';
  }
  };

    >
      {/* Glow effect */}
      <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    return 'from-cyan-500 to-blue-500'
  }
        <div className='absolute inset-0 opacity-5'>;
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400'></div>;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0 && 0.15)_1px,transparent_0)] bg-[length:20px_20px]'></div>;
        </div>;
        {/* Header */}
        <div className='relative z-10 mb-6'>;
          <div className='flex items-start justify-between mb-4'>;
            <div className='flex items-center space-x-3'>;
              <div className='text-3xl'>{service && service.icon}</div>;
              <div>;
                <div className='flex items-center space-x-2'>;
                  {getCategoryIcon(service && service.category)}
                  <span className='text-xs font-medium text-gray-400 uppercase tracking-wider'>                    {service && service.category}    }
    return 'from-cyan-500 to-blue-500'
};
  return (
    <motion&& motion.div
      initial={{ opacity: 0, y: 50, scale: 0 && 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0 && 0.6,
        delay: index * 0 && 0.1,
        ease: [0 && 0.25, 0 && 0.46, 0 && 0.45, 0 && 0.94]
      }}
        {/* Header */}
        <div className="relative z-10 mb-6">;
          <div className="flex items - start justify-between mb-4">;
            <div className="flex items-center space-x-3">;
              <div className="text-3xl">{service.icon}</div>;
              <div>;
                <div className="flex items-center space-x-2">;
                  {getCategoryIcon (service.category)}
<<<<<<< HEAD
                  <span className="text - xs font - medium text - gray-400 uppercase tracking-wider">;
=======
                  <span className="text - xs font - medium text - gray - 400 uppercase tracking - wider">;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400'></div>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]'></div>
        </div>
        {/* Header */}
        <div className='relative z-10 mb-6'>
          <div className='flex items-start justify-between mb-4'>
            <div className='flex items-center space-x-3'>
              <div className='text-3xl'>{service.icon}</div>
              <div>
                <div className='flex items-center space-x-2'>
                  {getCategoryIcon(service.category)}
                  <span className='text-xs font-medium text-gray-400 uppercase tracking-wider'>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                    {service.category}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  </span>
                </div>
              </div>
            </div>

origin/cursor/automate-test-improve-and-merge-code-2533
            {service.popular && (
              <motion.div
        <div className="absolute inset-0 opacity-5">;
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400"></div>;
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0 && 0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>;
        </div>;
        {/* Header */}
        <div className="relative z-10 mb-6">;
          <div className="flex items-start justify-between mb-4">;
            <div className="flex items-center space-x-3">;
              <div className="text-3xl">{service && service.icon}</div>;
              <div>;
                <div className="flex items-center space-x-2">;
                  {getCategoryIcon(service && service.category)}
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">;
                    {service && service.category}
                  </span>;
                </div>;
              </div>;
            </div>;
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
<<<<<<< HEAD
<<<<<<< HEAD
            {service.name}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">

          <p className='text-gray-300 text-sm leading-relaxed'>            {service.tagline}

            {service.tagline}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300">
            {service.name}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </p>
        </div>
        {/* Stats */}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className='flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full'
              >
                <Star className='w-3 h-3 fill-current' />
                <span>POPULAR</span>
              </motion.div>
            )}
          </div>

<h3 className='text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300'>
            {service.name}
          </h3>

          <p className='text-gray-300 text-sm leading-relaxed'>
            {service.tagline}
          </p>
        </div>
        {/* Stats */}
<div className='relative z-10 mb-6'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-cyan-400'>
origin/cursor/automate-test-improve-and-merge-code-2533
                {service.rating}

<<<<<<< HEAD
=======
              </div>
              <div className='text-xs text-gray-400'>Rating</div>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-purple-400'>
                {service.customers.toLocaleString()}
              </div>
              <div className='text-xs text-gray-400'>Customers</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-pink-400'>
<<<<<<< HEAD

=======
              </div>;
              <div className='text - xs text - gray - 400'>Rating</div>;
            </div>;
            <div className='text - center'>;
              <div className='text - 2xl font - bold text - purple - 400'>;
                {service.customers.toLocaleString ()}
              </div>;
              <div className='text - xs text - gray - 400'>Customers</div>;
            </div>;
            <div className='text - center'>;
              <div className='text - 2xl font - bold text - pink - 400'>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                {service.reviews}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{service.customers.toLocaleString()}</div>
              <div className="text-xs text-gray-400">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">{service.reviews}</div>
              <div className="text-xs text-gray-400">Reviews</div>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className='relative z-10 mb-6'>;
          <div className='grid grid-cols-3 gap-4'>;
            <div className='text-center'>;
              <div className='text-2xl font-bold text-cyan-400'>;
                {service && service.rating}
              </div>;
              <div className='text-xs text-gray-400'>Rating</div>;
            </div>;
            <div className='text-center'>;
              <div className='text-2xl font-bold text-purple-400'>;
                {service && service.customers.toLocaleString()}
              </div>;
              <div className='text-xs text-gray-400'>Customers</div>;
            </div>;
            <div className='text-center'>;
              <div className='text-2xl font-bold text-pink-400'>;
                {service && service.reviews}
              </div>;
              <div className='text-xs text-gray-400'>Reviews</div>            </div>            </div>;
            <div className="text-center">;
              <div className="text-2xl font-bold text-purple-400">{service && service.customers.toLocaleString()}</div>;
              <div className="text-xs text-gray-400">Customers</div>;
            </div>;
            <div className="text-center">;
              <div className="text-2xl font-bold text-pink-400">{service && service.reviews}</div>;
              <div className="text-xs text-gray-400">Reviews</div>;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
        {/* Pricing */}

=======
        <div className="relative z-10 mb-6">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Starting at</span>
              <span className="text-xs text-gray-500">per month</span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-white">${service.price.monthly}</span>
              <span className="text-lg text-gray-400">/mo</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-xs text-gray-500">or</span>
              <span className="text-sm text-cyan-400 font-medium">
                ${service.price.yearly}/year
              </span>
              <span className="text-xs text-gray-500">(save 17%)</span>
            </div>
            {service.price.enterprise && (
              <div className="mt-2 pt-2 border-t border-gray-600/30">
                <span className="text-xs text-gray-500">Enterprise: </span>
                <span className="text-sm text-purple-400 font-medium">
                  ${service.price.enterprise}/mo
                </span>
              </div>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            )}
          </div>
        </div>

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
          </div>;
        </div>;

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              </div>
              <div className='text-xs text-gray-400'>Reviews</div>
            </div>
          </div>
        </div>
        {/* Pricing */}
<div className='relative z-10 mb-6'>
          <div className='bg-gray-800/50 rounded-xl p-4 border border-gray-600/30'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm text-gray-400'>Starting at</span>
              <span className='text-xs text-gray-500'>per month</span>
            </div>
            <div className='flex items-baseline space-x-2'>
              <span className='text-3xl font-bold text-white'>
                ${service.price.monthly}
              </span>
              <span className='text-lg text-gray-400'>/mo</span>
            </div>
            <div className='flex items-center space-x-2 mt-2'>
              <span className='text-xs text-gray-500'>or</span>
              <span className='text-sm text-cyan-400 font-medium'>
                ${service.price.yearly}/year
              </span>
              <span className='text-xs text-gray-500'>(save 17%)</span>
            </div>
            {service.price.enterprise && (
              <div className='mt-2 pt-2 border-t border-gray-600/30'>
                <span className='text-xs text-gray-500'>Enterprise: </span>
                <span className='text-sm text-purple-400 font-medium'>
                  ${service.price.enterprise}/mo
                </span>
              </div>
            )}
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        {/* Features preview */}
<div className='relative z-10 mb-6'>
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>
            Key Features
          </h4>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <div className='space-y-2'>            {service.features.slice(0, 3).map((feature, idx) => (        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
          <div className="space-y-2">
          <div className='space-y-2'>            {service.features.slice(0, 3).map((feature, idx) => (

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
          <div className='space-y-2'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <div className='space-y-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
            {service.features.slice(0, 3).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                transition={{ delay: 0.6 + idx * 0.1 }}
                className='flex items-center space-x-2 text-sm'

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
                transition={{ delay: 0.6 + idx * 0.1 }}
className='flex items-center space-x-2 text-sm'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                transition={{ delay: 0.6 + idx * 0.1 }}
className='flex items-center space-x-2 text-sm'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              >
                <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'></div>
                <span className='text-gray-300'>{feature}</span>
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <div className='text-xs text-gray-500 mt-2'>
                +{service.features.length - 3} more features
              <div className='text-xs text-gray-500 mt-2'>                +{service.features.length - 3} more features

                +{service.features.length - 3} more features

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </div>
        {/* Features preview */}
        <div className='relative z-10 mb-6'>;
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>;
            Key Features;
          </h4>;
          <div className='space-y-2'>            {service && service.features.slice(0, 3).map((feature, idx) => (        <div className="relative z-10 mb-6">;
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>;
          <div className="space-y-2">;
            {service && service.features.slice(0, 3).map((feature, idx) => (;
              <motion&& motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 && 0.6 + idx * 0 && 0.1 }}
                className='flex items-center space-x-2 text-sm'>;
                <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'></div>;
                <span className='text-gray-300'>{feature}</span>;
              </motion && motion.div>;
            ))}
            {service && service.features.length > 3 && (;
              <div className='text-xs text-gray-500 mt-2'>                +{service && service.features.length - 3} more features              >;
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>;
                <span className="text-gray-300">{feature}</span>;
              </motion && motion.div>;
            ))}
            {service && service.features.length > 3 && (;
              <div className="text-xs text-gray-500 mt-2">;
                +{service && service.features.length - 3} more features;
              </div>;
                key={idx}
                initial={{ opacity: 0, coordinate_x: -20 }}
                animate={{ opacity: 1, coordinate_x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
            )}
        {/* Benefits */}
        <div className='relative z-10 mb-6'>;
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>;
            Key Benefits;
          </h4>;
          <div className='space-y-2'>            {service && service.benefits.slice(0, 2).map((benefit, idx) => (        <div className="relative z-10 mb-6">;
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>;
          <div className="space-y-2">;
            {service && service.benefits.slice(0, 2).map((benefit, idx) => (;
              <motion&& motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              >
                <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'></div>
                <span className='text-gray-300'>{feature}</span>
              </motion.div>
            ))}
            {service.features.length > 3 && (
<<<<<<< HEAD
              <div className='text-xs text-gray-500 mt-2'>                +{service.features.length - 3} more features              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-gray-500 mt-2">
                +{service.features.length - 3} more features
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </div>
            )}
          </div>
        </div>
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
        {/* Benefits */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
          <div className="space-y-2">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <motion.div
                className='flex items - center space - x-2 text - sm';
              >;
                <div className='w - 2 h - 2 bg - gradient - to - r from - cyan - 400 to - purple - 400 rounded - full'></div>;
                <span className='text - gray - 300'>{feature}</span>;
              </motion.div>))}
            {service.features.length > 3 && (
              <div className='text - xs text - gray - 500 mt - 2'>                +{service.features.length - 3} more features              >;
                <div className="w - 2 h - 2 bg - gradient - to - r from - cyan - 400 to - purple-400 rounded-full"></div>;
                <span className="text-gray-300">{feature}</span>;
              </motion.div>))}
            {service.features.length > 3 && (
              <div className="text - xs text - gray-500 mt-2">;
                +{service.features.length - 3} more features;
              </div>)}
          </div>;
        </div>;
        {/* Benefits */}
        <div className='relative z - 10 mb - 6'>;
          <h4 className='text - sm font - semibold text - gray - 300 mb - 3'>;
            Key Benefits;
          </h4>;
          <div className='space - y-2'>            {service.benefits.slice (0, 2).map ((benefit, idx) => (        <div className="relative z-10 mb-6">;
          <h4 className="text - sm font - semibold text - gray-300 mb-3">Key Benefits</h4>;
          <div className="space-y-2">;
            {service.benefits.slice (0, 2).map ((benefit, idx) => (
              <motion.div;

                key={idx}
                initial={{ opacity: 0, coordinate_x: -20 }}
                animate={{ opacity: 1, coordinate_x: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
<<<<<<< HEAD

=======




=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        {/* Benefits */}
        <div className='relative z-10 mb-6'>
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>
            Key Benefits
          </h4>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<div className='relative z-10 mb-6'>
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>
            Key Benefits
          </h4>
          <div className='space-y-2'>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
className='flex items-center space-x-2 text-sm'
              >
                <div className='w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full'></div>
                <span className='text-gray-300'>{benefit}</span>
origin/cursor/automate-test-improve-and-merge-code-2533
              </motion.div>
            ))}

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
          </div>;
        </div>;
                <span className='text-gray-300'>{benefit}</span>              </motion.div>

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        {/* Market info */}

        {service.marketSize && service.growthRate && (
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='relative z-10 mb-6'>
            <div className='bg-gray-800/30 rounded-lg p-3 border border-gray-600/20'>
              <div className='flex items-center justify-between text-xs'>
                <span className='text-gray-400'>Market Size</span>
                <span className='text-cyan-400 font-medium'>
                  {service.marketSize}
                </span>
              </div>
              <div className='flex items-center justify-between text-xs mt-1'>
                <span className='text-gray-400'>Growth Rate</span>
                <span className='text-green-400 font-medium'>
                  {service.growthRate}
                </span>              </div>          <div className="relative z-10 mb-6">

=======
<<<<<<< HEAD
          <div className="relative z-10 mb-6">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-600/20">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Market Size</span>
                <span className="text-cyan-400 font-medium">{service.marketSize}</span>
              </div>
              <div className="flex items-center justify-between text-xs mt-1">
                <span className="text-gray-400">Growth Rate</span>
                <span className="text-green-400 font-medium">{service.growthRate}</span>
              </div>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<div className='relative z-10 mb-6'>
            <div className='bg-gray-800/30 rounded-lg p-3 border border-gray-600/20'>
              <div className='flex items-center justify-between text-xs'>
                <span className='text-gray-400'>Market Size</span>
                <span className='text-cyan-400 font-medium'>
                  {service.marketSize}
                </span>
              </div>
              <div className='flex items-center justify-between text-xs mt-1'>
                <span className='text-gray-400'>Growth Rate</span>
                <span className='text-green-400 font-medium'>
                  {service.growthRate}
                </span>
              </div>
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          </div>
            ))}

        {/* Market info */}
        {service && service.marketSize && service && service.growthRate && (;
          <div className='relative z-10 mb-6'>;
            <div className='bg-gray-800/30 rounded-lg p-3 border border-gray-600/20'>;
              <div className='flex items-center justify-between text-xs'>;
                <span className='text-gray-400'>Market Size</span>;
                <span className='text-cyan-400 font-medium'>;
                  {service && service.marketSize}
                </span>;
              </div>;
              <div className='flex items-center justify-between text-xs mt-1'>;
                <span className='text-gray-400'>Growth Rate</span>;
                <span className='text-green-400 font-medium'>;
                  {service && service.growthRate}
                </span>              </div>          <div className="relative z-10 mb-6">;
            <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-600/20">;
              <div className="flex items-center justify-between text-xs">;
                <span className="text-gray-400">Market Size</span>;
                <span className="text-cyan-400 font-medium">{service && service.marketSize}</span>;
              </div>;
              <div className="flex items-center justify-between text-xs mt-1">;
                <span className="text-gray-400">Growth Rate</span>;
                <span className="text-green-400 font-medium">{service && service.growthRate}</span>;
            </div>;
          </div>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        {/* CTA Button */}
        <div className='relative z-10'>          <motion.a
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

        {service && service.marketSize && service && service.growthRate && (;
          <div className='relative z-10 mb-6'>;
            <div className='bg-gray-800/30 rounded-lg p-3 border border-gray-600/20'>;
              <div className='flex items-center justify-between text-xs'>;
                <span className='text-gray-400'>Market Size</span>;
                <span className='text-cyan-400 font-medium'>;
                  {service && service.marketSize}
                </span>;
              </div>;
              <div className='flex items-center justify-between text-xs mt-1'>;
                <span className='text-gray-400'>Growth Rate</span>;
                <span className='text-green-400 font-medium'>;
                  {service && service.growthRate}
                </span>              </div>          <div className="relative z-10 mb-6">;
            <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-600/20">;
              <div className="flex items-center justify-between text-xs">;
                <span className="text-gray-400">Market Size</span>;
                <span className="text-cyan-400 font-medium">{service && service.marketSize}</span>;
              </div>;
              <div className="flex items-center justify-between text-xs mt-1">;
                <span className="text-gray-400">Growth Rate</span>;
                <span className="text-green-400 font-medium">{service && service.growthRate}</span>;
            </div>;
          </div>;
        )}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
        {/* CTA Button */}
<div className='relative z-10'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        {/* CTA Button */}
<div className='relative z-10'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
          <motion.a
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          >

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <span className="relative z-10 flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </span>
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'
          >
            <span className='relative z-10 flex items-center space-x-2'>
              <span>Learn More</span>
              <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200' />
            </span>
            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'></div>
origin/cursor/automate-test-improve-and-merge-code-2533
          </motion.a>
        </div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className='relative z-10'>          <motion&& motion.a
            href={service && service.link}
            whileHover={{ scale: 1 && 1.05 }}
            whileTap={{ scale: 0 && 0.95 }}
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'        <div className="relative z-10">;
          <motion&& motion.a
            href={service && service.link}
            whileHover={{ scale: 1 && 1.05 }}
            whileTap={{ scale: 0 && 0.95 }}
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'>;
            <span className='relative z-10 flex items-center space-x-2'>;
              <span>Learn More</span>;
              <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200' />;
            </span>;
<<<<<<< HEAD
=======

          </motion.a>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'></div>          </motion && motion.a>          >;
            <span className="relative z-10 flex items-center space-x-2">;
              <span>Learn More</span>;
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />;
            </span>;
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>;
          </motion && motion.a>;
        </div>;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </motion.a>

        </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Hover overlay */}
        <motion&& motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none'

        />
      </div>
    </motion.div>
  );

export default UltraFuturisticServiceCardV2;        />
      </div>
    </motion.div>

  )
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default UltraFuturisticServiceCardV2;
                className='flex items - center space - x-2 text - sm';
              >;
                <div className='w - 2 h - 2 bg - gradient - to - r from - green - 400 to - emerald - 400 rounded - full'></div>;
                <span className='text - gray - 300'>{benefit}</span>              </motion.div>                className="flex items - center space-x-2 text-sm";
              >;
                <div className="w - 2 h - 2 bg - gradient - to - r from - green - 400 to - emerald-400 rounded-full"></div>;
                <span className="text-gray-300">{benefit}</span>))}
          </div>;
        </div>;
        {/* Market info */}
        {service.market_size && service.growth_rate && (
          <div className='relative z - 10 mb - 6'>;
            <div className='bg - gray - 800 / 30 rounded - lg p - 3 border border - gray - 600 / 20'>;
              <div className='flex items - center justify - between text - xs'>;
                <span className='text - gray - 400'>Market Size</span>;
                <span className='text - cyan - 400 font - medium'>;
                  {service.market_size}
                </span>;
              </div>;
              <div className='flex items - center justify - between text - xs mt - 1'>;
                <span className='text - gray - 400'>Growth Rate</span>;
                <span className='text - green - 400 font - medium'>;
                  {service.growth_rate}
                </span>              </div>          <div className="relative z-10 mb-6">;
            <div className="bg - gray - 800 / 30 rounded - lg p - 3 border border-gray-600 / 20">;
              <div className="flex items - center justify-between text-xs">;
                <span className="text-gray-400">Market Size</span>;
                <span className="text - cyan-400 font-medium">{service.market_size}</span>;
              </div>;
              <div className="flex items - center justify - between text-xs mt-1">;
                <span className="text-gray-400">Growth Rate</span>;
                <span className="text - green-400 font-medium">{service.growth_rate}</span>;
            </div>;
          </div>)}
        {/* CTA Button */}
        <div className='relative z - 10'>          <motion.a;
            href={service.link}
            while_hover={{ scale: 1.05 }}
            while_tap={{ scale: 0.95 }}
            className='group / btn relative w - full inline - flex items - center justify - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white font - semibold rounded - xl overflow - hidden transition - all duration - 300 hover:shadow - lg hover:shadow - cyan - 500 / 25'        <div className="relative z-10">;
          <motion.a;
            href={service.link}
            while_hover={{ scale: 1.05 }}
            while_tap={{ scale: 0.95 }}
            className='group / btn relative w - full inline - flex items - center justify - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white font - semibold rounded - xl overflow - hidden transition - all duration - 300 hover:shadow - lg hover:shadow - cyan - 500 / 25';
          >;
            <span className='relative z - 10 flex items - center space - x-2'>;
              <span > Learn More</span>;
              <ArrowRight className='w - 4 h - 4 group - hover / btn:translate - x-1 transition - transform duration - 200' />;
            </span>;
            {/* Button glow effect */}
            <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - purple - 400 opacity - 0 group - hover / btn:opacity - 100 transition - opacity duration - 300'></div>          </motion.a>          >;
            <span className="relative z - 10 flex items-center space-x-2">;
              <span > Learn More</span>;
              <ArrowRight className="w - 4 h - 4 group - hover / btn:translate - x-1 transition-transform duration-200" />;
            </span>;
            {/* Button glow effect */}
            <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - purple - 400 opacity - 0 group - hover / btn:opacity - 100 transition-opacity duration-300"></div>;
          </motion.a>;
        </div>;
        {/* Hover overlay */}
        <motion.div;
          initial={{ opacity: 0 }}
          while_hover={{ opacity: 1 }}
          className='absolute inset - 0 bg - gradient - to - br from - cyan - 500 / 10 to - purple - 500 / 10 rounded - 2xl pointer - events - none';
        />;
      </div>;
    </motion.div>);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
};
export default UltraFuturisticServiceCardV2;        />;
      </div>;
    </motion && motion.div>;
  );
};
export default UltraFuturisticServiceCardV2;
<<<<<<< HEAD
=======
=======
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none'
origin/cursor/automate-test-improve-and-merge-code-2533
        />
      </div>
    </motion.div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
};

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default UltraFuturisticServiceCardV2;        />
      </div>
    </motion.div>
  )
}
export default UltraFuturisticServiceCardV2;

export default UltraFuturisticServiceCardV2;
<<<<<<< HEAD
export default UltraFuturisticServiceCardV2;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

};


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default UltraFuturisticServiceCardV2
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
};

export default UltraFuturisticServiceCardV2;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
};

export default UltraFuturisticServiceCardV2;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
