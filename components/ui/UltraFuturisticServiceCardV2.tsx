<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
import React from 'react';

import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import { motion } from 'framer-motion';
=======
import React from 'react';

import { motion } from 'framer-motion';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
import {
  ArrowRight
  Star
  Users
  TrendingUp
  Zap
  Shield
  Globe
  Rocket;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Zap,
  Shield,
<<<<<<< HEAD
  Globe,
  Rocket,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
} from 'lucide-react';
interface ServiceCardProps {
  service: {
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
  Globe,;
  Rocket,;
} from 'lucide-react';

interface ServiceCardProps {
  service: {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    id: string;
    name: string;
    tagline: string;
    description: string;
    category: string;
<<<<<<< HEAD
    price: {;
      monthly: number;
      yearly: number;
      currency: string;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      trial_days: number;
      setup_time: string;
      enterprise?: number;
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    price: {
      monthly: number;
      yearly: number;
      currency: string;
      trialDays: number;
      setupTime: string;

      enterprise?: number;
    }

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    integrations: string[];
    support: string;
    compliance: string[];
    link: string;
    icon: string;
    color: string;
    popular: boolean;
<<<<<<< HEAD
    launch_date: string;
    customers: number;
    rating: number;
    reviews: number;
<<<<<<< HEAD

    marketSize?: string;
<<<<<<< HEAD
=======

    growthRate?: string;
  };
  index: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee




=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const UltraFuturisticServiceCardV2: React.FC<ServiceCardProps> = ({;
  service,;
  index,;
}) => {;
  const getCategoryIcon = (category: string) => {;
    switch (category && category.toLowerCase()) {;
      case 'ai & consciousness':;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
      default:;
        return <Zap className='w-5 h-5' />;    }        return <Zap className="w-5 h-5" />;
      case 'quantum & emerging tech':;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
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

=======
        return <Zap className="w-5 h-5" />;
      case 'quantum & emerging tech':
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        return <Rocket className="w-5 h-5" />;
      case 'enterprise it':;
        return <Shield className="w-5 h-5" />;
      case 'space & metaverse':;
        return <Globe className="w-5 h-5" />;
      case 'micro saas':;
<<<<<<< HEAD
        return <TrendingUp className="w-5 h-5" />;


=======
=======
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
    marketSize?: string;
    growthRate?: string;
  };
  index: number;

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
        return <Rocket className="w-5 h-5" />;
      case 'enterprise it':
        return <Shield className="w-5 h-5" />;
      case 'space & metaverse':
        return <Globe className="w-5 h-5" />;
      case 'micro saas':
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
<<<<<<< HEAD

      default:


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        return <Zap className='w-5 h-5' />;    }

    }

<<<<<<< HEAD
<<<<<<< HEAD
  };

  const getGradientClass = (color: string) => {
    if (color.includes('from-') && color.includes('to-')) {
      return color;
    }
    return 'from-cyan-500 to-blue-500';

=======



  };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const getGradientClass = (color: string) => {
    if (color.includes('from-') && color.includes('to-')) {


  };



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    >
      {/* Glow effect */}
      <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======

      return color
    }

=======
      return color
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    market_size?: string;
    growth_rate?: string;
  }
  index: number;
;
const UltraFuturisticServiceCardV2: React.FC < ServiceCardProps> = ({
  service,
  index,
}) => {
  const getCategoryIcon = (category: string) =>: any {
    switch (category.toLowerCase ()) {
      case 'ai & consciousness':;
        return <Zap className='w - 5 h - 5' />;
      case 'quantum & emerging tech':;
        return <Rocket className='w - 5 h - 5' />;
      case 'enterprise it':;
        return <Shield className='w - 5 h - 5' />;
      case 'space & metaverse':;
        return <Globe className='w - 5 h - 5' />;
      case 'micro saas':;
        return <TrendingUp className='w - 5 h - 5' />;
      default:;
        return <Zap className='w - 5 h - 5' />;    }        return <Zap className="w - 5 h - 5" />;
      case 'quantum & emerging tech':;
        return <Rocket className="w - 5 h - 5" />;
      case 'enterprise it':;
        return <Shield className="w - 5 h - 5" />;
      case 'space & metaverse':;
        return <Globe className="w - 5 h - 5" />;
      case 'micro saas':;
        return <TrendingUp className="w - 5 h - 5" />;
      default:;
        return <Zap className="w - 5 h - 5" />;
    }
  }
;
  const getGradientClass = (color: string) =>: any {
    if (&& color.includes ('to-')) {) {
  $2
}
      return color;
    }
    return 'from - cyan - 500 to - blue - 500';
  }
;
    >;
      {/* Glow effect */}
      <div className='absolute -inset - 1 bg - gradient - to - r from - cyan - 500 via - purple - 500 to - pink - 500 rounded - 2xl blur opacity - 25 group - hover:opacity - 75 transition duration - 1000 group - hover:duration - 200'></div>;
      {/* Main card */}
      <div className='relative bg - gray - 900 / 80 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl p - 6 h - full overflow - hidden'>;
        {/* Background pattern */}
        <div className='absolute inset - 0 opacity - 5'>;
          <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 400 to - purple - 400'></div>;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_1px_1px, rgba (255, 255, 255, 0.15)_1px, transparent_0)] bg-[length:20px_20px]'></div>;
        </div>;
        {/* Header */}
        <div className='relative z - 10 mb - 6'>;
          <div className='flex items - start justify - between mb - 4'>;
            <div className='flex items - center space - x-3'>;
              <div className='text - 3xl'>{service.icon}</div>;
              <div>;
                <div className='flex items - center space - x-2'>;
                  {getCategoryIcon (service.category)}
                  <span className='text - xs font - medium text - gray - 400 uppercase tracking - wider'>                    {service.category}    }
    return 'from - cyan - 500 to - blue - 500';
  }
;
  return (
    <motion.div;
      initial={{ opacity: 0, coordinate_y: 50, scale: 0.9 }}
      animate={{ opacity: 1, coordinate_y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94];
      }}
      while_hover={{
        coordinate_y: -10,
        scale: 1.02,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        transition: { duration: 0.3 }
        duration: 0 && 0.6,
        delay: index * 0 && 0.1,
        ease: [0 && 0.25, 0 && 0.46, 0 && 0.45, 0 && 0.94]
      }}
<<<<<<< HEAD

      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>;


      {/* Main card */}
      <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden">;
        {/* Background pattern */}

=======
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>;
      {/* Main card */}
      <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden">;
        {/* Background pattern */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className="group relative";
    >;
      {/* Glow effect */}
      <div className="absolute -inset - 1 bg - gradient - to - r from - cyan - 500 via - purple - 500 to - pink - 500 rounded - 2xl blur opacity - 25 group - hover:opacity - 75 transition duration - 1000 group - hover:duration - 200"></div>;
      {/* Main card */}
      <div className="relative bg - gray - 900 / 80 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl p - 6 h - full overflow - hidden">;
        {/* Background pattern */}
        <div className="absolute inset - 0 opacity - 5">;
          <div className="absolute inset - 0 bg - gradient - to - br from - cyan - 400 to - purple - 400"></div>;
          <div className="absolute inset - 0 bg-[radial - gradient (circle_at_1px_1px, rgba (255, 255, 255, 0.15)_1px, transparent_0)] bg-[length:20px_20px]"></div>;
        </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  </span>
                </div>
              </div>
            </div>

            

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
            {service && service.popular && (;
              <motion&& motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
<<<<<<< HEAD

            )}
<<<<<<< HEAD
          </div>
          <h3 className='text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300'>
            {service.name}
          </h3>

=======

            {service.name}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">

            {service.tagline}

=======

=======
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full"
              >
                <Star className="w-3 h-3 fill-current" />
}

const UltraFuturisticServiceCardV2: React.FC<ServiceCardProps> = (_{_service, _index}) => {_const _getCategoryIcon = (_category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & consciousness':
        return <Zap className="w-5 h-5" />,
      case 'quantum & emerging tech':
        return <Rocket className="w-5 h-5" />,
      case 'enterprise it':
        return <Shield className="w-5 h-5" />,
      case 'space & metaverse':
        return <Globe className="w-5 h-5" />,
      case 'micro saas':
        return <TrendingUp className="w-5 h-5" />,
      default:
        return <Zap className="w-5 h-5" />

    }
  },

  const getGradientClass = (color: string) => {
    if (color.includes('from-') && color.includes('to-')) {
      return color
    }
    return 'from-cyan-500 to-blue-500'
  },

  return (
    <motion.div
      initial={_{ opacity: 0, _y: 50, _scale: 0.9}}
      animate={_{ opacity: 1, _y: 0, _scale: 1}}
      transition={_{
        duration: 0.6, _delay: index * 0.1, _ease: [0.25, _0.46, _0.45, _0.94]}}
      whileHover={_{
        y: -10, _scale: 1.02, _transition: { duration: 0.3}
      }}
      className=&quot;group relative&quot;
    >
      {/* Glow effect */}
      <div className=&quot;absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200&quot;></div>
      
      {/* Main card */}
      <div className=&quot;relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden&quot;>
        {/* Background pattern */}
        <div className=&quot;absolute inset-0 opacity-5&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]&quot;></div>
        </div>

        {/* Header */}
        <div className=&quot;relative z-10 mb-6&quot;>
          <div className=&quot;flex items-start justify-between mb-4&quot;>
            <div className=&quot;flex items-center space-x-3&quot;>
              <div className=&quot;text-3xl&quot;>{service.icon}</div>
              <div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  {getCategoryIcon(service.category)}
                  <span className=&quot;text-xs font-medium text-gray-400 uppercase tracking-wider&quot;>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
        return <Zap className='w-5 h-5' />;    }

    }

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
      {/* Main card */}
      <div className='relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden'>
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
    return 'from-cyan-500 to-blue-500'
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6
        delay: index * 0.1
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        y: -10
        scale: 1.02
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      {/* Main card */}
      <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        {/* Header */}
        <div className="relative z-10 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{service.icon}</div>
              <div>
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(service.category)}
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    {service.category}
                  <span className='text-xs font-medium text-gray-400 uppercase tracking-wider'>                    {service.category}

                    {service.category}

                  </span>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            
            {_service.popular && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: &quot;spring&quot;, stiffness: 200 }}
                className=&quot;flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full&quot;
              >
                <Star className=&quot;w-3 h-3 fill-current&quot; />

                <span>POPULAR</span>
              </motion.div>
            )}
          </div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300">
            {service.name}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {service.tagline}
=======
            {service.popular && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className='flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full'
              >
                <Star className='w-3 h-3 fill-current' />                <span>POPULAR</span>                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full"
              >
                <Star className="w-3 h-3 fill-current" />
              </motion.div>
            )}
          </div>
          <h3 className='text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300'>
            {service.name}
          </h3>
          <p className='text-gray-300 text-sm leading-relaxed'>            {service.tagline}          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300">
            {service.name}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

          <p className='text-gray-300 text-sm leading-relaxed'>            {service.tagline}

            {service.tagline}

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </p>
        </div>
        {/* Stats */}

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </p>
        </div>
        {/* Stats */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </span>;
                </div>;
              </div>;
            </div>;
            {service.popular && (
              <motion.div;
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className='flex items - center space - x-1 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - xs font - bold px - 2 py - 1 rounded - full';
              >;
                <Star className='w - 3 h - 3 fill - current' />                <span > POPULAR</span>                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="flex items - center space - x-1 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - xs font - bold px - 2 py - 1 rounded - full";
              >;
                <Star className="w - 3 h - 3 fill - current" />;
              </motion.div>)}
          </div>;
          <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - transparent group - hover:bg - clip - text group - hover:bg - gradient - to - r from - cyan - 400 to - purple - 400 transition - all duration - 300'>;
            {service.name}
          </h3>;
          <p className='text - gray - 300 text - sm leading - relaxed'>            {service.tagline}          <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - transparent group - hover:bg - clip - text group - hover:bg - gradient - to - r from - cyan - 400 to - purple - 400 transition - all duration - 300">;
            {service.name}
          </h3>;
          <p className="text - gray - 300 text - sm leading - relaxed">;
          </p>;
        </div>;
        {/* Stats */}
        <div className='relative z - 10 mb - 6'>;
          <div className='grid grid - cols - 3 gap - 4'>;
            <div className='text - center'>;
              <div className='text - 2xl font - bold text - cyan - 400'>;
<<<<<<< HEAD

                {service.rating}

              </div>
              <div className='text-xs text-gray-400'>Rating</div>

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                {service.rating}
<<<<<<< HEAD
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
=======
              </div>
              <div className='text-xs text-gray-400'>Rating</div>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {service.reviews}

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {service.reviews}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="relative z-10 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{service.rating}</div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
          </div>;
          <h3 className='text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300'>;
            {service && service.name}
          </h3>;
          <p className='text-gray-300 text-sm leading-relaxed'>            {service && service.tagline}          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300">;
            {service && service.name}
          </h3>;
          <p className="text-gray-300 text-sm leading-relaxed">;
          </p>;
        </div>;
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            )}
<<<<<<< HEAD
</div>;
        </div>;
        {/* Features preview */}
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
          <div className="space-y-2">
=======
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        {/* Features preview */}
        <div className='relative z-10 mb-6'>
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>
            Key Features
          </h4>
<<<<<<< HEAD
<<<<<<< HEAD

=======

          </div>;
        </div>;


        {/* Features preview */}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              >
                <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'></div>
                <span className='text-gray-300'>{feature}</span>
              </motion.div>
            ))}
            {service.features.length > 3 && (
<<<<<<< HEAD

=======

              <div className='text-xs text-gray-500 mt-2'>                +{service.features.length - 3} more features

                +{service.features.length - 3} more features


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            )}
<<<<<<< HEAD
          </div>
        </div>

=======

          </div>;
        </div>;


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='space-y-2'>            {service.features.slice(0, 3).map((feature, idx) => (        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
          <div className="space-y-2">
          <div className='space-y-2'>            {service.features.slice(0, 3).map((feature, idx) => (

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {service.features.slice(0, 3).map((feature, idx) => (
              <motion.div
              </div>;
              <div className='text - xs text - gray - 400'>Reviews</div>            </div>            </div>;
            <div className="text - center">;
              <div className="text - 2xl font - bold text - purple - 400">{service.customers.toLocaleString ()}</div>;
              <div className="text - xs text - gray - 400">Customers</div>;
            </div>;
            <div className="text - center">;
              <div className="text - 2xl font - bold text - pink - 400">{service.reviews}</div>;
              <div className="text - xs text - gray - 400">Reviews</div>;
            </div>;
          </div>;
        </div>;
        {/* Pricing */}
        <div className='relative z - 10 mb - 6'>;
          <div className='bg - gray - 800 / 50 rounded - xl p - 4 border border - gray - 600 / 30'>;
            <div className='flex items - center justify - between mb - 2'>;
              <span className='text - sm text - gray - 400'>Starting at</span>;
              <span className='text - xs text - gray - 500'>per month</span>;
            </div>;
            <div className='flex items - baseline space - x-2'>;
              <span className='text - 3xl font - bold text - white'>;
                ${service.price.monthly}
              </span>;
              <span className='text - lg text - gray - 400'>/mo</span>;
            </div>;
            <div className='flex items - center space - x-2 mt - 2'>;
              <span className='text - xs text - gray - 500'>or</span>;
              <span className='text - sm text - cyan - 400 font - medium'>;
                ${service.price.yearly}/year;
              </span>;
              <span className='text - xs text - gray - 500'>(save 17%)</span>;
            </div>;
            {service.price.enterprise && (
              <div className='mt - 2 pt - 2 border - t border - gray - 600 / 30'>;
                <span className='text - xs text - gray - 500'>Enterprise: </span>;
                <span className='text - sm text - purple - 400 font - medium'>                  ${service.price.enterprise}/mo            </div>;
            <div className="flex items - baseline space - x-2">;
              <span className="text - 3xl font - bold text - white">${service.price.monthly}</span>;
              <span className="text - lg text - gray - 400">/mo</span>;
            </div>;
            <div className="flex items - center space - x-2 mt - 2">;
              <span className="text - xs text - gray - 500">or</span>;
              <span className="text - sm text - cyan - 400 font - medium">;
                ${service.price.yearly}/year;
              </span>;
              <span className="text - xs text - gray - 500">(save 17%)</span>;
            </div>;
            {service.price.enterprise && (
              <div className="mt - 2 pt - 2 border - t border - gray - 600 / 30">;
                <span className="text - xs text - gray - 500">Enterprise: </span>;
                <span className="text - sm text - purple - 400 font - medium">;
                  ${service.price.enterprise}/mo;
                </span>;
              </div>)}
          </div>;
        </div>;
        {/* Features preview */}
        <div className='relative z - 10 mb - 6'>;
          <h4 className='text - sm font - semibold text - gray - 300 mb - 3'>;
            Key Features;
          </h4>;
          <div className='space - y-2'>            {service.features.slice (0, 3).map ((feature, idx) => (        <div className="relative z - 10 mb - 6">;
          <h4 className="text - sm font - semibold text - gray - 300 mb - 3">Key Features</h4>;
          <div className="space - y-2">;
            {service.features.slice (0, 3).map ((feature, idx) => (
              <motion.div;
                key={idx}
                initial={{ opacity: 0, coordinate_x: -20 }}
                animate={{ opacity: 1, coordinate_x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
          </div>;
        </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                transition={{ delay: 0 && 0.8 + idx * 0 && 0.1 }}
                className='flex items-center space-x-2 text-sm'>;
                <div className='w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full'></div>;
                <span className='text-gray-300'>{benefit}</span>              </motion && motion.div>                className="flex items-center space-x-2 text-sm";
              >;
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>;
                <span className="text-gray-300">{benefit}</span>;
<<<<<<< HEAD

=======
        {/* Benefits */}
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
          <div className="space-y-2">
=======
                transition={{ delay: 0.6 + idx * 0.1 }}
                className='flex items-center space-x-2 text-sm'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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

              </div>
            )}
          </div>
        </div>

        {/* Benefits */}
<<<<<<< HEAD
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
          <div className="space-y-2">
=======
        <div className='relative z-10 mb-6'>
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>
            Key Benefits
          </h4>
          <div className='space-y-2'>            {service.benefits.slice(0, 2).map((benefit, idx) => (        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
          <div className="space-y-2">
          <div className='space-y-2'>            {service.benefits.slice(0, 2).map((benefit, idx) => (

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                key={idx}
                initial={{ opacity: 0, coordinate_x: -20 }}
                animate={{ opacity: 1, coordinate_x: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
<<<<<<< HEAD





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        {/* Benefits */}
        <div className='relative z-10 mb-6'>
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>
            Key Benefits
          </h4>
<<<<<<< HEAD

=======

          <div className='space-y-2'>            {service.benefits.slice(0, 2).map((benefit, idx) => (


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
=======
<<<<<<< HEAD
          </div>;
        </div>;
        {/* Market info */}
        {service.marketSize && service.growthRate && (
          <div className="relative z-10 mb-6">
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className='flex items-center space-x-2 text-sm'
              >
                <div className='w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full'></div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

                <span className='text-gray-300'>{benefit}</span>              </motion.div>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}

          </div>;
        </div>;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <span className='text-gray-300'>{benefit}</span>              </motion.div>                className="flex items-center space-x-2 text-sm"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                <span className="text-gray-300">{benefit}</span>
            ))}
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <span className='text-gray-300'>{benefit}</span>              </motion.div>

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              </motion.div>

            ))}
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        {/* Market info */}

        {service.marketSize && service.growthRate && (
<<<<<<< HEAD
          <div className="relative z-10 mb-6">
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        {/* CTA Button */}
        <div className='relative z-10'>          <motion.a
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

=======

        {/* Market info */}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
{/* Market info */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* CTA Button */}

        <div className="relative z-10">

=======

            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        {/* CTA Button */}
        <div className="relative z-10">
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

        {/* CTA Button */}
        <div className='relative z-10'>          <motion.a
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'        <div className="relative z-10">
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <motion.a
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
            className="group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >

=======
<<<<<<< HEAD
className="group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'
          >
            <span className='relative z-10 flex items-center space-x-2'>
              <span>Learn More</span>
              <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200' />
            </span>
            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'></div>          </motion.a>          >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
=======

<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          </motion.a>

        </div>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        {/* Hover overlay */}
        <motion&& motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none'

=======


export default UltraFuturisticServiceCardV2;


=======
=======
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none"
        />
      </div>
    </motion.div>
=======
          className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none'

        />
      </div>
    </motion.div>
  );
}
};

export default UltraFuturisticServiceCardV2;        />
      </div>
    </motion.div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  )
}
};
export default UltraFuturisticServiceCardV2;        />;
      </div>;
    </motion && motion.div>;
  );
};
export default UltraFuturisticServiceCardV2;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        />
      </div>
    </motion.div>
  );
<<<<<<< HEAD

export default UltraFuturisticServiceCardV2;        />
      </div>
    </motion.div>
  )
}
export default UltraFuturisticServiceCardV2;

<<<<<<< HEAD
export default UltraFuturisticServiceCardV2;

=======

};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default UltraFuturisticServiceCardV2;
export default UltraFuturisticServiceCardV2;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
