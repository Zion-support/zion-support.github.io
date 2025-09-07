<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import React from 'react';

<<<<<<< HEAD

=======
import { motion } from 'framer-motion';
import {
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
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { motion  } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Globe, Rocket } from 'lucide-react';
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { motion } from 'framer-motion';
import {
origin/cursor/automate-test-improve-and-merge-code-2533
  ArrowRight
  Star
  Users
  TrendingUp
  Zap
  Shield
  Globe
import { ArrowRight;
  Star;
  Users;
  TrendingUp;
  Zap;
  Shield;
  Globe;
  Rocket;
  ArrowRight,Star,Users,TrendingUp,Zap,Shield,Globe,Rocket,} from 'lucide-react';
interface ServiceCardProps  {service: {import {ArrowRight,Star,Users,TrendingUp,Zap,Shield,Globe,Rocket,} from 'lucide-react';
interface ServiceCardProps  {service: {id: string;
  Rocket;
  ArrowRight,
Star
  Users,
TrendingUp
  Zap,

    name: string;
    tagline: string;
    description: string;
    category: string;price: {monthly: number;
      yearly: number;
      currency: string;
      trialDays: number;

} from 'lucide-react';
<<<<<<< HEAD
interface ServiceCardProps {}
  service: {}
=======
interface ServiceCardProps {
  service: {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {;
  ArrowRight,;
  Star,;
  Users,;
  TrendingUp,;
  Zap,;
  Shield,;
  Globe,;
  Rocket,;'
} from 'lucide-react';
interface ServiceCardProps {;
  service: {;
<<<<<<< HEAD
=======
  Globe,;
  Rocket,;
} from 'lucide-react';

interface ServiceCardProps {
  service: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    id: string;

    name: string;
    tagline: string;
    description: string;
<<<<<<< HEAD
    category: string;price: {monthly: number;
      yearly: number;
      currency: string;
      trialDays: number;
      setupTime: string;
      enterprise?: number;
    },features: string[];
=======
    category: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    price: {;
      monthly: number;
      yearly: number;
      currency: string;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      trial_days: number;
      setup_time: string;
      enterprise?: number;
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    features: string[];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    benefits: string[];
    targetAudience: string[];
    marketPosition: string;
    competitors: string[];
    techStack: string[];
    realImplementation: boolean;
    implementationDetails: string;
    roi: string;
<<<<<<< HEAD
    category: string;
=======
    use_cases: string[];
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    integrations: string[];
    useCases: string[];integrations: string[];
    support: string;
    compliance: string[];
    link: string;
    icon: string;
    color: string;
    popular: boolean;return <Zap className='w-5 h-5' />;
    popular: boolean;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    launch_date: string;
    customers: number;
    rating: number;
    reviews: number;

    marketSize?: string;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        return <Zap className='w-5 h-5' />;
    popular: boolean;return <Zap className='w-5 h-5' />;
    popular: boolean;'
        return <Zap className='w-5 h-5' />;'
      case 'quantum & emerging tech':;'
        return <Rocket className='w-5 h-5' />;'
      case 'enterprise it':;'
        return <Shield className='w-5 h-5' />;'
      case 'space & metaverse':;'
        return <Globe className='w-5 h-5' />;'
      case 'micro saas':;'
      case 'quantum & emerging tech':;
        return <Rocket className='w-5 h-5' />;
      case 'enterprise it':;
        return <Shield className='w-5 h-5' />;
      case 'space & metaverse':;
        return <Globe className='w-5 h-5' />;
      case 'micro saas':;
        return <TrendingUp className='w-5 h-5' />;
<<<<<<< HEAD
        return <Rocket className="w-5 h-5" />;
      case 'enterprise it':;
        return <Shield className="w-5 h-5" />;
      case 'space & metaverse':;
        return <Globe className="w-5 h-5" />;
      case 'micro saas':;
        return <TrendingUp className="w-5 h-5" />;default:;
        return <Zap className='w-5 h-5' />;    }launchDate: string;
        return <TrendingUp className='w-5 h-5' />;
        return <Rocket className="w-5 h-5" />;'
      case 'enterprise it':;"
        return <Shield className="w-5 h-5" />;'
      case 'space & metaverse':;"
        return <Globe className="w-5 h-5" />;'
      case 'micro saas':;"
        return <TrendingUp className="w-5 h-5" />;

    "launchDate": string;

'
        return <Zap className='w-5 h-5' />;    }

    launchDate: string;

    "launchDate": string;


    customers: number;
    rating: number;
    reviews: number;
    marketSize?: string;
        return <TrendingUp className="w-5 h-5" />;
>>>>>>> merged-prs-20250907-203621
import React from 'react';
import { motion } from framer-motion;
=======
<<<<<<< HEAD
      default:;
        return <Zap className='w-5 h-5' />;    }        return <Zap className="w-5 h-5" />;
      case 'quantum & emerging tech':;
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
    marketSize?: string,
    growthRate?: string
  },
  index: number}

<<<<<<< HEAD
const UltraFuturisticServiceCardV2: React.FC<ServiceCardProps> = ({ service, index }) => {
  const getCategoryIcon = $2;
      case 'quantum & emerging tech':
=======
=======
marketSize?: string;
    growthRate?: string
  };
  index: number
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const UltraFuturisticServiceCardV2: React.FC<ServiceCardProps> = ({ service, index }) => {
  const getCategoryIcon = $2;
      case 'quantum & emerging tech':
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
        return <Rocket className = $2;
      case 'enterprise it':
        return <Shield className = $2;
      case 'space & metaverse':
        return <Globe className = $2;
      case 'micro saas':
        return <TrendingUp className = $2;
<<<<<<< HEAD
      default:
        return <Zap className = $2;
  const getGradientClass = $2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1}}
      transition = $2;
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover = $2;
        scale: 1.02,
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length: 20px_20px]"></div>
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
=======
=======
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return <Rocket className="w-5 h-5" />;
      case 'enterprise it':;
        return <Shield className="w-5 h-5" />;
      case 'space & metaverse':;
        return <Globe className="w-5 h-5" />;
      case 'micro saas':;
<<<<<<< HEAD
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
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />
    }
=======
        return <TrendingUp className="w-5 h-5" />;


    }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      default:
        return <Zap className='w-5 h-5' />;}}const getGradientClass = (color: string) => {if (color.includes('from-') && color.includes('to-')) {}return color;
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return <Zap className='w-5 h-5' />;    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


import React from 'react';
import { motion   } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Globe, Rocket  } from 'lucide-react';
import { motion  } from 'framer-motion';

import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Globe, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  ArrowRight;
Star,
Users;
TrendingUp,
Zap;
Shield,
Globe;}
Rocket;}
  ArrowRight,Star,Users,TrendingUp,Zap,Shield,Globe,Rocket} from 'lucide-react';

interface ServiceCardProps  {service: {import {ArrowRight,Star,Users,TrendingUp,Zap,Shield,Globe,Rocket} from 'lucide-react';

interface ServiceCardProps  {service: {id: string;
    name: string;
    tagline: string;
    description: string;

    category: string;

    price: {
      monthly: number;

      yearly: number;
      currency: string;
      trialDays: number;
      setupTime: string;}
      enterprise?: number;}
    },features: string[];
    benefits: string[];
    targetAudience: string[];
    marketPosition: string;
    competitors: string[];
    techStack: string[];
    realImplementation: boolean;
    implementationDetails: string;
    roi: string;

    useCases: string[];
    integrations: string[];

    support: string;
    compliance: string[];
    link: string;
    icon: string;
    color: string;

    popular: boolean;

    launchDate: string;

    customers: number;
    rating: number;
    reviews: number;
    marketSize?: string;

        return <Zap className='w-5 h-5'    />;
>>>>>>> origin/chore/fix-lint-and-merge
    }




  };

<<<<<<< HEAD
<<<<<<< HEAD
  const getGradientClass = (color: string) => {'
    if (color.includes('from-') && color.includes('to-')) {}
  };

return color;
    }
    if (color.includes('from-') && color.includes('to-')) {'
=======
const getGradientClass = (
    if (color.includes('from-') && color.includes('to-')) {
>>>>>>> origin/chore/fix-lint-and-merge
;
  return color;) => {
  return $3;}
}
    }
    return 'from-cyan-500 to-blue-500';
  }
    >

      {/* Glow effect */}
<<<<<<< HEAD
      <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>;
      {/* Main card */}'
      <div className='relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden'>;
        {/* Background pattern */}'
    return 'from-cyan-500 to-blue-500'
  }'
        <div className='absolute inset-0 opacity-5'>;'
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400'></div>;'
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0 && 0.15)_1px,transparent_0)] bg-[length:20px_20px]'></div>;
        </div>;
        {/* Header */}'
        <div className='relative z-10 mb-6'>;'
          <div className='flex items-start justify-between mb-4'>;'
            <div className='flex items-center space-x-3'>;'
              <div className='text-3xl'>{service.icon}</div>;'
              <div>;
                <div className='flex items-center space-x-2'>;'
                  {getCategoryIcon(service.category)}
                  <span className='text-xs font-medium text-gray-400 uppercase tracking-wider'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'    /></div>;
=======
  const getGradientClass = (color: string) => {
    if (color.includes('from-') && color.includes('to-')) {


  };



    >
      {/* Glow effect */}
      <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

      return color
    }

<<<<<<< HEAD
      return color
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Main card */}
      <div className='relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden'    />;

        {/* Background pattern */}

<<<<<<< HEAD
        <div className='absolute inset-0 opacity-5'    />
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400'    /></div>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length: 20px_20px]'    /></div>
        </div>

        {/* Header *}
}
        <div className='relative z-10 mb-6'    />;
          <div className='flex items-start justify-between mb-4'    />;
            <div className='flex items-center space-x-3'    />;
              <div className='text-3xl'    />{service.icon}</div>;
              <div    />;
                <div className='flex items-center space-x-2'    />;
                  {getCategoryIcon(service.category)}

                  <span className='text-xs font-medium text-gray-400 uppercase tracking-wider'    />
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                    {service.category}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======


                  <span className='text-xs font-medium text-gray-400 uppercase tracking-wider'>                    {service.category}

                    {service.category}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </span>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            
            {service.popular && (
              <motion.div
                initial={{ scale: 0}}
                animate={{ scale: 1}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200}}
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full"
              >
                <Star className="w-3 h-3 fill-current" />
                <span>POPULAR</span>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <span className='text-xs font-medium text-gray-400 uppercase tracking-wider'>;
                    {service.category}
                  </span>;
                </div>;
              </div>;
            </div>;
            {service.popular && (<motion.div;
=======

            

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {service.popular && (
              <motion.div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
            

        <div className="absolute inset-0 opacity-5">;"
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400"></div>;"
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0 && 0.15)_1px,transparent_0)] bg-["length":20px_20px]"></div>;"
        </div>;
        {/* Header */}
        <div className="relative z-10 mb-6">;"
          <div className="flex items-start justify-between mb-4">;"
            <div className="flex items-center space-x-3">;"
              <div className="text-3xl">{service && service.icon}</div>;
              <div>;"
                <div className="flex items-center space-x-2">;
                  {getCategoryIcon(service && service.category)}"
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">;
=======


            {service.popular && (
              <motion.div;
        <div className=\"absolute inset-0 opacity-5\"    />;"
          <div className=\"absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400\"    /></div>;"
          <div className=\"absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0 && 0.15)_1px,transparent_0)] bg-[length:20px_20px]\"    /></div>;}
        </div>;}
        {/* Header */}"
        <div className=\"relative z-10 mb-6\"    />;"
          <div className=\"flex items-start justify-between mb-4\"    />;"
            <div className=\"flex items-center space-x-3\"    />;"
              <div className=\"text-3xl\"    />{service && service.icon}</div>;
              <div    />;"
                <div className=\"flex items-center space-x-2\"    />;
                  {getCategoryIcon(service && service.category)}"
                  <span className=\"text-xs font-medium text-gray-400 uppercase tracking-wider\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
                    {service && service.category}
                  </span>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
=======
            {service && service.popular && (;
              <motion&& motion.div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                initial={{ scale: 0 }}

<<<<<<< HEAD
                animate={{ scale: 1 }
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {service.name}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">

            {service.tagline}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD

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
                    {service.category}
                  <span className='text-xs font-medium text-gray-400 uppercase tracking-wider'>                    {service.category}

                    {service.category}

                  </span>
                </div>
              </div>
            </div>
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
=======
=======
transition={{ delay: 0.5, type: 'spring'}
  stiffness: 200 }}
                className='flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full'
              >
                <Star className='w-3 h-3 fill-current'    />
                <span    />POPULAR</span>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              </motion.div>
            )}
          </div>

<<<<<<< HEAD
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300">
            {service.name}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed">
=======
<<<<<<< HEAD
            
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          <p className='text-gray-300 text-sm leading-relaxed'>            {service.tagline}

            {service.tagline}

<<<<<<< HEAD
          </p>
        </div>
        {/* Stats */}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          </p>
        </div>
        {/* Stats */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </div>;
<h3 className='text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300'    />;
            {service.name}
          </h3>;
<<<<<<< HEAD

=======
          <p className='text-gray-300 text-sm leading-relaxed'    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
            {service.tagline}
          </p>
        </div>

        {/* Stats */}
<<<<<<< HEAD
        <div className="relative z-10 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{service.rating}</div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
=======
<<<<<<< HEAD
=======
        <div className='relative z - 10 mb - 6'>;
          <div className='grid grid - cols - 3 gap - 4'>;
            <div className='text - center'>;
              <div className='text - 2xl font - bold text - cyan - 400'>;
<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<div className='relative z-10 mb-6'    />
          <div className='grid grid-cols-3 gap-4'    />
            <div className='text-center'    />
              <div className='text-2xl font-bold text-cyan-400'    />
                {service.rating}
              </div>
<<<<<<< HEAD
              <div className='text-xs text-gray-400'    />Rating</div>
=======
              <div className='text-xs text-gray-400'>Rating</div>

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>
<<<<<<< HEAD
=======
            <div className='text-center'    />
              <div className='text-2xl font-bold text-purple-400'    />
>>>>>>> origin/chore/fix-lint-and-merge

                {service.customers.toLocaleString()}
<<<<<<< HEAD
              </div>;
              <div className='text-xs text-gray-400'    />Customers</div>;
            </div>;
<<<<<<< HEAD

=======
            <div className='text-center'    />;
              <div className='text-2xl font-bold text-pink-400'    />;
              </div>;
              <div className='text - xs text - gray - 400'    />Rating</div>;
            </div>;
            <div className='text - center'    />;
              <div className='text - 2xl font - bold text - purple - 400'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                {service.customers.toLocaleString ()}
              </div>;
              <div className='text - xs text - gray - 400'    />Customers</div>;
            </div>;
<<<<<<< HEAD
=======
            <div className='text - center'    />;
              <div className='text - 2xl font - bold text - pink - 400'    />;
>>>>>>> origin/chore/fix-lint-and-merge

                {service.reviews}

<<<<<<< HEAD
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300">
            {service.name}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            {service.tagline}
          </p>
        </div>

        {/* Stats */}
=======
              </div>
              <div className='text-xs text-gray-400'>Customers</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-pink-400'>
<<<<<<< HEAD
                {service.reviews}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {service.reviews}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <div className="relative z-10 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{service.rating}</div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{service.customers.toLocaleString()}</div>
              <div className="text-xs text-gray-400">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">{service.reviews}</div>
<<<<<<< HEAD
=======
                animate={{ scale: 1 }}
            {service.name}
          </h3>"
          <p className="text-gray-300 text-sm leading-relaxed">

'
          <p className='text-gray-300 text-sm leading-relaxed'>            {service.tagline}

            {service.tagline}

"
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300">
            {service.name}
          </h3>"
          <p className="text-gray-300 text-sm leading-relaxed">
          </p>
        </div>
        {/* Stats */}
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

              </div>'
              <div className='text-xs text-gray-400'>Rating</div>

            </div>'
            <div className='text-center'>'
              <div className='text-2xl font-bold text-purple-400'>
                {service.customers.toLocaleString()}
              </div>'
              <div className='text-xs text-gray-400'>Customers</div>
            </div>'
            <div className='text-center'>'
              <div className='text-2xl font-bold text-pink-400'>
              </div>;'
              <div className='text - xs text - gray - 400'>Rating</div>;
            </div>;'
            <div className='text - center'>;'
              <div className='text - 2xl font - bold text - purple - 400'>;
                {service.customers.toLocaleString ()}
              </div>;'
              <div className='text - xs text - gray - 400'>Customers</div>;
            </div>;'
            <div className='text - center'>;'
              <div className='text - 2xl font - bold text - pink - 400'>;
                {service.reviews}"
            <div className="text-center">"
              <div className="text-2xl font-bold text-purple-400">{service.customers.toLocaleString()}</div>"
              <div className="text-xs text-gray-400">Customers</div>
            </div>"
            <div className="text-center">"
              <div className="text-2xl font-bold text-pink-400">{service.reviews}</div>"
>>>>>>> merged-prs-20250907-203621
              <div className="text-xs text-gray-400">Reviews</div>
            </div>
          </div>
        </div>
<<<<<<< HEAD

        {/* Pricing */}
        <div className="relative z-10 mb-6">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Starting at</span>
              <span className="text-xs text-gray-500">per month</span>
=======
<<<<<<< HEAD
                {service.reviews}<div className="text-center">;
              <div className="text-2xl font-bold text-purple-400">{service.customers.toLocaleString()}</div>;
              <div className="text-xs text-gray-400">Customers</div>;
            </div>;
            <div className="text-center">;
              <div className="text-2xl font-bold text-pink-400">{service.reviews}</div>;
              <div className="text-xs text-gray-400">Reviews</div>;
            </div>;
          </div>;
=======
          </div>;
          <h3 className='text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300'>;
            {service && service.name}
          </h3>;
          <p className='text-gray-300 text-sm leading-relaxed'>            {service && service.tagline}          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300">;
            {service && service.name}
          </h3>;
          <p className="text-gray-300 text-sm leading-relaxed">;
          </p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
            </div>
          </div>
        </div>

              <div className="text-xs text-gray-400">Reviews</div>;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
          </div>;
        </div>;</div>;
              <div className='text-xs text-gray-400'>Reviews</div>;
            </div>;
          </div>;
        </div>;
=======
              </div>
              <div className='text-xs text-gray-400'    />Reviews</div>
            </div>
          </div>
        </div>
>>>>>>> origin/chore/fix-lint-and-merge
=======
        {/* Pricing */}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
            )}
          </div>
        </div>


        {/* Features preview */}
        <div className='relative z-10 mb-6'>
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>
            Key Features
          </h4>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        {/* Pricing */}
<div className='relative z-10 mb-6'    />;
          <div className='bg-gray-800/50 rounded-xl p-4 border border-gray-600/30'    />;
            <div className='flex items-center justify-between mb-2'    />;
              <span className='text-sm text-gray-400'    />Starting at</span>;
              <span className='text-xs text-gray-500'    />per month</span>;
            </div>;
            <div className='flex items-baseline space-x-2'    />;
              <span className='text-3xl font-bold text-white'    />;
                ${service.price.monthly}
              </span>;
              <span className='text-lg text-gray-400'    />/mo</span>;
            </div>;
            <div className='flex items-center space-x-2 mt-2'    />;
              <span className='text-xs text-gray-500'    />or</span>;
              <span className='text-sm text-cyan-400 font-medium'    />;
                ${service.price.yearly}/year;
              </span>;
              <span className='text-xs text-gray-500'    />(save 17%)</span>;
            </div>;
            {service.price.enterprise && (<div className='mt-2 pt-2 border-t border-gray-600/30'    />;
                <span className='text-xs text-gray-500'    />Enterprise: </span>;}
                <span className='text-sm text-purple-400 font-medium'    />;}
                  ${service.price.enterprise}/mo;
                </span>;
              </div>;
            )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          </div>
        </div>
        {/* Features preview */}
<div className='relative z-10 mb-6'    />
          <h4 className='text-sm font-semibold text-gray-300 mb-3'    />
            Key Features;
          </h4>

          <div className='space-y-2'    />
            {service.features.slice(0, 3).map((feature, idx) => (}
              <motion.div;}
key={idx}
                initial={{ opacity: 0, x: -20 }
}
                animate={{ opacity: 1, x: 0 }}

<<<<<<< HEAD
                transition={{ "delay": 0.6 + idx * 0.1 }}
className='flex items-center space-x-2 text-sm''
              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                <span className="text-gray-300">{feature}</span>
              </motion.div>
          </div>;
        </div>;
=======
                transition={{ delay: 0.6 + idx * 0.1 }}
className='flex items-center space-x-2 text-sm'
                  />
                <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'    /></div>
                <span className='text-gray-300'    />{feature}</span>
              </motion.div>

            )
}
            {service.features.length > 3 && (<div className='text-xs text-gray-500 mt-2'    />;}
                +{service.features.length - 3} more features;
              <div className='text-xs text-gray-500 mt-2'    />                +{service.features.length - 3} more features;
                +{service.features.length - 3} more features;
              </div>;
>>>>>>> origin/chore/fix-lint-and-merge
        {/* Features preview */}
        <div className='relative z-10 mb-6'    />;
          <h4 className='text-sm font-semibold text-gray-300 mb-3'    />;
            Key Features;
          </h4>;"
          <div className='space-y-2'    />            {service && service.features.slice(0, 3).map((feature, idx) => (        <div className=\"relative z-10 mb-6\"    />;"
          <h4 className=\"text-sm font-semibold text-gray-300 mb-3\"    />Key Features</h4>;"
          <div className=\"space-y-2\"    />;}
            {service && service.features.slice(0, 3).map((feature, idx) => (<motion&& motion.div;}
                key={idx}
                initial={{ opacity: 0, x: -20 }
}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 && 0.6 + idx * 0 && 0.1 }
}
                className='flex items-center space-x-2 text-sm'    />;
                <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'    /></div>;
                <span className='text-gray-300'    />{feature}</span>;
              </motion && motion.div>;
            ))}
            {service && service.features.length > 3 && (<div className='text-xs text-gray-500 mt-2'    />                +{service && service.features.length - 3} more features              >;"
                <div className=\"w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full\"    /></div>;"
                <span className=\"text-gray-300\"    />{feature}</span>;
              </motion && motion.div>;
            ))}"
            {service && service.features.length > 3 && (<div className=\"text-xs text-gray-500 mt-2\"    />;}
                +{service && service.features.length - 3} more features;
              </div>;
                key={idx}
                initial={{ opacity: 0, coordinate_x: -20 }
}
                animate={{ opacity: 1, coordinate_x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
            )}
        {/* Benefits *}
}
        <div className='relative z-10 mb-6'    />;
          <h4 className='text-sm font-semibold text-gray-300 mb-3'    />;
            Key Benefits;
          </h4>;"
          <div className='space-y-2'    />            {service && service.benefits.slice(0, 2).map((benefit, idx) => (        <div className=\"relative z-10 mb-6\"    />;"
          <h4 className=\"text-sm font-semibold text-gray-300 mb-3\"    />Key Benefits</h4>;"
          <div className=\"space-y-2\"    />;}
            {service && service.benefits.slice(0, 2).map((benefit, idx) => (<motion&& motion.div;}
                key={idx}
                initial={{ opacity: 0, x: -20 }
}
                animate={{ opacity: 1, x: 0 }
}
                  />;
                <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'    /></div>;
                <span className='text-gray-300'    />{feature}</span>;
              </motion.div>;
            ))}
<<<<<<< HEAD
            {service.features.length > 3 && (
              <div className="text-xs text-gray-500 mt-2">
                +{service.features.length - 3} more features
        </div>;


              </div>
              <div className='text-xs text-gray-400'>Reviews</div>
>>>>>>> merged-prs-20250907-203621
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
=======
            {service.features.length > 3 && (</div>;}
>>>>>>> origin/chore/fix-lint-and-merge
            )}

          </div>
        </div>
<<<<<<< HEAD

        {/* Features preview */}
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
          <div className="space-y-2">
            {service.features.slice(0, 3).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0}}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="flex items-center space-x-2 text-sm"
              >
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Features preview */}
<div className='relative z-10 mb-6'>
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>
            Key Features;
          </h4>'"
          <div className='space-y-2'>            {service.features.slice(0, 3).map((feature, idx) => (        <div className="relative z-10 mb-6">"
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>"
          <div className="space-y-2">'
          <div className='space-y-2'>            {service.features.slice(0, 3).map((feature, idx) => (


          <div className='space-y-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
            {service.features.slice(0, 3).map((feature, idx) => (
              <motion.div;
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
<<<<<<< HEAD
className='flex items-center space-x-2 text-sm'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                className='flex items-center space-x-2 text-sm'



<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
              </div>
        {/* Features preview */}'
        <div className='relative z-10 mb-6'>;'
=======

<<<<<<< HEAD
              </div>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            )}

          </div>;
        </div>;


<<<<<<< HEAD
          <div className='space-y-2'>            {service.features.slice(0, 3).map((feature, idx) => (        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
          <div className="space-y-2">
          <div className='space-y-2'>            {service.features.slice(0, 3).map((feature, idx) => (

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Benefits */}
        <div className='relative z-10 mb-6'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>;
            Key Features;
          </h4>;'"
          <div className='space-y-2'>            {service && service.features.slice(0, 3).map((feature, idx) => (        <div className="relative z-10 mb-6">;"
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>;"
          <div className="space-y-2">;
            {service && service.features.slice(0, 3).map((feature, idx) => (;
              <motion&& motion.div;
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
                transition={{ delay: 0 && 0.6 + idx * 0 && 0.1 }}'
                className='flex items-center space-x-2 text-sm'>;'
                <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'></div>;'
                <span className='text-gray-300'>{feature}</span>;
              </motion && motion.div>;
            ))}
            {service && service.features.length > 3 && (;'
              <div className='text-xs text-gray-500 mt-2'>                +{service && service.features.length - 3} more features              >;"
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>;"
                <span className="text-gray-300">{feature}</span>;
              </motion && motion.div>;
            ))}
            {service && service.features.length > 3 && (;"
              <div className="text-xs text-gray-500 mt-2">;
                +{service && service.features.length - 3} more features;
              </div>;
                key={idx}
                initial={{ opacity: 0, coordinate_x: -20 }}
                animate={{ opacity: 1, coordinate_x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
            )}
        {/* Benefits */}'
        <div className='relative z-10 mb-6'>;'
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>;
            Key Benefits;
          </h4>;'"
          <div className='space-y-2'>            {service && service.benefits.slice(0, 2).map((benefit, idx) => (        <div className="relative z-10 mb-6">;"
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>;"
          <div className="space-y-2">;
            {service && service.benefits.slice(0, 2).map((benefit, idx) => (;
              <motion&& motion.div;
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >'
                <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'></div>'
                <span className='text-gray-300'>{feature}</span>
              </motion.div>
            ))}
            {service.features.length > 3 && (
              </div>
            )}
          </div>
        </div>
=======
<<<<<<< HEAD
        {/* Benefits */}
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
          <div className="space-y-2">
                transition={{ delay: 0.6 + idx * 0.1 }}
                className='flex items-center space-x-2 text-sm'

=======
<<<<<<< HEAD
                transition={{ delay: 0 && 0.8 + idx * 0 && 0.1 }}
                className='flex items-center space-x-2 text-sm'>;
                <div className='w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full'></div>;
                <span className='text-gray-300'>{benefit}</span>              </motion && motion.div>                className="flex items-center space-x-2 text-sm";
              >;
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>;
                <span className="text-gray-300">{benefit}</span>;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              >
                <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'></div>
                <span className='text-gray-300'>{feature}</span>
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <div className='text-xs text-gray-500 mt-2'>                +{service.features.length - 3} more features              >
>>>>>>> merged-prs-20250907-203621
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-gray-500 mt-2">
                +{service.features.length - 3} more features
<<<<<<< HEAD
=======
              <div className='text-xs text-gray-500 mt-2'>                +{service.features.length - 3} more features

                +{service.features.length - 3} more features

>>>>>>> merged-prs-20250907-203621
              </div>
            )}
          </div>
        </div>

        {/* Benefits */}
<<<<<<< HEAD
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
          <div className="space-y-2">
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}

              >
                <div className='w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full'></div>
                <span className='text-gray-300'>{benefit}</span>
origin/cursor/automate-test-improve-and-merge-code-2533
              </motion.div>
            ))}
=======
<<<<<<< HEAD
        <div className='relative z-10 mb-6'>
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>
            Key Benefits
          </h4>
          <div className='space-y-2'>            {service.benefits.slice(0, 2).map((benefit, idx) => (        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
          <div className="space-y-2">
          <div className='space-y-2'>            {service.benefits.slice(0, 2).map((benefit, idx) => (

=======
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
          <div className="space-y-2">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <motion.div
<<<<<<< HEAD
          </div>;
        </div>;
        {/* Benefits */}<div className="relative z-10 mb-6">;
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>;
          <div className="space-y-2">;
            {service.benefits.slice(0, 2).map((benefit, idx) => (<motion.div;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                className='flex items - center space - x-2 text - sm';
              >;
                <div className='w - 2 h - 2 bg - gradient - to - r from - cyan - 400 to - purple - 400 rounded - full'></div>;
                <span className='text - gray - 300'>{feature}</span>;
              </motion.div>))}
            {service.features.length > 3 && (<div className='text - xs text - gray - 500 mt - 2'>                +{service.features.length - 3} more features              >;
                <div className="w - 2 h - 2 bg - gradient - to - r from - cyan - 400 to - purple - 400 rounded - full"></div>;
                <span className="text - gray - 300">{feature}</span>;
              </motion.div>))}
            {service.features.length > 3 && (<div className="text - xs text - gray - 500 mt - 2">;
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
<<<<<<< HEAD
            {service.benefits.slice (0, 2).map ((benefit, idx) => (<motion.div;key={idx}
                initial={{ opacity: 0, coordinate_x: -20 }}
                animate={{ opacity: 1, coordinate_x: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
=======
            {service.benefits.slice (0, 2).map ((benefit, idx) => (
              <motion.div;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                key={idx}
                initial={{ opacity: 0, coordinate_x: -20 }}
                animate={{ opacity: 1, coordinate_x: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
<<<<<<< HEAD
=======





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Benefits */}
        <div className='relative z-10 mb-6'>;
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>;
            Key Benefits;
          </h4>;
<div className='relative z-10 mb-6'>;
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>;
            Key Benefits;
          </h4>;
          <div className='space-y-2'>;
            {service.benefits.slice(0, 2).map((benefit, idx) => (<motion.div;
        <div className='relative z-10 mb-6'>
          <h4 className='text-sm font-semibold text-gray-300 mb-3'>
            Key Benefits
=======
        {/* Benefits */}

<div className='relative z-10 mb-6'    />
          <h4 className='text-sm font-semibold text-gray-300 mb-3'    />
            Key Benefits;
>>>>>>> origin/chore/fix-lint-and-merge
          </h4>
<<<<<<< HEAD
          <div className='space-y-2'    />
            {service.benefits.slice(0, 2).map((benefit, idx) => (}
              <motion.div;}
key={idx}
                initial={{ opacity: 0, x: -20 }
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          <div className='space-y-2'>            {service.benefits.slice(0, 2).map((benefit, idx) => (


            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}

<<<<<<< HEAD
                <div className='w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full'></div>
<<<<<<< HEAD
                <span className='text-gray-300'>{benefit}</span>
=======

                <span className='text-gray-300'>{benefit}</span>              </motion.div>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </motion.div>
            ))}

          </div>;
        </div>;
<<<<<<< HEAD
                transition={{ delay: 0.8 + idx * 0.1 }}
className='flex items-center space-x-2 text-sm'
              >
                <div className='w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full></div>
                <span className=text-gray-300'>{benefit}</span>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
className='flex items-center space-x-2 text-sm'
                  />
=======
<<<<<<< HEAD
                <span className='text-gray-300'>{benefit}</span>              </motion.div>                className="flex items-center space-x-2 text-sm"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                <span className="text-gray-300">{benefit}</span>
            ))}
          </div>
        </div>
                <span className='text-gray-300'>{benefit}</span>              </motion.div>




              </motion.div>

            ))}
          </div>
        </div>

        {/* Market info */}

        {service.marketSize && service.growthRate && (
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
=======
                <span className='text-gray-300'>{benefit}</span>              </motion.div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                <div className='w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full'    /></div>
                <span className='text-gray-300'    />{benefit}</span>
>>>>>>> origin/chore/fix-lint-and-merge
              </motion.div>
            )
}

          </div>;
<<<<<<< HEAD
        </div>;'
                <span className='text-gray-300'>{benefit}</span>              </motion.div>
=======
        </div>;
                <span className='text-gray-300'    />{benefit}</span>              </motion.div>


>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

          </div>
        </div>
        {/* Market info */}

        {service.marketSize && service.growthRate && (

<div className='relative z-10 mb-6'    />
            <div className='bg-gray-800/30 rounded-lg p-3 border border-gray-600/20'    />
              <div className='flex items-center justify-between text-xs'    />
                <span className='text-gray-400'    />Market Size</span>
                <span className='text-cyan-400 font-medium'    />}
<<<<<<< HEAD

                  {service.marketSize}
                </span>
              </div>
              <div className='flex items-center justify-between text-xs mt-1'    />
                <span className='text-gray-400'    />Growth Rate</span>
                <span className='text-green-400 font-medium'    />
                  {service.growthRate}

                </span>
              </div>
=======
}
                  {service.marketSize}
                </span>;
              </div>;
<<<<<<< HEAD
              <div className='flex items-center justify-between text-xs mt-1'>;'
                <span className='text-gray-400'>Growth Rate</span>;'
                <span className='text-green-400 font-medium'>;'
                  {service.growthRate}
          <div className="relative z-10 mb-6">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-600/20">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Market Size</span>
                <span className="text-cyan-400 font-medium">{service.marketSize}</span>
              </div>
              <div className="flex items-center justify-between text-xs mt-1">
                <span className="text-gray-400">Growth Rate</span>
                <span className="text-green-400 font-medium">{service.growthRate}</span>
                <span className=text-gray-300>{benefit}</span>              </motion.div>

        {/* Market info */}


              </div>
              <div className='flex items-center justify-between text-xs mt-1'>
                <span className=text-gray-400>Growth Rate</span>
                <span className='text-green-400 font-medium'>
=======
              <div className='flex items-center justify-between text-xs mt-1'    />;
                <span className='text-gray-400'    />Growth Rate</span>;
                <span className='text-green-400 font-medium'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                  {service.growthRate}

                </span>
              </div>
>>>>>>> merged-prs-20250907-203621
            </div>
          </div>
            ))}

        {/* Market info */}
<<<<<<< HEAD
        {service && service.marketSize && service && service.growthRate && (
          <div className='relative z-10 mb-6'    />
            <div className='bg-gray-800/30 rounded-lg p-3 border border-gray-600/20'    />
              <div className='flex items-center justify-between text-xs'    />
                <span className='text-gray-400'    />Market Size</span>;}
                <span className='text-cyan-400 font-medium'    />;}
                  {service && service.marketSize}
                </span>
              </div>
              <div className='flex items-center justify-between text-xs mt-1'    />
                <span className='text-gray-400'    />Growth Rate</span>
                <span className='text-green-400 font-medium'    />
                  {service && service.growthRate}"
                </span>              </div>          <div className=\"relative z-10 mb-6\"    />;"
            <div className=\"bg-gray-800/30 rounded-lg p-3 border border-gray-600/20\"    />;"
              <div className=\"flex items-center justify-between text-xs\"    />;"
                <span className=\"text-gray-400\"    />Market Size</span>;"
                <span className=\"text-cyan-400 font-medium\"    />{service && service.marketSize}</span>
              </div>;"
              <div className=\"flex items-center justify-between text-xs mt-1\"    />;"
                <span className=\"text-gray-400\"    />Growth Rate</span>;"
                <span className=\"text-green-400 font-medium\"    />{service && service.growthRate}</span>
            </div>
          </div>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
{/* Market info */}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {service && service.marketSize && service && service.growthRate && (;
          <div className='relative z-10 mb-6'    />;

<<<<<<< HEAD
            <div className='bg-gray-800/30 rounded-lg p-3 border border-gray-600/20'>;'
              <div className='flex items-center justify-between text-xs'>;'
                <span className='text-gray-400'>Market Size</span>;'
                <span className='text-cyan-400 font-medium'>;'
                  {service && service.marketSize}
                </span>;
              </div>;
              <div className='flex items-center justify-between text-xs mt-1'>;'
                <span className='text-gray-400'>Growth Rate</span>;'
                <span className='text-green-400 font-medium'>;'
                  {service && service.growthRate}
                </span>              </div>          <div className="relative z-10 mb-6">;"
            <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-600/20">;"
              <div className="flex items-center justify-between text-xs">;"
                <span className="text-gray-400">Market Size</span>;"
                <span className="text-cyan-400 font-medium">{service && service.marketSize}</span>;"
              </div>;
              <div className="flex items-center justify-between text-xs mt-1">;"
                <span className="text-gray-400">Growth Rate</span>;"
                <span className="text-green-400 font-medium">{service && service.growthRate}</span>;"
            </div>;
          </div>;
        {service && service.marketSize && service && service.growthRate && (;'
          <div className='relative z-10 mb-6'>;'
            <div className='bg-gray-800/30 rounded-lg p-3 border border-gray-600/20'>;'
              <div className='flex items-center justify-between text-xs'>;'
                <span className='text-gray-400'>Market Size</span>;'
                <span className='text-cyan-400 font-medium'>;
          <div className=relative z-10 mb-6'>;'
            <div className=bg-gray-800/30 rounded-lg p-3 border border-gray-600/20>;'
              <div className='flex items-center justify-between text-xs>;
                <span className='text-gray-400'>Market Size</span>;
                <span className=text-cyan-400 font-medium'>;
                  {service && service.marketSize}
                </span>;
              </div>;'
              <div className=flex items-center justify-between text-xs mt-1>;'
                <span className='text-gray-400>Growth Rate</span>;
                <span className='text-green-400 font-medium'>;
                  {service && service.growthRate}
                </span>              </div>          <div className=relative z-10 mb-6">;"
            <div className=bg-gray-800/30 rounded-lg p-3 border border-gray-600/20>;"
              <div className="flex items-center justify-between text-xs>;
                <span className="text-gray-400">Market Size</span>;
                <span className=text-cyan-400 font-medium">{service && service.marketSize}</span>;
              </div>;"
              <div className=flex items-center justify-between text-xs mt-1>;"
                <span className="text-gray-400>Growth Rate</span>;
                <span className="text-green-400 font-medium">{service && service.growthRate}</span>;
            </div>;
          </div>;
>>>>>>> merged-prs-20250907-203621
        )}
        {/* CTA Button */}
<<<<<<< HEAD
=======
<div className='relative z-10'>
=======
<<<<<<< HEAD



=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* CTA Button */}

        <div className="relative z-10">

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'


<<<<<<< HEAD
        {/* CTA Button */}
        <div className="relative z-10">

        {/* CTA Button */}
>>>>>>> merged-prs-20250907-203621
        <div className='relative z-10'>          <motion.a
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'        <div className="relative z-10">
<<<<<<< HEAD
=======
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
          <motion.a
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'
          >
            <span className='relative z-10 flex items-center space-x-2'>
=======
<<<<<<< HEAD
            className="group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >

            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'
          >
            <span className='relative z-10 flex items-center space-x-2'>
              <span>Learn More</span>
              <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200' />
            </span>
            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'></div>          </motion.a>          >
=======

className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 "hover":shadow-lg "hover":shadow-cyan-500/25''
          >
<<<<<<< HEAD
            <span className='relative z-10 flex items-center space-x-2'>'
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <span className="relative z-10 flex items-center space-x-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
              <span>Learn More</span>
              <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200' />
            </span>
            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'    /></div>
          </motion.a>
        </div>
<<<<<<< HEAD
        <div className='relative z-10'    />          <motion&& motion.a
href={service && service.link}
            whileHover={{ scale: 1 && 1.05 }}
            whileTap={{ scale: 0 && 0.95 }
}"
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'        <div className=\"relative z-10\"    />
          <motion&& motion.a
            href={service && service.link}
            whileHover={{ scale: 1 && 1.05 }}
            whileTap={{ scale: 0 && 0.95 }

            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'    />
            <span className='relative z-10 flex items-center space-x-2'    />
              <span    />Learn More</span>
              <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200'    />
            </span>;</motion.a>
            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'    /></div>          </motion && motion.a>          >;"
            <span className=\"relative z-10 flex items-center space-x-2\"    />
              <span    />Learn More</span>;"
              <ArrowRight className=\"w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200\"    />
            </span>
            {/* Button glow effect */}"
            <div className=\"absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300\"    /></div>
          </motion && motion.a>
        </div>;</motion.a>
        </div>
=======
<<<<<<< HEAD
        <div className='relative z-10'>          <motion&& motion.a'

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className='relative z-10'>          <motion&& motion.a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            href={service && service.link}
            whileHover={{ scale: 1 && 1.05 }}
            whileTap={{ scale: 0 && 0.95 }}
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}"
            <span className="relative z-10 flex items-center space-x-2">
              <span>Learn More</span>"
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </span>
            {/* Button glow effect */}"
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
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
        </div>'
        <div className='relative z-10'>          <motion&& motion.a;
            href={service && service.link}
            whileHover={{ scale: 1 && 1.05 }}
            whileTap={{ scale: 0 && 0.95 }}'"
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'        <div className="relative z-10">;
          <motion&& motion.a;
            href={service && service.link}
            whileHover={{ scale: 1 && 1.05 }}
            whileTap={{ scale: 0 && 0.95 }}
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'>;
            <span className='relative z-10 flex items-center space-x-2'>;
              <span>Learn More</span>;
<<<<<<< HEAD
              <ArrowRight className='w-4 h-4 group-hover/"btn":translate-x-1 transition-transform duration-200' />;'
            </span>;</motion.a>;
=======
              <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200' />;
            </span>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/"btn":opacity-100 transition-opacity duration-300'></div>          </motion && motion.a>          >;'
            <span className="relative z-10 flex items-center space-x-2">;"
              <span>Learn More</span>;
              <ArrowRight className="w-4 h-4 group-hover/"btn":translate-x-1 transition-transform duration-200" />;"
            </span>;
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>;
          </motion && motion.a>;
        </div>;
          </motion && motion.a>;
        </div>;

<<<<<<< HEAD
          </motion.a>
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
          </motion.a>

        </div>

<<<<<<< HEAD
        {/* Hover overlay */}
        <motion&& motion.div
          initial={{ opacity: 0 }}

          whileHover={{ opacity: 1 }}
export default UltraFuturisticServiceCardV2;'
                className='flex items - center space - x-2 text - sm'
              >;'
                <div className='w - 2 h - 2 bg - gradient - to - r from - green - 400 to - emerald - 400 rounded - full'></div>;'"
                <span className='text - gray - 300'>{benefit}</span>              </motion.div>                className="flex items - center space - x-2 text - sm"
              >;"
                <div className="w - 2 h - 2 bg - gradient - to - r from - green - 400 to - emerald - 400 rounded - full"></div>;"
                <span className="text - gray - 300">{benefit}</span>))}
          </div>
        </div>
        {/* Market info */}
        {service.market_size && service.growth_rate && ('
          <div className='relative z - 10 mb - 6'>;'
            <div className='bg - gray - 800 / 30 rounded - lg p - 3 border border - gray - 600 / 20'>;'
              <div className='flex items - center justify - between text - xs'>;'
                <span className='text - gray - 400'>Market Size</span>;'
                <span className='text - cyan - 400 font - medium'>
                  {service.market_size}
                </span>
              </div>;'
              <div className='flex items - center justify - between text - xs mt - 1'>;'
                <span className='text - gray - 400'>Growth Rate</span>;'
                <span className='text - green - 400 font - medium'>
                  {service.growth_rate}"
                </span>              </div>          <div className="relative z - 10 mb - 6">;"
            <div className="bg - gray - 800 / 30 rounded - lg p - 3 border border - gray - 600 / 20">;"
              <div className="flex items - center justify - between text - xs">;"
                <span className="text - gray - 400">Market Size</span>;"
                <span className="text - cyan - 400 font - medium">{service.market_size}</span>
              </div>;"
              <div className="flex items - center justify - between text - xs mt - 1">;"
                <span className="text - gray - 400">Growth Rate</span>;"
                <span className="text - green - 400 font - medium">{service.growth_rate}</span>
            </div>
          </div>)}
        {/* CTA Button */}'
        <div className='relative z - 10'>          <motion.a
            href={service.link}
            while_hover={{ scale: 1.05 }}
            while_tap={{ scale: 0.95 }}'"
            className='group / btn relative w - full inline - flex items - center justify - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white font - semibold rounded - xl overflow - hidden transition - all duration - 300 hover:shadow - lg hover:shadow - cyan - 500 / 25'        <div className="relative z - 10">
          <motion.a
            href={service.link}
            while_hover={{ scale: 1.05 }}
            while_tap={{ scale: 0.95 }}'
            className='group / btn relative w - full inline - flex items - center justify - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white font - semibold rounded - xl overflow - hidden transition - all duration - 300 hover:shadow - lg hover:shadow - cyan - 500 / 25'
          >;'
            <span className='relative z - 10 flex items - center space - x-2'>
              <span > Learn More</span>;'
              <ArrowRight className='w - 4 h - 4 group - hover / btn:translate - x-1 transition - transform duration - 200' />
            </span>
            {/* Button glow effect */}'
            <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - purple - 400 opacity - 0 group - hover / btn:opacity - 100 transition - opacity duration - 300'></div>          </motion.a>          >;"
            <span className="relative z - 10 flex items - center space - x-2">
              <span > Learn More</span>;"
              <ArrowRight className="w - 4 h - 4 group - hover / btn:translate - x-1 transition - transform duration - 200" />
            </span>
            {/* Button glow effect */}"
            <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - purple - 400 opacity - 0 group - hover / btn:opacity - 100 transition - opacity duration - 300"></div>
          </motion.a>
        </div>
        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none'
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        </div>

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Hover overlay */}
        <motion&& motion.div;
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
export default UltraFuturisticServiceCardV2;
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
          whileHover={{ opacity: 1 }}export default UltraFuturisticServiceCardV2;
=======


<<<<<<< HEAD
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none"
        />
      </div>
    </motion.div>
          className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none'

>>>>>>> merged-prs-20250907-203621
        />
      </div>
    </motion.div>
  );
}
<<<<<<< HEAD
export default UltraFuturisticServiceCardV2;        />
      </div>
    </motion.div>)
export default UltraFuturisticServiceCardV2
className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none'
           />
=======
};

export default UltraFuturisticServiceCardV2;        />
>>>>>>> merged-prs-20250907-203621
      </div>
    </motion.div>
  )
}
<<<<<<< HEAD
export default UltraFuturisticServiceCardV2;

"
=======
};
export default UltraFuturisticServiceCardV2;        />;
      </div>;
    </motion && motion.div>;
  );
};
export default UltraFuturisticServiceCardV2;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
        {service.market_size && service.growth_rate && (<div className='relative z - 10 mb - 6'>;
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
    </motion.div>)}export default UltraFuturisticServiceCardV2;        />;
      </div>;
    </motion.div>)}export default UltraFuturisticServiceCardV2;className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none';
        />;
      </div>;
    </motion.div>;
  )export default UltraFuturisticServiceCardV2;        />;
      </div>;
    </motion.div>;
  )}
export default UltraFuturisticServiceCardV2;export default UltraFuturisticServiceCardV2;
    </motion.div>);
}
;
export default UltraFuturisticServiceCardV2;
;
=======
<<<<<<< HEAD
            <div className='bg-gray-800/30 rounded-lg p-3 border border-gray-600/20'    />;
              <div className='flex items-center justify-between text-xs'    />;
                <span className='text-gray-400'    />Market Size</span>;}
                <span className='text-cyan-400 font-medium'    />;}
                  {service && service.marketSize}
                </span>;
              </div>;
              <div className='flex items-center justify-between text-xs mt-1'    />;
                <span className='text-gray-400'    />Growth Rate</span>;
                <span className='text-green-400 font-medium'    />;
                  {service && service.growthRate}"
                </span>              </div>          <div className=\"relative z-10 mb-6\"    />;"
            <div className=\"bg-gray-800/30 rounded-lg p-3 border border-gray-600/20\"    />;"
              <div className=\"flex items-center justify-between text-xs\"    />;"
                <span className=\"text-gray-400\"    />Market Size</span>;"
                <span className=\"text-cyan-400 font-medium\"    />{service && service.marketSize}</span>;
              </div>;"
              <div className=\"flex items-center justify-between text-xs mt-1\"    />;"
                <span className=\"text-gray-400\"    />Growth Rate</span>;"
                <span className=\"text-green-400 font-medium\"    />{service && service.growthRate}</span>;
            </div>;
          </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        )}

        {/* CTA Button */}
<div className='relative z-10'    />
          <motion.a;
href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'
              />
            <span className='relative z-10 flex items-center space-x-2'    />
              <span    />Learn More</span>
              <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200'    />
            </span>
            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'    /></div>
          </motion.a>
        </div>
        <div className='relative z-10'    />          <motion&& motion.a;
href={service && service.link}
            whileHover={{ scale: 1 && 1.05 }}
            whileTap={{ scale: 0 && 0.95 }
}"
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'        <div className=\"relative z-10\"    />;
          <motion&& motion.a;
            href={service && service.link}
            whileHover={{ scale: 1 && 1.05 }}
            whileTap={{ scale: 0 && 0.95 }
}
            className='group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'    />;
            <span className='relative z-10 flex items-center space-x-2'    />;
              <span    />Learn More</span>;
              <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200'    />;
            </span>;</motion.a>;
            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'    /></div>          </motion && motion.a>          >;"
            <span className=\"relative z-10 flex items-center space-x-2\"    />;
              <span    />Learn More</span>;"
              <ArrowRight className=\"w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200\"    />;
            </span>;
            {/* Button glow effect */}"
            <div className=\"absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300\"    /></div>;
          </motion && motion.a>;
        </div>;</motion.a>;
        </div>;
        {/* Hover overlay */}
        <motion&& motion.div;
          initial={{ opacity: 0 }}
>>>>>>> origin/chore/fix-lint-and-merge

          whileHover={{ opacity: 1 }}

<<<<<<< HEAD

        />
      </div>
    </motion.div>
  );
export default UltraFuturisticServiceCardV2;        />
=======
className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none'
           />
>>>>>>> origin/chore/fix-lint-and-merge
      </div>
    </motion.div>
  )
}
export default UltraFuturisticServiceCardV2;

export default UltraFuturisticServiceCardV2;
export default UltraFuturisticServiceCardV2;

};
export default UltraFuturisticServiceCardV2;

};


<<<<<<< HEAD
<<<<<<< HEAD
};

export default UltraFuturisticServiceCardV2;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
export default UltraFuturisticServiceCardV2;

"
>>>>>>> origin/chore/fix-lint-and-merge
=======

export default UltraFuturisticServiceCardV2;
export default UltraFuturisticServiceCardV2;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
