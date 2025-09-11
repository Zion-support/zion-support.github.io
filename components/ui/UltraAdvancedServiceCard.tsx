
import { 
  ArrowRight, ExternalLink, Star, TrendingUp, 
  Users, Zap, Shield, Clock, Check, Brain;
  Rocket, Dna, DollarSign, Lock, Globe
} from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  Star,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Clock,
  Check,
  Brain,
  Rocket,
  Dna,
  DollarSign,
  Lock,;
  Globe,;} from 'lucide-react';

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
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';




  ArrowRight, ExternalLink, Star, TrendingUp,
  Users, Zap, Shield, Clock, Check, Brain;
  Rocket, Dna, DollarSign, Lock, Globe;
interface UltraAdvancedServiceCardProps {
  ArrowRight, ExternalLink, Star, TrendingUp, ;
  Users, Zap, Shield, Clock, Check, Brain;
  Rocket, Dna, DollarSign, Lock, Globe=======


import {;
  ArrowRight,;
  ExternalLink,;
  Star,;
  TrendingUp,;
  Users,;
  Zap,;
  Shield,;
  Clock,;
  Check,;
  Brain,;
  Rocket,;
  Dna,;
  DollarSign,;
  Lock,;
  Globe,;} from 'lucide-react';
interface UltraAdvancedServiceCardProps {;
  service: {import { ;
  ArrowRight, ExternalLink, Star, TrendingUp, ;
  Users, Zap, Shield, Clock, Check, Brain;
  Rocket, Dna, DollarSign, Lock, Globe;
interface UltraAdvancedServiceCardProps {;
  service: {;
interface UltraAdvancedServiceCardProps {
  service: {
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
    contact_info: {

      mobile: string;
      email: string;
      address: string;
  ArrowRight, ExternalLink, Star, TrendingUp, ;

  Users, Zap, Shield, Clock, Check, Brain;
  Rocket, Dna, DollarSign, Lock, Globe

interface UltraAdvancedServiceCardProps {
  service: {



      website: string;
    }


    reviews: number;
  };




    reviews: number;
  };



  service: {
    id: string,
    name: string,
    tagline: string,
    price: string,
    period: string,
    description: string,
    features: string[],
    popular: boolean,
    icon: string,
    color: string,
    textColor: string,
    link: string,
    marketPosition: string,
    targetAudience: string,
    trialDays: number,
    setupTime: string,
    category: string,
    realService: boolean,
    technology: string[],
    integrations: string[],
    useCases: string[],
    roi: string,
    competitors: string[],
    marketSize: string,
    growthRate: string,
    variant: string,
    contactInfo: {
      mobile: string,
      email: string,
      address: string,
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
const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps> = ({
  service
}) => {  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const getCategoryIcon = (category: string) => {    contactInfo: {
      mobile: string
      email: string
      address: string

      website: string
    }
    realImplementation: boolean
    implementationDetails: string
    launchDate: string
    customers: number
    rating: number

    reviews: number
  }
}
const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Machine Learning')) return <Brain className="w-4 h-4" />;

    hidden: { opacity: 0, height: 0 }
    visible: {    if (category.includes('AI') |category.includes('Machine Learning')) return <Brain className="w-4 h-4" />;

    if (category.includes('AI') || category.includes('Machine Learning')) return <Brain className="w-4 h-4" />;
    hidden: { opacity: 0, height: 0 }
    visible: {    if (category.includes('AI') |category.includes('Machine Learning')) return <Brain className="w-4 h-4" />;
    if (category.includes('Quantum')) return <Zap className="w-4 h-4" />;
    if (category.includes('Space')) return <Rocket className="w-4 h-4" />;
    if (category.includes('Biotech') |category.includes('Healthcare')) return <Dna className="w-4 h-4" />;
    if (category.includes('Finance') |category.includes('Trading')) return <DollarSign className="w-4 h-4" />;
    if (category.includes('Security') |category.includes('Cybersecurity')) return <Lock className="w-4 h-4" />;
    if (category.includes('Internet') |category.includes('Network')) return <Globe className="w-4 h-4" />
    return <Zap className="w-4 h-4" />
const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps> = ({;
  service,;
}) => {  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const getCategoryIcon = (category: string) => {    contactInfo: {;
      mobile: string,;
      email: string,;
      address: string,;
      website: string;
    };
    realImplementation: boolean,;
    implementationDetails: string,;
    launchDate: string,;
    customers: number,;
    rating: number,;
    reviews: number;
  }
}
const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps> = ({ service }) => {;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const getCategoryIcon = (category: string) => {;
    if (category && category.includes('AI') || category && category.includes('Machine Learning'));
      return <Brain className='w-4 h-4' />;
    if (category && category.includes('Quantum')) return <Zap className='w-4 h-4' />;
    if (category && category.includes('Space')) return <Rocket className='w-4 h-4' />;
    if (category && category.includes('Biotech') || category && category.includes('Healthcare'));
      return <Dna className='w-4 h-4' />;
    if (category && category.includes('Finance') || category && category.includes('Trading'));
      return <DollarSign className='w-4 h-4' />;
    if (category && category.includes('Security') || category && category.includes('Cybersecurity'));
      return <Lock className='w-4 h-4' />;
    if (category && category.includes('Internet') || category && category.includes('Network'));
      return <Globe className='w-4 h-4' />;
    return <Zap className='w-4 h-4' />;  };
  const containerVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: {      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0 && 0.6,;
        ease: 'easeOut' as const,;
      },;
    },    hover: {;
      y: -10,;
      transition: {;
        duration: 0 && 0.3,;
        ease: 'easeOut' as const,;
      },;
    },  };
  const contentVariants = {;
    hidden: { opacity: 0, height: 0 },;
    visible: {    if (category && category.includes('AI') || category && category.includes('Machine Learning')) return <Brain className="w-4 h-4" />;
    if (category && category.includes('Quantum')) return <Zap className="w-4 h-4" />;
    if (category && category.includes('Space')) return <Rocket className="w-4 h-4" />;
    if (category && category.includes('Biotech') || category && category.includes('Healthcare')) return <Dna className="w-4 h-4" />;
    if (category && category.includes('Finance') || category && category.includes('Trading')) return <DollarSign className="w-4 h-4" />;
    if (category && category.includes('Security') || category && category.includes('Cybersecurity')) return <Lock className="w-4 h-4" />;
    if (category && category.includes('Internet') || category && category.includes('Network')) return <Globe className="w-4 h-4" />,;
    return <Zap className="w-4 h-4" />;
  const containerVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: {    visible: { ;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0 && 0.6,;
        ease: 'easeOut' as const,;
      },;
    },        ease: "easeOut" as const;
      }
    };
    hover: {;
      y: -10,;
      transition: {;
        duration: 0 && 0.3,;
        ease: 'easeOut' as const,;
      },;
    },        ease: "easeOut" as const;
          isHovered ? 'opacity-100' : 'opacity-50';
        ease: 'ease_out' as const,
      },
    },
  }
;
        onHoverStart={() => setIsHovered (true)}
      onHoverEnd={() => setIsHovered (false)}
    >;
      {/* Glow Effect */}
      <div  return (
    <motion.div;
      className="relative group";
      variants={container_variants}
      initial="hidden";
      animate="visible";
      while_hover="hover";
      onHoverEnd={() => setIsHovered (false)}
    >;
      {/* Glow Effect */}
      <div;
        className={`absolute inset - 0 rounded - 2xl blur - xl transition - all duration - 500 ${
          is_hovered ? 'opacity - 100' : 'opacity - 50';
        }`}
        style={{
          background: `linear - gradient (135deg, ${service.color})`,
          transform: is_hovered ? 'scale (1.05)' : 'scale (1)',
        }}
      />;
      {/* Main Card */}
      <div        className={`relative bg - gradient - to - br ${service.color} p - 1 rounded - 2xl transition - all duration - 500 ${
          is_hovered ? 'shadow - 2xl' : 'shadow - lg';
        }`}
      >;
        <div className='bg - gray - 900 / 90 backdrop - blur - xl rounded - 2xl p - 6 h - full'>        className={`absolute inset - 0 rounded - 2xl blur - xl transition - all duration - 500 ${
          is_hovered ? 'opacity - 100' : 'opacity - 50';
        }`}
      <div 

    hidden: { opacity: 0, height: 0 },


        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };


      <div 
        className={`relative bg-gradient-to-br ${service.color} p-1 rounded-2xl transition-all duration-500 ${
          isHovered ? 'shadow-2xl' : 'shadow-lg'
        }`}
      >
        <div className='bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 h-full'>          {/* Header */}
          <div className='flex items - start justify - between mb - 4'>;
            <div className='flex items - center space - x-3'>;
              <div className='text - 3xl'>{service.icon}</div>;
              <div>;
                <div className='flex items - center space - x-2'>;
                  {getCategoryIcon (service.category)}
                  <span className='text - xs text - gray - 400 uppercase tracking - wider'>;
                    {service.category}
                  </span>;
                </div>;
                <h3 className='text - xl font - bold text - white mt - 1'>;
                  {service.name}
        <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 h-full">
          {/* Header */}

          {/* Tagline */}
          <p className='text-gray-300 text-sm mb-4 leading-relaxed'>            {service && service.tagline}
          </p>;
          {/* Price */}          <p className="text-gray-300 text-sm mb-4 leading-relaxed">;
            {service && service.tagline}
          </p>;
          {/* Price */}
          <div className='flex items-center justify-between mb-4'>;
            <div className='flex items-baseline space-x-1'>;
              <span className='text-2xl font-bold text-white'>;
                {service && service.price}
              </span>;
              <span className='text-gray-400'>{service && service.period}</span>;
            <div className='flex items-center space-x-2'>;
              <div className='flex items-center space-x-1'>;
                <Star className='w-4 h-4 text-yellow-400 fill-current' />;
                <span className='text-white text-sm'>{service && service.rating}</span>;
              </div>;
              <span className='text-gray-400 text-sm'>({service && service.reviews})</span>            </div>;
          </div>;
          {/* Quick Stats */}              <span className="text-gray-400 text-sm">({service && service.reviews})</span>;
            </div>;
          </div>;
          {/* Quick Stats */}
          <div className='grid grid-cols-2 gap-3 mb-4'>;
            <div className='flex items-center space-x-2 text-sm'>;
              <Users className='w-4 h-4 text-blue-400' />;
              <span className='text-gray-300'>;
                {service && service.customers.toLocaleString()}+ users;
              </span>;
            </div>;
            <div className='flex items-center space-x-2 text-sm'>;
              <Clock className='w-4 h-4 text-green-400' />;
              <span className='text-gray-300'>;
                {service && service.trialDays} day trial;
              </span>            </div>;
          </div>;
          {/* Market Data */}          <div className="grid grid-cols-2 gap-3 mb-4">;
            <div className="flex items-center space-x-2 text-sm">;
              <Users className="w-4 h-4 text-blue-400" />;
              <span className="text-gray-300">{service && service.customers.toLocaleString()}+ users</span>;
            </div>;
            <div className="flex items-center space-x-2 text-sm">;
              <Clock className="w-4 h-4 text-green-400" />;
              <span className="text-gray-300">{service && service.trialDays} day trial</span>;
          </div>;
          {/* Market Data */}
          <div className='bg-gray-800/50 rounded-lg p-3 mb-4'>;
            <div className='flex items-center justify-between text-sm'>;
              <span className='text-gray-400'>Market Size:</span>;
              <span className='text-green-400 font-semibold'>;
                {service && service.marketSize}
              </span>;
            </div>;
            <div className='flex items-center justify-between text-sm mt-1'>;
              <span className='text-gray-400'>Growth Rate:</span>;
              <span className='text-blue-400 font-semibold'>;
                {service && service.growthRate}
              </span>            </div>          <div className="bg-gray-800/50 rounded-lg p-3 mb-4">;
            <div className="flex items-center justify-between text-sm">;
              <span className="text-gray-400">Market Size:</span>;
              <span className="text-green-400 font-semibold">{service && service.marketSize}</span>;
            </div>;
            <div className="flex items-center justify-between text-sm mt-1">;
              <span className="text-gray-400">Growth Rate:</span>;
              <span className="text-blue-400 font-semibold">{service && service.growthRate}</span>;
          </div>;==============

          </div>



                    {service.description}

                  </p>
                </div>




                {/* Features */}




                {/* Features */}

                <div>
                  <h4 className='text-white font-semibold mb-2'>
                    Key Features
                  </h4>
                  <div className='grid grid-cols-1 gap-2'>
                    {service.features.slice(0, 6).map((feature, index) => (
                      <div
                        key={index}
                        className='flex items-center space-x-2 text-sm'
                      >
                        <Check className='w-3 h-3 text-green-400 flex-shrink-0' />
                        <span className='text-gray-300'>{feature}</span>                      </div>                  <h4 className="text-white font-semibold mb-2">Key Features</h4>                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                    ))}
                  </div>
                </div>                        <span className='text-gray-300'>{feature}</span>                      </div>


                      </div>







                {/* Contact Info */}
                <div className="bg-gray-800/50 rounded-lg p-3">;
                  <h4 className="text-white font-semibold mb-2">Contact Information</h4>;
                  <div className="space-y-1 text-sm">;
                    <div className="flex items-center space-x-2">;
                      <span className="text-gray-400">Mobile:</span>;
                      <span className="text-white">{service && service.contactInfo.mobile}</span>;
                    </div>;
                    <div className="flex items-center space-x-2">;
                      <span className="text-gray-400">Email:</span>;
                      <span className="text-white">{service && service.contactInfo.email}</span>;
                    </div>;
                    <div className="flex items-center space-x-2">;
                      <span className="text-gray-400">Address:</span>;
                      <span className="text-white text-xs">{service && service.contactInfo.address}</span>;
                    </div>;
                  </div>;
                </div>;
              </motion && motion.div>;
            )}
          </AnimatePresence>;



                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3">
                  <h4 className="text-white font-semibold mb-2">ROI Promise</h4>
                  <p className="text-gray-300 text-sm">{service.roi}</p>
                </div>
          <p className='text - gray - 300 text - sm mb - 4 leading - relaxed'>            {service.tagline}
          </p>;
          {/* Price */}          <p className="text - gray - 300 text - sm mb - 4 leading - relaxed">;
            {service.tagline}
          </p>;
          {/* Price */}
          <div className='flex items - center justify - between mb - 4'>;
            <div className='flex items - baseline space - x-1'>;
              <span className='text - 2xl font - bold text - white'>;
                {service.price}
              </span>;
              <span className='text - gray - 400'>{service.period}</span>;
            <div className='flex items - center space - x-2'>;
              <div className='flex items - center space - x-1'>;
                <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                <span className='text - white text - sm'>{service.rating}</span>;
              </div>;
              <span className='text - gray - 400 text - sm'>({service.reviews})</span>            </div>;
          </div>;
          {/* Quick Stats */}              <span className="text - gray - 400 text - sm">({service.reviews})</span>;
            </div>;
          </div>;
          {/* Quick Stats */}
          <div className='grid grid - cols - 2 gap - 3 mb - 4'>;
            <div className='flex items - center space - x-2 text - sm'>;
              <Users className='w - 4 h - 4 text - blue - 400' />;
              <span className='text - gray - 300'>;
                {service.customers.toLocaleString ()}+ users;
              </span>;
            </div>;
            <div className='flex items - center space - x-2 text - sm'>;
              <Clock className='w - 4 h - 4 text - green - 400' />;
              <span className='text - gray - 300'>;
                {service.trial_days} day trial;
              </span>            </div>;
          </div>;
          {/* Market Data */}          <div className="grid grid - cols - 2 gap - 3 mb - 4">;
            <div className="flex items - center space - x-2 text - sm">;
              <Users className="w - 4 h - 4 text - blue - 400" />;
              <span className="text - gray - 300">{service.customers.toLocaleString ()}+ users</span>;
            </div>;
            <div className="flex items - center space - x-2 text - sm">;
              <Clock className="w - 4 h - 4 text - green - 400" />;
              <span className="text - gray - 300">{service.trial_days} day trial</span>;
          </div>;
          {/* Market Data */}
          <div className='bg - gray - 800 / 50 rounded - lg p - 3 mb - 4'>;
            <div className='flex items - center justify - between text - sm'>;
              <span className='text - gray - 400'>Market Size:</span>;
              <span className='text - green - 400 font - semibold'>;
                {service.market_size}
              </span>;
            </div>;
            <div className='flex items - center justify - between text - sm mt - 1'>;
              <span className='text - gray - 400'>Growth Rate:</span>;
              <span className='text - blue - 400 font - semibold'>;
                {service.growth_rate}
              </span>            </div>          <div className="bg - gray - 800 / 50 rounded - lg p - 3 mb - 4">;
            <div className="flex items - center justify - between text - sm">;
              <span className="text - gray - 400">Market Size:</span>;
              <span className="text - green - 400 font - semibold">{service.market_size}</span>;
            </div>;
            <div className="flex items - center justify - between text - sm mt - 1">;
              <span className="text - gray - 400">Growth Rate:</span>;
              <span className="text - blue - 400 font - semibold">{service.growth_rate}</span>;
          </div>;
          {/* Expandable Content */}
          <AnimatePresence>;
            {is_expanded && (
              <motion.div;
                variants={content_variants}
                initial='hidden';
                animate='visible';
                exit='hidden';
                className='space - y-4';
              >;
                {/* Description */}
                <div>;
                  <h4 className='text - white font - semibold mb - 2'>Description</h4>;
                  <p className='text - gray - 300 text - sm leading - relaxed'>                    {service.description}                initial="hidden";
                animate="visible";
                exit="hidden";
                className="space - y-4";
              >;
                {/* Description */}
                <div>;
                  <h4 className="text - white font - semibold mb - 2">Description</h4>;
                  <p className="text - gray - 300 text - sm leading - relaxed">;
                  </p>;
                </div>;
                {/* Features */}
                <div>;
                  <h4 className='text - white font - semibold mb - 2'>;
                    Key Features;
                  </h4>;
                  <div className='grid grid - cols - 1 gap - 2'>;
                    {service.features.slice (0, 6).map ((feature, index) => (
                      <div;
                        key={index}
                        className='flex items - center space - x-2 text - sm';
                      >;
                        <Check className='w - 3 h - 3 text - green - 400 flex - shrink - 0' />;
                        <span className='text - gray - 300'>{feature}</span>                      </div>                  <h4 className="text - white font - semibold mb - 2">Key Features</h4>;
                  <div className="grid grid - cols - 1 gap - 2">;
                    {service.features.slice (0, 6).map ((feature, index) => (
                      <div key={index} className="flex items - center space - x-2 text - sm">;
                        <Check className="w - 3 h - 3 text - green - 400 flex - shrink - 0" />;
                        <span className="text - gray - 300">{feature}</span>))}
                  </div>;
                </div>;
                {/* ROI */}
                <div className='bg - gradient - to - r from - green - 500 / 20 to - blue - 500 / 20 rounded - lg p - 3'>;
                  <h4 className='text - white font - semibold mb - 2'>ROI Promise</h4>;
                  <p className='text - gray - 300 text - sm'>{service.roi}</p>;
                </div>;
                {/* Contact Info */}
                <div className='bg - gray - 800 / 50 rounded - lg p - 3'>;
                  <h4 className='text - white font - semibold mb - 2'>;
                    Contact Information;
                  </h4>;
                  <div className='space - y-1 text - sm'>;
                    <div className='flex items - center space - x-2'>;
                      <span className='text - gray - 400'>Mobile:</span>;
                      <span className='text - white'>;
                        {service.contact_info.mobile}
                      </span>;
                    </div>;
                    <div className='flex items - center space - x-2'>;
                      <span className='text - gray - 400'>Email:</span>;
                      <span className='text - white'>;
                        {service.contact_info.email}
                      </span>;
                    </div>;
                    <div className='flex items - center space - x-2'>;
                      <span className='text - gray - 400'>Address:</span>;
                      <span className='text - white text - xs'>;
                        {service.contact_info.address}
                      </span>                    </div>                </div>;
                {/* Contact Info */}
                <div className="bg - gray - 800 / 50 rounded - lg p - 3">;
                  <h4 className="text - white font - semibold mb - 2">Contact Information</h4>;
                  <div className="space - y-1 text - sm">;
                    <div className="flex items - center space - x-2">;
                      <span className="text - gray - 400">Mobile:</span>;
                      <span className="text - white">{service.contact_info.mobile}</span>;
                    </div>;
                    <div className="flex items - center space - x-2">;
                      <span className="text - gray - 400">Email:</span>;
                      <span className="text - white">{service.contact_info.email}</span>;
                    </div>;
                    <div className="flex items - center space - x-2">;
                      <span className="text - gray - 400">Address:</span>;
                      <span className="text - white text - xs">{service.contact_info.address}</span>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>)}
          </AnimatePresence>;
          {/* Action Buttons */}
              <ExternalLink className="w-4 h-4" />
            </motion.button>
            

            <motion.button
              whileTap={{ scale: 0 && 0.98 }}
              onClick={() => window && window.open(service && service.link, '_blank')}
            >;
              <span>Learn More</span>;
              <ExternalLink className='w-4 h-4' />;
            </motion && motion.button>;

            <motion&& motion.button
              className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
                isExpanded
                  ? 'border-gray-600 text-gray-400'
            <motion&& motion.button


              <ExternalLink className="w-4 h-4" />
            </motion.button>
            <motion.button

              <ExternalLink className="w-4 h-4" />
            </motion.button>
            

            <motion.button
              whileTap={{ scale: 0 && 0.98 }}
              onClick={() => window && window.open(service && service.link, '_blank')}
            >;
              <span>Learn More</span>;
              <ExternalLink className='w-4 h-4' />;
            </motion && motion.button>;
            <motion&& motion.button
              className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
                isExpanded
                  ? 'border-gray-600 text-gray-400'
                  : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'              }`}            </motion && motion.button>;
  const _containerVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.6, _ease: "easeOut" as const}
    },
    hover: {_y: -10, _transition: {
        duration: 0.3, _ease: "easeOut" as const}

    }
  },

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: &quot;auto&quot;,
      transition: {
        duration: 0.5,
        ease: &quot;easeOut&quot; as const
      }
    }
  },

  return (
    <motion.div
      className=&quot;relative group&quot;
      variants={containerVariants}
      initial=&quot;hidden&quot;
      animate=&quot;visible&quot;
      whileHover=&quot;hover&quot;
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {_/* Glow Effect */}
      <div 
        className={_`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-50'}`}
        style={_{
          background: `linear-gradient(135deg, _${service.color})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'}}
      />
      
      {_/* Main Card */}
      <div 
        className={_`relative bg-gradient-to-br ${service.color} p-1 rounded-2xl transition-all duration-500 ${_isHovered ? 'shadow-2xl' : 'shadow-lg'}`}
      >
        <div className=&quot;bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 h-full&quot;>
          {/* Header */}
          <div className=&quot;flex items-start justify-between mb-4&quot;>
            <div className=&quot;flex items-center space-x-3&quot;>
              <div className=&quot;text-3xl&quot;>{service.icon}</div>
              <div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  {getCategoryIcon(service.category)}
                  <span className=&quot;text-xs text-gray-400 uppercase tracking-wider&quot;>
                    {service.category}
                  </span>
                </div>
                <h3 className=&quot;text-xl font-bold text-white mt-1&quot;>{service.name}</h3>
              </div>
            </div>
            
            {_service.popular && (
              <motion.div
                className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold&quot;
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold"

                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                POPULAR
              </motion.div>
            )}
          </div>
          {/* Tagline */}
          <p className='text-gray-300 text-sm mb-4 leading-relaxed'>            {service.tagline}
          </p>
          {/* Price */}          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {service.tagline}
          </p>
          {/* Price */}
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-baseline space-x-1'>
              <span className='text-2xl font-bold text-white'>
                {service.price}
              </span>
              <span className='text-gray-400'>{service.period}</span>
            <div className='flex items-center space-x-2'>
              <div className='flex items-center space-x-1'>
                <Star className='w-4 h-4 text-yellow-400 fill-current' />
                <span className='text-white text-sm'>{service.rating}</span>
              </div>
              <span className='text-gray-400 text-sm'>({service.reviews})</span>            </div>
          </div>
          {/* Quick Stats */}              <span className="text-gray-400 text-sm">({service.reviews})</span>

          {/* Tagline */}
          <p className='text-gray-300 text-sm mb-4 leading-relaxed'>            {service.tagline}
          </p>

          {/* Price */}

            {service.tagline}
          </p>

          {/* Price */}

            </div>
          </div>
          {/* Quick Stats */}
          <div className='grid grid-cols-2 gap-3 mb-4'>
            <div className='flex items-center space-x-2 text-sm'>
              <Users className='w-4 h-4 text-blue-400' />
              <span className='text-gray-300'>
                {service.customers.toLocaleString()}+ users
              </span>
            </div>
            <div className='flex items-center space-x-2 text-sm'>
              <Clock className='w-4 h-4 text-green-400' />
              <span className='text-gray-300'>
                {service.trialDays} day trial
              </span>            </div>
          </div>
          {/* Market Data */}          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center space-x-2 text-sm">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">{service.customers.toLocaleString()}+ users</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">{service.trialDays} day trial</span>
          </div>
          {/* Market Data */}
          <div className='bg-gray-800/50 rounded-lg p-3 mb-4'>
            <div className='flex items-center justify-between text-sm'>
              <span className='text-gray-400'>Market Size:</span>
              <span className='text-green-400 font-semibold'>
                {service.marketSize}
              </span>
            </div>
            <div className='flex items-center justify-between text-sm mt-1'>
              <span className='text-gray-400'>Growth Rate:</span>
              <span className='text-blue-400 font-semibold'>
                {service.growthRate}
              </span>            </div>          <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Market Size:</span>
              <span className="text-green-400 font-semibold">{service.marketSize}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-400">Growth Rate:</span>
              <span className="text-blue-400 font-semibold">{service.growthRate}</span>
          </div>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                variants={contentVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                className='space-y-4'
              >
                {/* Description */}
                <div>
                  <h4 className='text-white font-semibold mb-2'>Description</h4>
                  <p className='text-gray-300 text-sm leading-relaxed'>                    {service.description}                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-4"
              >
                {/* Description */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Description</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className='text-white font-semibold mb-2'>
                    Key Features
                  </h4>
                  <div className='grid grid-cols-1 gap-2'>
                    {service.features.slice(0, 6).map((feature, index) => (
                      <div
                        key={index}
                        className='flex items-center space-x-2 text-sm'
                      >
                        <Check className='w-3 h-3 text-green-400 flex-shrink-0' />
                        <span className='text-gray-300'>{feature}</span>                      </div>                  <h4 className="text-white font-semibold mb-2">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                    ))}
                  </div>
                </div>
                        <span className='text-gray-300'>{feature}</span>                      </div>

                      </div>

                    ))}
                  </div>
                </div>

                {/* ROI */}
                <div className='bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3'>
                  <h4 className='text-white font-semibold mb-2'>ROI Promise</h4>
                  <p className='text-gray-300 text-sm'>{service.roi}</p>

                </div>
                {/* Contact Info */}
                <div className='bg-gray-800/50 rounded-lg p-3'>
                  <h4 className='text-white font-semibold mb-2'>
                    Contact Information
                  </h4>
                  <div className='space-y-1 text-sm'>
                    <div className='flex items-center space-x-2'>
                      <span className='text-gray-400'>Mobile:</span>
                      <span className='text-white'>
                        {service.contactInfo.mobile}
                      </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <span className='text-gray-400'>Email:</span>
                      <span className='text-white'>
                        {service.contactInfo.email}
                      </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <span className='text-gray-400'>Address:</span>
                      <span className='text-white text-xs'>
                        {service.contactInfo.address}
                      </span>                    </div>                </div>
                {/* Contact Info */}
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <h4 className="text-white font-semibold mb-2">Contact Information</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Mobile:</span>
                      <span className="text-white">{service.contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white">{service.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Address:</span>
                      <span className="text-white text-xs">{service.contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <div className='flex space-x-3 mt-6'>
            <motion.button
              className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2'              whileHover={{ scale: 1.02 }}          <div className="flex space-x-3 mt-6">
            <motion.button
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(service.link, '_blank')}
            >
              <span>Learn More</span>
              <ExternalLink className='w-4 h-4' />
            </motion.button>
            <motion.button
              className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
                isExpanded
                  ? 'border-gray-600 text-gray-400'
                  : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'              }`}            </motion.button>
            <motion.button

            <motion&& motion.button
                  : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'              }`}            </motion.button>
            <motion.button
              className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
                isExpanded
                  ? 'border-gray-600 text-gray-400'
                  : 'border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-black'
                  : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'              }`}

              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'Details'}
            </motion.button>
          </div>

                  : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'              }`}

                  : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'              }`}


              }`}
              whileHover={{ scale: 1 && 1.02 }}
              whileTap={{ scale: 0 && 0.98 }}
              onClick={() => setIsExpanded(!isExpanded)}
            >;
              {isExpanded ? 'Show Less' : 'Details'}
            </motion && motion.button>;
          </div>;




          {/* Expand/Collapse Indicator */}


};

export default UltraAdvancedServiceCard;            className="flex justify-center mt-4";
          {/* Expand/Collapse Indicator */}
          <motion.div
            className='flex justify-center mt-4'
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0 && 0.3 }}
          >;
            <ArrowRight className="w-5 h-5 text-gray-400" />;
        </div>;
      </div>;
    </motion && motion.div>;
  );


export default UltraAdvancedServiceCard;



  );
}
};

export default UltraAdvancedServiceCard;            className="flex justify-center mt-4"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </motion.div>
  );
}
export default UltraAdvancedServiceCard;  )
}
export default UltraAdvancedServiceCard;

};

export default UltraAdvancedServiceCard;

}
}
}
export default UltraAdvancedServiceCard;

          </motion.div>
        </div>
      </div>
    </motion.div>