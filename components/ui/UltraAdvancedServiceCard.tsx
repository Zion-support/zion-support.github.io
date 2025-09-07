


import React, { useState } from 'react';'
import { motion, AnimatePresence } from 'framer-motion';'
import { ArrowRight, ExternalLink, Star, TrendingUp;
  Users, Zap, Shield, Clock, Check, Brain;}
  Rocket, Dna, DollarSign, Lock, Globe}
 } from 'lucide-react';

interface UltraAdvancedServiceCardProps {
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

}
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

interface UltraAdvancedServiceCardProps  {service: {id: string;
    name: string;
    tagline: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    icon: string;

    color: string;


    textColor: string;
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
    contactInfo: {mobile: string;
      email: string;
      address: string;}
      website: string;}
    },realImplementation: boolean;
    implementationDetails: string;
    launchDate: string;
    customers: number;

    rating: number;

      website: string;
    }

    textColor: string;
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
    contactInfo: {mobile: string;
      email: string;
      address: string;

  Globe,;} from 'lucide-react';'

;
import { ArrowRight,ExternalLink,Star,TrendingUp,Users,Zap,Shield,Clock,Check,Brain,Rocket,Dna,DollarSign,Lock,Globe,} from 'lucide-react';
import { ArrowRight;
  ExternalLink;
  Star;
  TrendingUp;
  Users;
  Zap;
  Shield;
  Clock;
  Check;
  Brain;
  Rocket;
  Dna;
  DollarSign;
  Lock;
  Globe; } from 'lucide-react';
  Users, Zap, Shield, Clock, Check, Brain;
  Rocket, Dna, DollarSign, Lock, Globe;
import React, { useState } from 'react';'
import { motion, AnimatePresence  } from 'framer-motion';'
import { ArrowRight, ExternalLink, Star, TrendingUp;
  }
  Users, Zap, Shield, Clock, Check, Brain;
  Rocket, Dna, DollarSign, Lock, Globe;
  } from 'lucide-react';'

interface UltraAdvancedServiceCardProps  {import {ArrowRight,ExternalLink,Star,TrendingUp,Users,Zap,Shield,Clock,Check,Brain,Rocket,Dna,DollarSign,Lock,Globe} from 'lucide-react';'
  Users, Zap, Shield, Clock, Check, Brain;
  Rocket, Dna, DollarSign, Lock, Globe;interface UltraAdvancedServiceCardProps  {service: {id: string;
        }`}
        style={{}`
          background: `linear-gradient(135deg, ${service.color})`'
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      {/* Main Card */}
      <div
        onHoverStart={() => setIsHovered(true)}
      website: string},
    realImplementation: boolean,
    implementationDetails: string,
    launchDate: string,
    customers: number,
    rating: number,
    reviews: number
  }
}
const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category: string) => {

    if (category.includes('AI') || category.includes('Machine Learning')) return <Brain className="w-4 h-4" />;
    if (category.includes('Quantum')) return <Zap className="w-4 h-4" />;
    if (category.includes('Space')) return <Rocket className="w-4 h-4" />;
    if (category.includes('Biotech') |category.includes('Healthcare')) return <Dna className="w-4 h-4" />;
    if (category.includes('Finance') |category.includes('Trading')) return <DollarSign className="w-4 h-4" />;
    if (category.includes('Security') |category.includes('Cybersecurity')) return <Lock className="w-4 h-4" />;
    if (category.includes('Internet') |category.includes('Network')) return <Globe className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;
  }
}
const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps> = ({ service }) => {const [isExpanded, setIsExpanded] = useState(false)const [isHovered, setIsHovered] = useState(false)const getCategoryIcon = (category: string) => {if (category && category.includes('AI') || category && category.includes('Machine Learning'))return <Brain className='w-4 h-4' />;
    if (category && category.includes('Quantum')) return <Zap className='w-4 h-4' />;
    if (category && category.includes('Space')) return <Rocket className='w-4 h-4' />;
    if (category && category.includes('Biotech') || category && category.includes('Healthcare'))return <Dna className='w-4 h-4' />;
    if (category && category.includes('Finance') || category && category.includes('Trading'))return <DollarSign className='w-4 h-4' />;
    if (category && category.includes('Security') || category && category.includes('Cybersecurity'))return <Lock className='w-4 h-4' />;
    if (category && category.includes('Internet') || category && category.includes('Network'))return <Globe className='w-4 h-4' />;
    return <Zap className='w-4 h-4' />;  }const containerVariants = {hidden: { opacity: 0, y: 20 },visible: {      opacity: 1,y: 0,transition: {duration: 0 && 0.6,ease: 'easeOut' as const,},},    hover: {y: -10,transition: {duration: 0 && 0.3,ease: 'easeOut' as const,},},  }}
    }
  }const contentVariants = {hidden: { opacity: 0, height: 0 },visible: {height: 'auto',transition: {duration: 0 && 0.5,ease: 'easeOut' as const,},isHovered ? 'opacity-100' : 'opacity-50';
        ease: 'ease_out' as const,},},{/* Glow Effect */}
      <div  return (<motion.div;
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
  };
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
    real_implementation: boolean;
    implementation_details: string;
    launch_date: string;
    customers: number;
    rating: number;
    reviews: number;
  }
;
const UltraAdvancedServiceCard: React.FC < UltraAdvancedServiceCardProps> = ({
  service,
}) => {  const [is_expanded, setIsExpanded] = useState (false);
  const [is_hovered, setIsHovered] = useState (false);
;
  const getCategoryIcon = (category: string) =>: any {    contact_info: {
      mobile: string,
      email: string,
      address: string,
      website: string;
    }
    real_implementation: boolean,
    implementation_details: string,
    launch_date: string,
    customers: number,
    rating: number,
    reviews: number;
  }
}
const UltraAdvancedServiceCard: React.FC < UltraAdvancedServiceCardProps> = ({ service }) => {
  const [is_expanded, setIsExpanded] = useState (false);
  const [is_hovered, setIsHovered] = useState (false);
;
  const getCategoryIcon = (category: string) =>: any {
    if (|| category.includes ('Machine Learning'))) {
  $2
}
      return <Brain className='w - 4 h - 4' />;
    if () return <Zap className='w - 4 h - 4' />) {
  $2
}
    if () return <Rocket className='w - 4 h - 4' />) {
  $2
}
    if (|| category.includes ('Healthcare'))) {
  $2
}
      return <Dna className='w - 4 h - 4' />;
    if (|| category.includes ('Trading'))) {
  $2
}
      return <DollarSign className='w - 4 h - 4' />;
    if (|| category.includes ('Cybersecurity'))) {
  $2
}
      return <Lock className='w - 4 h - 4' />;
    if (|| category.includes ('Network'))) {
  $2
}
      return <Globe className='w - 4 h - 4' />;
    return <Zap className='w - 4 h - 4' />;  }
;
  const container_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: {      opacity: 1,
      coordinate_y: 0,
      transition: {
        duration: 0.6,
        ease: 'ease_out' as const,
      },
    },    hover: {
      coordinate_y: -10,
      transition: {
        duration: 0.3,
        ease: 'ease_out' as const,
      },
    },  }
;
  const content_variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {    if (|| category.includes ('Machine Learning')) return <Brain className="w - 4 h - 4" />) {
  $2
}
    if () return <Zap className="w - 4 h - 4" />) {
  $2
}
    if () return <Rocket className="w - 4 h - 4" />) {
  $2
}
    if (|| category.includes ('Healthcare')) return <Dna className="w - 4 h - 4" />) {
  $2
}
    if (|| category.includes ('Trading')) return <DollarSign className="w - 4 h - 4" />) {
  $2
}
    if (|| category.includes ('Cybersecurity')) return <Lock className="w - 4 h - 4" />) {
  $2
}
    if (|| category.includes ('Network')) return <Globe className="w - 4 h - 4" />, ) {
  $2
}
    return <Zap className="w - 4 h - 4" />;
  const container_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: {    visible: {
      opacity: 1,
      coordinate_y: 0,
      transition: {
        duration: 0.6,
        ease: 'ease_out' as const,
      },
    },        ease: "ease_out" as const;
      }
    }
    hover: {
      coordinate_y: -10,
      transition: {
        duration: 0.3,
        ease: 'ease_out' as const,
      },
    },        ease: "ease_out" as const;
      }
    }
  }
;
  const content_variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >;
      {/* Glow Effect */}
          background: `linear-gradient(135deg, ${service && service.color})`,
          transform: isHovered ? 'scale(1 && 1.05)' : 'scale(1)',
        }}
      />;
      {/* Main Card */}
      <divclassName={`relative bg-gradient-to-br ${service && service.color} p-1 rounded-2xl transition-all duration-500 ${
          isHovered ? 'shadow-2xl' : 'shadow-lg'
        }`}>;
        <div className='bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 h-full'>        className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${;
      <div 
        className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${
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
      address: string;
      website: string
    },
    realImplementation: boolean;
    implementationDetails: string;
    launchDate: string;
    customers: number;
    rating: number;
origin/cursor/automate-test-improve-and-merge-code-2533
    reviews: number
  }
}
const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps> = ({ service }) => {}
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);'
    if (category.includes('Quantum')) return <Zap className="w-4 h-4" />;'"
    if (category.includes('Space')) return <Rocket className="w-4 h-4" />;'"
    if (category.includes('Biotech') |category.includes('Healthcare')) return <Dna className="w-4 h-4" />;'"
    if (category.includes('Finance') |category.includes('Trading')) return <DollarSign className="w-4 h-4" />;'"
    if (category.includes('Security') |category.includes('Cybersecurity')) return <Lock className="w-4 h-4" />;'"
    if (category.includes('Internet') |category.includes('Network')) return <Globe className="w-4 h-4" />"
    return <Zap className="w-4 h-4" />
  }
}
const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps> = ({ service }) => {;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const getCategoryIcon = (category: string) => {;'
    if (category && category.includes('AI') || category && category.includes('Machine Learning'));'
      return <Brain className='w-4 h-4' />;'
    if (category.includes('Quantum')) return <Zap className='w-4 h-4' />;'
    if (category.includes('Space')) return <Rocket className='w-4 h-4' />;'
    if (category.includes('Biotech') |category.includes('Healthcare'))return <Dna className='w-4 h-4' />;'
    if (category.includes('Finance') |category.includes('Trading'))return <DollarSign className='w-4 h-4' />;'
    if (category.includes('Security') |category.includes('Cybersecurity'))return <Lock className='w-4 h-4' />;'
    if (category.includes('Internet') |category.includes('Network'))return <Globe className='w-4 h-4' />;'
return <Zap className='w-4 h-4' />;'
    reviews: number;
  }
}

const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps    /> = ({ service   }
}) => {

;
import { ArrowRight,ExternalLink,Star,TrendingUp,Users,Zap,Shield,Clock,Check,Brain,Rocket,Dna,DollarSign,Lock,Globe,} from 'lucide-react';
import { ArrowRight;
  ExternalLink;
  Star;
  TrendingUp;
  Users;
  Zap;
  Shield;
  Clock;
  Check;
  Brain;
  Rocket;
  Dna;
  DollarSign;
  Lock;
  Globe; } from 'lucide-react';
  Users, Zap, Shield, Clock, Check, Brain;
  Rocket, Dna, DollarSign, Lock, Globe;
import React, { useState } from 'react';'
import { motion, AnimatePresence  } from 'framer-motion';'
import { ArrowRight, ExternalLink, Star, TrendingUp;
  }
  Users, Zap, Shield, Clock, Check, Brain;
  Rocket, Dna, DollarSign, Lock, Globe;
  } from 'lucide-react';'

interface UltraAdvancedServiceCardProps  {import {ArrowRight,ExternalLink,Star,TrendingUp,Users,Zap,Shield,Clock,Check,Brain,Rocket,Dna,DollarSign,Lock,Globe} from 'lucide-react';'
  Users, Zap, Shield, Clock, Check, Brain;
  Rocket, Dna, DollarSign, Lock, Globe;interface UltraAdvancedServiceCardProps  {service: {id: string;
};


const containerVariants = {}
    hidden: { opacity: 0, y: 20}
},
"visible": {
      }
      "opacity": 1,
      "height": 'auto','
      "transition": {
        }
        "duration": 0.5,
        "ease": 'easeOut' as const,'
      }
    }
  };

  const contentVariants = {;
    hidden: { opacity: 0, height: 0 },;
    visible: {;'
      height: 'auto',;
      transition: {;
        duration: 0 && 0.5,;'
        ease: 'easeOut' as const,;
      },;
'
          isHovered ? 'opacity-100' : 'opacity-50';'
        ease: 'ease_out' as const,
      },
    },
      {/* Glow Effect */}
      <div  return (
    <motion.div;"
      className="relative group";
      variants={container_variants}"
      initial="hidden";"
      animate="visible";"
      while_hover="hover";
      onHoverEnd={() => setIsHovered (false)}
    >;
      {/* Glow Effect */}
      <div;
        className={`absolute inset - 0 rounded - 2xl blur - xl transition - all duration - 500 ${is_hovered ? 'opacity - 100' : 'opacity - 50';
        }`}
        style={{background: `linear - gradient (135deg, ${service.color})`,transform: is_hovered ? 'scale (1.05)' : 'scale (1)',}}
      />;
      {/* Main Card */}
      <div        className={`relative bg - gradient - to - br ${service.color} p - 1 rounded - 2xl transition - all duration - 500 ${is_hovered ? 'shadow - 2xl' : 'shadow - lg';
        }`}
      >;

  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    };
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
  };


          <div className="flex items-start justify-between mb-4>
            <div className=flex items-center space-x-3">
              <div className="text-3xl>{service.icon}</div>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{service.icon}</div>
              <div>
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(service.category)}
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    {service.category}

        style={{;
          background: `linear-gradient(135deg, ${service && service.color})`;
          transform: isHovered ? 'scale(1 && 1.05)' : 'scale(1)'}}
      />;{/* Main Card */}
      <div;

        className={`relative bg-gradient-to-br ${service && service.color} p-1 rounded-2xl transition-all duration-500 ${isHovered ? 'shadow-2xl' : 'shadow-lg';
        }`}>;
        <div className='bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 h-full'>;
          {/* Header */}
          <div className='flex items-start justify-between mb-4'>;
            <div className='flex items-center space-x-3'>;
              <div className='text-3xl'>{service && service.icon}</div>;
              <div>;
                <div className='flex items-center space-x-2'>;
                  {getCategoryIcon(service && service.category)}
                  <span className='text-xs text-gray-400 uppercase tracking-wider'>;
                    {service && service.category}
                  </span>;
                </div>;
                <h3 className='text-xl font-bold text-white mt-1'>;
                  {service && service.name}
                </h3>;
              </div>;

            {service && service.popular && (<motion&& motion.div;
                className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold'                animate={{ scale: [1, 1 && 1.1, 1] }}          {/* Header */}
          <div className="flex items-start justify-between mb-4">;
            <div className="flex items-center space-x-3">;
              <div className="text-3xl">{service && service.icon}</div>;
              <div>;
                <div className="flex items-center space-x-2">;
                  {getCategoryIcon(service && service.category)}
                  <span className="text-xs text-gray-400 uppercase tracking-wider">;
                    {service && service.category}
                  </span>;
                </div>;
                <h3 className="text-xl font-bold text-white mt-1">{service && service.name}</h3>;
              </div>;
            {service && service.popular && (;
              <motion&& motion.div

            {service && service.popular && (<motion&& motion.div;
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold";
                className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold';
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">{service.name}</h3>
    hidden: { opacity: 0, height: 0 },

      <div;`
        className={`relative bg-gradient-to-br ${service.color} p-1 rounded-2xl transition-all duration-500 ${'
          isHovered ? 'shadow-2xl' : 'shadow-lg'`
        }`}
      >
<div className='bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 h-full'>
origin/cursor/automate-test-improve-and-merge-code-2533
          {/* Header */}
          <div className='flex items - start justify - between mb - 4'>;
            <div className='flex items - center space - x-3'>;
              <div className='text - 3xl'>{service.icon}</div>;
              <div>;'
                <div className='flex items - center space - x-2'>;
                  {getCategoryIcon (service.category)}'
                  <span className='text - xs text - gray - 400 uppercase tracking - wider'>;
                    {service.category}
                  </span>;
                </div>;'
                <h3 className='text - xl font - bold text - white mt - 1'>;
                  {service.name}"
          <div className="flex items-start justify-between mb-4">"
            <div className="flex items-center space-x-3">"
              <div className="text-3xl">{service.icon}</div>
              <div>"
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(service.category)}"
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>"
                <h3 className="text-xl font-bold text-white mt-1">{service.name}</h3>
                </h3>
origin/cursor/automate-test-improve-and-merge-code-2533
              </div>
            
            {service.popular && (
              <motion.div
}
className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold''

                animate={{ "scale": [1, 1.1, 1] }}
                transition={{ "duration": 2, "repeat": Infinity 
}
              >;
                POPULAR;
              </motion.div>

                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold"
                animate={{ scale: [1, 1 && 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}>;
                POPULAR;
              </motion && motion.div>;
            )}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >;
                POPULAR;
              </motion.div>)}
          </div>;
          {/* Tagline */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold text-white">{service.price}</span>
              <span className="text-gray-400">{service.period}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm">{service.rating}</span>
              </div>
              <span className="text-gray-400 text-sm">({service.reviews})</span>
            </div>
          </div>
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            </div>
          </div>
          {/* Quick Stats */}

          <div className="grid grid-cols-2 gap-3 mb-4">

            <div className="flex items-center space-x-2 text-sm">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">{service.customers.toLocaleString()}+ users</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">{service.trialDays} day trial</span>
<div className='flex items-center justify-between mb-4'>
            <div className='flex items-baseline space-x-1'>
              <span className='text-2xl font-bold text-white'>
              <motion.div;
className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold'}
}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }
}
                  />;
                POPULAR;
              </motion.div>;
            )}
          </div>;
          {/* Tagline */}
<p className='text-gray-300 text-sm mb-4 leading-relaxed'    />;
            {service.tagline}

          </p>
          {/* Price */}

<div className='flex items-center justify-between mb-4'    />
            <div className='flex items-baseline space-x-1'    />
              <span className='text-2xl font-bold text-white'    />
                {service.price}
              </span>
              <span className='text-gray-400'    />{service.period}</span>
            <div className='flex items-center space-x-2'    />
              <div className='flex items-center space-x-1'    />
                <Star className='w-4 h-4 text-yellow-400 fill-current'    />
                <span className='text-white text-sm'    />{service.rating}</span>
              </div>
              <span className='text-gray-400 text-sm'    />({service.reviews})</span>
            </div>
          </div>
          {/* Quick Stats */}
<div className='grid grid-cols-2 gap-3 mb-4'    />
            <div className='flex items-center space-x-2 text-sm'    />
              <Users className='w-4 h-4 text-blue-400'    />
              <span className='text-gray-300'    />
                {service.customers.toLocaleString()}+ users;
              </span>
            </div>
            <div className='flex items-center space-x-2 text-sm'    />
              <Clock className='w-4 h-4 text-green-400'    />
              <span className='text-gray-300'    />
                {service.trialDays} day trial;
              </span>
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          </div>
          {/* Market Data */}
          <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Market Size:</span>
              <span className="text-green-400 font-semibold">{service.marketSize}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-400">Growth Rate:</span>
              <span className="text-blue-400 font-semibold">{service.growthRate}</span>
            </div>
          </div>
          {/* Tagline */}
<p className='text-gray-300 text-sm mb-4 leading-relaxed'>;'
            {service.tagline}
          </p>
          {/* Price */}

<div className='flex items-center justify-between mb-4'>'
            <div className='flex items-baseline space-x-1'>'
              <span className='text-2xl font-bold text-white'>'
                {service.price}
              </span>
              <span className='text-gray-400'>{service.period}</span>'
            <div className='flex items-center space-x-2'>'
              <div className='flex items-center space-x-1'>'
                <Star className='w-4 h-4 text-yellow-400 fill-current' />'
                <span className='text-white text-sm'>{service.rating}</span>'
              </div>
              <span className='text-gray-400 text-sm'>({service.reviews})</span>'
            </div>
          {/* Quick Stats */}
<div className='grid grid-cols-2 gap-3 mb-4'>'
            <div className='flex items-center space-x-2 text-sm'>'
              <Users className='w-4 h-4 text-blue-400' />'
              <span className='text-gray-300'>'
                {service.customers.toLocaleString()}+ users
              </span>
            </div>
            <div className='flex items-center space-x-2 text-sm'>'
              <Clock className='w-4 h-4 text-green-400' />'
              <span className='text-gray-300'>'
                {service.trialDays} day trial
              </span>
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>


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
          </div>;<div className='flex items-center justify-between text-sm mt-1'>;
              <span className='text-gray-400'>Growth Rate:</span>;
              <span className='text-blue-400 font-semibold'>;
              <span className='text-green-400 font-semibold'>
<div className='bg-gray-800/50 rounded-lg p-3 mb-4'    />
            <div className='flex items-center justify-between text-sm'    />
              <span className='text-gray-400'    />Market Size: </span>
              <span className='text-green-400 font-semibold'    />
                {service.marketSize}
              </span>
            </div>

          {/* Tagline */}'
          <p className='text-gray-300 text-sm mb-4 leading-relaxed'>            {service && service.tagline}
          </p>;
"
          {/* Price */}          <p className="text-gray-300 text-sm mb-4 leading-relaxed">;
            {service && service.tagline}
          </p>;
          {/* Price */}'
          <div className='flex items-center justify-between mb-4'>;'
            <div className='flex items-baseline space-x-1'>;'
              <span className='text-2xl font-bold text-white'>;
                {service && service.price}
              </span>;'
              <span className='text-gray-400'>{service && service.period}</span>;'
            <div className='flex items-center space-x-2'>;'
              <div className='flex items-center space-x-1'>;'
                <Star className='w-4 h-4 text-yellow-400 fill-current' />;'
                <span className='text-white text-sm'>{service && service.rating}</span>;
              </div>;'
              <span className='text-gray-400 text-sm'>({service && service.reviews})</span>            </div>;
          </div>;
          {/* Quick Stats */}'
          <div className='grid grid-cols-2 gap-3 mb-4'>;'
            <div className='flex items-center space-x-2 text-sm'>;'
              <Users className='w-4 h-4 text-blue-400' />;'
              <span className='text-gray-300'>;
                {service && service.customers.toLocaleString()}+ users;
              </span>;
            </div>;'
            <div className='flex items-center space-x-2 text-sm'>;'
              <Clock className='w-4 h-4 text-green-400' />;'
              <span className='text-gray-300'>;
                {service && service.trialDays} day trial;
              </span>            </div>;
          </div>;"
          {/* Market Data */}          <div className="grid grid-cols-2 gap-3 mb-4">;"
            <div className="flex items-center space-x-2 text-sm">;"
              <Users className="w-4 h-4 text-blue-400" />;"
              <span className="text-gray-300">{service && service.customers.toLocaleString()}+ users</span>;
            </div>;"
            <div className="flex items-center space-x-2 text-sm">;"
              <Clock className="w-4 h-4 text-green-400" />;"
              <span className="text-gray-300">{service && service.trialDays} day trial</span>;
          </div>;
          {/* Market Data */}'
          <div className='bg-gray-800/50 rounded-lg p-3 mb-4'>;'
            <div className='flex items-center justify-between text-sm'>;'
              <span className='text-gray-400'>Market Size:</span>;'
              <span className='text-green-400 font-semibold'>;
                {service && service.marketSize}
              </span>;
            </div>;'
            <div className='flex items-center justify-between text-sm mt-1'>;'
              <span className='text-gray-400'>Growth Rate:</span>;'
              <span className='text-blue-400 font-semibold'>;
                {service && service.growthRate}"
              </span>            </div>          <div className="bg-gray-800/50 rounded-lg p-3 mb-4">;"
            <div className="flex items-center justify-between text-sm">;"
              <span className="text-gray-400">Market Size:</span>;"
              <span className="text-green-400 font-semibold">{service && service.marketSize}</span>;
            </div>;"
            <div className="flex items-center justify-between text-sm mt-1">;"
              <span className="text-gray-400">Growth Rate:</span>;"
              <span className="text-blue-400 font-semibold">{service && service.growthRate}</span>;
          </div>;


            <div className='flex items-center justify-between text-sm mt-1'>
              <span className='text-gray-400'>Growth Rate:</span>
              <span className='text-blue-400 font-semibold'>
                {service.growthRate}
              </span>;
            </div>;
          {/* Expandable Content */}
          <AnimatePresence>;
            {isExpanded && (<motion&& motion.div;
                variants={contentVariants}{/* Description */}initial='hidden';
                animate='visible';
                exit='hidden';
                className='space-y-4';
              >;
                {/* Description */}
                <div>;
                  <h4 className='text-white font-semibold mb-2'>Description</h4>;
                  <p className='text-gray-300 text-sm leading-relaxed'>;
                    {service.description}</p>;
                </div>;

          </div>




          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                variants={contentVariants}

                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-4"
              >

                {/* Description */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Description</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">

                    </div>
              </motion.div>
            )}
          </AnimatePresence>

<div className='flex space-x-3 mt-6'>'
            <motion.button,
className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 "hover":from-cyan-400 "hover":to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2''
              whileHover={{ "scale": 1.02 }}
              whileTap={{ "scale": 0.98 

            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0 && 0.3 }}
          >;
            <ArrowRight className="w-5 h-5 text-gray-400" />;
        </div>;
    </motion && motion.div>;

  );
export default UltraAdvancedServiceCard;  );
}
export default UltraAdvancedServiceCard;
'
          <div className='flex space - x-3 mt - 6>;
            <motion.button;"
              className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - lg transition - all duration - 300 flex items - center justify - center space - x-2'              while_hover={{ scale: 1.02 }}          <div className="flex space - x-3 mt - 6>;
            <motion.button;
              className="flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - lg transition - all duration - 300 flex items - center justify - center space - x-2";
              while_hover={{ scale: 1.02 }}
              while_tap={{ scale: 0.98 }}
              on_click={() => window.open (service.link, '_blank')}
            >;
              <span > Learn More</span>;
              <ExternalLink className='w - 4 h - 4' />;
            </motion.button>;
            <motion.button;
              className={`px - 4 py - 3 rounded - lg border - 2 transition - all duration - 300 flex items - center justify - center ${is_expanded;
                  ? 'border - gray - 600 text - gray - 400';
                  : 'border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black'              }`}            </motion.button>;
            <motion.button;
              className={`px - 4 py - 3 rounded - lg border - 2 transition - all duration - 300 flex items - center justify - center ${is_expanded;
                  ? 'border - gray - 600 text - gray - 400';
                  : 'border - cyan - 400 text - cyan - 400 hover: bg - cyan - 400 hover:text - black';
              }`}
              while_hover={{ scale: 1.02 }}
              while_tap={{ scale: 0.98 }}
              on_click={() => setIsExpanded (!is_expanded)}
            >;
              {isExpanded ? 'Show Less' : 'Details'}
            </motion.button>
          </div>

          {/* Expand/Collapse Indicator */}
          <motion.div
            className="flex justify-center mt-4"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-5 h-5 text-gray-400" />
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0 && 0.3 }}
          >;"
            <ArrowRight className="w-5 h-5 text-gray-400" />;
        </div>;
      </div>;
    </motion && motion.div>;
  );
export default UltraAdvancedServiceCard;  );
};
export default UltraAdvancedServiceCard;
'
          <div className='flex space - x-3 mt - 6'>;
            <motion.button;'"
              className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - lg transition - all duration - 300 flex items - center justify - center space - x-2'              while_hover={{ scale: 1.02 }}          <div className="flex space - x-3 mt - 6">;
            <motion.button;"
              className="flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - lg transition - all duration - 300 flex items - center justify - center space - x-2";
              while_hover={{ scale: 1.02 }}
              while_tap={{ scale: 0.98 }}'
              on_click={() => window.open (service.link, '_blank')}
            >;
              <span > Learn More</span>;'
              <ExternalLink className='w - 4 h - 4' />;
            </motion.button>;
            <motion.button;`
              className={`px - 4 py - 3 rounded - lg border - 2 transition - all duration - 300 flex items - center justify - center ${}
                is_expanded;'
                  ? 'border - gray - 600 text - gray - 400';'`
                  : 'border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black'              }`}            </motion.button>;
            <motion.button;`
              className={`px - 4 py - 3 rounded - lg border - 2 transition - all duration - 300 flex items - center justify - center ${}
                is_expanded;'
                  ? 'border - gray - 600 text - gray - 400';'
                  : 'border - cyan - 400 text - cyan - 400 hover: bg - cyan - 400 hover:text - black';`
              }`}
              while_hover={{ scale: 1.02 }}
              while_tap={{ scale: 0.98 }}
              on_click={() => setIsExpanded (!is_expanded)}
            >;'
              {is_expanded ? 'Show Less' : 'Details'}
            </motion.button>;
          </div>;
          {/* Expand / Collapse Indicator */}
          <motion.div;
            className='flex justify - center mt - 4';
            animate={{ rotate: is_expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >;
            <ArrowRight className='w - 5 h - 5 text - gray - 400' />          </motion.div>;
        </div>;
    </motion.div>)}
}
export default UltraAdvancedServiceCard;</motion.div>;
        </div>;
    </motion.div>;
}
export default UltraAdvancedServiceCard;


"


};


);
};

export default UltraAdvancedServiceCard;
origin/cursor/automate-test-improve-and-merge-code-2533

"


    reviews: number
    reviews: number;
  }

const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps /> = ({ service   ;}
}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


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
