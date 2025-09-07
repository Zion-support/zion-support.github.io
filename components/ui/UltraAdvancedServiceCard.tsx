

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
  DollarSign,;}
  Lock,;}
  Globe,;} from 'lucide-react';

  Users, Zap, Shield, Clock, Check, Brain;
  Rocket, Dna, DollarSign, Lock, Globe;
import React, { useState } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { ArrowRight, ExternalLink, Star, TrendingUp;
  Users, Zap, Shield, Clock, Check, Brain;}
  Rocket, Dna, DollarSign, Lock, Globe;}
  } from 'lucide-react';

interface UltraAdvancedServiceCardProps  {import {ArrowRight,ExternalLink,Star,TrendingUp,Users,Zap,Shield,Clock,Check,Brain,Rocket,Dna,DollarSign,Lock,Globe} from 'lucide-react';
  Users, Zap, Shield, Clock, Check, Brain;
  Rocket, Dna, DollarSign, Lock, Globe;

interface UltraAdvancedServiceCardProps {;
  service: {;
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


    reviews: number;
  };

      website: string;
    }

    realImplementation: boolean;
    implementationDetails: string;
    launchDate: string;
    customers: number;

    rating: number;

  }
}

const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps    /> = ({ service   }
}) => {



  const [isExpanded, setIsExpanded] = useState(false);

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
        className={`absolute inset - 0 rounded - 2xl blur - xl transition - all duration - 500 ${'
          is_hovered ? 'opacity - 100' : 'opacity - 50';`
        }`}
        style={{}`
          background: `linear - gradient (135deg, ${service.color})`,'
          transform: is_hovered ? 'scale (1.05)' : 'scale (1)',
        }}
      />;
      {/* Main Card */}`
      <div        className={`relative bg - gradient - to - br ${service.color} p - 1 rounded - 2xl transition - all duration - 500 ${'
          is_hovered ? 'shadow - 2xl' : 'shadow - lg';`
        }`}
      >;'`
        <div className='bg - gray - 900 / 90 backdrop - blur - xl rounded - 2xl p - 6 h - full'>        className={`absolute inset - 0 rounded - 2xl blur - xl transition - all duration - 500 ${'
          is_hovered ? 'opacity - 100' : 'opacity - 50';`
        }`}

        ease: 'easeOut' as const,
      },
    },
  };

      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >

      {/* Glow Effect */}

        }`}
        style={{background: `linear-gradient(135deg, ${service.color})`;
          transform: isHovered ? 'scale(1.05)' : 'scale(1)';
        }}
      />

    hidden: { opacity: 0, height: 0 },

      <div;`
        className={`relative bg-gradient-to-br ${service.color} p-1 rounded-2xl transition-all duration-500 ${'
          isHovered ? 'shadow-2xl' : 'shadow-lg'`
        }`}
      >

              <div className='text - 3xl'>{service.icon}</div>;
              <div>;'
                <div className='flex items - center space - x-2'>;
                  {getCategoryIcon (service.category)}'
                  <span className='text - xs text - gray - 400 uppercase tracking - wider'>;
                    {service.category}
                  </span>;
                </div>;
                <h3 className='text - xl font - bold text - white mt - 1'    />;

                  {service.name}

                </h3>
              </div>
            </div>
            {service.popular && (
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
          </div>

            {service.tagline}

          </p>
          {/* Price */}
            </div>
          </div>
          {/* Quick Stats */}
"
          <div className="grid grid-cols-2 gap-3 mb-4">
"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold"
                animate={{ scale: [1, 1 && 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}>;
                POPULAR;
              </motion && motion.div>;
            )}"
            <div className="flex items-center space-x-2 text-sm">"
              <Users className="w-4 h-4 text-blue-400" />"
              <span className="text-gray-300">{service.customers.toLocaleString()}+ users</span>

              <span className='text-green-400 font-semibold'>
                {service.marketSize}
              </span>
            </div>

            <div className='flex items-center justify-between text-sm mt-1'    />
              <span className='text-gray-400'    />Growth Rate:</span>
              <span className='text-blue-400 font-semibold'    />
                {service.growthRate}
              </span>
            </div>
          </div>

          {/* Expandable Content */}
          <AnimatePresence>;
            {isExpanded && (;
              <motion&& motion.div;
                variants={contentVariants}
                {/* Description */}
initial='hidden'
                animate='visible'
                exit='hidden'
                className='space-y-4'
                  />
                {/* Description */}
                <div    />
                  <h4 className='text-white font-semibold mb-2'    />Description</h4>
                  <p className='text-gray-300 text-sm leading-relaxed'    />
                    {service.description}
                  </p>
                </div>

                <div    />;
                  <h4 className=\"text-white font-semibold mb-2\"    />Description</h4>;"
                  <p className=\"text-gray-300 text-sm leading-relaxed\"    />;
                  </p>;

                </div>;

                {/* Features */}

                <div    />

<h4 className='text-white font-semibold mb-2'>
                    Key Features
                  </h4>
                  <div className='grid grid-cols-1 gap-2'    />
                    {service.features.slice(0, 6).map((feature, index) => (}
                      <div;}
key={index}
                        className='flex items-center space-x-2 text-sm'
                          />
                        <Check className='w-3 h-3 text-green-400 flex-shrink-0'    />
                        <span className='text-gray-300'    />{feature}</span>
                      </div>
                    ))}

                  <p className='text-gray-300 text-sm'>{service.roi}</p>

                </div>

                {/* Contact Info */}
                <div className='bg-gray-800/50 rounded-lg p-3'    />;
                  <h4 className='text-white font-semibold mb-2'    />;
                    Contact Information;
                  </h4>;
                  <div className='space-y-1 text-sm'    />;
                    <div className='flex items-center space-x-2'    />;
                      <span className='text-gray-400'    />Mobile:</span>;
                      <span className='text-white'    />;
                        {service.contactInfo.mobile}
                      </span>;
                    </div>;
                    <div className='flex items-center space-x-2'    />;
                      <span className='text-gray-400'    />Email:</span>;
                      <span className='text-white'    />;
                        {service.contactInfo.email}

                      </span>
                    </div>
                    <div className='flex items-center space-x-2'    />
                      <span className='text-gray-400'    />Address: </span>
                      <span className='text-white text-xs'    />
                        {service.contactInfo.address}

                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          {/* Action Buttons */}

              }`}
              whileHover={{ scale: 1 && 1.02 }}
              whileTap={{ scale: 0 && 0.98 }}
              onClick={() => setIsExpanded(!isExpanded)}
            >;'
              {isExpanded ? 'Show Less' : 'Details'}

          {/* Expand/Collapse Indicator */}

        </div>
      </div>
    </motion.div>
  );
}
};
"
export default UltraAdvancedServiceCard;            className="flex justify-center mt-4"
            </motion && motion.button>;
          </div>;

          {/* Expand/Collapse Indicator */}

};
"
export default UltraAdvancedServiceCard;            className="flex justify-center mt-4";
};
"
export default UltraAdvancedServiceCard;            className="flex justify-center mt-4";
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
              {isExpanded ? 'Show Less' : 'Details'}{/* Expand/Collapse Indicator */}
          <motion.div;
className='flex justify-center mt-4';
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}

              />
            <ArrowRight className='w-5 h-5 text-gray-400'    />
          </motion.div>
        </div>
      </div>
    </motion.div>

)
};

