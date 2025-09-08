
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

  Globe,;
  Rocket,;
} from 'lucide-react';

interface ServiceCardProps {
  service: {

    id: string;

    name: string;
    tagline: string;
    description: string;

    category: string;

    benefits: string[];
    targetAudience: string[];
    marketPosition: string;
    competitors: string[];
    techStack: string[];
    realImplementation: boolean;
    implementationDetails: string;
    roi: string;

    use_cases: string[];
    price: {
      monthly: number;
      yearly: number;
      currency: string;
      trialDays: number;
      setupTime: string;
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

    integrations: string[];
    useCases: string[];integrations: string[];
    support: string;
    compliance: string[];
    link: string;
    icon: string;
    color: string;
    popular: boolean;return <Zap className='w-5 h-5' />;
    popular: boolean;


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




const getGradientClass = (
    if (color.includes('from-') && color.includes('to-')) {

;
  return color;) => {
  return $3;}
}
    }
    return 'from-cyan-500 to-blue-500';
  }
    >

      {/* Glow effect */}

      <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'    /></div>;

                    {service && service.category}
                  </span>;
                </div>;
              </div>;
            </div>;

            {service && service.popular && (;
              <motion&& motion.div

                initial={{ scale: 0 }}






              </motion.div>
            )}
          </div>



          </p>
        </div>
        {/* Stats */}


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

          <p className='text-gray-300 text-sm leading-relaxed'    />;




              <div className='text-xs text-gray-400'>Rating</div>


            </div>

            <div className='text-center'    />
              <div className='text-2xl font-bold text-purple-400'    />


                {service.customers.toLocaleString()}

            <div className='text-center'    />;
              <div className='text-2xl font-bold text-pink-400'    />;
              </div>;
              <div className='text - xs text - gray - 400'    />Rating</div>;
            </div>;
            <div className='text - center'    />;
              <div className='text - 2xl font - bold text - purple - 400'    />;

                {service.customers.toLocaleString ()}
              </div>;
              <div className='text - xs text - gray - 400'    />Customers</div>;
            </div>;

            <div className='text - center'    />;
              <div className='text - 2xl font - bold text - pink - 400'    />;


                {service.reviews}


              </div>
              <div className='text-xs text-gray-400'>Customers</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-pink-400'>


        <div className="relative z-10 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{service.rating}</div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>



            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{service.customers.toLocaleString()}</div>
              <div className="text-xs text-gray-400">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">{service.reviews}</div>

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

              <div className="text-xs text-gray-400">Reviews</div>
            </div>
          </div>
        </div>




            {service.features.length > 3 && (</div>;}

            )}

          </div>
        </div>



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




              </div>



            )}

          </div>;
        </div>;




        {/* Benefits */}
        <div className='relative z-10 mb-6'>;

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


          </h4>



          <div className='space-y-2'>            {service.benefits.slice(0, 2).map((benefit, idx) => (


                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}



                <span className='text-gray-300'>{benefit}</span>              </motion.div>


              </motion.div>
            ))}

          </div>;
        </div>;

className='flex items-center space-x-2 text-sm'
                  />


          </div>
        </div>
        {/* Market info */}

        {service.marketSize && service.growthRate && (

<div className='relative z-10 mb-6'    />
            <div className='bg-gray-800/30 rounded-lg p-3 border border-gray-600/20'    />
              <div className='flex items-center justify-between text-xs'    />
                <span className='text-gray-400'    />Market Size</span>
                <span className='text-cyan-400 font-medium'    />}

}
                  {service.marketSize}
                </span>;
              </div>;




        {service && service.marketSize && service && service.growthRate && (;
          <div className='relative z-10 mb-6'    />;


<div className='relative z-10'>




          <motion.a
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}




          </motion && motion.a>;
        </div>;







className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none'
           />


export default UltraFuturisticServiceCardV2;

"






