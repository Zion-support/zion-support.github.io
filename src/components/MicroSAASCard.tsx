import { CheckCircle, Star, ArrowRight, Check } from 'lucide-react';
'use client';
import {CheckCircle, Star, ArrowRight} from 'lucide-react';
import React from 'react';

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
      <divclassName="absolute -top-3left-1/2transform-translate-x-1/2"><spanclassName="bg-gradient-to-r from-cyan-500to-blue-600text-white px-4 py-1rounded-fulltext-smfont-medium"></ className="bg-gradient-to-r from-cyan-500to-blue-600text-white px-4 py-1rounded-fulltext-smfont-medium">Most Popular
        </spa></di>)}
      
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
          >Get Started
          <ArrowRightclassName="w-4h-4ml-2" /></a><pclassName="text-xstext-gray-400mt-2text-center">{service.contactInfo}</p></di></di></di>
  );
};

export default MicroSAASCard