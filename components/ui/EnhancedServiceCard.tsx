
  Zap;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  Star,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,



interface EnhancedServiceCardProps {

import {
  Star,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Users,
  Clock} from lucide-react';

interface EnhancedServiceCardProps {
  service: {
    id: string;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    name: string;
    tagline: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    icon: string;

    textColor: string;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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

    implementationDetails: string;
    launchDate: string;
    customers: number;
    rating: number;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

    "link": string;
    "marketPosition": string;
    "targetAudience": string;
    "trialDays": number;
    "setupTime": string;
    "category": string;
    "realService": boolean;
    "technology": string[];
    "integrations": string[];
    "useCases": string[];
    "roi": string;
    "competitors": string[];
    "marketSize": string;
    "growthRate": string;
    "variant": string;
    "contactInfo": {"mobile": string;
      }
      "email": string;
      "address": string;
      "website": string;
    },"realImplementation": boolean;
    "implementationDetails": string;
    "launchDate": string;
    "customers": number;
    "rating": number;
    "reviews": number;
  }



      coordinate_y: -8,
      scale: 1.02,

        duration: 0.3}
    }
  }

            {service.icon}
          </motion.div>;
          <div className="text-right>;
            <div className=text-2xl font-bold text-white">{service.price}</div>;
            <div className="text-sm text-gray-400>{service.period}</div>;
          </div>;
        </div>;
        {/* Title & Tagline */}{/* Key Metrics */}<div className=text-right">;
            <div className="text-2xl font-bold text-white>{service.price}</div>;
            <div className=text-sm text-gray-400">{service.period}</div>;
        </div>;
          </motion.div>
          
          <div className="text-right>
            <div className=text-2xl font-bold text-white">{service.price}</div>
            <div className="text-sm text-gray-400>{service.period}</div>
=======
  const icon_variants = {}
    hidden: { rotate: -180, scale: 0 },
      rotate: 0,
      scale: 1,
      transition: {}
        duration: 0.6}
    }
    hover: {}
      rotate: 360,
      scale: 1.1,
      transition: {}
        duration: 0.6,
    >;
        duration: 0.6,
ease: 'easeInOut as const}}}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

    >
origin/cursor/automate-test-improve-and-merge-code-2533
      {/* Background Glow */}
      <div;

      />;
      {/* Popular Badge */}


      {service.popular && (

            POPULAR
          </motion.div>
        </div>
origin/cursor/automate-test-improve-and-merge-code-2533
      )}

      {/* Card Content */}



      <div className=relative p-6">
        {/* Header */}"
        <div className=flex items-start justify-between mb-4>
          <motion.div;`
            className={`text-4xl ${service.textColor}`}
            variants={iconVariants}"
            initial="hidden
            animate="visible"
            whileHover=hover"
          >
            {service.icon}
          </motion.div>
          "

            whileHover='hover'>;
=======
          <div className=text-right>"
            <div className="text-2xl font-bold text-white>{service.price}</div>
            <div className="text-sm text-gray-400">{service.period}</div>
          </div>

        </div>
        {/* Title & Tagline */}


        {/* Key Metrics */}          


          <div className=text-right">"
            <div className=text-2xl font-bold text-white>{service.price}</div>"
            <div className="text-sm text-gray-400>{service.period}</div>
        </div>
        {/* Title & Tagline */}
        <h3 className=text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>
          {service.name}
        </h3>'
        <p className=text-gray-300 text-sm mb-4 leading-relaxed>        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {service.name}
        </h3>
        <p className=text-gray-300 text-sm mb-4 leading-relaxed">
        </p>
        {/* Description */}
          {service.description}
        </p>
        {/* Key Metrics */}

            <div className='text-purple-400 text-lg font-bold'>
              {service.rating}
            </div>
            <div className=text-xs text-gray-400'>Rating</div>          </div>
        </div>
        {/* Features Preview */}'
        <div className=mb-6>'
          <h4 className='text-sm font-semibold text-white mb-3 flex items-center gap-2>"
            <Zap className='w-4 h-4 text-yellow-400' />        <div className=grid grid-cols-2 gap-4 mb-6>"
        <div className="grid grid-cols-2 gap-4 mb-6>
          <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
            <div className=text-cyan-400 text-lg font-bold">{service.customers}+</div>"
            <div className=text-xs text-gray-400>Customers</div>

            whileHover=hover>;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            {service && service.icon}
          </motion && motion.div>;
'
          <div className='text-right>;
            <div className='text-2xl font-bold text-white'>{service && service.price}</div>;
            <div className=text-sm text-gray-400'>{service && service.period}</div>          </div>;
        </div>;

        {/* Title & Tagline */}'
        <h3 className=text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300>;
          {service && service.name}
        </h3>;'
        <p className='text-gray-300 text-sm mb-4 leading-relaxed>          {service && service.tagline}
        </p>;

        {/* Description */}
        <p className='text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3'>          {service && service.description}
        </p>;

        {/* Key Metrics */}"
          <div className="text-right>;
            <div className="text-2xl font-bold text-white">{service && service.price}</div>;
            <div className=text-sm text-gray-400">{service && service.period}</div>;
        </div>;

        {/* Title & Tagline */}
        <h3 className=text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>;
          {service && service.name}
        </h3>;'"
        <p className=text-gray-300 text-sm mb-4 leading-relaxed>        <h3 className=text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300>;
          {service && service.name}
        </h3>;"
        <p className="text-gray-300 text-sm mb-4 leading-relaxed>;
        </p>;

        {/* Description */}'
        <p className='text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3>        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">;
          {service && service.description}
        </p>;


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            {service.setupTime}
origin/cursor/automate-test-improve-and-merge-code-2533
          </div>
        </div>
          </div>;
        </div>;



        <div className=flex gap-3'>



          <div className=text-xs text-gray-500 text-center>;
            Contact: {service && service.contactInfo.email}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          </div>;
        </div>;
      </div>;

=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      {/* Hover Effect Border */}
}
}


=======
export default EnhancedServiceCard;    </motion.div>

  )
}
export default EnhancedServiceCard;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
