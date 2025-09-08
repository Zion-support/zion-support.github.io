
import { motion } from 'framer-motion';
import {
import {
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
  DollarSign,;'
} from 'lucide-react';
interface QuantumHolographicCardProps {;
  service: {;

  Clock,;
  DollarSign,;
} from 'lucide-react';

interface QuantumHolographicCardProps {
  service: {

    id: string;
  Star;
Zap,
Shield;
TrendingUp,
ArrowRight;
ExternalLink,
Check;
Users,
Clock;}
DollarSign;}
  Star,Zap,Shield,TrendingUp,ArrowRight,ExternalLink,Check,Users,Clock,DollarSign} from 'lucide-react';

interface QuantumHolographicCardProps  {service: {import {Star,Zap,Shield,TrendingUp,ArrowRight,ExternalLink,Check,Users,Clock,DollarSign} from 'lucide-react';




      }
    }
    hover: {}
      coordinate_y: -10,
      scale: 1.02,
      transition: {}
        duration: 0.3,
      }
    }
  }
;
  const glow_variants = {}
    initial: { opacity: 0.5, scale: 1 },
    animate: {



      address: string;

      website: string}
   }
},
    realImplementation: boolean;

    implementationDetails: string;
    launchDate: string;
    customers: number;
    rating: number;

    reviews: number;
 
},
  className?: string;
}

const QuantumHolographicCard: React.FC<QuantumHolographicCardProps    /> = ({ service, className;

const featureVariants = {}
    hidden: { opacity: 0, x: -20}
}

      opacity: [0.5, 1, 0.5]
      scale: [1, 1.05, 1]
      transition: {
        duration: 3
        repeat: Infinity
        ease: 'easeInOut' as const
      }
    },  };      opacity: [0.5, 1, 0.5];

    real_implementation: boolean;
    implementation_details: string;
    launch_date: string;
    customers: number;
    rating: number;
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
    contactInfo: {
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

    >



      />;


      {/* Main card */}
      <div className='relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 overflow-hidden'>;
        {/* Quantum particle effect background */}



      opacity: [0.5, 1, 0.5],
      scale: [1, 1.05, 1],


    visible: (i: number) => ({
      opacity: 1;
x: 0;
transition: {


            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-white">{service.price}</span>
              <span className="text-gray-400">{service.period}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Clock className="w-4 h-4" />

          </div>;
            )}
          </div>;
            )}

          </div>


          {/* Price and trial */}


<div className='flex items-center justify-between mb-4'    />
            <div className='flex items-center space-x-2'    />
              <span className='text-3xl font-bold text-white'    />
                {service.price}
              </span>
              <span className='text-gray-400'    />{service.period}</span>
            </div>
            <div className='flex items-center space-x-2 text-sm text-gray-300'    />
              <Clock className='w-4 h-4'    />
              <span    />{service.trialDays} days free</span>

            </div>
          </div>;
          {/* Price and trial */}<div className="flex items-center justify-between mb-4">;
            <div className="flex items-center space-x-2">;
              <span className="text-3xl font-bold text-white">{service.price}</span>;
              <span className="text-gray-400">{service.period}</span>;
            </div>;
            <div className="flex items-center space-x-2 text-sm text-gray-300">;
              <Clock className="w-4 h-4" />;
            </div>;

          </div>;
          {/* Description */}
          <p className='text-gray-300 mb-6 leading-relaxed'>;
            {service && service.description}
          </p>;

          <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>


          {/* Key metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                <Users className="w-4 h-4" />
                <span>Customers</span>
              </div>
              <div className="text-xl font-bold text-white">{service.customers.toLocaleString()}+</div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>Rating</span>

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


            <div className='space - y-2'>;
              {service.features.slice (0, 4).map ((feature, index) => (
                <motion.div;

                  key={index}
                  className="flex items - center space - x-2 text - sm text - gray - 300";
                  custom={index}


                </motion.div>


              ))}




          </div>
          {/* ROI and competitors */}

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-900/20 rounded-lg p-3 border border-green-700/30">
              <div className="text-sm font-semibold text-green-300 mb-1">ROI</div>
              <div className="text-xs text-gray-300">{service.roi}</div>
            </div>
            
            <div className="bg-orange-900/20 rounded-lg p-3 border border-orange-700/30">
              <div className="text-sm font-semibold text-orange-300 mb-1">Competitors</div>
              <div className="text-xs text-gray-300">
                {service.competitors.slice(0, 2).join(', ')}

              </div>
            </div>
          </div>




              </div>
            </div>
          </div>

            <div className='flex items-center justify-between mb-2'>;
              <span className='text-sm font-semibold text-blue-300'>;
                Market Position;
              </span>;'
              <TrendingUp className='w-4 h-4 text-green-400' />;


            <div className='flex items-center justify-between mt-2 text-xs'    />;
              <span className='text-cyan-300'    />{service && service.marketSize}</span>;
              <span className='text-green-300'    />;
                {service && service.growthRate} growth;
              </span>            </div>;
          </div>;"
          {/* ROI and competitors */}            <p className=\"text-xs text-gray-300 leading-relaxed\"    />{service && service.marketPosition}</p>;"
            <div className=\"flex items-center justify-between mt-2 text-xs\"    />;"
              <span className=\"text-cyan-300\"    />{service && service.marketSize}</span>;"
              <span className=\"text-green-300\"    />{service && service.growthRate} growth</span>;
          </div>;
          {/* ROI and competitors */}
          <div className='grid grid-cols-2 gap-4 mb-6'    />;
            <div className='bg-green-900/20 rounded-lg p-3 border border-green-700/30'    />;
              <div className='text-sm font-semibold text-green-300 mb-1'    />;
                ROI;
              </div>;
              <div className='text-xs text-gray-300'    />{service && service.roi}</div>;
            </div>;
            <div className='bg-orange-900/20 rounded-lg p-3 border border-orange-700/30'    />;
              <div className='text-sm font-semibold text-orange-300 mb-1'    />;
                Competitors;
              </div>;"
              <div className='text-xs text-gray-300'    />                {service && service.competitors.slice(0, 2).join(', ')}<div className=\"bg-orange-900/20 rounded-lg p-3 border border-orange-700/30\"    />;"
              <div className=\"text-sm font-semibold text-orange-300 mb-1\"    />Competitors</div>;"
              <div className=\"text-xs text-gray-300\"    />;


          <div className='bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700/50'    />;
            <h4 className='text-white font-semibold mb-3 flex items-center space-x-2'    />;
              <Shield className='w-4 h-4 text-blue-400'    />;
              <span    />Contact & Support</span>;
            </h4>;
            <div className='space-y-2 text-sm text-gray-300'    />;
              <div className='flex items-center space-x-2'    />;
                <span className='text-blue-400'    />📱</span>;
                <span    />{service && service.contactInfo.mobile}</span>;
              </div>;
              <div className='flex items-center space-x-2'    />;
                <span className='text-green-400'    />✉️</span>;
                <span    />{service && service.contactInfo.email}</span>;
              </div>;
              <div className='flex items-center space-x-2'    />;
                <span className='text-purple-400'    />📍</span>;
                <span className='text-xs'    />{service && service.contactInfo.address}</span>              </div>              <span    />Contact & Support</span>;
            </h4>;"
            <div className=\"space-y-2 text-sm text-gray-300\"    />;"
              <div className=\"flex items-center space-x-2\"    />;"
                <span className=\"text-blue-400\"    />📱</span>;
                <span    />{service && service.contactInfo.mobile}</span>;
              </div>;"
              <div className=\"flex items-center space-x-2\"    />;"
                <span className=\"text-green-400\"    />✉️</span>;
                <span    />{service && service.contactInfo.email}</span>;
              </div>;"
              <div className=\"flex items-center space-x-2\"    />;"
                <span className=\"text-purple-400\"    />📍</span>;"
                <span className=\"text-xs\"    />{service && service.contactInfo.address}</span>;




          <motion.a;
href={service.link}

className='group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25'


            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }
}
              />;
            <span className='mr-2'    />Get Started</span>;
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300'    />;

            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300'    />;
          </motion.a>;
          {/* CTA Button */}





