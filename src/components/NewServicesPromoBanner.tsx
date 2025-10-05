import React from 'react';
import { Link } from 'react-router-dom';
import { newServices2026 } from '../content/new-services-2026';
interfaceNewServicesPromoBannerProps { 
  variant?: 'default' | 'showcase' | 'premium' | 'grid';
  showCount?: number;
  featuredOnly?: boolean;
  className ?  : string;
 }
constNewServicesPromoBanner: React.FC<NewServicesPromoBannerProps> = ({
  variant = 'default'
  showCount =  3
  featuredOnly = true
  className = ''
}) => {  
  constservices = featuredOnly
     ? newServices2026.filter(s = > s.featured).slice(0showCount)
    : newServices2026.slice(0showCount); if (variant = == 'showcase') {
    return (
      <divclassName = {`bg-gradient-to-brfrom-emerald-600via-teal-600to-cyan-600rounded-3xlp-8md : p-12text-white ${className  }`}>
        <divclassName = "max-w-6xlmx-auto">
          <divclassName="text-centermb-10">
            <divclassName="inline-flexitems-centerpx-4py-2bg-yellow-400/20rounded-fulltext-yellow-300mb-6">
              <RocketclassName="w-5 h-5mr-2" />
              <spanclassName="font-bold">NEWSERVICESLAUNCHED</span>
            </div>
            <h2className="text-4xlmd: text-5xlfont-boldmb-4">
              RevolutionaryAIServices NowAvailable
            </h2>
            <pclassName="text-xltext-emerald-100max-w-3xlmx-auto">
              Transformyourbusiness withournewest AI-poweredsolutionsdelivering unprecedentedresults
            </p>
          </div>
          <divclassName="gridmd:grid-cols-3gap-6mb-8">
            { services.map((service) = > (
              <divkey = { service.id  }className = "bg-white/10backdrop-blur-lgrounded-2xlp-6hover: bg-white/20transition-allhover:scale-105"
              >
                <divclassName="text-4xlmb-4">{service.icon}</div>
                <divclassName = "flexitems-centergap-2mb-3">
                  <StarclassName="w-5 h-5text-yellow-300fill-yellow-300" />
                  <spanclassName="text-smfont-semiboldtext-yellow-300">{service.category}</span>
                </div>
                <h3className="text-2xlfont-boldmb-3">{service.name}</h3>
                <pclassName="text-emerald-100mb-4">{service.description}</p>
                <divclassName="space-y-2mb-6">
                  { service.benefits.slice(03).map((benefitidx) = > (
                    <divkey = { idx  }className = "flexitems-startgap-2">
                      <ZapclassName="w-4 h-4text-yellow-300flex-shrink-0mt-1" />
                      <spanclassName="text-smtext-white">{benefit}</span>
                    </div>
                  ))}
                </div>
                <divclassName = "flexitems-centerjustify-between">
                  <spanclassName="text-smfont-semiboldtext-emerald-200">{service.pricing}</span>
                  <Linkto = { service.link }className = "bg-whitetext-emerald-600px-4py-2rounded-lgfont-semiboldhover: bg-emerald-50transition-colorsflexitems-centergap-1"
                  >
                    LearnMore
                    <ArrowRight,className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <divclassName = "text-center">
            <Linkto="/services"
              className="inline-flexitems-centergap-2bg-whitetext-emerald-600px-8py-4rounded-xlfont-boldtext-lghover: bg-emerald-50transition-allhover:scale-105"
            >
              ViewAllServices
              <ArrowRight,className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div  > );
  }
  if (variant = == 'premium') {
    return (
      <divclassName = {`bg-gradient-to-rfrom-orange-600to-red-600rounded-2xlp-8text-white ${className}`}>
        <divclassName="flexitems-centergap-3mb-6">
          <RocketclassName="w-8 h-8text-yellow-300" />
          <h2className="text-3xlfont-bold">NewServicesAvailable</h2>
        </div>
        <pclassName="text-orange-100text-lgmb-8">
          Discoverourlatest AI-poweredsolutionstransforming businessesworldwide
        </p>
        <divclassName="gridmd: grid-cols-3gap-6">
          { services.map((service) = > (
            <divkey = { service.id  }className = "bg-white/10backdrop-blur-lgrounded-xlp-6hover: bg-white/20transition-all">
              <divclassName="text-3xlmb-3">{service.icon}</div>
              <h3className = "text-xlfont-boldmb-2">{service.name}</h3>
              <pclassName="text-orange-100text-smmb-4line-clamp-2">{service.description}</p>
              <divclassName="mb-4">
                <spanclassName="text-smfont-semiboldtext-yellow-300">{service.benefits[0]}</span>
              </div>
              <Linkto = { service.link }className = "inline-flexitems-centergap-2text-yellow-300font-semiboldhover: text-yellow-200"
              >
                LearnMore <ArrowRight,className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div  > );
  }
  if (variant = == 'grid') {
    return (
      <divclassName = {`bg-whiterounded-xlshadow-lgp-8 ${className}`}>
        <divclassName="flexitems-centerjustify-betweenmb-6">
          <divclassName="flexitems-centergap-3">
            <RocketclassName="w-7 h-7text-indigo-600" />
            <h3className="text-2xlfont-boldtext-gray-900">NewServices</h3>
          </div>
          <Linkto="/services" className="text-indigo-600font-semiboldhover: text-indigo-800">
            ViewAll →
          </Link>
        </div>
        <divclassName="gridmd:grid-cols-3gap-6">
          { services.map((service) = > (
            <Linkkey = { service.id  }to={ service.link } className="borderborder-gray-200rounded-xlp-5hover: shadow-xlhover:border-indigo-300transition-allgroup"
            >
              <divclassName="text-3xlmb-3">{service.icon}</div>
              <h4className = "font-boldtext-gray-900mb-2group-hover: text-indigo-600">
                {service.name}
              </h4>
              <pclassName = "text-smtext-gray-600mb-3line-clamp-2">{service.description}</p>
              <divclassName="text-smfont-semiboldtext-indigo-600">{service.pricing}</div>
            </Link>
          ))}
        </div>
      </div  > );
  }
  // Defaultvariantreturn (
    <divclassName = {`bg-gradient-to-rfrom-green-600to-teal-600rounded-xlp-6text-white ${className}`}>
      <divclassName="flexitems-centergap-3mb-4">
        <RocketclassName="w-6 h-6text-yellow-300" />
        <h3className="text-2xlfont-bold">NewServicesJust Launched</h3>
      </div>
      <divclassName="gridmd: grid-cols-3gap-4">
        { services.map((service) = > (
          <divkey = { service.id  }className = "bg-white/10rounded-lgp-4hover: bg-white/20transition-all">
            <divclassName="text-2xlmb-2">{service.icon}</div>
            <h4className = "font-semiboldmb-2">{service.name}</h4>
            <pclassName="text-smtext-green-100mb-3line-clamp-2">{service.description}</p>
            <Linkto = { service.link }className = "text-yellow-300text-smfont-semiboldhover: underline">
              ExploreService →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
exportdefaultNewServicesPromoBanner;