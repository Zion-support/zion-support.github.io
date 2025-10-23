'use client'
import React from 'react'
import { CheckCircle, Star, ArrowRight } from 'lucide-react';
import { CheckCircle, Star, ArrowRight, Check } from 'lucide-react';
'use client';
import {CheckCircle, Star, ArrowRight} from 'lucide-react';
import React from 'react';

interface MicroSAASCardProps {
  service: {
    title: string;
    description: string;
    icon: string;
    price: string;
    features: string[]
    benefits: string[]
    marketPrice?: string;
    category: string;
    technologies: string[]
    contactInfo: string;
    link?: string;
    popular?: boolean;
  }
}

const MicroSAASCard: React.FC<MicroSAASCardProps> = ({ service }) => {
  return (
    <div className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
      {service.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular</span>
        </div>
      )}

      <div className="text-center mb-4">
        <div className="text-4xl mb-3">{service.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
          {service.marketPrice && (
            <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
          )}
        </div>
        <div className="text-xs text-gray-400 mb-4">
          <span className="bg-gray-800 px-2 py-1 rounded">{service.category}</span>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-center text-xs text-gray-300">
                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-center text-xs text-gray-300">
                <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-2">Technologies:</div>
          <div className="flex flex-wrap gap-1">
            {service.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="pt-4">
          <a;
            href={service.link || 'mailto:kleber@ziontechgroup.com'}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center text-sm font-medium"
          >
            Get Started;
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          <p className="text-xs text-gray-400 mt-2 text-center">{service.contactInfo}</p>
        </div>
      </div>
    </div>
  )
}
interface MicroSAASCardProp s {service: {
    title: stringdescription: stringicon: stringprice: stringfeatures: string[];
    benefits: string[];
    marketPrice?: stringcategory: stringtechnologies: string[];
    contactInfo: string;
    link?: string;
    popular?: boolean;
 };
}

constMicroSAASCard: React.FC<MicroSAASCardProp s>= ({service}) => {return (
  <divclassName={`cyber-card p-6 hover:scale-105transition-all duration-300${service.popular ? 'ring-2 ring-cyan-40 0':''}`}>{service.popular && (
      <divclassName="absolute -top-3left-1/2transform-translate-x-1/2"><spanclassName="bg-gradient-to-r from-cyan-500to-blue-600text-white px-4 py-1rounded-fulltext-smfont-medium"></ className="bg-gradient-to-r from-cyan-500to-blue-600text-white px-4 py-1rounded-fulltext-smfont-medium">Most Popular</spa></di>)}
      
    <divclassName="text-centermb-4"><divclassName="text-4xlmb-3">{service.icon}</di><h3className="text-xl font-boldtext-whitemb-2">{service.title}</h><pclassName="text-gray-300text-smmb-4">{service.description}</p><divclassName="flex items-center justify-centerspace-x-2mb-4"><spanclassName="text-2 xl font-boldtext-cyan-400">{service.price}</spa>{service.marketPrice && (
          <spanclassName="text-smtext-gray-500line-through">{service.marketPrice}</spa>)}
      </di><divclassName="text-xs text-gray-400mb-4"><spanclassName="bg-gray-800px-2py-1rounded">{service.category}</spa></di></di><divclassName="space-y-4"><di v><h4className="text-sm font-semiboldtext-whitemb-2">KeyFeatures:</h><ulclassName="space-y-1">{service.features.slice(0 4).map((featureindex) => (
           <likey={index}className="flex items-center text-xstext-gray-300"><CheckCircleclassName="w-3 h-3text-green-400mr-2flex-shrink-0" />{feature}
            </l>))}
        </u></di><di v><h4className="text-sm font-semiboldtext-whitemb-2">Benefits:</h><ulclassName="space-y-1">{service.benefits.slice(0 3).map((benefitindex) => (
           <likey={index}className="flex items-center text-xstext-gray-300"><StarclassName="w-3 h-3text-yellow-400mr-2flex-shrink-0" />{benefit}
            </l>))}
        </u></di><divclassName="pt-4 border-tborder-gray-700"><divclassName="text-xs text-gray-400mb-2">Technologies:</di><divclassName="flexflex-wrapgap-1">{service.technologies.slice(0 3).map((techindex) => (
            <key={index}className="bg-gray-800text-gray-300px-2 py-1roundedtext-xs"></ key={index}className="bg-gray-800text-gray-300px-2 py-1roundedtext-xs">{tech}
            </spa>))}
        </di></di><divclassName="pt-4"><ahref={service.link ||'mailto:kleber@ziontechgroup.com'}
           className="w-full bg-gradient-to-r from-cyan-50 0 to-blue-600text-white py-2 px-4 rounded-lghover:from-cyan-600 hover:to-blue-700transition-all duration-300flex items-center justify-centertext-smfont-medium"
          >Get Started;
          <ArrowRightclassName="w-4h-4ml-2" /></a><pclassName="text-xstext-gray-400mt-2text-center">{service.contactInfo}</p></di></di></di>
  );
};

export default MicroSAASCard;