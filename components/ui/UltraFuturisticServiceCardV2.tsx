
  ArrowRight,
Star
  Users,
TrendingUp
  Zap,

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    name: string;
    tagline: string;
    description: string;
    category: string;price: {monthly: number;
      yearly: number;
      currency: string;
      trialDays: number;

    benefits: string[];
    targetAudience: string[];
    marketPosition: string;
    competitors: string[];
    techStack: string[];
    realImplementation: boolean;
    implementationDetails: string;
    roi: string;

    integrations: string[];
    useCases: string[];integrations: string[];
    support: string;
    compliance: string[];
    link: string;
    icon: string;
    color: string;

      case 'quantum & emerging tech':;
        return <Rocket className=w-5 h-5 />;
      case 'enterprise it':;
        return <Shield className=w-5 h-5 />;
      case 'space & metaverse':;
        return <Globe className=w-5 h-5 />;
      case 'micro saas':;

        return <TrendingUp className=w-5 h-5 />;
        return <Rocket className="w-5 h-5 />;'
      case 'enterprise it:;
        return <Shield className="w-5 h-5" />;
      case 'space & metaverse':;
        return <Globe className=w-5 h-5" />;
      case micro saas':;"
        return <TrendingUp className=w-5 h-5 />;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

    "launchDate": string;


    customers: number;
    rating: number;
    reviews: number;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
    marketSize?: string;
        return <TrendingUp className="w-5 h-5" />;
import React from 'react';
import { motion } from framer-motion;
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
    marketSize?: string,
    growthRate?: string
  },
  index: number}


                  {getCategoryIcon(service.category)}

                  <span className='text-xs font-medium text-gray-400 uppercase tracking-wider'>'
                    {service.category}
                  </span>
                </div>
              </div>
            </div>

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                    {service && service.category}
                  </span>;
                </div>;
              </div>;
            </div>;
                initial={{ "scale": 0 }}

                animate={{ "scale": 1 
}


              </motion.div>

            
}
          </div>;
<h3 className='text-xl font-bold text-white mb-2 group-"hover":text-transparent group-"hover":bg-clip-text group-"hover":bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300'>;'
            {service.name}
          </h3>;

            {service.tagline}
          </p>;
        </div>;
        {/* Stats */}
            

<div className='relative z-10 mb-6'>'
          <div className='grid grid-cols-3 gap-4'>'
            <div className='text-center'>'
              <div className='text-2xl font-bold text-cyan-400'>'
                {service.rating}

              </div>
              <div className='text-xs text-gray-400'>Rating</div>'

            </div>

                {service.customers.toLocaleString()}
              </div>;
              <div className='text-xs text-gray-400'>Customers</div>;'
            </div>;

                {service.customers.toLocaleString ()}
              </div>;
              <div className='text - xs text - gray - 400'>Customers</div>;'
            </div>;

                {service.reviews}
            )}
          </div>


              <div className=text-xs text-gray-400>Reviews</div>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            </div>
          </div>
        </div>

              <div className="text-xs text-gray-400">Reviews</div>;
            </div>;
          </div>;
        </div>;
          </div>;


              </motion.div>;
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-gray-500 mt-2">
                +{service.features.length - 3} more features
=======
        </div>;



          <h4 className=text-sm font-semibold text-gray-300 mb-3'>
            Key Features;
          </h4>'
          <div className=space-y-2>            {service.features.slice(0, 3).map((feature, idx) => (        <div className=relative z-10 mb-6">"
          <h4 className=text-sm font-semibold text-gray-300 mb-3>Key Features</h4>"
          <div className="space-y-2>'
          <div className='space-y-2>            {service.features.slice(0, 3).map((feature, idx) => (


              </div>
            )}
          </div>
        </div>

              >
                <div className='w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full></div>
                <span className=text-gray-300'>{benefit}</span>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              </motion.div>
            )
}

          </div>;

=======
        </div>;'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                <span className=text-gray-300>{benefit}</span>              </motion.div>

        {/* Market info */}


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              </div>
              <div className='flex items-center justify-between text-xs mt-1'>
                <span className=text-gray-400>Growth Rate</span>
                <span className='text-green-400 font-medium'>
                  {service.growthRate}
                </span>
              </div>
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          </div>
            ))}

        {/* Market info */}

=======
        {service && service.marketSize && service && service.growthRate && (;

=======
        {service && service.marketSize && service && service.growthRate && (;'
          <div className='relative z-10 mb-6'>;'
            <div className='bg-gray-800/30 rounded-lg p-3 border border-gray-600/20'>;'
              <div className='flex items-center justify-between text-xs'>;'
                <span className='text-gray-400'>Market Size</span>;'
                <span className='text-cyan-400 font-medium'>;
=======
          <div className=relative z-10 mb-6'>;'
            <div className=bg-gray-800/30 rounded-lg p-3 border border-gray-600/20>;'
              <div className='flex items-center justify-between text-xs>;
                <span className='text-gray-400'>Market Size</span>;
                <span className=text-cyan-400 font-medium'>;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
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
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        )}

            className=group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25        <div className="relative z-10">;
          <motion&& motion.a;
            href={service && service.link}
            whileHover={{ scale: 1 && 1.05 }}

            <div className=absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300></div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          </motion && motion.a>;
        </div>;

          </motion.a>

        </div>


        {/* Hover overlay */}
        <motion&& motion.div;


          whileHover={{ "opacity": 1 }}


=======


        />
      </div>
    </motion.div>
  );
export default UltraFuturisticServiceCardV2;        />
      </div>
    </motion.div>
  )
}
export default UltraFuturisticServiceCardV2;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
