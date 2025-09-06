
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';

import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import {
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
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
} from 'lucide-react';
interface ServiceCardProps {
  service: {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
    id: string;
    name: string;
    tagline: string;
    description: string;
    category: string;
    price: {;
      monthly: number;
      yearly: number;
      currency: string;
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
    integrations: string[];
    support: string;
    compliance: string[];
    link: string;
    icon: string;
    color: string;
    popular: boolean;
    launch_date: string;
    customers: number;
    rating: number;
    reviews: number;
<<<<<<< HEAD

    marketSize?: string;
    growthRate?: string;
  };
  index: number;




const UltraFuturisticServiceCardV2: React.FC<ServiceCardProps> = ({;
  service,;
  index,;
}) => {;
  const getCategoryIcon = (category: string) => {;
    switch (category && category.toLowerCase()) {;
      case 'ai & consciousness':;

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        return <Zap className='w-5 h-5' />;
      case 'quantum & emerging tech':;
        return <Rocket className='w-5 h-5' />;
      case 'enterprise it':;
        return <Shield className='w-5 h-5' />;
      case 'space & metaverse':;
        return <Globe className='w-5 h-5' />;
      case 'micro saas':;
        return <TrendingUp className='w-5 h-5' />;
<<<<<<< HEAD

=======
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Globe, Rocket } from 'lucide-react';
interface ServiceCardProps {
  service: {
    id: string,
    name: string,
    tagline: string,
    description: string,
    category: string,
    price: {
      monthly: number,
      yearly: number,
      currency: string,
      trialDays: number,
      setupTime: string,
      enterprise?: number
    },
    features: string[],
    benefits: string[],
    targetAudience: string[],
    marketPosition: string,
    competitors: string[],
    techStack: string[],
    realImplementation: boolean,
    implementationDetails: string,
    roi: string,
    useCases: string[],
    integrations: string[],
    support: string,
    compliance: string[],
    link: string,
    icon: string,
    color: string,
    popular: boolean,
    launchDate: string,
    customers: number,
    rating: number,
    reviews: number,
marketSize?: string;
    growthRate?: string
  };
  index: number
}
const UltraFuturisticServiceCardV2: React.FC<ServiceCardProps> = ({ service, index }) => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & consciousness':
        return <Zap className='w-5 h-5' />;
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
      case 'quantum & emerging tech':

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        return <Rocket className="w-5 h-5" />;
      case 'enterprise it':;
        return <Shield className="w-5 h-5" />;
      case 'space & metaverse':;
        return <Globe className="w-5 h-5" />;
      case 'micro saas':;
        return <TrendingUp className="w-5 h-5" />;
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======

      default:


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        return <Zap className='w-5 h-5' />;    }

    }

<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  };

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
=======
  };
  const getGradientClass = (color: string) => {;
    if (color && color.includes('from-') && color && color.includes('to-')) {;
      return color;
    }
    return 'from-cyan-500 to-blue-500';
  };
    >;
      {/* Glow effect */}
      <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>;
      {/* Main card */}
      <div className='relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden'>;
        {/* Background pattern */}
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
                  <span className='text-xs font-medium text-gray-400 uppercase tracking-wider'>                    {service.category}    }
=======
      {/* Main card */}
      <div className='relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden'>;
        {/* Background pattern */}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
    return 'from-cyan-500 to-blue-500';
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
        <div className="relative z - 10 mb - 6">;
          <div className="flex items - start justify - between mb - 4">;
            <div className="flex items - center space - x-3">;
              <div className="text - 3xl">{service.icon}</div>;
              <div>;
                <div className="flex items - center space - x-2">;
                  {getCategoryIcon (service.category)}
                  <span className="text - xs font - medium text - gray - 400 uppercase tracking - wider">;
                    {service.category}
<<<<<<< HEAD
                  <span className='text-xs font-medium text-gray-400 uppercase tracking-wider'>                    {service.category}

                    {service.category}

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  </span>
                </div>
              </div>
            </div>

            

            {service.popular && (
              <motion.div
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
            )}
          </div>
<<<<<<< HEAD
          <h3 className='text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300'>
            {service.name}
          </h3>
          <p className='text-gray-300 text-sm leading-relaxed'>            {service.tagline}          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300">
            {service.name}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">


          <p className='text-gray-300 text-sm leading-relaxed'>            {service.tagline}

            {service.tagline}

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300">
            {service.name}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          </p>
        </div>
        {/* Stats */}
                {service.rating}
<<<<<<< HEAD

              </div>
              <div className='text-xs text-gray-400'>Rating</div>

<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-purple-400'>
                {service.customers.toLocaleString()}
              </div>
              <div className='text-xs text-gray-400'>Customers</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-pink-400'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                {service.reviews}
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
        {/* Pricing */}
            )}
<<<<<<< HEAD
          </div>
        </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
          </div>;
        </div>;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {/* Features preview */}
        <div className='relative z-10 mb-6'>
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>
            Key Features
          </h4>
          <div className='space-y-2'>            {service.features.slice(0, 3).map((feature, idx) => (        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
          <div className="space-y-2">
          <div className='space-y-2'>            {service.features.slice(0, 3).map((feature, idx) => (

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            {service.features.slice(0, 3).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className='flex items-center space-x-2 text-sm'

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              >
                <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'></div>
                <span className='text-gray-300'>{feature}</span>
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <div className='text-xs text-gray-500 mt-2'>                +{service.features.length - 3} more features              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-gray-500 mt-2">
                +{service.features.length - 3} more features
              <div className='text-xs text-gray-500 mt-2'>                +{service.features.length - 3} more features

                +{service.features.length - 3} more features

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
                transition={{ delay: 0 && 0.8 + idx * 0 && 0.1 }}
                className='flex items-center space-x-2 text-sm'>;
                <div className='w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full'></div>;
                <span className='text-gray-300'>{benefit}</span>              </motion && motion.div>                className="flex items-center space-x-2 text-sm";
              >;
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>;
                <span className="text-gray-300">{benefit}</span>;
<<<<<<< HEAD

=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
              <div className='text-xs text-gray-500 mt-2'>                +{service.features.length - 3} more features

                +{service.features.length - 3} more features

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              </div>
            )}
          </div>
        </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {/* Benefits */}
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
          <div className="space-y-2">
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <motion.div
                className='flex items - center space - x-2 text - sm';
              >;
                <div className='w - 2 h - 2 bg - gradient - to - r from - cyan - 400 to - purple - 400 rounded - full'></div>;
                <span className='text - gray - 300'>{feature}</span>;
              </motion.div>))}
            {service.features.length > 3 && (
              <div className='text - xs text - gray - 500 mt - 2'>                +{service.features.length - 3} more features              >;
                <div className="w - 2 h - 2 bg - gradient - to - r from - cyan - 400 to - purple - 400 rounded - full"></div>;
                <span className="text - gray - 300">{feature}</span>;
              </motion.div>))}
            {service.features.length > 3 && (
              <div className="text - xs text - gray - 500 mt - 2">;
                +{service.features.length - 3} more features;
              </div>)}
          </div>;
        </div>;
        {/* Benefits */}
        <div className='relative z - 10 mb - 6'>;
          <h4 className='text - sm font - semibold text - gray - 300 mb - 3'>;
            Key Benefits;
          </h4>;
          <div className='space - y-2'>            {service.benefits.slice (0, 2).map ((benefit, idx) => (        <div className="relative z - 10 mb - 6">;
          <h4 className="text - sm font - semibold text - gray - 300 mb - 3">Key Benefits</h4>;
          <div className="space - y-2">;
            {service.benefits.slice (0, 2).map ((benefit, idx) => (
              <motion.div;

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                key={idx}
                initial={{ opacity: 0, coordinate_x: -20 }}
                animate={{ opacity: 1, coordinate_x: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
<<<<<<< HEAD





<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {/* Benefits */}
        <div className='relative z-10 mb-6'>
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>
            Key Benefits
          </h4>
          <div className='space-y-2'>            {service.benefits.slice(0, 2).map((benefit, idx) => (        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
          <div className="space-y-2">
          <div className='space-y-2'>            {service.benefits.slice(0, 2).map((benefit, idx) => (

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className='flex items-center space-x-2 text-sm'
              >
                <div className='w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full'></div>
                <span className='text-gray-300'>{benefit}</span>              </motion.div>                className="flex items-center space-x-2 text-sm"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                <span className="text-gray-300">{benefit}</span>
            ))}
          </div>
        </div>
                <span className='text-gray-300'>{benefit}</span>              </motion.div>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          </div>;
        </div>;
=======
                <span className='text-gray-300'>{benefit}</span>              </motion.div>

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {/* Market info */}

        {service.marketSize && service.growthRate && (
          <div className="relative z-10 mb-6">
            <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-600/20">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Market Size</span>
                <span className="text-cyan-400 font-medium">{service.marketSize}</span>
              </div>
              <div className="flex items-center justify-between text-xs mt-1">
                <span className="text-gray-400">Growth Rate</span>
                <span className="text-green-400 font-medium">{service.growthRate}</span>
              </div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className='relative z-10'>          <motion.a
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'        <div className="relative z-10">
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          <motion.a
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'
          >

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            <span className="relative z-10 flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </span>
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

          </motion.a>

        </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Hover overlay */}
        <motion&& motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
<<<<<<< HEAD
          className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none'

<<<<<<< HEAD
=======

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export default UltraFuturisticServiceCardV2;
                className='flex items - center space - x-2 text - sm';
              >;
                <div className='w - 2 h - 2 bg - gradient - to - r from - green - 400 to - emerald - 400 rounded - full'></div>;
                <span className='text - gray - 300'>{benefit}</span>              </motion.div>                className="flex items - center space - x-2 text - sm";
              >;
                <div className="w - 2 h - 2 bg - gradient - to - r from - green - 400 to - emerald - 400 rounded - full"></div>;
                <span className="text - gray - 300">{benefit}</span>))}
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
                </span>              </div>          <div className="relative z - 10 mb - 6">;
            <div className="bg - gray - 800 / 30 rounded - lg p - 3 border border - gray - 600 / 20">;
              <div className="flex items - center justify - between text - xs">;
                <span className="text - gray - 400">Market Size</span>;
                <span className="text - cyan - 400 font - medium">{service.market_size}</span>;
              </div>;
              <div className="flex items - center justify - between text - xs mt - 1">;
                <span className="text - gray - 400">Growth Rate</span>;
                <span className="text - green - 400 font - medium">{service.growth_rate}</span>;
            </div>;
          </div>)}
        {/* CTA Button */}
        <div className='relative z - 10'>          <motion.a;
            href={service.link}
            while_hover={{ scale: 1.05 }}
            while_tap={{ scale: 0.95 }}
            className='group / btn relative w - full inline - flex items - center justify - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white font - semibold rounded - xl overflow - hidden transition - all duration - 300 hover:shadow - lg hover:shadow - cyan - 500 / 25'        <div className="relative z - 10">;
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
            <span className="relative z - 10 flex items - center space - x-2">;
              <span > Learn More</span>;
              <ArrowRight className="w - 4 h - 4 group - hover / btn:translate - x-1 transition - transform duration - 200" />;
            </span>;
            {/* Button glow effect */}
            <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - purple - 400 opacity - 0 group - hover / btn:opacity - 100 transition - opacity duration - 300"></div>;
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
}
;
export default UltraFuturisticServiceCardV2;        />;
      </div>;
    </motion.div>);
}
;
export default UltraFuturisticServiceCardV2;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        />
      </div>
    </motion.div>
  );
<<<<<<< HEAD
}
};

export default UltraFuturisticServiceCardV2;        />
      </div>
    </motion.div>
  )
}
export default UltraFuturisticServiceCardV2;

export default UltraFuturisticServiceCardV2;
export default UltraFuturisticServiceCardV2;
=======

};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
