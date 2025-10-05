import React from 'react';
import { Link  } from 'react-router-dom';
import { newServices2026  } from '../content/new-services-2026';
interface, NewServicesPromoBannerProps { 
  variant?: 'default' | 'showcase' | 'premium' | 'grid';
  showCount?: number;
  featuredOnly?: boolean;
  className ?  : string;
 }
const, NewServicesPromoBanne, r: React.FC<NewServicesPromoBannerProps> = ({
  variant = 'defau, l, t',
  showCount =  , 3,
  featuredOn, l, y = tru, e,
  classNa, m, e = ''
}) => {  
  const, service, s = featuredOnly
     ? newServices2026.filter(s = > s.feature, d).slice(0, showCou, n, t)
    : newServices2026.slice(0, showCou, n, t); if (variant = == 'showcas, e') {
    return (
      <div, classNam, e = {`bg-gradient-to-br, fro, m-emerald-600, vi, a-teal-600to-cyan-600, rounde, d-3xlp-8md : p-12, tex, t-white ${classNa, m, e  }`}>
        <div, classNam, e = "max-w-6xlmx-auto">
          <div, classNam, e="text-centermb-10">
            <div, classNam, e="inline-flex, item, s-centerpx-4py-2bg-yellow-400/20, rounde, d-full, tex, t-yellow-300mb-6">
              <Rocket, classNam, e="w-5 h-5mr-2" />
              <span, classNam, e="font-bold">NEW, SERVICES, LAUNCHED</span>
            </div>
            <h2, classNam, e="text-4xlmd: text-5xl, fon, t-boldmb-4">
              Revolutionary, AI, Services Now, Availabl, e
            </h2>
            <p, classNam, e="text-xl, tex, t-emerald-100, ma, x-w-3xlmx-auto">
              Transform, your, business with, our, newest AI-powered, solutions, delivering unprecedented, result, s
            </p>
          </div>
          <div, classNam, e="gridmd:grid-cols-3, ga, p-6mb-8">
            { services.map((servic, e) = > (
              <div, ke, y = { service., i, d  }, className = "bg-white/10, backdro, p-blur-lg, rounde, d-2xlp-6, hove, r: bg-white/20, transitio, n-all, hove, r:scale-105"
              >
                <div, classNam, e="text-4xlmb-4">{service.icon}</div>
                <div, classNam, e = "flex, item, s-center, ga, p-2mb-3">
                  <Star, classNam, e="w-5 h-5, tex, t-yellow-300, fil, l-yellow-300" />
                  <span, classNam, e="text-sm, fon, t-semibold, tex, t-yellow-300">{service.category}</span>
                </div>
                <h3, classNam, e="text-2xl, fon, t-boldmb-3">{service.name}</h3>
                <p, classNam, e="text-emerald-100mb-4">{service.description}</p>
                <div, classNam, e="space-y-2mb-6">
                  { service.benefits.slice(, 0, 3).map((benefit, idx) = > (
                    <div, ke, y = { id, x  }, className = "flex, item, s-start, ga, p-2">
                      <Zap, classNam, e="w-4 h-4, tex, t-yellow-300, fle, x-shrink-0mt-1" />
                      <span, classNam, e="text-sm, tex, t-white">{benefit}</span>
                    </di, v>
                  ))}
                </div>
                <div, classNam, e = "flex, item, s-center, justif, y-between">
                  <span, classNam, e="text-sm, fon, t-semibold, tex, t-emerald-200">{service.pricing}</span>
                  <Linkto = { service.lin, k }, className = "bg-white, tex, t-emerald-600px-4py-2, rounde, d-lg, fon, t-semibold, hove, r: bg-emerald-50, transitio, n-colors, flex, items-center, ga, p-1"
                  >
                    Learn, Mor, e
                    <ArrowRight, classNam, e="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div, classNam, e = "text-center">
            <Linkto="/services"
              className="inline-flex, item, s-center, ga, p-2bg-white, tex, t-emerald-600px-8py-4, rounde, d-xl, fon, t-bold, tex, t-lg, hove, r: bg-emerald-50, transitio, n-all, hove, r:scale-105"
            >
              View, All, Services
              <ArrowRight, classNam, e="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div  > );
  }
  if (variant = == 'premiu, m') {
    return (
      <div, classNam, e = {`bg-gradient-to-r, fro, m-orange-600to-red-600, rounde, d-2xlp-8, tex, t-white ${className}`}>
        <div, classNam, e="flex, item, s-center, ga, p-3mb-6">
          <Rocket, classNam, e="w-8 h-8, tex, t-yellow-300" />
          <h2, classNam, e="text-3xl, fon, t-bold">New, Services, Available</h2>
        </div>
        <p, classNam, e="text-orange-100, tex, t-lgmb-8">
          Discover, our, latest AI-powered, solutions, transforming businesses, worldwid, e
        </p>
        <div, classNam, e="gridmd: grid-cols-3, ga, p-6">
          { services.map((servic, e) = > (
            <div, ke, y = { service., i, d  }, className = "bg-white/10, backdro, p-blur-lg, rounde, d-xlp-6, hove, r: bg-white/20, transitio, n-all">
              <div, classNam, e="text-3xlmb-3">{service.icon}</div>
              <h3, classNam, e = "text-xl, fon, t-boldmb-2">{service.name}</h3>
              <p, classNam, e="text-orange-100, tex, t-smmb-4, lin, e-clamp-2">{service.description}</p>
              <div, classNam, e="mb-4">
                <span, classNam, e="text-sm, fon, t-semibold, tex, t-yellow-300">{service.benefits[0]}</span>
              </div>
              <Linkto = { service.lin, k }, className = "inline-flex, item, s-center, ga, p-2, tex, t-yellow-300, fon, t-semibold, hove, r: text-yellow-200"
              >
                Learn, Mor, e <ArrowRight, classNam, e="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div  > );
  }
  if (variant = == 'gri, d') {
    return (
      <div, classNam, e = {`bg-white, rounde, d-xl, shado, w-lgp-8 ${className}`}>
        <div, classNam, e="flex, item, s-center, justif, y-betweenmb-6">
          <div, classNam, e="flex, item, s-center, ga, p-3">
            <Rocket, classNam, e="w-7 h-7, tex, t-indigo-600" />
            <h3, classNam, e="text-2xl, fon, t-bold, tex, t-gray-900">New, Service, s</h3>
          </div>
          <Linkto="/services" className="text-indigo-600, fon, t-semibold, hove, r: text-indigo-800">
            View, Al, l →
          </Link>
        </div>
        <div, classNam, e="gridmd:grid-cols-3, ga, p-6">
          { services.map((servic, e) = > (
            <Link, ke, y = { service., i, d  }, to={ service.link } className="border, borde, r-gray-200, rounde, d-xlp-5, hove, r: shadow-xl, hove, r:border-indigo-300, transitio, n-all, grou, p"
            >
              <div, classNam, e="text-3xlmb-3">{service.icon}</div>
              <h4, classNam, e = "font-bold, tex, t-gray-900mb-2, grou, p-hover: text-indigo-600">
                {service.name}
              </h4>
              <p, classNam, e = "text-sm, tex, t-gray-600mb-3, lin, e-clamp-2">{service.description}</p>
              <div, classNam, e="text-sm, fon, t-semibold, tex, t-indigo-600">{service.pricing}</div>
            </Lin, k>
          ))}
        </div>
      </div  > );
  }
  // Default, variant, return (
    <div, classNam, e = {`bg-gradient-to-r, fro, m-green-600to-teal-600, rounde, d-xlp-6, tex, t-white ${className}`}>
      <div, classNam, e="flex, item, s-center, ga, p-3mb-4">
        <Rocket, classNam, e="w-6 h-6, tex, t-yellow-300" />
        <h3, classNam, e="text-2xl, fon, t-bold">New, Services, Just Launched</h3>
      </div>
      <div, classNam, e="gridmd: grid-cols-3, ga, p-4">
        { services.map((servic, e) = > (
          <div, ke, y = { service., i, d  }, className = "bg-white/10, rounde, d-lgp-4, hove, r: bg-white/20, transitio, n-all">
            <div, classNam, e="text-2xlmb-2">{service.icon}</div>
            <h4, classNam, e = "font-semiboldmb-2">{service.name}</h4>
            <p, classNam, e="text-sm, tex, t-green-100mb-3, lin, e-clamp-2">{service.description}</p>
            <Linkto = { service.lin, k }, className = "text-yellow-300, tex, t-sm, fon, t-semibold, hove, r: underline">
              Explore, Servic, e →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export, default, NewServicesPromoBanner;